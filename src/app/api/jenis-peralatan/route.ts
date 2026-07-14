import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const list = await prisma.jenisPeralatan.findMany({
      orderBy: { nama: "asc" },
    });
    return NextResponse.json(list);
  } catch (error: unknown) {
    console.error("GET /api/jenis-peralatan error:", error);
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nama, deskripsi } = body;

    if (!nama) {
      return NextResponse.json({ error: "Nama wajib diisi" }, { status: 400 });
    }

    const created = await prisma.jenisPeralatan.create({
      data: { nama, deskripsi },
    });

    return NextResponse.json(created, { status: 201 });
  } catch (err: unknown) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Gagal menambahkan jenis peralatan" }, { status: 500 });
  }
}
