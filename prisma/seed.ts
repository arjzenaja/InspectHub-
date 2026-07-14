import "dotenv/config";
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const existing = await prisma.lokasi.count();
  if (existing > 0) {
    console.log("Seed data already exists. Skipping.");
    return;
  }

  const lokasi = await prisma.lokasi.create({
    data: {
      kode: "LOC-001",
      nama: "Kantor Pusat",
      kota: "Jakarta",
      provinsi: "DKI Jakarta",
      zona: "Pusat",
      area: "Head Office",
      deskripsi: "Starter location for Prisma Postgres setup",
    },
  });

  const jenisPeralatan = await prisma.jenisPeralatan.create({
    data: {
      nama: "Transformator",
      deskripsi: "Starter equipment type",
    },
  });

  await prisma.peralatan.create({
    data: {
      kodeId: "EQ-001",
      nama: "Trafo Utama",
      jenis: jenisPeralatan.nama,
      lokasi: lokasi.nama,
      status: "aktif",
      lokasiRelation: {
        connect: { id: lokasi.id },
      },
    },
  });

  console.log("Seed completed successfully.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
