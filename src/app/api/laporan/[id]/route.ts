import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/middleware/auth";

interface LaporanChecklist {
  items: Array<{ id?: string; nama?: string; name?: string; status: string; catatan?: string }>;
  pengukuran?: Array<any>;
  kesimpulan?: string;
}

export const GET = withAuth(async (_req, _user, { params }) => {
  const { id } = await params;

  let laporan = await prisma.laporan.findUnique({
    where: { id },
    include: {
      peralatan: { include: { lokasiRelation: true } },
      teknisi: true,
    },
  });

  if (!laporan) {
    // Fallback 1: Try finding by Laporan's unique kodeId (e.g. LAP-...)
    laporan = await prisma.laporan.findUnique({
      where: { kodeId: id },
      include: {
        peralatan: { include: { lokasiRelation: true } },
        teknisi: true,
      },
    });
  }

  if (!laporan) {
    // Fallback 2: Try finding the latest Laporan for the given peralatanId (e.g. GROUNDING-G002)
    laporan = await prisma.laporan.findFirst({
      where: { peralatanId: id },
      include: {
        peralatan: { include: { lokasiRelation: true } },
        teknisi: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  if (!laporan) {
    // Fallback 3: Try finding the latest Laporan where peralatan.kodeId matches id (e.g. G002)
    laporan = await prisma.laporan.findFirst({
      where: {
        peralatan: { kodeId: id }
      },
      include: {
        peralatan: { include: { lokasiRelation: true } },
        teknisi: true,
      },
      orderBy: { createdAt: "desc" },
    });
  }

  if (!laporan) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  const parseChecklist = (): LaporanChecklist => {
    if (!laporan.checklist) return { items: [] };

    try {
      const parsed = JSON.parse(laporan.checklist);
      const rawChecklist = parsed?.checklist ?? parsed?.checkItems ?? parsed;

      if (!rawChecklist) return { items: [] };
      if (Array.isArray(rawChecklist)) {
        return { items: rawChecklist };
      }
      if (typeof rawChecklist === "string") {
        const parsedChecklist = JSON.parse(rawChecklist);
        return Array.isArray(parsedChecklist) ? { items: parsedChecklist } : parsedChecklist;
      }
      return typeof rawChecklist === 'object' ? rawChecklist : { items: [] };
    } catch {
      return { items: [] };
    }
  };

  const parseFotoUrls = () => {
    if (!laporan.fotoUrls) return [];

    const rawValue = Array.isArray(laporan.fotoUrls)
      ? laporan.fotoUrls
      : (() => {
          try {
            return JSON.parse(laporan.fotoUrls);
          } catch {
            return [];
          }
        })();

    const normalized = (Array.isArray(rawValue) ? rawValue : [])
      .map((item) => {
        if (typeof item === "string") return item.trim();
        if (item && typeof item === "object") {
          const maybeUrl = (item as { url?: string; uri?: string }).url || (item as { url?: string; uri?: string }).uri;
          return typeof maybeUrl === "string" ? maybeUrl.trim() : "";
        }
        return "";
      })
      .filter((value): value is string => Boolean(value))
      .filter((value, index, arr) => arr.indexOf(value) === index);

    return normalized;
  };

  const fotoUrls = parseFotoUrls();
  const checklistParsed = parseChecklist();
  const items = checklistParsed?.items ?? [];

  return NextResponse.json({
    id: laporan.id,
    kodeId: laporan.kodeId,
    tanggal: laporan.createdAt.toISOString(),
    kondisi: laporan.kesimpulan ?? null,
    status: laporan.status,
    reportStatus: laporan.status,
    revisionReason: laporan.approvalNote || null,
    hasilData: (() => { try { return laporan.checklist ? JSON.parse(laporan.checklist) : null; } catch { return null; } })(),
    pengukuran: (() => { try { return laporan.pengukuran ? JSON.parse(laporan.pengukuran) : null; } catch { return null; } })(),
    checklist: checklistParsed,
    stats: {
      totalItems: items.length,
      kondisiBaik: items.filter((item) => item.status === "baik").length,
      perluPerbaikan: items.filter((item) => item.status === "perlu_perbaikan").length,
    },
    fotoUrls,
    peralatan: {
      id: laporan.peralatan.id,
      kodeId: laporan.peralatan.kodeId,
      nama: laporan.peralatan.nama,
      jenis: laporan.peralatan.jenis,
      lokasi: laporan.peralatan.lokasi,
      noRegister: laporan.peralatan.noRegister,
      fotoUrl: laporan.peralatan.fotoUrl,
      kapasitas: laporan.peralatan.kapasitas,
      tinggiDimensi: laporan.peralatan.tinggiDimensi,
      jenisKabel: laporan.peralatan.jenisKabel,
      masaBerlaku: laporan.peralatan.masaBerlaku ? laporan.peralatan.masaBerlaku.toISOString() : null,
      lokasiRelation: laporan.peralatan.lokasiRelation
        ? {
            nama: laporan.peralatan.lokasiRelation.nama,
            kota: laporan.peralatan.lokasiRelation.kota,
            zona: laporan.peralatan.lokasiRelation.zona,
          }
        : undefined,
    },
    teknisi: {
      nama: laporan.teknisi.nama,
      idKaryawan: laporan.teknisi.idKaryawan,
      divisi: laporan.teknisi.divisi,
      avatarUrl: laporan.teknisi.avatarUrl,
      rating: laporan.teknisi.rating,
    },
  });
}, ["admin", "manager", "teknisi"]);

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updated = await prisma.laporan.update({ where: { id }, data: body });
    return NextResponse.json(updated);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    await prisma.laporan.delete({ where: { id } });
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
