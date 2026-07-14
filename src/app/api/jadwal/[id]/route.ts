import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/middleware/auth";
import { successResponse, errorResponse } from "@/lib/apiResponse";

export const PATCH = withAuth(async (req: NextRequest, user, { params }) => {
  try {
    const body = await req.json();
    const { status, catatan } = body;

    // Status yang boleh diubah Admin secara manual
    // TIDAK termasuk "selesai" dan "pending_approval" - hanya bisa via approval laporan
    const adminAllowed = ["pending", "progress", "tertunda"];
    
    if (!adminAllowed.includes(status)) {
      return errorResponse(
        `Status '${status}' tidak bisa diubah manual. ` +
        `Status SELESAI hanya bisa dicapai melalui persetujuan laporan.`,
        400
      );
    }

    const existing = await prisma.jadwal.findUnique({
      where: { id: params.id },
      include: { teknisi: { include: { user: true } }, peralatan: true },
    });

    if (!existing) return errorResponse("Jadwal tidak ditemukan", 404);

    const updated = await prisma.jadwal.update({
      where: { id: params.id },
      data: {
        status,
        ...(catatan ? { catatan } : {}),
        updatedAt: new Date(),
      },
      include: {
        teknisi: { select: { nama: true, avatarUrl: true } },
        peralatan: { select: { nama: true, kodeId: true } },
      },
    });

    if (existing.teknisi?.user?.id) {
      const messages: Record<string, string> = {
        progress: `Jadwal inspeksi ${existing.peralatan.nama} telah dimulai.`,
        tertunda: `Jadwal inspeksi ${existing.peralatan.nama} ditandai tertunda.`,
        pending: `Jadwal inspeksi ${existing.peralatan.nama} dikembalikan ke pending.`,
      };
      const notifMessage = messages[status];

      if (notifMessage && "notifikasi" in prisma) {
        await (prisma as any).notifikasi.create({
          data: {
            userId: existing.teknisi.user.id,
            type: "inspection",
            title: "Update Status Jadwal",
            message: notifMessage,
            link: `/jadwal/${params.id}`,
          },
        }).catch((err: any) => console.warn("Notif error (non-fatal):", err));
      }
    }

    return successResponse(updated, `Status jadwal berhasil diubah ke '${status}'`);
  } catch (error: any) {
    console.error("PATCH /api/jadwal/[id] error:", error);
    return errorResponse(`Gagal mengubah status jadwal: ${error.message}`, 500);
  }
}, ["admin", "manager"]);

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const body = await request.json();
    const { peralatanId, teknisiId, tanggal, waktuMulai, waktuSelesai, status, catatan } = body;

    const updated = await prisma.jadwal.update({
      where: { id },
      data: {
        peralatanId,
        teknisiId,
        tanggal: tanggal ? new Date(tanggal) : undefined,
        waktuMulai,
        waktuSelesai,
        status,
        catatan,
      },
      include: { peralatan: true, teknisi: true },
    });

    return NextResponse.json({
      ...updated,
      tanggal: updated.tanggal.toISOString(),
      peralatan: { id: updated.peralatan.id, kodeId: updated.peralatan.kodeId, nama: updated.peralatan.nama, lokasi: updated.peralatan.lokasi },
      teknisi: { id: updated.teknisi.id, nama: updated.teknisi.nama, avatarUrl: updated.teknisi.avatarUrl, divisi: updated.teknisi.divisi },
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await prisma.jadwal.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}
