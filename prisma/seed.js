const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const prisma = new PrismaClient();

async function main() {
  console.log("Cleaning database...");
  await prisma.laporan.deleteMany({});
  await prisma.jadwal.deleteMany({});
  await prisma.peralatan.deleteMany({});
  await prisma.lokasi.deleteMany({});
  await prisma.teknisi.deleteMany({});
  await prisma.jenisPeralatan.deleteMany({});
  await prisma.user.deleteMany({});

  console.log("Seeding Locations...");
  const lokasi1 = await prisma.lokasi.create({
    data: {
      kode: "LOK-001",
      nama: "Gudang Utama",
      kota: "Jakarta",
      zona: "Area A",
      deskripsi: "Gudang penyimpanan utama",
      lat: -6.2088,
      lng: 106.8456,
    },
  });

  const lokasi2 = await prisma.lokasi.create({
    data: {
      kode: "LOK-002",
      nama: "Kantor Cabang",
      kota: "Bandung",
      zona: "Area B",
      deskripsi: "Kantor cabang di Bandung",
      lat: -6.9175,
      lng: 107.6141,
    },
  });

  const lokasi3 = await prisma.lokasi.create({
    data: {
      kode: "LOK-003",
      nama: "Pabrik Produksi",
      kota: "Bekasi",
      zona: "Area C",
      deskripsi: "Pabrik utama produksi",
      lat: -6.2349,
      lng: 106.9896,
    },
  });

  console.log("Seeding Jenis Peralatan...");
  const jenisPearlatan1 = await prisma.jenisPeralatan.create({
    data: {
      nama: "Grounding",
      deskripsi: "Sistem pembumian",
    },
  });

  const jenisPearlatan2 = await prisma.jenisPeralatan.create({
    data: {
      nama: "Panel",
      deskripsi: "Panel listrik",
    },
  });

  const jenisPearlatan3 = await prisma.jenisPeralatan.create({
    data: {
      nama: "Transformer",
      deskripsi: "Trafo distribusi",
    },
  });

  console.log("Seeding Peralatan...");
  const peralatan1 = await prisma.peralatan.create({
    data: {
      id: "GROUNDING-G001",
      kodeId: "G001",
      nama: "Grounding A",
      jenis: "Grounding",
      lokasi: "Gudang Utama",
      lokasiId: lokasi1.id,
      noRegister: "REG-0001",
      fotoUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
      kapasitas: "100A",
      tinggiDimensi: "10m",
      jenisKabel: "Tembaga",
      masaBerlaku: new Date("2027-12-31"),
      status: "aktif",
    },
  });

  const peralatan2 = await prisma.peralatan.create({
    data: {
      id: "PANEL-P001",
      kodeId: "P001",
      nama: "Panel Listrik Utama",
      jenis: "Panel",
      lokasi: "Kantor Cabang",
      lokasiId: lokasi2.id,
      noRegister: "REG-0002",
      fotoUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80",
      kapasitas: "200A",
      tinggiDimensi: "2m x 1.5m",
      jenisKabel: "Tembaga",
      masaBerlaku: new Date("2027-12-31"),
      status: "aktif",
    },
  });

  const peralatan3 = await prisma.peralatan.create({
    data: {
      id: "TRANSFORMER-T001",
      kodeId: "T001",
      nama: "Transformer Distribusi",
      jenis: "Transformer",
      lokasi: "Pabrik Produksi",
      lokasiId: lokasi3.id,
      noRegister: "REG-0003",
      fotoUrl: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=400&q=80",
      kapasitas: "500kVA",
      tinggiDimensi: "3m x 2m",
      jenisKabel: "Tembaga",
      masaBerlaku: new Date("2027-12-31"),
      status: "aktif",
    },
  });

  const peralatan4 = await prisma.peralatan.create({
    data: {
      id: "GROUNDING-G002",
      kodeId: "G002",
      nama: "Grounding B",
      jenis: "Grounding",
      lokasi: "Gudang Utama",
      lokasiId: lokasi1.id,
      noRegister: "REG-0004",
      fotoUrl: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80",
      kapasitas: "150A",
      tinggiDimensi: "12m",
      jenisKabel: "Tembaga",
      masaBerlaku: new Date("2027-12-31"),
      status: "aktif",
    },
  });

  console.log("Seeding Users...");
  const adminUser = await prisma.user.create({
    data: {
      name: "Admin Utama",
      email: "admin@inspecpro.com",
      password: await bcrypt.hash("Admin@123", 12),
      role: "admin",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80",
      isActive: true,
    },
  });

  const managerUser = await prisma.user.create({
    data: {
      name: "Budi Santoso",
      email: "manager@inspecpro.com",
      password: await bcrypt.hash("Manager@123", 12),
      role: "manager",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      isActive: true,
    },
  });

  const teknisi1User = await prisma.user.create({
    data: {
      name: "Bambang Prakoso",
      email: "bambang@inspecpro.com",
      password: await bcrypt.hash("Teknisi@123", 12),
      role: "teknisi",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      isActive: true,
    },
  });

  const teknisi1 = await prisma.teknisi.create({
    data: {
      userId: teknisi1User.id,
      nama: "Bambang Prakoso",
      idKaryawan: "TK-001",
      email: "bambang@inspecpro.com",
      noHp: "08123456789",
      divisi: "transmisi",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80",
      status: "aktif",
      rating: 4.5,
    },
  });

  const teknisi2User = await prisma.user.create({
    data: {
      name: "Siti Aminah",
      email: "siti@inspecpro.com",
      password: await bcrypt.hash("Teknisi@123", 12),
      role: "teknisi",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      isActive: true,
    },
  });

  const teknisi2 = await prisma.teknisi.create({
    data: {
      userId: teknisi2User.id,
      nama: "Siti Aminah",
      idKaryawan: "TK-002",
      email: "siti@inspecpro.com",
      noHp: "08129876543",
      divisi: "distribusi",
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
      status: "aktif",
      rating: 4.2,
    },
  });

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
