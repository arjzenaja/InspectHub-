import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const [totalPeralatan, teknisiAktif, teknisiStandby, inspeksiHariIni, urgent, laporanSelesai] = await Promise.all([
      prisma.peralatan.count(),
      prisma.teknisi.count({ where: { status: "aktif" } }),
      prisma.teknisi.count({ where: { status: "standby" } }),
      prisma.jadwal.count({
        where: {
          tanggal: {
            gte: today,
            lt: tomorrow,
          },
        },
      }),
      prisma.laporan.count({ where: { kesimpulan: { contains: "Deviasi" } } }),
      prisma.laporan.count({ where: { status: "selesai" } }),
    ]);

    return NextResponse.json({
      totalPeralatan,
      teknisiAktif,
      teknisiStandby,
      inspeksiHariIni,
      urgent,
      laporanSelesai,
    });
  } catch (error: unknown) {
    console.error("GET /api/dashboard/stats error:", error);
    return NextResponse.json({
      totalPeralatan: 0,
      teknisiAktif: 0,
      teknisiStandby: 0,
      inspeksiHariIni: 0,
      urgent: 0,
      laporanSelesai: 0,
    }, { status: 200 });
  }
}
