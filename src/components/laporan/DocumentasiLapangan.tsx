"use client";

import { useState } from "react";
import { Image as ImageIcon } from "lucide-react";

interface DocumentasiLapanganProps {
  fotoUrls: Array<string | { url?: string; uri?: string }>;
}

export function DocumentasiLapangan({ fotoUrls }: DocumentasiLapanganProps) {
  const [failedMap, setFailedMap] = useState<Record<number, boolean>>({});

  const displayFotos = fotoUrls
    .map((raw) => {
      if (typeof raw === "string") return raw.trim();
      if (raw && typeof raw === "object") {
        const maybeUrl = (raw as { url?: string; uri?: string }).url || (raw as { url?: string; uri?: string }).uri;
        return typeof maybeUrl === "string" ? maybeUrl.trim() : "";
      }
      return "";
    })
    .filter(Boolean);

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-[#111827]">Dokumentasi Lapangan</h3>
        <span className="text-xs text-[#6B7280] font-medium">{displayFotos.length} foto</span>
      </div>

      {displayFotos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-[#9CA3AF] border-2 border-dashed border-[#E5E7EB] rounded-xl">
          <ImageIcon size={32} className="mb-2 opacity-50" />
          <p className="text-sm font-medium">Belum ada dokumentasi foto</p>
          <p className="text-xs mt-1">Teknisi belum mengunggah foto lapangan</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-3">
          {displayFotos.map((url, i) => {
            const unsupported = !url || url.startsWith("file:") || url.startsWith("content:") || url.startsWith("asset:") || url.startsWith("ph:");

            return (
              <div key={`${url}-${i}`} className="relative aspect-square rounded-xl overflow-hidden border border-[#E5E7EB] bg-[#F3F4F6]">
                {!unsupported ? (
                  <img
                    src={url}
                    alt={`Foto ${i + 1}`}
                    className="w-full h-full object-cover"
                    onError={(event) => {
                      const target = event.target as HTMLImageElement;
                      target.style.opacity = "0.35";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#6B7280] p-4">
                    <div className="text-center">
                      <ImageIcon size={28} className="mx-auto opacity-40 mb-2" />
                      <div className="text-sm font-medium">Preview tidak tersedia</div>
                      <div className="text-xs text-[#9CA3AF] mt-1">(lokal / tidak dapat diakses)</div>
                    </div>
                  </div>
                )}

                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">{i + 1}</div>
              </div>
            );
          })}
        </div>
      )}

      <p className="text-[10px] text-[#9CA3AF] mt-3 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 inline-block" />
        Admin hanya dapat melihat & mengunduh foto. Pengunggahan foto dilakukan oleh teknisi di lapangan.
      </p>
    </div>
  );
}
