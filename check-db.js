const { PrismaClient } = require('@prisma/client');

async function main() {
  const prisma = new PrismaClient();
  
  try {
    console.log('🔍 Checking database contents...\n');
    
    const peralatanCount = await prisma.peralatan.count();
    console.log(`📊 Total Peralatan: ${peralatanCount}`);
    
    const peralatan = await prisma.peralatan.findMany();
    console.log('\n📋 Peralatan List:');
    peralatan.forEach(p => {
      console.log(`  - ID: ${p.id}, Kode: ${p.kodeId}, Nama: ${p.nama}, Status: ${p.status}`);
    });
    
    const lokasiCount = await prisma.lokasi.count();
    console.log(`\n📍 Total Lokasi: ${lokasiCount}`);
    
    const teknisiCount = await prisma.teknisi.count();
    console.log(`👤 Total Teknisi: ${teknisiCount}`);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();
