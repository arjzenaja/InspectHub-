"use client";

import { useEffect, useState } from "react";
import { 
  Plus, 
  Search, 
  RotateCcw, 
  Trash2, 
  Edit3, 
  CheckCircle,
  MoreVertical,
  Calendar,
  Clock,
  MapPin,
  ClipboardList
} from "lucide-react";
import { toast } from "sonner";
import ConfirmDeleteDialog from "@/components/shared/ConfirmDeleteDialog";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import Avatar from "@/components/shared/Avatar";
import BuatJadwalDrawer from "@/components/jadwal/BuatJadwalDrawer";
import { formatJadwalStatus } from "@/lib/formatters";
import { PageHeader } from "@/components/layout/PageHeader";
import { PremiumSelect } from "@/components/ui/premium-select";

interface Jadwal {
  id: string;
  kodeJadwal: string;
  peralatanId: string;
  peralatan: {
    kodeId: string;
    nama: string;
    lokasi: string;
  };
  teknisiId: string;
  teknisi: {
    nama: string;
    avatarUrl: string;
    divisi: string;
  };
  tanggal: string | Date;
  waktuMulai: string;
  waktuSelesai: string;
  status: string;
  catatan?: string | null;
}

export default function JadwalPage() {
  const [data, setData] = useState<Jadwal[]>([]);
  const [teknisiList, setTeknisiList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filter states
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Active Menu Action Popover
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  // Drawer / Modal states
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedJadwal, setSelectedJadwal] = useState<Jadwal | null>(null);
  
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [jadwalToDelete, setJadwalToDelete] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = `/api/jadwal?search=${encodeURIComponent(search)}&status=${filterStatus}`;
      const res = await fetch(url);
      const items = await res.json();
      setData(items);
    } catch {
      toast.error("Gagal memuat jadwal inspeksi");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchTeknisi = async () => {
    try {
      const res = await fetch("/api/teknisi");
      const list = await res.json();
      setTeknisiList(list);
    } catch {
      console.error("Gagal memuat daftar teknisi");
    }
  };

  useEffect(() => {
    fetchTeknisi();
  }, []);

  useEffect(() => {
    fetchData();
  }, [search, filterStatus]);

  const handleResetFilters = () => {
    setSearch("");
    setFilterStatus("all");
    setCurrentPage(1);
    toast.info("Filter berhasil direset");
  };

  const handleSaveJadwal = async (formData: any) => {
    const isEdit = !!selectedJadwal;
    const url = isEdit ? `/api/jadwal/${selectedJadwal.id}` : "/api/jadwal";
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        toast.success(isEdit ? `Jadwal ${result.kodeJadwal} berhasil diubah` : `Jadwal ${result.kodeJadwal} berhasil dibuat`);
        fetchData();
      } else {
        toast.error(result.error || "Gagal menyimpan jadwal");
      }
    } catch {
      toast.error("Terjadi kesalahan sistem");
    }
  };

  const handleDeleteJadwal = async () => {
    if (!jadwalToDelete) return;
    try {
      const res = await fetch(`/api/jadwal/${jadwalToDelete}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Jadwal berhasil dihapus");
        fetchData();
      } else {
        toast.error("Gagal menghapus jadwal");
      }
    } catch {
      toast.error("Terjadi kesalahan sistem");
    } finally {
      setJadwalToDelete(null);
    }
  };

  const [updatingStatusId, setUpdatingStatusId] = useState<string | null>(null);

  const handleStatusUpdate = async (id: string, status: string) => {
    setActiveMenuId(null);
    setUpdatingStatusId(id);
    try {
      const res = await fetch(`/api/jadwal/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      const payload = await res.json();
      if (!res.ok) throw new Error(payload?.message || "Gagal mengubah status");

      setData((prev) => prev.map((item) => (item.id === id ? { ...item, status } : item)));
      const label = {
        progress: "Jadwal dimulai, status: Sedang Dikerjakan 🔄",
        tertunda: "Jadwal ditandai tertunda ⏸️",
        pending: "Jadwal dikembalikan ke Belum Dikerjakan",
      }[status] ?? "Status jadwal diperbarui";
      toast.success(label);
      fetchData();
    } catch (error: any) {
      toast.error(error?.message || "Gagal mengubah status");
    } finally {
      setUpdatingStatusId(null);
    }
  };

  // Pagination slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const statusOptions = [
    { value: "all", label: "Semua Status" },
    { value: "pending", label: "Belum Dikerjakan" },
    { value: "progress", label: "Sedang Dikerjakan" },
    { value: "pending_approval", label: "Menunggu Persetujuan" },
    { value: "selesai", label: "Selesai" },
    { value: "revisi", label: "Perlu Revisi" },
    { value: "tertunda", label: "Tertunda" },
  ];

  return (
    <div className="space-y-6 bg-white p-6 min-h-screen">
      {/* Page Header */}
      <PageHeader
        greeting="Hello, Admin"
        title="Jadwal Inspeksi Peralatan"
        subtitle="Atur agenda kalender pemeriksaan peralatan listrik, tugaskan tim teknisi, dan pantau status real-time."
        action={
          <button
            onClick={() => {
              setSelectedJadwal(null);
              setDrawerOpen(true);
            }}
            className="px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer"
          >
            <Plus size={18} strokeWidth={1.5} />
            Buat Jadwal Baru
          </button>
        }
      />

      {/* Filter toolbar */}
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="relative md:col-span-2">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari ID Jadwal, nama peralatan atau nama teknisi..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB] placeholder:text-neutral-400"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          </div>

          <PremiumSelect
            options={statusOptions}
            value={filterStatus}
            onChange={(val) => {
              setFilterStatus(val);
              setCurrentPage(1);
            }}
            placeholder="Semua Status"
            className="w-full"
          />

          <button
            onClick={handleResetFilters}
            className="p-2.5 border border-[#E5E7EB] hover:bg-neutral-50 text-[#6B7280] hover:text-[#111827] rounded-xl flex items-center justify-center gap-2 transition-all font-semibold text-sm bg-white cursor-pointer"
          >
            <RotateCcw size={16} />
            Reset Filter
          </button>
        </div>
      </div>

      {/* Grid / Table data */}
      {isLoading ? (
        <LoadingSkeleton rows={5} />
      ) : data.length === 0 ? (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-16 text-center shadow-sm">
          <Calendar size={40} className="mx-auto text-[#6B7280] mb-3" />
          <h4 className="font-bold text-lg text-[#111827]">Tidak Ada Agenda Jadwal</h4>
          <p className="text-sm text-[#6B7280] mt-1 max-w-sm mx-auto">
            Tidak ada agenda inspeksi terjadwal yang cocok. Silakan atur jadwal baru untuk memulai penugasan.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[950px]">
              <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">ID Jadwal</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Peralatan</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Lokasi</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Teknisi</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Tanggal & Waktu</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280] text-right">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]/60">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-mono font-bold text-[#DC2626]">
                      {item.kodeJadwal}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="inline-flex max-w-fit px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-100 text-[#DC2626] uppercase">
                          {item.peralatan?.kodeId}
                        </span>
                        <span className="text-sm font-semibold text-[#111827] mt-1">
                          {item.peralatan?.nama}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#374151]">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#6B7280]" />
                        {item.peralatan?.lokasi || "-"}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <Avatar
                          src={item.teknisi?.avatarUrl}
                          name={item.teknisi?.nama || "Teknisi"}
                          size="sm"
                        />
                        <div>
                          <p className="text-sm font-semibold text-[#111827] leading-none">
                            {item.teknisi?.nama}
                          </p>
                          <span className="text-[10px] text-neutral-400">
                            {item.teknisi?.divisi}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#374151]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-[#6B7280]" />
                        {new Date(item.tanggal).toLocaleDateString("id-ID")}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-[#6B7280] mt-0.5">
                        <Clock size={12} />
                        {item.waktuMulai} - {item.waktuSelesai}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      {(() => {
                        const fmt = formatJadwalStatus(item.status);
                        return (
                          <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold uppercase leading-none ${fmt.bgColor} ${fmt.color}`}>
                            {fmt.label}
                          </span>
                        );
                      })()}
                    </td>
                    <td className="px-6 py-4 text-right relative">
                      <button
                        onClick={() => setActiveMenuId(activeMenuId === item.id ? null : item.id)}
                        className="p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 cursor-pointer"
                      >
                        <MoreVertical size={18} />
                      </button>

                      {/* Context action menu dropdown */}
                      {activeMenuId === item.id && (
                        <>
                          <div 
                            className="fixed inset-0 z-10" 
                            onClick={() => setActiveMenuId(null)}
                          />
                          <div className="absolute right-6 top-12 bg-white border border-[#E5E7EB] rounded-xl shadow-lg z-20 w-44 overflow-hidden py-1 text-left">
                            <button
                              onClick={() => {
                                setSelectedJadwal(item);
                                setDrawerOpen(true);
                                setActiveMenuId(null);
                              }}
                              className="w-full px-4 py-2 hover:bg-[#F9FAFB] text-sm text-[#374151] flex items-center gap-2 cursor-pointer"
                            >
                              <Edit3 size={14} />
                              Edit Jadwal
                            </button>
                            {item.status === "pending" && (
                              <button
                                onClick={() => handleStatusUpdate(item.id, "progress")}
                                disabled={updatingStatusId === item.id}
                                className="w-full px-4 py-2 hover:bg-[#F9FAFB] text-sm text-blue-600 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                              >
                                <ClipboardList size={14} />
                                Mulai Proses
                              </button>
                            )}
                            {["pending", "progress"].includes(item.status) && (
                              <button
                                onClick={() => handleStatusUpdate(item.id, "tertunda")}
                                disabled={updatingStatusId === item.id}
                                className="w-full px-4 py-2 hover:bg-[#F9FAFB] text-sm text-orange-600 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                              >
                                <RotateCcw size={14} />
                                Tandai Tertunda
                              </button>
                            )}
                            {item.status === "pending" && (
                              <>
                                <hr className="border-[#E5E7EB] my-1" />
                                <button
                                  onClick={() => {
                                    setJadwalToDelete(item.id);
                                    setDeleteDialogOpen(true);
                                    setActiveMenuId(null);
                                  }}
                                  className="w-full px-4 py-2 hover:bg-[#F9FAFB] text-sm text-red-600 flex items-center gap-2 cursor-pointer"
                                >
                                  <Trash2 size={14} />
                                  Hapus Jadwal
                                </button>
                              </>
                            )}
                          </div>
                        </>
                      )}
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
                  {Math.min(indexOfLastItem, data.length)}
                </span> dari <span className="font-semibold text-[#111827]">{data.length}</span> agenda
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

      {/* Buat/Edit Jadwal Drawer */}
      <BuatJadwalDrawer
        isOpen={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedJadwal(null);
        }}
        onSave={handleSaveJadwal}
        initialData={selectedJadwal}
        teknisiList={teknisiList}
      />

      {/* Delete Confirmation */}
      <ConfirmDeleteDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setJadwalToDelete(null);
        }}
        onConfirm={handleDeleteJadwal}
        title="Batalkan Jadwal Inspeksi?"
        description="Apakah Anda yakin ingin menghapus agenda jadwal ini? Teknisi yang ditugaskan akan kehilangan notifikasi inspeksi."
      />
    </div>
  );
}
