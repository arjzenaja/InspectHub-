"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight, ChevronUp, ChevronDown } from "lucide-react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentPropsWithoutRef<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-white", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        month_caption: "flex justify-between pt-1 relative items-center px-8",
        caption_label: "text-sm font-semibold text-neutral-900",
        nav: "flex items-center",
        button_previous: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity absolute top-1 left-1 flex items-center justify-center rounded-md border border-neutral-200 cursor-pointer"
        ),
        button_next: cn(
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 transition-opacity absolute top-1 right-1 flex items-center justify-center rounded-md border border-neutral-200 cursor-pointer"
        ),
        month_grid: "w-full border-collapse space-y-1",
        weekdays: "flex",
        weekday:
          "text-neutral-500 rounded-md w-8 font-normal text-[0.8rem] text-center",
        week: "flex w-full mt-2",
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-neutral-50 [&:has([aria-selected].day-outside)]:bg-neutral-50/50"
        ),
        day_button: cn(
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center rounded-xl cursor-pointer hover:bg-neutral-100 transition-colors"
        ),
        range_start: "day-range-start",
        range_end: "day-range-end",
        selected:
          "bg-[#DC2626] text-white hover:bg-[#DC2626] hover:text-white focus:bg-[#DC2626] focus:text-white rounded-xl font-medium",
        today: "border border-[#DC2626] text-[#DC2626] rounded-xl font-bold",
        outside:
          "day-outside text-neutral-400 opacity-50 aria-selected:bg-[#FEF2F2] aria-selected:text-[#DC2626] aria-selected:opacity-30",
        disabled: "text-neutral-400 opacity-50 cursor-not-allowed",
        range_middle:
          "aria-selected:bg-neutral-100 aria-selected:text-neutral-950",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) => {
          if (orientation === "left") return <ChevronLeft size={16} />;
          if (orientation === "right") return <ChevronRight size={16} />;
          if (orientation === "up") return <ChevronUp size={16} />;
          if (orientation === "down") return <ChevronDown size={16} />;
          return <span className="hidden" />;
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
