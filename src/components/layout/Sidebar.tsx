"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Archive, 
  Users, 
  Calendar, 
  ClipboardList, 
  MapPin, 
  LogOut, 
  X,
  Zap
} from "lucide-react";
import { useLayoutStore } from "@/lib/store";

export default function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen, setSidebarOpen } = useLayoutStore();

  const menuItems = [
    { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { label: "Peralatan", href: "/peralatan", icon: Archive },
    { label: "Teknisi", href: "/teknisi", icon: Users },
    { label: "Jadwal Inspeksi", href: "/jadwal", icon: Calendar },
    { label: "Laporan Inspeksi", href: "/laporan", icon: ClipboardList },
    { label: "Master Lokasi", href: "/lokasi", icon: MapPin },
  ];

  return (
    <>
      {/* Mobile overlay backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col w-[240px] bg-[#1C1C1E] text-white border-r border-neutral-800 transition-transform duration-300 lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Brand Header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-neutral-800">
          <Link href="/dashboard" className="flex items-center gap-2" onClick={() => setSidebarOpen(false)}>
            <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center">
              <Zap size={18} className="text-white fill-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-wide">
                Inspec<span className="text-red-500">Pro</span>
              </span>
              <span className="block text-[10px] text-neutral-400 font-medium uppercase tracking-wider -mt-1">
                Admin Panel
              </span>
            </div>
          </Link>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 lg:hidden"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            // Match active link if exact or subpath (except for root/dashboard itself)
            const isActive = pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-red-600 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-neutral-800/60"
                }`}
              >
                <Icon size={18} strokeWidth={1.5} className={isActive ? "text-white" : "text-neutral-400 group-hover:text-white"} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer/Logout Area */}
        <div className="p-4 border-t border-neutral-800">
          <Link
            href="/login"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-950/20 transition-colors w-full"
          >
            <LogOut size={18} strokeWidth={1.5} />
            Keluar (Logout)
          </Link>
        </div>
      </aside>
    </>
  );
}
