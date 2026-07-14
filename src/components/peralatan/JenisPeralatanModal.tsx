"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Plus, Pencil, Trash2, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface JenisPeralatanModalProps {
  isOpen: boolean;
  onClose: () => void;
  jenisList: { id: string; nama: string }[];
  onRefresh: () => void;
}

export default function JenisPeralatanModal({
  isOpen,
  onClose,
  jenisList,
  onRefresh,
}: JenisPeralatanModalProps) {
  const [newJenis, setNewJenis] = useState("");
  const [editingJenisId, setEditingJenisId] = useState<string | null>(null);
  const [editJenisValue, setEditJenisValue] = useState("");

  const handleTambahJenis = async () => {
    if (!newJenis.trim()) return;

    try {
      const res = await fetch("/api/jenis-peralatan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama: newJenis.trim() }),
      });
      if (res.ok) {
        toast.success(`Jenis peralatan "${newJenis.trim()}" berhasil ditambahkan`);
        setNewJenis("");
        onRefresh();
      } else {
        const err = await res.json();
        toast.error(err.error || "Gagal menambahkan jenis peralatan");
      }
    } catch {
      toast.error("Gagal menghubungi server");
    }
  };

  const handleSaveEditJenis = async (id: string) => {
    if (!editJenisValue.trim()) {
      setEditingJenisId(null);
      return;
    }
    try {
      const res = await fetch(`/api/jenis-peralatan/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nama: editJenisValue.trim() }),
      });
      if (res.ok) {
        toast.success("Jenis peralatan berhasil diubah");
        setEditingJenisId(null);
        onRefresh();
      } else {
        const err = await res.json();
        toast.error(err.error || "Gagal mengubah jenis peralatan");
      }
    } catch {
      toast.error("Gagal menghubungi server");
    }
  };

  const handleHapusJenis = async (id: string) => {
    if (!confirm("Apakah Anda yakin ingin menghapus jenis peralatan ini?")) return;
    try {
      const res = await fetch(`/api/jenis-peralatan/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Jenis peralatan berhasil dihapus");
        onRefresh();
      } else {
        toast.error("Gagal menghapus jenis peralatan");
      }
    } catch {
      toast.error("Gagal menghubungi server");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={open => !open && onClose()}>
      <DialogContent className="max-w-[480px] rounded-2xl bg-white p-6">
        <DialogHeader>
          <DialogTitle>Master Jenis Peralatan</DialogTitle>
          <DialogDescription>Kelola daftar jenis peralatan</DialogDescription>
        </DialogHeader>

        {/* Form tambah jenis */}
        <div className="flex gap-2 mt-4 mb-4">
          <input
            value={newJenis}
            onChange={e => setNewJenis(e.target.value)}
            placeholder="Nama jenis peralatan..."
            className="flex-1 border border-[#E5E7EB] rounded-xl px-3 py-2 text-sm bg-[#F9FAFB]
                       focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] focus:outline-none"
            onKeyDown={e => e.key === "Enter" && handleTambahJenis()}
          />
          <button
            type="button"
            onClick={handleTambahJenis}
            disabled={!newJenis.trim()}
            className="bg-[#DC2626] text-white px-4 py-2 rounded-xl text-sm font-semibold
                       hover:bg-[#B91C1C] disabled:opacity-50 transition-colors cursor-pointer flex items-center justify-center"
          >
            <Plus size={16} />
          </button>
        </div>

        {/* List jenis dengan edit & delete */}
        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
          <AnimatePresence initial={false}>
            {jenisList.map(jenis => (
              <motion.div
                key={jenis.id}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{    opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-2 p-3 bg-[#F9FAFB] rounded-xl
                           border border-[#E5E7EB] group"
              >
                {editingJenisId === jenis.id ? (
                  <div className="flex-1 flex items-center gap-1.5">
                    <input
                      value={editJenisValue}
                      onChange={e => setEditJenisValue(e.target.value)}
                      autoFocus
                      className="flex-1 bg-white border border-[#DC2626]/40 rounded-lg
                                 px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20"
                      onKeyDown={e => {
                        if (e.key === "Enter")  handleSaveEditJenis(jenis.id);
                        if (e.key === "Escape") setEditingJenisId(null);
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => handleSaveEditJenis(jenis.id)}
                      className="p-1 text-green-600 hover:bg-green-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <Check size={14} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setEditingJenisId(null)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded-lg transition-colors cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  </div>
                ) : (
                  <span className="flex-1 text-sm font-medium text-[#111827]">
                    {jenis.nama}
                  </span>
                )}
                
                {editingJenisId !== jenis.id && (
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      type="button"
                      onClick={() => { setEditingJenisId(jenis.id); setEditJenisValue(jenis.nama); }}
                      className="p-1.5 hover:bg-white rounded-lg transition-colors cursor-pointer"
                      title="Edit"
                    >
                      <Pencil size={13} className="text-[#6B7280]" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleHapusJenis(jenis.id)}
                      className="p-1.5 hover:bg-[#FEE2E2] rounded-lg transition-colors cursor-pointer"
                      title="Hapus"
                    >
                      <Trash2 size={13} className="text-[#DC2626]" />
                    </button>
                  </div>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}
