import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/middleware/auth";
import { successResponse, errorResponse } from "@/lib/apiResponse";
import { z } from "zod";

const lokasiSchema = z.object({
  nama:      z.string().min(2),
  kota:      z.string().min(2),
  provinsi:  z.string().optional(),
  zona:      z.string().optional(),
  area:      z.string().optional(),
  deskripsi: z.string().optional(),
  lat:       z.number().optional().nullable(),
  lng:       z.number().optional().nullable(),
});

// GET is public — lokasi list is needed by peralatan form without auth headers
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const search = searchParams.get("search") ?? "";
    const zona   = searchParams.get("zona")   ?? "all";

    const where: any = {};

    if (search) {
      // SQLite does not support mode: "insensitive" — use plain contains
      where.OR = [
        { nama: { contains: search } },
        { kota: { contains: search } },
        { kode: { contains: search } },
      ];
    }

    if (zona !== "all" && zona !== "") {
      where.zona = { contains: zona };
    }

    const lokasi = await prisma.lokasi.findMany({
      where,
      include: {
        peralatan: { select: { id: true, status: true } },
        _count: { select: { peralatan: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    const allLokasi = await prisma.lokasi.findMany({
      select: { zona: true },
      distinct: ["zona"],
      where: { zona: { not: null } },
    });
    const zonaList = allLokasi.map((l) => l.zona).filter(Boolean).sort() as string[];

    const stats = {
      totalLokasi:    lokasi.length,
      garduAktif:     lokasi.filter((l) => l._count.peralatan > 0).length,
      totalPeralatan: lokasi.reduce((sum, l) => sum + l._count.peralatan, 0),
      zonaAktif:      zonaList.length,
    };

    const transformed = lokasi.map((l) => ({
      id:               l.id,
      kode:             l.kode,
      nama:             l.nama,
      kota:             l.kota,
      provinsi:         l.provinsi,
      zona:             l.zona,
      area:             l.area,
      deskripsi:        l.deskripsi,
      lat:              l.lat,
      lng:              l.lng,
      jumlahPeralatan:  l._count.peralatan,
    }));

    return NextResponse.json({ success: true, data: { lokasi: transformed, stats, zonaList } });
  } catch (error: any) {
    console.error("GET /api/lokasi error:", error);
    return NextResponse.json(
      { success: false, message: "Gagal memuat lokasi", error: error.message },
      { status: 500 }
    );
  }
}

// POST requires admin auth
export const POST = withAuth(async (req) => {
  try {
    const body   = await req.json();
    const parsed = lokasiSchema.safeParse(body);
    if (!parsed.success) return errorResponse("Validasi gagal", 400, parsed.error.issues);

    const count = await prisma.lokasi.count();
    const kode  = `LOK-${String(count + 1).padStart(3, "0")}`;

    const lokasi = await prisma.lokasi.create({
      data: { ...parsed.data, kode }
    });

    return successResponse(lokasi, "Lokasi berhasil ditambahkan", 201);
  } catch (error: any) {
    console.error("POST /api/lokasi error:", error);
    return errorResponse(error.message, 500);
  }
}, ["admin"]);
