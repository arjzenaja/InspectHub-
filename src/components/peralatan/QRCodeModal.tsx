"use client";

import React, { useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { CheckCircle2, Download, Printer, AlertTriangle, X } from "lucide-react";
import { toast } from "sonner";

interface QRCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  peralatan: {
    kodeId: string;
    nama: string;
    lokasi: string;
    createdAt?: string | Date;
  } | null;
}

export default function QRCodeModal({ isOpen, onClose, peralatan }: QRCodeModalProps) {
  const qrRef = useRef<HTMLDivElement>(null);

  if (!isOpen || !peralatan) return null;

  const handleDownload = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) {
      toast.error("Gagal mendownload QR code");
      return;
    }

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = url;
    link.download = `QR-${peralatan.kodeId}.png`;
    link.click();
    toast.success("QR Code berhasil didownload!");
  };

  const handlePrint = () => {
    const canvas = qrRef.current?.querySelector("canvas");
    if (!canvas) return;

    const dataUrl = canvas.toDataURL("image/png");
    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      toast.error("Popup blocker aktif. Gagal mencetak.");
      return;
    }

    printWindow.document.write(`
      <html>
        <head>
          <title>Cetak QR - ${peralatan.kodeId}</title>
          <style>
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              font-family: sans-serif;
              height: 100vh;
              margin: 0;
            }
            .container {
              border: 2px border-neutral-300;
              padding: 24px;
              text-align: center;
              border-radius: 16px;
            }
            h2 { margin: 8px 0; font-size: 24px; color: #111827; }
            p { margin: 4px 0; font-size: 14px; color: #4b5563; }
            img { width: 220px; height: 220px; margin: 16px 0; }
          </style>
        </head>
        <body onload="window.print();window.close();">
          <div class="container">
            <h2>${peralatan.kodeId}</h2>
            <img src="${dataUrl}" />
            <h2>${peralatan.nama}</h2>
            <p>Lokasi: ${peralatan.lokasi}</p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const formattedDate = new Date(peralatan.createdAt || Date.now()).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative bg-white border border-[#E5E7EB] rounded-2xl max-w-md w-full shadow-2xl overflow-hidden z-10 flex flex-col">
        {/* Checkmark Success Header */}
        <div className="bg-emerald-600 p-6 text-white text-center flex flex-col items-center gap-2">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <CheckCircle2 size={28} className="text-white" />
          </div>
          <h3 className="text-lg font-bold">Peralatan Berhasil Ditambahkan!</h3>
          <p className="text-xs text-white/80">Kode QR telah digenerate secara otomatis</p>
        </div>

        {/* Modal content body */}
        <div className="p-6 space-y-5 flex-1 overflow-y-auto">
          {/* QR Area */}
          <div ref={qrRef} className="flex flex-col items-center justify-center p-4 border border-[#E5E7EB] rounded-xl bg-[#F9FAFB]">
            <QRCodeCanvas
              value={peralatan.kodeId}
              size={200}
              level="H"
              includeMargin={true}
            />
            <span className="text-sm font-mono font-bold mt-2 text-[#DC2626]">
              {peralatan.kodeId}
            </span>
          </div>

          {/* Details */}
          <div className="space-y-2.5">
            <div className="flex justify-between border-b border-[#F3F4F6] pb-2 text-sm">
              <span className="text-[#6B7280]">Nama Peralatan</span>
              <span className="font-semibold text-[#111827]">{peralatan.nama}</span>
            </div>
            <div className="flex justify-between border-b border-[#F3F4F6] pb-2 text-sm">
              <span className="text-[#6B7280]">Lokasi</span>
              <span className="font-semibold text-[#111827]">{peralatan.lokasi}</span>
            </div>
            <div className="flex justify-between border-b border-[#F3F4F6] pb-2 text-sm">
              <span className="text-[#6B7280]">Tanggal Registrasi</span>
              <span className="font-semibold text-[#111827]">{formattedDate}</span>
            </div>
          </div>

          {/* Amber Warning Alert Box */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-3.5 flex items-start gap-2.5 text-amber-800">
            <AlertTriangle size={18} className="flex-shrink-0 text-amber-600 mt-0.5" />
            <div className="text-xs">
              <p className="font-bold">Perhatian Tempel QR:</p>
              <p className="mt-1 leading-relaxed">
                Tempelkan kode QR ini pada fisik peralatan agar dapat dipindai oleh teknisi saat melakukan pemeriksaan di lapangan.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="border-t border-[#E5E7EB] p-4 bg-neutral-50 flex gap-3">
          <button
            onClick={handlePrint}
            className="flex-1 py-2.5 px-4 border border-[#E5E7EB] hover:bg-white text-[#374151] font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Printer size={16} strokeWidth={1.5} />
            Cetak QR
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 py-2.5 px-4 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all shadow-sm"
          >
            <Download size={16} strokeWidth={1.5} />
            Download PNG
          </button>
        </div>

        <button
          onClick={onClose}
          className="py-3 text-center border-t border-[#E5E7EB] hover:bg-neutral-100 text-sm font-bold text-[#6B7280] hover:text-[#111827] transition-all bg-white"
        >
          Selesai & Tutup
        </button>
      </div>
    </div>
  );
}
