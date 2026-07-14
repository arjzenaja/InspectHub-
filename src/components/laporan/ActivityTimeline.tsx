"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Upload, Clock, CalendarCheck, ShieldCheck } from "lucide-react";

interface TimelineEntry {
  text: string;
  time: string;
  type: "approved" | "uploaded" | "started" | "scheduled" | "default";
}

interface ActivityTimelineProps {
  entries?: TimelineEntry[];
}

const TYPE_CONFIG = {
  approved: {
    dot: "bg-emerald-500",
    icon: <ShieldCheck size={10} className="text-white" />,
    ring: "ring-2 ring-emerald-200",
  },
  uploaded: {
    dot: "bg-blue-500",
    icon: <Upload size={10} className="text-white" />,
    ring: "ring-2 ring-blue-200",
  },
  started: {
    dot: "bg-[#DC2626]",
    icon: <CheckCircle2 size={10} className="text-white" />,
    ring: "ring-2 ring-red-200",
  },
  scheduled: {
    dot: "bg-neutral-400",
    icon: <CalendarCheck size={10} className="text-white" />,
    ring: "ring-2 ring-neutral-200",
  },
  default: {
    dot: "bg-neutral-300",
    icon: <Clock size={10} className="text-white" />,
    ring: "ring-2 ring-neutral-100",
  },
};

export function ActivityTimeline({ entries = [] }: ActivityTimelineProps) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-5 shadow-sm">
      <h3 className="font-bold text-[#111827] mb-4 text-sm">Riwayat Aktivitas</h3>
      <div className="relative">
        <div className="absolute left-[11px] top-3 bottom-3 w-px bg-[#E5E7EB]" />

        <div className="space-y-0">
          {entries.length === 0 ? (
            <div className="pt-6 pb-4 text-center text-sm text-[#6B7280]">
              Tidak ada aktivitas terbaru untuk ditampilkan.
            </div>
          ) : (
            entries.map((act, i) => {
              const cfg = TYPE_CONFIG[act.type] || TYPE_CONFIG.default;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.25 }}
                  className="flex items-start gap-3 py-3 border-b border-[#F3F4F6] last:border-b-0 relative"
                >
                  <div
                    className={`w-5 h-5 rounded-full flex-shrink-0 flex items-center justify-center z-10 ${cfg.dot} ${cfg.ring}`}
                  >
                    {cfg.icon}
                  </div>
                  <span className="text-xs text-[#374151] flex-1 leading-relaxed pt-0.5">
                    {act.text}
                  </span>
                  <span className="text-[10px] text-[#9CA3AF] whitespace-nowrap pt-0.5">
                    {act.time}
                  </span>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
