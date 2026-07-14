-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'teknisi',
    "avatarUrl" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "refreshToken" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peralatan" (
    "id" TEXT NOT NULL,
    "kodeId" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "jenis" TEXT NOT NULL,
    "lokasi" TEXT NOT NULL,
    "noRegister" TEXT,
    "fotoUrl" TEXT,
    "kapasitas" TEXT,
    "tinggiDimensi" TEXT,
    "jenisKabel" TEXT,
    "masaBerlaku" TIMESTAMP(3),
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "status" TEXT NOT NULL DEFAULT 'aktif',
    "qrCodeUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lokasiId" TEXT,

    CONSTRAINT "Peralatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JenisPeralatan" (
    "id" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JenisPeralatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Teknisi" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "nama" TEXT NOT NULL,
    "idKaryawan" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "noHp" TEXT,
    "divisi" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "status" TEXT NOT NULL DEFAULT 'aktif',
    "totalInspeksi" INTEGER NOT NULL DEFAULT 0,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Teknisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lokasi" (
    "id" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "kota" TEXT NOT NULL,
    "provinsi" TEXT,
    "zona" TEXT,
    "area" TEXT,
    "deskripsi" TEXT,
    "lat" DOUBLE PRECISION,
    "lng" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lokasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jadwal" (
    "id" TEXT NOT NULL,
    "kodeJadwal" TEXT NOT NULL,
    "peralatanId" TEXT NOT NULL,
    "teknisiId" TEXT NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "waktuMulai" TEXT NOT NULL,
    "waktuSelesai" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "catatan" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jadwal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Laporan" (
    "id" TEXT NOT NULL,
    "kodeId" TEXT NOT NULL,
    "jadwalId" TEXT,
    "peralatanId" TEXT NOT NULL,
    "teknisiId" TEXT NOT NULL,
    "checklist" TEXT NOT NULL DEFAULT '{}',
    "pengukuran" TEXT,
    "catatan" TEXT,
    "fotoUrls" TEXT NOT NULL DEFAULT '[]',
    "kesimpulan" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending_approval',
    "approvalNote" TEXT,
    "approvedBy" TEXT,
    "approvedAt" TIMESTAMP(3),
    "revisiCount" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Laporan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaporanTimeline" (
    "id" TEXT NOT NULL,
    "laporanId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LaporanTimeline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifikasi" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "link" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notifikasi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Peralatan_kodeId_key" ON "Peralatan"("kodeId");

-- CreateIndex
CREATE UNIQUE INDEX "JenisPeralatan_nama_key" ON "JenisPeralatan"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "Teknisi_userId_key" ON "Teknisi"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Teknisi_idKaryawan_key" ON "Teknisi"("idKaryawan");

-- CreateIndex
CREATE UNIQUE INDEX "Teknisi_email_key" ON "Teknisi"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Lokasi_kode_key" ON "Lokasi"("kode");

-- CreateIndex
CREATE UNIQUE INDEX "Jadwal_kodeJadwal_key" ON "Jadwal"("kodeJadwal");

-- CreateIndex
CREATE UNIQUE INDEX "Laporan_kodeId_key" ON "Laporan"("kodeId");

-- CreateIndex
CREATE UNIQUE INDEX "Laporan_jadwalId_key" ON "Laporan"("jadwalId");

-- AddForeignKey
ALTER TABLE "Peralatan" ADD CONSTRAINT "Peralatan_lokasiId_fkey" FOREIGN KEY ("lokasiId") REFERENCES "Lokasi"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teknisi" ADD CONSTRAINT "Teknisi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jadwal" ADD CONSTRAINT "Jadwal_peralatanId_fkey" FOREIGN KEY ("peralatanId") REFERENCES "Peralatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Jadwal" ADD CONSTRAINT "Jadwal_teknisiId_fkey" FOREIGN KEY ("teknisiId") REFERENCES "Teknisi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_jadwalId_fkey" FOREIGN KEY ("jadwalId") REFERENCES "Jadwal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_peralatanId_fkey" FOREIGN KEY ("peralatanId") REFERENCES "Peralatan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Laporan" ADD CONSTRAINT "Laporan_teknisiId_fkey" FOREIGN KEY ("teknisiId") REFERENCES "Teknisi"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaporanTimeline" ADD CONSTRAINT "LaporanTimeline_laporanId_fkey" FOREIGN KEY ("laporanId") REFERENCES "Laporan"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifikasi" ADD CONSTRAINT "Notifikasi_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
