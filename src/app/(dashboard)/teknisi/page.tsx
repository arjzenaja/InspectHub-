"use client";

import { useEffect, useState } from "react";
import { 
  Plus, 
  Search, 
  RotateCcw, 
  Trash2, 
  Edit3, 
  Filter,
  Users,
  Award,
  ShieldCheck,
  CheckCircle,
  Key,
  Copy,
  Star
} from "lucide-react";
import { toast } from "sonner";
import ConfirmDeleteDialog from "@/components/shared/ConfirmDeleteDialog";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import Avatar from "@/components/shared/Avatar";
import TambahTeknisiDrawer from "@/components/teknisi/TambahTeknisiDrawer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PremiumSelect } from "@/components/ui/premium-select";

interface Teknisi {
  id: string;
  nama: string;
  idKaryawan: string;
  email: string;
  noHp?: string | null;
  divisi: string;
  avatarUrl?: string | null;
  status: string;
  inspeksiSelesai: number;
  rating: number;
}

export default function TeknisiPage() {
  const [data, setData] = useState<Teknisi[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Filters state
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterDivisi, setFilterDivisi] = useState("all");

  // Drawer / Modal state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedTeknisi, setSelectedTeknisi] = useState<Teknisi | null>(null);
  
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [teknisiToDelete, setTeknisiToDelete] = useState<string | null>(null);

  // Password reset state
  const [resetPassOpen, setResetPassOpen] = useState(false);
  const [teknisiToReset, setTeknisiToReset] = useState<Teknisi | null>(null);

  // Success account modal state
  const [createdAccount, setCreatedAccount] = useState<{
    namaLengkap: string;
    email: string;
    password: string;
    idKaryawan: string;
  } | null>(null);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = `/api/teknisi?search=${encodeURIComponent(search)}&status=${filterStatus}&divisi=${filterDivisi}`;
      const res = await fetch(url);
      const items = await res.json();
      setData(items);
    } catch {
      toast.error("Gagal memuat data teknisi");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [search, filterStatus, filterDivisi]);

  const handleResetFilters = () => {
    setSearch("");
    setFilterStatus("all");
    setFilterDivisi("all");
    setCurrentPage(1);
    toast.info("Filter berhasil direset");
  };

  const handleSaveTeknisi = async (formData: any) => {
    const isEdit = !!selectedTeknisi;
    const url = isEdit ? `/api/teknisi/${selectedTeknisi.id}` : "/api/teknisi";
    const method = isEdit ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        toast.success(isEdit ? "Profil teknisi berhasil diubah" : "Teknisi berhasil didaftarkan");
        fetchData();

        if (!isEdit) {
          setCreatedAccount({
            namaLengkap: formData.namaLengkap,
            email: result.data?.loginInfo?.email || formData.email,
            password: result.data?.loginInfo?.password || formData.password || "Teknisi@123",
            idKaryawan: result.data?.idKaryawan || result.idKaryawan || "",
          });
        }
      } else {
        toast.error(result.message || result.error || "Gagal menyimpan teknisi");
      }
    } catch (error) {
      console.error(error);
      toast.error("Terjadi kesalahan sistem");
    }
  };

  const handleDeleteTeknisi = async () => {
    if (!teknisiToDelete) return;
    try {
      const res = await fetch(`/api/teknisi/${teknisiToDelete}`, {
        method: "DELETE",
        credentials: "include",
      });
      if (res.ok) {
        toast.success("Teknisi berhasil dihapus");
        fetchData();
      } else {
        toast.error("Gagal menghapus teknisi");
      }
    } catch {
      toast.error("Terjadi kesalahan sistem");
    } finally {
      setTeknisiToDelete(null);
    }
  };

  const handleConfirmResetPassword = () => {
    if (!teknisiToReset) return;
    toast.success(`Kata sandi untuk ${teknisiToReset.nama} (${teknisiToReset.idKaryawan}) berhasil direset ke sandi bawaan.`);
    setResetPassOpen(false);
    setTeknisiToReset(null);
  };

  // Stats derivation
  const totalTeknisi = data.length;
  const teknisiAktif = data.filter((t) => t.status === "aktif").length;
  const onLeaveCount = data.filter((t) => t.status === "on_leave").length;
  
  const avgRating = totalTeknisi > 0 
    ? (data.reduce((acc, curr) => acc + curr.rating, 0) / totalTeknisi).toFixed(1) 
    : "0.0";

  // Pagination slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const statusOptions = [
    { value: "all", label: "Semua Status" },
    { value: "aktif", label: "Aktif" },
    { value: "standby", label: "Standby" },
    { value: "on_leave", label: "On Leave" }
  ];

  const divisiOptions = [
    { value: "all", label: "Semua Divisi" },
    { value: "Transmisi", label: "Transmisi" },
    { value: "Distribusii", label: "Distribusii" },
    { value: "Gardu Induk", label: "Gardu Induk" }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header spacing */}
      <PageHeader
        greeting="Hello, Admin"
        title="Master Data Teknisi"
        subtitle="Registrasi akun teknisi, kelola divisi tugas, pantau performa rating & keaktifan."
        action={
          <button
            onClick={() => {
              setSelectedTeknisi(null);
              setDrawerOpen(true);
            }}
            className="px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer"
          >
            <Plus size={18} strokeWidth={1.5} />
            Tambah Teknisi
          </button>
        }
      />

      {/* Top Stat Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { label: "Total Teknisi", value: totalTeknisi, sub: "Tercatat di sistem", icon: <Users size={18} />, bg: "bg-neutral-100", text: "text-neutral-700" },
          { label: "Teknisi Pembantu", value: teknisiAktif, sub: "Siap bertugas", icon: <ShieldCheck size={18} />, bg: "bg-green-100", text: "text-green-600" },
          { label: "On Leave", value: onLeaveCount, sub: "Sedang cuti / sakit", icon: <RotateCcw size={18} />, bg: "bg-red-100", text: "text-red-600" },
          { 
            label: "Avg Rating", 
            value: (
              <div className="flex items-center gap-1">
                {avgRating} <Star size={16} className="text-amber-500 fill-amber-500" />
              </div>
            ), 
            sub: "Rating kepuasan", 
            icon: <Award size={18} />, 
            bg: "bg-amber-100", 
            text: "text-amber-600" 
          },
        ].map((c) => (
          <div key={c.label} className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#6B7280]">{c.label}</p>
              <div className="text-2xl font-bold text-[#111827] mt-1">{c.value}</div>
              <p className="text-xs text-[#6B7280] mt-1">{c.sub}</p>
            </div>
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.bg} ${c.text}`}>
              {c.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Filter toolbar */}
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          {/* Search Bar */}
          <div className="relative md:col-span-2">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari nama teknisi atau ID Karyawan..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all placeholder:text-neutral-400"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          </div>

          {/* Status Dropdown */}
          <div className="flex flex-col">
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
          </div>

          {/* Divisi & Reset */}
          <div className="flex gap-2.5">
            <PremiumSelect
              options={divisiOptions}
              value={filterDivisi}
              onChange={(val) => {
                setFilterDivisi(val);
                setCurrentPage(1);
              }}
              placeholder="Semua Divisi"
              className="flex-1"
            />

            <button
              onClick={handleResetFilters}
              className="p-2.5 rounded-xl border border-[#E5E7EB] hover:bg-neutral-50 text-[#6B7280] hover:text-[#111827] transition-all cursor-pointer bg-white"
              title="Reset Filters"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Technicians Data Table */}
      {isLoading ? (
        <LoadingSkeleton rows={5} />
      ) : data.length === 0 ? (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-16 text-center shadow-sm">
          <Users size={40} className="mx-auto text-[#6B7280] mb-3" />
          <h4 className="font-bold text-lg text-[#111827]">Tidak Ada Teknisi</h4>
          <p className="text-sm text-[#6B7280] mt-1 max-w-sm mx-auto">
            Tidak ada teknisi yang cocok dengan pencarian atau filter Anda.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[850px]">
              <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Teknisi</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Email & No HP</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Divisi</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Inspeksi Selesai</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280] text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]/60">
                {currentItems.map((item) => (
                  <tr key={item.id} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar src={item.avatarUrl} name={item.nama} size="md" />
                        <div>
                          <p className="text-sm font-semibold text-[#111827]">{item.nama}</p>
                          <span className="text-xs font-mono text-neutral-400 font-bold">{item.idKaryawan}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#374151]">
                      <p>{item.email}</p>
                      <p className="text-xs text-neutral-400 mt-0.5">{item.noHp || "-"}</p>
                    </td>
                    <td className="px-6 py-4 text-sm text-[#374151]">
                      {item.divisi}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-[#111827] pl-10">
                      {item.inspeksiSelesai}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span 
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          item.status === "aktif"
                            ? "bg-green-50 text-green-700 border border-green-200"
                            : item.status === "standby"
                            ? "bg-blue-50 text-blue-700 border border-blue-200"
                            : "bg-red-50 text-red-700 border border-red-200"
                        }`}
                      >
                        {item.status === "aktif" ? "Aktif" : item.status === "standby" ? "Standby" : "On Leave"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => {
                            setTeknisiToReset(item);
                            setResetPassOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-[#6B7280] hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer"
                          title="Reset Password Kredensial"
                        >
                          <Key size={16} />
                        </button>
                        <button
                          onClick={() => {
                            setSelectedTeknisi(item);
                            setDrawerOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-[#6B7280] hover:text-amber-600 hover:bg-amber-50 transition-all cursor-pointer"
                          title="Edit Teknisi"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => {
                            setTeknisiToDelete(item.id);
                            setDeleteDialogOpen(true);
                          }}
                          className="p-1.5 rounded-lg text-[#6B7280] hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer"
                          title="Hapus Teknisi"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
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
                </span> dari <span className="font-semibold text-[#111827]">{data.length}</span> teknisi
              </span>

              <div className="flex gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  className="px-3.5 py-1.5 border border-[#E5E7EB] hover:bg-neutral-50 text-xs font-bold text-[#374151] rounded-lg transition-all cursor-pointer bg-white"
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
                  className="px-3.5 py-1.5 border border-[#E5E7EB] hover:bg-neutral-50 text-xs font-bold text-[#374151] rounded-lg transition-all cursor-pointer bg-white"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tambah/Edit/Register Teknisi Drawer */}
      <TambahTeknisiDrawer
        isOpen={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedTeknisi(null);
        }}
        onSave={handleSaveTeknisi}
        initialData={selectedTeknisi}
      />

      {/* Delete Confirmation */}
      <ConfirmDeleteDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setTeknisiToDelete(null);
        }}
        onConfirm={handleDeleteTeknisi}
        title="Hapus Teknisi?"
        description="Apakah Anda yakin ingin menghapus data teknisi ini? Seluruh riwayat laporan atau jadwal yang berkaitan dengan teknisi ini juga akan terpengaruh."
      />

      {/* Success account modal */}
      {createdAccount && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" />
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl max-w-[440px] w-full shadow-2xl p-0 overflow-hidden z-10">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 px-6 pt-8 pb-6 text-center">
              <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle size={28} className="text-white" strokeWidth={2} />
              </div>
              <h2 className="text-xl font-bold text-white">Teknisi Berhasil Ditambahkan!</h2>
              <p className="text-green-100 text-sm mt-1">
                Akun telah dibuat dan siap digunakan
              </p>
            </div>

            <div className="px-6 py-5 space-y-4">
              <div className="flex justify-between items-center py-2.5 border-b border-[#F3F4F6]">
                <span className="text-sm text-[#6B7280]">ID Karyawan</span>
                <span className="text-sm font-bold text-[#111827] font-mono">
                  {createdAccount.idKaryawan}
                </span>
              </div>

              <div className="flex justify-between items-center py-2.5 border-b border-[#F3F4F6]">
                <span className="text-sm text-[#6B7280]">Nama</span>
                <span className="text-sm font-semibold text-[#111827]">
                  {createdAccount.namaLengkap}
                </span>
              </div>

              <div className="bg-[#FEF2F2] border border-[#FECACA] rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Key size={14} className="text-[#DC2626]" />
                  <p className="text-xs font-bold text-[#DC2626] uppercase tracking-wide">
                    Kredensial Login Mobile
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#6B7280]">Email</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-semibold text-[#111827]">
                        {createdAccount.email}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(createdAccount.email);
                          toast.success("Email disalin!");
                        }}
                        className="p-1 hover:bg-[#DC2626]/10 rounded-lg"
                      >
                        <Copy size={12} className="text-[#DC2626]" />
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#6B7280]">Password</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono font-bold text-[#DC2626] tracking-wider">
                        {createdAccount.password}
                      </span>
                      <button
                        onClick={() => {
                          navigator.clipboard.writeText(createdAccount.password);
                          toast.success("Password disalin!");
                        }}
                        className="p-1 hover:bg-[#DC2626]/10 rounded-lg"
                      >
                        <Copy size={12} className="text-[#DC2626]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl p-3">
                <div className="text-amber-600 mt-0.5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path d="M12 7v4"/><path d="M12 15h.01"/><path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/></svg>
                </div>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Informasikan kredensial ini kepada teknisi secara langsung.
                  Password hanya ditampilkan <strong>satu kali</strong> dan tidak bisa dilihat lagi.
                </p>
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => setCreatedAccount(null)}
                  className="flex-1 border border-[#E5E7EB] rounded-xl py-2.5 text-sm font-medium hover:bg-[#F9FAFB] transition-colors"
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    setCreatedAccount(null);
                    setSelectedTeknisi(null);
                    setDrawerOpen(true);
                  }}
                  className="flex-1 bg-[#DC2626] text-white rounded-xl py-2.5 text-sm font-bold hover:bg-[#B91C1C] transition-colors"
                >
                  + Tambah Lagi
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Reset Password Modal Confirmation */}
      {resetPassOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" />
          <div className="relative bg-white border border-[#E5E7EB] rounded-2xl max-w-sm w-full shadow-2xl p-6 z-10">
            <h3 className="text-base font-bold text-[#111827]">Reset Kredensial Password?</h3>
            <p className="text-xs text-[#6B7280] mt-2 leading-relaxed">
              Anda akan mereset kata sandi teknisi <span className="font-semibold text-[#111827]">{teknisiToReset?.nama}</span>. Kata sandi akan dikembalikan ke sandi bawaan aplikasi.
            </p>
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => {
                  setResetPassOpen(false);
                  setTeknisiToReset(null);
                }}
                className="px-4 py-2 border border-[#E5E7EB] hover:bg-neutral-50 text-[#374151] font-semibold text-sm rounded-xl transition-all cursor-pointer bg-white"
              >
                Batal
              </button>
              <button
                onClick={handleConfirmResetPassword}
                className="px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Ya, Reset
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
