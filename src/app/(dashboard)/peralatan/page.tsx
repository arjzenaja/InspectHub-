"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { 
  Plus, 
  Search, 
  Download, 
  RotateCcw, 
  Trash2, 
  Edit3, 
  QrCode, 
  Filter,
  Archive,
  Calendar,
  AlertTriangle,
  MapPin
} from "lucide-react";
import { toast } from "sonner";
import { exportToCSV } from "@/lib/exportCSV";
import ConfirmDeleteDialog from "@/components/shared/ConfirmDeleteDialog";
import LoadingSkeleton from "@/components/shared/LoadingSkeleton";
import QRCodeModal from "@/components/peralatan/QRCodeModal";
import TambahPeralatanDrawer from "@/components/peralatan/TambahPeralatanDrawer";
import { PageHeader } from "@/components/layout/PageHeader";
import { PremiumSelect } from "@/components/ui/premium-select";
import JenisPeralatanModal from "@/components/peralatan/JenisPeralatanModal";

interface Peralatan {
  id: string;
  kodeId: string;
  nama: string;
  jenis: string;
  lokasi: string;
  kota?: string | null;
  lokasiId?: string | null;
  noRegister?: string | null;
  fotoUrl?: string | null;
  kapasitas?: string | null;
  tinggiDimensi?: string | null;
  jenisKabel?: string | null;
  masaBerlaku?: string | Date | null;
  status: string;
  createdAt: string;
}

export default function PeralatanPage() {
  const [data, setData] = useState<Peralatan[]>([]);
  const [jenisList, setJenisList] = useState<{ id: string; nama: string }[]>([]);
  const [lokasiList, setLokasiList] = useState<{ id: string; nama: string; kota: string }[]>([]);
  
  // Filters state
  const [search, setSearch] = useState("");
  const [filterJenis, setFilterJenis] = useState("all");
  const [filterLokasi, setFilterLokasi] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const [isLoading, setIsLoading] = useState(true);

  // Modal / Drawer state
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPeralatan, setSelectedPeralatan] = useState<Peralatan | null>(null);
  
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [peralatanToDelete, setPeralatanToDelete] = useState<string | null>(null);

  const [qrModalOpen, setQrModalOpen] = useState(false);
  const [qrPeralatan, setQrPeralatan] = useState<any | null>(null);

  // Master Jenis Peralatan Modal state
  const [showJenisModal, setShowJenisModal] = useState(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const url = `/api/peralatan?search=${encodeURIComponent(search)}&jenis=${filterJenis}&lokasi=${filterLokasi}&status=${filterStatus}`;
      const res = await fetch(url);
      const items = await res.json();
      setData(items);
    } catch {
      toast.error("Gagal memuat data peralatan");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPrerequisites = async () => {
    try {
      const [resJenis, resLokasi] = await Promise.all([
        fetch("/api/jenis-peralatan"),
        fetch("/api/lokasi")
      ]);
      const jList = await resJenis.json();
      const lList = await resLokasi.json();
      setJenisList(Array.isArray(jList) ? jList : jList.data?.jenis ?? jList.data ?? []);
      setLokasiList(Array.isArray(lList) ? lList : lList.data?.lokasi ?? lList.data ?? []);
    } catch {
      console.error("Gagal memuat prasyarat");
    }
  };

  useEffect(() => {
    fetchPrerequisites();
  }, []);

  useEffect(() => {
    fetchData();
  }, [search, filterJenis, filterLokasi, filterStatus]);

  const handleResetFilters = () => {
    setSearch("");
    setFilterJenis("all");
    setFilterLokasi("all");
    setFilterStatus("all");
    setCurrentPage(1);
    toast.info("Filter berhasil direset");
  };

  const handleSavePeralatan = async (formData: any) => {
    const isEdit = !!selectedPeralatan;
    const url = isEdit ? `/api/peralatan/${selectedPeralatan.id}` : "/api/peralatan";
    const method = isEdit ? "PUT" : "POST";
    
    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await res.json();

      if (res.ok) {
        toast.success(isEdit ? `Peralatan ${result.kodeId} berhasil diubah!` : `Peralatan ${result.kodeId} berhasil disimpan!`);
        fetchData();
        
        if (!isEdit) {
          // Open QR Modal for new items
          setQrPeralatan(result);
          setQrModalOpen(true);
        }
      } else {
        toast.error(result.error || "Gagal menyimpan peralatan");
      }
    } catch {
      toast.error("Terjadi kesalahan sistem");
    }
  };

  const handleDeletePeralatan = async () => {
    if (!peralatanToDelete) return;
    try {
      const res = await fetch(`/api/peralatan/${peralatanToDelete}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Peralatan berhasil dihapus");
        fetchData();
      } else {
        toast.error("Gagal menghapus peralatan");
      }
    } catch {
      toast.error("Terjadi kesalahan sistem");
    } finally {
      setPeralatanToDelete(null);
    }
  };

  const handleExport = () => {
    if (data.length === 0) {
      toast.warning("Tidak ada data untuk diexport");
      return;
    }
    const exportData = data.map(p => ({
      "ID Peralatan": p.kodeId,
      "Nama": p.nama,
      "Jenis": p.jenis,
      "Lokasi": p.lokasi,
      "Kota": p.kota ?? "",
      "No. Register": p.noRegister ?? "",
      "Kapasitas": p.kapasitas ?? "",
      "Masa Berlaku": p.masaBerlaku ? new Date(p.masaBerlaku).toLocaleDateString("id-ID") : "",
      "Status": p.status,
    }));
    exportToCSV(exportData, "master-peralatan");
    toast.success(`${exportData.length} data berhasil diexport`);
  };

  // Pagination slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Options map helper for selects
  const jenisOptions = [
    { value: "all", label: "Semua Jenis" },
    ...jenisList.map(j => ({ value: j.nama, label: j.nama }))
  ];

  const lokasiOptions = [
    { value: "all", label: "Semua Lokasi" },
    ...lokasiList.map(l => ({ value: l.nama, label: l.nama }))
  ];

  const statusOptions = [
    { value: "all", label: "Semua Status" },
    { value: "aktif", label: "Aktif" },
    { value: "tidak_aktif", label: "Tidak Aktif" },
    { value: "maintenance", label: "Maintenance" }
  ];

  return (
    <div className="space-y-6">
      {/* Page Header spacing */}
      <PageHeader
        greeting="Hello, Admin"
        title="Master Data Peralatan"
        subtitle="Kelola katalog, detail, spesifikasi, dan cetak QR Code peralatan listrik."
        action={
          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <button
              onClick={handleExport}
              className="px-4 py-2.5 bg-white border border-[#E5E7EB] hover:bg-neutral-50 text-[#374151] font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <Download size={18} strokeWidth={1.5} />
              Export CSV
            </button>
            <button
              onClick={() => setShowJenisModal(true)}
              className="px-4 py-2.5 bg-white border border-[#E5E7EB] hover:bg-neutral-50 text-[#374151] font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <Edit3 size={18} strokeWidth={1.5} />
              Kelola Jenis
            </button>
            <Link
              href="/lokasi"
              className="px-4 py-2.5 bg-white border border-[#E5E7EB] hover:bg-neutral-50 text-[#374151] font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer"
            >
              <MapPin size={18} strokeWidth={1.5} />
              Kelola Lokasi
            </Link>
            <button
              onClick={() => {
                setSelectedPeralatan(null);
                setDrawerOpen(true);
              }}
              className="px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm focus:ring-4 focus:ring-red-100 cursor-pointer"
            >
              <Plus size={18} strokeWidth={1.5} />
              Tambah Peralatan
            </button>
          </div>
        }
      />

      {/* Warning alert if no types are registered yet */}
      {jenisList.length === 0 && !isLoading && (
        <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl flex items-start gap-3">
          <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-bold">Prasyarat Wajib:</span> Halaman master peralatan memerlukan
            <span className="font-bold"> Jenis Peralatan</span> yang terdaftar terlebih dahulu. Silakan hubungi admin atau pastikan database sudah ter-seed untuk mengaktifkan dropdown.
          </div>
        </div>
      )}

      {/* Warning alert if no locations are registered yet */}
      {lokasiList.length === 0 && !isLoading && (
        <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-2xl flex items-start gap-3">
          <AlertTriangle size={20} className="text-amber-600 flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <span className="font-bold">Prasyarat Wajib:</span> Halaman master peralatan memerlukan
            <span className="font-bold"> Lokasi Substation</span> yang terdaftar terlebih dahulu. Silakan hubungi admin atau pastikan database sudah ter-seed, atau tambahkan lokasi baru di halaman <Link href="/lokasi" className="font-bold underline hover:text-[#DC2626]">Master Lokasi</Link>.
          </div>
        </div>
      )}

      {/* Filter Toolbar Box */}
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-sm font-bold text-[#111827]">
          <Filter size={16} className="text-[#6B7280]" />
          Filter Pencarian
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Cari ID atau nama alat..."
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all placeholder:text-neutral-400"
            />
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6B7280]" />
          </div>

          {/* Jenis Dropdown */}
          <div className="flex flex-col">
            <PremiumSelect
              options={jenisOptions}
              value={filterJenis}
              onChange={(val) => {
                setFilterJenis(val);
                setCurrentPage(1);
              }}
              placeholder="Semua Jenis"
              searchable={true}
              className="w-full"
            />
          </div>

          {/* Lokasi Dropdown */}
          <div className="flex flex-col">
            <PremiumSelect
              options={lokasiOptions}
              value={filterLokasi}
              onChange={(val) => {
                setFilterLokasi(val);
                setCurrentPage(1);
              }}
              placeholder="Semua Lokasi"
              searchable={true}
              className="w-full"
            />
          </div>

          {/* Status Dropdown */}
          <div className="flex gap-2.5">
            <PremiumSelect
              options={statusOptions}
              value={filterStatus}
              onChange={(val) => {
                setFilterStatus(val);
                setCurrentPage(1);
              }}
              placeholder="Semua Status"
              className="flex-1"
            />

            <button
              onClick={handleResetFilters}
              className="p-2.5 rounded-xl border border-[#E5E7EB] hover:bg-neutral-50 text-[#6B7280] hover:text-[#111827] transition-all flex items-center justify-center cursor-pointer bg-white"
              title="Reset Filters"
            >
              <RotateCcw size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Data Table */}
      {isLoading ? (
        <LoadingSkeleton rows={6} />
      ) : data.length === 0 ? (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-16 text-center shadow-sm">
          <Archive size={40} className="mx-auto text-[#6B7280] mb-3" />
          <h4 className="font-bold text-lg text-[#111827]">Tidak Ada Peralatan</h4>
          <p className="text-sm text-[#6B7280] mt-1 max-w-sm mx-auto">
            Tidak ada peralatan yang cocok dengan filter atau pencarian Anda. Silakan coba reset filter atau buat peralatan baru.
          </p>
        </div>
      ) : (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm flex flex-col">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[900px]">
              <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB]">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">ID Peralatan</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Nama Peralatan</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Jenis</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Substation / Lokasi</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Kota</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">No. Register</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Masa Berlaku</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Status</th>
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-[#6B7280] text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]/60">
                {currentItems.map((item) => {
                  const isExpired = item.masaBerlaku && new Date(item.masaBerlaku) < new Date();
                  
                  return (
                    <tr key={item.id} className="hover:bg-neutral-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm font-mono font-bold text-[#DC2626]">
                        {item.kodeId}
                      </td>
                      <td className="px-6 py-4 text-sm font-semibold text-[#111827]">
                        {item.nama}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#374151]">
                        {item.jenis}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#374151]">
                        {item.lokasi}
                      </td>
                      <td className="px-6 py-4 text-sm text-[#374151]">
                        {item.kota || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm text-neutral-400 font-medium">
                        {item.noRegister || "-"}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {item.masaBerlaku ? (
                          <div className="flex items-center gap-1.5 font-medium">
                            <Calendar size={14} className="text-[#6B7280]" />
                            <span className={isExpired ? "text-[#DC2626]" : "text-[#374151]"}>
                              {new Date(item.masaBerlaku).toLocaleDateString("id-ID")}
                            </span>
                            {isExpired && (
                              <span className="text-[10px] font-bold bg-red-50 text-[#DC2626] px-1.5 py-0.5 rounded-md uppercase tracking-wider">
                                Expired
                              </span>
                            )}
                          </div>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span 
                          className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold leading-none ${
                            item.status === "aktif"
                              ? "bg-green-50 text-green-700 border border-green-200"
                              : item.status === "maintenance"
                              ? "bg-amber-50 text-amber-700 border border-amber-200"
                              : "bg-neutral-100 text-neutral-600 border border-neutral-200"
                          }`}
                        >
                          {item.status === "aktif" 
                            ? "Aktif" 
                            : item.status === "maintenance" 
                            ? "Maintenance" 
                            : "Tidak Aktif"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-center">
                        <div className="flex items-center justify-center gap-2">
                          <button
                            onClick={() => {
                              setQrPeralatan(item);
                              setQrModalOpen(true);
                            }}
                            className="p-1.5 rounded-lg text-[#6B7280] hover:text-indigo-600 hover:bg-indigo-50 transition-all cursor-pointer"
                            title="Tampilkan QR Code"
                          >
                            <QrCode size={16} />
                          </button>
                          <button
                            onClick={() => {
                              setSelectedPeralatan(item);
                              setDrawerOpen(true);
                            }}
                            className="p-1.5 rounded-lg text-[#6B7280] hover:text-amber-600 hover:bg-amber-50 transition-all cursor-pointer"
                            title="Edit Peralatan"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => {
                              setPeralatanToDelete(item.id);
                              setDeleteDialogOpen(true);
                            }}
                            className="p-1.5 rounded-lg text-[#6B7280] hover:text-red-600 hover:bg-red-50 transition-all cursor-pointer"
                            title="Hapus Peralatan"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Pagination controls */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between border-t border-[#E5E7EB] bg-white px-6 py-4">
              <span className="text-sm text-[#6B7280]">
                Menampilkan <span className="font-semibold text-[#111827]">{indexOfFirstItem + 1}</span>-
                <span className="font-semibold text-[#111827]">
                  {Math.min(indexOfLastItem, data.length)}
                </span> dari <span className="font-semibold text-[#111827]">{data.length}</span> peralatan
              </span>

              <div className="flex gap-2">
                <button
                  disabled={currentPage === 1}
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className="px-3.5 py-1.5 border border-[#E5E7EB] hover:bg-neutral-50 text-xs font-bold text-[#374151] rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-white"
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
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className="px-3.5 py-1.5 border border-[#E5E7EB] hover:bg-neutral-50 text-xs font-bold text-[#374151] rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer bg-white"
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tambah/Edit Drawer */}
      <TambahPeralatanDrawer
        isOpen={drawerOpen}
        onClose={() => {
          setDrawerOpen(false);
          setSelectedPeralatan(null);
        }}
        onSave={handleSavePeralatan}
        initialData={selectedPeralatan}
        jenisPeralatan={jenisList}
        lokasiList={lokasiList}
      />

      {/* QR Display Modal */}
      <QRCodeModal
        isOpen={qrModalOpen}
        onClose={() => {
          setQrModalOpen(false);
          setQrPeralatan(null);
        }}
        peralatan={qrPeralatan}
      />

      {/* Delete Dialog */}
      <ConfirmDeleteDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setPeralatanToDelete(null);
        }}
        onConfirm={handleDeletePeralatan}
        title="Hapus Peralatan?"
        description="Apakah Anda yakin ingin menghapus data peralatan ini? Semua riwayat jadwal dan laporan terkait alat ini juga akan dihapus permanen."
      />

      {/* CRUD Jenis Peralatan Modal */}
      <JenisPeralatanModal
        isOpen={showJenisModal}
        onClose={() => setShowJenisModal(false)}
        jenisList={jenisList}
        onRefresh={fetchPrerequisites}
      />
    </div>
  );
}
