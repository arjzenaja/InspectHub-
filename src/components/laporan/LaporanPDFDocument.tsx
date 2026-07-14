import {
  Document,
  Page,
  Text,
  View,
  Image,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";

const registerPdfFonts = () => {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ?? "https://inspect-hub-six.vercel.app";

  Font.register({
    family: "Inter",
    fonts: [
      {
        src: `${baseUrl}/fonts/inter-latin-400-normal.woff`,
        fontWeight: 400,
      },
      {
        src: `${baseUrl}/fonts/inter-latin-700-normal.woff`,
        fontWeight: 700,
      },
    ],
  });
};

registerPdfFonts();

const styles = StyleSheet.create({
  page: {
    fontFamily: "Inter",
    fontSize: 10,
    color: "#111827",
    padding: 40,
    backgroundColor: "#FFFFFF",
  },
  // Header
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: "#DC2626",
  },
  logoBox: {
    width: 36,
    height: 36,
    backgroundColor: "#DC2626",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  brandName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#DC2626",
    marginTop: 4,
  },
  brandSub: {
    fontSize: 8,
    color: "#6B7280",
  },
  reportTitle: {
    textAlign: "right",
  },
  reportCode: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#111827",
  },
  reportMeta: {
    fontSize: 8,
    color: "#6B7280",
    marginTop: 3,
    lineHeight: 1.5,
  },
  // Section
  sectionTitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#DC2626",
    textTransform: "uppercase",
    letterSpacing: 0.5,
    borderLeftWidth: 3,
    borderLeftColor: "#DC2626",
    paddingLeft: 8,
    marginBottom: 10,
    marginTop: 16,
  },
  // Info grid
  infoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginBottom: 4,
  },
  infoItem: {
    width: "48%",
  },
  infoLabel: {
    fontSize: 8,
    color: "#6B7280",
    marginBottom: 2,
  },
  infoValue: {
    fontSize: 10,
    fontWeight: "bold",
    color: "#111827",
  },
  // Table
  table: {
    width: "100%",
    marginTop: 4,
  },
  tableHeader: {
    flexDirection: "row",
    backgroundColor: "#F3F4F6",
    padding: 8,
    borderRadius: 4,
  },
  tableHeaderCell: {
    fontSize: 8,
    fontWeight: "bold",
    color: "#6B7280",
    textTransform: "uppercase",
  },
  tableRow: {
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#F3F4F6",
    alignItems: "center",
  },
  tableCell: {
    fontSize: 9,
    color: "#374151",
  },
  // Badge
  badgeOK: {
    backgroundColor: "#DCFCE7",
    color: "#16A34A",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 8,
    fontWeight: "bold",
  },
  badgeDeviasi: {
    backgroundColor: "#FEE2E2",
    color: "#DC2626",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 8,
    fontWeight: "bold",
  },
  badgeSesuai: {
    backgroundColor: "#DCFCE7",
    color: "#16A34A",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
    fontSize: 8,
    fontWeight: "bold",
  },
  // Kesimpulan box
  kesimpulanBox: {
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
  },
  kesimpulanLayak: {
    backgroundColor: "#DCFCE7",
  },
  kesimpulanTidakLayak: {
    backgroundColor: "#FEE2E2",
  },
  kesimpulanTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 4,
  },
  kesimpulanSub: {
    fontSize: 9,
    color: "#374151",
  },
  // Photos grid
  photoGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 8,
  },
  photo: {
    width: 160,
    height: 120,
    borderRadius: 4,
    objectFit: "cover",
  },
  // Signature
  signatureSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    paddingTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
  },
  signatureBox: {
    alignItems: "center",
    width: "40%",
  },
  signatureLine: {
    width: 140,
    height: 1,
    backgroundColor: "#374151",
    marginTop: 50,
    marginBottom: 6,
  },
  signatureLabel: {
    fontSize: 8,
    color: "#6B7280",
  },
  signatureName: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#111827",
    marginTop: 2,
  },
  // Footer
  footer: {
    position: "absolute",
    bottom: 20,
    left: 40,
    right: 40,
    textAlign: "center",
    fontSize: 8,
    color: "#9CA3AF",
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    paddingTop: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 12,
  },
});

interface LaporanPDFDocumentProps {
  laporan: {
    kodeId: string;
    createdAt: string;
    status: string;
    kesimpulan?: string;
    catatan?: string;
    approvedBy?: string;
    approvedAt?: string;
    checklist: {
      items?: Array<{
        id?: string;
        nama?: string;
        name?: string;
        status?: string;
        kondisi?: string;
        catatan?: string;
        metode?: string;
      }>;
    };
    pengukuran?: {
      items?: Array<{
        id?: string;
        nama?: string;
        name?: string;
        nilai: string | number;
        satuan: string;
        status: "sesuai" | "tidak_sesuai";
        metode?: string;
      }>;
      tahanan?: string | number;
      tegangan?: string | number;
    };
    fotoUrls: string[];
    hasilData?: Record<string, any>;
    teknisi: {
      nama: string;
      idKaryawan: string;
      divisi: string;
    };
    peralatan: {
      kodeId: string;
      nama: string;
      jenis: string | { nama: string };
      noRegister?: string;
      lokasi?: string;
      lokasiRelation?: {
        nama: string;
        kota: string;
      };
    };
    jadwal?: {
      lokasi?: { nama: string; kota: string };
      waktuMulai?: string;
      waktuSelesai?: string;
    };
  };
  baseUrl: string; // untuk URL foto
}

export const LaporanPDFDocument = ({
  laporan,
  baseUrl,
}: LaporanPDFDocumentProps) => {
  const checklistItems = laporan.checklist?.items ?? [];
  const fotoUrls = (laporan.fotoUrls ?? []) as string[];
  const hasilData = laporan.hasilData ?? {};
  const kondisiBaik = checklistItems.filter(
    (i) => i.status === "baik"
  ).length;
  const perluPerbaikan = checklistItems.filter(
    (i) => i.status === "perlu_perbaikan"
  ).length;
  const rawPengukuran =
    laporan.pengukuran ??
    hasilData?.pengukuran ??
    hasilData ??
    {};
  const rawTahanan = rawPengukuran?.tahanan ?? hasilData?.tahanan;
  const rawTegangan = rawPengukuran?.tegangan ?? hasilData?.tegangan;
  const hasTopLevelMeasurements = rawTahanan != null || rawTegangan != null;
  const pengukuranItems: MeasurementItem[] = hasTopLevelMeasurements
    ? []
    : Array.isArray(rawPengukuran?.items)
    ? rawPengukuran.items
    : Array.isArray(hasilData?.pengukuran?.items)
    ? hasilData.pengukuran.items
    : [];
  const isLayak =
    laporan.kesimpulan === "layak" ||
    laporan.kesimpulan === "baik" ||
    (laporan.kesimpulan ?? "").toLowerCase().includes("baik");

  type InspectionItem = {
    id?: string;
    nama?: string;
    name?: string;
    method?: string;
    status?: string;
    kondisi?: string;
    catatan?: string;
    metode?: string;
  };

  type MeasurementItem = {
    id?: string;
    nama?: string;
    name?: string;
    nilai?: string | number;
    value?: string | number;
    satuan?: string;
    unit?: string;
    status?: string | boolean;
    statusOk?: boolean;
    metode?: string;
    method?: string;
    kondisi?: string;
  };

  const getInspectionMethod = (item: InspectionItem) =>
    item.metode || item.method || "Inspeksi visual";

  const getMeasurementStatus = (item: MeasurementItem) => {
    if (item.status != null && item.status !== "") {
      return item.status;
    }
    if (item.statusOk != null) {
      return item.statusOk ? "Baik" : "Perlu Perbaikan";
    }

    const rawValue = item.nilai ?? item.value;
    const numericValue = parseMeasurementValue(rawValue);
    const nameLabel = String(item.nama || item.name || "").toLowerCase();

    if (nameLabel.includes("tahanan")) {
      return numericValue > 0 && numericValue < 5 ? "Baik" : "Perlu Perbaikan";
    }
    if (nameLabel.includes("tegangan")) {
      return numericValue < 1 ? "Baik" : "Perlu Perbaikan";
    }
    if (!isNaN(numericValue)) {
      return numericValue < 1 ? "Baik" : "Perlu Perbaikan";
    }
    return "Perlu Perbaikan";
  };

  const getInspectionStatusLabel = (status?: string | boolean) => {
    const normalized = String(status ?? "").toLowerCase();
    if (normalized.includes("baik") || normalized.includes("sesuai")) return "Baik";
    if (
      normalized.includes("perlu") ||
      normalized.includes("deviasi") ||
      normalized.includes("tidak")
    )
      return "Perlu Perbaikan";
    return status != null ? String(status) : "—";
  };

  const getInspectionStatusBadge = (status?: string | boolean) => {
    const normalized = String(status ?? "").toLowerCase();
    if (normalized.includes("baik") || normalized.includes("sesuai")) return styles.badgeSesuai;
    return styles.badgeDeviasi;
  };

  const parseMeasurementValue = (value: string | number | undefined) => {
    if (value == null) return NaN;
    if (typeof value === "number") return value;
    const normalized = String(value)
      .replace(/[^0-9,.-]/g, "")
      .replace(",", ".");
    return Number(normalized);
  };

  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const formatDateTime = (dateStr: string) =>
    new Date(dateStr).toLocaleString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

  const formatTime = (timeStr: string) => {
    try {
      // Handle HH:mm format or ISO datetime
      if (timeStr.includes(":") && !timeStr.includes("T")) {
        return timeStr;
      }
      return new Date(timeStr).toLocaleTimeString("id-ID", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return timeStr;
    }
  };

  const jenisPeralatan =
    typeof laporan.peralatan.jenis === "string"
      ? laporan.peralatan.jenis
      : laporan.peralatan.jenis?.nama ?? "-";

  return (
    <Document
      title={`Laporan Inspeksi ${laporan.kodeId}`}
      author="InspecPro"
      creator="InspecPro Admin"
    >
      <Page size="A4" style={styles.page}>
        {/* ─── HEADER ─── */}
        <View style={styles.header}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <View style={styles.logoBox}>
              <Text style={styles.logoText}>⚡</Text>
            </View>
            <View>
              <Text style={styles.brandName}>InspecPro</Text>
              <Text style={styles.brandSub}>
                Industrial Electrical Inspection Solutions
              </Text>
            </View>
          </View>
          <View style={styles.reportTitle}>
            <Text style={styles.reportCode}>
              LAPORAN: {laporan.peralatan.kodeId}
            </Text>
            <Text style={styles.reportMeta}>
              No. Laporan : {laporan.kodeId}
              {"\n"}
              Tanggal : {formatDate(laporan.createdAt)}
              {"\n"}
              Pukul : {formatTime(laporan.createdAt)} WIB
              {"\n"}
              Teknisi : {laporan.teknisi.nama} (ID: {laporan.teknisi.idKaryawan})
            </Text>
          </View>
        </View>

        {/* ─── INFORMASI UMUM ─── */}
        <Text style={styles.sectionTitle}>Informasi Umum</Text>
        <View style={styles.infoGrid}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Peralatan</Text>
            <Text style={styles.infoValue}>{laporan.peralatan.nama}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Jenis Peralatan</Text>
            <Text style={styles.infoValue}>{jenisPeralatan}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>ID Peralatan</Text>
            <Text style={styles.infoValue}>{laporan.peralatan.kodeId}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>No. Register</Text>
            <Text style={styles.infoValue}>
              {laporan.peralatan.noRegister ?? "—"}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Lokasi / Substation</Text>
            <Text style={styles.infoValue}>
              {laporan.peralatan.lokasiRelation?.nama ??
                laporan.peralatan.lokasi ??
                "—"}
              {laporan.peralatan.lokasiRelation?.kota
                ? `, ${laporan.peralatan.lokasiRelation.kota}`
                : ""}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Waktu Inspeksi</Text>
            <Text style={styles.infoValue}>
              {laporan.jadwal?.waktuMulai ?? "—"} — {laporan.jadwal?.waktuSelesai ?? "—"}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Divisi Teknisi</Text>
            <Text style={styles.infoValue}>{laporan.teknisi.divisi}</Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Tanggal Inspeksi</Text>
            <Text style={styles.infoValue}>{formatDate(laporan.createdAt)}</Text>
          </View>
        </View>

        <View style={styles.divider} />

        {/* ─── HASIL INSPEKSI VISUAL ─── */}
        {checklistItems.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>Hasil Inspeksi Visual</Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text
                  style={[styles.tableHeaderCell, { flex: 3 }]}
                >
                  Komponen
                </Text>
                <Text
                  style={[styles.tableHeaderCell, { flex: 2 }]}
                >
                  Metode
                </Text>
                <Text
                  style={[styles.tableHeaderCell, { flex: 2 }]}
                >
                  Status
                </Text>
              </View>
              {checklistItems.map((item, idx) => (
                <View key={item.id ?? idx} style={styles.tableRow}>
                  <Text
                    style={[styles.tableCell, { flex: 3 }]}
                  >
                    {item.nama || item.name || "—"}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { flex: 2, color: "#6B7280" },
                    ]}
                  >
                    {getInspectionMethod(item)}
                  </Text>
                  <View style={{ flex: 2 }}>
                    <Text
                      style={getInspectionStatusBadge(item.status || item.kondisi)}
                    >
                      {getInspectionStatusLabel(item.status || item.kondisi)}
                    </Text>
                  </View>
                </View>
              ))}
            </View>

            {checklistItems.some((item) => item.catatan) && (
              <>
                <Text style={styles.sectionTitle}>Catatan Teknisi</Text>
                {checklistItems
                  .filter((item) => item.catatan)
                  .map((item, idx) => (
                    <Text
                      key={idx}
                      style={{
                        fontSize: 9,
                        color: "#374151",
                        lineHeight: 1.6,
                        marginBottom: 4,
                      }}
                    >
                      <Text style={{ fontWeight: "bold" }}>
                        {item.nama || item.name || "—"}: 
                      </Text>
                      {item.catatan}
                    </Text>
                  ))}
              </>
            )}
          </>
        )}

        {/* ─── DATA PENGUKURAN TEKNIS ─── */}
        {(pengukuranItems.length > 0 ||
          rawTahanan != null ||
          rawTegangan != null) && (
          <>
            <Text style={styles.sectionTitle}>
              Data Pengukuran Teknis
            </Text>
            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text
                  style={[styles.tableHeaderCell, { flex: 3 }]}
                >
                  Parameter
                </Text>
                <Text
                  style={[styles.tableHeaderCell, { flex: 2 }]}
                >
                  Nilai Ukur / Temuan
                </Text>
                <Text
                  style={[styles.tableHeaderCell, { flex: 2 }]}
                >
                  Metode
                </Text>
                <Text
                  style={[styles.tableHeaderCell, { flex: 1.5 }]}
                >
                  Status
                </Text>
              </View>

              {/* Render pengukuran items jika ada */}
              {pengukuranItems.map((item, idx) => (
                <View key={item.id ?? idx} style={styles.tableRow}>
                  <Text
                    style={[styles.tableCell, { flex: 3 }]}
                  >
                    {item.nama || item.name || "—"}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { flex: 2, fontWeight: "bold" },
                    ]}
                  >
                    {item.nilai ?? item.value ?? "—"} {item.satuan ?? item.unit ?? ""}
                  </Text>
                  <Text
                    style={[
                      styles.tableCell,
                      { flex: 2, color: "#6B7280" },
                    ]}
                  >
                    {item.metode ?? item.method ?? "Alat Ukur"}
                  </Text>
                  <View style={{ flex: 1.5 }}>
                    <Text
                      style={getInspectionStatusBadge(item.status ?? item.kondisi)}
                    >
                      {getInspectionStatusLabel(item.status ?? item.kondisi)}
                    </Text>
                  </View>
                </View>
              ))}

              {/* Fallback untuk tahanan & tegangan */}
              {pengukuranItems.length === 0 &&
                hasTopLevelMeasurements && (
                  <>
                    {rawTahanan != null && (
                      <View style={styles.tableRow}>
                        <Text
                          style={[styles.tableCell, { flex: 3 }]}
                        >
                          Tahanan Pembumian
                        </Text>
                        <Text
                          style={[
                            styles.tableCell,
                            { flex: 2, fontWeight: "bold" },
                          ]}
                        >
                          {rawTahanan} Ω
                        </Text>
                        <Text
                          style={[
                            styles.tableCell,
                            { flex: 2, color: "#6B7280" },
                          ]}
                        >
                          Alat Ukur
                        </Text>
                        <View style={{ flex: 1.5 }}>
                          <Text
                            style={
                              parseMeasurementValue(rawTahanan) > 0 &&
                              parseMeasurementValue(rawTahanan) < 5
                                ? styles.badgeSesuai
                                : styles.badgeDeviasi
                            }
                          >
                            {parseMeasurementValue(rawTahanan) > 0 &&
                            parseMeasurementValue(rawTahanan) < 5
                              ? "Baik"
                              : "Perlu Perbaikan"}
                          </Text>
                        </View>
                      </View>
                    )}
                    {rawTegangan != null && (
                      <View style={styles.tableRow}>
                        <Text
                          style={[styles.tableCell, { flex: 3 }]}
                        >
                          Tegangan Pembumian
                        </Text>
                        <Text
                          style={[
                            styles.tableCell,
                            { flex: 2, fontWeight: "bold" },
                          ]}
                        >
                          {rawTegangan} V
                        </Text>
                        <Text
                          style={[
                            styles.tableCell,
                            { flex: 2, color: "#6B7280" },
                          ]}
                        >
                          Alat Ukur
                        </Text>
                        <View style={{ flex: 1.5 }}>
                          <Text
                            style={
                              parseMeasurementValue(rawTegangan) < 1
                                ? styles.badgeSesuai
                                : styles.badgeDeviasi
                            }
                          >
                            {parseMeasurementValue(rawTegangan) < 1
                              ? "Baik"
                              : "Perlu Perbaikan"}
                          </Text>
                        </View>
                      </View>
                    )}
                  </>
                )}
            </View>
          </>
        )}

        {/* ─── CATATAN TEKNISI ─── */}
        {laporan.catatan && (
          <>
            <Text style={styles.sectionTitle}>Catatan Teknisi</Text>
            <Text
              style={{
                fontSize: 9,
                color: "#374151",
                lineHeight: 1.6,
              }}
            >
              {laporan.catatan}
            </Text>
          </>
        )}

        {/* ─── KESIMPULAN AKHIR ─── */}
        <Text style={styles.sectionTitle}>Kesimpulan Akhir</Text>
        <View
          style={[
            styles.kesimpulanBox,
            isLayak
              ? styles.kesimpulanLayak
              : styles.kesimpulanTidakLayak,
          ]}
        >
          <Text
            style={[
              styles.kesimpulanTitle,
              { color: isLayak ? "#16A34A" : "#DC2626" },
            ]}
          >
            {isLayak ? "✓ LAYAK OPERASI" : "✗ PERLU PERHATIAN"}
          </Text>
          <Text style={styles.kesimpulanSub}>
            Hasil inspeksi: {kondisiBaik}/{checklistItems.length} komponen
            kondisi baik
            {perluPerbaikan > 0 ? `, ${perluPerbaikan} perlu perbaikan.` : "."}
          </Text>
        </View>

        {/* ─── DOKUMENTASI LAPANGAN (Foto) ─── */}
        {fotoUrls.length > 0 && (
          <>
            <Text style={styles.sectionTitle}>
              Dokumentasi Lapangan
            </Text>
            <View style={styles.photoGrid}>
              {fotoUrls.slice(0, 6).map((url, idx) => {
                const fullUrl = url.startsWith("http")
                  ? url
                  : `${baseUrl}${url}`;
                return (
                  <Image
                    key={idx}
                    src={fullUrl}
                    style={styles.photo}
                  />
                );
              })}
            </View>
            {fotoUrls.length > 6 && (
              <Text
                style={{
                  fontSize: 8,
                  color: "#9CA3AF",
                  marginTop: 4,
                }}
              >
                + {fotoUrls.length - 6} foto lainnya tidak ditampilkan
              </Text>
            )}
          </>
        )}

        {/* ─── TANDA TANGAN ─── */}
        <View style={styles.signatureSection}>
          <View style={styles.signatureBox}>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureLabel}>
              Teknisi Pemeriksa
            </Text>
            <Text style={styles.signatureName}>
              {laporan.teknisi.nama}
            </Text>
            <Text
              style={[
                styles.signatureLabel,
                { marginTop: 2 },
              ]}
            >
              ID: {laporan.teknisi.idKaryawan}
            </Text>
          </View>
          <View style={styles.signatureBox}>
            <View style={styles.signatureLine} />
            <Text style={styles.signatureLabel}>
              {laporan.approvedBy
                ? "Disetujui oleh"
                : "Supervisor / Manajer"}
            </Text>
            <Text style={styles.signatureName}>
              {laporan.approvedBy ?? "_________________"}
            </Text>
            {laporan.approvedAt && (
              <Text
                style={[
                  styles.signatureLabel,
                  { marginTop: 2 },
                ]}
              >
                {formatDate(laporan.approvedAt)}
              </Text>
            )}
          </View>
        </View>

        {/* ─── FOOTER ─── */}
        <Text style={styles.footer}>
          Dokumen ini digenerate secara otomatis oleh InspecPro v2.0 pada{" "}
          {formatDateTime(new Date().toISOString())} WIB | © {new Date().getFullYear()}{" "}
          InspecPro. All rights reserved.
        </Text>
      </Page>
    </Document>
  );
};
