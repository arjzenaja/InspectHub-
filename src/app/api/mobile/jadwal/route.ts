import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const list = await prisma.jadwal.findMany({
    include: { peralatan: true, teknisi: true },
    orderBy: { tanggal: "asc" },
  });

  return NextResponse.json(list.map((item) => ({
    id: item.id,
    kodeJadwal: item.kodeJadwal,
    peralatan: { id: item.peralatan.id, nama: item.peralatan.nama, lokasi: item.peralatan.lokasi },
    teknisi: { id: item.teknisi.id, nama: item.teknisi.nama, avatarUrl: item.teknisi.avatarUrl },
    tanggal: item.tanggal.toISOString(),
    waktuMulai: item.waktuMulai,
    waktuSelesai: item.waktuSelesai,
    status: item.status,
    catatan: item.catatan,
  })));
}
