import { NextRequest, NextResponse } from "next/server";
import { renderToBuffer } from "@react-pdf/renderer";
import React from "react";
import { withAuth } from "@/middleware/auth";
import { prisma } from "@/lib/prisma";
import { LaporanPDFDocument } from "@/components/laporan/LaporanPDFDocument";

export const GET = withAuth(
  async (req: NextRequest, user, { params }) => {
    try {
      const { id } = await params;

      // Fetch laporan lengkap dari DB
      let laporan = await prisma.laporan.findUnique({
        where: { id },
        include: {
          teknisi: { select: { nama: true, idKaryawan: true, divisi: true } },
          peralatan: {
            include: {
              lokasiRelation: { select: { nama: true, kota: true } },
            },
          },
          jadwal: true,
        },
      });

      // Fallback: Try kodeId
      if (!laporan) {
        laporan = await prisma.laporan.findUnique({
          where: { kodeId: id },
          include: {
            teknisi: { select: { nama: true, idKaryawan: true, divisi: true } },
            peralatan: {
              include: {
                lokasiRelation: { select: { nama: true, kota: true } },
              },
            },
            jadwal: true,
          },
        });
      }

      if (!laporan) {
        return NextResponse.json(
          {
            success: false,
            message: "Laporan tidak ditemukan",
          },
          { status: 404 }
        );
      }

      // Tentukan base URL untuk foto
      const baseUrl =
        process.env.NEXT_PUBLIC_BASE_URL ??
        `${req.nextUrl.protocol}//${req.nextUrl.host}`;

      // Parse checklist dari JSON
      let checklistParsed = {
        items: [] as Array<{
          id?: string;
          nama?: string;
          name?: string;
          status: "baik" | "perlu_perbaikan";
          catatan?: string;
          metode?: string;
        }>,
      };

      if (laporan.checklist) {
        try {
          const parsed =
            typeof laporan.checklist === "string"
              ? JSON.parse(laporan.checklist)
              : laporan.checklist;
          const rawChecklist = parsed?.checklist ?? parsed?.checkItems ?? parsed;

          if (Array.isArray(rawChecklist)) {
            checklistParsed.items = rawChecklist;
          } else if (rawChecklist?.items && Array.isArray(rawChecklist.items)) {
            checklistParsed = rawChecklist;
          } else if (typeof rawChecklist === "object") {
            checklistParsed = rawChecklist;
          }
        } catch (e) {
          console.log("Error parsing checklist:", e);
        }
      }

      let pengukuranParsed: any = null;
      if (laporan.pengukuran) {
        try {
          pengukuranParsed =
            typeof laporan.pengukuran === "string"
              ? JSON.parse(laporan.pengukuran)
              : laporan.pengukuran;
        } catch (e) {
          console.log("Error parsing pengukuran:", e);
        }
      }

      let hasilData: any = null;
      if (laporan.checklist) {
        try {
          const parsedChecklist =
            typeof laporan.checklist === "string"
              ? JSON.parse(laporan.checklist)
              : laporan.checklist;
          hasilData =
            parsedChecklist?.checklist ??
            parsedChecklist?.checkItems ??
            parsedChecklist;
        } catch (e) {
          console.log("Error parsing hasilData for PDF:", e);
        }
      }

      // Parse fotoUrls
      let fotoUrls: string[] = [];
      if (laporan.fotoUrls) {
        try {
          const rawFoto = Array.isArray(laporan.fotoUrls)
            ? laporan.fotoUrls
            : typeof laporan.fotoUrls === "string"
              ? JSON.parse(laporan.fotoUrls)
              : [];

          fotoUrls = (Array.isArray(rawFoto) ? rawFoto : [])
            .map((item) => {
              if (typeof item === "string") return item.trim();
              if (item && typeof item === "object") {
                const maybeUrl =
                  (item as any).url || (item as any).uri || (item as any).path;
                return typeof maybeUrl === "string" ? maybeUrl.trim() : "";
              }
              return "";
            })
            .filter((value): value is string => Boolean(value));
        } catch (e) {
          console.log("Error parsing fotoUrls:", e);
        }
      }

      // Extract jenis peralatan name
      const jenisPeralatan = laporan.peralatan.jenis ?? "-";

      // Generate PDF buffer
      const pdfBuffer = await renderToBuffer(
        React.createElement(LaporanPDFDocument, {
          laporan: {
            kodeId: laporan.kodeId,
            createdAt: laporan.createdAt.toISOString(),
            status: laporan.status,
            kesimpulan: laporan.kesimpulan ?? undefined,
            catatan: laporan.catatan ?? undefined,
            approvedBy: laporan.approvedBy ?? undefined,
            approvedAt: laporan.approvedAt?.toISOString() ?? undefined,
            checklist: checklistParsed,
            pengukuran: pengukuranParsed,
            hasilData,
            fotoUrls,
            teknisi: {
              nama: laporan.teknisi.nama,
              idKaryawan: laporan.teknisi.idKaryawan,
              divisi: laporan.teknisi.divisi,
            },
            peralatan: {
              kodeId: laporan.peralatan.kodeId,
              nama: laporan.peralatan.nama,
              jenis: jenisPeralatan,
              noRegister: laporan.peralatan.noRegister ?? undefined,
              lokasi: laporan.peralatan.lokasi,
              lokasiRelation: laporan.peralatan.lokasiRelation
                ? {
                    nama: laporan.peralatan.lokasiRelation.nama,
                    kota: laporan.peralatan.lokasiRelation.kota,
                  }
                : undefined,
            },
            jadwal: laporan.jadwal
              ? {
                  lokasi: undefined,
                  waktuMulai: laporan.jadwal.waktuMulai,
                  waktuSelesai: laporan.jadwal.waktuSelesai,
                }
              : undefined,
          },
          baseUrl,
        }) as any
      );

      // Nama file PDF
      const filename = `Laporan-${laporan.kodeId}-${laporan.peralatan.kodeId}.pdf`;

      // Return PDF sebagai download
      return new NextResponse(pdfBuffer as any, {
        status: 200,
        headers: {
          "Content-Type": "application/pdf",
          "Content-Disposition": `attachment; filename="${filename}"`,
          "Content-Length": pdfBuffer.length.toString(),
          "Cache-Control": "no-store",
        },
      });
    } catch (error: any) {
      console.error("PDF generation error:", error);
      return NextResponse.json(
        {
          success: false,
          message: `Gagal generate PDF: ${error.message}`,
        },
        { status: 500 }
      );
    }
  },
  ["admin", "manager", "teknisi"]
);
