const { PrismaPg } = require('@prisma/adapter-pg');
try {
  const adapter = new PrismaPg({ connectionString: 'postgres://user:pass@localhost/db' });
  console.log('PrismaPg type:', typeof PrismaPg);
  console.log('adapter constructor name:', adapter.constructor.name);
  console.log('adapter keys:', Object.keys(adapter));
  console.log('adapter prototype keys:', Object.getOwnPropertyNames(Object.getPrototypeOf(adapter)));
  console.log('has transactionContext:', typeof adapter.transactionContext);
  console.log('has queryRaw:', typeof adapter.queryRaw);
  console.log('has executeRaw:', typeof adapter.executeRaw);
  console.log('has getConnectionInfo:', typeof adapter.getConnectionInfo);
  console.log('adapterName:', adapter.adapterName);
  console.log('provider:', adapter.provider);
} catch (e) {
  console.error('ERROR', e);
  process.exit(1);
}
