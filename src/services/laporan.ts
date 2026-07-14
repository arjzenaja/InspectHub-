import { parseJsonResponse } from "@/lib/fetchJson";

export type LaporanFilters = {
  search?: string;
  teknisi?: string;
  status?: string;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  limit?: number;
};

export const laporanService = {
  getAll: async (filters: LaporanFilters = {}) => {
    const params = new URLSearchParams();
    if (filters.search) params.set("search", filters.search);
    if (filters.teknisi) params.set("teknisi", filters.teknisi);
    if (filters.status) params.set("status", filters.status);
    if (filters.dateFrom) params.set("dateFrom", filters.dateFrom);
    if (filters.dateTo) params.set("dateTo", filters.dateTo);
    if (filters.page) params.set("page", String(filters.page));
    if (filters.limit) params.set("limit", String(filters.limit));

    const res = await fetch(`/api/laporan?${params.toString()}`, {
      credentials: "include",
    });

    if (!res.ok) {
      const payload = await parseJsonResponse<{ success?: boolean; message?: string; data?: unknown; pagination?: unknown }>(res, { success: false, message: "Gagal memuat laporan" });
      if (payload?.message) throw new Error(payload.message);
      throw new Error("Gagal memuat laporan");
    }

    return (await parseJsonResponse(res, { success: true, data: [], pagination: null })) as {
      success: boolean;
      data: any;
      pagination: any;
    };
  },
};

export default laporanService;

