import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.trim() || "";
  const jenis = searchParams.get("jenis") || "all";
  const lokasi = searchParams.get("lokasi") || "all";
  const lokasiId = searchParams.get("lokasiId");
  const status = searchParams.get("status") || "all";
  const hasCoords = searchParams.get("hasCoords") || "false";

  const where: any = {};

  if (search) {
    where.OR = [
      { kodeId: { contains: search } },
      { nama: { contains: search } },
    ];
  }
  if (jenis !== "all") {
    where.jenis = jenis;
  }
  if (lokasi !== "all") {
    where.lokasi = lokasi;
  }
  // allow filtering by lokasiId (used by PeralatanLokasiModal)
  if (lokasiId) {
    where.lokasiId = lokasiId;
  }
  if (hasCoords === "true") {
    where.lat = { not: null };
    where.lng = { not: null };
  }
  if (status !== "all") {
    where.status = status;
  }

  const list = await prisma.peralatan.findMany({
    where,
    include: { lokasiRelation: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(
    list.map((item) => ({
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
    }))
  );
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { kodeId, nama, jenis, lokasi, lokasiId, lat, lng, noRegister, fotoUrl, kapasitas, tinggiDimensi, jenisKabel, masaBerlaku, status } = body;

    if (!kodeId || !nama || !jenis || (!lokasi && !lokasiId)) {
      return NextResponse.json({ error: "Field wajib: kodeId, nama, jenis, lokasi atau lokasiId" }, { status: 400 });
    }

    const matchedLokasi = lokasiId
      ? await prisma.lokasi.findUnique({ where: { id: lokasiId } })
      : await prisma.lokasi.findFirst({ where: { nama: lokasi } });
    const newPeralatan = await prisma.peralatan.create({
      data: {
        kodeId,
        nama,
        jenis,
        lokasi: matchedLokasi?.nama ?? lokasi,
        lokasiId: matchedLokasi?.id ?? lokasiId ?? null,
        lat: lat ?? null,
        lng: lng ?? null,
        noRegister,
        fotoUrl: fotoUrl || "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
        kapasitas,
        tinggiDimensi,
        jenisKabel,
        masaBerlaku: masaBerlaku ? new Date(masaBerlaku) : null,
        status: status || "aktif",
        qrCodeUrl: kodeId,
      },
      include: { lokasiRelation: true },
    });

    return NextResponse.json({
      id: newPeralatan.id,
      kodeId: newPeralatan.kodeId,
      nama: newPeralatan.nama,
      jenis: newPeralatan.jenis,
      lokasi: newPeralatan.lokasiRelation?.nama ?? newPeralatan.lokasi,
      lokasiId: newPeralatan.lokasiRelation?.id ?? newPeralatan.lokasiId,
      noRegister: newPeralatan.noRegister,
      fotoUrl: newPeralatan.fotoUrl,
      kapasitas: newPeralatan.kapasitas,
      tinggiDimensi: newPeralatan.tinggiDimensi,
      jenisKabel: newPeralatan.jenisKabel,
      lat: newPeralatan.lat ?? null,
      lng: newPeralatan.lng ?? null,
      masaBerlaku: newPeralatan.masaBerlaku?.toISOString() ?? null,
      status: newPeralatan.status,
      createdAt: newPeralatan.createdAt.toISOString(),
    }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
