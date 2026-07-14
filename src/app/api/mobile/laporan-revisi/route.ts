import { prisma } from "@/lib/prisma"
import { withAuth } from "@/middleware/auth"
import { successResponse, errorResponse } from "@/lib/apiResponse"

export const GET = withAuth(async (req, user) => {
  try {
    const teknisi = await prisma.teknisi.findFirst({
      where: { userId: user.id }
    })
    if (!teknisi) return errorResponse("Teknisi tidak ditemukan", 404)

    const laporanRevisi = await prisma.laporan.findMany({
      where: {
        teknisiId: teknisi.id,
        status: "revision",
      },
      include: {
        peralatan: { select: { kodeId: true, nama: true } },
        jadwal: { select: { id: true, waktuMulai: true, waktuSelesai: true } },
      },
      orderBy: { updatedAt: "desc" },
    })

    return successResponse(laporanRevisi)
  } catch (error: any) {
    console.error("GET /api/mobile/laporan-revisi error:", error)
    return errorResponse(error.message, 500)
  }
}, ["teknisi"])
