const { PrismaClient } = require('../generated/prisma');

async function main() {
  const prisma = new PrismaClient();
  try {
    const l = await prisma.laporan.findFirst({
      where: { kodeId: 'RPT-2026-002' }
    });
    if (!l) {
      console.log('RPT-2026-002 not found');
      return;
    }
    const urls = JSON.parse(l.fotoUrls || '[]');
    console.log(`Number of urls: ${urls.length}`);
    for (let i = 0; i < urls.length; i++) {
      console.log(`Photo ${i} length: ${urls[i].length}`);
    }
    const unique = new Set(urls);
    console.log(`Unique urls count: ${unique.size}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
