"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  ChevronDown, 
  MessageSquare,
  User,
  Loader2
} from "lucide-react";
import { toast } from "sonner";

type ApprovalStatus = "DISETUJUI" | "DITOLAK" | "REVISI" | "PENDING";

interface ManagerApprovalProps {
  status?: ApprovalStatus;
  managerName?: string;
  managerDivisi?: string;
  onApprove?: () => Promise<void>;
  onReject?: (note: string) => Promise<void>;
  onRevise?: (note: string) => Promise<void>;
}

export function ManagerApproval({
  status = "PENDING",
  managerName = "Manajer Inspeksi",
  managerDivisi = "Divisi Teknologi & Keselamatan",
  onApprove,
  onReject,
  onRevise,
}: ManagerApprovalProps) {
  const [revisionOpen, setRevisionOpen] = useState(false);
  const [rejectOpen, setRejectOpen] = useState(false);
  const [note, setNote] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const statusConfig: Record<ApprovalStatus, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
    DISETUJUI: {
      label: "DISETUJUI",
      color: "text-emerald-700",
      bg: "bg-emerald-50 border-emerald-200",
      icon: <CheckCircle2 size={14} className="text-emerald-600" />,
    },
    DITOLAK: {
      label: "DITOLAK",
      color: "text-red-700",
      bg: "bg-red-50 border-red-200",
      icon: <XCircle size={14} className="text-red-600" />,
    },
    REVISI: {
      label: "PERLU REVISI",
      color: "text-amber-700",
      bg: "bg-amber-50 border-amber-200",
      icon: <RotateCcw size={14} className="text-amber-600" />,
    },
    PENDING: {
      label: "MENUNGGU REVIEW",
      color: "text-neutral-500",
      bg: "bg-neutral-50 border-neutral-200",
      icon: <MessageSquare size={14} className="text-neutral-400" />,
    },
  };

  const cfg = statusConfig[status];

  const handleAction = async (type: "approve" | "reject" | "revise") => {
    if ((type === "reject" || type === "revise") && !note.trim()) {
      toast.error("Catatan revisi / alasan penolakan wajib diisi sebelum submit.");
      return;
    }
    setIsSubmitting(true);
    try {
      if (type === "approve" && onApprove) await onApprove();
      if (type === "reject" && onReject) await onReject(note);
      if (type === "revise" && onRevise) await onRevise(note);
      setNote("");
      setRevisionOpen(false);
      setRejectOpen(false);
    } catch (e) {
      toast.error("Gagal memproses aksi persetujuan.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm">
      <h3 className="font-bold text-[#111827] mb-4 text-sm">Persetujuan Manajer</h3>

      {/* Manager Profile */}
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
          <User size={18} className="text-blue-600" />
        </div>
        <div>
          <p className="text-sm font-bold text-[#111827]">{managerName}</p>
          <p className="text-xs text-[#6B7280]">{managerDivisi}</p>
        </div>
      </div>

      {/* Status Badge */}
      <div className={`flex items-center justify-center gap-2 border rounded-xl py-2 text-xs font-bold mb-4 ${cfg.bg} ${cfg.color}`}>
        {cfg.icon} {cfg.label}
      </div>

      {/* Action Buttons */}
      {(status === "PENDING" || status === "DISETUJUI") && (
        <div className="space-y-2">
          {status === "PENDING" && (
            <button
              onClick={() => handleAction("approve")}
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
            >
              <CheckCircle2 size={14} />
              Setujui Laporan
            </button>
          )}

          {/* Request Revision */}
          <button
            onClick={() => { setRevisionOpen(!revisionOpen); setRejectOpen(false); }}
            className="w-full flex items-center justify-center gap-2 py-2.5 border border-amber-200 bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
          >
            <RotateCcw size={14} />
            Minta Revisi
            <ChevronDown
              size={14}
              className={`ml-auto transition-transform duration-200 ${revisionOpen ? "rotate-180" : ""}`}
            />
          </button>

          {/* Revision Note Collapse */}
          <AnimatePresence>
            {revisionOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden"
              >
                <div className="pt-1 space-y-2">
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    rows={3}
                    placeholder="Tuliskan catatan revisi yang harus diperbaiki teknisi..."
                    className="w-full px-3 py-2.5 rounded-xl border border-[#E5E7EB] text-xs resize-none focus:outline-none focus:ring-2 focus:ring-amber-400/30 focus:border-amber-400 bg-[#F9FAFB] placeholder:text-neutral-400"
                  />
                  <button
                    onClick={() => handleAction("revise")}
                    disabled={isSubmitting || !note.trim()}
                    className="w-full py-2 bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {isSubmitting ? <Loader2 size={13} className="animate-spin" /> : <RotateCcw size={13} />}
                    Kirim Permintaan Revisi
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {status === "PENDING" && (
            <>
              {/* Reject */}
              <button
                onClick={() => { setRejectOpen(!rejectOpen); setRevisionOpen(false); }}
                className="w-full flex items-center justify-center gap-2 py-2.5 border border-red-200 bg-red-50 hover:bg-red-100 text-red-700 text-xs font-bold rounded-xl transition-all cursor-pointer"
              >
                <XCircle size={14} />
                Tolak Laporan
                <ChevronDown
                  size={14}
                  className={`ml-auto transition-transform duration-200 ${rejectOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Reject Note Collapse */}
              <AnimatePresence>
                {rejectOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-1 space-y-2">
                      <textarea
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        rows={3}
                        placeholder="Tuliskan alasan penolakan laporan ini..."
                        className="w-full px-3 py-2.5 rounded-xl border border-[#E5E7EB] text-xs resize-none focus:outline-none focus:ring-2 focus:ring-red-400/30 focus:border-red-400 bg-[#F9FAFB] placeholder:text-neutral-400"
                      />
                      <button
                        onClick={() => handleAction("reject")}
                        disabled={isSubmitting || !note.trim()}
                        className="w-full py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 text-white text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        {isSubmitting ? <Loader2 size={13} className="animate-spin" /> : <XCircle size={13} />}
                        Konfirmasi Penolakan
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      )}
    </div>
  );
}
