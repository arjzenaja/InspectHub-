"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight, ClipboardList, Eye, Loader2 } from "lucide-react";
import { formatKondisiAkhir } from "@/lib/formatters";
import Avatar from "@/components/shared/Avatar";

interface ActivityItem {
  id: string;
  kodeId: string;
  peralatan: {
    nama: string;
  };
  teknisi: {
    nama: string;
    avatarUrl: string;
    divisi: string;
  };
  tanggal: string;
  kondisi: string;
  status: string;
}

export default function RecentActivityTable() {
  const [activities, setActivities] = useState<ActivityItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchActivities() {
      try {
        const res = await fetch("/api/laporan");
        const payload = await res.json();
        const items = Array.isArray(payload?.data)
          ? payload.data
          : Array.isArray(payload)
            ? payload
            : [];

        setActivities(items.slice(0, 4));
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchActivities();
  }, []);

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm flex flex-col h-full">
      {/* Title Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h3 className="font-bold text-lg text-[#111827]">Recent Activity</h3>
          <p className="text-xs text-[#6B7280]">Inspeksi terakhir yang dilaporkan teknisi</p>
        </div>
        <Link 
          href="/laporan" 
          className="text-sm font-semibold text-[#DC2626] hover:text-[#B91C1C] flex items-center gap-1 group transition-colors"
        >
          Lihat Semua 
          <ChevronRight size={16} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      {/* Activity Content */}
      <div className="flex-1 overflow-x-auto">
        {isLoading ? (
          <div className="h-48 flex items-center justify-center">
            <Loader2 className="animate-spin text-[#DC2626]" size={24} />
          </div>
        ) : activities.length === 0 ? (
          <div className="h-48 flex flex-col items-center justify-center text-center p-6 border border-dashed border-[#E5E7EB] rounded-xl">
            <ClipboardList size={28} className="text-[#6B7280] mb-2" />
            <p className="text-sm text-[#111827] font-semibold">Belum Ada Aktivitas</p>
            <p className="text-xs text-[#6B7280]">Inspeksi baru akan muncul di sini.</p>
          </div>
        ) : (
          <table className="w-full min-w-[500px]">
            <thead>
              <tr className="border-b border-[#E5E7EB] text-left">
                <th className="pb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">ID Laporan</th>
                <th className="pb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Peralatan</th>
                <th className="pb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Teknisi</th>
                <th className="pb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280]">Kondisi</th>
                <th className="pb-3 text-xs font-semibold uppercase tracking-wider text-[#6B7280] text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]/50">
              {activities.map((item) => (
                <tr key={item.id} className="hover:bg-neutral-50/50 transition-colors group">
                  <td className="py-3.5 text-sm font-mono font-bold text-[#DC2626]">
                    {item.kodeId}
                  </td>
                  <td className="py-3.5 text-sm text-[#111827] font-medium">
                    {item.peralatan?.nama}
                  </td>
                  <td className="py-3.5">
                    <div className="flex items-center gap-2">
                      <Avatar
                        src={item.teknisi?.avatarUrl}
                        name={item.teknisi?.nama || "Teknisi"}
                        size="sm"
                      />
                      <div>
                        <p className="text-sm font-medium text-[#111827] leading-none">
                          {item.teknisi?.nama}
                        </p>
                        <span className="text-[10px] text-[#6B7280]">
                          {item.teknisi?.divisi}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5">
                    {(() => {
                      const fmt = formatKondisiAkhir(item.kondisi);
                      return (
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${fmt.bgColor} ${fmt.color}`}>
                          {fmt.label}
                        </span>
                      );
                    })()}
                  </td>
                  <td className="py-3.5 text-right">
                    <Link
                      href={`/laporan/${item.id}`}
                      className="inline-flex items-center justify-center w-8 h-8 rounded-lg text-[#6B7280] hover:text-[#DC2626] hover:bg-red-50 transition-all"
                      title="Lihat Detail Laporan"
                    >
                      <Eye size={18} strokeWidth={1.5} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
