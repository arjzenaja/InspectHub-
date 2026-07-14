"use client";

import { useEffect, useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { MapPin, Search, Filter, Building2, Eye, Loader2, LocateFixed, X, Plus, Edit3, Trash2 } from "lucide-react";
import { toast } from "sonner";
import { PageHeader } from "@/components/layout/PageHeader";
import { PeralatanLokasiModal } from "@/components/lokasi/PeralatanLokasiModal";
import { FitBounds } from "@/components/lokasi/FitBounds";
import ConfirmDeleteDialog from "@/components/shared/ConfirmDeleteDialog";

const MapContainer = dynamic(() => import("react-leaflet").then(m => m.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then(m => m.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then(m => m.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then(m => m.Popup), { ssr: false });

interface Lokasi {
  id: string;
  kode: string;
  nama: string;
  kota: string;
  zona: string | null;
  deskripsi: string | null;
  lat: number | null;
  lng: number | null;
  jumlahPeralatan: number;
}

const ZONA_COLORS: Record<string, string> = {
  "Zona A": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Zona B": "bg-blue-50 text-blue-700 border-blue-200",
  "Zona C": "bg-amber-50 text-amber-700 border-amber-200",
  "Zona D": "bg-purple-50 text-purple-700 border-purple-200",
};



const ZONA_OPTIONS = ["Zona A", "Zona B", "Zona C", "Zona D"];

interface FormState {
  kode: string;
  nama: string;
  kota: string;
  zona: string;
  deskripsi: string;
  lat: string;
  lng: string;
}

const EMPTY_FORM: FormState = { kode: "", nama: "", kota: "", zona: "", deskripsi: "", lat: "", lng: "" };

export default function LokasiPage() {
  const [lokasiList, setLokasiList] = useState<Lokasi[]>([]);
  const [filtered, setFiltered] = useState<Lokasi[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedZona, setSelectedZona] = useState("all");
  const [zonaList, setZonaList] = useState<string[]>([]);
  const [selectedLokasi, setSelectedLokasi] = useState<Lokasi | null>(null);
  const [mapReady, setMapReady] = useState(false);
  const [peralatanCoords, setPeralatanCoords] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [isSaving, setIsSaving] = useState(false);
  // Peralatan modal
  const [peralatanModalOpen, setPeralatanModalOpen] = useState(false);
  const [peralatanLokasiId, setPeralatanLokasiId] = useState<string | null>(null);
  const [peralatanLokasiNama, setPeralatanLokasiNama] = useState("");

  // Edit & Delete states
  const [editingLokasiId, setEditingLokasiId] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [lokasiToDelete, setLokasiToDelete] = useState<string | null>(null);

  const zonas = ["all", ...zonaList];

  const fetchLokasi = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/lokasi");
      if (!res.ok) throw new Error();
      const payload = await res.json();
      const data: Lokasi[] = payload?.data?.lokasi ?? payload ?? [];
      setLokasiList(data);
      setFiltered(data);
      setZonaList(payload?.data?.zonaList ?? []);
      if (data.length > 0) setSelectedLokasi(data[0]);
    } catch {
      toast.error("Gagal memuat data lokasi");
    } finally {
      setIsLoading(false);
      setMapReady(true);
    }
  }, []);

  useEffect(() => { fetchLokasi(); }, [fetchLokasi]);

  useEffect(() => {
    // fetch peralatan that have coordinates for markers
    fetch('/api/peralatan?hasCoords=true')
      .then(r => r.json())
      .then(data => {
        // data could be paginated or raw array
        const list = Array.isArray(data) ? data : data?.data ?? [];
        setPeralatanCoords(list.filter((p: any) => p.lat && p.lng));
      })
      .catch(() => setPeralatanCoords([]));
  }, []);

  useEffect(() => {
    let result = lokasiList;
    if (search.trim()) {
      const normalized = search.toLowerCase();
      result = result.filter(l =>
        l.nama.toLowerCase().includes(normalized) ||
        l.kota.toLowerCase().includes(normalized) ||
        l.kode?.toLowerCase().includes(normalized) ||
        l.zona?.toLowerCase().includes(normalized)
      );
    }
    if (selectedZona !== "all") result = result.filter(l => l.zona === selectedZona);
    setFiltered(result);

    if (!result.length) {
      setSelectedLokasi(null);
    } else if (!selectedLokasi || !result.some(l => l.id === selectedLokasi.id)) {
      setSelectedLokasi(result[0]);
    }
  }, [search, selectedZona, lokasiList]);

  useEffect(() => {
    setSelectedZona("all");
  }, [search]);

  function openModal() { 
    setEditingLokasiId(null);
    setForm(EMPTY_FORM); 
    setShowModal(true); 
  }
  
  function closeModal() { 
    setShowModal(false); 
    setEditingLokasiId(null);
    setForm(EMPTY_FORM); 
  }

  function handleEditLokasi(lokasi: Lokasi) {
    setEditingLokasiId(lokasi.id);
    setForm({
      kode: lokasi.kode,
      nama: lokasi.nama,
      kota: lokasi.kota,
      zona: lokasi.zona || "",
      deskripsi: lokasi.deskripsi || "",
      lat: lokasi.lat != null ? String(lokasi.lat) : "",
      lng: lokasi.lng != null ? String(lokasi.lng) : "",
    });
    setShowModal(true);
  }

  async function handleSimpan() {
    if (!form.kode.trim()) { toast.error("Kode Lokasi wajib diisi"); return; }
    if (!form.nama.trim()) { toast.error("Nama Lokasi wajib diisi"); return; }
    if (!form.kota.trim()) { toast.error("Kota wajib diisi"); return; }

    setIsSaving(true);
    try {
      const isEdit = !!editingLokasiId;
      const url = isEdit ? `/api/lokasi/${editingLokasiId}` : "/api/lokasi";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kode: form.kode.trim(),
          nama: form.nama.trim(),
          kota: form.kota.trim(),
          zona: form.zona || undefined,
          deskripsi: form.deskripsi.trim() || undefined,
          lat: form.lat ? parseFloat(form.lat) : undefined,
          lng: form.lng ? parseFloat(form.lng) : undefined,
        }),
      });
      if (res.status === 409) { toast.error("Kode lokasi sudah digunakan"); return; }
      if (!res.ok) throw new Error();
      toast.success(isEdit ? "Lokasi berhasil diubah!" : "Lokasi berhasil ditambahkan!");
      closeModal();
      await fetchLokasi();
    } catch {
      toast.error("Gagal menyimpan lokasi");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDeleteLokasi() {
    if (!lokasiToDelete) return;
    try {
      const res = await fetch(`/api/lokasi/${lokasiToDelete}`, {
        method: "DELETE",
      });
      if (res.ok) {
        toast.success("Lokasi berhasil dihapus");
        await fetchLokasi();
      } else {
        toast.error("Gagal menghapus lokasi");
      }
    } catch {
      toast.error("Gagal menghubungi server");
    } finally {
      setLokasiToDelete(null);
    }
  }

  return (
    <div className="space-y-5">
      {/* Page Header */}
      <PageHeader
        greeting="Hello, Admin"
        title="Lokasi & Substation"
        subtitle="Peta lokasi gardu & infrastruktur inspeksi aktif di seluruh wilayah operasi."
        action={
          <button
            id="btn-tambah-lokasi"
            onClick={openModal}
            className="px-4 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] text-white font-semibold text-sm rounded-xl flex items-center gap-2 transition-all shadow-sm cursor-pointer"
          >
            <MapPin size={16} strokeWidth={1.5} /> Tambah Lokasi
          </button>
        }
      />

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Lokasi", value: lokasiList.length, icon: MapPin, color: "text-[#DC2626] bg-red-50" },
          { label: "Gardu Aktif", value: lokasiList.length, icon: Building2, color: "text-blue-600 bg-blue-50" },
          { label: "Total Peralatan", value: lokasiList.reduce((s, l) => s + (l.jumlahPeralatan || 0), 0), icon: LocateFixed, color: "text-emerald-600 bg-emerald-50" },
          { label: "Zona Aktif", value: [...new Set(lokasiList.map(l => l.zona).filter(Boolean))].length, icon: Filter, color: "text-amber-600 bg-amber-50" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-white border border-[#E5E7EB] rounded-2xl p-4 shadow-sm">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center mb-2.5 ${color}`}>
              <Icon size={18} strokeWidth={1.5} />
            </div>
            <p className="text-2xl font-extrabold text-[#111827]">{isLoading ? "—" : value}</p>
            <p className="text-xs text-[#6B7280] font-medium">{label}</p>
          </div>
        ))}
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Sidebar List */}
        <div className="lg:col-span-1 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm flex flex-col overflow-hidden" style={{ maxHeight: "580px" }}>
          <div className="p-4 border-b border-[#E5E7EB] space-y-3 flex-shrink-0">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Cari nama lokasi, kota, kode, atau zona..."
                className="w-full pl-9 pr-4 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#111827] bg-[#F8FAFC] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1">
              {zonas.map(z => (
                <button
                  key={z}
                  onClick={() => setSelectedZona(z)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap border transition-all ${
                    selectedZona === z
                      ? "bg-[#DC2626] text-white border-[#DC2626]"
                      : "bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#DC2626] hover:text-[#DC2626]"
                  }`}
                >
                  {z === "all" ? "Semua" : z}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-[#F3F4F6]">
            {isLoading ? (
              <div className="flex items-center justify-center p-10">
                <Loader2 size={24} className="animate-spin text-[#DC2626]" />
              </div>
            ) : filtered.length === 0 ? (
              <div className="flex items-center justify-center p-10 text-sm text-[#6B7280]">Tidak ada lokasi ditemukan.</div>
            ) : (
              filtered.map(lokasi => (
                <button
                  key={lokasi.id}
                  onClick={() => setSelectedLokasi(lokasi)}
                  className={`w-full text-left px-4 py-3.5 hover:bg-neutral-50 transition-colors ${selectedLokasi?.id === lokasi.id ? "bg-red-50 border-l-2 border-[#DC2626]" : ""}`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5">
                      <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <MapPin size={14} className="text-[#DC2626]" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-[#111827] leading-tight">{lokasi.nama}</p>
                        <p className="text-xs text-[#6B7280]">{lokasi.kota}</p>
                        <p className="text-xs text-[#9CA3AF] font-mono">{lokasi.kode}</p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-bold text-[#DC2626]">{lokasi.jumlahPeralatan || 0}</span>
                      <p className="text-[10px] text-[#9CA3AF]">peralatan</p>
                    </div>
                  </div>
                  {lokasi.zona && (
                    <div className="mt-2 ml-10">
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${ZONA_COLORS[lokasi.zona] || "bg-neutral-50 text-neutral-600 border-neutral-200"}`}>
                        {lokasi.zona}
                      </span>
                    </div>
                  )}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Map */}
        <div className="lg:col-span-2 bg-white border border-[#E5E7EB] rounded-2xl shadow-sm overflow-hidden" style={{ minHeight: "580px" }}>
          {!mapReady || typeof window === "undefined" ? (
            <div className="flex items-center justify-center w-full h-full min-h-[580px]">
              <Loader2 size={32} className="animate-spin text-[#DC2626]" />
            </div>
          ) : (
            <div className="w-full h-[580px]">
              <MapContainer
                center={[selectedLokasi?.lat ?? -6.2, selectedLokasi?.lng ?? 106.8]}
                zoom={8}
                style={{ height: "100%", width: "100%" }}
                className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* Auto-fit bounds to show all markers */}
                <FitBounds 
                  locations={filtered.filter(lokasi => lokasi.lat != null && lokasi.lng != null)}
                />
                {filtered
                  .filter(lokasi => lokasi.lat != null && lokasi.lng != null)
                  .map(lokasi => (
                    <Marker
                      key={lokasi.id}
                      position={[lokasi.lat!, lokasi.lng!]}
                      eventHandlers={{
                        click: () => {
                          setSelectedLokasi(lokasi);
                          setPeralatanLokasiId(lokasi.id);
                          setPeralatanLokasiNama(lokasi.nama);
                        },
                      }}
                    >
                      <Popup>
                        <div className="font-sans text-sm space-y-3">
                          <div>
                            <p className="font-bold text-[#111827]">{lokasi.nama}</p>
                            <p className="text-[#6B7280]">{lokasi.kota}</p>
                            <p className="text-xs font-mono text-[#DC2626]">{lokasi.kode}</p>
                            <p className="text-xs text-[#374151]">{lokasi.jumlahPeralatan || 0} peralatan</p>
                            {lokasi.zona && <p className="text-xs text-[#374151]">Zona: {lokasi.zona}</p>}
                          </div>
                          <button
                            type="button"
                            onClick={(event) => {
                              event.stopPropagation();
                              setSelectedLokasi(lokasi);
                              setPeralatanLokasiId(lokasi.id);
                              setPeralatanLokasiNama(lokasi.nama);
                              setPeralatanModalOpen(true);
                            }}
                            className="w-full rounded-xl border border-[#E5E7EB] bg-white px-3 py-2 text-sm font-semibold text-[#111827] hover:bg-[#F8FAFC]"
                          >
                            Lihat Detail Perangkat
                          </button>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                {peralatanCoords.map(p => (
                  <Marker key={`p-${p.id}`} position={[p.lat, p.lng || p.lon || p.lng]}> 
                    <Popup>
                      <div className="font-sans text-sm">
                        <p className="font-bold text-[#111827]">{p.nama}</p>
                        <p className="text-[#6B7280]">{p.kodeId} — {p.jenis}</p>
                        <p className="text-xs text-[#9CA3AF]">{p.lokasi}</p>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}
        </div>
      </div>

      {/* Detail Card */}
      {selectedLokasi && (
        <div className="bg-white border border-[#E5E7EB] rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-[#111827]">Detail Lokasi: {selectedLokasi.nama}</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  setPeralatanLokasiId(selectedLokasi.id);
                  setPeralatanLokasiNama(selectedLokasi.nama);
                  setPeralatanModalOpen(true);
                }}
                className="flex items-center gap-1.5 text-xs text-[#DC2626] hover:underline font-semibold cursor-pointer"
              >
                <Eye size={14} /> Lihat Semua Peralatan
              </button>

              <button
                onClick={() => handleEditLokasi(selectedLokasi)}
                className="flex items-center gap-1.5 text-xs text-amber-600 hover:underline font-semibold cursor-pointer"
              >
                <Edit3 size={14} /> Edit Lokasi
              </button>

              <button
                onClick={() => {
                  setLokasiToDelete(selectedLokasi.id);
                  setDeleteDialogOpen(true);
                }}
                className="flex items-center gap-1.5 text-xs text-red-600 hover:underline font-semibold cursor-pointer"
              >
                <Trash2 size={14} /> Hapus Lokasi
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { label: "Kode Lokasi", value: selectedLokasi.kode },
              { label: "Kota", value: selectedLokasi.kota },
              { label: "Zona", value: selectedLokasi.zona || "—" },
              { label: "Deskripsi", value: selectedLokasi.deskripsi || "—" },
              { label: "Total Peralatan", value: `${selectedLokasi.jumlahPeralatan || 0} unit` },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-xs text-[#9CA3AF] font-semibold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-sm font-bold text-[#111827]">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-[#9CA3AF] font-semibold uppercase tracking-wider mb-1">Koordinat</p>
              <p className="text-sm font-mono text-[#374151]">
                {selectedLokasi.lat != null ? selectedLokasi.lat.toFixed(6) : "—"}, {selectedLokasi.lng != null ? selectedLokasi.lng.toFixed(6) : "—"}
              </p>
            </div>
            {selectedLokasi.zona && (
              <div>
                <p className="text-xs text-[#9CA3AF] font-semibold uppercase tracking-wider mb-1">Zona</p>
                <span className={`inline-block text-sm font-bold px-2.5 py-0.5 rounded border ${ZONA_COLORS[selectedLokasi.zona] || ""}`}>
                  {selectedLokasi.zona}
                </span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ===== Modal Tambah Lokasi ===== */}
      {showModal && (
        <div
          id="modal-tambah-lokasi"
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          onClick={e => { if (e.target === e.currentTarget) closeModal(); }}
        >
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center">
                  {editingLokasiId ? <Edit3 size={16} className="text-[#DC2626]" /> : <Plus size={16} className="text-[#DC2626]" />}
                </div>
                <h3 className="text-base font-bold text-[#111827]">{editingLokasiId ? "Edit Lokasi" : "Tambah Lokasi Baru"}</h3>
              </div>
              <button
                id="btn-close-modal-lokasi"
                onClick={closeModal}
                className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-[#F3F4F6] text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="px-6 py-5 space-y-4">
              {/* Kode Lokasi */}
              <div>
                <label htmlFor="input-kode-lokasi" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Kode Lokasi <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  id="input-kode-lokasi"
                  type="text"
                  value={form.kode}
                  onChange={e => setForm(f => ({ ...f, kode: e.target.value }))}
                  placeholder="Contoh: LOC-005"
                  className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all"
                />
              </div>

              {/* Nama Lokasi */}
              <div>
                <label htmlFor="input-nama-lokasi" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Nama Lokasi <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  id="input-nama-lokasi"
                  type="text"
                  value={form.nama}
                  onChange={e => setForm(f => ({ ...f, nama: e.target.value }))}
                  placeholder="Contoh: Substation Beta"
                  className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all"
                />
              </div>

              {/* Kota */}
              <div>
                <label htmlFor="input-kota-lokasi" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Kota <span className="text-[#DC2626]">*</span>
                </label>
                <input
                  id="input-kota-lokasi"
                  type="text"
                  value={form.kota}
                  onChange={e => setForm(f => ({ ...f, kota: e.target.value }))}
                  placeholder="Contoh: Jakarta"
                  className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all"
                />
              </div>

              {/* Koordinat Lat/Lng */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="input-lat-lokasi" className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Latitude
                  </label>
                  <input
                    id="input-lat-lokasi"
                    type="number"
                    step="any"
                    value={form.lat}
                    onChange={e => setForm(f => ({ ...f, lat: e.target.value }))}
                    placeholder="Contoh: -6.2088"
                    className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="input-lng-lokasi" className="block text-sm font-semibold text-[#374151] mb-1.5">
                    Longitude
                  </label>
                  <input
                    id="input-lng-lokasi"
                    type="number"
                    step="any"
                    value={form.lng}
                    onChange={e => setForm(f => ({ ...f, lng: e.target.value }))}
                    placeholder="Contoh: 106.8456"
                    className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all"
                  />
                </div>
              </div>



              {/* Zona / Area */}
              <div>
                <label htmlFor="select-zona-lokasi" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Zona / Area
                </label>
                <div className="relative">
                  <input
                    id="input-zona-lokasi"
                    type="text"
                    list="zona-list"
                    value={form.zona}
                    onChange={e => setForm(f => ({ ...f, zona: e.target.value }))}
                    placeholder="Contoh: Zone 1 - North Wing"
                    className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all"
                  />
                  <datalist id="zona-list">
                    {ZONA_OPTIONS.map(z => <option key={z} value={z} />)}
                  </datalist>
                </div>
              </div>

              {/* Deskripsi */}
              <div>
                <label htmlFor="textarea-deskripsi-lokasi" className="block text-sm font-semibold text-[#374151] mb-1.5">
                  Deskripsi Tambahan
                </label>
                <textarea
                  id="textarea-deskripsi-lokasi"
                  value={form.deskripsi}
                  onChange={e => setForm(f => ({ ...f, deskripsi: e.target.value }))}
                  rows={3}
                  placeholder="Masukkan detail tambahan lokasi..."
                  className="w-full px-3.5 py-2.5 border border-[#E5E7EB] rounded-xl text-sm text-[#111827] placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] transition-all resize-none"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-[#E5E7EB] flex gap-3">
              <button
                id="btn-simpan-lokasi"
                onClick={handleSimpan}
                disabled={isSaving}
                className="flex-1 py-2.5 bg-[#DC2626] hover:bg-[#B91C1C] disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold text-sm rounded-xl flex items-center justify-center gap-2 transition-all"
              >
                {isSaving
                  ? <><Loader2 size={15} className="animate-spin" /> Menyimpan...</>
                  : <>{editingLokasiId ? "Simpan Perubahan" : "Simpan"}</>
                }
              </button>
              <button
                id="btn-batal-lokasi"
                onClick={closeModal}
                disabled={isSaving}
                className="flex-1 py-2.5 border border-[#E5E7EB] text-[#374151] hover:bg-[#F9FAFB] font-semibold text-sm rounded-xl transition-all disabled:opacity-60"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Peralatan Lokasi Modal */}
      <PeralatanLokasiModal
        isOpen={peralatanModalOpen}
        onClose={() => setPeralatanModalOpen(false)}
        lokasiId={peralatanLokasiId}
        lokasiNama={peralatanLokasiNama}
      />

      {/* Confirm Delete Location Dialog */}
      <ConfirmDeleteDialog
        isOpen={deleteDialogOpen}
        onClose={() => {
          setDeleteDialogOpen(false);
          setLokasiToDelete(null);
        }}
        onConfirm={handleDeleteLokasi}
        title="Hapus Lokasi?"
        description="Apakah Anda yakin ingin menghapus data lokasi ini? Peralatan yang terhubung dengan lokasi ini akan kehilangan relasi lokasinya."
      />
    </div>
  );
}
