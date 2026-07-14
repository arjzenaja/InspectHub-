"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const statusData = [
  { name: "Aktif", value: 34, percentage: 70, color: "#DC2626" },
  { name: "Tidak Aktif", value: 7, percentage: 15, color: "#9CA3AF" },
  { name: "Maintenance", value: 7, percentage: 15, color: "#F59E0B" },
];

export default function EquipmentStatusChart() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const total = statusData.reduce((acc, curr) => acc + curr.value, 0);

  if (!isMounted) {
    return (
      <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 h-[400px] flex items-center justify-center animate-pulse">
        <div className="h-8 w-8 bg-neutral-200 rounded-full" />
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm flex flex-col h-[400px]">
      <div>
        <h3 className="font-bold text-lg text-[#111827]">Status Peralatan</h3>
        <p className="text-xs text-[#6B7280]">Status operasional seluruh peralatan saat ini</p>
      </div>

      {/* Donut Area */}
      <div className="flex-1 relative flex items-center justify-center min-h-0">
        <div className="w-[180px] h-[180px] relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={4}
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Absolute Center Total */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-3xl font-extrabold text-[#111827]">{total}</span>
            <span className="text-[10px] uppercase font-bold text-[#6B7280] tracking-wider">Total Unit</span>
          </div>
        </div>
      </div>

      {/* Legends */}
      <div className="space-y-2 mt-auto">
        {statusData.map((item) => (
          <div key={item.name} className="flex justify-between items-center py-1">
            <div className="flex items-center gap-2">
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium text-[#374151]">{item.name}</span>
            </div>
            <span className="text-sm font-semibold text-[#111827]">
              {item.value} unit ({item.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
