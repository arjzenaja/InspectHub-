import "dotenv/config";
import { prisma } from "../src/lib/prisma";

async function main() {
  const count = await prisma.lokasi.count();
  console.log(`✅ Connected. Lokasi count: ${count}`);
}

main()
  .catch((error) => {
    console.error("❌ Prisma verification failed:");
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
