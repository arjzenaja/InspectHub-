"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { 
  Menu, 
  Bell, 
  BellOff, 
  User as UserIcon, 
  ClipboardList, 
  Archive, 
  FileText, 
  AlertTriangle 
} from "lucide-react";
import { useLayoutStore } from "@/lib/store";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Notification {
  id: string;
  type: "inspection" | "equipment" | "report" | "alert";
  title: string;
  message: string;
  read: boolean;
  createdAt: Date | string;
}

const NotifIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "inspection":
      return <ClipboardList size={16} className="text-blue-600" />;
    case "equipment":
      return <Archive size={16} className="text-orange-600" />;
    case "report":
      return <FileText size={16} className="text-green-600" />;
    case "alert":
      return <AlertTriangle size={16} className="text-red-600" />;
    default:
      return <Bell size={16} className="text-gray-600" />;
  }
};

const formatRelativeTime = (date: Date | string) => {
  const d = new Date(date);
  const diffMs = Date.now() - d.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "Baru saja";
  if (diffMins < 60) return `${diffMins} menit lalu`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours} jam lalu`;
  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays} hari lalu`;
};

export default function Header() {
  const pathname = usePathname();
  const { toggleSidebar } = useLayoutStore();

  // Notification panel states
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const handleNotifClick = (notif: Notification) => {
    setNotifications(prev => prev.map(n => n.id === notif.id ? { ...n, read: true } : n));
    setNotifOpen(false);
  };

  const getPageTitle = (path: string) => {
    if (path.startsWith("/dashboard")) return "Dashboard Overview";
    if (path.startsWith("/peralatan")) return "Master Data Peralatan";
    if (path.startsWith("/teknisi")) return "Master Data Teknisi";
    if (path.startsWith("/jadwal")) return "Jadwal Inspeksi Peralatan";
    if (path.startsWith("/laporan")) return "Laporan Inspeksi & Pengukuran";
    if (path.startsWith("/lokasi")) return "Master Data Lokasi Gardu";
    return "InspecPro Admin";
  };

  return (
    <header className="fixed top-0 right-0 left-0 lg:left-[240px] h-16 bg-white border-b border-[#E5E7EB] px-6 flex items-center justify-between z-30">
      {/* Mobile Toggle & Title */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-xl hover:bg-[#F1F5F9] text-[#111827] lg:hidden transition-colors"
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} strokeWidth={1.5} />
        </button>
        <h1 className="text-lg font-bold text-[#111827]">
          {getPageTitle(pathname)}
        </h1>
      </div>

      {/* User Info & Notifications */}
      <div className="flex items-center gap-4">
        {/* Notification Icon */}
        <Popover open={notifOpen} onOpenChange={setOpen => setNotifOpen(setOpen)}>
          <PopoverTrigger asChild>
            <button className="relative p-2 hover:bg-[#F3F4F6] rounded-xl transition-colors cursor-pointer text-[#374151]">
              <Bell size={20} strokeWidth={1.5} />
              {unreadCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#DC2626] text-white
                             text-[10px] font-bold rounded-full flex items-center justify-center border border-white"
                >
                  {unreadCount > 9 ? "9+" : unreadCount}
                </motion.span>
              )}
            </button>
          </PopoverTrigger>

          <AnimatePresence>
            {notifOpen && (
              <PopoverContent
                forceMount
                className="p-0 w-[380px] rounded-2xl shadow-2xl border border-[#E5E7EB] overflow-hidden bg-white z-50"
                align="end"
                asChild
              >
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0,   scale: 1    }}
                  exit={{    opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.18 }}
                >
                  {/* Header panel */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E7EB]">
                    <div>
                      <h3 className="text-sm font-bold text-[#111827]">Notifikasi</h3>
                      {unreadCount > 0 && (
                        <p className="text-xs text-[#6B7280] mt-0.5">{unreadCount} belum dibaca</p>
                      )}
                    </div>
                    {unreadCount > 0 && (
                      <button
                        onClick={handleMarkAllRead}
                        className="text-xs text-[#DC2626] font-semibold hover:underline cursor-pointer"
                      >
                        Tandai semua dibaca
                      </button>
                    )}
                  </div>

                  {/* Notification list */}
                  <div className="max-h-[360px] overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="py-12 text-center">
                        <BellOff size={32} className="mx-auto text-[#D1D5DB] mb-3" />
                        <p className="text-sm text-[#9CA3AF]">Tidak ada notifikasi</p>
                      </div>
                    ) : (
                      notifications.slice(0, 8).map(notif => (
                        <button
                          key={notif.id}
                          onClick={() => handleNotifClick(notif)}
                          className={cn(
                            "w-full flex items-start gap-3 px-5 py-4 text-left transition-colors cursor-pointer",
                            "hover:bg-[#F9FAFB] border-b border-[#F3F4F6] last:border-0",
                            !notif.read && "bg-[#FEF2F2]/50"
                          )}
                        >
                          {/* Icon per type */}
                          <div className={cn(
                            "w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0",
                            notif.type === "inspection" && "bg-blue-100",
                            notif.type === "equipment"  && "bg-orange-100",
                            notif.type === "report"     && "bg-green-100",
                            notif.type === "alert"      && "bg-red-100",
                          )}>
                            <NotifIcon type={notif.type} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <p className={cn(
                              "text-sm leading-snug",
                              notif.read ? "text-[#374151]" : "text-[#111827] font-semibold"
                            )}>
                              {notif.title}
                            </p>
                            <p className="text-xs text-[#6B7280] mt-0.5 line-clamp-1">
                              {notif.message}
                            </p>
                            <p className="text-[10px] text-[#9CA3AF] mt-1">
                              {formatRelativeTime(notif.createdAt)}
                            </p>
                          </div>

                          {!notif.read && (
                            <div className="w-2 h-2 rounded-full bg-[#DC2626] flex-shrink-0 mt-1.5" />
                          )}
                        </button>
                      ))
                    )}
                  </div>

                  {/* Footer */}
                  <div className="border-t border-[#E5E7EB] p-3">
                    <Link href="/laporan" onClick={() => setNotifOpen(false)}>
                      <button
                        className="w-full py-2.5 text-sm font-semibold text-[#DC2626]
                                   hover:bg-[#FEF2F2] rounded-xl transition-colors cursor-pointer"
                      >
                        Lihat Semua Laporan →
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </PopoverContent>
            )}
          </AnimatePresence>
        </Popover>

        {/* Vertical Divider */}
        <div className="h-6 w-px bg-[#E5E7EB]" />

        {/* Profile Card */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-[#111827]">Admin InspecPro</p>
            <p className="text-xs text-[#6B7280]">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
            <UserIcon size={18} className="text-red-600" />
          </div>
        </div>
      </div>
    </header>
  );
}
