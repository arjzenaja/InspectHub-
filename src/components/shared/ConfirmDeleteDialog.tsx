"use client";

import React from "react";
import { AlertTriangle, X } from "lucide-react";

interface ConfirmDeleteDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  description?: string;
}

export default function ConfirmDeleteDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Hapus Data?",
  description = "Apakah Anda yakin ingin menghapus data ini? Tindakan ini tidak dapat dibatalkan.",
}: ConfirmDeleteDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white border border-[#E5E7EB] rounded-2xl max-w-md w-full shadow-2xl p-6 z-10 transition-all transform scale-100">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-[#111827] hover:bg-neutral-100 transition-colors"
        >
          <X size={16} />
        </button>

        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 flex-shrink-0">
            <AlertTriangle size={20} strokeWidth={1.5} />
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-[#111827]">{title}</h3>
            <p className="text-sm text-[#6B7280] mt-2 leading-relaxed">{description}</p>
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#E5E7EB] hover:bg-neutral-50 text-[#374151] font-semibold text-sm rounded-xl transition-all"
          >
            Batal
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="px-4 py-2 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl transition-all shadow-sm focus:ring-4 focus:ring-red-100"
          >
            Ya, Hapus
          </button>
        </div>
      </div>
    </div>
  );
}
