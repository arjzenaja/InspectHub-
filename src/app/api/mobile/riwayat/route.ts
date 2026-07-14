import { withAuth } from "@/middleware/auth";
import { prisma } from "@/lib/prisma";
import { paginatedResponse, errorResponse } from "@/lib/apiResponse";

export const GET = withAuth(async (req, user) => {
  try {
    const teknisi = await prisma.teknisi.findFirst({ where: { userId: user.id } });
    if (!teknisi) return errorResponse("Teknisi tidak ditemukan", 404);

    const { searchParams } = new URL(req.url);
    const page  = parseInt(searchParams.get("page")  ?? "1");
    const limit = parseInt(searchParams.get("limit") ?? "20");

    const [laporan, total] = await Promise.all([
      prisma.laporan.findMany({
        where: { teknisiId: teknisi.id },
        include: {
          peralatan: {
            select: {
              id: true,
              kodeId: true,
              nama: true,
              fotoUrl: true,
              jenis: true,
              lokasi: true,
              lokasiRelation: { select: { nama: true } },
            },
          },
          teknisi: {
            select: {
              nama: true,
            },
          },
        },
        orderBy: { createdAt: "desc" },
        skip:    (page - 1) * limit,
        take:    limit,
      }),
      prisma.laporan.count({ where: { teknisiId: teknisi.id } }),
    ]);

    const transformed = laporan.map((l) => {
      let parsedHasilData = null;
      let parsedFotoUrls = null;

      if (l.checklist) {
        try {
          parsedHasilData = JSON.parse(l.checklist);
        } catch {
          parsedHasilData = l.checklist;
        }
      }

      if (l.fotoUrls) {
        try {
          parsedFotoUrls = JSON.parse(l.fotoUrls);
        } catch {
          parsedFotoUrls = l.fotoUrls;
        }
      }

      return {
        id:        l.id,
        kodeId:    l.kodeId,
        status:    l.status,
        kondisi:   l.kesimpulan ?? null,
        reportStatus: l.status,
        revisionReason: l.approvalNote || null,
        hasilData: parsedHasilData,
        fotoUrls:  parsedFotoUrls,
        createdAt: l.createdAt,
        tanggal:   l.createdAt,
        peralatan: {
          id:      l.peralatan.id,
          kodeId:  l.peralatan.kodeId,
          nama:    l.peralatan.nama,
          jenis:   l.peralatan.jenis || null,
          fotoUrl: l.peralatan.fotoUrl,
        },
        lokasi:   l.peralatan.lokasiRelation?.nama ?? l.peralatan.lokasi,
        teknisi: {
          nama: l.teknisi?.nama ?? null,
        },
      };
    });

    return paginatedResponse(transformed, total, page, limit);
  } catch (error) {
    console.error("GET /api/mobile/riwayat error:", error);
    return errorResponse("Gagal memuat riwayat", 500);
  }
}, ["teknisi"]);
