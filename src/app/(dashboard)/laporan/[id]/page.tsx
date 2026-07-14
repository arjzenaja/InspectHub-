"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { 
  ArrowLeft, 
  Printer, 
  Download, 
  Tag, 
  CheckCircle2, 
  AlertTriangle,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { ActivityTimeline } from "@/components/laporan/ActivityTimeline";
import { ManagerApproval } from "@/components/laporan/ManagerApproval";
import { DocumentasiLapangan } from "@/components/laporan/DocumentasiLapangan";
import Avatar from "@/components/shared/Avatar";
import { formatKondisiAkhir } from "@/lib/formatters";

interface LaporanDetail {
  id: string;
  kodeId: string;
  tanggal: string;
  kondisi: string;
  status: string;
  hasilData: Record<string, any> | null;
  pengukuran: Record<string, any> | null;
  fotoUrls: string[];
  peralatan: {
    kodeId: string;
    nama: string;
    jenis: string;
    lokasi: string;
    noRegister: string | null;
    lokasiRelation?: {
      nama: string;
      kota: string;
      zona: string | null;
    };
  };
  checklist?: {
    items?: Array<{ id?: string; nama?: string; name?: string; status?: string; catatan?: string }>;
  } | null;
  stats?: {
    totalItems?: number;
    kondisiBaik?: number;
    perluPerbaikan?: number;
  };
  teknisi: {
    nama: string;
    idKaryawan: string;
    divisi: string;
    avatarUrl: string | null;
    rating: number;
  };
}

export default function DetailLaporanPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [data, setData] = useState<LaporanDetail | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmittingApproval, setIsSubmittingApproval] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const mapApprovalStatus = (status: string) => {
    const normalized = String(status || "").toLowerCase();
    if (normalized === "approved" || normalized === "selesai") return "DISETUJUI";
    if (normalized === "revision" || normalized === "revisi") return "REVISI";
    if (normalized === "ditolak") return "DITOLAK";
    return "PENDING";
  };

  const approveLaporan = async () => {
    if (!id) return;
    setIsSubmittingApproval(true);
    try {
      const res = await fetch(`/api/laporan/${id}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Gagal menyetujui laporan");
      }

      const updated = await res.json();
      setData((prev) => (prev ? { ...prev, status: "approved" } : prev));
      toast.success("Laporan berhasil disetujui!");
      return updated;
    } catch (error) {
      console.error("Gagal menyetujui laporan:", error);
      toast.error("Gagal menyetujui laporan.");
      throw error;
    } finally {
      setIsSubmittingApproval(false);
    }
  };

  const reviseLaporan = async (note: string) => {
    if (!id) return;
    setIsSubmittingApproval(true);
    try {
      const res = await fetch(`/api/laporan/${id}/revise`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ note }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Gagal meminta revisi laporan");
      }

      const updated = await res.json();
      setData((prev) => (prev ? { ...prev, status: "revision" } : prev));
      toast.success(`Permintaan revisi terkirim: "${note}"`);
      return updated;
    } catch (error) {
      console.error("Gagal meminta revisi:", error);
      toast.error("Gagal mengirim permintaan revisi.");
      throw error;
    } finally {
      setIsSubmittingApproval(false);
    }
  };

  const updateLaporanStatus = async (status: string) => {
    if (!id) return;
    setIsSubmittingApproval(true);
    try {
      const res = await fetch(`/api/laporan/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Gagal memperbarui status laporan");
      }

      const updated = await res.json();
      setData((prev) => (prev ? { ...prev, status: updated.status } : prev));
      return updated;
    } catch (error) {
      console.error("Gagal memproses status laporan:", error);
      throw error;
    } finally {
      setIsSubmittingApproval(false);
    }
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    const toastId = toast.loading("Membuat PDF...");

    try {
      const response = await fetch(`/api/laporan/${id}/pdf`, {
        headers: {
          Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("accessToken") ?? "" : ""}`,
        },
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(err.message ?? "Gagal generate PDF");
      }

      // Download file
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      const filename = `Laporan-${data?.kodeId}-${data?.peralatan?.kodeId ?? ""}.pdf`;
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      toast.dismiss(toastId);
      toast.success("PDF berhasil diunduh!");
    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(error.message ?? "Gagal mengunduh PDF");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handlePrint = async () => {
    setIsPrinting(true);
    const toastId = toast.loading("Menyiapkan halaman cetak...");

    try {
      const response = await fetch(`/api/laporan/${id}/pdf`, {
        headers: {
          Authorization: `Bearer ${typeof window !== "undefined" ? localStorage.getItem("accessToken") ?? "" : ""}`,
        },
      });

      if (!response.ok)
        throw new Error("Gagal generate PDF untuk cetak");

      const blob = await response.blob();
      const pdfUrl = URL.createObjectURL(blob);

      // Buka PDF di tab baru lalu trigger print
      const printWindow = window.open(pdfUrl, "_blank");
      if (printWindow) {
        printWindow.onload = () => {
          printWindow.focus();
          printWindow.print();
          // Cleanup URL setelah print
          setTimeout(() => URL.revokeObjectURL(pdfUrl), 5000);
        };
      } else {
        // Fallback: download saja jika popup diblokir
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = `Laporan-${data?.kodeId}.pdf`;
        link.click();
        URL.revokeObjectURL(pdfUrl);
        toast.info("Popup diblokir browser. File PDF diunduh sebagai gantinya.");
      }

      toast.dismiss(toastId);
    } catch (error: any) {
      toast.dismiss(toastId);
      toast.error(error.message ?? "Gagal mencetak");
    } finally {
      setIsPrinting(false);
    }
  };

  useEffect(() => {
    if (!id) return;
    async function fetchDetail() {
      try {
        const res = await fetch(`/api/laporan/${id}`);
        if (!res.ok) {
          toast.error("Laporan tidak ditemukan");
          router.push("/laporan");
          return;
        }
        const detail = await res.json();
        setData(detail);
      } catch {
        toast.error("Gagal memuat detail laporan");
      } finally {
        setIsLoading(false);
      }
    }
    fetchDetail();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin text-[#DC2626]" size={32} />
      </div>
    );
  }

  if (!data) return null;

  const hasilData = data.hasilData || {};
  const resolvedKondisi = data.kondisi ?? ((data.status === "approved" || data.status === "selesai") ? "baik" : data.status ?? "pending");
  const isLayak = String(resolvedKondisi).toLowerCase().includes("baik");
  const checklist = data.checklist?.items ?? [];
  const kondisiAkhir = formatKondisiAkhir(resolvedKondisi);
  // pengukuran: prefer the dedicated top-level field returned by the API,
  // fall back to hasilData.pengukuran for legacy records, then top-level hasilData fields.
  let pengukuran: any =
    data.pengukuran && Object.keys(data.pengukuran).length > 0
      ? data.pengukuran
      : hasilData.pengukuran || {};
  if ((!pengukuran || Object.keys(pengukuran).length === 0) && (hasilData.tahanan || hasilData.tegangan)) {
    pengukuran = {
      tahanan: hasilData.tahanan,
      tegangan: hasilData.tegangan,
    };
  }

  const measurements = [
    {
      parameter: "Tahanan Pembumian",
      nilaiUkur: pengukuran.tahanan ? `${pengukuran.tahanan} Ω` : "-",
      metode: "Alat Ukur",
      statusOk: Number(pengukuran.tahanan) > 0 && Number(pengukuran.tahanan) < 5,
    },
    {
      parameter: "Tegangan Pembumian",
      nilaiUkur: pengukuran.tegangan ? `${pengukuran.tegangan} V` : "-",
      metode: "Alat Ukur",
      statusOk: Number(pengukuran.tegangan) < 1,
    },
  ];

  const renderStatusBadge = (status: any) => {
    const s = String(status || "").toLowerCase();
    if (!s) return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-gray-50 text-gray-700">-</span>;
    if (s.includes("baik")) return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-50 text-green-700">Baik</span>;
    if (s.includes("perlu")) return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-amber-50 text-amber-700">Perlu Perbaikan</span>;
    return <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-gray-50 text-gray-700">{String(status)}</span>;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5E7EB] pb-5">
        <div className="flex items-center gap-3">
          <Link href="/laporan" className="p-2 rounded-xl border border-[#E5E7EB] hover:bg-neutral-50 text-[#374151] transition-all">
            <ArrowLeft size={18} strokeWidth={1.5} />
          </Link>
          <div>
            <h2 className="text-xl font-bold text-[#111827]">Detail Laporan Inspeksi</h2>
            <p className="text-xs text-[#6B7280]">
              <span className="font-mono font-bold text-[#DC2626]">{data.kodeId}</span>
              {" · "}
              {new Date(data.tanggal).toLocaleDateString("id-ID", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            disabled={isPrinting || isGeneratingPDF}
            className="flex items-center gap-2 border border-[#E5E7EB] rounded-xl
               px-4 py-2.5 text-sm font-semibold bg-white hover:bg-[#F9FAFB]
               disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            {isPrinting ? (
              <Loader2 size={16} className="animate-spin text-[#6B7280]" />
            ) : (
              <Printer size={16} strokeWidth={1.5} className="text-[#6B7280]" />
            )}
            {isPrinting ? "Menyiapkan..." : "Cetak"}
          </button>

          <button
            onClick={handleDownloadPDF}
            disabled={isGeneratingPDF || isPrinting}
            className="flex items-center gap-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white
               rounded-xl px-4 py-2.5 text-sm font-semibold
               disabled:opacity-60 disabled:cursor-not-allowed transition-colors shadow-sm"
          >
            {isGeneratingPDF ? (
              <Loader2 size={16} className="animate-spin" />
            ) : (
              <Download size={16} strokeWidth={1.5} />
            )}
            {isGeneratingPDF ? "Membuat PDF..." : "PDF"}
          </button>
        </div>
      </div>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* LEFT */}
        <div className="lg:col-span-2 space-y-6">
          {/* Informasi Umum */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-[#111827] mb-4 flex items-center gap-2">
              <Tag size={18} className="text-[#DC2626]" /> Informasi Umum Inspeksi
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              {[
                { label: "Nama Peralatan", value: data.peralatan.nama },
                { label: "ID Peralatan", value: data.peralatan.kodeId },
                { label: "Jenis", value: data.peralatan.jenis },
                { label: "No. Register", value: data.peralatan.noRegister || "-" },
                { label: "Lokasi Substation", value: data.peralatan.lokasi },
                { label: "Zona / Area", value: data.peralatan.lokasiRelation?.zona || "-" },
                { label: "Teknisi Pemeriksa", value: data.teknisi.nama },
                { label: "Tanggal Inspeksi", value: new Date(data.tanggal).toLocaleDateString("id-ID") },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider">{label}</p>
                  <p className="text-sm font-semibold text-[#111827] mt-1">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* HASIL INSPEKSI VISUAL */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-[#111827] mb-4">Hasil Inspeksi Visual</h3>
            <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB]">
                  <tr>
                    {["Komponen", "Metode", "Status"].map(h => (
                      <th key={h} className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#6B7280]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]/60">
                  {checklist.length > 0 ? checklist.map((it: any, idx: number) => (
                    <tr key={idx} className="hover:bg-neutral-50/50">
                      <td className="px-4 py-3 font-medium text-[#111827]">{it.name || it.nama || "-"}</td>
                      <td className="px-4 py-3 text-[#6B7280] text-xs">{it.method || it.metode || "Inspeksi visual"}</td>
                      <td className="px-4 py-3">{renderStatusBadge(it.status || it.kondisi)}</td>
                    </tr>
                  )) : (
                    <tr><td colSpan={3} className="px-4 py-6 text-center text-[#6B7280] text-sm">Tidak ada hasil inspeksi visual tersimpan.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Data Pengukuran Teknis */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
            <h3 className="font-bold text-[#111827] mb-4">Data Pengukuran Teknis</h3>
            <div className="overflow-x-auto rounded-xl border border-[#E5E7EB]">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB]">
                  <tr>
                    {["Parameter", "Nilai Ukur / Temuan", "Metode", "Status"].map(h => (
                      <th key={h} className="px-4 py-3 text-xs font-bold uppercase tracking-wider text-[#6B7280]">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E7EB]/60">
                  {measurements.length > 0 ? measurements.map((m, i) => (
                    <tr key={i} className="hover:bg-neutral-50/50">
                      <td className="px-4 py-3 font-medium text-[#111827]">{m.parameter}</td>
                      <td className="px-4 py-3 text-[#374151] font-mono text-xs">{m.nilaiUkur}</td>
                      <td className="px-4 py-3 text-[#6B7280] text-xs">{m.metode}</td>
                      <td className="px-4 py-3">
                        {renderStatusBadge(m.statusOk ? "Baik" : "Perlu Perbaikan")}
                      </td>
                    </tr>
                  )) : (
                    <tr><td colSpan={4} className="px-4 py-6 text-center text-[#6B7280] text-sm">Tidak ada data pengukuran tersimpan.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Dokumentasi Lapangan — Admin read-only with lightbox */}
          <DocumentasiLapangan fotoUrls={data.fotoUrls} />
        </div>

        {/* RIGHT */}
        <div className="space-y-5">
          {/* Hasil Pemeriksaan */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-[#111827] mb-4 text-sm">Hasil Pemeriksaan</h3>
            {checklist.length === 0 ? (
              <p className="text-sm text-[#9CA3AF] text-center py-6">Tidak ada data hasil pemeriksaan</p>
            ) : (
              <div className="space-y-3">
                {checklist.map((item, index) => {
                  const statusLabel = String(item.status || "").toLowerCase();
                  const isOk = statusLabel.includes("baik");
                  return (
                    <div key={item.id ?? index} className="flex items-center justify-between py-2 border-b border-[#F3F4F6]">
                      <span className="text-sm font-medium text-[#374151]">{item.nama ?? item.name ?? "—"}</span>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${isOk ? "bg-green-50 text-green-700 border border-green-200" : "bg-red-50 text-red-700 border border-red-200"}`}>
                        {isOk ? "OK" : "DEVIASI"}
                      </span>
                    </div>
                  );
                })}
                {checklist.some((item) => item.catatan) && (
                  <div className="mt-4 pt-4 border-t border-[#F3F4F6] space-y-2">
                    <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Catatan Teknisi</p>
                    {checklist.filter((item) => item.catatan).map((item, idx) => (
                      <div key={idx} className="flex gap-2 text-xs text-[#374151]">
                        <span className="font-medium text-[#DC2626] flex-shrink-0">{item.nama ?? item.name ?? "—"}:</span>
                        <span className="text-[#6B7280]">{item.catatan}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Kesimpulan Akhir */}
          <div className={`rounded-2xl p-5 border ${isLayak ? "bg-emerald-50 border-emerald-200" : "bg-red-50 border-red-200"}`}>
            <div className="flex items-center gap-2 mb-2">
              {isLayak ? <CheckCircle2 size={20} className="text-emerald-600" /> : <AlertTriangle size={20} className="text-red-600" />}
              <span className={`font-extrabold text-sm ${isLayak ? "text-emerald-700" : "text-red-700"}`}>
                {isLayak ? "LAYAK OPERASI" : "PERLU PERHATIAN"}
              </span>
            </div>
            <p className="text-xs font-semibold text-[#111827]">Saran & Rekomendasi</p>
            <p className="text-xs text-[#6B7280] mt-1 leading-relaxed">
              {isLayak
                ? "Peralatan dalam kondisi baik dan aman untuk dioperasikan. Lanjutkan pemeliharaan berkala sesuai jadwal."
                : "Ditemukan deviasi pada parameter inspeksi. Segera lakukan tindakan korektif sebelum kembali beroperasi."}
            </p>
            <div className={`mt-3 py-1.5 px-3 rounded-full text-xs font-bold text-center ${isLayak ? "bg-emerald-600 text-white" : "bg-red-600 text-white"}`}>
              {kondisiAkhir.label}
            </div>
          </div>

          {/* Otorisasi */}
          <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm">
            <h3 className="font-bold text-[#111827] mb-4 text-sm">Otorisasi Laporan</h3>
            <div className="flex items-center gap-3">
              <Avatar src={data.teknisi.avatarUrl} name={data.teknisi.nama} size="md" />
              <div>
                <p className="text-sm font-bold text-[#111827]">{data.teknisi.nama}</p>
                <p className="text-xs text-[#6B7280]">{data.teknisi.idKaryawan} · {data.teknisi.divisi}</p>
              </div>
            </div>
            <div className="mt-4 h-12 border-2 border-dashed border-[#E5E7EB] rounded-xl flex items-center justify-center text-xs text-[#6B7280]">
              ✍️ Tanda Tangan Digital Terverifikasi
            </div>
          </div>

          {/* Manager Approval Panel */}
          <ManagerApproval
            status={mapApprovalStatus(data.status)}
            onApprove={approveLaporan}
            onRevise={reviseLaporan}
            onReject={async (note) => {
              try {
                await updateLaporanStatus("ditolak");
                toast.success(`Laporan ditolak: "${note}"`);
              } catch {
                toast.error("Gagal menolak laporan.");
              }
            }}
          />

          {/* Activity Timeline */}
          <ActivityTimeline />
        </div>
      </div>
    </div>
  );
}
