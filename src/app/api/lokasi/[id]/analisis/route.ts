import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  await params;

  return NextResponse.json({
    totalPeralatan: 0,
    totalInspeksi: 0,
    persenSelesai: 0,
    totalKerusakan: 0,
    peralatanAktif: 0,
    peralatanMaint: 0,
    complianceRate: 0,
    recentActivity: [],
  });
}
