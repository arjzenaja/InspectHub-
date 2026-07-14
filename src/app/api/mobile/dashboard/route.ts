import { withAuth } from "@/middleware/auth";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/apiResponse";

export const GET = withAuth(async (req, user) => {
  try {
    const teknisi = await prisma.teknisi.findFirst({ where: { userId: user.id } });
    if (!teknisi) return errorResponse("Teknisi tidak ditemukan", 404);

    // Gunakan waktu lokal Indonesia (WIB = UTC+7)
    const now = new Date();
    const wibNow = new Date(now.getTime() + 7 * 60 * 60 * 1000);
    const today = new Date(Date.UTC(
      wibNow.getUTCFullYear(),
      wibNow.getUTCMonth(),
      wibNow.getUTCDate(),
      0, 0, 0, 0
    ));
    // Adjust back to UTC for DB comparison
    const todayStart = new Date(today.getTime() - 7 * 60 * 60 * 1000);
    const todayEnd = new Date(todayStart.getTime() + 24 * 60 * 60 * 1000);

    const [tugasHariIni, belumDikerjakan, sedangProgress, sudahSelesai, laporanRevisi, jadwalHariIni] = await Promise.all([
      // Tugas Hari Ini: jadwal hari ini dengan status PENDING saja
      prisma.jadwal.count({
        where: {
          teknisiId: teknisi.id,
          tanggal: { gte: todayStart, lt: todayEnd },
          status: "pending",
        }
      }),

      // Belum Dikerjakan: status pending, hari ini
      prisma.jadwal.count({
        where: {
          teknisiId: teknisi.id,
          tanggal: { gte: todayStart, lt: todayEnd },
          status: "pending",
        }
      }),

      // Progress: sedang dikerjakan ATAU laporan sudah dikirim tapi belum disetujui
      prisma.jadwal.count({
        where: {
          teknisiId: teknisi.id,
          status: { in: ["progress", "pending_approval", "revisi"] },
        }
      }),

      // Selesai: hanya yang sudah disetujui Admin
      prisma.jadwal.count({
        where: {
          teknisiId: teknisi.id,
          status: "selesai",
        }
      }),

      // Laporan yang perlu direvisi
      prisma.laporan.count({
        where: {
          teknisiId: teknisi.id,
          status: "revision",
        }
      }),

      // Jadwal Hari Ini: HANYA hari ini, EXCLUDE yang sudah selesai
      prisma.jadwal.findMany({
        where: {
          teknisiId: teknisi.id,
          tanggal: { gte: todayStart, lt: todayEnd },
          status: { notIn: ["selesai"] },
        },
        include: {
          peralatan: {
            select: {
              kodeId: true,
              nama: true,
              fotoUrl: true,
              jenis: true,
              lokasi: true,
              lokasiRelation: { select: { nama: true } },
            },
          },
        },
        orderBy: { waktuMulai: "asc" },
      }),
    ]);

    return successResponse({
      stats: {
        tugasHariIni,
        belumDikerjakan,
        progress: sedangProgress,
        selesai: sudahSelesai,
        laporanRevisi,
      },
      jadwalHariIni: jadwalHariIni.map((j) => ({
        id: j.id,
        kodeJadwal: j.kodeJadwal,
        status: j.status,
        waktuMulai: j.waktuMulai,
        waktuSelesai: j.waktuSelesai,
        peralatan: {
          kodeId: j.peralatan.kodeId,
          nama: j.peralatan.nama,
          jenis: j.peralatan.jenis || null,
          fotoUrl: j.peralatan.fotoUrl,
        },
        lokasi: j.peralatan.lokasiRelation?.nama ?? j.peralatan.lokasi ?? null,
      })),
    });
  } catch (error: any) {
    console.error("Mobile dashboard error:", error);
    return errorResponse(error.message || "Gagal memuat dashboard", 500);
  }
}, ["teknisi"]);
