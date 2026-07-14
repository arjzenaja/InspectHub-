import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const search = searchParams.get("search")?.trim() || "";
  const status = searchParams.get("status") || "all";

  const where: any = {};
  if (search) {
    where.OR = [
      { kodeJadwal: { contains: search } },
      { peralatan: { nama: { contains: search } } },
      { teknisi: { nama: { contains: search } } },
    ];
  }
  if (status !== "all") {
    where.status = status;
  }

  const list = await prisma.jadwal.findMany({
    where,
    include: { peralatan: true, teknisi: true },
    orderBy: { tanggal: "asc" },
  });

  return NextResponse.json(list.map((item) => ({
    ...item,
    tanggal: item.tanggal.toISOString(),
    peralatan: { id: item.peralatan.id, kodeId: item.peralatan.kodeId, nama: item.peralatan.nama, lokasi: item.peralatan.lokasi },
    teknisi: { id: item.teknisi.id, nama: item.teknisi.nama, avatarUrl: item.teknisi.avatarUrl, divisi: item.teknisi.divisi },
  })));
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { peralatanId, teknisiId, tanggal, waktuMulai, waktuSelesai, catatan } = body;

    if (!peralatanId || !teknisiId || !tanggal || !waktuMulai || !waktuSelesai) {
      return NextResponse.json({ error: "Field wajib: peralatanId, teknisiId, tanggal, waktuMulai, waktuSelesai" }, { status: 400 });
    }

    const count = await prisma.jadwal.count();
    const kodeJadwal = `SCH-2026-${100 + count}`;

    const created = await prisma.jadwal.create({
      data: {
        kodeJadwal,
        peralatanId,
        teknisiId,
        tanggal: new Date(tanggal),
        waktuMulai,
        waktuSelesai,
        status: "pending",
        catatan,
      },
      include: { peralatan: true, teknisi: true },
    });

    return NextResponse.json({
      ...created,
      tanggal: created.tanggal.toISOString(),
      peralatan: { id: created.peralatan.id, kodeId: created.peralatan.kodeId, nama: created.peralatan.nama, lokasi: created.peralatan.lokasi },
      teknisi: { id: created.teknisi.id, nama: created.teknisi.nama, avatarUrl: created.teknisi.avatarUrl, divisi: created.teknisi.divisi },
    }, { status: 201 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
