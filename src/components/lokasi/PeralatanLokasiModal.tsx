"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Package, Search, Loader2, AlertCircle } from "lucide-react";

interface Peralatan {
  id: string;
  kodeId: string;
  nama: string;
  jenis: string;
  status: string;
  noRegister: string | null;
}

interface PeralatanLokasiModalProps {
  isOpen: boolean;
  onClose: () => void;
  lokasiId: string | null;
  lokasiNama: string;
}

const STATUS_CONFIG: Record<string, { label: string; cls: string }> = {
  aktif: { label: "Aktif", cls: "bg-green-50 text-green-700 border border-green-200" },
  nonaktif: { label: "Non-Aktif", cls: "bg-neutral-100 text-neutral-500 border border-neutral-200" },
  rusak: { label: "Rusak", cls: "bg-red-50 text-red-700 border border-red-200" },
  maintenance: { label: "Maintenance", cls: "bg-amber-50 text-amber-700 border border-amber-200" },
};

export function PeralatanLokasiModal({ isOpen, onClose, lokasiId, lokasiNama }: PeralatanLokasiModalProps) {
  const [peralatanList, setPeralatanList] = useState<Peralatan[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!isOpen || !lokasiId) return;
    setSearch("");
    setIsLoading(true);
    fetch(`/api/peralatan?lokasiId=${lokasiId}`)
      .then((r) => r.json())
      .then((d) => setPeralatanList(Array.isArray(d) ? d : d?.data ?? []))
      .catch(() => setPeralatanList([]))
      .finally(() => setIsLoading(false));
  }, [isOpen, lokasiId]);

  const filtered = peralatanList.filter(
    (p) =>
      p.nama.toLowerCase().includes(search.toLowerCase()) ||
      p.kodeId.toLowerCase().includes(search.toLowerCase()) ||
      p.jenis.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs cursor-pointer"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl flex flex-col z-10 overflow-hidden"
            style={{ maxHeight: "80vh" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <Package size={16} className="text-[#DC2626]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#111827]">Daftar Peralatan</h3>
                  <p className="text-xs text-[#6B7280]">{lokasiNama}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Search Bar */}
            <div className="px-6 py-3 border-b border-[#F3F4F6] flex-shrink-0">
              <div className="relative">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Cari kode, nama, atau jenis peralatan..."
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
                />
                <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {isLoading ? (
                <div className="flex items-center justify-center py-16">
                  <Loader2 size={28} className="animate-spin text-[#DC2626]" />
                </div>
              ) : filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-14 text-[#9CA3AF]">
                  <AlertCircle size={32} className="mb-2 opacity-50" />
                  <p className="text-sm font-semibold">
                    {search ? "Peralatan tidak ditemukan" : "Tidak ada peralatan di lokasi ini"}
                  </p>
                  {search && <p className="text-xs mt-1">Coba kata kunci lain</p>}
                </div>
              ) : (
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#F8FAFC] border-b border-[#E5E7EB] sticky top-0">
                    <tr>
                      <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Kode / Nama</th>
                      <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Jenis</th>
                      <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">No. Register</th>
                      <th className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F3F4F6]">
                    {filtered.map((p) => {
                      const sc = STATUS_CONFIG[p.status] || { label: p.status, cls: "bg-neutral-50 text-neutral-600 border border-neutral-200" };
                      return (
                        <tr key={p.id} className="hover:bg-neutral-50/50 transition-colors">
                          <td className="px-6 py-3.5">
                            <span className="text-[10px] font-mono font-bold text-[#DC2626] bg-red-50 px-1.5 py-0.5 rounded">{p.kodeId}</span>
                            <p className="text-sm font-semibold text-[#111827] mt-1">{p.nama}</p>
                          </td>
                          <td className="px-6 py-3.5 text-sm text-[#374151]">{p.jenis}</td>
                          <td className="px-6 py-3.5 text-xs font-mono text-[#6B7280]">{p.noRegister || "—"}</td>
                          <td className="px-6 py-3.5">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${sc.cls}`}>
                              {sc.label}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              )}
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-[#E5E7EB] flex-shrink-0 flex items-center justify-between bg-[#F9FAFB]">
              <span className="text-xs text-[#6B7280]">
                {isLoading ? "Memuat..." : `${filtered.length} dari ${peralatanList.length} peralatan`}
              </span>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-[#E5E7EB] bg-white hover:bg-neutral-50 text-[#374151] font-semibold text-sm rounded-xl transition-all cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
