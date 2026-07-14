"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumSelect } from "@/components/ui/premium-select";
import { DatePicker } from "@/components/ui/date-picker";

const jadwalSchema = z.object({
  peralatanId: z.string().min(1, "Wajib memilih peralatan"),
  teknisiId: z.string().min(1, "Wajib menugaskan teknisi"),
  tanggal: z.string().min(1, "Tanggal wajib dipilih"),
  waktuMulai: z.string().min(1, "Waktu mulai wajib diisi"),
  waktuSelesai: z.string().min(1, "Waktu selesai wajib diisi"),
  catatan: z.string().optional(),
});

type JadwalFormValues = z.infer<typeof jadwalSchema>;

interface BuatJadwalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => Promise<void>;
  initialData?: any | null;
  teknisiList: { id: string; nama: string; divisi: string; status: string }[];
}



export default function BuatJadwalDrawer({
  isOpen,
  onClose,
  onSave,
  initialData,
  teknisiList,
}: BuatJadwalDrawerProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [equipmentList, setEquipmentList] = useState<any[]>([]);
  const [selectedEq, setSelectedEq] = useState<any | null>(null);
  const [isLoadingEquipment, setIsLoadingEquipment] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<JadwalFormValues>({
    resolver: zodResolver(jadwalSchema),
  });

  const watchTeknisiId = watch("teknisiId") || "";
  const watchTanggal = watch("tanggal") || "";
  const watchPeralatanId = watch("peralatanId") || "";

  // Fetch all equipment on component mount
  useEffect(() => {
    const fetchEquipment = async () => {
      setIsLoadingEquipment(true);
      try {
        const res = await fetch("/api/peralatan?status=aktif");
        const data = await res.json();
        setEquipmentList(data);
      } catch (err) {
        console.error("Failed to fetch equipment:", err);
      } finally {
        setIsLoadingEquipment(false);
      }
    };

    if (isOpen) {
      fetchEquipment();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        const formattedDate = initialData.tanggal
          ? new Date(initialData.tanggal).toISOString().split("T")[0]
          : "";

        reset({
          peralatanId: initialData.peralatanId,
          teknisiId: initialData.teknisiId,
          tanggal: formattedDate,
          waktuMulai: initialData.waktuMulai,
          waktuSelesai: initialData.waktuSelesai,
          catatan: initialData.catatan || "",
        });
        setSelectedEq(initialData.peralatan || null);
      } else {
        reset({
          peralatanId: "",
          teknisiId: "",
          tanggal: "",
          waktuMulai: "09:00",
          waktuSelesai: "10:30",
          catatan: "",
        });
        setSelectedEq(null);
      }
    }
  }, [isOpen, initialData, reset]);

  const onSubmit = async (values: JadwalFormValues) => {
    setIsSubmitting(true);
    try {
      await onSave(values);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const teknisiOptions = teknisiList.map((t) => ({
    value: t.id,
    label: `${t.nama} (${t.divisi} — ${t.status})`,
  }));

  const equipmentOptions = equipmentList.map((eq) => ({
    value: eq.id,
    label: `${eq.kodeId} • ${eq.nama} (${eq.lokasi})`,
    data: eq,
  }));

  const dateValue = watchTanggal ? new Date(watchTanggal) : undefined;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs cursor-pointer"
            onClick={onClose}
          />

          {/* Content Container */}
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-white w-full max-w-lg shadow-2xl flex flex-col h-full z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
              <div>
                <h3 className="text-lg font-bold text-[#111827]">
                  {initialData ? "Edit Jadwal Inspeksi" : "Buat Jadwal Baru"}
                </h3>
                <p className="text-xs text-[#6B7280]">
                  {initialData
                    ? "Ubah detail pengaturan jadwal inspeksi"
                    : "Buat agenda inspeksi peralatan untuk teknisi"}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex-1 overflow-y-auto p-6 space-y-5"
            >
              {/* Equipment Selection Dropdown */}
              <div className="flex flex-col">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                  Pilih Peralatan *
                </label>
                <PremiumSelect
                  options={equipmentOptions}
                  value={watchPeralatanId}
                  onChange={(val) => {
                    setValue("peralatanId", val, { shouldValidate: true });
                    const selected = equipmentList.find((eq) => eq.id === val);
                    setSelectedEq(selected || null);
                  }}
                  placeholder="Pilih Peralatan dari Daftar"
                  searchable={true}
                  className="w-full"
                />
                {errors.peralatanId && (
                  <p className="text-xs text-[#DC2626] mt-1">
                    {errors.peralatanId.message}
                  </p>
                )}

                {/* Selected Equipment Card with Red Border */}
                {selectedEq && (
                  <div className="relative border-2 border-[#DC2626] rounded-xl p-4 bg-red-50/20 flex justify-between items-center transition-all animate-fadeIn mt-3">
                    <div>
                      <span className="text-[10px] font-bold bg-[#DC2626] text-white px-2 py-0.5 rounded-md uppercase tracking-wider">
                        {selectedEq.kodeId}
                      </span>
                      <h4 className="font-bold text-sm text-[#111827] mt-1.5">
                        {selectedEq.nama}
                      </h4>
                      <p className="text-xs text-[#6B7280] mt-0.5">
                        {selectedEq.lokasi} • {selectedEq.jenis}
                      </p>
                    </div>
                    {!initialData && (
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedEq(null);
                          setValue("peralatanId", "");
                        }}
                        className="p-1 rounded-full bg-neutral-200 hover:bg-red-200 hover:text-[#DC2626] transition-colors cursor-pointer"
                        title="Ganti Peralatan"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Assign Technician Searchable PremiumSelect */}
              <div className="flex flex-col">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                  Tugaskan Teknisi *
                </label>
                <PremiumSelect
                  options={teknisiOptions}
                  value={watchTeknisiId}
                  onChange={(val) =>
                    setValue("teknisiId", val, { shouldValidate: true })
                  }
                  placeholder="Pilih Teknisi Terdaftar"
                  searchable={true}
                  className="w-full"
                />
                {errors.teknisiId && (
                  <p className="text-xs text-[#DC2626] mt-1">
                    {errors.teknisiId.message}
                  </p>
                )}
              </div>

              {/* Tanggal Picker */}
              <div className="flex flex-col">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                  Tanggal Inspeksi *
                </label>
                <DatePicker
                  value={dateValue}
                  onChange={(date) =>
                    setValue(
                      "tanggal",
                      date ? date.toISOString().split("T")[0] : "",
                      { shouldValidate: true }
                    )
                  }
                  placeholder="Pilih tanggal inspeksi"
                />
                {errors.tanggal && (
                  <p className="text-xs text-[#DC2626] mt-1">
                    {errors.tanggal.message}
                  </p>
                )}
              </div>

              {/* Time Picker Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                    Waktu Mulai *
                  </label>
                  <input
                    {...register("waktuMulai")}
                    type="time"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none bg-[#F9FAFB] focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
                  />
                  {errors.waktuMulai && (
                    <p className="text-xs text-[#DC2626] mt-1">
                      {errors.waktuMulai.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                    Waktu Selesai *
                  </label>
                  <input
                    {...register("waktuSelesai")}
                    type="time"
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none bg-[#F9FAFB] focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]"
                  />
                  {errors.waktuSelesai && (
                    <p className="text-xs text-[#DC2626] mt-1">
                      {errors.waktuSelesai.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Catatan Khusus */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                  Catatan Khusus / Instruksi Kerja
                </label>
                <textarea
                  {...register("catatan")}
                  disabled={isSubmitting}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none bg-[#F9FAFB] placeholder:text-neutral-400 focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] resize-none"
                  placeholder="Contoh: Periksa korosi terminal kabel grounding atau baut kendor..."
                />
              </div>
            </form>

            {/* Footer */}
            <div className="border-t border-[#E5E7EB] p-4 bg-neutral-50 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-5 py-2.5 border border-[#E5E7EB] hover:bg-white text-[#374151] font-semibold text-sm rounded-xl transition-all cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  "Simpan Jadwal"
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
