export const formatKondisiAkhir = (kondisi: string | null | undefined): {
  label: string;
  color: string;
  bgColor: string;
} => {
  switch (kondisi) {
    case "baik":
    case "layak":
    case "approved":
    case "selesai":
      return {
        label: "Baik / Layak",
        color: "text-green-700",
        bgColor: "bg-green-100",
      };
    case "perlu_perbaikan":
    case "perlu_perhatian":
      return {
        label: "Perlu Perbaikan",
        color: "text-orange-700",
        bgColor: "bg-orange-100",
      };
    case "tidak_layak":
    case "kritis":
      return {
        label: "Tidak Layak",
        color: "text-red-700",
        bgColor: "bg-red-100",
      };
    case "pending":
    case "pending_approval":
    case "revisi":
    case "revision_needed":
      return {
        label: "Belum Dinilai",
        color: "text-gray-600",
        bgColor: "bg-gray-100",
      };
    default:
      return {
        label: kondisi ?? "—",
        color: "text-gray-600",
        bgColor: "bg-gray-100",
      };
  }
};

export const formatJadwalStatus = (status: string) => {
  const config: Record<string, { label: string; color: string; bgColor: string }> = {
    pending:          { label: "Belum Dikerjakan",         color: "text-yellow-700",  bgColor: "bg-yellow-100"  },
    progress:         { label: "Sedang Dikerjakan",        color: "text-blue-700",    bgColor: "bg-blue-100"    },
    pending_approval: { label: "Menunggu Persetujuan",     color: "text-purple-700",  bgColor: "bg-purple-100"  },
    selesai:          { label: "Selesai",                  color: "text-green-700",   bgColor: "bg-green-100"   },
    revisi:           { label: "Perlu Revisi",             color: "text-orange-700",  bgColor: "bg-orange-100"  },
    tertunda:         { label: "Tertunda",                 color: "text-gray-700",    bgColor: "bg-gray-100"    },
  };
  return config[status] ?? { label: status, color: "text-gray-600", bgColor: "bg-gray-100" };
};

