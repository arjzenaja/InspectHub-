import Link from "next/link";
import React from "react";

interface StatCardProps {
  label: string;
  value: number | string;
  sub: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  href: string;
}

export default function StatCard({
  label,
  value,
  sub,
  icon,
  iconBg,
  iconColor,
  href,
}: StatCardProps) {
  return (
    <Link href={href} className="block group">
      <div className="bg-white rounded-2xl border border-[#E5E7EB] p-5 hover:shadow-md hover:border-[#DC2626]/20 transition-all cursor-pointer">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm font-medium text-[#6B7280] group-hover:text-red-600 transition-colors">
              {label}
            </p>
            <p className="text-3xl font-bold text-[#111827] mt-1">
              {value}
            </p>
            <p className="text-xs text-[#6B7280] mt-1 font-medium">
              {sub}
            </p>
          </div>
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${iconBg} ${iconColor} transition-transform group-hover:scale-105`}>
            {icon}
          </div>
        </div>
      </div>
    </Link>
  );
}
