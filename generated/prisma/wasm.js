
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  avatarUrl: 'avatarUrl',
  isActive: 'isActive',
  refreshToken: 'refreshToken',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.PeralatanScalarFieldEnum = {
  id: 'id',
  kodeId: 'kodeId',
  nama: 'nama',
  jenis: 'jenis',
  lokasi: 'lokasi',
  noRegister: 'noRegister',
  fotoUrl: 'fotoUrl',
  kapasitas: 'kapasitas',
  tinggiDimensi: 'tinggiDimensi',
  jenisKabel: 'jenisKabel',
  masaBerlaku: 'masaBerlaku',
  lat: 'lat',
  lng: 'lng',
  status: 'status',
  qrCodeUrl: 'qrCodeUrl',
  createdAt: 'createdAt',
  lokasiId: 'lokasiId'
};

exports.Prisma.JenisPeralatanScalarFieldEnum = {
  id: 'id',
  nama: 'nama',
  deskripsi: 'deskripsi',
  createdAt: 'createdAt'
};

exports.Prisma.TeknisiScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  nama: 'nama',
  idKaryawan: 'idKaryawan',
  email: 'email',
  noHp: 'noHp',
  divisi: 'divisi',
  avatarUrl: 'avatarUrl',
  status: 'status',
  totalInspeksi: 'totalInspeksi',
  rating: 'rating',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LokasiScalarFieldEnum = {
  id: 'id',
  kode: 'kode',
  nama: 'nama',
  kota: 'kota',
  provinsi: 'provinsi',
  zona: 'zona',
  area: 'area',
  deskripsi: 'deskripsi',
  lat: 'lat',
  lng: 'lng',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.JadwalScalarFieldEnum = {
  id: 'id',
  kodeJadwal: 'kodeJadwal',
  peralatanId: 'peralatanId',
  teknisiId: 'teknisiId',
  tanggal: 'tanggal',
  waktuMulai: 'waktuMulai',
  waktuSelesai: 'waktuSelesai',
  status: 'status',
  catatan: 'catatan',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LaporanScalarFieldEnum = {
  id: 'id',
  kodeId: 'kodeId',
  jadwalId: 'jadwalId',
  peralatanId: 'peralatanId',
  teknisiId: 'teknisiId',
  checklist: 'checklist',
  pengukuran: 'pengukuran',
  catatan: 'catatan',
  fotoUrls: 'fotoUrls',
  kesimpulan: 'kesimpulan',
  status: 'status',
  approvalNote: 'approvalNote',
  approvedBy: 'approvedBy',
  approvedAt: 'approvedAt',
  revisiCount: 'revisiCount',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.LaporanTimelineScalarFieldEnum = {
  id: 'id',
  laporanId: 'laporanId',
  type: 'type',
  description: 'description',
  createdBy: 'createdBy',
  createdAt: 'createdAt'
};

exports.Prisma.NotifikasiScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  type: 'type',
  title: 'title',
  message: 'message',
  link: 'link',
  isRead: 'isRead',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  User: 'User',
  Peralatan: 'Peralatan',
  JenisPeralatan: 'JenisPeralatan',
  Teknisi: 'Teknisi',
  Lokasi: 'Lokasi',
  Jadwal: 'Jadwal',
  Laporan: 'Laporan',
  LaporanTimeline: 'LaporanTimeline',
  Notifikasi: 'Notifikasi'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "D:\\bahan gabut\\Mas Embun\\Code\\Master Data\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "D:\\bahan gabut\\Mas Embun\\Code\\Master Data\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../generated/prisma\"\n  engineType      = \"library\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id           String   @id @default(cuid())\n  name         String\n  email        String   @unique\n  password     String\n  role         String   @default(\"teknisi\")\n  avatarUrl    String?\n  isActive     Boolean  @default(true)\n  refreshToken String?\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n\n  teknisi    Teknisi?\n  notifikasi Notifikasi[]\n}\n\nmodel Peralatan {\n  id             String    @id @default(cuid())\n  kodeId         String    @unique\n  nama           String\n  jenis          String\n  lokasi         String\n  noRegister     String?\n  fotoUrl        String?\n  kapasitas      String?\n  tinggiDimensi  String?\n  jenisKabel     String?\n  masaBerlaku    DateTime?\n  // Latitude and Longitude GPS coordinates (optional)\n  lat            Float?\n  lng            Float?\n  status         String    @default(\"aktif\")\n  qrCodeUrl      String?\n  createdAt      DateTime  @default(now())\n  jadwal         Jadwal[]\n  laporan        Laporan[]\n  lokasiId       String?\n  lokasiRelation Lokasi?   @relation(fields: [lokasiId], references: [id], onDelete: SetNull)\n}\n\nmodel JenisPeralatan {\n  id        String   @id @default(cuid())\n  nama      String   @unique\n  deskripsi String?\n  createdAt DateTime @default(now())\n}\n\nmodel Teknisi {\n  id            String   @id @default(cuid())\n  userId        String?  @unique\n  user          User?    @relation(fields: [userId], references: [id], onDelete: SetNull)\n  nama          String\n  idKaryawan    String   @unique\n  email         String   @unique\n  noHp          String?\n  divisi        String\n  avatarUrl     String?\n  status        String   @default(\"aktif\")\n  totalInspeksi Int      @default(0)\n  rating        Float    @default(0)\n  createdAt     DateTime @default(now())\n  updatedAt     DateTime @updatedAt\n\n  jadwal  Jadwal[]\n  laporan Laporan[]\n}\n\nmodel Lokasi {\n  id        String      @id @default(cuid())\n  kode      String      @unique\n  nama      String\n  kota      String\n  provinsi  String?\n  zona      String?\n  area      String?\n  deskripsi String?\n  lat       Float?\n  lng       Float?\n  createdAt DateTime    @default(now())\n  updatedAt DateTime    @default(now()) @updatedAt\n  peralatan Peralatan[]\n}\n\nmodel Jadwal {\n  id           String    @id @default(cuid())\n  kodeJadwal   String    @unique\n  peralatanId  String\n  peralatan    Peralatan @relation(fields: [peralatanId], references: [id], onDelete: Cascade)\n  teknisiId    String\n  teknisi      Teknisi   @relation(fields: [teknisiId], references: [id], onDelete: Cascade)\n  tanggal      DateTime\n  waktuMulai   String\n  waktuSelesai String\n  status       String    @default(\"pending\")\n  catatan      String?\n  createdAt    DateTime  @default(now())\n  updatedAt    DateTime  @updatedAt\n  laporan      Laporan?\n}\n\nmodel Laporan {\n  id          String    @id @default(cuid())\n  kodeId      String    @unique\n  jadwalId    String?   @unique\n  jadwal      Jadwal?   @relation(fields: [jadwalId], references: [id], onDelete: SetNull)\n  peralatanId String\n  peralatan   Peralatan @relation(fields: [peralatanId], references: [id], onDelete: Cascade)\n  teknisiId   String\n  teknisi     Teknisi   @relation(fields: [teknisiId], references: [id], onDelete: Cascade)\n  checklist   String    @default(\"{}\")\n  pengukuran  String?\n  catatan     String?\n  fotoUrls    String    @default(\"[]\")\n  kesimpulan  String?\n\n  status       String    @default(\"pending_approval\")\n  approvalNote String?\n  approvedBy   String?\n  approvedAt   DateTime?\n  revisiCount  Int       @default(0)\n\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n\n  timeline LaporanTimeline[]\n}\n\nmodel LaporanTimeline {\n  id          String   @id @default(cuid())\n  laporanId   String\n  laporan     Laporan  @relation(fields: [laporanId], references: [id], onDelete: Cascade)\n  type        String\n  description String\n  createdBy   String?\n  createdAt   DateTime @default(now())\n}\n\nmodel Notifikasi {\n  id        String   @id @default(cuid())\n  userId    String\n  user      User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n  type      String\n  title     String\n  message   String\n  link      String?\n  isRead    Boolean  @default(false)\n  createdAt DateTime @default(now())\n}\n",
  "inlineSchemaHash": "884e084a546a4cacb6814027bb8225d0de6b2158f6723435f14e8b451362c7af",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"name\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isActive\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"teknisi\",\"kind\":\"object\",\"type\":\"Teknisi\",\"relationName\":\"TeknisiToUser\"},{\"name\":\"notifikasi\",\"kind\":\"object\",\"type\":\"Notifikasi\",\"relationName\":\"NotifikasiToUser\"}],\"dbName\":null},\"Peralatan\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kodeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nama\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jenis\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lokasi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"noRegister\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fotoUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kapasitas\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"tinggiDimensi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jenisKabel\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"masaBerlaku\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"lat\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"lng\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"qrCodeUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"jadwal\",\"kind\":\"object\",\"type\":\"Jadwal\",\"relationName\":\"JadwalToPeralatan\"},{\"name\":\"laporan\",\"kind\":\"object\",\"type\":\"Laporan\",\"relationName\":\"LaporanToPeralatan\"},{\"name\":\"lokasiId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lokasiRelation\",\"kind\":\"object\",\"type\":\"Lokasi\",\"relationName\":\"LokasiToPeralatan\"}],\"dbName\":null},\"JenisPeralatan\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nama\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"deskripsi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Teknisi\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"TeknisiToUser\"},{\"name\":\"nama\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"idKaryawan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"noHp\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"divisi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"avatarUrl\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"totalInspeksi\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"rating\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"jadwal\",\"kind\":\"object\",\"type\":\"Jadwal\",\"relationName\":\"JadwalToTeknisi\"},{\"name\":\"laporan\",\"kind\":\"object\",\"type\":\"Laporan\",\"relationName\":\"LaporanToTeknisi\"}],\"dbName\":null},\"Lokasi\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kode\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"nama\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kota\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"provinsi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"zona\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"area\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"deskripsi\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lat\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"lng\",\"kind\":\"scalar\",\"type\":\"Float\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"peralatan\",\"kind\":\"object\",\"type\":\"Peralatan\",\"relationName\":\"LokasiToPeralatan\"}],\"dbName\":null},\"Jadwal\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kodeJadwal\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"peralatanId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"peralatan\",\"kind\":\"object\",\"type\":\"Peralatan\",\"relationName\":\"JadwalToPeralatan\"},{\"name\":\"teknisiId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"teknisi\",\"kind\":\"object\",\"type\":\"Teknisi\",\"relationName\":\"JadwalToTeknisi\"},{\"name\":\"tanggal\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"waktuMulai\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"waktuSelesai\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"catatan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"laporan\",\"kind\":\"object\",\"type\":\"Laporan\",\"relationName\":\"JadwalToLaporan\"}],\"dbName\":null},\"Laporan\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kodeId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jadwalId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"jadwal\",\"kind\":\"object\",\"type\":\"Jadwal\",\"relationName\":\"JadwalToLaporan\"},{\"name\":\"peralatanId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"peralatan\",\"kind\":\"object\",\"type\":\"Peralatan\",\"relationName\":\"LaporanToPeralatan\"},{\"name\":\"teknisiId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"teknisi\",\"kind\":\"object\",\"type\":\"Teknisi\",\"relationName\":\"LaporanToTeknisi\"},{\"name\":\"checklist\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pengukuran\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"catatan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fotoUrls\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"kesimpulan\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"approvalNote\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"approvedBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"approvedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"revisiCount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"timeline\",\"kind\":\"object\",\"type\":\"LaporanTimeline\",\"relationName\":\"LaporanToLaporanTimeline\"}],\"dbName\":null},\"LaporanTimeline\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"laporanId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"laporan\",\"kind\":\"object\",\"type\":\"Laporan\",\"relationName\":\"LaporanToLaporanTimeline\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"description\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdBy\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Notifikasi\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"NotifikasiToUser\"},{\"name\":\"type\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"link\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"isRead\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

