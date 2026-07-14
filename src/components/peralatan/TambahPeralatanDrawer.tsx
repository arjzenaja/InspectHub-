"use client";

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X, Loader2, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumSelect } from "@/components/ui/premium-select";
import { DatePicker } from "@/components/ui/date-picker";
import FotoUpload from "@/components/peralatan/FotoUpload";

const peralatanSchema = z.object({
  kodeId: z.string().min(3, "ID minimal 3 karakter"),
  nama: z.string().min(3, "Nama wajib diisi"),
  jenis: z.string().min(1, "Pilih jenis peralatan"),
  lokasiId: z.string().min(1, "Lokasi Substation wajib diisi"),
  lokasi: z.string().optional(),
  lat: z.number().min(-90, "Latitude tidak valid").max(90, "Latitude tidak valid").optional().nullable(),
  lng: z.number().min(-180, "Longitude tidak valid").max(180, "Longitude tidak valid").optional().nullable(),
  noRegister: z.string().optional(),
  fotoUrl: z.string().optional(),
  kapasitas: z.string().optional(),
  tinggiDimensi: z.string().optional(),
  jenisKabel: z.string().optional(),
  masaBerlaku: z.string().optional(),
  status: z.string().optional(),
});

type PeralatanFormValues = z.infer<typeof peralatanSchema>;

interface TambahPeralatanDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => Promise<void>;
  initialData?: any | null;
  jenisPeralatan: { id: string; nama: string }[];
  lokasiList: { id: string; nama: string; kota: string; lat?: number | null; lng?: number | null }[];
}



export default function TambahPeralatanDrawer({
  isOpen,
  onClose,
  onSave,
  initialData,
  jenisPeralatan,
  lokasiList,
}: TambahPeralatanDrawerProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<PeralatanFormValues>({
    resolver: zodResolver(peralatanSchema),
  });

  // Watch fields to sync with custom controls
  const watchJenis = watch("jenis") || "";
  const watchLokasiId = watch("lokasiId") || "";
  const watchStatus = watch("status") || "aktif";
  const watchFotoUrl = watch("fotoUrl") || "";
  const watchMasaBerlaku = watch("masaBerlaku");

  // Auto-fill GPS coordinates when lokasi is selected
  useEffect(() => {
    if (watchLokasiId) {
      const selectedLokasi = lokasiList.find(l => l.id === watchLokasiId);
      if (selectedLokasi && (selectedLokasi.lat != null || selectedLokasi.lng != null)) {
        setValue("lat", selectedLokasi.lat ?? undefined, { shouldValidate: true });
        setValue("lng", selectedLokasi.lng ?? undefined, { shouldValidate: true });
      }
    }
  }, [watchLokasiId, lokasiList, setValue]);

  useEffect(() => {
    if (isOpen) {
      if (initialData) {
        const formattedDate = initialData.masaBerlaku
          ? new Date(initialData.masaBerlaku).toISOString().split("T")[0]
          : "";
        const lokasiIdFromData = initialData.lokasiId ?? "";

        reset({
          kodeId: initialData.kodeId,
          nama: initialData.nama,
          jenis: initialData.jenis,
          lokasiId: lokasiIdFromData,
          lokasi: initialData.lokasi,
          lat: initialData.lat ?? undefined,
          lng: initialData.lng ?? undefined,
          noRegister: initialData.noRegister || "",
          fotoUrl: initialData.fotoUrl || "",
          kapasitas: initialData.kapasitas || "",
          tinggiDimensi: initialData.tinggiDimensi || "",
          jenisKabel: initialData.jenisKabel || "",
          masaBerlaku: formattedDate,
          status: initialData.status,
        });
      } else {
        reset({
          kodeId: "",
          nama: "",
          jenis: "",
          lokasiId: "",
          lokasi: "",
          lat: undefined,
          lng: undefined,
          noRegister: "",
          fotoUrl: "",
          kapasitas: "",
          tinggiDimensi: "",
          jenisKabel: "",
          masaBerlaku: "",
          status: "aktif",
        });
      }
    }
  }, [isOpen, initialData, reset]);

  const onSubmit = async (values: PeralatanFormValues) => {
    setIsSubmitting(true);
    try {
      const matchedLokasi = lokasiList.find(l => l.id === values.lokasiId) ?? lokasiList.find(l => l.nama === values.lokasi);
      const payload = {
        ...values,
        lokasi: matchedLokasi?.nama ?? values.lokasi,
      };

      await onSave(payload);
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const jenisOptions = jenisPeralatan.map(j => ({ value: j.nama, label: j.nama }));
  const lokasiOptions = lokasiList.map(l => ({ value: l.id, label: l.nama }));
  const selectedLokasi = lokasiList.find(l => l.id === watchLokasiId || l.nama === watchLokasiId);
  const statusOptions = [
    { value: "aktif", label: "Aktif" },
    { value: "tidak_aktif", label: "Tidak Aktif" },
    { value: "maintenance", label: "Maintenance" }
  ];

  const dateValue = watchMasaBerlaku ? new Date(watchMasaBerlaku) : undefined;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-xs cursor-pointer"
            onClick={onClose}
          />

          {/* Sliding Sheet Panel */}
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
                  {initialData ? "Edit Peralatan" : "Tambah Peralatan"}
                </h3>
                <p className="text-xs text-[#6B7280]">
                  {initialData ? "Ubah detail informasi peralatan" : "Masukkan data peralatan baru ke sistem"}
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

            {/* Form Body Scrollable */}
            <form onSubmit={handleSubmit(onSubmit)} className="flex-1 overflow-y-auto p-6 space-y-5">
              {/* Warning check for Jenis Peralatan */}
              {jenisPeralatan.length === 0 && (
                <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl">
                  <span className="font-bold">Peringatan:</span> Belum ada jenis peralatan. Tambahkan terlebih dahulu jenis di halaman Master Data.
                </div>
              )}

              {/* Warning check for Lokasi */}
              {lokasiList.length === 0 && (
                <div className="p-3 bg-amber-50 border border-amber-200 text-amber-800 text-xs rounded-xl">
                  <span className="font-bold">Peringatan:</span> Belum ada lokasi substation. Tambahkan terlebih dahulu lokasi di halaman Master Lokasi.
                </div>
              )}

              {/* ID Peralatan */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                  ID Peralatan *
                </label>
                <input
                  {...register("kodeId")}
                  disabled={!!initialData || isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB] disabled:opacity-75 disabled:cursor-not-allowed"
                  placeholder="Contoh: GROUNDING-G001"
                />
                {errors.kodeId && (
                  <p className="text-xs text-[#DC2626] mt-1">{errors.kodeId.message}</p>
                )}
              </div>

              {/* Nama Peralatan */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                  Nama Peralatan *
                </label>
                <input
                  {...register("nama")}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                  placeholder="Contoh: Grounding System Grid A"
                />
                {errors.nama && (
                  <p className="text-xs text-[#DC2626] mt-1">{errors.nama.message}</p>
                )}
              </div>

              {/* Grid fields for Jenis & Lokasi */}
              <div className="grid grid-cols-2 gap-4">
                {/* Jenis */}
                <div className="flex flex-col">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                    Jenis Peralatan *
                  </label>
                  <PremiumSelect
                    options={jenisOptions}
                    value={watchJenis}
                    onChange={val => setValue("jenis", val, { shouldValidate: true })}
                    placeholder="Pilih Jenis"
                    className="w-full"
                  />
                  {errors.jenis && (
                    <p className="text-xs text-[#DC2626] mt-1">{errors.jenis.message}</p>
                  )}
                </div>

                {/* Lokasi */}
                <div className="flex flex-col">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                    Lokasi Substation *
                  </label>
                  <PremiumSelect
                    options={lokasiOptions}
                    value={watchLokasiId}
                    onChange={val => setValue("lokasiId", val, { shouldValidate: true })}
                    placeholder="Pilih Lokasi"
                    className="w-full"
                  />
                  {errors.lokasiId && (
                    <p className="text-xs text-[#DC2626] mt-1">{errors.lokasiId.message}</p>
                  )}
                  {selectedLokasi && (
                    <div className="mt-3 bg-[#F9FAFB] rounded-xl px-4 py-3 border border-[#E5E7EB]">
                      <p className="text-xs text-[#6B7280] font-semibold uppercase tracking-wider mb-2">Informasi Lokasi</p>
                      <div className="text-xs text-[#374151] space-y-1">
                        <p><span className="text-[#6B7280]">Kota:</span> {selectedLokasi.kota}</p>
                        {(selectedLokasi as any).provinsi && <p><span className="text-[#6B7280]">Provinsi:</span> {(selectedLokasi as any).provinsi}</p>}
                        {(selectedLokasi as any).zona && <p><span className="text-[#6B7280]">Zona:</span> {(selectedLokasi as any).zona}</p>}
                        {(selectedLokasi as any).area && <p><span className="text-[#6B7280]">Area:</span> {(selectedLokasi as any).area}</p>}
                        {(selectedLokasi.lat && selectedLokasi.lng) && <p><span className="text-[#6B7280]">GPS:</span> {selectedLokasi.lat}, {selectedLokasi.lng}</p>}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* No Register */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                  No. Register
                </label>
                <input
                  {...register("noRegister")}
                  disabled={isSubmitting}
                  className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                  placeholder="Contoh: REG-2026-0001"
                />
              </div>

              {/* KOORDINAT GPS */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#6B7280] uppercase tracking-wider">
                  Koordinat GPS
                  <span className="text-[#9CA3AF] font-normal normal-case ml-1">(opsional)</span>
                </label>
                <p className="text-xs text-[#9CA3AF]">
                  Digunakan untuk menampilkan peralatan pada peta lokasi
                </p>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs text-[#6B7280] mb-1 block">Latitude</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="Contoh: -6.2088"
                      {...register("lat", { valueAsNumber: true })}
                      className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2.5 text-sm
                                 focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]/60"
                    />
                    {errors.lat && (
                      <p className="text-xs text-[#DC2626] mt-1">{errors.lat.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="text-xs text-[#6B7280] mb-1 block">Longitude</label>
                    <input
                      type="number"
                      step="any"
                      placeholder="Contoh: 106.8456"
                      {...register("lng", { valueAsNumber: true })}
                      className="w-full border border-[#E5E7EB] rounded-xl px-3 py-2.5 text-sm
                                 focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]/60"
                    />
                    {errors.lng && (
                      <p className="text-xs text-[#DC2626] mt-1">{errors.lng.message}</p>
                    )}
                  </div>
                </div>

                {/* Tombol ambil koordinat dari lokasi yang dipilih */}
                {watchLokasiId && (
                  <button
                    type="button"
                    onClick={() => {
                      const selected = lokasiList.find(
                        (l) => l.id === watchLokasiId || l.nama === watchLokasiId
                      );

                      if (selected && (selected.lat != null || selected.lng != null)) {
                        setValue("lat", selected.lat ?? undefined, { shouldValidate: true });
                        setValue("lng", selected.lng ?? undefined, { shouldValidate: true });
                        console.log("Koordinat diambil dari lokasi yang dipilih");
                      } else {
                        console.error("Lokasi tidak memiliki koordinat GPS");
                      }
                    }}
                    className="text-xs text-[#DC2626] font-medium hover:underline flex items-center gap-1"
                  >
                    Gunakan koordinat dari lokasi yang dipilih
                  </button>
                )}
              </div>

              {/* Foto Upload Custom component */}
              <FotoUpload
                value={watchFotoUrl}
                onChange={url => setValue("fotoUrl", url)}
              />

              {/* Kapasitas & Dimensi */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                    Kapasitas / Rating
                  </label>
                  <input
                    {...register("kapasitas")}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                    placeholder="Contoh: 10 Ohm atau 60MVA"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                    Tinggi / Dimensi
                  </label>
                  <input
                    {...register("tinggiDimensi")}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                    placeholder="Contoh: 3m x 2m x 4m"
                  />
                </div>
              </div>

              {/* Spesifikasi Kabel & Status */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1">
                    Spesifikasi Kabel
                  </label>
                  <input
                    {...register("jenisKabel")}
                    disabled={isSubmitting}
                    className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all bg-[#F9FAFB]"
                    placeholder="Contoh: Copper BC 50mm"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                    Status Operasional
                  </label>
                  <PremiumSelect
                    options={statusOptions}
                    value={watchStatus}
                    onChange={val => setValue("status", val)}
                    placeholder="Pilih Status"
                    className="w-full"
                  />
                </div>
              </div>

              {/* Datepicker for Calibration validity */}
              <div className="flex flex-col">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#6B7280] mb-1.5">
                  Masa Berlaku Kalibrasi / Izin
                </label>
                <DatePicker
                  value={dateValue}
                  onChange={date => setValue("masaBerlaku", date ? date.toISOString().split("T")[0] : "")}
                  placeholder="Pilih tanggal kalibrasi"
                />
              </div>
            </form>

            {/* Footer actions */}
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
                className="px-5 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Menyimpan...
                  </>
                ) : (
                  "Simpan Peralatan"
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
