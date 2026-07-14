import { prisma } from "@/lib/prisma";
import { withAuth } from "@/middleware/auth";
import { successResponse, errorResponse, paginatedResponse } from "@/lib/apiResponse";

export const GET = withAuth(async (req) => {
  const { searchParams } = new URL(req.url);
  const search   = searchParams.get("search")   ?? "";
  const teknisi  = searchParams.get("teknisi")  ?? "all";
  const status   = searchParams.get("status")   ?? "all";
  const dateFrom = searchParams.get("dateFrom") ?? "";
  const dateTo   = searchParams.get("dateTo")   ?? "";
  const page     = parseInt(searchParams.get("page")  ?? "1");
  const limit    = parseInt(searchParams.get("limit") ?? "10");

  const fallbackPage = Number.isFinite(page) && page > 0 ? page : 1;
  const fallbackLimit = Number.isFinite(limit) && limit > 0 ? limit : 10;

  try {

    const where: any = {}
    if (search) {
      where.OR = [
        { kodeId:    { contains: search, mode: "insensitive" } },
        { peralatan: { nama: { contains: search, mode: "insensitive" } } },
        { peralatan: { kodeId: { contains: search, mode: "insensitive" } } },
      ]
    }
    if (teknisi !== "all") where.teknisiId = teknisi
    if (status !== "all") where.status = status
    if (dateFrom || dateTo) {
      where.createdAt = {}
      if (dateFrom) where.createdAt.gte = new Date(dateFrom)
      if (dateTo) {
        const to = new Date(dateTo)
        to.setHours(23,59,59,999)
        where.createdAt.lte = to
      }
    }

    const [data, total] = await Promise.all([
      prisma.laporan.findMany({
        where,
        include: {
          teknisi:   { select: { nama: true, avatarUrl: true, idKaryawan: true } },
          peralatan: { select: { nama: true, kodeId: true, jenis: true, lokasi: true } },
          jadwal:    { select: { tanggal: true } },
        },
        orderBy: { createdAt: "desc" },
        skip:    (page - 1) * limit,
        take:    limit,
      }),
      prisma.laporan.count({ where }),
    ])

    return paginatedResponse(data, total, page, limit)
  } catch (error) {
    console.error("GET /api/laporan error:", error)
    const safePage = Number.isFinite(page) && page > 0 ? page : 1;
    const safeLimit = Number.isFinite(limit) && limit > 0 ? limit : 10;
    return paginatedResponse([], 0, safePage, safeLimit, "Tidak ada data laporan")
  }
}, ["admin", "manager"])

export const POST = withAuth(async (req, user) => {
  try {
    const body = await req.json()
    const { jadwalId: bodyJadwalId, peralatanId, teknisiId: bodyTeknisiId, checklist, pengukuran, catatan, fotoUrls, kesimpulan } = body

    // 1. Resolve teknisiId dari user yang login jika tidak disertakan di body
    let resolvedTeknisiId = bodyTeknisiId
    if (!resolvedTeknisiId && user) {
      const teknisi = await prisma.teknisi.findUnique({ where: { userId: user.id } })
      if (teknisi) resolvedTeknisiId = teknisi.id
    }

    if (!peralatanId || !resolvedTeknisiId || !checklist) {
      return errorResponse("Field wajib tidak lengkap", 400)
    }

    // 2. Resolve jadwalId: gunakan dari body, atau cari jadwal aktif, atau buat ad-hoc
    let resolvedJadwalId = bodyJadwalId
    if (!resolvedJadwalId) {
      const activeJadwal = await prisma.jadwal.findFirst({
        where: {
          peralatanId,
          teknisiId: resolvedTeknisiId,
          status: { in: ["pending", "progress", "in_progress", "proses", "revisi", "revision_needed"] },
        },
        orderBy: { tanggal: "asc" },
      })
      if (activeJadwal) resolvedJadwalId = activeJadwal.id
    }

    // 3. Pre-fetch data yang dibutuhkan sebelum transaksi (agar transaksi lebih singkat)
    let preExistingLaporan = resolvedJadwalId
      ? await prisma.laporan.findUnique({ where: { jadwalId: resolvedJadwalId } })
      : null

    const laporanCount = await prisma.laporan.count()
    const preKodeId = preExistingLaporan?.kodeId
      ?? `RPT-${new Date().getFullYear()}-${String(laporanCount + 1).padStart(3, "0")}`

    // Untuk ad-hoc jadwal, hitung count di luar transaksi
    let jadwalCount = 0
    if (!resolvedJadwalId) {
      jadwalCount = await prisma.jadwal.count()
    }

    const result = await prisma.$transaction(async (tx) => {
      let finalJadwalId = resolvedJadwalId

      // Jika tidak ada jadwal sama sekali, buat jadwal ad-hoc otomatis
      if (!finalJadwalId) {
        const now = new Date()
        const timeStr = now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", hour12: false })
        const adhocJadwal = await tx.jadwal.create({
          data: {
            kodeJadwal: `SCH-ADHOC-${now.getFullYear()}-${String(100 + jadwalCount).padStart(4, "0")}`,
            peralatanId,
            teknisiId: resolvedTeknisiId,
            tanggal: now,
            waktuMulai: timeStr,
            waktuSelesai: timeStr,
            status: "pending",
            catatan: "Jadwal ad-hoc otomatis dibuat via Mobile App",
          },
        })
        finalJadwalId = adhocJadwal.id
        // Re-check: laporan pasti belum ada untuk jadwal baru
        preExistingLaporan = null
      }

      // Gunakan data yang sudah di-fetch sebelum transaksi
      const existingLaporan = preExistingLaporan
      const kodeId = preKodeId

      let laporan

      if (existingLaporan) {
        // UPDATE laporan yang sudah ada (kasus revisi)
        laporan = await tx.laporan.update({
          where: { id: existingLaporan.id },
          data: {
            checklist: JSON.stringify(checklist),
            pengukuran: pengukuran ? JSON.stringify(pengukuran) : null,
            catatan: catatan ?? null,
            fotoUrls: JSON.stringify(fotoUrls ?? []),
            kesimpulan: kesimpulan ?? null,
            status: "pending_approval",
            approvalNote: null,
            revisiCount: { increment: 1 },
          },
        })

        // Timeline: revisi dikirim
        await tx.laporanTimeline.create({
          data: {
            laporanId: laporan.id,
            type: "revised",
            description: `Laporan revisi ke-${laporan.revisiCount} telah dikirim ulang`,
            createdBy: user.id,
          }
        })
      } else {
        // CREATE laporan baru
        laporan = await tx.laporan.create({
          data: {
            kodeId,
            jadwalId: finalJadwalId,
            peralatanId,
            teknisiId: resolvedTeknisiId,
            checklist: JSON.stringify(checklist),
            pengukuran: pengukuran ? JSON.stringify(pengukuran) : null,
            catatan: catatan ?? null,
            fotoUrls: JSON.stringify(fotoUrls ?? []),
            kesimpulan: kesimpulan ?? null,
            status: "pending_approval",
          },
        })

        // Timeline: laporan dibuat
        await tx.laporanTimeline.create({
          data: {
            laporanId: laporan.id,
            type: "created",
            description: `Laporan dikirim dengan ${(fotoUrls ?? []).length} foto`,
            createdBy: user.id,
          }
        })
      }

      // Update jadwal status → pending_approval
      await tx.jadwal.update({
        where: { id: finalJadwalId },
        data: { status: "pending_approval" },
      })

      return laporan
    }, { timeout: 15000 })

    // Increment totalInspeksi teknisi di luar transaksi (tidak perlu atomic)
    if (!preExistingLaporan) {
      await prisma.teknisi.update({
        where: { id: resolvedTeknisiId },
        data: { totalInspeksi: { increment: 1 } },
      }).catch((e: any) => console.error("Failed to increment totalInspeksi:", e))
    }

    // Notifikasi ke semua Admin/Manager
    const admins = await prisma.user.findMany({
      where: { role: { in: ["admin", "manager"] }, isActive: true }
    })
    
    await Promise.all(admins.map(admin =>
      (prisma as any).notifikasi.create({
        data: {
          userId: admin.id,
          type: "report",
          title: result.revisiCount > 0 ? "Laporan Revisi Masuk" : "Laporan Baru Menunggu Persetujuan",
          message: `${result.kodeId} membutuhkan review Anda.`,
          link: `/laporan/${result.id}`,
        }
      }).catch(() => {})
    ))

    return successResponse(result, "Laporan berhasil dikirim", 201)
  } catch (error: any) {
    console.error("POST /api/laporan error:", error)
    return errorResponse(error.message, 500)
  }
}, ["teknisi", "admin"])
