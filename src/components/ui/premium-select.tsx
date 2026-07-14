"use client";

import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface PremiumSelectProps {
  options:      { value: string; label: string; icon?: React.ReactNode }[];
  value:        string;
  onChange:     (value: string) => void;
  placeholder?: string;
  searchable?:  boolean;
  className?:   string;
}

export const PremiumSelect = ({
  options, value, onChange, placeholder = "Pilih...", searchable = false, className
}: PremiumSelectProps) => {
  const [open, setOpen] = useState(false);
  const selected = options.find(o => o.value === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            `flex items-center justify-between gap-2 px-3 py-2.5
             bg-white border border-[#E5E7EB] rounded-xl text-sm text-[#374151]
             hover:border-[#DC2626]/40 hover:bg-[#FEF2F2]/30
             focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20
             transition-all duration-200 min-w-[160px] cursor-pointer`,
            open && "border-[#DC2626]/60 ring-2 ring-[#DC2626]/10",
            className
          )}
        >
          <span className={cn("font-medium text-left truncate", !selected && "text-[#9CA3AF]")}>
            {selected?.label ?? placeholder}
          </span>
          <ChevronDown
            size={15}
            className={cn(
              "text-[#6B7280] transition-transform duration-200 flex-shrink-0",
              open && "rotate-180"
            )}
          />
        </button>
      </PopoverTrigger>

      <AnimatePresence>
        {open && (
          <PopoverContent
            forceMount
            className="p-0 w-[220px] rounded-2xl shadow-xl border border-[#E5E7EB] overflow-hidden bg-white z-50"
            align="start"
            asChild
          >
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0,  scale: 1    }}
              exit={{    opacity: 0, y: -8, scale: 0.96 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            >
              <Command className="bg-white">
                {searchable && (
                  <CommandInput
                    placeholder="Cari..."
                    className="border-b border-[#E5E7EB] h-10 text-sm px-3"
                  />
                )}
                <CommandEmpty className="py-4 text-center text-sm text-[#9CA3AF]">
                  Tidak ditemukan
                </CommandEmpty>
                <CommandGroup className="p-1.5 max-h-[240px] overflow-y-auto">
                  {options.map(opt => (
                    <CommandItem
                      key={opt.value}
                      value={opt.value}
                      onSelect={() => { onChange(opt.value); setOpen(false); }}
                      className={cn(
                        `flex items-center justify-between px-3 py-2.5 rounded-xl
                         text-sm cursor-pointer transition-colors duration-150`,
                        value === opt.value
                          ? "bg-[#FEF2F2] text-[#DC2626] font-semibold"
                          : "text-[#374151] hover:bg-[#F9FAFB] data-[selected=true]:bg-[#F9FAFB]"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        {opt.icon}
                        {opt.label}
                      </div>
                      {value === opt.value && (
                        <Check size={14} className="text-[#DC2626] shrink-0" />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </motion.div>
          </PopoverContent>
        )}
      </AnimatePresence>
    </Popover>
  );
};
