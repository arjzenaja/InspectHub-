"use client";

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { X, Loader2, Lock, Eye, EyeOff, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumSelect } from "@/components/ui/premium-select";
import PasswordStrength from "@/components/ui/PasswordStrength";
import { tambahTeknisiSchema, DEFAULT_TEKNISI_PASSWORD } from "@/schemas/teknisi.schema";

type TeknisiFormValues = z.input<typeof tambahTeknisiSchema>;

interface TambahTeknisiDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => Promise<void>;
  initialData?: any | null;
}

export default function TambahTeknisiDrawer({
  isOpen,
  onClose,
  onSave,
  initialData,
}: TambahTeknisiDrawerProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [useCustomPassword, setUseCustomPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TeknisiFormValues>({
    resolver: zodResolver(tambahTeknisiSchema),
    defaultValues: {
      namaLengkap: "",
      email: "",
      noHp: "",
      divisi: "transmisi",
      statusKeaktifan: "aktif",
      rating: 0,
      password: DEFAULT_TEKNISI_PASSWORD,
    },
  });

  const watchDivisi = watch("divisi") || "transmisi";
  const watchStatus = watch("statusKeaktifan") || "aktif";
  const watchPassword = watch("password") || DEFAULT_TEKNISI_PASSWORD;
  const isEdit = Boolean(initialData);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        reset({
          namaLengkap: initialData.nama,
          email: initialData.email,
          noHp: initialData.noHp || "",
          divisi: initialData.divisi,
          statusKeaktifan: initialData.status,
          rating: initialData.rating ?? 0,
          password: DEFAULT_TEKNISI_PASSWORD,
        });
        setUseCustomPassword(false);
      } else {
        reset({
          namaLengkap: "",
          email: "",
          noHp: "",
          divisi: "transmisi",
          statusKeaktifan: "aktif",
          rating: 0,
          password: DEFAULT_TEKNISI_PASSWORD,
        });
        setUseCustomPassword(false);
      }
      setShowPassword(false);
    }
  }, [isOpen, initialData, reset]);

  const onSubmit = async (values: TeknisiFormValues) => {
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

  const divisiOptions: Array<{ value: TeknisiFormValues["divisi"]; label: string }> = [
    { value: "transmisi", label: "Transmisi" },
    { value: "distribusi", label: "Distribusi" },
    { value: "gardu_induk", label: "Gardu Induk" },
  ];

  const statusOptions: Array<{ value: NonNullable<TeknisiFormValues["statusKeaktifan"]>; label: string }> = [
    { value: "aktif", label: "Aktif" },
    { value: "standby", label: "Standby" },
    { value: "cuti", label: "Cuti" },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs cursor-pointer"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative bg-white w-full max-w-md shadow-2xl flex flex-col h-full z-10"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
              <div>
                <h3 className="text-lg font-bold text-[#111827]">
                  {isEdit ? "Edit Profil Teknisi" : "Tambah Teknisi Baru"}
                </h3>
                <p className="text-xs text-[#6B7280]">
                  {isEdit ? "Ubah detail teknisi" : "Masukkan detail teknisi baru"}
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-6 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                  Nama Lengkap *
                </label>
                <input
                  {...register("namaLengkap")}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                  placeholder="Contoh: Budi Setiawan"
                />
                {errors.namaLengkap && (
                  <p className="text-xs text-[#DC2626] mt-1">{errors.namaLengkap.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                  Alamat Email *
                </label>
                <input
                  {...register("email")}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                  placeholder="Contoh: budi@inspecpro.com"
                />
                {errors.email && (
                  <p className="text-xs text-[#DC2626] mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                  Nomor Handphone *
                </label>
                <input
                  {...register("noHp")}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                  placeholder="Contoh: 08123456789"
                />
                {errors.noHp && (
                  <p className="text-xs text-[#DC2626] mt-1">{errors.noHp.message}</p>
                )}
              </div>

              {!isEdit && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                      Password <span className="text-[#DC2626]">*</span>
                    </label>
                    <button
                      type="button"
                      onClick={() => {
                        setUseCustomPassword(!useCustomPassword);
                        if (useCustomPassword) {
                          setValue("password", DEFAULT_TEKNISI_PASSWORD, { shouldDirty: true });
                        }
                      }}
                      className="text-xs text-[#DC2626] font-medium hover:underline"
                    >
                      {useCustomPassword ? "Gunakan password default" : "Buat password kustom"}
                    </button>
                  </div>

                  {!useCustomPassword ? (
                    <div className="flex items-center gap-3 bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-4 py-3">
                      <div className="w-8 h-8 bg-[#DC2626]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lock size={15} className="text-[#DC2626]" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-[#374151]">Password Default</p>
                        <p className="text-sm font-mono font-bold text-[#DC2626] mt-0.5 tracking-wider">
                          {DEFAULT_TEKNISI_PASSWORD}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(DEFAULT_TEKNISI_PASSWORD);
                          toast && toast.success ? toast.success("Password disalin!") : null;
                        }}
                        className="p-1.5 hover:bg-[#DC2626]/10 rounded-lg transition-colors flex-shrink-0"
                        title="Salin password"
                      >
                        <Copy size={14} className="text-[#DC2626]" />
                      </button>
                    </div>
                  ) : (
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        placeholder="Masukkan password kustom..."
                        {...register("password")}
                        className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2.5 pr-10 text-sm focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]/60 transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#374151] transition-colors"
                      >
                        {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                      {errors.password && (
                        <p className="text-xs text-[#DC2626] mt-1">{errors.password.message}</p>
                      )}
                      <PasswordStrength password={watchPassword} />
                    </div>
                  )}

                  <p className="text-xs text-[#9CA3AF]">
                    💡 Teknisi menggunakan password ini untuk login di aplikasi mobile.
                    {!useCustomPassword && " Password dapat diubah setelah login pertama."}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                    Divisi / Penugasan *
                  </label>
                  <PremiumSelect
                    options={divisiOptions}
                    value={watchDivisi}
                    onChange={(val) => setValue("divisi", val as TeknisiFormValues["divisi"], { shouldValidate: true })}
                    placeholder="Pilih Divisi"
                    className="w-full"
                  />
                  {errors.divisi && (
                    <p className="text-xs text-[#DC2626] mt-1">{errors.divisi.message}</p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                    Status Keaktifan
                  </label>
                  <PremiumSelect
                    options={statusOptions}
                    value={watchStatus}
                    onChange={(val) => setValue("statusKeaktifan", val as NonNullable<TeknisiFormValues["statusKeaktifan"]>)}
                    placeholder="Pilih Status"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                  Rating Penilaian Lapangan (0.0 - 5.0)
                </label>
                <input
                  {...register("rating", { valueAsNumber: true })}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                  placeholder="Contoh: 4.8"
                />
              </div>
            </form>

            <div className="border-t border-[#E5E7EB] p-4 bg-neutral-50 flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                disabled={isSubmitting}
                className="px-5 py-2.5 border border-[#E5E7EB] hover:bg-white text-[#374151] font-semibold text-sm rounded-xl transition-all disabled:opacity-50 cursor-pointer"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={handleSubmit(onSubmit)}
                disabled={isSubmitting}
                className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm disabled:opacity-75 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  "Simpan Profil"
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
