import { NextRequest } from "next/server"
import { prisma } from "@/lib/prisma"
import { withAuth } from "@/middleware/auth"
import { successResponse, errorResponse } from "@/lib/apiResponse"

export const POST = withAuth(async (req: NextRequest, user, { params }) => {
  try {
    const { id } = await params
    const { note } = await req.json()

    if (!note?.trim()) {
      return errorResponse("Catatan revisi wajib diisi", 400)
    }

    const result = await prisma.$transaction(async (tx) => {
      const laporan = await tx.laporan.update({
        where: { id },
        data: {
          status: "revision",
          approvalNote: note.trim(),
        },
        include: { jadwal: true, teknisi: { include: { user: true } } }
      })

      // Update jadwal → revisi
      await tx.jadwal.update({
        where: { id: laporan.jadwalId! },
        data: { status: "revisi" },
      })

      // Timeline
      await tx.laporanTimeline.create({
        data: {
          laporanId: laporan.id,
          type: "revision_requested",
          description: `Revisi diminta: ${note}`,
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
          title: "Laporan Perlu Direvisi ⚠️",
          message: `Laporan ${result.kodeId} perlu direvisi: ${note}`,
          link: `/laporan/${result.id}`,
        }
      }).catch(() => {})
    }

    return successResponse(result, "Revisi berhasil diminta")
  } catch (error: any) {
    console.error("POST /api/laporan/[id]/revise error:", error)
    return errorResponse(error.message, 500)
  }
}, ["admin", "manager"])
