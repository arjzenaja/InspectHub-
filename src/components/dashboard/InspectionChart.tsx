"use client";

import { useState, useEffect } from "react";
import { 
  BarChart2, 
  AreaChart as AreaChartIcon, 
  TrendingUp,
  CalendarDays,
  ChevronDown,
  Check,
  Loader2
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { parseJsonResponse } from "@/lib/fetchJson";

const filterOptions = [
  // Per Hari
  { value: "1_hari",      label: "1 Hari Terakhir",   group: "Per Hari"  },
  { value: "2_hari",      label: "2 Hari Terakhir",   group: "Per Hari"  },
  // Per Pekan
  { value: "7_hari",      label: "1 Minggu Terakhir",  group: "Per Pekan" },
  { value: "2_minggu",    label: "2 Minggu Terakhir",  group: "Per Pekan" },
  { value: "1_bulan",     label: "1 Bulan Terakhir",   group: "Per Pekan" },
  // Per Bulan
  { value: "jan_feb",     label: "Januari – Februari",  group: "Per Bulan" },
];

export default function InspectionChart() {
  const [chartType, setChartType] = useState<"bar" | "area" | "line">("area");
  const [timeFilter, setTimeFilter] = useState("7_hari");
  const [chartData, setChartData] = useState<{ label: string; value: number }[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    async function fetchChart() {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/dashboard/chart?range=${timeFilter}`);
        const data = await parseJsonResponse<Array<{ label: string; value: number }>>(res, []);
        setChartData(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }
    if (isMounted) {
      fetchChart();
    }
  }, [timeFilter, isMounted]);

  if (!isMounted) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 h-[400px] flex items-center justify-center animate-pulse">
        <div className="h-8 w-8 bg-neutral-200 rounded-full" />
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm flex flex-col h-[400px]">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h3 className="font-bold text-lg text-[#111827]">Grafik Aktivitas Inspeksi</h3>
          <p className="text-xs text-[#6B7280]">Total inspeksi peralatan berdasarkan rentang waktu</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Chart Type Toggles */}
          <div className="flex items-center gap-1 border border-[#E5E7EB] rounded-xl p-1 bg-neutral-50">
            <button
              onClick={() => setChartType("bar")}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                chartType === "bar" 
                  ? "bg-[#DC2626] text-white shadow-sm" 
                  : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
              }`}
              title="Bar Chart"
            >
              <BarChart2 size={16} />
            </button>
            <button
              onClick={() => setChartType("area")}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                chartType === "area" 
                  ? "bg-[#DC2626] text-white shadow-sm" 
                  : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
              }`}
              title="Area Chart"
            >
              <AreaChartIcon size={16} />
            </button>
            <button
              onClick={() => setChartType("line")}
              className={`p-1.5 rounded-lg transition-all cursor-pointer ${
                chartType === "line" 
                  ? "bg-[#DC2626] text-white shadow-sm" 
                  : "text-[#6B7280] hover:bg-[#F9FAFB] hover:text-[#111827]"
              }`}
              title="Line Chart"
            >
              <TrendingUp size={16} />
            </button>
          </div>

          {/* Time Filter Select */}
          <Popover open={filterOpen} onOpenChange={setFilterOpen}>
            <PopoverTrigger asChild>
              <button type="button" className="flex items-center gap-2 px-3 py-2 bg-white border border-[#E5E7EB]
                                 rounded-xl text-sm font-semibold text-[#374151] hover:border-[#DC2626]/40 hover:bg-[#FEF2F2]/20 transition-all cursor-pointer">
                <CalendarDays size={14} className="text-[#DC2626] shrink-0" />
                <span>
                  {filterOptions.find(f => f.value === timeFilter)?.label ?? "1 Minggu Terakhir"}
                </span>
                <ChevronDown size={13} className={cn("transition-transform text-[#6B7280] shrink-0", filterOpen && "rotate-180")} />
              </button>
            </PopoverTrigger>

            <AnimatePresence>
              {filterOpen && (
                <PopoverContent forceMount className="p-2 w-[220px] rounded-2xl shadow-xl border border-[#E5E7EB] bg-white z-50" align="end" asChild>
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0,  scale: 1    }}
                    exit={{    opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.15 }}
                  >
                    {["Per Hari", "Per Pekan", "Per Bulan"].map(group => (
                      <div key={group}>
                        <p className="text-[10px] font-bold text-[#9CA3AF] uppercase tracking-wider px-2 pt-2 pb-1">
                          {group}
                        </p>
                        {filterOptions.filter(f => f.group === group).map(opt => (
                          <button
                            key={opt.value}
                            type="button"
                            onClick={() => { setTimeFilter(opt.value); setFilterOpen(false); }}
                            className={cn(
                              "w-full text-left px-3 py-2 rounded-xl text-sm transition-colors flex items-center justify-between cursor-pointer",
                              timeFilter === opt.value
                                ? "bg-[#FEF2F2] text-[#DC2626] font-semibold"
                                : "text-[#374151] hover:bg-[#F9FAFB]"
                            )}
                          >
                            <span>{opt.label}</span>
                            {timeFilter === opt.value && <Check size={13} className="text-[#DC2626] shrink-0" />}
                          </button>
                        ))}
                      </div>
                    ))}
                  </motion.div>
                </PopoverContent>
              )}
            </AnimatePresence>
          </Popover>
        </div>
      </div>

      {/* Chart container */}
      <div className="flex-1 min-h-0 relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
            <Loader2 className="animate-spin text-[#DC2626]" size={28} />
          </div>
        ) : null}

        <ResponsiveContainer width="100%" height="100%">
          {chartType === "bar" ? (
            <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="label" stroke="#94A3B8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#1e293b", borderRadius: "12px", border: "none", color: "#fff", fontSize: "12px" }}
                labelStyle={{ fontWeight: "bold" }}
              />
              <Bar dataKey="value" fill="#DC2626" radius={[4, 4, 0, 0]} maxBarSize={45} />
            </BarChart>
          ) : chartType === "line" ? (
            <LineChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="label" stroke="#94A3B8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#1e293b", borderRadius: "12px", border: "none", color: "#fff", fontSize: "12px" }}
                labelStyle={{ fontWeight: "bold" }}
              />
              <Line type="monotone" dataKey="value" stroke="#DC2626" strokeWidth={3} activeDot={{ r: 6 }} dot={{ strokeWidth: 2, r: 4 }} />
            </LineChart>
          ) : (
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#DC2626" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#DC2626" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F1F5F9" />
              <XAxis dataKey="label" stroke="#94A3B8" fontSize={11} tickLine={false} />
              <YAxis stroke="#94A3B8" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip 
                contentStyle={{ backgroundColor: "#1e293b", borderRadius: "12px", border: "none", color: "#fff", fontSize: "12px" }}
                labelStyle={{ fontWeight: "bold" }}
              />
              <Area type="monotone" dataKey="value" stroke="#DC2626" strokeWidth={3} fillOpacity={1} fill="url(#colorValue)" activeDot={{ r: 6 }} dot={{ strokeWidth: 2, r: 4 }} />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
}
