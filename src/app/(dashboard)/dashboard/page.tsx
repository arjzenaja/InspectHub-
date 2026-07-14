"use client";

import { useEffect, useState } from "react";
import { Archive, Users, ClipboardList, CheckCircle } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import InspectionChart from "@/components/dashboard/InspectionChart";
import EquipmentStatusChart from "@/components/dashboard/EquipmentStatusChart";
import RecentActivityTable from "@/components/dashboard/RecentActivityTable";
import { parseJsonResponse } from "@/lib/fetchJson";

interface DashboardStats {
  totalPeralatan: number;
  teknisiAktif: number;
  teknisiStandby: number;
  inspeksiHariIni: number;
  urgent: number;
  laporanSelesai: number;
}

export default function DashboardPage() {
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/dashboard/stats");
        const data = await parseJsonResponse<DashboardStats | null>(res, null);
        setStats(data);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <div className="space-y-6">
      {/* Welcome Greeting & Date */}
      <div className="mb-8">
        <p className="text-sm font-medium text-[#6B7280] mb-2">
          Hello, Admin 👋
        </p>
        <h1 className="text-2xl font-bold text-[#111827]">Dashboard Overview</h1>
        <p className="text-sm text-[#6B7280] mt-1.5">
          Selamat datang kembali. Berikut ringkasan aktivitas hari ini.
        </p>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          label="Total Peralatan"
          value={isLoading ? "..." : stats?.totalPeralatan ?? 0}
          sub="+3% bln ini"
          icon={<Archive size={20} />}
          iconBg="bg-red-100"
          iconColor="text-[#DC2626]"
          href="/peralatan"
        />
        <StatCard
          label="Teknisi Aktif"
          value={isLoading ? "..." : stats?.teknisiAktif ?? 0}
          sub={`Standby: ${isLoading ? "..." : stats?.teknisiStandby ?? 0}`}
          icon={<Users size={20} />}
          iconBg="bg-blue-100"
          iconColor="text-blue-600"
          href="/teknisi"
        />
        <StatCard
          label="Inspeksi Hari Ini"
          value={isLoading ? "..." : stats?.inspeksiHariIni ?? 0}
          sub={`${isLoading ? "..." : stats?.urgent ?? 0} Urgent`}
          icon={<ClipboardList size={20} />}
          iconBg="bg-orange-100"
          iconColor="text-orange-600"
          href="/jadwal"
        />
        <StatCard
          label="Laporan Selesai"
          value={isLoading ? "..." : stats?.laporanSelesai ?? 0}
          sub="Target: 100%"
          icon={<CheckCircle size={20} />}
          iconBg="bg-green-100"
          iconColor="text-green-600"
          href="/laporan"
        />
      </div>

      {/* Middle Grid: Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <InspectionChart />
        </div>
        <div>
          <EquipmentStatusChart />
        </div>
      </div>

      {/* Bottom Row: Recent Activity */}
      <div className="grid grid-cols-1 gap-6">
        <RecentActivityTable />
      </div>
    </div>
  );
}
