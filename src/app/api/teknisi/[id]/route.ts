import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    const body = await request.json();
    const { nama, email, noHp, divisi, status, rating } = body;

    const updated = await prisma.teknisi.update({
      where: { id },
      data: {
        nama,
        email,
        noHp,
        divisi,
        status,
        rating: rating ? parseFloat(rating) : undefined,
      },
    });

    return NextResponse.json({
      id: updated.id,
      nama: updated.nama,
      idKaryawan: updated.idKaryawan,
      email: updated.email,
      noHp: updated.noHp,
      divisi: updated.divisi,
      avatarUrl: updated.avatarUrl,
      status: updated.status,
      inspeksiSelesai: updated.totalInspeksi,
      rating: updated.rating,
      createdAt: updated.createdAt.toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await prisma.teknisi.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
