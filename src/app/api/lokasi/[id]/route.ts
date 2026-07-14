import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    const body = await request.json();
    const { kode, nama, kota, zona, deskripsi, lat, lng } = body;

    const updated = await prisma.lokasi.update({
      where: { id },
      data: {
        kode,
        nama,
        kota,
        zona,
        deskripsi,
        lat: lat ? parseFloat(lat) : null,
        lng: lng ? parseFloat(lng) : null,
      },
    });

    return NextResponse.json(updated);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  await prisma.lokasi.delete({ where: { id } });
  return new NextResponse(null, { status: 204 });
}
