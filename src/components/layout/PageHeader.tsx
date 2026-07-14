import React from "react";

interface PageHeaderProps {
  greeting?: string;
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const PageHeader = ({ greeting, title, subtitle, action }: PageHeaderProps) => (
  <div className="flex flex-col sm:flex-row sm:items-start justify-between mb-8 gap-4">
    <div>
      {greeting && (
        <p className="text-sm text-[#6B7280] font-medium mb-2">
          {greeting}
        </p>
      )}
      <h1 className="text-2xl font-bold text-[#111827] leading-tight">
        {title}
      </h1>
      {subtitle && (
        <p className="text-sm text-[#6B7280] mt-1.5">{subtitle}</p>
      )}
    </div>
    {action && <div className="flex-shrink-0">{action}</div>}
  </div>
);
