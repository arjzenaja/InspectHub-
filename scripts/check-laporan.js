const { PrismaClient } = require('../generated/prisma');

async function main() {
  const prisma = new PrismaClient();
  try {
    const total = await prisma.laporan.count();
    console.log(`Total reports in DB: ${total}`);
    const laporans = await prisma.laporan.findMany({
      orderBy: { createdAt: 'desc' }
    });
    for (const l of laporans) {
      let urls = [];
      try {
        urls = JSON.parse(l.fotoUrls || '[]');
      } catch (e) {
        urls = [l.fotoUrls];
      }
      console.log(`Laporan: ${l.kodeId} (${l.id}) | Photos: ${urls.length} | Status: ${l.status}`);
      urls.forEach((u, i) => {
        console.log(`  Photo ${i}: ${u.slice(0, 80)}...`);
      });
    }
  } catch (error) {
    console.error('Error querying db:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
