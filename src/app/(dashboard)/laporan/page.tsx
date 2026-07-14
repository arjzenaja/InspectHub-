"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  Search, 
  RotateCcw, 
  Calendar,
  ClipboardList,
  ArrowRight,
} from "lucide-react";
import { toast } from "sonner";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import { PageHeader } from "@/components/layout/PageHeader";
import Avatar from "@/components/shared/Avatar";
import { PremiumSelect } from "@/components/ui/premium-select";
import { DatePicker } from "@/components/ui/date-picker";
import { laporanService } from "@/services/laporan";
import { formatKondisiAkhir } from "@/lib/formatters";
import { parseJsonResponse } from "@/lib/fetchJson";

interface Laporan {
  id: string;
  kodeId: string;
  peralatanId: string;
  peralatan: {
    nama: string;
    lokasi: string;
  };
  teknisiId: string;
  teknisi: {
    nama: string;
    avatarUrl: string;
  };
  tanggal?: string | Date;
  createdAt?: string | Date;
  jadwal?: { tanggal?: string | Date };
  kondisi?: string | null;
  kesimpulan?: string | null;
  status: string;
}

interface LaporanResponse {
  data: Laporan[];
  pagination: {
    total: number;
    totalPages: number;
    page: number;
    limit: number;
  };
}

interface LaporanSuggestionResponse {
  data?: Laporan[];
  success?: boolean;
  message?: string;
}

export default function LaporanPage() {
  const [teknisiList, setTeknisiList] = useState<{ id: string; nama: string }[]>([]);

  // Search & Auto-complete state
  const [searchId, setSearchId] = useState("");
  const [suggestions, setSuggestions] = useState<Laporan[]>([]);
  const [showSuggest, setShowSuggest] = useState(false);

  // Filters state
  const [filterTeknisi, setFilterTeknisi] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDateFrom, setFilterDateFrom] = useState<Date | undefined>(undefined);
  const [filterDateTo, setFilterDateTo] = useState<Date | undefined>(undefined);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Autocomplete debouncing
    // Autocomplete debouncing
    useEffect(() => {
      if (searchId.trim().length < 2) {
        setSuggestions([]);
        return;
      }

      const timer = setTimeout(async () => {
        try {
          const res = await fetch(`/api/laporan?search=${encodeURIComponent(searchId)}&limit=5`, {
            credentials: "include",
          });
          const json = await parseJsonResponse<LaporanSuggestionResponse>(res, { data: [] });
          const items = json?.data ?? [];
          setSuggestions(Array.isArray(items) ? items.slice(0, 5) : []);
          setShowSuggest(true);
        } catch (err) {
          console.error(err);
        }
      }, 300);

      return () => clearTimeout(timer);
    }, [searchId]);

  const fetchTeknisi = async () => {
    try {
      const res = await fetch("/api/teknisi");
      const list = await parseJsonResponse<{ id: string; nama: string }[]>(res, []);
      setTeknisiList(Array.isArray(list) ? list : []);
    } catch {
      console.error("Gagal memuat teknisi");
    }
  };

  useEffect(() => {
    fetchTeknisi();
  }, []);

  const [response, setResponse] = useState<LaporanResponse | null>(null);
  const [queryLoading, setQueryLoading] = useState(false);
  const [queryError, setQueryError] = useState<string | null>(null);

  const filters = {
    search: searchId,
    teknisi: filterTeknisi,
    status: filterStatus,
    dateFrom: filterDateFrom ? filterDateFrom.toISOString().split("T")[0] : undefined,
    dateTo: filterDateTo ? filterDateTo.toISOString().split("T")[0] : undefined,
    page: currentPage,
    limit: itemsPerPage,
  };

  const fetchLaporan = async () => {
    setQueryLoading(true);
    setQueryError(null);

    try {
      const result = await laporanService.getAll(filters);
      setResponse(result);
    } catch (error) {
      console.error(error);
      setQueryError("Gagal memuat laporan");
    } finally {
      setQueryLoading(false);
    }
  };

  useEffect(() => {
    fetchLaporan();
  }, [searchId, filterTeknisi, filterStatus, filterDateFrom, filterDateTo, currentPage]);

  const laporan: Laporan[] = response?.data ?? []
  const pagination = response?.pagination ?? null;

  const handleApplyFilter = () => {
    setCurrentPage(1);
    fetchLaporan();
    toast.success("Filter berhasil diterapkan");
  };

  const handleResetFilters = () => {
    setSearchId("");
    setFilterTeknisi("all");
    setFilterStatus("all");
    setFilterDateFrom(undefined);
    setFilterDateTo(undefined);
    setCurrentPage(1);
    setResponse(null);
    toast.info("Filter berhasil direset");
  };

  // Pagination slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = laporan;
  const totalPages = pagination ? pagination.totalPages : 1;

  const teknisiOptions = [
    { value: "all", label: "Semua Teknisi" },
    ...teknisiList.map((t) => ({ value: t.id, label: t.nama })),
  ];

  const statusOptions = [
    { value: "all", label: "Semua Status" },
    { value: "selesai", label: "Selesai" },
    { value: "proses", label: "Proses" },
    { value: "pending", label: "Pending" },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        greeting="Hello, Admin"
        title="Laporan Hasil Inspeksi"
        subtitle="Lihat, cari, filter riwayat, audit nilai ukur parameter teknis, dan unduh berkas laporan resmi."
      />

      {/* Filter toolbar */}
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          
          {/* Autocomplete Search input */}
          <div className="relative md:col-span-2">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">
              ID Laporan / Nama Alat
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchId}
                onChange={(e) => {
                  setSearchId(e.target.value);
                  setShowSuggest(true);
                  setCurrentPage(1);
                }}
                onFocus={() => setShowSuggest(true)}
                placeholder="Ketik ID Laporan (Contoh: RPT)..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
              />
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
            </div>

            {/* Autocomplete dropdown list overlay */}
            {showSuggest && suggestions.length > 0 && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setShowSuggest(false)} />
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-xl shadow-lg border border-[#E5E7EB] z-50 overflow-hidden">
                  {suggestions.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                          setSearchId(s.kodeId);
                          setShowSuggest(false);
                          fetchLaporan();
                        }}
                      className="w-full text-left px-4 py-3 hover:bg-[#FEF2F2] flex items-center justify-between border-b border-[#F3F4F6] last:border-b-0 cursor-pointer"
                    >
                      <span className="text-sm font-mono font-bold text-[#DC2626]">{s.kodeId}</span>
                      <span className="text-xs text-[#6B7280] font-medium">{s.peralatan?.nama}</span>
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Teknisi Dropdown */}
          <div className="flex flex-col">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">
              Teknisi Pelapor
            </label>
            <PremiumSelect
              options={teknisiOptions}
              value={filterTeknisi}
              onChange={(val) => setFilterTeknisi(val)}
              placeholder="Semua Teknisi"
              searchable={true}
              className="w-full"
            />
          </div>

          {/* Status Dropdown */}
          <div className="flex flex-col">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">
              Status Laporan
            </label>
            <PremiumSelect
              options={statusOptions}
              value={filterStatus}
              onChange={(val) => setFilterStatus(val)}
              placeholder="Semua Status"
              className="w-full"
            />
          </div>
        </div>

        {/* Date Ranges and Action buttons */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end pt-3 border-t border-[#F3F4F6]">
          {/* Date From */}
          <div className="flex flex-col">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">
              Mulai Tanggal
            </label>
            <DatePicker
              value={filterDateFrom}
              onChange={(d) => setFilterDateFrom(d)}
              placeholder="Pilih tanggal mulai"
            />
          </div>

          {/* Date To */}
          <div className="flex flex-col">
            <label className="block text-[10px] font-bold uppercase tracking-wider text-[#6B7280] mb-1">
              Sampai Tanggal
            </label>
            <DatePicker
              value={filterDateTo}
              onChange={(d) => setFilterDateTo(d)}
              placeholder="Pilih tanggal akhir"
            />
          </div>

          {/* Spacer */}
          <div className="hidden md:block" />

          {/* Submit Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleApplyFilter}
              className="flex-1 px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Cari Laporan
            </button>
            <button
              onClick={handleResetFilters}
              className="p-2.5 border border-[#E5E7EB] hover:bg-neutral-50 text-[#6B7280] hover:text-[#111827] rounded-xl flex items-center justify-center transition-all bg-white cursor-pointer"
              title="Reset Filters"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Laporan Table */}
      {queryLoading ? (
        <LoadingSkeleton rows={5} />
      ) : laporan.length === 0 ? (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-16 text-center shadow-sm">
          <ClipboardList size={40} className="mx-auto text-[#6B7280] mb-3" />
          <h4 className="font-bold text-lg text-[#111827]">Laporan Tidak Ditemukan</h4>
          <p className="text-sm text-[#6B7280] mt-1 max-w-sm mx-auto">
            Tidak ada laporan hasil inspeksi yang cocok dengan kata kunci atau filter pencarian Anda.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[850px]">
              <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">ID Laporan</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Peralatan</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Substation / Lokasi</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Kondisi Akhir</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Tanggal Inspeksi</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Teknisi Pelapor</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280] text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]/60">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono font-bold text-[#DC2626]">
                      {item.kodeId}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#111827]">
                      {item.peralatan?.nama}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#374151]">
                      {item.peralatan?.lokasi}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {(() => {
                        const kondisiToShow = item.status === "selesai" || item.status === "approved"
                          ? "baik"
                          : item.kesimpulan ?? item.kondisi ?? "pending";
                        const fmt = formatKondisiAkhir(kondisiToShow);
                        return (
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${fmt.bgColor} ${fmt.color}`}>
                            {fmt.label}
                          </span>
                        );
                      })()}
                    </td>
                    <td className="px-6 py-4 text-sm text-[#374151]">
                      {(() => {
                        const inspectionDate = item.jadwal?.tanggal ?? item.createdAt ?? item.tanggal;
                        const formattedDate = inspectionDate
                          ? new Date(inspectionDate).toLocaleDateString("id-ID", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                          : "—";
                        return (
                          <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-[#6B7280]" />
                            {formattedDate}
                          </div>
                        );
                      })()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Avatar
                          src={item.teknisi?.avatarUrl}
                          name={item.teknisi?.nama || "Teknisi"}
                          size="sm"
                        />
                        <span className="text-sm font-semibold text-[#111827]">
                          {item.teknisi?.nama}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-right">
                      <Link
                        href={`/laporan/${item.id}`}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-neutral-100 hover:bg-red-50 hover:text-[#DC2626] border border-neutral-200 text-[#374151] font-bold text-xs rounded-lg transition-all"
                      >
                        Detail
                        <ArrowRight size={12} />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-[#E5E7EB] bg-white px-6 py-4">
                <span className="text-sm text-[#6B7280]">
                Menampilkan <span className="font-semibold text-[#111827]">{indexOfFirstItem + 1}</span>-
                <span className="font-semibold text-[#111827]">
                  {Math.min(indexOfLastItem, pagination?.total ?? laporan.length)}
                </span> dari <span className="font-semibold text-[#111827]">{pagination?.total ?? laporan.length}</span> laporan
              </span>

              <div className="flex gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="px-3.5 py-1.5 border border-[#E5E7EB] hover:bg-neutral-50 text-xs font-bold text-[#374151] rounded-lg transition-all bg-white cursor-pointer"
                >
                  Sebelumnya
                </button>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all border cursor-pointer ${
                      currentPage === i + 1
                        ? "bg-[#DC2626] border-[#DC2626] text-white"
                        : "border-[#E5E7EB] hover:bg-neutral-50 text-[#374151] bg-white"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  disabled={currentPage === totalPages}
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  className="px-3.5 py-1.5 border border-[#E5E7EB] hover:bg-neutral-50 text-xs font-bold text-[#374151] rounded-lg transition-all bg-white cursor-pointer"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
