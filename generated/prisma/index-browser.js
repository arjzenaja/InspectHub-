
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
