import React from "react";

interface LoadingSkeletonProps {
  rows?: number;
  type?: "table" | "cards";
}

export default function LoadingSkeleton({
  rows = 5,
  type = "table",
}: LoadingSkeletonProps) {
  if (type === "cards") {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 animate-pulse">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="bg-white border border-[#E5E7EB] rounded-2xl p-5 h-28 flex flex-col justify-between">
            <div className="space-y-2">
              <div className="h-4 bg-neutral-200 rounded w-2/3" />
              <div className="h-6 bg-neutral-200 rounded w-1/3" />
            </div>
            <div className="h-3 bg-neutral-200 rounded w-1/2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden shadow-sm animate-pulse">
      {/* Header Skeleton */}
      <div className="border-b border-[#E5E7EB] p-4 flex items-center justify-between">
        <div className="h-4 bg-neutral-200 rounded w-48" />
        <div className="h-8 bg-neutral-200 rounded w-32" />
      </div>

      {/* Rows Skeleton */}
      <div className="p-4 space-y-4">
        {Array.from({ length: rows }).map((_, i) => (
          <div key={i} className="flex gap-4 items-center py-2">
            <div className="h-5 bg-neutral-200 rounded w-12" />
            <div className="h-5 bg-neutral-200 rounded flex-1" />
            <div className="h-5 bg-neutral-200 rounded w-32" />
            <div className="h-5 bg-neutral-200 rounded w-24" />
            <div className="h-5 bg-neutral-200 rounded w-10" />
          </div>
        ))}
      </div>
    </div>
  );
}
