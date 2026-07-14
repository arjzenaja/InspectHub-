import { z } from "zod";

export const DEFAULT_TEKNISI_PASSWORD = "Teknisi@123";

export const tambahTeknisiSchema = z.object({
  namaLengkap: z.string().min(3, "Nama minimal 3 karakter"),
  email: z.string().email("Format email tidak valid"),
  noHp: z.preprocess(
    (value) => {
      if (typeof value === "string" && value.trim() === "") {
        return undefined;
      }
      return value;
    },
    z.string().min(10, "Nomor HP minimal 10 digit").optional()
  ),
  divisi: z.enum(["transmisi", "distribusi", "gardu_induk"], {
    message: "Pilih divisi yang valid",
  }),
  statusKeaktifan: z.enum(["aktif", "standby", "cuti"], {
    message: "Pilih status keaktifan yang valid",
  }).default("aktif"),
  rating: z.coerce.number().min(0, "Rating minimal 0").max(5, "Rating maksimal 5").default(0),
  password: z.string()
    .min(8, "Password minimal 8 karakter")
    .regex(/[A-Z]/, "Harus ada huruf kapital")
    .regex(/[0-9]/, "Harus ada angka")
    .default(DEFAULT_TEKNISI_PASSWORD),
});

export type TambahTeknisiInput = z.infer<typeof tambahTeknisiSchema>;
