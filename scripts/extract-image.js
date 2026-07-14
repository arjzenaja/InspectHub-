const { PrismaClient } = require('../generated/prisma');
const fs = require('fs');
const path = require('path');

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
    if (urls.length === 0) {
      console.log('No photos found in RPT-2026-002');
      return;
    }
    const firstUrl = urls[0];
    const match = /^data:(image\/\w+);base64,(.+)$/.exec(firstUrl);
    if (!match) {
      console.log('First photo is not a base64 data URL');
      return;
    }
    const base64Data = match[2];
    const buffer = Buffer.from(base64Data, 'base64');
    const outputPath = path.join(__dirname, '..', 'extracted_photo.jpg');
    fs.writeFileSync(outputPath, buffer);
    console.log(`Saved first photo to ${outputPath}`);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
