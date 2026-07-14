"use client"

import { useState } from "react"
import { format, addMonths, subMonths, startOfMonth, endOfMonth,
         eachDayOfInterval, isSameDay, isSameMonth, isToday } from "date-fns"
import { id } from "date-fns/locale"
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

interface DatePickerProps {
  value?:       Date | null
  onChange:     (date: Date | undefined) => void
  placeholder?: string
  className?:   string
  disabled?:    boolean
}

export function DatePicker({
  value, onChange, placeholder = "Pilih tanggal", className, disabled
}: DatePickerProps) {
  const [open,          setOpen]          = useState(false)
  const [viewDate,      setViewDate]      = useState(value ?? new Date())

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setViewDate(prev => subMonths(prev, 1))
  }

  const handleNextMonth = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setViewDate(prev => addMonths(prev, 1))
  }

  const handleSelectDate = (date: Date) => {
    onChange(date)
    setOpen(false)
  }

  const monthStart = startOfMonth(viewDate)
  const monthEnd   = endOfMonth(viewDate)
  const days       = eachDayOfInterval({ start: monthStart, end: monthEnd })

  const startPadding = monthStart.getDay()
  const paddingDays  = Array.from({ length: startPadding }, (_, i) => {
    const d = new Date(monthStart)
    d.setDate(d.getDate() - (startPadding - i))
    return d
  })

  const endPadding   = 6 - monthEnd.getDay()
  const trailingDays = Array.from({ length: endPadding }, (_, i) => {
    const d = new Date(monthEnd)
    d.setDate(d.getDate() + (i + 1))
    return d
  })

  const allDays = [...paddingDays, ...days, ...trailingDays]

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          disabled={disabled}
          className={cn(
            "flex items-center gap-2.5 px-3 py-2.5 w-full text-left",
            "bg-white border border-[#E5E7EB] rounded-xl text-sm",
            "hover:border-[#DC2626]/40 focus:outline-none focus:ring-2",
            "focus:ring-[#DC2626]/20 focus:border-[#DC2626]/60 transition-all",
            open && "border-[#DC2626]/60 ring-2 ring-[#DC2626]/10",
            disabled && "opacity-50 cursor-not-allowed",
            className
          )}
        >
          <CalendarDays size={15} className="text-[#9CA3AF] flex-shrink-0" />
          <span className={cn("font-medium truncate", !value && "text-[#9CA3AF]")}>
            {value ? format(value, "dd MMMM yyyy", { locale: id }) : placeholder}
          </span>
        </button>
      </PopoverTrigger>

      <PopoverContent
        className="p-3 w-[300px] rounded-2xl shadow-xl border border-[#E5E7EB] z-[9999] bg-white"
        align="start"
        sideOffset={4}
        onInteractOutside={(e) => {
          setOpen(false)
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="p-1.5 hover:bg-[#F3F4F6] rounded-lg transition-colors"
            aria-label="Bulan sebelumnya"
          >
            <ChevronLeft size={16} className="text-[#374151]" />
          </button>

          <p className="text-sm font-bold text-[#111827]">
            {format(viewDate, "MMMM yyyy", { locale: id })}
          </p>

          <button
            type="button"
            onClick={handleNextMonth}
            className="p-1.5 hover:bg-[#F3F4F6] rounded-lg transition-colors"
            aria-label="Bulan berikutnya"
          >
            <ChevronRight size={16} className="text-[#374151]" />
          </button>
        </div>

        <div className="grid grid-cols-7 mb-1">
          { ["Min","Sen","Sel","Rab","Kam","Jum","Sab"].map(day => (
            <div key={day} className="text-center text-[10px] font-semibold text-[#9CA3AF] py-1">{day}</div>
          )) }
        </div>

        <div className="grid grid-cols-7 gap-0.5">
          {allDays.map((day, idx) => {
            const isCurrentMonth = isSameMonth(day, viewDate)
            const isSelected     = value ? isSameDay(day, value) : false
            const isTodayDate    = isToday(day)

            return (
              <button
                key={idx}
                type="button"
                onClick={() => handleSelectDate(day)}
                className={cn(
                  "w-full aspect-square flex items-center justify-center",
                  "text-xs rounded-lg transition-colors",
                  !isCurrentMonth && "text-[#D1D5DB]",
                  isCurrentMonth && !isSelected && "text-[#374151] hover:bg-[#FEF2F2]",
                  isTodayDate && !isSelected && "border border-[#DC2626] text-[#DC2626] font-bold",
                  isSelected && "bg-[#DC2626] text-white font-bold hover:bg-[#B91C1C]",
                )}
              >
                {format(day, "d")}
              </button>
            )
          })}
        </div>

        <div className="flex gap-2 mt-3 pt-3 border-t border-[#F3F4F6]">
          <button
            type="button"
            onClick={() => {
              const today = new Date()
              onChange(today)
              setViewDate(today)
              setOpen(false)
            }}
            className="flex-1 text-xs py-1.5 bg-[#FEF2F2] text-[#DC2626] font-semibold
                       rounded-lg hover:bg-[#FECACA] transition-colors"
          >
            Hari Ini
          </button>
          <button
            type="button"
            onClick={() => {
              onChange(undefined)
              setOpen(false)
            }}
            className="flex-1 text-xs py-1.5 bg-[#F3F4F6] text-[#6B7280] font-semibold
                       rounded-lg hover:bg-[#E5E7EB] transition-colors"
          >
            Hapus
          </button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
