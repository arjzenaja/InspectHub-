import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Try to find by primary key first
  let item = await prisma.peralatan.findUnique({
    where: { id },
    include: { lokasiRelation: true },
  });

  // If not found, try to find by kodeId (for QR code scans)
  if (!item) {
    item = await prisma.peralatan.findUnique({
      where: { kodeId: id },
      include: { lokasiRelation: true },
    });
  }

  if (!item) {
    return NextResponse.json({ error: "Peralatan tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json({
    id: item.id,
    kodeId: item.kodeId,
    nama: item.nama,
    jenis: item.jenis,
    lat: item.lat ?? null,
    lng: item.lng ?? null,
    lokasi: item.lokasiRelation?.nama ?? item.lokasi,
    kota: item.lokasiRelation?.kota ?? null,
    lokasiId: item.lokasiRelation?.id ?? item.lokasiId,
    noRegister: item.noRegister,
    fotoUrl: item.fotoUrl,
    kapasitas: item.kapasitas,
    tinggiDimensi: item.tinggiDimensi,
    jenisKabel: item.jenisKabel,
    masaBerlaku: item.masaBerlaku?.toISOString() ?? null,
    status: item.status,
    createdAt: item.createdAt.toISOString(),
  });
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  try {
    // Try to find by primary key first, then by kodeId
    let existingItem = await prisma.peralatan.findUnique({ where: { id } });
    if (!existingItem) {
      existingItem = await prisma.peralatan.findUnique({ where: { kodeId: id } });
    }
    
    if (!existingItem) {
      return NextResponse.json({ error: "Peralatan tidak ditemukan" }, { status: 404 });
    }

    const body = await request.json();
    const { nama, jenis, lokasi, lokasiId, lat, lng, noRegister, fotoUrl, kapasitas, tinggiDimensi, jenisKabel, masaBerlaku, status } = body;

    const matchedLokasi = lokasiId
      ? await prisma.lokasi.findUnique({ where: { id: lokasiId } })
      : await prisma.lokasi.findFirst({ where: { nama: lokasi } });

    const updated = await prisma.peralatan.update({
      where: { id: existingItem.id },
      data: {
        nama,
        jenis,
        lokasi: matchedLokasi?.nama ?? lokasi,
        lat: lat ?? null,
        lng: lng ?? null,
        lokasiId: matchedLokasi?.id ?? lokasiId ?? null,
        noRegister,
        fotoUrl,
        kapasitas,
        tinggiDimensi,
        jenisKabel,
        masaBerlaku: masaBerlaku ? new Date(masaBerlaku) : null,
        status,
      },
      include: { lokasiRelation: true },
    });

    return NextResponse.json({
      id: updated.id,
      kodeId: updated.kodeId,
      nama: updated.nama,
      jenis: updated.jenis,
      lokasi: updated.lokasiRelation?.nama ?? updated.lokasi,
      kota: updated.lokasiRelation?.kota ?? null,
      // kota: updated.lokasiRelation?.kota ?? null,
      lokasiId: updated.lokasiRelation?.id ?? updated.lokasiId,
      noRegister: updated.noRegister,
      fotoUrl: updated.fotoUrl,
      kapasitas: updated.kapasitas,
      tinggiDimensi: updated.tinggiDimensi,
      jenisKabel: updated.jenisKabel,
      lat: updated.lat ?? null,
      lng: updated.lng ?? null,
      masaBerlaku: updated.masaBerlaku?.toISOString() ?? null,
      status: updated.status,
      createdAt: updated.createdAt.toISOString(),
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  // Try to find by primary key first, then by kodeId
  let item = await prisma.peralatan.findUnique({ where: { id } });
  if (!item) {
    item = await prisma.peralatan.findUnique({ where: { kodeId: id } });
  }

  if (!item) {
    return NextResponse.json({ error: "Peralatan tidak ditemukan" }, { status: 404 });
  }

  await prisma.peralatan.delete({ where: { id: item.id } });
  return new NextResponse(null, { status: 204 });
}
