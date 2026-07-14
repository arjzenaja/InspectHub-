import { NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"
import { withAuth } from "@/middleware/auth"
import { successResponse, errorResponse } from "@/lib/apiResponse"

export const POST = withAuth(async (req: NextRequest, user, { params }) => {
  try {
    const { id } = await params

    const result = await prisma.$transaction(async (tx) => {
      // Update laporan → approved
      const laporan = await tx.laporan.update({
        where: { id },
        data: {
          status: "approved",
          approvedBy: user.name,
          approvedAt: new Date(),
        },
        include: { jadwal: true, teknisi: { include: { user: true } } }
      })

      // Update jadwal → SELESAI (hanya dari sini!)
      await tx.jadwal.update({
        where: { id: laporan.jadwalId! },
        data: { status: "selesai" },
      })

      // Timeline
      await tx.laporanTimeline.create({
        data: {
          laporanId: laporan.id,
          type: "approved",
          description: `Laporan disetujui oleh ${user.name}`,
          createdBy: user.id,
        }
      })

      return laporan
    })

    // Notifikasi ke teknisi
    if (result.teknisi?.user?.id) {
      await (prisma as any).notifikasi.create({
        data: {
          userId: result.teknisi.user.id,
          type: "report",
          title: "Laporan Disetujui ✅",
          message: `Laporan ${result.kodeId} telah disetujui oleh Admin.`,
        }
      }).catch(() => {})
    }

    return successResponse(result, "Laporan berhasil disetujui")
  } catch (error: any) {
    console.error("POST /api/laporan/[id]/approve error:", error)
    return errorResponse(error.message, 500)
  }
}, ["admin", "manager"])
