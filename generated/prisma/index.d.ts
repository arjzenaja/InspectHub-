
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Peralatan
 * 
 */
export type Peralatan = $Result.DefaultSelection<Prisma.$PeralatanPayload>
/**
 * Model JenisPeralatan
 * 
 */
export type JenisPeralatan = $Result.DefaultSelection<Prisma.$JenisPeralatanPayload>
/**
 * Model Teknisi
 * 
 */
export type Teknisi = $Result.DefaultSelection<Prisma.$TeknisiPayload>
/**
 * Model Lokasi
 * 
 */
export type Lokasi = $Result.DefaultSelection<Prisma.$LokasiPayload>
/**
 * Model Jadwal
 * 
 */
export type Jadwal = $Result.DefaultSelection<Prisma.$JadwalPayload>
/**
 * Model Laporan
 * 
 */
export type Laporan = $Result.DefaultSelection<Prisma.$LaporanPayload>
/**
 * Model LaporanTimeline
 * 
 */
export type LaporanTimeline = $Result.DefaultSelection<Prisma.$LaporanTimelinePayload>
/**
 * Model Notifikasi
 * 
 */
export type Notifikasi = $Result.DefaultSelection<Prisma.$NotifikasiPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.peralatan`: Exposes CRUD operations for the **Peralatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Peralatans
    * const peralatans = await prisma.peralatan.findMany()
    * ```
    */
  get peralatan(): Prisma.PeralatanDelegate<ExtArgs>;

  /**
   * `prisma.jenisPeralatan`: Exposes CRUD operations for the **JenisPeralatan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JenisPeralatans
    * const jenisPeralatans = await prisma.jenisPeralatan.findMany()
    * ```
    */
  get jenisPeralatan(): Prisma.JenisPeralatanDelegate<ExtArgs>;

  /**
   * `prisma.teknisi`: Exposes CRUD operations for the **Teknisi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teknisis
    * const teknisis = await prisma.teknisi.findMany()
    * ```
    */
  get teknisi(): Prisma.TeknisiDelegate<ExtArgs>;

  /**
   * `prisma.lokasi`: Exposes CRUD operations for the **Lokasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lokasis
    * const lokasis = await prisma.lokasi.findMany()
    * ```
    */
  get lokasi(): Prisma.LokasiDelegate<ExtArgs>;

  /**
   * `prisma.jadwal`: Exposes CRUD operations for the **Jadwal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jadwals
    * const jadwals = await prisma.jadwal.findMany()
    * ```
    */
  get jadwal(): Prisma.JadwalDelegate<ExtArgs>;

  /**
   * `prisma.laporan`: Exposes CRUD operations for the **Laporan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Laporans
    * const laporans = await prisma.laporan.findMany()
    * ```
    */
  get laporan(): Prisma.LaporanDelegate<ExtArgs>;

  /**
   * `prisma.laporanTimeline`: Exposes CRUD operations for the **LaporanTimeline** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LaporanTimelines
    * const laporanTimelines = await prisma.laporanTimeline.findMany()
    * ```
    */
  get laporanTimeline(): Prisma.LaporanTimelineDelegate<ExtArgs>;

  /**
   * `prisma.notifikasi`: Exposes CRUD operations for the **Notifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifikasis
    * const notifikasis = await prisma.notifikasi.findMany()
    * ```
    */
  get notifikasi(): Prisma.NotifikasiDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "peralatan" | "jenisPeralatan" | "teknisi" | "lokasi" | "jadwal" | "laporan" | "laporanTimeline" | "notifikasi"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Peralatan: {
        payload: Prisma.$PeralatanPayload<ExtArgs>
        fields: Prisma.PeralatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PeralatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PeralatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload>
          }
          findFirst: {
            args: Prisma.PeralatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PeralatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload>
          }
          findMany: {
            args: Prisma.PeralatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload>[]
          }
          create: {
            args: Prisma.PeralatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload>
          }
          createMany: {
            args: Prisma.PeralatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PeralatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload>[]
          }
          delete: {
            args: Prisma.PeralatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload>
          }
          update: {
            args: Prisma.PeralatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload>
          }
          deleteMany: {
            args: Prisma.PeralatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PeralatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PeralatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PeralatanPayload>
          }
          aggregate: {
            args: Prisma.PeralatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePeralatan>
          }
          groupBy: {
            args: Prisma.PeralatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PeralatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PeralatanCountArgs<ExtArgs>
            result: $Utils.Optional<PeralatanCountAggregateOutputType> | number
          }
        }
      }
      JenisPeralatan: {
        payload: Prisma.$JenisPeralatanPayload<ExtArgs>
        fields: Prisma.JenisPeralatanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JenisPeralatanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JenisPeralatanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload>
          }
          findFirst: {
            args: Prisma.JenisPeralatanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JenisPeralatanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload>
          }
          findMany: {
            args: Prisma.JenisPeralatanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload>[]
          }
          create: {
            args: Prisma.JenisPeralatanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload>
          }
          createMany: {
            args: Prisma.JenisPeralatanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JenisPeralatanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload>[]
          }
          delete: {
            args: Prisma.JenisPeralatanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload>
          }
          update: {
            args: Prisma.JenisPeralatanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload>
          }
          deleteMany: {
            args: Prisma.JenisPeralatanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JenisPeralatanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JenisPeralatanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JenisPeralatanPayload>
          }
          aggregate: {
            args: Prisma.JenisPeralatanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJenisPeralatan>
          }
          groupBy: {
            args: Prisma.JenisPeralatanGroupByArgs<ExtArgs>
            result: $Utils.Optional<JenisPeralatanGroupByOutputType>[]
          }
          count: {
            args: Prisma.JenisPeralatanCountArgs<ExtArgs>
            result: $Utils.Optional<JenisPeralatanCountAggregateOutputType> | number
          }
        }
      }
      Teknisi: {
        payload: Prisma.$TeknisiPayload<ExtArgs>
        fields: Prisma.TeknisiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeknisiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeknisiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload>
          }
          findFirst: {
            args: Prisma.TeknisiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeknisiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload>
          }
          findMany: {
            args: Prisma.TeknisiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload>[]
          }
          create: {
            args: Prisma.TeknisiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload>
          }
          createMany: {
            args: Prisma.TeknisiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeknisiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload>[]
          }
          delete: {
            args: Prisma.TeknisiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload>
          }
          update: {
            args: Prisma.TeknisiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload>
          }
          deleteMany: {
            args: Prisma.TeknisiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeknisiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeknisiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeknisiPayload>
          }
          aggregate: {
            args: Prisma.TeknisiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeknisi>
          }
          groupBy: {
            args: Prisma.TeknisiGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeknisiGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeknisiCountArgs<ExtArgs>
            result: $Utils.Optional<TeknisiCountAggregateOutputType> | number
          }
        }
      }
      Lokasi: {
        payload: Prisma.$LokasiPayload<ExtArgs>
        fields: Prisma.LokasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LokasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LokasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          findFirst: {
            args: Prisma.LokasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LokasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          findMany: {
            args: Prisma.LokasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>[]
          }
          create: {
            args: Prisma.LokasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          createMany: {
            args: Prisma.LokasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LokasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>[]
          }
          delete: {
            args: Prisma.LokasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          update: {
            args: Prisma.LokasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          deleteMany: {
            args: Prisma.LokasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LokasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LokasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LokasiPayload>
          }
          aggregate: {
            args: Prisma.LokasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLokasi>
          }
          groupBy: {
            args: Prisma.LokasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<LokasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.LokasiCountArgs<ExtArgs>
            result: $Utils.Optional<LokasiCountAggregateOutputType> | number
          }
        }
      }
      Jadwal: {
        payload: Prisma.$JadwalPayload<ExtArgs>
        fields: Prisma.JadwalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JadwalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JadwalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findFirst: {
            args: Prisma.JadwalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JadwalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          findMany: {
            args: Prisma.JadwalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          create: {
            args: Prisma.JadwalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          createMany: {
            args: Prisma.JadwalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JadwalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>[]
          }
          delete: {
            args: Prisma.JadwalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          update: {
            args: Prisma.JadwalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          deleteMany: {
            args: Prisma.JadwalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JadwalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.JadwalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JadwalPayload>
          }
          aggregate: {
            args: Prisma.JadwalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJadwal>
          }
          groupBy: {
            args: Prisma.JadwalGroupByArgs<ExtArgs>
            result: $Utils.Optional<JadwalGroupByOutputType>[]
          }
          count: {
            args: Prisma.JadwalCountArgs<ExtArgs>
            result: $Utils.Optional<JadwalCountAggregateOutputType> | number
          }
        }
      }
      Laporan: {
        payload: Prisma.$LaporanPayload<ExtArgs>
        fields: Prisma.LaporanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findFirst: {
            args: Prisma.LaporanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          findMany: {
            args: Prisma.LaporanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          create: {
            args: Prisma.LaporanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          createMany: {
            args: Prisma.LaporanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>[]
          }
          delete: {
            args: Prisma.LaporanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          update: {
            args: Prisma.LaporanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          deleteMany: {
            args: Prisma.LaporanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LaporanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanPayload>
          }
          aggregate: {
            args: Prisma.LaporanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporan>
          }
          groupBy: {
            args: Prisma.LaporanGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanCountAggregateOutputType> | number
          }
        }
      }
      LaporanTimeline: {
        payload: Prisma.$LaporanTimelinePayload<ExtArgs>
        fields: Prisma.LaporanTimelineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LaporanTimelineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LaporanTimelineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload>
          }
          findFirst: {
            args: Prisma.LaporanTimelineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LaporanTimelineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload>
          }
          findMany: {
            args: Prisma.LaporanTimelineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload>[]
          }
          create: {
            args: Prisma.LaporanTimelineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload>
          }
          createMany: {
            args: Prisma.LaporanTimelineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LaporanTimelineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload>[]
          }
          delete: {
            args: Prisma.LaporanTimelineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload>
          }
          update: {
            args: Prisma.LaporanTimelineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload>
          }
          deleteMany: {
            args: Prisma.LaporanTimelineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LaporanTimelineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LaporanTimelineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LaporanTimelinePayload>
          }
          aggregate: {
            args: Prisma.LaporanTimelineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLaporanTimeline>
          }
          groupBy: {
            args: Prisma.LaporanTimelineGroupByArgs<ExtArgs>
            result: $Utils.Optional<LaporanTimelineGroupByOutputType>[]
          }
          count: {
            args: Prisma.LaporanTimelineCountArgs<ExtArgs>
            result: $Utils.Optional<LaporanTimelineCountAggregateOutputType> | number
          }
        }
      }
      Notifikasi: {
        payload: Prisma.$NotifikasiPayload<ExtArgs>
        fields: Prisma.NotifikasiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotifikasiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotifikasiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          findFirst: {
            args: Prisma.NotifikasiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotifikasiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          findMany: {
            args: Prisma.NotifikasiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>[]
          }
          create: {
            args: Prisma.NotifikasiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          createMany: {
            args: Prisma.NotifikasiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotifikasiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>[]
          }
          delete: {
            args: Prisma.NotifikasiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          update: {
            args: Prisma.NotifikasiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          deleteMany: {
            args: Prisma.NotifikasiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotifikasiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotifikasiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotifikasiPayload>
          }
          aggregate: {
            args: Prisma.NotifikasiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotifikasi>
          }
          groupBy: {
            args: Prisma.NotifikasiGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotifikasiCountArgs<ExtArgs>
            result: $Utils.Optional<NotifikasiCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifikasi: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifikasi?: boolean | UserCountOutputTypeCountNotifikasiArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotifikasiWhereInput
  }


  /**
   * Count Type PeralatanCountOutputType
   */

  export type PeralatanCountOutputType = {
    jadwal: number
    laporan: number
  }

  export type PeralatanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | PeralatanCountOutputTypeCountJadwalArgs
    laporan?: boolean | PeralatanCountOutputTypeCountLaporanArgs
  }

  // Custom InputTypes
  /**
   * PeralatanCountOutputType without action
   */
  export type PeralatanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PeralatanCountOutputType
     */
    select?: PeralatanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PeralatanCountOutputType without action
   */
  export type PeralatanCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
  }

  /**
   * PeralatanCountOutputType without action
   */
  export type PeralatanCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
  }


  /**
   * Count Type TeknisiCountOutputType
   */

  export type TeknisiCountOutputType = {
    jadwal: number
    laporan: number
  }

  export type TeknisiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | TeknisiCountOutputTypeCountJadwalArgs
    laporan?: boolean | TeknisiCountOutputTypeCountLaporanArgs
  }

  // Custom InputTypes
  /**
   * TeknisiCountOutputType without action
   */
  export type TeknisiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeknisiCountOutputType
     */
    select?: TeknisiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeknisiCountOutputType without action
   */
  export type TeknisiCountOutputTypeCountJadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
  }

  /**
   * TeknisiCountOutputType without action
   */
  export type TeknisiCountOutputTypeCountLaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
  }


  /**
   * Count Type LokasiCountOutputType
   */

  export type LokasiCountOutputType = {
    peralatan: number
  }

  export type LokasiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peralatan?: boolean | LokasiCountOutputTypeCountPeralatanArgs
  }

  // Custom InputTypes
  /**
   * LokasiCountOutputType without action
   */
  export type LokasiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LokasiCountOutputType
     */
    select?: LokasiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LokasiCountOutputType without action
   */
  export type LokasiCountOutputTypeCountPeralatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeralatanWhereInput
  }


  /**
   * Count Type LaporanCountOutputType
   */

  export type LaporanCountOutputType = {
    timeline: number
  }

  export type LaporanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    timeline?: boolean | LaporanCountOutputTypeCountTimelineArgs
  }

  // Custom InputTypes
  /**
   * LaporanCountOutputType without action
   */
  export type LaporanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanCountOutputType
     */
    select?: LaporanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LaporanCountOutputType without action
   */
  export type LaporanCountOutputTypeCountTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanTimelineWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    avatarUrl: string | null
    isActive: boolean | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: string | null
    avatarUrl: string | null
    isActive: boolean | null
    refreshToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    avatarUrl: number
    isActive: number
    refreshToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatarUrl?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatarUrl?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    avatarUrl?: true
    isActive?: true
    refreshToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: string
    avatarUrl: string | null
    isActive: boolean
    refreshToken: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    teknisi?: boolean | User$teknisiArgs<ExtArgs>
    notifikasi?: boolean | User$notifikasiArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    refreshToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teknisi?: boolean | User$teknisiArgs<ExtArgs>
    notifikasi?: boolean | User$notifikasiArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teknisi: Prisma.$TeknisiPayload<ExtArgs> | null
      notifikasi: Prisma.$NotifikasiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: string
      avatarUrl: string | null
      isActive: boolean
      refreshToken: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teknisi<T extends User$teknisiArgs<ExtArgs> = {}>(args?: Subset<T, User$teknisiArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    notifikasi<T extends User$notifikasiArgs<ExtArgs> = {}>(args?: Subset<T, User$notifikasiArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.teknisi
   */
  export type User$teknisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    where?: TeknisiWhereInput
  }

  /**
   * User.notifikasi
   */
  export type User$notifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    where?: NotifikasiWhereInput
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    cursor?: NotifikasiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Peralatan
   */

  export type AggregatePeralatan = {
    _count: PeralatanCountAggregateOutputType | null
    _avg: PeralatanAvgAggregateOutputType | null
    _sum: PeralatanSumAggregateOutputType | null
    _min: PeralatanMinAggregateOutputType | null
    _max: PeralatanMaxAggregateOutputType | null
  }

  export type PeralatanAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type PeralatanSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type PeralatanMinAggregateOutputType = {
    id: string | null
    kodeId: string | null
    nama: string | null
    jenis: string | null
    lokasi: string | null
    noRegister: string | null
    fotoUrl: string | null
    kapasitas: string | null
    tinggiDimensi: string | null
    jenisKabel: string | null
    masaBerlaku: Date | null
    lat: number | null
    lng: number | null
    status: string | null
    qrCodeUrl: string | null
    createdAt: Date | null
    lokasiId: string | null
  }

  export type PeralatanMaxAggregateOutputType = {
    id: string | null
    kodeId: string | null
    nama: string | null
    jenis: string | null
    lokasi: string | null
    noRegister: string | null
    fotoUrl: string | null
    kapasitas: string | null
    tinggiDimensi: string | null
    jenisKabel: string | null
    masaBerlaku: Date | null
    lat: number | null
    lng: number | null
    status: string | null
    qrCodeUrl: string | null
    createdAt: Date | null
    lokasiId: string | null
  }

  export type PeralatanCountAggregateOutputType = {
    id: number
    kodeId: number
    nama: number
    jenis: number
    lokasi: number
    noRegister: number
    fotoUrl: number
    kapasitas: number
    tinggiDimensi: number
    jenisKabel: number
    masaBerlaku: number
    lat: number
    lng: number
    status: number
    qrCodeUrl: number
    createdAt: number
    lokasiId: number
    _all: number
  }


  export type PeralatanAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type PeralatanSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type PeralatanMinAggregateInputType = {
    id?: true
    kodeId?: true
    nama?: true
    jenis?: true
    lokasi?: true
    noRegister?: true
    fotoUrl?: true
    kapasitas?: true
    tinggiDimensi?: true
    jenisKabel?: true
    masaBerlaku?: true
    lat?: true
    lng?: true
    status?: true
    qrCodeUrl?: true
    createdAt?: true
    lokasiId?: true
  }

  export type PeralatanMaxAggregateInputType = {
    id?: true
    kodeId?: true
    nama?: true
    jenis?: true
    lokasi?: true
    noRegister?: true
    fotoUrl?: true
    kapasitas?: true
    tinggiDimensi?: true
    jenisKabel?: true
    masaBerlaku?: true
    lat?: true
    lng?: true
    status?: true
    qrCodeUrl?: true
    createdAt?: true
    lokasiId?: true
  }

  export type PeralatanCountAggregateInputType = {
    id?: true
    kodeId?: true
    nama?: true
    jenis?: true
    lokasi?: true
    noRegister?: true
    fotoUrl?: true
    kapasitas?: true
    tinggiDimensi?: true
    jenisKabel?: true
    masaBerlaku?: true
    lat?: true
    lng?: true
    status?: true
    qrCodeUrl?: true
    createdAt?: true
    lokasiId?: true
    _all?: true
  }

  export type PeralatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peralatan to aggregate.
     */
    where?: PeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peralatans to fetch.
     */
    orderBy?: PeralatanOrderByWithRelationInput | PeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Peralatans
    **/
    _count?: true | PeralatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PeralatanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PeralatanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PeralatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PeralatanMaxAggregateInputType
  }

  export type GetPeralatanAggregateType<T extends PeralatanAggregateArgs> = {
        [P in keyof T & keyof AggregatePeralatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePeralatan[P]>
      : GetScalarType<T[P], AggregatePeralatan[P]>
  }




  export type PeralatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PeralatanWhereInput
    orderBy?: PeralatanOrderByWithAggregationInput | PeralatanOrderByWithAggregationInput[]
    by: PeralatanScalarFieldEnum[] | PeralatanScalarFieldEnum
    having?: PeralatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PeralatanCountAggregateInputType | true
    _avg?: PeralatanAvgAggregateInputType
    _sum?: PeralatanSumAggregateInputType
    _min?: PeralatanMinAggregateInputType
    _max?: PeralatanMaxAggregateInputType
  }

  export type PeralatanGroupByOutputType = {
    id: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister: string | null
    fotoUrl: string | null
    kapasitas: string | null
    tinggiDimensi: string | null
    jenisKabel: string | null
    masaBerlaku: Date | null
    lat: number | null
    lng: number | null
    status: string
    qrCodeUrl: string | null
    createdAt: Date
    lokasiId: string | null
    _count: PeralatanCountAggregateOutputType | null
    _avg: PeralatanAvgAggregateOutputType | null
    _sum: PeralatanSumAggregateOutputType | null
    _min: PeralatanMinAggregateOutputType | null
    _max: PeralatanMaxAggregateOutputType | null
  }

  type GetPeralatanGroupByPayload<T extends PeralatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PeralatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PeralatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PeralatanGroupByOutputType[P]>
            : GetScalarType<T[P], PeralatanGroupByOutputType[P]>
        }
      >
    >


  export type PeralatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeId?: boolean
    nama?: boolean
    jenis?: boolean
    lokasi?: boolean
    noRegister?: boolean
    fotoUrl?: boolean
    kapasitas?: boolean
    tinggiDimensi?: boolean
    jenisKabel?: boolean
    masaBerlaku?: boolean
    lat?: boolean
    lng?: boolean
    status?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    lokasiId?: boolean
    jadwal?: boolean | Peralatan$jadwalArgs<ExtArgs>
    laporan?: boolean | Peralatan$laporanArgs<ExtArgs>
    lokasiRelation?: boolean | Peralatan$lokasiRelationArgs<ExtArgs>
    _count?: boolean | PeralatanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["peralatan"]>

  export type PeralatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeId?: boolean
    nama?: boolean
    jenis?: boolean
    lokasi?: boolean
    noRegister?: boolean
    fotoUrl?: boolean
    kapasitas?: boolean
    tinggiDimensi?: boolean
    jenisKabel?: boolean
    masaBerlaku?: boolean
    lat?: boolean
    lng?: boolean
    status?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    lokasiId?: boolean
    lokasiRelation?: boolean | Peralatan$lokasiRelationArgs<ExtArgs>
  }, ExtArgs["result"]["peralatan"]>

  export type PeralatanSelectScalar = {
    id?: boolean
    kodeId?: boolean
    nama?: boolean
    jenis?: boolean
    lokasi?: boolean
    noRegister?: boolean
    fotoUrl?: boolean
    kapasitas?: boolean
    tinggiDimensi?: boolean
    jenisKabel?: boolean
    masaBerlaku?: boolean
    lat?: boolean
    lng?: boolean
    status?: boolean
    qrCodeUrl?: boolean
    createdAt?: boolean
    lokasiId?: boolean
  }

  export type PeralatanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | Peralatan$jadwalArgs<ExtArgs>
    laporan?: boolean | Peralatan$laporanArgs<ExtArgs>
    lokasiRelation?: boolean | Peralatan$lokasiRelationArgs<ExtArgs>
    _count?: boolean | PeralatanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PeralatanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lokasiRelation?: boolean | Peralatan$lokasiRelationArgs<ExtArgs>
  }

  export type $PeralatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Peralatan"
    objects: {
      jadwal: Prisma.$JadwalPayload<ExtArgs>[]
      laporan: Prisma.$LaporanPayload<ExtArgs>[]
      lokasiRelation: Prisma.$LokasiPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kodeId: string
      nama: string
      jenis: string
      lokasi: string
      noRegister: string | null
      fotoUrl: string | null
      kapasitas: string | null
      tinggiDimensi: string | null
      jenisKabel: string | null
      masaBerlaku: Date | null
      lat: number | null
      lng: number | null
      status: string
      qrCodeUrl: string | null
      createdAt: Date
      lokasiId: string | null
    }, ExtArgs["result"]["peralatan"]>
    composites: {}
  }

  type PeralatanGetPayload<S extends boolean | null | undefined | PeralatanDefaultArgs> = $Result.GetResult<Prisma.$PeralatanPayload, S>

  type PeralatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PeralatanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PeralatanCountAggregateInputType | true
    }

  export interface PeralatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Peralatan'], meta: { name: 'Peralatan' } }
    /**
     * Find zero or one Peralatan that matches the filter.
     * @param {PeralatanFindUniqueArgs} args - Arguments to find a Peralatan
     * @example
     * // Get one Peralatan
     * const peralatan = await prisma.peralatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PeralatanFindUniqueArgs>(args: SelectSubset<T, PeralatanFindUniqueArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Peralatan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PeralatanFindUniqueOrThrowArgs} args - Arguments to find a Peralatan
     * @example
     * // Get one Peralatan
     * const peralatan = await prisma.peralatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PeralatanFindUniqueOrThrowArgs>(args: SelectSubset<T, PeralatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Peralatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeralatanFindFirstArgs} args - Arguments to find a Peralatan
     * @example
     * // Get one Peralatan
     * const peralatan = await prisma.peralatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PeralatanFindFirstArgs>(args?: SelectSubset<T, PeralatanFindFirstArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Peralatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeralatanFindFirstOrThrowArgs} args - Arguments to find a Peralatan
     * @example
     * // Get one Peralatan
     * const peralatan = await prisma.peralatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PeralatanFindFirstOrThrowArgs>(args?: SelectSubset<T, PeralatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Peralatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeralatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Peralatans
     * const peralatans = await prisma.peralatan.findMany()
     * 
     * // Get first 10 Peralatans
     * const peralatans = await prisma.peralatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const peralatanWithIdOnly = await prisma.peralatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PeralatanFindManyArgs>(args?: SelectSubset<T, PeralatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Peralatan.
     * @param {PeralatanCreateArgs} args - Arguments to create a Peralatan.
     * @example
     * // Create one Peralatan
     * const Peralatan = await prisma.peralatan.create({
     *   data: {
     *     // ... data to create a Peralatan
     *   }
     * })
     * 
     */
    create<T extends PeralatanCreateArgs>(args: SelectSubset<T, PeralatanCreateArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Peralatans.
     * @param {PeralatanCreateManyArgs} args - Arguments to create many Peralatans.
     * @example
     * // Create many Peralatans
     * const peralatan = await prisma.peralatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PeralatanCreateManyArgs>(args?: SelectSubset<T, PeralatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Peralatans and returns the data saved in the database.
     * @param {PeralatanCreateManyAndReturnArgs} args - Arguments to create many Peralatans.
     * @example
     * // Create many Peralatans
     * const peralatan = await prisma.peralatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Peralatans and only return the `id`
     * const peralatanWithIdOnly = await prisma.peralatan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PeralatanCreateManyAndReturnArgs>(args?: SelectSubset<T, PeralatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Peralatan.
     * @param {PeralatanDeleteArgs} args - Arguments to delete one Peralatan.
     * @example
     * // Delete one Peralatan
     * const Peralatan = await prisma.peralatan.delete({
     *   where: {
     *     // ... filter to delete one Peralatan
     *   }
     * })
     * 
     */
    delete<T extends PeralatanDeleteArgs>(args: SelectSubset<T, PeralatanDeleteArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Peralatan.
     * @param {PeralatanUpdateArgs} args - Arguments to update one Peralatan.
     * @example
     * // Update one Peralatan
     * const peralatan = await prisma.peralatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PeralatanUpdateArgs>(args: SelectSubset<T, PeralatanUpdateArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Peralatans.
     * @param {PeralatanDeleteManyArgs} args - Arguments to filter Peralatans to delete.
     * @example
     * // Delete a few Peralatans
     * const { count } = await prisma.peralatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PeralatanDeleteManyArgs>(args?: SelectSubset<T, PeralatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Peralatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeralatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Peralatans
     * const peralatan = await prisma.peralatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PeralatanUpdateManyArgs>(args: SelectSubset<T, PeralatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Peralatan.
     * @param {PeralatanUpsertArgs} args - Arguments to update or create a Peralatan.
     * @example
     * // Update or create a Peralatan
     * const peralatan = await prisma.peralatan.upsert({
     *   create: {
     *     // ... data to create a Peralatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Peralatan we want to update
     *   }
     * })
     */
    upsert<T extends PeralatanUpsertArgs>(args: SelectSubset<T, PeralatanUpsertArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Peralatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeralatanCountArgs} args - Arguments to filter Peralatans to count.
     * @example
     * // Count the number of Peralatans
     * const count = await prisma.peralatan.count({
     *   where: {
     *     // ... the filter for the Peralatans we want to count
     *   }
     * })
    **/
    count<T extends PeralatanCountArgs>(
      args?: Subset<T, PeralatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PeralatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Peralatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeralatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PeralatanAggregateArgs>(args: Subset<T, PeralatanAggregateArgs>): Prisma.PrismaPromise<GetPeralatanAggregateType<T>>

    /**
     * Group by Peralatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PeralatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PeralatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PeralatanGroupByArgs['orderBy'] }
        : { orderBy?: PeralatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PeralatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPeralatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Peralatan model
   */
  readonly fields: PeralatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Peralatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PeralatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends Peralatan$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, Peralatan$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany"> | Null>
    laporan<T extends Peralatan$laporanArgs<ExtArgs> = {}>(args?: Subset<T, Peralatan$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany"> | Null>
    lokasiRelation<T extends Peralatan$lokasiRelationArgs<ExtArgs> = {}>(args?: Subset<T, Peralatan$lokasiRelationArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Peralatan model
   */ 
  interface PeralatanFieldRefs {
    readonly id: FieldRef<"Peralatan", 'String'>
    readonly kodeId: FieldRef<"Peralatan", 'String'>
    readonly nama: FieldRef<"Peralatan", 'String'>
    readonly jenis: FieldRef<"Peralatan", 'String'>
    readonly lokasi: FieldRef<"Peralatan", 'String'>
    readonly noRegister: FieldRef<"Peralatan", 'String'>
    readonly fotoUrl: FieldRef<"Peralatan", 'String'>
    readonly kapasitas: FieldRef<"Peralatan", 'String'>
    readonly tinggiDimensi: FieldRef<"Peralatan", 'String'>
    readonly jenisKabel: FieldRef<"Peralatan", 'String'>
    readonly masaBerlaku: FieldRef<"Peralatan", 'DateTime'>
    readonly lat: FieldRef<"Peralatan", 'Float'>
    readonly lng: FieldRef<"Peralatan", 'Float'>
    readonly status: FieldRef<"Peralatan", 'String'>
    readonly qrCodeUrl: FieldRef<"Peralatan", 'String'>
    readonly createdAt: FieldRef<"Peralatan", 'DateTime'>
    readonly lokasiId: FieldRef<"Peralatan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Peralatan findUnique
   */
  export type PeralatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * Filter, which Peralatan to fetch.
     */
    where: PeralatanWhereUniqueInput
  }

  /**
   * Peralatan findUniqueOrThrow
   */
  export type PeralatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * Filter, which Peralatan to fetch.
     */
    where: PeralatanWhereUniqueInput
  }

  /**
   * Peralatan findFirst
   */
  export type PeralatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * Filter, which Peralatan to fetch.
     */
    where?: PeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peralatans to fetch.
     */
    orderBy?: PeralatanOrderByWithRelationInput | PeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peralatans.
     */
    cursor?: PeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peralatans.
     */
    distinct?: PeralatanScalarFieldEnum | PeralatanScalarFieldEnum[]
  }

  /**
   * Peralatan findFirstOrThrow
   */
  export type PeralatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * Filter, which Peralatan to fetch.
     */
    where?: PeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peralatans to fetch.
     */
    orderBy?: PeralatanOrderByWithRelationInput | PeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Peralatans.
     */
    cursor?: PeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Peralatans.
     */
    distinct?: PeralatanScalarFieldEnum | PeralatanScalarFieldEnum[]
  }

  /**
   * Peralatan findMany
   */
  export type PeralatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * Filter, which Peralatans to fetch.
     */
    where?: PeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Peralatans to fetch.
     */
    orderBy?: PeralatanOrderByWithRelationInput | PeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Peralatans.
     */
    cursor?: PeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Peralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Peralatans.
     */
    skip?: number
    distinct?: PeralatanScalarFieldEnum | PeralatanScalarFieldEnum[]
  }

  /**
   * Peralatan create
   */
  export type PeralatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * The data needed to create a Peralatan.
     */
    data: XOR<PeralatanCreateInput, PeralatanUncheckedCreateInput>
  }

  /**
   * Peralatan createMany
   */
  export type PeralatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Peralatans.
     */
    data: PeralatanCreateManyInput | PeralatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Peralatan createManyAndReturn
   */
  export type PeralatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Peralatans.
     */
    data: PeralatanCreateManyInput | PeralatanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Peralatan update
   */
  export type PeralatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * The data needed to update a Peralatan.
     */
    data: XOR<PeralatanUpdateInput, PeralatanUncheckedUpdateInput>
    /**
     * Choose, which Peralatan to update.
     */
    where: PeralatanWhereUniqueInput
  }

  /**
   * Peralatan updateMany
   */
  export type PeralatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Peralatans.
     */
    data: XOR<PeralatanUpdateManyMutationInput, PeralatanUncheckedUpdateManyInput>
    /**
     * Filter which Peralatans to update
     */
    where?: PeralatanWhereInput
  }

  /**
   * Peralatan upsert
   */
  export type PeralatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * The filter to search for the Peralatan to update in case it exists.
     */
    where: PeralatanWhereUniqueInput
    /**
     * In case the Peralatan found by the `where` argument doesn't exist, create a new Peralatan with this data.
     */
    create: XOR<PeralatanCreateInput, PeralatanUncheckedCreateInput>
    /**
     * In case the Peralatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PeralatanUpdateInput, PeralatanUncheckedUpdateInput>
  }

  /**
   * Peralatan delete
   */
  export type PeralatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    /**
     * Filter which Peralatan to delete.
     */
    where: PeralatanWhereUniqueInput
  }

  /**
   * Peralatan deleteMany
   */
  export type PeralatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Peralatans to delete
     */
    where?: PeralatanWhereInput
  }

  /**
   * Peralatan.jadwal
   */
  export type Peralatan$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    cursor?: JadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Peralatan.laporan
   */
  export type Peralatan$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    cursor?: LaporanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Peralatan.lokasiRelation
   */
  export type Peralatan$lokasiRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    where?: LokasiWhereInput
  }

  /**
   * Peralatan without action
   */
  export type PeralatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
  }


  /**
   * Model JenisPeralatan
   */

  export type AggregateJenisPeralatan = {
    _count: JenisPeralatanCountAggregateOutputType | null
    _min: JenisPeralatanMinAggregateOutputType | null
    _max: JenisPeralatanMaxAggregateOutputType | null
  }

  export type JenisPeralatanMinAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    createdAt: Date | null
  }

  export type JenisPeralatanMaxAggregateOutputType = {
    id: string | null
    nama: string | null
    deskripsi: string | null
    createdAt: Date | null
  }

  export type JenisPeralatanCountAggregateOutputType = {
    id: number
    nama: number
    deskripsi: number
    createdAt: number
    _all: number
  }


  export type JenisPeralatanMinAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    createdAt?: true
  }

  export type JenisPeralatanMaxAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    createdAt?: true
  }

  export type JenisPeralatanCountAggregateInputType = {
    id?: true
    nama?: true
    deskripsi?: true
    createdAt?: true
    _all?: true
  }

  export type JenisPeralatanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisPeralatan to aggregate.
     */
    where?: JenisPeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisPeralatans to fetch.
     */
    orderBy?: JenisPeralatanOrderByWithRelationInput | JenisPeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JenisPeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisPeralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisPeralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JenisPeralatans
    **/
    _count?: true | JenisPeralatanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JenisPeralatanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JenisPeralatanMaxAggregateInputType
  }

  export type GetJenisPeralatanAggregateType<T extends JenisPeralatanAggregateArgs> = {
        [P in keyof T & keyof AggregateJenisPeralatan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJenisPeralatan[P]>
      : GetScalarType<T[P], AggregateJenisPeralatan[P]>
  }




  export type JenisPeralatanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JenisPeralatanWhereInput
    orderBy?: JenisPeralatanOrderByWithAggregationInput | JenisPeralatanOrderByWithAggregationInput[]
    by: JenisPeralatanScalarFieldEnum[] | JenisPeralatanScalarFieldEnum
    having?: JenisPeralatanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JenisPeralatanCountAggregateInputType | true
    _min?: JenisPeralatanMinAggregateInputType
    _max?: JenisPeralatanMaxAggregateInputType
  }

  export type JenisPeralatanGroupByOutputType = {
    id: string
    nama: string
    deskripsi: string | null
    createdAt: Date
    _count: JenisPeralatanCountAggregateOutputType | null
    _min: JenisPeralatanMinAggregateOutputType | null
    _max: JenisPeralatanMaxAggregateOutputType | null
  }

  type GetJenisPeralatanGroupByPayload<T extends JenisPeralatanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JenisPeralatanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JenisPeralatanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JenisPeralatanGroupByOutputType[P]>
            : GetScalarType<T[P], JenisPeralatanGroupByOutputType[P]>
        }
      >
    >


  export type JenisPeralatanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jenisPeralatan"]>

  export type JenisPeralatanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["jenisPeralatan"]>

  export type JenisPeralatanSelectScalar = {
    id?: boolean
    nama?: boolean
    deskripsi?: boolean
    createdAt?: boolean
  }


  export type $JenisPeralatanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JenisPeralatan"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nama: string
      deskripsi: string | null
      createdAt: Date
    }, ExtArgs["result"]["jenisPeralatan"]>
    composites: {}
  }

  type JenisPeralatanGetPayload<S extends boolean | null | undefined | JenisPeralatanDefaultArgs> = $Result.GetResult<Prisma.$JenisPeralatanPayload, S>

  type JenisPeralatanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JenisPeralatanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JenisPeralatanCountAggregateInputType | true
    }

  export interface JenisPeralatanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JenisPeralatan'], meta: { name: 'JenisPeralatan' } }
    /**
     * Find zero or one JenisPeralatan that matches the filter.
     * @param {JenisPeralatanFindUniqueArgs} args - Arguments to find a JenisPeralatan
     * @example
     * // Get one JenisPeralatan
     * const jenisPeralatan = await prisma.jenisPeralatan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JenisPeralatanFindUniqueArgs>(args: SelectSubset<T, JenisPeralatanFindUniqueArgs<ExtArgs>>): Prisma__JenisPeralatanClient<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one JenisPeralatan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JenisPeralatanFindUniqueOrThrowArgs} args - Arguments to find a JenisPeralatan
     * @example
     * // Get one JenisPeralatan
     * const jenisPeralatan = await prisma.jenisPeralatan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JenisPeralatanFindUniqueOrThrowArgs>(args: SelectSubset<T, JenisPeralatanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JenisPeralatanClient<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first JenisPeralatan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPeralatanFindFirstArgs} args - Arguments to find a JenisPeralatan
     * @example
     * // Get one JenisPeralatan
     * const jenisPeralatan = await prisma.jenisPeralatan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JenisPeralatanFindFirstArgs>(args?: SelectSubset<T, JenisPeralatanFindFirstArgs<ExtArgs>>): Prisma__JenisPeralatanClient<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first JenisPeralatan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPeralatanFindFirstOrThrowArgs} args - Arguments to find a JenisPeralatan
     * @example
     * // Get one JenisPeralatan
     * const jenisPeralatan = await prisma.jenisPeralatan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JenisPeralatanFindFirstOrThrowArgs>(args?: SelectSubset<T, JenisPeralatanFindFirstOrThrowArgs<ExtArgs>>): Prisma__JenisPeralatanClient<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more JenisPeralatans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPeralatanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JenisPeralatans
     * const jenisPeralatans = await prisma.jenisPeralatan.findMany()
     * 
     * // Get first 10 JenisPeralatans
     * const jenisPeralatans = await prisma.jenisPeralatan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jenisPeralatanWithIdOnly = await prisma.jenisPeralatan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JenisPeralatanFindManyArgs>(args?: SelectSubset<T, JenisPeralatanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a JenisPeralatan.
     * @param {JenisPeralatanCreateArgs} args - Arguments to create a JenisPeralatan.
     * @example
     * // Create one JenisPeralatan
     * const JenisPeralatan = await prisma.jenisPeralatan.create({
     *   data: {
     *     // ... data to create a JenisPeralatan
     *   }
     * })
     * 
     */
    create<T extends JenisPeralatanCreateArgs>(args: SelectSubset<T, JenisPeralatanCreateArgs<ExtArgs>>): Prisma__JenisPeralatanClient<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many JenisPeralatans.
     * @param {JenisPeralatanCreateManyArgs} args - Arguments to create many JenisPeralatans.
     * @example
     * // Create many JenisPeralatans
     * const jenisPeralatan = await prisma.jenisPeralatan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JenisPeralatanCreateManyArgs>(args?: SelectSubset<T, JenisPeralatanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many JenisPeralatans and returns the data saved in the database.
     * @param {JenisPeralatanCreateManyAndReturnArgs} args - Arguments to create many JenisPeralatans.
     * @example
     * // Create many JenisPeralatans
     * const jenisPeralatan = await prisma.jenisPeralatan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many JenisPeralatans and only return the `id`
     * const jenisPeralatanWithIdOnly = await prisma.jenisPeralatan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JenisPeralatanCreateManyAndReturnArgs>(args?: SelectSubset<T, JenisPeralatanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a JenisPeralatan.
     * @param {JenisPeralatanDeleteArgs} args - Arguments to delete one JenisPeralatan.
     * @example
     * // Delete one JenisPeralatan
     * const JenisPeralatan = await prisma.jenisPeralatan.delete({
     *   where: {
     *     // ... filter to delete one JenisPeralatan
     *   }
     * })
     * 
     */
    delete<T extends JenisPeralatanDeleteArgs>(args: SelectSubset<T, JenisPeralatanDeleteArgs<ExtArgs>>): Prisma__JenisPeralatanClient<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one JenisPeralatan.
     * @param {JenisPeralatanUpdateArgs} args - Arguments to update one JenisPeralatan.
     * @example
     * // Update one JenisPeralatan
     * const jenisPeralatan = await prisma.jenisPeralatan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JenisPeralatanUpdateArgs>(args: SelectSubset<T, JenisPeralatanUpdateArgs<ExtArgs>>): Prisma__JenisPeralatanClient<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more JenisPeralatans.
     * @param {JenisPeralatanDeleteManyArgs} args - Arguments to filter JenisPeralatans to delete.
     * @example
     * // Delete a few JenisPeralatans
     * const { count } = await prisma.jenisPeralatan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JenisPeralatanDeleteManyArgs>(args?: SelectSubset<T, JenisPeralatanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JenisPeralatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPeralatanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JenisPeralatans
     * const jenisPeralatan = await prisma.jenisPeralatan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JenisPeralatanUpdateManyArgs>(args: SelectSubset<T, JenisPeralatanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JenisPeralatan.
     * @param {JenisPeralatanUpsertArgs} args - Arguments to update or create a JenisPeralatan.
     * @example
     * // Update or create a JenisPeralatan
     * const jenisPeralatan = await prisma.jenisPeralatan.upsert({
     *   create: {
     *     // ... data to create a JenisPeralatan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JenisPeralatan we want to update
     *   }
     * })
     */
    upsert<T extends JenisPeralatanUpsertArgs>(args: SelectSubset<T, JenisPeralatanUpsertArgs<ExtArgs>>): Prisma__JenisPeralatanClient<$Result.GetResult<Prisma.$JenisPeralatanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of JenisPeralatans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPeralatanCountArgs} args - Arguments to filter JenisPeralatans to count.
     * @example
     * // Count the number of JenisPeralatans
     * const count = await prisma.jenisPeralatan.count({
     *   where: {
     *     // ... the filter for the JenisPeralatans we want to count
     *   }
     * })
    **/
    count<T extends JenisPeralatanCountArgs>(
      args?: Subset<T, JenisPeralatanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JenisPeralatanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JenisPeralatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPeralatanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JenisPeralatanAggregateArgs>(args: Subset<T, JenisPeralatanAggregateArgs>): Prisma.PrismaPromise<GetJenisPeralatanAggregateType<T>>

    /**
     * Group by JenisPeralatan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JenisPeralatanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JenisPeralatanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JenisPeralatanGroupByArgs['orderBy'] }
        : { orderBy?: JenisPeralatanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JenisPeralatanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJenisPeralatanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JenisPeralatan model
   */
  readonly fields: JenisPeralatanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JenisPeralatan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JenisPeralatanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the JenisPeralatan model
   */ 
  interface JenisPeralatanFieldRefs {
    readonly id: FieldRef<"JenisPeralatan", 'String'>
    readonly nama: FieldRef<"JenisPeralatan", 'String'>
    readonly deskripsi: FieldRef<"JenisPeralatan", 'String'>
    readonly createdAt: FieldRef<"JenisPeralatan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * JenisPeralatan findUnique
   */
  export type JenisPeralatanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which JenisPeralatan to fetch.
     */
    where: JenisPeralatanWhereUniqueInput
  }

  /**
   * JenisPeralatan findUniqueOrThrow
   */
  export type JenisPeralatanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which JenisPeralatan to fetch.
     */
    where: JenisPeralatanWhereUniqueInput
  }

  /**
   * JenisPeralatan findFirst
   */
  export type JenisPeralatanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which JenisPeralatan to fetch.
     */
    where?: JenisPeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisPeralatans to fetch.
     */
    orderBy?: JenisPeralatanOrderByWithRelationInput | JenisPeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisPeralatans.
     */
    cursor?: JenisPeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisPeralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisPeralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisPeralatans.
     */
    distinct?: JenisPeralatanScalarFieldEnum | JenisPeralatanScalarFieldEnum[]
  }

  /**
   * JenisPeralatan findFirstOrThrow
   */
  export type JenisPeralatanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which JenisPeralatan to fetch.
     */
    where?: JenisPeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisPeralatans to fetch.
     */
    orderBy?: JenisPeralatanOrderByWithRelationInput | JenisPeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JenisPeralatans.
     */
    cursor?: JenisPeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisPeralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisPeralatans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JenisPeralatans.
     */
    distinct?: JenisPeralatanScalarFieldEnum | JenisPeralatanScalarFieldEnum[]
  }

  /**
   * JenisPeralatan findMany
   */
  export type JenisPeralatanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * Filter, which JenisPeralatans to fetch.
     */
    where?: JenisPeralatanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JenisPeralatans to fetch.
     */
    orderBy?: JenisPeralatanOrderByWithRelationInput | JenisPeralatanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JenisPeralatans.
     */
    cursor?: JenisPeralatanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JenisPeralatans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JenisPeralatans.
     */
    skip?: number
    distinct?: JenisPeralatanScalarFieldEnum | JenisPeralatanScalarFieldEnum[]
  }

  /**
   * JenisPeralatan create
   */
  export type JenisPeralatanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * The data needed to create a JenisPeralatan.
     */
    data: XOR<JenisPeralatanCreateInput, JenisPeralatanUncheckedCreateInput>
  }

  /**
   * JenisPeralatan createMany
   */
  export type JenisPeralatanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JenisPeralatans.
     */
    data: JenisPeralatanCreateManyInput | JenisPeralatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisPeralatan createManyAndReturn
   */
  export type JenisPeralatanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many JenisPeralatans.
     */
    data: JenisPeralatanCreateManyInput | JenisPeralatanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JenisPeralatan update
   */
  export type JenisPeralatanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * The data needed to update a JenisPeralatan.
     */
    data: XOR<JenisPeralatanUpdateInput, JenisPeralatanUncheckedUpdateInput>
    /**
     * Choose, which JenisPeralatan to update.
     */
    where: JenisPeralatanWhereUniqueInput
  }

  /**
   * JenisPeralatan updateMany
   */
  export type JenisPeralatanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JenisPeralatans.
     */
    data: XOR<JenisPeralatanUpdateManyMutationInput, JenisPeralatanUncheckedUpdateManyInput>
    /**
     * Filter which JenisPeralatans to update
     */
    where?: JenisPeralatanWhereInput
  }

  /**
   * JenisPeralatan upsert
   */
  export type JenisPeralatanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * The filter to search for the JenisPeralatan to update in case it exists.
     */
    where: JenisPeralatanWhereUniqueInput
    /**
     * In case the JenisPeralatan found by the `where` argument doesn't exist, create a new JenisPeralatan with this data.
     */
    create: XOR<JenisPeralatanCreateInput, JenisPeralatanUncheckedCreateInput>
    /**
     * In case the JenisPeralatan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JenisPeralatanUpdateInput, JenisPeralatanUncheckedUpdateInput>
  }

  /**
   * JenisPeralatan delete
   */
  export type JenisPeralatanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
    /**
     * Filter which JenisPeralatan to delete.
     */
    where: JenisPeralatanWhereUniqueInput
  }

  /**
   * JenisPeralatan deleteMany
   */
  export type JenisPeralatanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JenisPeralatans to delete
     */
    where?: JenisPeralatanWhereInput
  }

  /**
   * JenisPeralatan without action
   */
  export type JenisPeralatanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JenisPeralatan
     */
    select?: JenisPeralatanSelect<ExtArgs> | null
  }


  /**
   * Model Teknisi
   */

  export type AggregateTeknisi = {
    _count: TeknisiCountAggregateOutputType | null
    _avg: TeknisiAvgAggregateOutputType | null
    _sum: TeknisiSumAggregateOutputType | null
    _min: TeknisiMinAggregateOutputType | null
    _max: TeknisiMaxAggregateOutputType | null
  }

  export type TeknisiAvgAggregateOutputType = {
    totalInspeksi: number | null
    rating: number | null
  }

  export type TeknisiSumAggregateOutputType = {
    totalInspeksi: number | null
    rating: number | null
  }

  export type TeknisiMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nama: string | null
    idKaryawan: string | null
    email: string | null
    noHp: string | null
    divisi: string | null
    avatarUrl: string | null
    status: string | null
    totalInspeksi: number | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeknisiMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nama: string | null
    idKaryawan: string | null
    email: string | null
    noHp: string | null
    divisi: string | null
    avatarUrl: string | null
    status: string | null
    totalInspeksi: number | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TeknisiCountAggregateOutputType = {
    id: number
    userId: number
    nama: number
    idKaryawan: number
    email: number
    noHp: number
    divisi: number
    avatarUrl: number
    status: number
    totalInspeksi: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TeknisiAvgAggregateInputType = {
    totalInspeksi?: true
    rating?: true
  }

  export type TeknisiSumAggregateInputType = {
    totalInspeksi?: true
    rating?: true
  }

  export type TeknisiMinAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    idKaryawan?: true
    email?: true
    noHp?: true
    divisi?: true
    avatarUrl?: true
    status?: true
    totalInspeksi?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeknisiMaxAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    idKaryawan?: true
    email?: true
    noHp?: true
    divisi?: true
    avatarUrl?: true
    status?: true
    totalInspeksi?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TeknisiCountAggregateInputType = {
    id?: true
    userId?: true
    nama?: true
    idKaryawan?: true
    email?: true
    noHp?: true
    divisi?: true
    avatarUrl?: true
    status?: true
    totalInspeksi?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TeknisiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teknisi to aggregate.
     */
    where?: TeknisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teknisis to fetch.
     */
    orderBy?: TeknisiOrderByWithRelationInput | TeknisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeknisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teknisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teknisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teknisis
    **/
    _count?: true | TeknisiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeknisiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeknisiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeknisiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeknisiMaxAggregateInputType
  }

  export type GetTeknisiAggregateType<T extends TeknisiAggregateArgs> = {
        [P in keyof T & keyof AggregateTeknisi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeknisi[P]>
      : GetScalarType<T[P], AggregateTeknisi[P]>
  }




  export type TeknisiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeknisiWhereInput
    orderBy?: TeknisiOrderByWithAggregationInput | TeknisiOrderByWithAggregationInput[]
    by: TeknisiScalarFieldEnum[] | TeknisiScalarFieldEnum
    having?: TeknisiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeknisiCountAggregateInputType | true
    _avg?: TeknisiAvgAggregateInputType
    _sum?: TeknisiSumAggregateInputType
    _min?: TeknisiMinAggregateInputType
    _max?: TeknisiMaxAggregateInputType
  }

  export type TeknisiGroupByOutputType = {
    id: string
    userId: string | null
    nama: string
    idKaryawan: string
    email: string
    noHp: string | null
    divisi: string
    avatarUrl: string | null
    status: string
    totalInspeksi: number
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: TeknisiCountAggregateOutputType | null
    _avg: TeknisiAvgAggregateOutputType | null
    _sum: TeknisiSumAggregateOutputType | null
    _min: TeknisiMinAggregateOutputType | null
    _max: TeknisiMaxAggregateOutputType | null
  }

  type GetTeknisiGroupByPayload<T extends TeknisiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeknisiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeknisiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeknisiGroupByOutputType[P]>
            : GetScalarType<T[P], TeknisiGroupByOutputType[P]>
        }
      >
    >


  export type TeknisiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nama?: boolean
    idKaryawan?: boolean
    email?: boolean
    noHp?: boolean
    divisi?: boolean
    avatarUrl?: boolean
    status?: boolean
    totalInspeksi?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Teknisi$userArgs<ExtArgs>
    jadwal?: boolean | Teknisi$jadwalArgs<ExtArgs>
    laporan?: boolean | Teknisi$laporanArgs<ExtArgs>
    _count?: boolean | TeknisiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teknisi"]>

  export type TeknisiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nama?: boolean
    idKaryawan?: boolean
    email?: boolean
    noHp?: boolean
    divisi?: boolean
    avatarUrl?: boolean
    status?: boolean
    totalInspeksi?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Teknisi$userArgs<ExtArgs>
  }, ExtArgs["result"]["teknisi"]>

  export type TeknisiSelectScalar = {
    id?: boolean
    userId?: boolean
    nama?: boolean
    idKaryawan?: boolean
    email?: boolean
    noHp?: boolean
    divisi?: boolean
    avatarUrl?: boolean
    status?: boolean
    totalInspeksi?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TeknisiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Teknisi$userArgs<ExtArgs>
    jadwal?: boolean | Teknisi$jadwalArgs<ExtArgs>
    laporan?: boolean | Teknisi$laporanArgs<ExtArgs>
    _count?: boolean | TeknisiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeknisiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Teknisi$userArgs<ExtArgs>
  }

  export type $TeknisiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teknisi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      jadwal: Prisma.$JadwalPayload<ExtArgs>[]
      laporan: Prisma.$LaporanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      nama: string
      idKaryawan: string
      email: string
      noHp: string | null
      divisi: string
      avatarUrl: string | null
      status: string
      totalInspeksi: number
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["teknisi"]>
    composites: {}
  }

  type TeknisiGetPayload<S extends boolean | null | undefined | TeknisiDefaultArgs> = $Result.GetResult<Prisma.$TeknisiPayload, S>

  type TeknisiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeknisiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeknisiCountAggregateInputType | true
    }

  export interface TeknisiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teknisi'], meta: { name: 'Teknisi' } }
    /**
     * Find zero or one Teknisi that matches the filter.
     * @param {TeknisiFindUniqueArgs} args - Arguments to find a Teknisi
     * @example
     * // Get one Teknisi
     * const teknisi = await prisma.teknisi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeknisiFindUniqueArgs>(args: SelectSubset<T, TeknisiFindUniqueArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Teknisi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeknisiFindUniqueOrThrowArgs} args - Arguments to find a Teknisi
     * @example
     * // Get one Teknisi
     * const teknisi = await prisma.teknisi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeknisiFindUniqueOrThrowArgs>(args: SelectSubset<T, TeknisiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Teknisi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeknisiFindFirstArgs} args - Arguments to find a Teknisi
     * @example
     * // Get one Teknisi
     * const teknisi = await prisma.teknisi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeknisiFindFirstArgs>(args?: SelectSubset<T, TeknisiFindFirstArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Teknisi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeknisiFindFirstOrThrowArgs} args - Arguments to find a Teknisi
     * @example
     * // Get one Teknisi
     * const teknisi = await prisma.teknisi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeknisiFindFirstOrThrowArgs>(args?: SelectSubset<T, TeknisiFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teknisis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeknisiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teknisis
     * const teknisis = await prisma.teknisi.findMany()
     * 
     * // Get first 10 Teknisis
     * const teknisis = await prisma.teknisi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teknisiWithIdOnly = await prisma.teknisi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeknisiFindManyArgs>(args?: SelectSubset<T, TeknisiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Teknisi.
     * @param {TeknisiCreateArgs} args - Arguments to create a Teknisi.
     * @example
     * // Create one Teknisi
     * const Teknisi = await prisma.teknisi.create({
     *   data: {
     *     // ... data to create a Teknisi
     *   }
     * })
     * 
     */
    create<T extends TeknisiCreateArgs>(args: SelectSubset<T, TeknisiCreateArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teknisis.
     * @param {TeknisiCreateManyArgs} args - Arguments to create many Teknisis.
     * @example
     * // Create many Teknisis
     * const teknisi = await prisma.teknisi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeknisiCreateManyArgs>(args?: SelectSubset<T, TeknisiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teknisis and returns the data saved in the database.
     * @param {TeknisiCreateManyAndReturnArgs} args - Arguments to create many Teknisis.
     * @example
     * // Create many Teknisis
     * const teknisi = await prisma.teknisi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teknisis and only return the `id`
     * const teknisiWithIdOnly = await prisma.teknisi.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeknisiCreateManyAndReturnArgs>(args?: SelectSubset<T, TeknisiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Teknisi.
     * @param {TeknisiDeleteArgs} args - Arguments to delete one Teknisi.
     * @example
     * // Delete one Teknisi
     * const Teknisi = await prisma.teknisi.delete({
     *   where: {
     *     // ... filter to delete one Teknisi
     *   }
     * })
     * 
     */
    delete<T extends TeknisiDeleteArgs>(args: SelectSubset<T, TeknisiDeleteArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Teknisi.
     * @param {TeknisiUpdateArgs} args - Arguments to update one Teknisi.
     * @example
     * // Update one Teknisi
     * const teknisi = await prisma.teknisi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeknisiUpdateArgs>(args: SelectSubset<T, TeknisiUpdateArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teknisis.
     * @param {TeknisiDeleteManyArgs} args - Arguments to filter Teknisis to delete.
     * @example
     * // Delete a few Teknisis
     * const { count } = await prisma.teknisi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeknisiDeleteManyArgs>(args?: SelectSubset<T, TeknisiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teknisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeknisiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teknisis
     * const teknisi = await prisma.teknisi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeknisiUpdateManyArgs>(args: SelectSubset<T, TeknisiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teknisi.
     * @param {TeknisiUpsertArgs} args - Arguments to update or create a Teknisi.
     * @example
     * // Update or create a Teknisi
     * const teknisi = await prisma.teknisi.upsert({
     *   create: {
     *     // ... data to create a Teknisi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teknisi we want to update
     *   }
     * })
     */
    upsert<T extends TeknisiUpsertArgs>(args: SelectSubset<T, TeknisiUpsertArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teknisis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeknisiCountArgs} args - Arguments to filter Teknisis to count.
     * @example
     * // Count the number of Teknisis
     * const count = await prisma.teknisi.count({
     *   where: {
     *     // ... the filter for the Teknisis we want to count
     *   }
     * })
    **/
    count<T extends TeknisiCountArgs>(
      args?: Subset<T, TeknisiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeknisiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teknisi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeknisiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeknisiAggregateArgs>(args: Subset<T, TeknisiAggregateArgs>): Prisma.PrismaPromise<GetTeknisiAggregateType<T>>

    /**
     * Group by Teknisi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeknisiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeknisiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeknisiGroupByArgs['orderBy'] }
        : { orderBy?: TeknisiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeknisiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeknisiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teknisi model
   */
  readonly fields: TeknisiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teknisi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeknisiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Teknisi$userArgs<ExtArgs> = {}>(args?: Subset<T, Teknisi$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    jadwal<T extends Teknisi$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, Teknisi$jadwalArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany"> | Null>
    laporan<T extends Teknisi$laporanArgs<ExtArgs> = {}>(args?: Subset<T, Teknisi$laporanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teknisi model
   */ 
  interface TeknisiFieldRefs {
    readonly id: FieldRef<"Teknisi", 'String'>
    readonly userId: FieldRef<"Teknisi", 'String'>
    readonly nama: FieldRef<"Teknisi", 'String'>
    readonly idKaryawan: FieldRef<"Teknisi", 'String'>
    readonly email: FieldRef<"Teknisi", 'String'>
    readonly noHp: FieldRef<"Teknisi", 'String'>
    readonly divisi: FieldRef<"Teknisi", 'String'>
    readonly avatarUrl: FieldRef<"Teknisi", 'String'>
    readonly status: FieldRef<"Teknisi", 'String'>
    readonly totalInspeksi: FieldRef<"Teknisi", 'Int'>
    readonly rating: FieldRef<"Teknisi", 'Float'>
    readonly createdAt: FieldRef<"Teknisi", 'DateTime'>
    readonly updatedAt: FieldRef<"Teknisi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Teknisi findUnique
   */
  export type TeknisiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * Filter, which Teknisi to fetch.
     */
    where: TeknisiWhereUniqueInput
  }

  /**
   * Teknisi findUniqueOrThrow
   */
  export type TeknisiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * Filter, which Teknisi to fetch.
     */
    where: TeknisiWhereUniqueInput
  }

  /**
   * Teknisi findFirst
   */
  export type TeknisiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * Filter, which Teknisi to fetch.
     */
    where?: TeknisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teknisis to fetch.
     */
    orderBy?: TeknisiOrderByWithRelationInput | TeknisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teknisis.
     */
    cursor?: TeknisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teknisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teknisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teknisis.
     */
    distinct?: TeknisiScalarFieldEnum | TeknisiScalarFieldEnum[]
  }

  /**
   * Teknisi findFirstOrThrow
   */
  export type TeknisiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * Filter, which Teknisi to fetch.
     */
    where?: TeknisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teknisis to fetch.
     */
    orderBy?: TeknisiOrderByWithRelationInput | TeknisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teknisis.
     */
    cursor?: TeknisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teknisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teknisis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teknisis.
     */
    distinct?: TeknisiScalarFieldEnum | TeknisiScalarFieldEnum[]
  }

  /**
   * Teknisi findMany
   */
  export type TeknisiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * Filter, which Teknisis to fetch.
     */
    where?: TeknisiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teknisis to fetch.
     */
    orderBy?: TeknisiOrderByWithRelationInput | TeknisiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teknisis.
     */
    cursor?: TeknisiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teknisis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teknisis.
     */
    skip?: number
    distinct?: TeknisiScalarFieldEnum | TeknisiScalarFieldEnum[]
  }

  /**
   * Teknisi create
   */
  export type TeknisiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * The data needed to create a Teknisi.
     */
    data: XOR<TeknisiCreateInput, TeknisiUncheckedCreateInput>
  }

  /**
   * Teknisi createMany
   */
  export type TeknisiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teknisis.
     */
    data: TeknisiCreateManyInput | TeknisiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teknisi createManyAndReturn
   */
  export type TeknisiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Teknisis.
     */
    data: TeknisiCreateManyInput | TeknisiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Teknisi update
   */
  export type TeknisiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * The data needed to update a Teknisi.
     */
    data: XOR<TeknisiUpdateInput, TeknisiUncheckedUpdateInput>
    /**
     * Choose, which Teknisi to update.
     */
    where: TeknisiWhereUniqueInput
  }

  /**
   * Teknisi updateMany
   */
  export type TeknisiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teknisis.
     */
    data: XOR<TeknisiUpdateManyMutationInput, TeknisiUncheckedUpdateManyInput>
    /**
     * Filter which Teknisis to update
     */
    where?: TeknisiWhereInput
  }

  /**
   * Teknisi upsert
   */
  export type TeknisiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * The filter to search for the Teknisi to update in case it exists.
     */
    where: TeknisiWhereUniqueInput
    /**
     * In case the Teknisi found by the `where` argument doesn't exist, create a new Teknisi with this data.
     */
    create: XOR<TeknisiCreateInput, TeknisiUncheckedCreateInput>
    /**
     * In case the Teknisi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeknisiUpdateInput, TeknisiUncheckedUpdateInput>
  }

  /**
   * Teknisi delete
   */
  export type TeknisiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
    /**
     * Filter which Teknisi to delete.
     */
    where: TeknisiWhereUniqueInput
  }

  /**
   * Teknisi deleteMany
   */
  export type TeknisiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teknisis to delete
     */
    where?: TeknisiWhereInput
  }

  /**
   * Teknisi.user
   */
  export type Teknisi$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Teknisi.jadwal
   */
  export type Teknisi$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    cursor?: JadwalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Teknisi.laporan
   */
  export type Teknisi$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    cursor?: LaporanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Teknisi without action
   */
  export type TeknisiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teknisi
     */
    select?: TeknisiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeknisiInclude<ExtArgs> | null
  }


  /**
   * Model Lokasi
   */

  export type AggregateLokasi = {
    _count: LokasiCountAggregateOutputType | null
    _avg: LokasiAvgAggregateOutputType | null
    _sum: LokasiSumAggregateOutputType | null
    _min: LokasiMinAggregateOutputType | null
    _max: LokasiMaxAggregateOutputType | null
  }

  export type LokasiAvgAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type LokasiSumAggregateOutputType = {
    lat: number | null
    lng: number | null
  }

  export type LokasiMinAggregateOutputType = {
    id: string | null
    kode: string | null
    nama: string | null
    kota: string | null
    provinsi: string | null
    zona: string | null
    area: string | null
    deskripsi: string | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LokasiMaxAggregateOutputType = {
    id: string | null
    kode: string | null
    nama: string | null
    kota: string | null
    provinsi: string | null
    zona: string | null
    area: string | null
    deskripsi: string | null
    lat: number | null
    lng: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LokasiCountAggregateOutputType = {
    id: number
    kode: number
    nama: number
    kota: number
    provinsi: number
    zona: number
    area: number
    deskripsi: number
    lat: number
    lng: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LokasiAvgAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type LokasiSumAggregateInputType = {
    lat?: true
    lng?: true
  }

  export type LokasiMinAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    kota?: true
    provinsi?: true
    zona?: true
    area?: true
    deskripsi?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LokasiMaxAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    kota?: true
    provinsi?: true
    zona?: true
    area?: true
    deskripsi?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LokasiCountAggregateInputType = {
    id?: true
    kode?: true
    nama?: true
    kota?: true
    provinsi?: true
    zona?: true
    area?: true
    deskripsi?: true
    lat?: true
    lng?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LokasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lokasi to aggregate.
     */
    where?: LokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lokasis to fetch.
     */
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lokasis
    **/
    _count?: true | LokasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LokasiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LokasiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LokasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LokasiMaxAggregateInputType
  }

  export type GetLokasiAggregateType<T extends LokasiAggregateArgs> = {
        [P in keyof T & keyof AggregateLokasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLokasi[P]>
      : GetScalarType<T[P], AggregateLokasi[P]>
  }




  export type LokasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LokasiWhereInput
    orderBy?: LokasiOrderByWithAggregationInput | LokasiOrderByWithAggregationInput[]
    by: LokasiScalarFieldEnum[] | LokasiScalarFieldEnum
    having?: LokasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LokasiCountAggregateInputType | true
    _avg?: LokasiAvgAggregateInputType
    _sum?: LokasiSumAggregateInputType
    _min?: LokasiMinAggregateInputType
    _max?: LokasiMaxAggregateInputType
  }

  export type LokasiGroupByOutputType = {
    id: string
    kode: string
    nama: string
    kota: string
    provinsi: string | null
    zona: string | null
    area: string | null
    deskripsi: string | null
    lat: number | null
    lng: number | null
    createdAt: Date
    updatedAt: Date
    _count: LokasiCountAggregateOutputType | null
    _avg: LokasiAvgAggregateOutputType | null
    _sum: LokasiSumAggregateOutputType | null
    _min: LokasiMinAggregateOutputType | null
    _max: LokasiMaxAggregateOutputType | null
  }

  type GetLokasiGroupByPayload<T extends LokasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LokasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LokasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LokasiGroupByOutputType[P]>
            : GetScalarType<T[P], LokasiGroupByOutputType[P]>
        }
      >
    >


  export type LokasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    kota?: boolean
    provinsi?: boolean
    zona?: boolean
    area?: boolean
    deskripsi?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peralatan?: boolean | Lokasi$peralatanArgs<ExtArgs>
    _count?: boolean | LokasiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lokasi"]>

  export type LokasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    nama?: boolean
    kota?: boolean
    provinsi?: boolean
    zona?: boolean
    area?: boolean
    deskripsi?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["lokasi"]>

  export type LokasiSelectScalar = {
    id?: boolean
    kode?: boolean
    nama?: boolean
    kota?: boolean
    provinsi?: boolean
    zona?: boolean
    area?: boolean
    deskripsi?: boolean
    lat?: boolean
    lng?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LokasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peralatan?: boolean | Lokasi$peralatanArgs<ExtArgs>
    _count?: boolean | LokasiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LokasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LokasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lokasi"
    objects: {
      peralatan: Prisma.$PeralatanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kode: string
      nama: string
      kota: string
      provinsi: string | null
      zona: string | null
      area: string | null
      deskripsi: string | null
      lat: number | null
      lng: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["lokasi"]>
    composites: {}
  }

  type LokasiGetPayload<S extends boolean | null | undefined | LokasiDefaultArgs> = $Result.GetResult<Prisma.$LokasiPayload, S>

  type LokasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LokasiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LokasiCountAggregateInputType | true
    }

  export interface LokasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lokasi'], meta: { name: 'Lokasi' } }
    /**
     * Find zero or one Lokasi that matches the filter.
     * @param {LokasiFindUniqueArgs} args - Arguments to find a Lokasi
     * @example
     * // Get one Lokasi
     * const lokasi = await prisma.lokasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LokasiFindUniqueArgs>(args: SelectSubset<T, LokasiFindUniqueArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Lokasi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LokasiFindUniqueOrThrowArgs} args - Arguments to find a Lokasi
     * @example
     * // Get one Lokasi
     * const lokasi = await prisma.lokasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LokasiFindUniqueOrThrowArgs>(args: SelectSubset<T, LokasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Lokasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiFindFirstArgs} args - Arguments to find a Lokasi
     * @example
     * // Get one Lokasi
     * const lokasi = await prisma.lokasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LokasiFindFirstArgs>(args?: SelectSubset<T, LokasiFindFirstArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Lokasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiFindFirstOrThrowArgs} args - Arguments to find a Lokasi
     * @example
     * // Get one Lokasi
     * const lokasi = await prisma.lokasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LokasiFindFirstOrThrowArgs>(args?: SelectSubset<T, LokasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Lokasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lokasis
     * const lokasis = await prisma.lokasi.findMany()
     * 
     * // Get first 10 Lokasis
     * const lokasis = await prisma.lokasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lokasiWithIdOnly = await prisma.lokasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LokasiFindManyArgs>(args?: SelectSubset<T, LokasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Lokasi.
     * @param {LokasiCreateArgs} args - Arguments to create a Lokasi.
     * @example
     * // Create one Lokasi
     * const Lokasi = await prisma.lokasi.create({
     *   data: {
     *     // ... data to create a Lokasi
     *   }
     * })
     * 
     */
    create<T extends LokasiCreateArgs>(args: SelectSubset<T, LokasiCreateArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Lokasis.
     * @param {LokasiCreateManyArgs} args - Arguments to create many Lokasis.
     * @example
     * // Create many Lokasis
     * const lokasi = await prisma.lokasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LokasiCreateManyArgs>(args?: SelectSubset<T, LokasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lokasis and returns the data saved in the database.
     * @param {LokasiCreateManyAndReturnArgs} args - Arguments to create many Lokasis.
     * @example
     * // Create many Lokasis
     * const lokasi = await prisma.lokasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lokasis and only return the `id`
     * const lokasiWithIdOnly = await prisma.lokasi.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LokasiCreateManyAndReturnArgs>(args?: SelectSubset<T, LokasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Lokasi.
     * @param {LokasiDeleteArgs} args - Arguments to delete one Lokasi.
     * @example
     * // Delete one Lokasi
     * const Lokasi = await prisma.lokasi.delete({
     *   where: {
     *     // ... filter to delete one Lokasi
     *   }
     * })
     * 
     */
    delete<T extends LokasiDeleteArgs>(args: SelectSubset<T, LokasiDeleteArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Lokasi.
     * @param {LokasiUpdateArgs} args - Arguments to update one Lokasi.
     * @example
     * // Update one Lokasi
     * const lokasi = await prisma.lokasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LokasiUpdateArgs>(args: SelectSubset<T, LokasiUpdateArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Lokasis.
     * @param {LokasiDeleteManyArgs} args - Arguments to filter Lokasis to delete.
     * @example
     * // Delete a few Lokasis
     * const { count } = await prisma.lokasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LokasiDeleteManyArgs>(args?: SelectSubset<T, LokasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lokasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lokasis
     * const lokasi = await prisma.lokasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LokasiUpdateManyArgs>(args: SelectSubset<T, LokasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Lokasi.
     * @param {LokasiUpsertArgs} args - Arguments to update or create a Lokasi.
     * @example
     * // Update or create a Lokasi
     * const lokasi = await prisma.lokasi.upsert({
     *   create: {
     *     // ... data to create a Lokasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lokasi we want to update
     *   }
     * })
     */
    upsert<T extends LokasiUpsertArgs>(args: SelectSubset<T, LokasiUpsertArgs<ExtArgs>>): Prisma__LokasiClient<$Result.GetResult<Prisma.$LokasiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Lokasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiCountArgs} args - Arguments to filter Lokasis to count.
     * @example
     * // Count the number of Lokasis
     * const count = await prisma.lokasi.count({
     *   where: {
     *     // ... the filter for the Lokasis we want to count
     *   }
     * })
    **/
    count<T extends LokasiCountArgs>(
      args?: Subset<T, LokasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LokasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lokasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LokasiAggregateArgs>(args: Subset<T, LokasiAggregateArgs>): Prisma.PrismaPromise<GetLokasiAggregateType<T>>

    /**
     * Group by Lokasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LokasiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LokasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LokasiGroupByArgs['orderBy'] }
        : { orderBy?: LokasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LokasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLokasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lokasi model
   */
  readonly fields: LokasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lokasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LokasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peralatan<T extends Lokasi$peralatanArgs<ExtArgs> = {}>(args?: Subset<T, Lokasi$peralatanArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lokasi model
   */ 
  interface LokasiFieldRefs {
    readonly id: FieldRef<"Lokasi", 'String'>
    readonly kode: FieldRef<"Lokasi", 'String'>
    readonly nama: FieldRef<"Lokasi", 'String'>
    readonly kota: FieldRef<"Lokasi", 'String'>
    readonly provinsi: FieldRef<"Lokasi", 'String'>
    readonly zona: FieldRef<"Lokasi", 'String'>
    readonly area: FieldRef<"Lokasi", 'String'>
    readonly deskripsi: FieldRef<"Lokasi", 'String'>
    readonly lat: FieldRef<"Lokasi", 'Float'>
    readonly lng: FieldRef<"Lokasi", 'Float'>
    readonly createdAt: FieldRef<"Lokasi", 'DateTime'>
    readonly updatedAt: FieldRef<"Lokasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Lokasi findUnique
   */
  export type LokasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasi to fetch.
     */
    where: LokasiWhereUniqueInput
  }

  /**
   * Lokasi findUniqueOrThrow
   */
  export type LokasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasi to fetch.
     */
    where: LokasiWhereUniqueInput
  }

  /**
   * Lokasi findFirst
   */
  export type LokasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasi to fetch.
     */
    where?: LokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lokasis to fetch.
     */
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lokasis.
     */
    cursor?: LokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lokasis.
     */
    distinct?: LokasiScalarFieldEnum | LokasiScalarFieldEnum[]
  }

  /**
   * Lokasi findFirstOrThrow
   */
  export type LokasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasi to fetch.
     */
    where?: LokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lokasis to fetch.
     */
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lokasis.
     */
    cursor?: LokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lokasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lokasis.
     */
    distinct?: LokasiScalarFieldEnum | LokasiScalarFieldEnum[]
  }

  /**
   * Lokasi findMany
   */
  export type LokasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter, which Lokasis to fetch.
     */
    where?: LokasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lokasis to fetch.
     */
    orderBy?: LokasiOrderByWithRelationInput | LokasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lokasis.
     */
    cursor?: LokasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lokasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lokasis.
     */
    skip?: number
    distinct?: LokasiScalarFieldEnum | LokasiScalarFieldEnum[]
  }

  /**
   * Lokasi create
   */
  export type LokasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Lokasi.
     */
    data: XOR<LokasiCreateInput, LokasiUncheckedCreateInput>
  }

  /**
   * Lokasi createMany
   */
  export type LokasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lokasis.
     */
    data: LokasiCreateManyInput | LokasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lokasi createManyAndReturn
   */
  export type LokasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Lokasis.
     */
    data: LokasiCreateManyInput | LokasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lokasi update
   */
  export type LokasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Lokasi.
     */
    data: XOR<LokasiUpdateInput, LokasiUncheckedUpdateInput>
    /**
     * Choose, which Lokasi to update.
     */
    where: LokasiWhereUniqueInput
  }

  /**
   * Lokasi updateMany
   */
  export type LokasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lokasis.
     */
    data: XOR<LokasiUpdateManyMutationInput, LokasiUncheckedUpdateManyInput>
    /**
     * Filter which Lokasis to update
     */
    where?: LokasiWhereInput
  }

  /**
   * Lokasi upsert
   */
  export type LokasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Lokasi to update in case it exists.
     */
    where: LokasiWhereUniqueInput
    /**
     * In case the Lokasi found by the `where` argument doesn't exist, create a new Lokasi with this data.
     */
    create: XOR<LokasiCreateInput, LokasiUncheckedCreateInput>
    /**
     * In case the Lokasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LokasiUpdateInput, LokasiUncheckedUpdateInput>
  }

  /**
   * Lokasi delete
   */
  export type LokasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
    /**
     * Filter which Lokasi to delete.
     */
    where: LokasiWhereUniqueInput
  }

  /**
   * Lokasi deleteMany
   */
  export type LokasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lokasis to delete
     */
    where?: LokasiWhereInput
  }

  /**
   * Lokasi.peralatan
   */
  export type Lokasi$peralatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Peralatan
     */
    select?: PeralatanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PeralatanInclude<ExtArgs> | null
    where?: PeralatanWhereInput
    orderBy?: PeralatanOrderByWithRelationInput | PeralatanOrderByWithRelationInput[]
    cursor?: PeralatanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PeralatanScalarFieldEnum | PeralatanScalarFieldEnum[]
  }

  /**
   * Lokasi without action
   */
  export type LokasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lokasi
     */
    select?: LokasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LokasiInclude<ExtArgs> | null
  }


  /**
   * Model Jadwal
   */

  export type AggregateJadwal = {
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  export type JadwalMinAggregateOutputType = {
    id: string | null
    kodeJadwal: string | null
    peralatanId: string | null
    teknisiId: string | null
    tanggal: Date | null
    waktuMulai: string | null
    waktuSelesai: string | null
    status: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JadwalMaxAggregateOutputType = {
    id: string | null
    kodeJadwal: string | null
    peralatanId: string | null
    teknisiId: string | null
    tanggal: Date | null
    waktuMulai: string | null
    waktuSelesai: string | null
    status: string | null
    catatan: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JadwalCountAggregateOutputType = {
    id: number
    kodeJadwal: number
    peralatanId: number
    teknisiId: number
    tanggal: number
    waktuMulai: number
    waktuSelesai: number
    status: number
    catatan: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JadwalMinAggregateInputType = {
    id?: true
    kodeJadwal?: true
    peralatanId?: true
    teknisiId?: true
    tanggal?: true
    waktuMulai?: true
    waktuSelesai?: true
    status?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JadwalMaxAggregateInputType = {
    id?: true
    kodeJadwal?: true
    peralatanId?: true
    teknisiId?: true
    tanggal?: true
    waktuMulai?: true
    waktuSelesai?: true
    status?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JadwalCountAggregateInputType = {
    id?: true
    kodeJadwal?: true
    peralatanId?: true
    teknisiId?: true
    tanggal?: true
    waktuMulai?: true
    waktuSelesai?: true
    status?: true
    catatan?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JadwalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwal to aggregate.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jadwals
    **/
    _count?: true | JadwalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalMaxAggregateInputType
  }

  export type GetJadwalAggregateType<T extends JadwalAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwal[P]>
      : GetScalarType<T[P], AggregateJadwal[P]>
  }




  export type JadwalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JadwalWhereInput
    orderBy?: JadwalOrderByWithAggregationInput | JadwalOrderByWithAggregationInput[]
    by: JadwalScalarFieldEnum[] | JadwalScalarFieldEnum
    having?: JadwalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalCountAggregateInputType | true
    _min?: JadwalMinAggregateInputType
    _max?: JadwalMaxAggregateInputType
  }

  export type JadwalGroupByOutputType = {
    id: string
    kodeJadwal: string
    peralatanId: string
    teknisiId: string
    tanggal: Date
    waktuMulai: string
    waktuSelesai: string
    status: string
    catatan: string | null
    createdAt: Date
    updatedAt: Date
    _count: JadwalCountAggregateOutputType | null
    _min: JadwalMinAggregateOutputType | null
    _max: JadwalMaxAggregateOutputType | null
  }

  type GetJadwalGroupByPayload<T extends JadwalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JadwalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JadwalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JadwalGroupByOutputType[P]>
            : GetScalarType<T[P], JadwalGroupByOutputType[P]>
        }
      >
    >


  export type JadwalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeJadwal?: boolean
    peralatanId?: boolean
    teknisiId?: boolean
    tanggal?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
    status?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peralatan?: boolean | PeralatanDefaultArgs<ExtArgs>
    teknisi?: boolean | TeknisiDefaultArgs<ExtArgs>
    laporan?: boolean | Jadwal$laporanArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeJadwal?: boolean
    peralatanId?: boolean
    teknisiId?: boolean
    tanggal?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
    status?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    peralatan?: boolean | PeralatanDefaultArgs<ExtArgs>
    teknisi?: boolean | TeknisiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jadwal"]>

  export type JadwalSelectScalar = {
    id?: boolean
    kodeJadwal?: boolean
    peralatanId?: boolean
    teknisiId?: boolean
    tanggal?: boolean
    waktuMulai?: boolean
    waktuSelesai?: boolean
    status?: boolean
    catatan?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type JadwalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peralatan?: boolean | PeralatanDefaultArgs<ExtArgs>
    teknisi?: boolean | TeknisiDefaultArgs<ExtArgs>
    laporan?: boolean | Jadwal$laporanArgs<ExtArgs>
  }
  export type JadwalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    peralatan?: boolean | PeralatanDefaultArgs<ExtArgs>
    teknisi?: boolean | TeknisiDefaultArgs<ExtArgs>
  }

  export type $JadwalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Jadwal"
    objects: {
      peralatan: Prisma.$PeralatanPayload<ExtArgs>
      teknisi: Prisma.$TeknisiPayload<ExtArgs>
      laporan: Prisma.$LaporanPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kodeJadwal: string
      peralatanId: string
      teknisiId: string
      tanggal: Date
      waktuMulai: string
      waktuSelesai: string
      status: string
      catatan: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["jadwal"]>
    composites: {}
  }

  type JadwalGetPayload<S extends boolean | null | undefined | JadwalDefaultArgs> = $Result.GetResult<Prisma.$JadwalPayload, S>

  type JadwalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JadwalFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JadwalCountAggregateInputType | true
    }

  export interface JadwalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Jadwal'], meta: { name: 'Jadwal' } }
    /**
     * Find zero or one Jadwal that matches the filter.
     * @param {JadwalFindUniqueArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JadwalFindUniqueArgs>(args: SelectSubset<T, JadwalFindUniqueArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Jadwal that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {JadwalFindUniqueOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JadwalFindUniqueOrThrowArgs>(args: SelectSubset<T, JadwalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Jadwal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JadwalFindFirstArgs>(args?: SelectSubset<T, JadwalFindFirstArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Jadwal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindFirstOrThrowArgs} args - Arguments to find a Jadwal
     * @example
     * // Get one Jadwal
     * const jadwal = await prisma.jadwal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JadwalFindFirstOrThrowArgs>(args?: SelectSubset<T, JadwalFindFirstOrThrowArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Jadwals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jadwals
     * const jadwals = await prisma.jadwal.findMany()
     * 
     * // Get first 10 Jadwals
     * const jadwals = await prisma.jadwal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends JadwalFindManyArgs>(args?: SelectSubset<T, JadwalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Jadwal.
     * @param {JadwalCreateArgs} args - Arguments to create a Jadwal.
     * @example
     * // Create one Jadwal
     * const Jadwal = await prisma.jadwal.create({
     *   data: {
     *     // ... data to create a Jadwal
     *   }
     * })
     * 
     */
    create<T extends JadwalCreateArgs>(args: SelectSubset<T, JadwalCreateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Jadwals.
     * @param {JadwalCreateManyArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JadwalCreateManyArgs>(args?: SelectSubset<T, JadwalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jadwals and returns the data saved in the database.
     * @param {JadwalCreateManyAndReturnArgs} args - Arguments to create many Jadwals.
     * @example
     * // Create many Jadwals
     * const jadwal = await prisma.jadwal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jadwals and only return the `id`
     * const jadwalWithIdOnly = await prisma.jadwal.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JadwalCreateManyAndReturnArgs>(args?: SelectSubset<T, JadwalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Jadwal.
     * @param {JadwalDeleteArgs} args - Arguments to delete one Jadwal.
     * @example
     * // Delete one Jadwal
     * const Jadwal = await prisma.jadwal.delete({
     *   where: {
     *     // ... filter to delete one Jadwal
     *   }
     * })
     * 
     */
    delete<T extends JadwalDeleteArgs>(args: SelectSubset<T, JadwalDeleteArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Jadwal.
     * @param {JadwalUpdateArgs} args - Arguments to update one Jadwal.
     * @example
     * // Update one Jadwal
     * const jadwal = await prisma.jadwal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JadwalUpdateArgs>(args: SelectSubset<T, JadwalUpdateArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Jadwals.
     * @param {JadwalDeleteManyArgs} args - Arguments to filter Jadwals to delete.
     * @example
     * // Delete a few Jadwals
     * const { count } = await prisma.jadwal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JadwalDeleteManyArgs>(args?: SelectSubset<T, JadwalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jadwals
     * const jadwal = await prisma.jadwal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JadwalUpdateManyArgs>(args: SelectSubset<T, JadwalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Jadwal.
     * @param {JadwalUpsertArgs} args - Arguments to update or create a Jadwal.
     * @example
     * // Update or create a Jadwal
     * const jadwal = await prisma.jadwal.upsert({
     *   create: {
     *     // ... data to create a Jadwal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Jadwal we want to update
     *   }
     * })
     */
    upsert<T extends JadwalUpsertArgs>(args: SelectSubset<T, JadwalUpsertArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Jadwals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalCountArgs} args - Arguments to filter Jadwals to count.
     * @example
     * // Count the number of Jadwals
     * const count = await prisma.jadwal.count({
     *   where: {
     *     // ... the filter for the Jadwals we want to count
     *   }
     * })
    **/
    count<T extends JadwalCountArgs>(
      args?: Subset<T, JadwalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JadwalAggregateArgs>(args: Subset<T, JadwalAggregateArgs>): Prisma.PrismaPromise<GetJadwalAggregateType<T>>

    /**
     * Group by Jadwal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JadwalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalGroupByArgs['orderBy'] }
        : { orderBy?: JadwalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JadwalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Jadwal model
   */
  readonly fields: JadwalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Jadwal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JadwalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    peralatan<T extends PeralatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeralatanDefaultArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teknisi<T extends TeknisiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeknisiDefaultArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    laporan<T extends Jadwal$laporanArgs<ExtArgs> = {}>(args?: Subset<T, Jadwal$laporanArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Jadwal model
   */ 
  interface JadwalFieldRefs {
    readonly id: FieldRef<"Jadwal", 'String'>
    readonly kodeJadwal: FieldRef<"Jadwal", 'String'>
    readonly peralatanId: FieldRef<"Jadwal", 'String'>
    readonly teknisiId: FieldRef<"Jadwal", 'String'>
    readonly tanggal: FieldRef<"Jadwal", 'DateTime'>
    readonly waktuMulai: FieldRef<"Jadwal", 'String'>
    readonly waktuSelesai: FieldRef<"Jadwal", 'String'>
    readonly status: FieldRef<"Jadwal", 'String'>
    readonly catatan: FieldRef<"Jadwal", 'String'>
    readonly createdAt: FieldRef<"Jadwal", 'DateTime'>
    readonly updatedAt: FieldRef<"Jadwal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Jadwal findUnique
   */
  export type JadwalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findUniqueOrThrow
   */
  export type JadwalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal findFirst
   */
  export type JadwalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findFirstOrThrow
   */
  export type JadwalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwal to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jadwals.
     */
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal findMany
   */
  export type JadwalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter, which Jadwals to fetch.
     */
    where?: JadwalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jadwals to fetch.
     */
    orderBy?: JadwalOrderByWithRelationInput | JadwalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jadwals.
     */
    cursor?: JadwalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jadwals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jadwals.
     */
    skip?: number
    distinct?: JadwalScalarFieldEnum | JadwalScalarFieldEnum[]
  }

  /**
   * Jadwal create
   */
  export type JadwalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to create a Jadwal.
     */
    data: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
  }

  /**
   * Jadwal createMany
   */
  export type JadwalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Jadwal createManyAndReturn
   */
  export type JadwalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Jadwals.
     */
    data: JadwalCreateManyInput | JadwalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Jadwal update
   */
  export type JadwalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The data needed to update a Jadwal.
     */
    data: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
    /**
     * Choose, which Jadwal to update.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal updateMany
   */
  export type JadwalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jadwals.
     */
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyInput>
    /**
     * Filter which Jadwals to update
     */
    where?: JadwalWhereInput
  }

  /**
   * Jadwal upsert
   */
  export type JadwalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * The filter to search for the Jadwal to update in case it exists.
     */
    where: JadwalWhereUniqueInput
    /**
     * In case the Jadwal found by the `where` argument doesn't exist, create a new Jadwal with this data.
     */
    create: XOR<JadwalCreateInput, JadwalUncheckedCreateInput>
    /**
     * In case the Jadwal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JadwalUpdateInput, JadwalUncheckedUpdateInput>
  }

  /**
   * Jadwal delete
   */
  export type JadwalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    /**
     * Filter which Jadwal to delete.
     */
    where: JadwalWhereUniqueInput
  }

  /**
   * Jadwal deleteMany
   */
  export type JadwalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jadwals to delete
     */
    where?: JadwalWhereInput
  }

  /**
   * Jadwal.laporan
   */
  export type Jadwal$laporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    where?: LaporanWhereInput
  }

  /**
   * Jadwal without action
   */
  export type JadwalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
  }


  /**
   * Model Laporan
   */

  export type AggregateLaporan = {
    _count: LaporanCountAggregateOutputType | null
    _avg: LaporanAvgAggregateOutputType | null
    _sum: LaporanSumAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  export type LaporanAvgAggregateOutputType = {
    revisiCount: number | null
  }

  export type LaporanSumAggregateOutputType = {
    revisiCount: number | null
  }

  export type LaporanMinAggregateOutputType = {
    id: string | null
    kodeId: string | null
    jadwalId: string | null
    peralatanId: string | null
    teknisiId: string | null
    checklist: string | null
    pengukuran: string | null
    catatan: string | null
    fotoUrls: string | null
    kesimpulan: string | null
    status: string | null
    approvalNote: string | null
    approvedBy: string | null
    approvedAt: Date | null
    revisiCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaporanMaxAggregateOutputType = {
    id: string | null
    kodeId: string | null
    jadwalId: string | null
    peralatanId: string | null
    teknisiId: string | null
    checklist: string | null
    pengukuran: string | null
    catatan: string | null
    fotoUrls: string | null
    kesimpulan: string | null
    status: string | null
    approvalNote: string | null
    approvedBy: string | null
    approvedAt: Date | null
    revisiCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LaporanCountAggregateOutputType = {
    id: number
    kodeId: number
    jadwalId: number
    peralatanId: number
    teknisiId: number
    checklist: number
    pengukuran: number
    catatan: number
    fotoUrls: number
    kesimpulan: number
    status: number
    approvalNote: number
    approvedBy: number
    approvedAt: number
    revisiCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LaporanAvgAggregateInputType = {
    revisiCount?: true
  }

  export type LaporanSumAggregateInputType = {
    revisiCount?: true
  }

  export type LaporanMinAggregateInputType = {
    id?: true
    kodeId?: true
    jadwalId?: true
    peralatanId?: true
    teknisiId?: true
    checklist?: true
    pengukuran?: true
    catatan?: true
    fotoUrls?: true
    kesimpulan?: true
    status?: true
    approvalNote?: true
    approvedBy?: true
    approvedAt?: true
    revisiCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaporanMaxAggregateInputType = {
    id?: true
    kodeId?: true
    jadwalId?: true
    peralatanId?: true
    teknisiId?: true
    checklist?: true
    pengukuran?: true
    catatan?: true
    fotoUrls?: true
    kesimpulan?: true
    status?: true
    approvalNote?: true
    approvedBy?: true
    approvedAt?: true
    revisiCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LaporanCountAggregateInputType = {
    id?: true
    kodeId?: true
    jadwalId?: true
    peralatanId?: true
    teknisiId?: true
    checklist?: true
    pengukuran?: true
    catatan?: true
    fotoUrls?: true
    kesimpulan?: true
    status?: true
    approvalNote?: true
    approvedBy?: true
    approvedAt?: true
    revisiCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LaporanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporan to aggregate.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Laporans
    **/
    _count?: true | LaporanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LaporanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LaporanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanMaxAggregateInputType
  }

  export type GetLaporanAggregateType<T extends LaporanAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporan[P]>
      : GetScalarType<T[P], AggregateLaporan[P]>
  }




  export type LaporanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanWhereInput
    orderBy?: LaporanOrderByWithAggregationInput | LaporanOrderByWithAggregationInput[]
    by: LaporanScalarFieldEnum[] | LaporanScalarFieldEnum
    having?: LaporanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanCountAggregateInputType | true
    _avg?: LaporanAvgAggregateInputType
    _sum?: LaporanSumAggregateInputType
    _min?: LaporanMinAggregateInputType
    _max?: LaporanMaxAggregateInputType
  }

  export type LaporanGroupByOutputType = {
    id: string
    kodeId: string
    jadwalId: string | null
    peralatanId: string
    teknisiId: string
    checklist: string
    pengukuran: string | null
    catatan: string | null
    fotoUrls: string
    kesimpulan: string | null
    status: string
    approvalNote: string | null
    approvedBy: string | null
    approvedAt: Date | null
    revisiCount: number
    createdAt: Date
    updatedAt: Date
    _count: LaporanCountAggregateOutputType | null
    _avg: LaporanAvgAggregateOutputType | null
    _sum: LaporanSumAggregateOutputType | null
    _min: LaporanMinAggregateOutputType | null
    _max: LaporanMaxAggregateOutputType | null
  }

  type GetLaporanGroupByPayload<T extends LaporanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanGroupByOutputType[P]>
        }
      >
    >


  export type LaporanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeId?: boolean
    jadwalId?: boolean
    peralatanId?: boolean
    teknisiId?: boolean
    checklist?: boolean
    pengukuran?: boolean
    catatan?: boolean
    fotoUrls?: boolean
    kesimpulan?: boolean
    status?: boolean
    approvalNote?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    revisiCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jadwal?: boolean | Laporan$jadwalArgs<ExtArgs>
    peralatan?: boolean | PeralatanDefaultArgs<ExtArgs>
    teknisi?: boolean | TeknisiDefaultArgs<ExtArgs>
    timeline?: boolean | Laporan$timelineArgs<ExtArgs>
    _count?: boolean | LaporanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kodeId?: boolean
    jadwalId?: boolean
    peralatanId?: boolean
    teknisiId?: boolean
    checklist?: boolean
    pengukuran?: boolean
    catatan?: boolean
    fotoUrls?: boolean
    kesimpulan?: boolean
    status?: boolean
    approvalNote?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    revisiCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    jadwal?: boolean | Laporan$jadwalArgs<ExtArgs>
    peralatan?: boolean | PeralatanDefaultArgs<ExtArgs>
    teknisi?: boolean | TeknisiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporan"]>

  export type LaporanSelectScalar = {
    id?: boolean
    kodeId?: boolean
    jadwalId?: boolean
    peralatanId?: boolean
    teknisiId?: boolean
    checklist?: boolean
    pengukuran?: boolean
    catatan?: boolean
    fotoUrls?: boolean
    kesimpulan?: boolean
    status?: boolean
    approvalNote?: boolean
    approvedBy?: boolean
    approvedAt?: boolean
    revisiCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LaporanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | Laporan$jadwalArgs<ExtArgs>
    peralatan?: boolean | PeralatanDefaultArgs<ExtArgs>
    teknisi?: boolean | TeknisiDefaultArgs<ExtArgs>
    timeline?: boolean | Laporan$timelineArgs<ExtArgs>
    _count?: boolean | LaporanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LaporanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jadwal?: boolean | Laporan$jadwalArgs<ExtArgs>
    peralatan?: boolean | PeralatanDefaultArgs<ExtArgs>
    teknisi?: boolean | TeknisiDefaultArgs<ExtArgs>
  }

  export type $LaporanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Laporan"
    objects: {
      jadwal: Prisma.$JadwalPayload<ExtArgs> | null
      peralatan: Prisma.$PeralatanPayload<ExtArgs>
      teknisi: Prisma.$TeknisiPayload<ExtArgs>
      timeline: Prisma.$LaporanTimelinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      kodeId: string
      jadwalId: string | null
      peralatanId: string
      teknisiId: string
      checklist: string
      pengukuran: string | null
      catatan: string | null
      fotoUrls: string
      kesimpulan: string | null
      status: string
      approvalNote: string | null
      approvedBy: string | null
      approvedAt: Date | null
      revisiCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["laporan"]>
    composites: {}
  }

  type LaporanGetPayload<S extends boolean | null | undefined | LaporanDefaultArgs> = $Result.GetResult<Prisma.$LaporanPayload, S>

  type LaporanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LaporanFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LaporanCountAggregateInputType | true
    }

  export interface LaporanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Laporan'], meta: { name: 'Laporan' } }
    /**
     * Find zero or one Laporan that matches the filter.
     * @param {LaporanFindUniqueArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanFindUniqueArgs>(args: SelectSubset<T, LaporanFindUniqueArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Laporan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LaporanFindUniqueOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Laporan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanFindFirstArgs>(args?: SelectSubset<T, LaporanFindFirstArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Laporan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindFirstOrThrowArgs} args - Arguments to find a Laporan
     * @example
     * // Get one Laporan
     * const laporan = await prisma.laporan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Laporans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Laporans
     * const laporans = await prisma.laporan.findMany()
     * 
     * // Get first 10 Laporans
     * const laporans = await prisma.laporan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanWithIdOnly = await prisma.laporan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanFindManyArgs>(args?: SelectSubset<T, LaporanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Laporan.
     * @param {LaporanCreateArgs} args - Arguments to create a Laporan.
     * @example
     * // Create one Laporan
     * const Laporan = await prisma.laporan.create({
     *   data: {
     *     // ... data to create a Laporan
     *   }
     * })
     * 
     */
    create<T extends LaporanCreateArgs>(args: SelectSubset<T, LaporanCreateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Laporans.
     * @param {LaporanCreateManyArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanCreateManyArgs>(args?: SelectSubset<T, LaporanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Laporans and returns the data saved in the database.
     * @param {LaporanCreateManyAndReturnArgs} args - Arguments to create many Laporans.
     * @example
     * // Create many Laporans
     * const laporan = await prisma.laporan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Laporans and only return the `id`
     * const laporanWithIdOnly = await prisma.laporan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Laporan.
     * @param {LaporanDeleteArgs} args - Arguments to delete one Laporan.
     * @example
     * // Delete one Laporan
     * const Laporan = await prisma.laporan.delete({
     *   where: {
     *     // ... filter to delete one Laporan
     *   }
     * })
     * 
     */
    delete<T extends LaporanDeleteArgs>(args: SelectSubset<T, LaporanDeleteArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Laporan.
     * @param {LaporanUpdateArgs} args - Arguments to update one Laporan.
     * @example
     * // Update one Laporan
     * const laporan = await prisma.laporan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanUpdateArgs>(args: SelectSubset<T, LaporanUpdateArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Laporans.
     * @param {LaporanDeleteManyArgs} args - Arguments to filter Laporans to delete.
     * @example
     * // Delete a few Laporans
     * const { count } = await prisma.laporan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanDeleteManyArgs>(args?: SelectSubset<T, LaporanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Laporans
     * const laporan = await prisma.laporan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanUpdateManyArgs>(args: SelectSubset<T, LaporanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Laporan.
     * @param {LaporanUpsertArgs} args - Arguments to update or create a Laporan.
     * @example
     * // Update or create a Laporan
     * const laporan = await prisma.laporan.upsert({
     *   create: {
     *     // ... data to create a Laporan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Laporan we want to update
     *   }
     * })
     */
    upsert<T extends LaporanUpsertArgs>(args: SelectSubset<T, LaporanUpsertArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Laporans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanCountArgs} args - Arguments to filter Laporans to count.
     * @example
     * // Count the number of Laporans
     * const count = await prisma.laporan.count({
     *   where: {
     *     // ... the filter for the Laporans we want to count
     *   }
     * })
    **/
    count<T extends LaporanCountArgs>(
      args?: Subset<T, LaporanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaporanAggregateArgs>(args: Subset<T, LaporanAggregateArgs>): Prisma.PrismaPromise<GetLaporanAggregateType<T>>

    /**
     * Group by Laporan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaporanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanGroupByArgs['orderBy'] }
        : { orderBy?: LaporanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaporanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Laporan model
   */
  readonly fields: LaporanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Laporan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jadwal<T extends Laporan$jadwalArgs<ExtArgs> = {}>(args?: Subset<T, Laporan$jadwalArgs<ExtArgs>>): Prisma__JadwalClient<$Result.GetResult<Prisma.$JadwalPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    peralatan<T extends PeralatanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PeralatanDefaultArgs<ExtArgs>>): Prisma__PeralatanClient<$Result.GetResult<Prisma.$PeralatanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teknisi<T extends TeknisiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeknisiDefaultArgs<ExtArgs>>): Prisma__TeknisiClient<$Result.GetResult<Prisma.$TeknisiPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    timeline<T extends Laporan$timelineArgs<ExtArgs> = {}>(args?: Subset<T, Laporan$timelineArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Laporan model
   */ 
  interface LaporanFieldRefs {
    readonly id: FieldRef<"Laporan", 'String'>
    readonly kodeId: FieldRef<"Laporan", 'String'>
    readonly jadwalId: FieldRef<"Laporan", 'String'>
    readonly peralatanId: FieldRef<"Laporan", 'String'>
    readonly teknisiId: FieldRef<"Laporan", 'String'>
    readonly checklist: FieldRef<"Laporan", 'String'>
    readonly pengukuran: FieldRef<"Laporan", 'String'>
    readonly catatan: FieldRef<"Laporan", 'String'>
    readonly fotoUrls: FieldRef<"Laporan", 'String'>
    readonly kesimpulan: FieldRef<"Laporan", 'String'>
    readonly status: FieldRef<"Laporan", 'String'>
    readonly approvalNote: FieldRef<"Laporan", 'String'>
    readonly approvedBy: FieldRef<"Laporan", 'String'>
    readonly approvedAt: FieldRef<"Laporan", 'DateTime'>
    readonly revisiCount: FieldRef<"Laporan", 'Int'>
    readonly createdAt: FieldRef<"Laporan", 'DateTime'>
    readonly updatedAt: FieldRef<"Laporan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Laporan findUnique
   */
  export type LaporanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findUniqueOrThrow
   */
  export type LaporanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan findFirst
   */
  export type LaporanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findFirstOrThrow
   */
  export type LaporanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporan to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Laporans.
     */
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan findMany
   */
  export type LaporanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter, which Laporans to fetch.
     */
    where?: LaporanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Laporans to fetch.
     */
    orderBy?: LaporanOrderByWithRelationInput | LaporanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Laporans.
     */
    cursor?: LaporanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Laporans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Laporans.
     */
    skip?: number
    distinct?: LaporanScalarFieldEnum | LaporanScalarFieldEnum[]
  }

  /**
   * Laporan create
   */
  export type LaporanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to create a Laporan.
     */
    data: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
  }

  /**
   * Laporan createMany
   */
  export type LaporanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Laporan createManyAndReturn
   */
  export type LaporanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Laporans.
     */
    data: LaporanCreateManyInput | LaporanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Laporan update
   */
  export type LaporanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The data needed to update a Laporan.
     */
    data: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
    /**
     * Choose, which Laporan to update.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan updateMany
   */
  export type LaporanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Laporans.
     */
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyInput>
    /**
     * Filter which Laporans to update
     */
    where?: LaporanWhereInput
  }

  /**
   * Laporan upsert
   */
  export type LaporanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * The filter to search for the Laporan to update in case it exists.
     */
    where: LaporanWhereUniqueInput
    /**
     * In case the Laporan found by the `where` argument doesn't exist, create a new Laporan with this data.
     */
    create: XOR<LaporanCreateInput, LaporanUncheckedCreateInput>
    /**
     * In case the Laporan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanUpdateInput, LaporanUncheckedUpdateInput>
  }

  /**
   * Laporan delete
   */
  export type LaporanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
    /**
     * Filter which Laporan to delete.
     */
    where: LaporanWhereUniqueInput
  }

  /**
   * Laporan deleteMany
   */
  export type LaporanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Laporans to delete
     */
    where?: LaporanWhereInput
  }

  /**
   * Laporan.jadwal
   */
  export type Laporan$jadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Jadwal
     */
    select?: JadwalSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JadwalInclude<ExtArgs> | null
    where?: JadwalWhereInput
  }

  /**
   * Laporan.timeline
   */
  export type Laporan$timelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    where?: LaporanTimelineWhereInput
    orderBy?: LaporanTimelineOrderByWithRelationInput | LaporanTimelineOrderByWithRelationInput[]
    cursor?: LaporanTimelineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LaporanTimelineScalarFieldEnum | LaporanTimelineScalarFieldEnum[]
  }

  /**
   * Laporan without action
   */
  export type LaporanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Laporan
     */
    select?: LaporanSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanInclude<ExtArgs> | null
  }


  /**
   * Model LaporanTimeline
   */

  export type AggregateLaporanTimeline = {
    _count: LaporanTimelineCountAggregateOutputType | null
    _min: LaporanTimelineMinAggregateOutputType | null
    _max: LaporanTimelineMaxAggregateOutputType | null
  }

  export type LaporanTimelineMinAggregateOutputType = {
    id: string | null
    laporanId: string | null
    type: string | null
    description: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type LaporanTimelineMaxAggregateOutputType = {
    id: string | null
    laporanId: string | null
    type: string | null
    description: string | null
    createdBy: string | null
    createdAt: Date | null
  }

  export type LaporanTimelineCountAggregateOutputType = {
    id: number
    laporanId: number
    type: number
    description: number
    createdBy: number
    createdAt: number
    _all: number
  }


  export type LaporanTimelineMinAggregateInputType = {
    id?: true
    laporanId?: true
    type?: true
    description?: true
    createdBy?: true
    createdAt?: true
  }

  export type LaporanTimelineMaxAggregateInputType = {
    id?: true
    laporanId?: true
    type?: true
    description?: true
    createdBy?: true
    createdAt?: true
  }

  export type LaporanTimelineCountAggregateInputType = {
    id?: true
    laporanId?: true
    type?: true
    description?: true
    createdBy?: true
    createdAt?: true
    _all?: true
  }

  export type LaporanTimelineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanTimeline to aggregate.
     */
    where?: LaporanTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanTimelines to fetch.
     */
    orderBy?: LaporanTimelineOrderByWithRelationInput | LaporanTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LaporanTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LaporanTimelines
    **/
    _count?: true | LaporanTimelineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LaporanTimelineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LaporanTimelineMaxAggregateInputType
  }

  export type GetLaporanTimelineAggregateType<T extends LaporanTimelineAggregateArgs> = {
        [P in keyof T & keyof AggregateLaporanTimeline]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLaporanTimeline[P]>
      : GetScalarType<T[P], AggregateLaporanTimeline[P]>
  }




  export type LaporanTimelineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LaporanTimelineWhereInput
    orderBy?: LaporanTimelineOrderByWithAggregationInput | LaporanTimelineOrderByWithAggregationInput[]
    by: LaporanTimelineScalarFieldEnum[] | LaporanTimelineScalarFieldEnum
    having?: LaporanTimelineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LaporanTimelineCountAggregateInputType | true
    _min?: LaporanTimelineMinAggregateInputType
    _max?: LaporanTimelineMaxAggregateInputType
  }

  export type LaporanTimelineGroupByOutputType = {
    id: string
    laporanId: string
    type: string
    description: string
    createdBy: string | null
    createdAt: Date
    _count: LaporanTimelineCountAggregateOutputType | null
    _min: LaporanTimelineMinAggregateOutputType | null
    _max: LaporanTimelineMaxAggregateOutputType | null
  }

  type GetLaporanTimelineGroupByPayload<T extends LaporanTimelineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LaporanTimelineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LaporanTimelineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LaporanTimelineGroupByOutputType[P]>
            : GetScalarType<T[P], LaporanTimelineGroupByOutputType[P]>
        }
      >
    >


  export type LaporanTimelineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laporanId?: boolean
    type?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
    laporan?: boolean | LaporanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporanTimeline"]>

  export type LaporanTimelineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    laporanId?: boolean
    type?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
    laporan?: boolean | LaporanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["laporanTimeline"]>

  export type LaporanTimelineSelectScalar = {
    id?: boolean
    laporanId?: boolean
    type?: boolean
    description?: boolean
    createdBy?: boolean
    createdAt?: boolean
  }

  export type LaporanTimelineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | LaporanDefaultArgs<ExtArgs>
  }
  export type LaporanTimelineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    laporan?: boolean | LaporanDefaultArgs<ExtArgs>
  }

  export type $LaporanTimelinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LaporanTimeline"
    objects: {
      laporan: Prisma.$LaporanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      laporanId: string
      type: string
      description: string
      createdBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["laporanTimeline"]>
    composites: {}
  }

  type LaporanTimelineGetPayload<S extends boolean | null | undefined | LaporanTimelineDefaultArgs> = $Result.GetResult<Prisma.$LaporanTimelinePayload, S>

  type LaporanTimelineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LaporanTimelineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LaporanTimelineCountAggregateInputType | true
    }

  export interface LaporanTimelineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LaporanTimeline'], meta: { name: 'LaporanTimeline' } }
    /**
     * Find zero or one LaporanTimeline that matches the filter.
     * @param {LaporanTimelineFindUniqueArgs} args - Arguments to find a LaporanTimeline
     * @example
     * // Get one LaporanTimeline
     * const laporanTimeline = await prisma.laporanTimeline.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LaporanTimelineFindUniqueArgs>(args: SelectSubset<T, LaporanTimelineFindUniqueArgs<ExtArgs>>): Prisma__LaporanTimelineClient<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one LaporanTimeline that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {LaporanTimelineFindUniqueOrThrowArgs} args - Arguments to find a LaporanTimeline
     * @example
     * // Get one LaporanTimeline
     * const laporanTimeline = await prisma.laporanTimeline.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LaporanTimelineFindUniqueOrThrowArgs>(args: SelectSubset<T, LaporanTimelineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LaporanTimelineClient<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first LaporanTimeline that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanTimelineFindFirstArgs} args - Arguments to find a LaporanTimeline
     * @example
     * // Get one LaporanTimeline
     * const laporanTimeline = await prisma.laporanTimeline.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LaporanTimelineFindFirstArgs>(args?: SelectSubset<T, LaporanTimelineFindFirstArgs<ExtArgs>>): Prisma__LaporanTimelineClient<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first LaporanTimeline that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanTimelineFindFirstOrThrowArgs} args - Arguments to find a LaporanTimeline
     * @example
     * // Get one LaporanTimeline
     * const laporanTimeline = await prisma.laporanTimeline.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LaporanTimelineFindFirstOrThrowArgs>(args?: SelectSubset<T, LaporanTimelineFindFirstOrThrowArgs<ExtArgs>>): Prisma__LaporanTimelineClient<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more LaporanTimelines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanTimelineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LaporanTimelines
     * const laporanTimelines = await prisma.laporanTimeline.findMany()
     * 
     * // Get first 10 LaporanTimelines
     * const laporanTimelines = await prisma.laporanTimeline.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const laporanTimelineWithIdOnly = await prisma.laporanTimeline.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LaporanTimelineFindManyArgs>(args?: SelectSubset<T, LaporanTimelineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a LaporanTimeline.
     * @param {LaporanTimelineCreateArgs} args - Arguments to create a LaporanTimeline.
     * @example
     * // Create one LaporanTimeline
     * const LaporanTimeline = await prisma.laporanTimeline.create({
     *   data: {
     *     // ... data to create a LaporanTimeline
     *   }
     * })
     * 
     */
    create<T extends LaporanTimelineCreateArgs>(args: SelectSubset<T, LaporanTimelineCreateArgs<ExtArgs>>): Prisma__LaporanTimelineClient<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many LaporanTimelines.
     * @param {LaporanTimelineCreateManyArgs} args - Arguments to create many LaporanTimelines.
     * @example
     * // Create many LaporanTimelines
     * const laporanTimeline = await prisma.laporanTimeline.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LaporanTimelineCreateManyArgs>(args?: SelectSubset<T, LaporanTimelineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LaporanTimelines and returns the data saved in the database.
     * @param {LaporanTimelineCreateManyAndReturnArgs} args - Arguments to create many LaporanTimelines.
     * @example
     * // Create many LaporanTimelines
     * const laporanTimeline = await prisma.laporanTimeline.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LaporanTimelines and only return the `id`
     * const laporanTimelineWithIdOnly = await prisma.laporanTimeline.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LaporanTimelineCreateManyAndReturnArgs>(args?: SelectSubset<T, LaporanTimelineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a LaporanTimeline.
     * @param {LaporanTimelineDeleteArgs} args - Arguments to delete one LaporanTimeline.
     * @example
     * // Delete one LaporanTimeline
     * const LaporanTimeline = await prisma.laporanTimeline.delete({
     *   where: {
     *     // ... filter to delete one LaporanTimeline
     *   }
     * })
     * 
     */
    delete<T extends LaporanTimelineDeleteArgs>(args: SelectSubset<T, LaporanTimelineDeleteArgs<ExtArgs>>): Prisma__LaporanTimelineClient<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one LaporanTimeline.
     * @param {LaporanTimelineUpdateArgs} args - Arguments to update one LaporanTimeline.
     * @example
     * // Update one LaporanTimeline
     * const laporanTimeline = await prisma.laporanTimeline.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LaporanTimelineUpdateArgs>(args: SelectSubset<T, LaporanTimelineUpdateArgs<ExtArgs>>): Prisma__LaporanTimelineClient<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more LaporanTimelines.
     * @param {LaporanTimelineDeleteManyArgs} args - Arguments to filter LaporanTimelines to delete.
     * @example
     * // Delete a few LaporanTimelines
     * const { count } = await prisma.laporanTimeline.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LaporanTimelineDeleteManyArgs>(args?: SelectSubset<T, LaporanTimelineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LaporanTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanTimelineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LaporanTimelines
     * const laporanTimeline = await prisma.laporanTimeline.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LaporanTimelineUpdateManyArgs>(args: SelectSubset<T, LaporanTimelineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LaporanTimeline.
     * @param {LaporanTimelineUpsertArgs} args - Arguments to update or create a LaporanTimeline.
     * @example
     * // Update or create a LaporanTimeline
     * const laporanTimeline = await prisma.laporanTimeline.upsert({
     *   create: {
     *     // ... data to create a LaporanTimeline
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LaporanTimeline we want to update
     *   }
     * })
     */
    upsert<T extends LaporanTimelineUpsertArgs>(args: SelectSubset<T, LaporanTimelineUpsertArgs<ExtArgs>>): Prisma__LaporanTimelineClient<$Result.GetResult<Prisma.$LaporanTimelinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of LaporanTimelines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanTimelineCountArgs} args - Arguments to filter LaporanTimelines to count.
     * @example
     * // Count the number of LaporanTimelines
     * const count = await prisma.laporanTimeline.count({
     *   where: {
     *     // ... the filter for the LaporanTimelines we want to count
     *   }
     * })
    **/
    count<T extends LaporanTimelineCountArgs>(
      args?: Subset<T, LaporanTimelineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LaporanTimelineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LaporanTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanTimelineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LaporanTimelineAggregateArgs>(args: Subset<T, LaporanTimelineAggregateArgs>): Prisma.PrismaPromise<GetLaporanTimelineAggregateType<T>>

    /**
     * Group by LaporanTimeline.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LaporanTimelineGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LaporanTimelineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LaporanTimelineGroupByArgs['orderBy'] }
        : { orderBy?: LaporanTimelineGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LaporanTimelineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLaporanTimelineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LaporanTimeline model
   */
  readonly fields: LaporanTimelineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LaporanTimeline.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LaporanTimelineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    laporan<T extends LaporanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LaporanDefaultArgs<ExtArgs>>): Prisma__LaporanClient<$Result.GetResult<Prisma.$LaporanPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LaporanTimeline model
   */ 
  interface LaporanTimelineFieldRefs {
    readonly id: FieldRef<"LaporanTimeline", 'String'>
    readonly laporanId: FieldRef<"LaporanTimeline", 'String'>
    readonly type: FieldRef<"LaporanTimeline", 'String'>
    readonly description: FieldRef<"LaporanTimeline", 'String'>
    readonly createdBy: FieldRef<"LaporanTimeline", 'String'>
    readonly createdAt: FieldRef<"LaporanTimeline", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LaporanTimeline findUnique
   */
  export type LaporanTimelineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * Filter, which LaporanTimeline to fetch.
     */
    where: LaporanTimelineWhereUniqueInput
  }

  /**
   * LaporanTimeline findUniqueOrThrow
   */
  export type LaporanTimelineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * Filter, which LaporanTimeline to fetch.
     */
    where: LaporanTimelineWhereUniqueInput
  }

  /**
   * LaporanTimeline findFirst
   */
  export type LaporanTimelineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * Filter, which LaporanTimeline to fetch.
     */
    where?: LaporanTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanTimelines to fetch.
     */
    orderBy?: LaporanTimelineOrderByWithRelationInput | LaporanTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanTimelines.
     */
    cursor?: LaporanTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanTimelines.
     */
    distinct?: LaporanTimelineScalarFieldEnum | LaporanTimelineScalarFieldEnum[]
  }

  /**
   * LaporanTimeline findFirstOrThrow
   */
  export type LaporanTimelineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * Filter, which LaporanTimeline to fetch.
     */
    where?: LaporanTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanTimelines to fetch.
     */
    orderBy?: LaporanTimelineOrderByWithRelationInput | LaporanTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LaporanTimelines.
     */
    cursor?: LaporanTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanTimelines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LaporanTimelines.
     */
    distinct?: LaporanTimelineScalarFieldEnum | LaporanTimelineScalarFieldEnum[]
  }

  /**
   * LaporanTimeline findMany
   */
  export type LaporanTimelineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * Filter, which LaporanTimelines to fetch.
     */
    where?: LaporanTimelineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LaporanTimelines to fetch.
     */
    orderBy?: LaporanTimelineOrderByWithRelationInput | LaporanTimelineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LaporanTimelines.
     */
    cursor?: LaporanTimelineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LaporanTimelines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LaporanTimelines.
     */
    skip?: number
    distinct?: LaporanTimelineScalarFieldEnum | LaporanTimelineScalarFieldEnum[]
  }

  /**
   * LaporanTimeline create
   */
  export type LaporanTimelineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * The data needed to create a LaporanTimeline.
     */
    data: XOR<LaporanTimelineCreateInput, LaporanTimelineUncheckedCreateInput>
  }

  /**
   * LaporanTimeline createMany
   */
  export type LaporanTimelineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LaporanTimelines.
     */
    data: LaporanTimelineCreateManyInput | LaporanTimelineCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LaporanTimeline createManyAndReturn
   */
  export type LaporanTimelineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many LaporanTimelines.
     */
    data: LaporanTimelineCreateManyInput | LaporanTimelineCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LaporanTimeline update
   */
  export type LaporanTimelineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * The data needed to update a LaporanTimeline.
     */
    data: XOR<LaporanTimelineUpdateInput, LaporanTimelineUncheckedUpdateInput>
    /**
     * Choose, which LaporanTimeline to update.
     */
    where: LaporanTimelineWhereUniqueInput
  }

  /**
   * LaporanTimeline updateMany
   */
  export type LaporanTimelineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LaporanTimelines.
     */
    data: XOR<LaporanTimelineUpdateManyMutationInput, LaporanTimelineUncheckedUpdateManyInput>
    /**
     * Filter which LaporanTimelines to update
     */
    where?: LaporanTimelineWhereInput
  }

  /**
   * LaporanTimeline upsert
   */
  export type LaporanTimelineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * The filter to search for the LaporanTimeline to update in case it exists.
     */
    where: LaporanTimelineWhereUniqueInput
    /**
     * In case the LaporanTimeline found by the `where` argument doesn't exist, create a new LaporanTimeline with this data.
     */
    create: XOR<LaporanTimelineCreateInput, LaporanTimelineUncheckedCreateInput>
    /**
     * In case the LaporanTimeline was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LaporanTimelineUpdateInput, LaporanTimelineUncheckedUpdateInput>
  }

  /**
   * LaporanTimeline delete
   */
  export type LaporanTimelineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
    /**
     * Filter which LaporanTimeline to delete.
     */
    where: LaporanTimelineWhereUniqueInput
  }

  /**
   * LaporanTimeline deleteMany
   */
  export type LaporanTimelineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LaporanTimelines to delete
     */
    where?: LaporanTimelineWhereInput
  }

  /**
   * LaporanTimeline without action
   */
  export type LaporanTimelineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LaporanTimeline
     */
    select?: LaporanTimelineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LaporanTimelineInclude<ExtArgs> | null
  }


  /**
   * Model Notifikasi
   */

  export type AggregateNotifikasi = {
    _count: NotifikasiCountAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  export type NotifikasiMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotifikasiMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    message: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotifikasiCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    message: number
    link: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotifikasiMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotifikasiMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotifikasiCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    message?: true
    link?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotifikasiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifikasi to aggregate.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifikasis
    **/
    _count?: true | NotifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotifikasiMaxAggregateInputType
  }

  export type GetNotifikasiAggregateType<T extends NotifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateNotifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotifikasi[P]>
      : GetScalarType<T[P], AggregateNotifikasi[P]>
  }




  export type NotifikasiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotifikasiWhereInput
    orderBy?: NotifikasiOrderByWithAggregationInput | NotifikasiOrderByWithAggregationInput[]
    by: NotifikasiScalarFieldEnum[] | NotifikasiScalarFieldEnum
    having?: NotifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotifikasiCountAggregateInputType | true
    _min?: NotifikasiMinAggregateInputType
    _max?: NotifikasiMaxAggregateInputType
  }

  export type NotifikasiGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    message: string
    link: string | null
    isRead: boolean
    createdAt: Date
    _count: NotifikasiCountAggregateOutputType | null
    _min: NotifikasiMinAggregateOutputType | null
    _max: NotifikasiMaxAggregateOutputType | null
  }

  type GetNotifikasiGroupByPayload<T extends NotifikasiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], NotifikasiGroupByOutputType[P]>
        }
      >
    >


  export type NotifikasiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifikasi"]>

  export type NotifikasiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notifikasi"]>

  export type NotifikasiSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    message?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotifikasiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotifikasiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotifikasiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notifikasi"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      message: string
      link: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notifikasi"]>
    composites: {}
  }

  type NotifikasiGetPayload<S extends boolean | null | undefined | NotifikasiDefaultArgs> = $Result.GetResult<Prisma.$NotifikasiPayload, S>

  type NotifikasiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<NotifikasiFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: NotifikasiCountAggregateInputType | true
    }

  export interface NotifikasiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notifikasi'], meta: { name: 'Notifikasi' } }
    /**
     * Find zero or one Notifikasi that matches the filter.
     * @param {NotifikasiFindUniqueArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotifikasiFindUniqueArgs>(args: SelectSubset<T, NotifikasiFindUniqueArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Notifikasi that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {NotifikasiFindUniqueOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotifikasiFindUniqueOrThrowArgs>(args: SelectSubset<T, NotifikasiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Notifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindFirstArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotifikasiFindFirstArgs>(args?: SelectSubset<T, NotifikasiFindFirstArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Notifikasi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindFirstOrThrowArgs} args - Arguments to find a Notifikasi
     * @example
     * // Get one Notifikasi
     * const notifikasi = await prisma.notifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotifikasiFindFirstOrThrowArgs>(args?: SelectSubset<T, NotifikasiFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Notifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany()
     * 
     * // Get first 10 Notifikasis
     * const notifikasis = await prisma.notifikasi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notifikasiWithIdOnly = await prisma.notifikasi.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotifikasiFindManyArgs>(args?: SelectSubset<T, NotifikasiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Notifikasi.
     * @param {NotifikasiCreateArgs} args - Arguments to create a Notifikasi.
     * @example
     * // Create one Notifikasi
     * const Notifikasi = await prisma.notifikasi.create({
     *   data: {
     *     // ... data to create a Notifikasi
     *   }
     * })
     * 
     */
    create<T extends NotifikasiCreateArgs>(args: SelectSubset<T, NotifikasiCreateArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Notifikasis.
     * @param {NotifikasiCreateManyArgs} args - Arguments to create many Notifikasis.
     * @example
     * // Create many Notifikasis
     * const notifikasi = await prisma.notifikasi.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotifikasiCreateManyArgs>(args?: SelectSubset<T, NotifikasiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifikasis and returns the data saved in the database.
     * @param {NotifikasiCreateManyAndReturnArgs} args - Arguments to create many Notifikasis.
     * @example
     * // Create many Notifikasis
     * const notifikasi = await prisma.notifikasi.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifikasis and only return the `id`
     * const notifikasiWithIdOnly = await prisma.notifikasi.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotifikasiCreateManyAndReturnArgs>(args?: SelectSubset<T, NotifikasiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Notifikasi.
     * @param {NotifikasiDeleteArgs} args - Arguments to delete one Notifikasi.
     * @example
     * // Delete one Notifikasi
     * const Notifikasi = await prisma.notifikasi.delete({
     *   where: {
     *     // ... filter to delete one Notifikasi
     *   }
     * })
     * 
     */
    delete<T extends NotifikasiDeleteArgs>(args: SelectSubset<T, NotifikasiDeleteArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Notifikasi.
     * @param {NotifikasiUpdateArgs} args - Arguments to update one Notifikasi.
     * @example
     * // Update one Notifikasi
     * const notifikasi = await prisma.notifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotifikasiUpdateArgs>(args: SelectSubset<T, NotifikasiUpdateArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Notifikasis.
     * @param {NotifikasiDeleteManyArgs} args - Arguments to filter Notifikasis to delete.
     * @example
     * // Delete a few Notifikasis
     * const { count } = await prisma.notifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotifikasiDeleteManyArgs>(args?: SelectSubset<T, NotifikasiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifikasis
     * const notifikasi = await prisma.notifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotifikasiUpdateManyArgs>(args: SelectSubset<T, NotifikasiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notifikasi.
     * @param {NotifikasiUpsertArgs} args - Arguments to update or create a Notifikasi.
     * @example
     * // Update or create a Notifikasi
     * const notifikasi = await prisma.notifikasi.upsert({
     *   create: {
     *     // ... data to create a Notifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notifikasi we want to update
     *   }
     * })
     */
    upsert<T extends NotifikasiUpsertArgs>(args: SelectSubset<T, NotifikasiUpsertArgs<ExtArgs>>): Prisma__NotifikasiClient<$Result.GetResult<Prisma.$NotifikasiPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Notifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiCountArgs} args - Arguments to filter Notifikasis to count.
     * @example
     * // Count the number of Notifikasis
     * const count = await prisma.notifikasi.count({
     *   where: {
     *     // ... the filter for the Notifikasis we want to count
     *   }
     * })
    **/
    count<T extends NotifikasiCountArgs>(
      args?: Subset<T, NotifikasiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotifikasiAggregateArgs>(args: Subset<T, NotifikasiAggregateArgs>): Prisma.PrismaPromise<GetNotifikasiAggregateType<T>>

    /**
     * Group by Notifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotifikasiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotifikasiGroupByArgs['orderBy'] }
        : { orderBy?: NotifikasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotifikasiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notifikasi model
   */
  readonly fields: NotifikasiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotifikasiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notifikasi model
   */ 
  interface NotifikasiFieldRefs {
    readonly id: FieldRef<"Notifikasi", 'String'>
    readonly userId: FieldRef<"Notifikasi", 'String'>
    readonly type: FieldRef<"Notifikasi", 'String'>
    readonly title: FieldRef<"Notifikasi", 'String'>
    readonly message: FieldRef<"Notifikasi", 'String'>
    readonly link: FieldRef<"Notifikasi", 'String'>
    readonly isRead: FieldRef<"Notifikasi", 'Boolean'>
    readonly createdAt: FieldRef<"Notifikasi", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notifikasi findUnique
   */
  export type NotifikasiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi findUniqueOrThrow
   */
  export type NotifikasiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi findFirst
   */
  export type NotifikasiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi findFirstOrThrow
   */
  export type NotifikasiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasi to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifikasis.
     */
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi findMany
   */
  export type NotifikasiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter, which Notifikasis to fetch.
     */
    where?: NotifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifikasis to fetch.
     */
    orderBy?: NotifikasiOrderByWithRelationInput | NotifikasiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifikasis.
     */
    cursor?: NotifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifikasis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifikasis.
     */
    skip?: number
    distinct?: NotifikasiScalarFieldEnum | NotifikasiScalarFieldEnum[]
  }

  /**
   * Notifikasi create
   */
  export type NotifikasiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * The data needed to create a Notifikasi.
     */
    data: XOR<NotifikasiCreateInput, NotifikasiUncheckedCreateInput>
  }

  /**
   * Notifikasi createMany
   */
  export type NotifikasiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifikasis.
     */
    data: NotifikasiCreateManyInput | NotifikasiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notifikasi createManyAndReturn
   */
  export type NotifikasiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Notifikasis.
     */
    data: NotifikasiCreateManyInput | NotifikasiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notifikasi update
   */
  export type NotifikasiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * The data needed to update a Notifikasi.
     */
    data: XOR<NotifikasiUpdateInput, NotifikasiUncheckedUpdateInput>
    /**
     * Choose, which Notifikasi to update.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi updateMany
   */
  export type NotifikasiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifikasis.
     */
    data: XOR<NotifikasiUpdateManyMutationInput, NotifikasiUncheckedUpdateManyInput>
    /**
     * Filter which Notifikasis to update
     */
    where?: NotifikasiWhereInput
  }

  /**
   * Notifikasi upsert
   */
  export type NotifikasiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * The filter to search for the Notifikasi to update in case it exists.
     */
    where: NotifikasiWhereUniqueInput
    /**
     * In case the Notifikasi found by the `where` argument doesn't exist, create a new Notifikasi with this data.
     */
    create: XOR<NotifikasiCreateInput, NotifikasiUncheckedCreateInput>
    /**
     * In case the Notifikasi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotifikasiUpdateInput, NotifikasiUncheckedUpdateInput>
  }

  /**
   * Notifikasi delete
   */
  export type NotifikasiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
    /**
     * Filter which Notifikasi to delete.
     */
    where: NotifikasiWhereUniqueInput
  }

  /**
   * Notifikasi deleteMany
   */
  export type NotifikasiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifikasis to delete
     */
    where?: NotifikasiWhereInput
  }

  /**
   * Notifikasi without action
   */
  export type NotifikasiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notifikasi
     */
    select?: NotifikasiSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotifikasiInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PeralatanScalarFieldEnum: {
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

  export type PeralatanScalarFieldEnum = (typeof PeralatanScalarFieldEnum)[keyof typeof PeralatanScalarFieldEnum]


  export const JenisPeralatanScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt'
  };

  export type JenisPeralatanScalarFieldEnum = (typeof JenisPeralatanScalarFieldEnum)[keyof typeof JenisPeralatanScalarFieldEnum]


  export const TeknisiScalarFieldEnum: {
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

  export type TeknisiScalarFieldEnum = (typeof TeknisiScalarFieldEnum)[keyof typeof TeknisiScalarFieldEnum]


  export const LokasiScalarFieldEnum: {
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

  export type LokasiScalarFieldEnum = (typeof LokasiScalarFieldEnum)[keyof typeof LokasiScalarFieldEnum]


  export const JadwalScalarFieldEnum: {
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

  export type JadwalScalarFieldEnum = (typeof JadwalScalarFieldEnum)[keyof typeof JadwalScalarFieldEnum]


  export const LaporanScalarFieldEnum: {
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

  export type LaporanScalarFieldEnum = (typeof LaporanScalarFieldEnum)[keyof typeof LaporanScalarFieldEnum]


  export const LaporanTimelineScalarFieldEnum: {
    id: 'id',
    laporanId: 'laporanId',
    type: 'type',
    description: 'description',
    createdBy: 'createdBy',
    createdAt: 'createdAt'
  };

  export type LaporanTimelineScalarFieldEnum = (typeof LaporanTimelineScalarFieldEnum)[keyof typeof LaporanTimelineScalarFieldEnum]


  export const NotifikasiScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    message: 'message',
    link: 'link',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotifikasiScalarFieldEnum = (typeof NotifikasiScalarFieldEnum)[keyof typeof NotifikasiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teknisi?: XOR<TeknisiNullableRelationFilter, TeknisiWhereInput> | null
    notifikasi?: NotifikasiListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    teknisi?: TeknisiOrderByWithRelationInput
    notifikasi?: NotifikasiOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    avatarUrl?: StringNullableFilter<"User"> | string | null
    isActive?: BoolFilter<"User"> | boolean
    refreshToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    teknisi?: XOR<TeknisiNullableRelationFilter, TeknisiWhereInput> | null
    notifikasi?: NotifikasiListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PeralatanWhereInput = {
    AND?: PeralatanWhereInput | PeralatanWhereInput[]
    OR?: PeralatanWhereInput[]
    NOT?: PeralatanWhereInput | PeralatanWhereInput[]
    id?: StringFilter<"Peralatan"> | string
    kodeId?: StringFilter<"Peralatan"> | string
    nama?: StringFilter<"Peralatan"> | string
    jenis?: StringFilter<"Peralatan"> | string
    lokasi?: StringFilter<"Peralatan"> | string
    noRegister?: StringNullableFilter<"Peralatan"> | string | null
    fotoUrl?: StringNullableFilter<"Peralatan"> | string | null
    kapasitas?: StringNullableFilter<"Peralatan"> | string | null
    tinggiDimensi?: StringNullableFilter<"Peralatan"> | string | null
    jenisKabel?: StringNullableFilter<"Peralatan"> | string | null
    masaBerlaku?: DateTimeNullableFilter<"Peralatan"> | Date | string | null
    lat?: FloatNullableFilter<"Peralatan"> | number | null
    lng?: FloatNullableFilter<"Peralatan"> | number | null
    status?: StringFilter<"Peralatan"> | string
    qrCodeUrl?: StringNullableFilter<"Peralatan"> | string | null
    createdAt?: DateTimeFilter<"Peralatan"> | Date | string
    lokasiId?: StringNullableFilter<"Peralatan"> | string | null
    jadwal?: JadwalListRelationFilter
    laporan?: LaporanListRelationFilter
    lokasiRelation?: XOR<LokasiNullableRelationFilter, LokasiWhereInput> | null
  }

  export type PeralatanOrderByWithRelationInput = {
    id?: SortOrder
    kodeId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    lokasi?: SortOrder
    noRegister?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    kapasitas?: SortOrderInput | SortOrder
    tinggiDimensi?: SortOrderInput | SortOrder
    jenisKabel?: SortOrderInput | SortOrder
    masaBerlaku?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    status?: SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lokasiId?: SortOrderInput | SortOrder
    jadwal?: JadwalOrderByRelationAggregateInput
    laporan?: LaporanOrderByRelationAggregateInput
    lokasiRelation?: LokasiOrderByWithRelationInput
  }

  export type PeralatanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kodeId?: string
    AND?: PeralatanWhereInput | PeralatanWhereInput[]
    OR?: PeralatanWhereInput[]
    NOT?: PeralatanWhereInput | PeralatanWhereInput[]
    nama?: StringFilter<"Peralatan"> | string
    jenis?: StringFilter<"Peralatan"> | string
    lokasi?: StringFilter<"Peralatan"> | string
    noRegister?: StringNullableFilter<"Peralatan"> | string | null
    fotoUrl?: StringNullableFilter<"Peralatan"> | string | null
    kapasitas?: StringNullableFilter<"Peralatan"> | string | null
    tinggiDimensi?: StringNullableFilter<"Peralatan"> | string | null
    jenisKabel?: StringNullableFilter<"Peralatan"> | string | null
    masaBerlaku?: DateTimeNullableFilter<"Peralatan"> | Date | string | null
    lat?: FloatNullableFilter<"Peralatan"> | number | null
    lng?: FloatNullableFilter<"Peralatan"> | number | null
    status?: StringFilter<"Peralatan"> | string
    qrCodeUrl?: StringNullableFilter<"Peralatan"> | string | null
    createdAt?: DateTimeFilter<"Peralatan"> | Date | string
    lokasiId?: StringNullableFilter<"Peralatan"> | string | null
    jadwal?: JadwalListRelationFilter
    laporan?: LaporanListRelationFilter
    lokasiRelation?: XOR<LokasiNullableRelationFilter, LokasiWhereInput> | null
  }, "id" | "kodeId">

  export type PeralatanOrderByWithAggregationInput = {
    id?: SortOrder
    kodeId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    lokasi?: SortOrder
    noRegister?: SortOrderInput | SortOrder
    fotoUrl?: SortOrderInput | SortOrder
    kapasitas?: SortOrderInput | SortOrder
    tinggiDimensi?: SortOrderInput | SortOrder
    jenisKabel?: SortOrderInput | SortOrder
    masaBerlaku?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    status?: SortOrder
    qrCodeUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    lokasiId?: SortOrderInput | SortOrder
    _count?: PeralatanCountOrderByAggregateInput
    _avg?: PeralatanAvgOrderByAggregateInput
    _max?: PeralatanMaxOrderByAggregateInput
    _min?: PeralatanMinOrderByAggregateInput
    _sum?: PeralatanSumOrderByAggregateInput
  }

  export type PeralatanScalarWhereWithAggregatesInput = {
    AND?: PeralatanScalarWhereWithAggregatesInput | PeralatanScalarWhereWithAggregatesInput[]
    OR?: PeralatanScalarWhereWithAggregatesInput[]
    NOT?: PeralatanScalarWhereWithAggregatesInput | PeralatanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Peralatan"> | string
    kodeId?: StringWithAggregatesFilter<"Peralatan"> | string
    nama?: StringWithAggregatesFilter<"Peralatan"> | string
    jenis?: StringWithAggregatesFilter<"Peralatan"> | string
    lokasi?: StringWithAggregatesFilter<"Peralatan"> | string
    noRegister?: StringNullableWithAggregatesFilter<"Peralatan"> | string | null
    fotoUrl?: StringNullableWithAggregatesFilter<"Peralatan"> | string | null
    kapasitas?: StringNullableWithAggregatesFilter<"Peralatan"> | string | null
    tinggiDimensi?: StringNullableWithAggregatesFilter<"Peralatan"> | string | null
    jenisKabel?: StringNullableWithAggregatesFilter<"Peralatan"> | string | null
    masaBerlaku?: DateTimeNullableWithAggregatesFilter<"Peralatan"> | Date | string | null
    lat?: FloatNullableWithAggregatesFilter<"Peralatan"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Peralatan"> | number | null
    status?: StringWithAggregatesFilter<"Peralatan"> | string
    qrCodeUrl?: StringNullableWithAggregatesFilter<"Peralatan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Peralatan"> | Date | string
    lokasiId?: StringNullableWithAggregatesFilter<"Peralatan"> | string | null
  }

  export type JenisPeralatanWhereInput = {
    AND?: JenisPeralatanWhereInput | JenisPeralatanWhereInput[]
    OR?: JenisPeralatanWhereInput[]
    NOT?: JenisPeralatanWhereInput | JenisPeralatanWhereInput[]
    id?: StringFilter<"JenisPeralatan"> | string
    nama?: StringFilter<"JenisPeralatan"> | string
    deskripsi?: StringNullableFilter<"JenisPeralatan"> | string | null
    createdAt?: DateTimeFilter<"JenisPeralatan"> | Date | string
  }

  export type JenisPeralatanOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type JenisPeralatanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nama?: string
    AND?: JenisPeralatanWhereInput | JenisPeralatanWhereInput[]
    OR?: JenisPeralatanWhereInput[]
    NOT?: JenisPeralatanWhereInput | JenisPeralatanWhereInput[]
    deskripsi?: StringNullableFilter<"JenisPeralatan"> | string | null
    createdAt?: DateTimeFilter<"JenisPeralatan"> | Date | string
  }, "id" | "nama">

  export type JenisPeralatanOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: JenisPeralatanCountOrderByAggregateInput
    _max?: JenisPeralatanMaxOrderByAggregateInput
    _min?: JenisPeralatanMinOrderByAggregateInput
  }

  export type JenisPeralatanScalarWhereWithAggregatesInput = {
    AND?: JenisPeralatanScalarWhereWithAggregatesInput | JenisPeralatanScalarWhereWithAggregatesInput[]
    OR?: JenisPeralatanScalarWhereWithAggregatesInput[]
    NOT?: JenisPeralatanScalarWhereWithAggregatesInput | JenisPeralatanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JenisPeralatan"> | string
    nama?: StringWithAggregatesFilter<"JenisPeralatan"> | string
    deskripsi?: StringNullableWithAggregatesFilter<"JenisPeralatan"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"JenisPeralatan"> | Date | string
  }

  export type TeknisiWhereInput = {
    AND?: TeknisiWhereInput | TeknisiWhereInput[]
    OR?: TeknisiWhereInput[]
    NOT?: TeknisiWhereInput | TeknisiWhereInput[]
    id?: StringFilter<"Teknisi"> | string
    userId?: StringNullableFilter<"Teknisi"> | string | null
    nama?: StringFilter<"Teknisi"> | string
    idKaryawan?: StringFilter<"Teknisi"> | string
    email?: StringFilter<"Teknisi"> | string
    noHp?: StringNullableFilter<"Teknisi"> | string | null
    divisi?: StringFilter<"Teknisi"> | string
    avatarUrl?: StringNullableFilter<"Teknisi"> | string | null
    status?: StringFilter<"Teknisi"> | string
    totalInspeksi?: IntFilter<"Teknisi"> | number
    rating?: FloatFilter<"Teknisi"> | number
    createdAt?: DateTimeFilter<"Teknisi"> | Date | string
    updatedAt?: DateTimeFilter<"Teknisi"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    jadwal?: JadwalListRelationFilter
    laporan?: LaporanListRelationFilter
  }

  export type TeknisiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    nama?: SortOrder
    idKaryawan?: SortOrder
    email?: SortOrder
    noHp?: SortOrderInput | SortOrder
    divisi?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    totalInspeksi?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    jadwal?: JadwalOrderByRelationAggregateInput
    laporan?: LaporanOrderByRelationAggregateInput
  }

  export type TeknisiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    idKaryawan?: string
    email?: string
    AND?: TeknisiWhereInput | TeknisiWhereInput[]
    OR?: TeknisiWhereInput[]
    NOT?: TeknisiWhereInput | TeknisiWhereInput[]
    nama?: StringFilter<"Teknisi"> | string
    noHp?: StringNullableFilter<"Teknisi"> | string | null
    divisi?: StringFilter<"Teknisi"> | string
    avatarUrl?: StringNullableFilter<"Teknisi"> | string | null
    status?: StringFilter<"Teknisi"> | string
    totalInspeksi?: IntFilter<"Teknisi"> | number
    rating?: FloatFilter<"Teknisi"> | number
    createdAt?: DateTimeFilter<"Teknisi"> | Date | string
    updatedAt?: DateTimeFilter<"Teknisi"> | Date | string
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    jadwal?: JadwalListRelationFilter
    laporan?: LaporanListRelationFilter
  }, "id" | "userId" | "idKaryawan" | "email">

  export type TeknisiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    nama?: SortOrder
    idKaryawan?: SortOrder
    email?: SortOrder
    noHp?: SortOrderInput | SortOrder
    divisi?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    totalInspeksi?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TeknisiCountOrderByAggregateInput
    _avg?: TeknisiAvgOrderByAggregateInput
    _max?: TeknisiMaxOrderByAggregateInput
    _min?: TeknisiMinOrderByAggregateInput
    _sum?: TeknisiSumOrderByAggregateInput
  }

  export type TeknisiScalarWhereWithAggregatesInput = {
    AND?: TeknisiScalarWhereWithAggregatesInput | TeknisiScalarWhereWithAggregatesInput[]
    OR?: TeknisiScalarWhereWithAggregatesInput[]
    NOT?: TeknisiScalarWhereWithAggregatesInput | TeknisiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Teknisi"> | string
    userId?: StringNullableWithAggregatesFilter<"Teknisi"> | string | null
    nama?: StringWithAggregatesFilter<"Teknisi"> | string
    idKaryawan?: StringWithAggregatesFilter<"Teknisi"> | string
    email?: StringWithAggregatesFilter<"Teknisi"> | string
    noHp?: StringNullableWithAggregatesFilter<"Teknisi"> | string | null
    divisi?: StringWithAggregatesFilter<"Teknisi"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Teknisi"> | string | null
    status?: StringWithAggregatesFilter<"Teknisi"> | string
    totalInspeksi?: IntWithAggregatesFilter<"Teknisi"> | number
    rating?: FloatWithAggregatesFilter<"Teknisi"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Teknisi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Teknisi"> | Date | string
  }

  export type LokasiWhereInput = {
    AND?: LokasiWhereInput | LokasiWhereInput[]
    OR?: LokasiWhereInput[]
    NOT?: LokasiWhereInput | LokasiWhereInput[]
    id?: StringFilter<"Lokasi"> | string
    kode?: StringFilter<"Lokasi"> | string
    nama?: StringFilter<"Lokasi"> | string
    kota?: StringFilter<"Lokasi"> | string
    provinsi?: StringNullableFilter<"Lokasi"> | string | null
    zona?: StringNullableFilter<"Lokasi"> | string | null
    area?: StringNullableFilter<"Lokasi"> | string | null
    deskripsi?: StringNullableFilter<"Lokasi"> | string | null
    lat?: FloatNullableFilter<"Lokasi"> | number | null
    lng?: FloatNullableFilter<"Lokasi"> | number | null
    createdAt?: DateTimeFilter<"Lokasi"> | Date | string
    updatedAt?: DateTimeFilter<"Lokasi"> | Date | string
    peralatan?: PeralatanListRelationFilter
  }

  export type LokasiOrderByWithRelationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
    provinsi?: SortOrderInput | SortOrder
    zona?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    peralatan?: PeralatanOrderByRelationAggregateInput
  }

  export type LokasiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kode?: string
    AND?: LokasiWhereInput | LokasiWhereInput[]
    OR?: LokasiWhereInput[]
    NOT?: LokasiWhereInput | LokasiWhereInput[]
    nama?: StringFilter<"Lokasi"> | string
    kota?: StringFilter<"Lokasi"> | string
    provinsi?: StringNullableFilter<"Lokasi"> | string | null
    zona?: StringNullableFilter<"Lokasi"> | string | null
    area?: StringNullableFilter<"Lokasi"> | string | null
    deskripsi?: StringNullableFilter<"Lokasi"> | string | null
    lat?: FloatNullableFilter<"Lokasi"> | number | null
    lng?: FloatNullableFilter<"Lokasi"> | number | null
    createdAt?: DateTimeFilter<"Lokasi"> | Date | string
    updatedAt?: DateTimeFilter<"Lokasi"> | Date | string
    peralatan?: PeralatanListRelationFilter
  }, "id" | "kode">

  export type LokasiOrderByWithAggregationInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
    provinsi?: SortOrderInput | SortOrder
    zona?: SortOrderInput | SortOrder
    area?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    lat?: SortOrderInput | SortOrder
    lng?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LokasiCountOrderByAggregateInput
    _avg?: LokasiAvgOrderByAggregateInput
    _max?: LokasiMaxOrderByAggregateInput
    _min?: LokasiMinOrderByAggregateInput
    _sum?: LokasiSumOrderByAggregateInput
  }

  export type LokasiScalarWhereWithAggregatesInput = {
    AND?: LokasiScalarWhereWithAggregatesInput | LokasiScalarWhereWithAggregatesInput[]
    OR?: LokasiScalarWhereWithAggregatesInput[]
    NOT?: LokasiScalarWhereWithAggregatesInput | LokasiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Lokasi"> | string
    kode?: StringWithAggregatesFilter<"Lokasi"> | string
    nama?: StringWithAggregatesFilter<"Lokasi"> | string
    kota?: StringWithAggregatesFilter<"Lokasi"> | string
    provinsi?: StringNullableWithAggregatesFilter<"Lokasi"> | string | null
    zona?: StringNullableWithAggregatesFilter<"Lokasi"> | string | null
    area?: StringNullableWithAggregatesFilter<"Lokasi"> | string | null
    deskripsi?: StringNullableWithAggregatesFilter<"Lokasi"> | string | null
    lat?: FloatNullableWithAggregatesFilter<"Lokasi"> | number | null
    lng?: FloatNullableWithAggregatesFilter<"Lokasi"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Lokasi"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lokasi"> | Date | string
  }

  export type JadwalWhereInput = {
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    id?: StringFilter<"Jadwal"> | string
    kodeJadwal?: StringFilter<"Jadwal"> | string
    peralatanId?: StringFilter<"Jadwal"> | string
    teknisiId?: StringFilter<"Jadwal"> | string
    tanggal?: DateTimeFilter<"Jadwal"> | Date | string
    waktuMulai?: StringFilter<"Jadwal"> | string
    waktuSelesai?: StringFilter<"Jadwal"> | string
    status?: StringFilter<"Jadwal"> | string
    catatan?: StringNullableFilter<"Jadwal"> | string | null
    createdAt?: DateTimeFilter<"Jadwal"> | Date | string
    updatedAt?: DateTimeFilter<"Jadwal"> | Date | string
    peralatan?: XOR<PeralatanRelationFilter, PeralatanWhereInput>
    teknisi?: XOR<TeknisiRelationFilter, TeknisiWhereInput>
    laporan?: XOR<LaporanNullableRelationFilter, LaporanWhereInput> | null
  }

  export type JadwalOrderByWithRelationInput = {
    id?: SortOrder
    kodeJadwal?: SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    tanggal?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    status?: SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    peralatan?: PeralatanOrderByWithRelationInput
    teknisi?: TeknisiOrderByWithRelationInput
    laporan?: LaporanOrderByWithRelationInput
  }

  export type JadwalWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kodeJadwal?: string
    AND?: JadwalWhereInput | JadwalWhereInput[]
    OR?: JadwalWhereInput[]
    NOT?: JadwalWhereInput | JadwalWhereInput[]
    peralatanId?: StringFilter<"Jadwal"> | string
    teknisiId?: StringFilter<"Jadwal"> | string
    tanggal?: DateTimeFilter<"Jadwal"> | Date | string
    waktuMulai?: StringFilter<"Jadwal"> | string
    waktuSelesai?: StringFilter<"Jadwal"> | string
    status?: StringFilter<"Jadwal"> | string
    catatan?: StringNullableFilter<"Jadwal"> | string | null
    createdAt?: DateTimeFilter<"Jadwal"> | Date | string
    updatedAt?: DateTimeFilter<"Jadwal"> | Date | string
    peralatan?: XOR<PeralatanRelationFilter, PeralatanWhereInput>
    teknisi?: XOR<TeknisiRelationFilter, TeknisiWhereInput>
    laporan?: XOR<LaporanNullableRelationFilter, LaporanWhereInput> | null
  }, "id" | "kodeJadwal">

  export type JadwalOrderByWithAggregationInput = {
    id?: SortOrder
    kodeJadwal?: SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    tanggal?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    status?: SortOrder
    catatan?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: JadwalCountOrderByAggregateInput
    _max?: JadwalMaxOrderByAggregateInput
    _min?: JadwalMinOrderByAggregateInput
  }

  export type JadwalScalarWhereWithAggregatesInput = {
    AND?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    OR?: JadwalScalarWhereWithAggregatesInput[]
    NOT?: JadwalScalarWhereWithAggregatesInput | JadwalScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Jadwal"> | string
    kodeJadwal?: StringWithAggregatesFilter<"Jadwal"> | string
    peralatanId?: StringWithAggregatesFilter<"Jadwal"> | string
    teknisiId?: StringWithAggregatesFilter<"Jadwal"> | string
    tanggal?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    waktuMulai?: StringWithAggregatesFilter<"Jadwal"> | string
    waktuSelesai?: StringWithAggregatesFilter<"Jadwal"> | string
    status?: StringWithAggregatesFilter<"Jadwal"> | string
    catatan?: StringNullableWithAggregatesFilter<"Jadwal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Jadwal"> | Date | string
  }

  export type LaporanWhereInput = {
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    id?: StringFilter<"Laporan"> | string
    kodeId?: StringFilter<"Laporan"> | string
    jadwalId?: StringNullableFilter<"Laporan"> | string | null
    peralatanId?: StringFilter<"Laporan"> | string
    teknisiId?: StringFilter<"Laporan"> | string
    checklist?: StringFilter<"Laporan"> | string
    pengukuran?: StringNullableFilter<"Laporan"> | string | null
    catatan?: StringNullableFilter<"Laporan"> | string | null
    fotoUrls?: StringFilter<"Laporan"> | string
    kesimpulan?: StringNullableFilter<"Laporan"> | string | null
    status?: StringFilter<"Laporan"> | string
    approvalNote?: StringNullableFilter<"Laporan"> | string | null
    approvedBy?: StringNullableFilter<"Laporan"> | string | null
    approvedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
    revisiCount?: IntFilter<"Laporan"> | number
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
    jadwal?: XOR<JadwalNullableRelationFilter, JadwalWhereInput> | null
    peralatan?: XOR<PeralatanRelationFilter, PeralatanWhereInput>
    teknisi?: XOR<TeknisiRelationFilter, TeknisiWhereInput>
    timeline?: LaporanTimelineListRelationFilter
  }

  export type LaporanOrderByWithRelationInput = {
    id?: SortOrder
    kodeId?: SortOrder
    jadwalId?: SortOrderInput | SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    checklist?: SortOrder
    pengukuran?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    fotoUrls?: SortOrder
    kesimpulan?: SortOrderInput | SortOrder
    status?: SortOrder
    approvalNote?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    revisiCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    jadwal?: JadwalOrderByWithRelationInput
    peralatan?: PeralatanOrderByWithRelationInput
    teknisi?: TeknisiOrderByWithRelationInput
    timeline?: LaporanTimelineOrderByRelationAggregateInput
  }

  export type LaporanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    kodeId?: string
    jadwalId?: string
    AND?: LaporanWhereInput | LaporanWhereInput[]
    OR?: LaporanWhereInput[]
    NOT?: LaporanWhereInput | LaporanWhereInput[]
    peralatanId?: StringFilter<"Laporan"> | string
    teknisiId?: StringFilter<"Laporan"> | string
    checklist?: StringFilter<"Laporan"> | string
    pengukuran?: StringNullableFilter<"Laporan"> | string | null
    catatan?: StringNullableFilter<"Laporan"> | string | null
    fotoUrls?: StringFilter<"Laporan"> | string
    kesimpulan?: StringNullableFilter<"Laporan"> | string | null
    status?: StringFilter<"Laporan"> | string
    approvalNote?: StringNullableFilter<"Laporan"> | string | null
    approvedBy?: StringNullableFilter<"Laporan"> | string | null
    approvedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
    revisiCount?: IntFilter<"Laporan"> | number
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
    jadwal?: XOR<JadwalNullableRelationFilter, JadwalWhereInput> | null
    peralatan?: XOR<PeralatanRelationFilter, PeralatanWhereInput>
    teknisi?: XOR<TeknisiRelationFilter, TeknisiWhereInput>
    timeline?: LaporanTimelineListRelationFilter
  }, "id" | "kodeId" | "jadwalId">

  export type LaporanOrderByWithAggregationInput = {
    id?: SortOrder
    kodeId?: SortOrder
    jadwalId?: SortOrderInput | SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    checklist?: SortOrder
    pengukuran?: SortOrderInput | SortOrder
    catatan?: SortOrderInput | SortOrder
    fotoUrls?: SortOrder
    kesimpulan?: SortOrderInput | SortOrder
    status?: SortOrder
    approvalNote?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    revisiCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LaporanCountOrderByAggregateInput
    _avg?: LaporanAvgOrderByAggregateInput
    _max?: LaporanMaxOrderByAggregateInput
    _min?: LaporanMinOrderByAggregateInput
    _sum?: LaporanSumOrderByAggregateInput
  }

  export type LaporanScalarWhereWithAggregatesInput = {
    AND?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    OR?: LaporanScalarWhereWithAggregatesInput[]
    NOT?: LaporanScalarWhereWithAggregatesInput | LaporanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Laporan"> | string
    kodeId?: StringWithAggregatesFilter<"Laporan"> | string
    jadwalId?: StringNullableWithAggregatesFilter<"Laporan"> | string | null
    peralatanId?: StringWithAggregatesFilter<"Laporan"> | string
    teknisiId?: StringWithAggregatesFilter<"Laporan"> | string
    checklist?: StringWithAggregatesFilter<"Laporan"> | string
    pengukuran?: StringNullableWithAggregatesFilter<"Laporan"> | string | null
    catatan?: StringNullableWithAggregatesFilter<"Laporan"> | string | null
    fotoUrls?: StringWithAggregatesFilter<"Laporan"> | string
    kesimpulan?: StringNullableWithAggregatesFilter<"Laporan"> | string | null
    status?: StringWithAggregatesFilter<"Laporan"> | string
    approvalNote?: StringNullableWithAggregatesFilter<"Laporan"> | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"Laporan"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Laporan"> | Date | string | null
    revisiCount?: IntWithAggregatesFilter<"Laporan"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Laporan"> | Date | string
  }

  export type LaporanTimelineWhereInput = {
    AND?: LaporanTimelineWhereInput | LaporanTimelineWhereInput[]
    OR?: LaporanTimelineWhereInput[]
    NOT?: LaporanTimelineWhereInput | LaporanTimelineWhereInput[]
    id?: StringFilter<"LaporanTimeline"> | string
    laporanId?: StringFilter<"LaporanTimeline"> | string
    type?: StringFilter<"LaporanTimeline"> | string
    description?: StringFilter<"LaporanTimeline"> | string
    createdBy?: StringNullableFilter<"LaporanTimeline"> | string | null
    createdAt?: DateTimeFilter<"LaporanTimeline"> | Date | string
    laporan?: XOR<LaporanRelationFilter, LaporanWhereInput>
  }

  export type LaporanTimelineOrderByWithRelationInput = {
    id?: SortOrder
    laporanId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    laporan?: LaporanOrderByWithRelationInput
  }

  export type LaporanTimelineWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LaporanTimelineWhereInput | LaporanTimelineWhereInput[]
    OR?: LaporanTimelineWhereInput[]
    NOT?: LaporanTimelineWhereInput | LaporanTimelineWhereInput[]
    laporanId?: StringFilter<"LaporanTimeline"> | string
    type?: StringFilter<"LaporanTimeline"> | string
    description?: StringFilter<"LaporanTimeline"> | string
    createdBy?: StringNullableFilter<"LaporanTimeline"> | string | null
    createdAt?: DateTimeFilter<"LaporanTimeline"> | Date | string
    laporan?: XOR<LaporanRelationFilter, LaporanWhereInput>
  }, "id">

  export type LaporanTimelineOrderByWithAggregationInput = {
    id?: SortOrder
    laporanId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LaporanTimelineCountOrderByAggregateInput
    _max?: LaporanTimelineMaxOrderByAggregateInput
    _min?: LaporanTimelineMinOrderByAggregateInput
  }

  export type LaporanTimelineScalarWhereWithAggregatesInput = {
    AND?: LaporanTimelineScalarWhereWithAggregatesInput | LaporanTimelineScalarWhereWithAggregatesInput[]
    OR?: LaporanTimelineScalarWhereWithAggregatesInput[]
    NOT?: LaporanTimelineScalarWhereWithAggregatesInput | LaporanTimelineScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LaporanTimeline"> | string
    laporanId?: StringWithAggregatesFilter<"LaporanTimeline"> | string
    type?: StringWithAggregatesFilter<"LaporanTimeline"> | string
    description?: StringWithAggregatesFilter<"LaporanTimeline"> | string
    createdBy?: StringNullableWithAggregatesFilter<"LaporanTimeline"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LaporanTimeline"> | Date | string
  }

  export type NotifikasiWhereInput = {
    AND?: NotifikasiWhereInput | NotifikasiWhereInput[]
    OR?: NotifikasiWhereInput[]
    NOT?: NotifikasiWhereInput | NotifikasiWhereInput[]
    id?: StringFilter<"Notifikasi"> | string
    userId?: StringFilter<"Notifikasi"> | string
    type?: StringFilter<"Notifikasi"> | string
    title?: StringFilter<"Notifikasi"> | string
    message?: StringFilter<"Notifikasi"> | string
    link?: StringNullableFilter<"Notifikasi"> | string | null
    isRead?: BoolFilter<"Notifikasi"> | boolean
    createdAt?: DateTimeFilter<"Notifikasi"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NotifikasiOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotifikasiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotifikasiWhereInput | NotifikasiWhereInput[]
    OR?: NotifikasiWhereInput[]
    NOT?: NotifikasiWhereInput | NotifikasiWhereInput[]
    userId?: StringFilter<"Notifikasi"> | string
    type?: StringFilter<"Notifikasi"> | string
    title?: StringFilter<"Notifikasi"> | string
    message?: StringFilter<"Notifikasi"> | string
    link?: StringNullableFilter<"Notifikasi"> | string | null
    isRead?: BoolFilter<"Notifikasi"> | boolean
    createdAt?: DateTimeFilter<"Notifikasi"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type NotifikasiOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotifikasiCountOrderByAggregateInput
    _max?: NotifikasiMaxOrderByAggregateInput
    _min?: NotifikasiMinOrderByAggregateInput
  }

  export type NotifikasiScalarWhereWithAggregatesInput = {
    AND?: NotifikasiScalarWhereWithAggregatesInput | NotifikasiScalarWhereWithAggregatesInput[]
    OR?: NotifikasiScalarWhereWithAggregatesInput[]
    NOT?: NotifikasiScalarWhereWithAggregatesInput | NotifikasiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notifikasi"> | string
    userId?: StringWithAggregatesFilter<"Notifikasi"> | string
    type?: StringWithAggregatesFilter<"Notifikasi"> | string
    title?: StringWithAggregatesFilter<"Notifikasi"> | string
    message?: StringWithAggregatesFilter<"Notifikasi"> | string
    link?: StringNullableWithAggregatesFilter<"Notifikasi"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notifikasi"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notifikasi"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatarUrl?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teknisi?: TeknisiCreateNestedOneWithoutUserInput
    notifikasi?: NotifikasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatarUrl?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teknisi?: TeknisiUncheckedCreateNestedOneWithoutUserInput
    notifikasi?: NotifikasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teknisi?: TeknisiUpdateOneWithoutUserNestedInput
    notifikasi?: NotifikasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teknisi?: TeknisiUncheckedUpdateOneWithoutUserNestedInput
    notifikasi?: NotifikasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatarUrl?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeralatanCreateInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    jadwal?: JadwalCreateNestedManyWithoutPeralatanInput
    laporan?: LaporanCreateNestedManyWithoutPeralatanInput
    lokasiRelation?: LokasiCreateNestedOneWithoutPeralatanInput
  }

  export type PeralatanUncheckedCreateInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    lokasiId?: string | null
    jadwal?: JadwalUncheckedCreateNestedManyWithoutPeralatanInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutPeralatanInput
  }

  export type PeralatanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateManyWithoutPeralatanNestedInput
    laporan?: LaporanUpdateManyWithoutPeralatanNestedInput
    lokasiRelation?: LokasiUpdateOneWithoutPeralatanNestedInput
  }

  export type PeralatanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal?: JadwalUncheckedUpdateManyWithoutPeralatanNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutPeralatanNestedInput
  }

  export type PeralatanCreateManyInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    lokasiId?: string | null
  }

  export type PeralatanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeralatanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JenisPeralatanCreateInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type JenisPeralatanUncheckedCreateInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type JenisPeralatanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JenisPeralatanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JenisPeralatanCreateManyInput = {
    id?: string
    nama: string
    deskripsi?: string | null
    createdAt?: Date | string
  }

  export type JenisPeralatanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JenisPeralatanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeknisiCreateInput = {
    id?: string
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTeknisiInput
    jadwal?: JadwalCreateNestedManyWithoutTeknisiInput
    laporan?: LaporanCreateNestedManyWithoutTeknisiInput
  }

  export type TeknisiUncheckedCreateInput = {
    id?: string
    userId?: string | null
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalUncheckedCreateNestedManyWithoutTeknisiInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutTeknisiInput
  }

  export type TeknisiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeknisiNestedInput
    jadwal?: JadwalUpdateManyWithoutTeknisiNestedInput
    laporan?: LaporanUpdateManyWithoutTeknisiNestedInput
  }

  export type TeknisiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUncheckedUpdateManyWithoutTeknisiNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutTeknisiNestedInput
  }

  export type TeknisiCreateManyInput = {
    id?: string
    userId?: string | null
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeknisiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeknisiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LokasiCreateInput = {
    id?: string
    kode: string
    nama: string
    kota: string
    provinsi?: string | null
    zona?: string | null
    area?: string | null
    deskripsi?: string | null
    lat?: number | null
    lng?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    peralatan?: PeralatanCreateNestedManyWithoutLokasiRelationInput
  }

  export type LokasiUncheckedCreateInput = {
    id?: string
    kode: string
    nama: string
    kota: string
    provinsi?: string | null
    zona?: string | null
    area?: string | null
    deskripsi?: string | null
    lat?: number | null
    lng?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    peralatan?: PeralatanUncheckedCreateNestedManyWithoutLokasiRelationInput
  }

  export type LokasiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peralatan?: PeralatanUpdateManyWithoutLokasiRelationNestedInput
  }

  export type LokasiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peralatan?: PeralatanUncheckedUpdateManyWithoutLokasiRelationNestedInput
  }

  export type LokasiCreateManyInput = {
    id?: string
    kode: string
    nama: string
    kota: string
    provinsi?: string | null
    zona?: string | null
    area?: string | null
    deskripsi?: string | null
    lat?: number | null
    lng?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LokasiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LokasiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalCreateInput = {
    id?: string
    kodeJadwal: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    peralatan: PeralatanCreateNestedOneWithoutJadwalInput
    teknisi: TeknisiCreateNestedOneWithoutJadwalInput
    laporan?: LaporanCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateInput = {
    id?: string
    kodeJadwal: string
    peralatanId: string
    teknisiId: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peralatan?: PeralatanUpdateOneRequiredWithoutJadwalNestedInput
    teknisi?: TeknisiUpdateOneRequiredWithoutJadwalNestedInput
    laporan?: LaporanUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    peralatanId?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalCreateManyInput = {
    id?: string
    kodeJadwal: string
    peralatanId: string
    teknisiId: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    peralatanId?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanCreateInput = {
    id?: string
    kodeId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalCreateNestedOneWithoutLaporanInput
    peralatan: PeralatanCreateNestedOneWithoutLaporanInput
    teknisi: TeknisiCreateNestedOneWithoutLaporanInput
    timeline?: LaporanTimelineCreateNestedManyWithoutLaporanInput
  }

  export type LaporanUncheckedCreateInput = {
    id?: string
    kodeId: string
    jadwalId?: string | null
    peralatanId: string
    teknisiId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timeline?: LaporanTimelineUncheckedCreateNestedManyWithoutLaporanInput
  }

  export type LaporanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateOneWithoutLaporanNestedInput
    peralatan?: PeralatanUpdateOneRequiredWithoutLaporanNestedInput
    teknisi?: TeknisiUpdateOneRequiredWithoutLaporanNestedInput
    timeline?: LaporanTimelineUpdateManyWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    jadwalId?: NullableStringFieldUpdateOperationsInput | string | null
    peralatanId?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: LaporanTimelineUncheckedUpdateManyWithoutLaporanNestedInput
  }

  export type LaporanCreateManyInput = {
    id?: string
    kodeId: string
    jadwalId?: string | null
    peralatanId: string
    teknisiId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    jadwalId?: NullableStringFieldUpdateOperationsInput | string | null
    peralatanId?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanTimelineCreateInput = {
    id?: string
    type: string
    description: string
    createdBy?: string | null
    createdAt?: Date | string
    laporan: LaporanCreateNestedOneWithoutTimelineInput
  }

  export type LaporanTimelineUncheckedCreateInput = {
    id?: string
    laporanId: string
    type: string
    description: string
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type LaporanTimelineUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanUpdateOneRequiredWithoutTimelineNestedInput
  }

  export type LaporanTimelineUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    laporanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanTimelineCreateManyInput = {
    id?: string
    laporanId: string
    type: string
    description: string
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type LaporanTimelineUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanTimelineUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    laporanId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiCreateInput = {
    id?: string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotifikasiInput
  }

  export type NotifikasiUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotifikasiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotifikasiNestedInput
  }

  export type NotifikasiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotifikasiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TeknisiNullableRelationFilter = {
    is?: TeknisiWhereInput | null
    isNot?: TeknisiWhereInput | null
  }

  export type NotifikasiListRelationFilter = {
    every?: NotifikasiWhereInput
    some?: NotifikasiWhereInput
    none?: NotifikasiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotifikasiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    refreshToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type JadwalListRelationFilter = {
    every?: JadwalWhereInput
    some?: JadwalWhereInput
    none?: JadwalWhereInput
  }

  export type LaporanListRelationFilter = {
    every?: LaporanWhereInput
    some?: LaporanWhereInput
    none?: LaporanWhereInput
  }

  export type LokasiNullableRelationFilter = {
    is?: LokasiWhereInput | null
    isNot?: LokasiWhereInput | null
  }

  export type JadwalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LaporanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PeralatanCountOrderByAggregateInput = {
    id?: SortOrder
    kodeId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    lokasi?: SortOrder
    noRegister?: SortOrder
    fotoUrl?: SortOrder
    kapasitas?: SortOrder
    tinggiDimensi?: SortOrder
    jenisKabel?: SortOrder
    masaBerlaku?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    status?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    lokasiId?: SortOrder
  }

  export type PeralatanAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type PeralatanMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    lokasi?: SortOrder
    noRegister?: SortOrder
    fotoUrl?: SortOrder
    kapasitas?: SortOrder
    tinggiDimensi?: SortOrder
    jenisKabel?: SortOrder
    masaBerlaku?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    status?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    lokasiId?: SortOrder
  }

  export type PeralatanMinOrderByAggregateInput = {
    id?: SortOrder
    kodeId?: SortOrder
    nama?: SortOrder
    jenis?: SortOrder
    lokasi?: SortOrder
    noRegister?: SortOrder
    fotoUrl?: SortOrder
    kapasitas?: SortOrder
    tinggiDimensi?: SortOrder
    jenisKabel?: SortOrder
    masaBerlaku?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    status?: SortOrder
    qrCodeUrl?: SortOrder
    createdAt?: SortOrder
    lokasiId?: SortOrder
  }

  export type PeralatanSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type JenisPeralatanCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type JenisPeralatanMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type JenisPeralatanMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TeknisiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    idKaryawan?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    divisi?: SortOrder
    avatarUrl?: SortOrder
    status?: SortOrder
    totalInspeksi?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeknisiAvgOrderByAggregateInput = {
    totalInspeksi?: SortOrder
    rating?: SortOrder
  }

  export type TeknisiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    idKaryawan?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    divisi?: SortOrder
    avatarUrl?: SortOrder
    status?: SortOrder
    totalInspeksi?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeknisiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nama?: SortOrder
    idKaryawan?: SortOrder
    email?: SortOrder
    noHp?: SortOrder
    divisi?: SortOrder
    avatarUrl?: SortOrder
    status?: SortOrder
    totalInspeksi?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeknisiSumOrderByAggregateInput = {
    totalInspeksi?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PeralatanListRelationFilter = {
    every?: PeralatanWhereInput
    some?: PeralatanWhereInput
    none?: PeralatanWhereInput
  }

  export type PeralatanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LokasiCountOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
    provinsi?: SortOrder
    zona?: SortOrder
    area?: SortOrder
    deskripsi?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LokasiAvgOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type LokasiMaxOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
    provinsi?: SortOrder
    zona?: SortOrder
    area?: SortOrder
    deskripsi?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LokasiMinOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    nama?: SortOrder
    kota?: SortOrder
    provinsi?: SortOrder
    zona?: SortOrder
    area?: SortOrder
    deskripsi?: SortOrder
    lat?: SortOrder
    lng?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LokasiSumOrderByAggregateInput = {
    lat?: SortOrder
    lng?: SortOrder
  }

  export type PeralatanRelationFilter = {
    is?: PeralatanWhereInput
    isNot?: PeralatanWhereInput
  }

  export type TeknisiRelationFilter = {
    is?: TeknisiWhereInput
    isNot?: TeknisiWhereInput
  }

  export type LaporanNullableRelationFilter = {
    is?: LaporanWhereInput | null
    isNot?: LaporanWhereInput | null
  }

  export type JadwalCountOrderByAggregateInput = {
    id?: SortOrder
    kodeJadwal?: SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    tanggal?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeJadwal?: SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    tanggal?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalMinOrderByAggregateInput = {
    id?: SortOrder
    kodeJadwal?: SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    tanggal?: SortOrder
    waktuMulai?: SortOrder
    waktuSelesai?: SortOrder
    status?: SortOrder
    catatan?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalNullableRelationFilter = {
    is?: JadwalWhereInput | null
    isNot?: JadwalWhereInput | null
  }

  export type LaporanTimelineListRelationFilter = {
    every?: LaporanTimelineWhereInput
    some?: LaporanTimelineWhereInput
    none?: LaporanTimelineWhereInput
  }

  export type LaporanTimelineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LaporanCountOrderByAggregateInput = {
    id?: SortOrder
    kodeId?: SortOrder
    jadwalId?: SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    checklist?: SortOrder
    pengukuran?: SortOrder
    catatan?: SortOrder
    fotoUrls?: SortOrder
    kesimpulan?: SortOrder
    status?: SortOrder
    approvalNote?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    revisiCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanAvgOrderByAggregateInput = {
    revisiCount?: SortOrder
  }

  export type LaporanMaxOrderByAggregateInput = {
    id?: SortOrder
    kodeId?: SortOrder
    jadwalId?: SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    checklist?: SortOrder
    pengukuran?: SortOrder
    catatan?: SortOrder
    fotoUrls?: SortOrder
    kesimpulan?: SortOrder
    status?: SortOrder
    approvalNote?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    revisiCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanMinOrderByAggregateInput = {
    id?: SortOrder
    kodeId?: SortOrder
    jadwalId?: SortOrder
    peralatanId?: SortOrder
    teknisiId?: SortOrder
    checklist?: SortOrder
    pengukuran?: SortOrder
    catatan?: SortOrder
    fotoUrls?: SortOrder
    kesimpulan?: SortOrder
    status?: SortOrder
    approvalNote?: SortOrder
    approvedBy?: SortOrder
    approvedAt?: SortOrder
    revisiCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LaporanSumOrderByAggregateInput = {
    revisiCount?: SortOrder
  }

  export type LaporanRelationFilter = {
    is?: LaporanWhereInput
    isNot?: LaporanWhereInput
  }

  export type LaporanTimelineCountOrderByAggregateInput = {
    id?: SortOrder
    laporanId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type LaporanTimelineMaxOrderByAggregateInput = {
    id?: SortOrder
    laporanId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type LaporanTimelineMinOrderByAggregateInput = {
    id?: SortOrder
    laporanId?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NotifikasiCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotifikasiMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotifikasiMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    message?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type TeknisiCreateNestedOneWithoutUserInput = {
    create?: XOR<TeknisiCreateWithoutUserInput, TeknisiUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeknisiCreateOrConnectWithoutUserInput
    connect?: TeknisiWhereUniqueInput
  }

  export type NotifikasiCreateNestedManyWithoutUserInput = {
    create?: XOR<NotifikasiCreateWithoutUserInput, NotifikasiUncheckedCreateWithoutUserInput> | NotifikasiCreateWithoutUserInput[] | NotifikasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotifikasiCreateOrConnectWithoutUserInput | NotifikasiCreateOrConnectWithoutUserInput[]
    createMany?: NotifikasiCreateManyUserInputEnvelope
    connect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
  }

  export type TeknisiUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeknisiCreateWithoutUserInput, TeknisiUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeknisiCreateOrConnectWithoutUserInput
    connect?: TeknisiWhereUniqueInput
  }

  export type NotifikasiUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotifikasiCreateWithoutUserInput, NotifikasiUncheckedCreateWithoutUserInput> | NotifikasiCreateWithoutUserInput[] | NotifikasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotifikasiCreateOrConnectWithoutUserInput | NotifikasiCreateOrConnectWithoutUserInput[]
    createMany?: NotifikasiCreateManyUserInputEnvelope
    connect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeknisiUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeknisiCreateWithoutUserInput, TeknisiUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeknisiCreateOrConnectWithoutUserInput
    upsert?: TeknisiUpsertWithoutUserInput
    disconnect?: TeknisiWhereInput | boolean
    delete?: TeknisiWhereInput | boolean
    connect?: TeknisiWhereUniqueInput
    update?: XOR<XOR<TeknisiUpdateToOneWithWhereWithoutUserInput, TeknisiUpdateWithoutUserInput>, TeknisiUncheckedUpdateWithoutUserInput>
  }

  export type NotifikasiUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotifikasiCreateWithoutUserInput, NotifikasiUncheckedCreateWithoutUserInput> | NotifikasiCreateWithoutUserInput[] | NotifikasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotifikasiCreateOrConnectWithoutUserInput | NotifikasiCreateOrConnectWithoutUserInput[]
    upsert?: NotifikasiUpsertWithWhereUniqueWithoutUserInput | NotifikasiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotifikasiCreateManyUserInputEnvelope
    set?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    disconnect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    delete?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    connect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    update?: NotifikasiUpdateWithWhereUniqueWithoutUserInput | NotifikasiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotifikasiUpdateManyWithWhereWithoutUserInput | NotifikasiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotifikasiScalarWhereInput | NotifikasiScalarWhereInput[]
  }

  export type TeknisiUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeknisiCreateWithoutUserInput, TeknisiUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeknisiCreateOrConnectWithoutUserInput
    upsert?: TeknisiUpsertWithoutUserInput
    disconnect?: TeknisiWhereInput | boolean
    delete?: TeknisiWhereInput | boolean
    connect?: TeknisiWhereUniqueInput
    update?: XOR<XOR<TeknisiUpdateToOneWithWhereWithoutUserInput, TeknisiUpdateWithoutUserInput>, TeknisiUncheckedUpdateWithoutUserInput>
  }

  export type NotifikasiUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotifikasiCreateWithoutUserInput, NotifikasiUncheckedCreateWithoutUserInput> | NotifikasiCreateWithoutUserInput[] | NotifikasiUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotifikasiCreateOrConnectWithoutUserInput | NotifikasiCreateOrConnectWithoutUserInput[]
    upsert?: NotifikasiUpsertWithWhereUniqueWithoutUserInput | NotifikasiUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotifikasiCreateManyUserInputEnvelope
    set?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    disconnect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    delete?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    connect?: NotifikasiWhereUniqueInput | NotifikasiWhereUniqueInput[]
    update?: NotifikasiUpdateWithWhereUniqueWithoutUserInput | NotifikasiUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotifikasiUpdateManyWithWhereWithoutUserInput | NotifikasiUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotifikasiScalarWhereInput | NotifikasiScalarWhereInput[]
  }

  export type JadwalCreateNestedManyWithoutPeralatanInput = {
    create?: XOR<JadwalCreateWithoutPeralatanInput, JadwalUncheckedCreateWithoutPeralatanInput> | JadwalCreateWithoutPeralatanInput[] | JadwalUncheckedCreateWithoutPeralatanInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutPeralatanInput | JadwalCreateOrConnectWithoutPeralatanInput[]
    createMany?: JadwalCreateManyPeralatanInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type LaporanCreateNestedManyWithoutPeralatanInput = {
    create?: XOR<LaporanCreateWithoutPeralatanInput, LaporanUncheckedCreateWithoutPeralatanInput> | LaporanCreateWithoutPeralatanInput[] | LaporanUncheckedCreateWithoutPeralatanInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutPeralatanInput | LaporanCreateOrConnectWithoutPeralatanInput[]
    createMany?: LaporanCreateManyPeralatanInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type LokasiCreateNestedOneWithoutPeralatanInput = {
    create?: XOR<LokasiCreateWithoutPeralatanInput, LokasiUncheckedCreateWithoutPeralatanInput>
    connectOrCreate?: LokasiCreateOrConnectWithoutPeralatanInput
    connect?: LokasiWhereUniqueInput
  }

  export type JadwalUncheckedCreateNestedManyWithoutPeralatanInput = {
    create?: XOR<JadwalCreateWithoutPeralatanInput, JadwalUncheckedCreateWithoutPeralatanInput> | JadwalCreateWithoutPeralatanInput[] | JadwalUncheckedCreateWithoutPeralatanInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutPeralatanInput | JadwalCreateOrConnectWithoutPeralatanInput[]
    createMany?: JadwalCreateManyPeralatanInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type LaporanUncheckedCreateNestedManyWithoutPeralatanInput = {
    create?: XOR<LaporanCreateWithoutPeralatanInput, LaporanUncheckedCreateWithoutPeralatanInput> | LaporanCreateWithoutPeralatanInput[] | LaporanUncheckedCreateWithoutPeralatanInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutPeralatanInput | LaporanCreateOrConnectWithoutPeralatanInput[]
    createMany?: LaporanCreateManyPeralatanInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type JadwalUpdateManyWithoutPeralatanNestedInput = {
    create?: XOR<JadwalCreateWithoutPeralatanInput, JadwalUncheckedCreateWithoutPeralatanInput> | JadwalCreateWithoutPeralatanInput[] | JadwalUncheckedCreateWithoutPeralatanInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutPeralatanInput | JadwalCreateOrConnectWithoutPeralatanInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutPeralatanInput | JadwalUpsertWithWhereUniqueWithoutPeralatanInput[]
    createMany?: JadwalCreateManyPeralatanInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutPeralatanInput | JadwalUpdateWithWhereUniqueWithoutPeralatanInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutPeralatanInput | JadwalUpdateManyWithWhereWithoutPeralatanInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type LaporanUpdateManyWithoutPeralatanNestedInput = {
    create?: XOR<LaporanCreateWithoutPeralatanInput, LaporanUncheckedCreateWithoutPeralatanInput> | LaporanCreateWithoutPeralatanInput[] | LaporanUncheckedCreateWithoutPeralatanInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutPeralatanInput | LaporanCreateOrConnectWithoutPeralatanInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutPeralatanInput | LaporanUpsertWithWhereUniqueWithoutPeralatanInput[]
    createMany?: LaporanCreateManyPeralatanInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutPeralatanInput | LaporanUpdateWithWhereUniqueWithoutPeralatanInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutPeralatanInput | LaporanUpdateManyWithWhereWithoutPeralatanInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type LokasiUpdateOneWithoutPeralatanNestedInput = {
    create?: XOR<LokasiCreateWithoutPeralatanInput, LokasiUncheckedCreateWithoutPeralatanInput>
    connectOrCreate?: LokasiCreateOrConnectWithoutPeralatanInput
    upsert?: LokasiUpsertWithoutPeralatanInput
    disconnect?: LokasiWhereInput | boolean
    delete?: LokasiWhereInput | boolean
    connect?: LokasiWhereUniqueInput
    update?: XOR<XOR<LokasiUpdateToOneWithWhereWithoutPeralatanInput, LokasiUpdateWithoutPeralatanInput>, LokasiUncheckedUpdateWithoutPeralatanInput>
  }

  export type JadwalUncheckedUpdateManyWithoutPeralatanNestedInput = {
    create?: XOR<JadwalCreateWithoutPeralatanInput, JadwalUncheckedCreateWithoutPeralatanInput> | JadwalCreateWithoutPeralatanInput[] | JadwalUncheckedCreateWithoutPeralatanInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutPeralatanInput | JadwalCreateOrConnectWithoutPeralatanInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutPeralatanInput | JadwalUpsertWithWhereUniqueWithoutPeralatanInput[]
    createMany?: JadwalCreateManyPeralatanInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutPeralatanInput | JadwalUpdateWithWhereUniqueWithoutPeralatanInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutPeralatanInput | JadwalUpdateManyWithWhereWithoutPeralatanInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type LaporanUncheckedUpdateManyWithoutPeralatanNestedInput = {
    create?: XOR<LaporanCreateWithoutPeralatanInput, LaporanUncheckedCreateWithoutPeralatanInput> | LaporanCreateWithoutPeralatanInput[] | LaporanUncheckedCreateWithoutPeralatanInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutPeralatanInput | LaporanCreateOrConnectWithoutPeralatanInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutPeralatanInput | LaporanUpsertWithWhereUniqueWithoutPeralatanInput[]
    createMany?: LaporanCreateManyPeralatanInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutPeralatanInput | LaporanUpdateWithWhereUniqueWithoutPeralatanInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutPeralatanInput | LaporanUpdateManyWithWhereWithoutPeralatanInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeknisiInput = {
    create?: XOR<UserCreateWithoutTeknisiInput, UserUncheckedCreateWithoutTeknisiInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeknisiInput
    connect?: UserWhereUniqueInput
  }

  export type JadwalCreateNestedManyWithoutTeknisiInput = {
    create?: XOR<JadwalCreateWithoutTeknisiInput, JadwalUncheckedCreateWithoutTeknisiInput> | JadwalCreateWithoutTeknisiInput[] | JadwalUncheckedCreateWithoutTeknisiInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutTeknisiInput | JadwalCreateOrConnectWithoutTeknisiInput[]
    createMany?: JadwalCreateManyTeknisiInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type LaporanCreateNestedManyWithoutTeknisiInput = {
    create?: XOR<LaporanCreateWithoutTeknisiInput, LaporanUncheckedCreateWithoutTeknisiInput> | LaporanCreateWithoutTeknisiInput[] | LaporanUncheckedCreateWithoutTeknisiInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutTeknisiInput | LaporanCreateOrConnectWithoutTeknisiInput[]
    createMany?: LaporanCreateManyTeknisiInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type JadwalUncheckedCreateNestedManyWithoutTeknisiInput = {
    create?: XOR<JadwalCreateWithoutTeknisiInput, JadwalUncheckedCreateWithoutTeknisiInput> | JadwalCreateWithoutTeknisiInput[] | JadwalUncheckedCreateWithoutTeknisiInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutTeknisiInput | JadwalCreateOrConnectWithoutTeknisiInput[]
    createMany?: JadwalCreateManyTeknisiInputEnvelope
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
  }

  export type LaporanUncheckedCreateNestedManyWithoutTeknisiInput = {
    create?: XOR<LaporanCreateWithoutTeknisiInput, LaporanUncheckedCreateWithoutTeknisiInput> | LaporanCreateWithoutTeknisiInput[] | LaporanUncheckedCreateWithoutTeknisiInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutTeknisiInput | LaporanCreateOrConnectWithoutTeknisiInput[]
    createMany?: LaporanCreateManyTeknisiInputEnvelope
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutTeknisiNestedInput = {
    create?: XOR<UserCreateWithoutTeknisiInput, UserUncheckedCreateWithoutTeknisiInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeknisiInput
    upsert?: UserUpsertWithoutTeknisiInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeknisiInput, UserUpdateWithoutTeknisiInput>, UserUncheckedUpdateWithoutTeknisiInput>
  }

  export type JadwalUpdateManyWithoutTeknisiNestedInput = {
    create?: XOR<JadwalCreateWithoutTeknisiInput, JadwalUncheckedCreateWithoutTeknisiInput> | JadwalCreateWithoutTeknisiInput[] | JadwalUncheckedCreateWithoutTeknisiInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutTeknisiInput | JadwalCreateOrConnectWithoutTeknisiInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutTeknisiInput | JadwalUpsertWithWhereUniqueWithoutTeknisiInput[]
    createMany?: JadwalCreateManyTeknisiInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutTeknisiInput | JadwalUpdateWithWhereUniqueWithoutTeknisiInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutTeknisiInput | JadwalUpdateManyWithWhereWithoutTeknisiInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type LaporanUpdateManyWithoutTeknisiNestedInput = {
    create?: XOR<LaporanCreateWithoutTeknisiInput, LaporanUncheckedCreateWithoutTeknisiInput> | LaporanCreateWithoutTeknisiInput[] | LaporanUncheckedCreateWithoutTeknisiInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutTeknisiInput | LaporanCreateOrConnectWithoutTeknisiInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutTeknisiInput | LaporanUpsertWithWhereUniqueWithoutTeknisiInput[]
    createMany?: LaporanCreateManyTeknisiInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutTeknisiInput | LaporanUpdateWithWhereUniqueWithoutTeknisiInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutTeknisiInput | LaporanUpdateManyWithWhereWithoutTeknisiInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type JadwalUncheckedUpdateManyWithoutTeknisiNestedInput = {
    create?: XOR<JadwalCreateWithoutTeknisiInput, JadwalUncheckedCreateWithoutTeknisiInput> | JadwalCreateWithoutTeknisiInput[] | JadwalUncheckedCreateWithoutTeknisiInput[]
    connectOrCreate?: JadwalCreateOrConnectWithoutTeknisiInput | JadwalCreateOrConnectWithoutTeknisiInput[]
    upsert?: JadwalUpsertWithWhereUniqueWithoutTeknisiInput | JadwalUpsertWithWhereUniqueWithoutTeknisiInput[]
    createMany?: JadwalCreateManyTeknisiInputEnvelope
    set?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    disconnect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    delete?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    connect?: JadwalWhereUniqueInput | JadwalWhereUniqueInput[]
    update?: JadwalUpdateWithWhereUniqueWithoutTeknisiInput | JadwalUpdateWithWhereUniqueWithoutTeknisiInput[]
    updateMany?: JadwalUpdateManyWithWhereWithoutTeknisiInput | JadwalUpdateManyWithWhereWithoutTeknisiInput[]
    deleteMany?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
  }

  export type LaporanUncheckedUpdateManyWithoutTeknisiNestedInput = {
    create?: XOR<LaporanCreateWithoutTeknisiInput, LaporanUncheckedCreateWithoutTeknisiInput> | LaporanCreateWithoutTeknisiInput[] | LaporanUncheckedCreateWithoutTeknisiInput[]
    connectOrCreate?: LaporanCreateOrConnectWithoutTeknisiInput | LaporanCreateOrConnectWithoutTeknisiInput[]
    upsert?: LaporanUpsertWithWhereUniqueWithoutTeknisiInput | LaporanUpsertWithWhereUniqueWithoutTeknisiInput[]
    createMany?: LaporanCreateManyTeknisiInputEnvelope
    set?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    disconnect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    delete?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    connect?: LaporanWhereUniqueInput | LaporanWhereUniqueInput[]
    update?: LaporanUpdateWithWhereUniqueWithoutTeknisiInput | LaporanUpdateWithWhereUniqueWithoutTeknisiInput[]
    updateMany?: LaporanUpdateManyWithWhereWithoutTeknisiInput | LaporanUpdateManyWithWhereWithoutTeknisiInput[]
    deleteMany?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
  }

  export type PeralatanCreateNestedManyWithoutLokasiRelationInput = {
    create?: XOR<PeralatanCreateWithoutLokasiRelationInput, PeralatanUncheckedCreateWithoutLokasiRelationInput> | PeralatanCreateWithoutLokasiRelationInput[] | PeralatanUncheckedCreateWithoutLokasiRelationInput[]
    connectOrCreate?: PeralatanCreateOrConnectWithoutLokasiRelationInput | PeralatanCreateOrConnectWithoutLokasiRelationInput[]
    createMany?: PeralatanCreateManyLokasiRelationInputEnvelope
    connect?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
  }

  export type PeralatanUncheckedCreateNestedManyWithoutLokasiRelationInput = {
    create?: XOR<PeralatanCreateWithoutLokasiRelationInput, PeralatanUncheckedCreateWithoutLokasiRelationInput> | PeralatanCreateWithoutLokasiRelationInput[] | PeralatanUncheckedCreateWithoutLokasiRelationInput[]
    connectOrCreate?: PeralatanCreateOrConnectWithoutLokasiRelationInput | PeralatanCreateOrConnectWithoutLokasiRelationInput[]
    createMany?: PeralatanCreateManyLokasiRelationInputEnvelope
    connect?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
  }

  export type PeralatanUpdateManyWithoutLokasiRelationNestedInput = {
    create?: XOR<PeralatanCreateWithoutLokasiRelationInput, PeralatanUncheckedCreateWithoutLokasiRelationInput> | PeralatanCreateWithoutLokasiRelationInput[] | PeralatanUncheckedCreateWithoutLokasiRelationInput[]
    connectOrCreate?: PeralatanCreateOrConnectWithoutLokasiRelationInput | PeralatanCreateOrConnectWithoutLokasiRelationInput[]
    upsert?: PeralatanUpsertWithWhereUniqueWithoutLokasiRelationInput | PeralatanUpsertWithWhereUniqueWithoutLokasiRelationInput[]
    createMany?: PeralatanCreateManyLokasiRelationInputEnvelope
    set?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
    disconnect?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
    delete?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
    connect?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
    update?: PeralatanUpdateWithWhereUniqueWithoutLokasiRelationInput | PeralatanUpdateWithWhereUniqueWithoutLokasiRelationInput[]
    updateMany?: PeralatanUpdateManyWithWhereWithoutLokasiRelationInput | PeralatanUpdateManyWithWhereWithoutLokasiRelationInput[]
    deleteMany?: PeralatanScalarWhereInput | PeralatanScalarWhereInput[]
  }

  export type PeralatanUncheckedUpdateManyWithoutLokasiRelationNestedInput = {
    create?: XOR<PeralatanCreateWithoutLokasiRelationInput, PeralatanUncheckedCreateWithoutLokasiRelationInput> | PeralatanCreateWithoutLokasiRelationInput[] | PeralatanUncheckedCreateWithoutLokasiRelationInput[]
    connectOrCreate?: PeralatanCreateOrConnectWithoutLokasiRelationInput | PeralatanCreateOrConnectWithoutLokasiRelationInput[]
    upsert?: PeralatanUpsertWithWhereUniqueWithoutLokasiRelationInput | PeralatanUpsertWithWhereUniqueWithoutLokasiRelationInput[]
    createMany?: PeralatanCreateManyLokasiRelationInputEnvelope
    set?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
    disconnect?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
    delete?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
    connect?: PeralatanWhereUniqueInput | PeralatanWhereUniqueInput[]
    update?: PeralatanUpdateWithWhereUniqueWithoutLokasiRelationInput | PeralatanUpdateWithWhereUniqueWithoutLokasiRelationInput[]
    updateMany?: PeralatanUpdateManyWithWhereWithoutLokasiRelationInput | PeralatanUpdateManyWithWhereWithoutLokasiRelationInput[]
    deleteMany?: PeralatanScalarWhereInput | PeralatanScalarWhereInput[]
  }

  export type PeralatanCreateNestedOneWithoutJadwalInput = {
    create?: XOR<PeralatanCreateWithoutJadwalInput, PeralatanUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: PeralatanCreateOrConnectWithoutJadwalInput
    connect?: PeralatanWhereUniqueInput
  }

  export type TeknisiCreateNestedOneWithoutJadwalInput = {
    create?: XOR<TeknisiCreateWithoutJadwalInput, TeknisiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: TeknisiCreateOrConnectWithoutJadwalInput
    connect?: TeknisiWhereUniqueInput
  }

  export type LaporanCreateNestedOneWithoutJadwalInput = {
    create?: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: LaporanCreateOrConnectWithoutJadwalInput
    connect?: LaporanWhereUniqueInput
  }

  export type LaporanUncheckedCreateNestedOneWithoutJadwalInput = {
    create?: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: LaporanCreateOrConnectWithoutJadwalInput
    connect?: LaporanWhereUniqueInput
  }

  export type PeralatanUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<PeralatanCreateWithoutJadwalInput, PeralatanUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: PeralatanCreateOrConnectWithoutJadwalInput
    upsert?: PeralatanUpsertWithoutJadwalInput
    connect?: PeralatanWhereUniqueInput
    update?: XOR<XOR<PeralatanUpdateToOneWithWhereWithoutJadwalInput, PeralatanUpdateWithoutJadwalInput>, PeralatanUncheckedUpdateWithoutJadwalInput>
  }

  export type TeknisiUpdateOneRequiredWithoutJadwalNestedInput = {
    create?: XOR<TeknisiCreateWithoutJadwalInput, TeknisiUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: TeknisiCreateOrConnectWithoutJadwalInput
    upsert?: TeknisiUpsertWithoutJadwalInput
    connect?: TeknisiWhereUniqueInput
    update?: XOR<XOR<TeknisiUpdateToOneWithWhereWithoutJadwalInput, TeknisiUpdateWithoutJadwalInput>, TeknisiUncheckedUpdateWithoutJadwalInput>
  }

  export type LaporanUpdateOneWithoutJadwalNestedInput = {
    create?: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: LaporanCreateOrConnectWithoutJadwalInput
    upsert?: LaporanUpsertWithoutJadwalInput
    disconnect?: LaporanWhereInput | boolean
    delete?: LaporanWhereInput | boolean
    connect?: LaporanWhereUniqueInput
    update?: XOR<XOR<LaporanUpdateToOneWithWhereWithoutJadwalInput, LaporanUpdateWithoutJadwalInput>, LaporanUncheckedUpdateWithoutJadwalInput>
  }

  export type LaporanUncheckedUpdateOneWithoutJadwalNestedInput = {
    create?: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput>
    connectOrCreate?: LaporanCreateOrConnectWithoutJadwalInput
    upsert?: LaporanUpsertWithoutJadwalInput
    disconnect?: LaporanWhereInput | boolean
    delete?: LaporanWhereInput | boolean
    connect?: LaporanWhereUniqueInput
    update?: XOR<XOR<LaporanUpdateToOneWithWhereWithoutJadwalInput, LaporanUpdateWithoutJadwalInput>, LaporanUncheckedUpdateWithoutJadwalInput>
  }

  export type JadwalCreateNestedOneWithoutLaporanInput = {
    create?: XOR<JadwalCreateWithoutLaporanInput, JadwalUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: JadwalCreateOrConnectWithoutLaporanInput
    connect?: JadwalWhereUniqueInput
  }

  export type PeralatanCreateNestedOneWithoutLaporanInput = {
    create?: XOR<PeralatanCreateWithoutLaporanInput, PeralatanUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: PeralatanCreateOrConnectWithoutLaporanInput
    connect?: PeralatanWhereUniqueInput
  }

  export type TeknisiCreateNestedOneWithoutLaporanInput = {
    create?: XOR<TeknisiCreateWithoutLaporanInput, TeknisiUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: TeknisiCreateOrConnectWithoutLaporanInput
    connect?: TeknisiWhereUniqueInput
  }

  export type LaporanTimelineCreateNestedManyWithoutLaporanInput = {
    create?: XOR<LaporanTimelineCreateWithoutLaporanInput, LaporanTimelineUncheckedCreateWithoutLaporanInput> | LaporanTimelineCreateWithoutLaporanInput[] | LaporanTimelineUncheckedCreateWithoutLaporanInput[]
    connectOrCreate?: LaporanTimelineCreateOrConnectWithoutLaporanInput | LaporanTimelineCreateOrConnectWithoutLaporanInput[]
    createMany?: LaporanTimelineCreateManyLaporanInputEnvelope
    connect?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
  }

  export type LaporanTimelineUncheckedCreateNestedManyWithoutLaporanInput = {
    create?: XOR<LaporanTimelineCreateWithoutLaporanInput, LaporanTimelineUncheckedCreateWithoutLaporanInput> | LaporanTimelineCreateWithoutLaporanInput[] | LaporanTimelineUncheckedCreateWithoutLaporanInput[]
    connectOrCreate?: LaporanTimelineCreateOrConnectWithoutLaporanInput | LaporanTimelineCreateOrConnectWithoutLaporanInput[]
    createMany?: LaporanTimelineCreateManyLaporanInputEnvelope
    connect?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
  }

  export type JadwalUpdateOneWithoutLaporanNestedInput = {
    create?: XOR<JadwalCreateWithoutLaporanInput, JadwalUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: JadwalCreateOrConnectWithoutLaporanInput
    upsert?: JadwalUpsertWithoutLaporanInput
    disconnect?: JadwalWhereInput | boolean
    delete?: JadwalWhereInput | boolean
    connect?: JadwalWhereUniqueInput
    update?: XOR<XOR<JadwalUpdateToOneWithWhereWithoutLaporanInput, JadwalUpdateWithoutLaporanInput>, JadwalUncheckedUpdateWithoutLaporanInput>
  }

  export type PeralatanUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<PeralatanCreateWithoutLaporanInput, PeralatanUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: PeralatanCreateOrConnectWithoutLaporanInput
    upsert?: PeralatanUpsertWithoutLaporanInput
    connect?: PeralatanWhereUniqueInput
    update?: XOR<XOR<PeralatanUpdateToOneWithWhereWithoutLaporanInput, PeralatanUpdateWithoutLaporanInput>, PeralatanUncheckedUpdateWithoutLaporanInput>
  }

  export type TeknisiUpdateOneRequiredWithoutLaporanNestedInput = {
    create?: XOR<TeknisiCreateWithoutLaporanInput, TeknisiUncheckedCreateWithoutLaporanInput>
    connectOrCreate?: TeknisiCreateOrConnectWithoutLaporanInput
    upsert?: TeknisiUpsertWithoutLaporanInput
    connect?: TeknisiWhereUniqueInput
    update?: XOR<XOR<TeknisiUpdateToOneWithWhereWithoutLaporanInput, TeknisiUpdateWithoutLaporanInput>, TeknisiUncheckedUpdateWithoutLaporanInput>
  }

  export type LaporanTimelineUpdateManyWithoutLaporanNestedInput = {
    create?: XOR<LaporanTimelineCreateWithoutLaporanInput, LaporanTimelineUncheckedCreateWithoutLaporanInput> | LaporanTimelineCreateWithoutLaporanInput[] | LaporanTimelineUncheckedCreateWithoutLaporanInput[]
    connectOrCreate?: LaporanTimelineCreateOrConnectWithoutLaporanInput | LaporanTimelineCreateOrConnectWithoutLaporanInput[]
    upsert?: LaporanTimelineUpsertWithWhereUniqueWithoutLaporanInput | LaporanTimelineUpsertWithWhereUniqueWithoutLaporanInput[]
    createMany?: LaporanTimelineCreateManyLaporanInputEnvelope
    set?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
    disconnect?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
    delete?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
    connect?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
    update?: LaporanTimelineUpdateWithWhereUniqueWithoutLaporanInput | LaporanTimelineUpdateWithWhereUniqueWithoutLaporanInput[]
    updateMany?: LaporanTimelineUpdateManyWithWhereWithoutLaporanInput | LaporanTimelineUpdateManyWithWhereWithoutLaporanInput[]
    deleteMany?: LaporanTimelineScalarWhereInput | LaporanTimelineScalarWhereInput[]
  }

  export type LaporanTimelineUncheckedUpdateManyWithoutLaporanNestedInput = {
    create?: XOR<LaporanTimelineCreateWithoutLaporanInput, LaporanTimelineUncheckedCreateWithoutLaporanInput> | LaporanTimelineCreateWithoutLaporanInput[] | LaporanTimelineUncheckedCreateWithoutLaporanInput[]
    connectOrCreate?: LaporanTimelineCreateOrConnectWithoutLaporanInput | LaporanTimelineCreateOrConnectWithoutLaporanInput[]
    upsert?: LaporanTimelineUpsertWithWhereUniqueWithoutLaporanInput | LaporanTimelineUpsertWithWhereUniqueWithoutLaporanInput[]
    createMany?: LaporanTimelineCreateManyLaporanInputEnvelope
    set?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
    disconnect?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
    delete?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
    connect?: LaporanTimelineWhereUniqueInput | LaporanTimelineWhereUniqueInput[]
    update?: LaporanTimelineUpdateWithWhereUniqueWithoutLaporanInput | LaporanTimelineUpdateWithWhereUniqueWithoutLaporanInput[]
    updateMany?: LaporanTimelineUpdateManyWithWhereWithoutLaporanInput | LaporanTimelineUpdateManyWithWhereWithoutLaporanInput[]
    deleteMany?: LaporanTimelineScalarWhereInput | LaporanTimelineScalarWhereInput[]
  }

  export type LaporanCreateNestedOneWithoutTimelineInput = {
    create?: XOR<LaporanCreateWithoutTimelineInput, LaporanUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: LaporanCreateOrConnectWithoutTimelineInput
    connect?: LaporanWhereUniqueInput
  }

  export type LaporanUpdateOneRequiredWithoutTimelineNestedInput = {
    create?: XOR<LaporanCreateWithoutTimelineInput, LaporanUncheckedCreateWithoutTimelineInput>
    connectOrCreate?: LaporanCreateOrConnectWithoutTimelineInput
    upsert?: LaporanUpsertWithoutTimelineInput
    connect?: LaporanWhereUniqueInput
    update?: XOR<XOR<LaporanUpdateToOneWithWhereWithoutTimelineInput, LaporanUpdateWithoutTimelineInput>, LaporanUncheckedUpdateWithoutTimelineInput>
  }

  export type UserCreateNestedOneWithoutNotifikasiInput = {
    create?: XOR<UserCreateWithoutNotifikasiInput, UserUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotifikasiInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotifikasiNestedInput = {
    create?: XOR<UserCreateWithoutNotifikasiInput, UserUncheckedCreateWithoutNotifikasiInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotifikasiInput
    upsert?: UserUpsertWithoutNotifikasiInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotifikasiInput, UserUpdateWithoutNotifikasiInput>, UserUncheckedUpdateWithoutNotifikasiInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type TeknisiCreateWithoutUserInput = {
    id?: string
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalCreateNestedManyWithoutTeknisiInput
    laporan?: LaporanCreateNestedManyWithoutTeknisiInput
  }

  export type TeknisiUncheckedCreateWithoutUserInput = {
    id?: string
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalUncheckedCreateNestedManyWithoutTeknisiInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutTeknisiInput
  }

  export type TeknisiCreateOrConnectWithoutUserInput = {
    where: TeknisiWhereUniqueInput
    create: XOR<TeknisiCreateWithoutUserInput, TeknisiUncheckedCreateWithoutUserInput>
  }

  export type NotifikasiCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotifikasiUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotifikasiCreateOrConnectWithoutUserInput = {
    where: NotifikasiWhereUniqueInput
    create: XOR<NotifikasiCreateWithoutUserInput, NotifikasiUncheckedCreateWithoutUserInput>
  }

  export type NotifikasiCreateManyUserInputEnvelope = {
    data: NotifikasiCreateManyUserInput | NotifikasiCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeknisiUpsertWithoutUserInput = {
    update: XOR<TeknisiUpdateWithoutUserInput, TeknisiUncheckedUpdateWithoutUserInput>
    create: XOR<TeknisiCreateWithoutUserInput, TeknisiUncheckedCreateWithoutUserInput>
    where?: TeknisiWhereInput
  }

  export type TeknisiUpdateToOneWithWhereWithoutUserInput = {
    where?: TeknisiWhereInput
    data: XOR<TeknisiUpdateWithoutUserInput, TeknisiUncheckedUpdateWithoutUserInput>
  }

  export type TeknisiUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateManyWithoutTeknisiNestedInput
    laporan?: LaporanUpdateManyWithoutTeknisiNestedInput
  }

  export type TeknisiUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUncheckedUpdateManyWithoutTeknisiNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutTeknisiNestedInput
  }

  export type NotifikasiUpsertWithWhereUniqueWithoutUserInput = {
    where: NotifikasiWhereUniqueInput
    update: XOR<NotifikasiUpdateWithoutUserInput, NotifikasiUncheckedUpdateWithoutUserInput>
    create: XOR<NotifikasiCreateWithoutUserInput, NotifikasiUncheckedCreateWithoutUserInput>
  }

  export type NotifikasiUpdateWithWhereUniqueWithoutUserInput = {
    where: NotifikasiWhereUniqueInput
    data: XOR<NotifikasiUpdateWithoutUserInput, NotifikasiUncheckedUpdateWithoutUserInput>
  }

  export type NotifikasiUpdateManyWithWhereWithoutUserInput = {
    where: NotifikasiScalarWhereInput
    data: XOR<NotifikasiUpdateManyMutationInput, NotifikasiUncheckedUpdateManyWithoutUserInput>
  }

  export type NotifikasiScalarWhereInput = {
    AND?: NotifikasiScalarWhereInput | NotifikasiScalarWhereInput[]
    OR?: NotifikasiScalarWhereInput[]
    NOT?: NotifikasiScalarWhereInput | NotifikasiScalarWhereInput[]
    id?: StringFilter<"Notifikasi"> | string
    userId?: StringFilter<"Notifikasi"> | string
    type?: StringFilter<"Notifikasi"> | string
    title?: StringFilter<"Notifikasi"> | string
    message?: StringFilter<"Notifikasi"> | string
    link?: StringNullableFilter<"Notifikasi"> | string | null
    isRead?: BoolFilter<"Notifikasi"> | boolean
    createdAt?: DateTimeFilter<"Notifikasi"> | Date | string
  }

  export type JadwalCreateWithoutPeralatanInput = {
    id?: string
    kodeJadwal: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teknisi: TeknisiCreateNestedOneWithoutJadwalInput
    laporan?: LaporanCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutPeralatanInput = {
    id?: string
    kodeJadwal: string
    teknisiId: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type JadwalCreateOrConnectWithoutPeralatanInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutPeralatanInput, JadwalUncheckedCreateWithoutPeralatanInput>
  }

  export type JadwalCreateManyPeralatanInputEnvelope = {
    data: JadwalCreateManyPeralatanInput | JadwalCreateManyPeralatanInput[]
    skipDuplicates?: boolean
  }

  export type LaporanCreateWithoutPeralatanInput = {
    id?: string
    kodeId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalCreateNestedOneWithoutLaporanInput
    teknisi: TeknisiCreateNestedOneWithoutLaporanInput
    timeline?: LaporanTimelineCreateNestedManyWithoutLaporanInput
  }

  export type LaporanUncheckedCreateWithoutPeralatanInput = {
    id?: string
    kodeId: string
    jadwalId?: string | null
    teknisiId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timeline?: LaporanTimelineUncheckedCreateNestedManyWithoutLaporanInput
  }

  export type LaporanCreateOrConnectWithoutPeralatanInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutPeralatanInput, LaporanUncheckedCreateWithoutPeralatanInput>
  }

  export type LaporanCreateManyPeralatanInputEnvelope = {
    data: LaporanCreateManyPeralatanInput | LaporanCreateManyPeralatanInput[]
    skipDuplicates?: boolean
  }

  export type LokasiCreateWithoutPeralatanInput = {
    id?: string
    kode: string
    nama: string
    kota: string
    provinsi?: string | null
    zona?: string | null
    area?: string | null
    deskripsi?: string | null
    lat?: number | null
    lng?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LokasiUncheckedCreateWithoutPeralatanInput = {
    id?: string
    kode: string
    nama: string
    kota: string
    provinsi?: string | null
    zona?: string | null
    area?: string | null
    deskripsi?: string | null
    lat?: number | null
    lng?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LokasiCreateOrConnectWithoutPeralatanInput = {
    where: LokasiWhereUniqueInput
    create: XOR<LokasiCreateWithoutPeralatanInput, LokasiUncheckedCreateWithoutPeralatanInput>
  }

  export type JadwalUpsertWithWhereUniqueWithoutPeralatanInput = {
    where: JadwalWhereUniqueInput
    update: XOR<JadwalUpdateWithoutPeralatanInput, JadwalUncheckedUpdateWithoutPeralatanInput>
    create: XOR<JadwalCreateWithoutPeralatanInput, JadwalUncheckedCreateWithoutPeralatanInput>
  }

  export type JadwalUpdateWithWhereUniqueWithoutPeralatanInput = {
    where: JadwalWhereUniqueInput
    data: XOR<JadwalUpdateWithoutPeralatanInput, JadwalUncheckedUpdateWithoutPeralatanInput>
  }

  export type JadwalUpdateManyWithWhereWithoutPeralatanInput = {
    where: JadwalScalarWhereInput
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyWithoutPeralatanInput>
  }

  export type JadwalScalarWhereInput = {
    AND?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
    OR?: JadwalScalarWhereInput[]
    NOT?: JadwalScalarWhereInput | JadwalScalarWhereInput[]
    id?: StringFilter<"Jadwal"> | string
    kodeJadwal?: StringFilter<"Jadwal"> | string
    peralatanId?: StringFilter<"Jadwal"> | string
    teknisiId?: StringFilter<"Jadwal"> | string
    tanggal?: DateTimeFilter<"Jadwal"> | Date | string
    waktuMulai?: StringFilter<"Jadwal"> | string
    waktuSelesai?: StringFilter<"Jadwal"> | string
    status?: StringFilter<"Jadwal"> | string
    catatan?: StringNullableFilter<"Jadwal"> | string | null
    createdAt?: DateTimeFilter<"Jadwal"> | Date | string
    updatedAt?: DateTimeFilter<"Jadwal"> | Date | string
  }

  export type LaporanUpsertWithWhereUniqueWithoutPeralatanInput = {
    where: LaporanWhereUniqueInput
    update: XOR<LaporanUpdateWithoutPeralatanInput, LaporanUncheckedUpdateWithoutPeralatanInput>
    create: XOR<LaporanCreateWithoutPeralatanInput, LaporanUncheckedCreateWithoutPeralatanInput>
  }

  export type LaporanUpdateWithWhereUniqueWithoutPeralatanInput = {
    where: LaporanWhereUniqueInput
    data: XOR<LaporanUpdateWithoutPeralatanInput, LaporanUncheckedUpdateWithoutPeralatanInput>
  }

  export type LaporanUpdateManyWithWhereWithoutPeralatanInput = {
    where: LaporanScalarWhereInput
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyWithoutPeralatanInput>
  }

  export type LaporanScalarWhereInput = {
    AND?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    OR?: LaporanScalarWhereInput[]
    NOT?: LaporanScalarWhereInput | LaporanScalarWhereInput[]
    id?: StringFilter<"Laporan"> | string
    kodeId?: StringFilter<"Laporan"> | string
    jadwalId?: StringNullableFilter<"Laporan"> | string | null
    peralatanId?: StringFilter<"Laporan"> | string
    teknisiId?: StringFilter<"Laporan"> | string
    checklist?: StringFilter<"Laporan"> | string
    pengukuran?: StringNullableFilter<"Laporan"> | string | null
    catatan?: StringNullableFilter<"Laporan"> | string | null
    fotoUrls?: StringFilter<"Laporan"> | string
    kesimpulan?: StringNullableFilter<"Laporan"> | string | null
    status?: StringFilter<"Laporan"> | string
    approvalNote?: StringNullableFilter<"Laporan"> | string | null
    approvedBy?: StringNullableFilter<"Laporan"> | string | null
    approvedAt?: DateTimeNullableFilter<"Laporan"> | Date | string | null
    revisiCount?: IntFilter<"Laporan"> | number
    createdAt?: DateTimeFilter<"Laporan"> | Date | string
    updatedAt?: DateTimeFilter<"Laporan"> | Date | string
  }

  export type LokasiUpsertWithoutPeralatanInput = {
    update: XOR<LokasiUpdateWithoutPeralatanInput, LokasiUncheckedUpdateWithoutPeralatanInput>
    create: XOR<LokasiCreateWithoutPeralatanInput, LokasiUncheckedCreateWithoutPeralatanInput>
    where?: LokasiWhereInput
  }

  export type LokasiUpdateToOneWithWhereWithoutPeralatanInput = {
    where?: LokasiWhereInput
    data: XOR<LokasiUpdateWithoutPeralatanInput, LokasiUncheckedUpdateWithoutPeralatanInput>
  }

  export type LokasiUpdateWithoutPeralatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LokasiUncheckedUpdateWithoutPeralatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kode?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    provinsi?: NullableStringFieldUpdateOperationsInput | string | null
    zona?: NullableStringFieldUpdateOperationsInput | string | null
    area?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutTeknisiInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatarUrl?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifikasi?: NotifikasiCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeknisiInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatarUrl?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    notifikasi?: NotifikasiUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeknisiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeknisiInput, UserUncheckedCreateWithoutTeknisiInput>
  }

  export type JadwalCreateWithoutTeknisiInput = {
    id?: string
    kodeJadwal: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    peralatan: PeralatanCreateNestedOneWithoutJadwalInput
    laporan?: LaporanCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutTeknisiInput = {
    id?: string
    kodeJadwal: string
    peralatanId: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanUncheckedCreateNestedOneWithoutJadwalInput
  }

  export type JadwalCreateOrConnectWithoutTeknisiInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutTeknisiInput, JadwalUncheckedCreateWithoutTeknisiInput>
  }

  export type JadwalCreateManyTeknisiInputEnvelope = {
    data: JadwalCreateManyTeknisiInput | JadwalCreateManyTeknisiInput[]
    skipDuplicates?: boolean
  }

  export type LaporanCreateWithoutTeknisiInput = {
    id?: string
    kodeId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalCreateNestedOneWithoutLaporanInput
    peralatan: PeralatanCreateNestedOneWithoutLaporanInput
    timeline?: LaporanTimelineCreateNestedManyWithoutLaporanInput
  }

  export type LaporanUncheckedCreateWithoutTeknisiInput = {
    id?: string
    kodeId: string
    jadwalId?: string | null
    peralatanId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timeline?: LaporanTimelineUncheckedCreateNestedManyWithoutLaporanInput
  }

  export type LaporanCreateOrConnectWithoutTeknisiInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutTeknisiInput, LaporanUncheckedCreateWithoutTeknisiInput>
  }

  export type LaporanCreateManyTeknisiInputEnvelope = {
    data: LaporanCreateManyTeknisiInput | LaporanCreateManyTeknisiInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutTeknisiInput = {
    update: XOR<UserUpdateWithoutTeknisiInput, UserUncheckedUpdateWithoutTeknisiInput>
    create: XOR<UserCreateWithoutTeknisiInput, UserUncheckedCreateWithoutTeknisiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeknisiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeknisiInput, UserUncheckedUpdateWithoutTeknisiInput>
  }

  export type UserUpdateWithoutTeknisiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifikasi?: NotifikasiUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeknisiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifikasi?: NotifikasiUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JadwalUpsertWithWhereUniqueWithoutTeknisiInput = {
    where: JadwalWhereUniqueInput
    update: XOR<JadwalUpdateWithoutTeknisiInput, JadwalUncheckedUpdateWithoutTeknisiInput>
    create: XOR<JadwalCreateWithoutTeknisiInput, JadwalUncheckedCreateWithoutTeknisiInput>
  }

  export type JadwalUpdateWithWhereUniqueWithoutTeknisiInput = {
    where: JadwalWhereUniqueInput
    data: XOR<JadwalUpdateWithoutTeknisiInput, JadwalUncheckedUpdateWithoutTeknisiInput>
  }

  export type JadwalUpdateManyWithWhereWithoutTeknisiInput = {
    where: JadwalScalarWhereInput
    data: XOR<JadwalUpdateManyMutationInput, JadwalUncheckedUpdateManyWithoutTeknisiInput>
  }

  export type LaporanUpsertWithWhereUniqueWithoutTeknisiInput = {
    where: LaporanWhereUniqueInput
    update: XOR<LaporanUpdateWithoutTeknisiInput, LaporanUncheckedUpdateWithoutTeknisiInput>
    create: XOR<LaporanCreateWithoutTeknisiInput, LaporanUncheckedCreateWithoutTeknisiInput>
  }

  export type LaporanUpdateWithWhereUniqueWithoutTeknisiInput = {
    where: LaporanWhereUniqueInput
    data: XOR<LaporanUpdateWithoutTeknisiInput, LaporanUncheckedUpdateWithoutTeknisiInput>
  }

  export type LaporanUpdateManyWithWhereWithoutTeknisiInput = {
    where: LaporanScalarWhereInput
    data: XOR<LaporanUpdateManyMutationInput, LaporanUncheckedUpdateManyWithoutTeknisiInput>
  }

  export type PeralatanCreateWithoutLokasiRelationInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    jadwal?: JadwalCreateNestedManyWithoutPeralatanInput
    laporan?: LaporanCreateNestedManyWithoutPeralatanInput
  }

  export type PeralatanUncheckedCreateWithoutLokasiRelationInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    jadwal?: JadwalUncheckedCreateNestedManyWithoutPeralatanInput
    laporan?: LaporanUncheckedCreateNestedManyWithoutPeralatanInput
  }

  export type PeralatanCreateOrConnectWithoutLokasiRelationInput = {
    where: PeralatanWhereUniqueInput
    create: XOR<PeralatanCreateWithoutLokasiRelationInput, PeralatanUncheckedCreateWithoutLokasiRelationInput>
  }

  export type PeralatanCreateManyLokasiRelationInputEnvelope = {
    data: PeralatanCreateManyLokasiRelationInput | PeralatanCreateManyLokasiRelationInput[]
    skipDuplicates?: boolean
  }

  export type PeralatanUpsertWithWhereUniqueWithoutLokasiRelationInput = {
    where: PeralatanWhereUniqueInput
    update: XOR<PeralatanUpdateWithoutLokasiRelationInput, PeralatanUncheckedUpdateWithoutLokasiRelationInput>
    create: XOR<PeralatanCreateWithoutLokasiRelationInput, PeralatanUncheckedCreateWithoutLokasiRelationInput>
  }

  export type PeralatanUpdateWithWhereUniqueWithoutLokasiRelationInput = {
    where: PeralatanWhereUniqueInput
    data: XOR<PeralatanUpdateWithoutLokasiRelationInput, PeralatanUncheckedUpdateWithoutLokasiRelationInput>
  }

  export type PeralatanUpdateManyWithWhereWithoutLokasiRelationInput = {
    where: PeralatanScalarWhereInput
    data: XOR<PeralatanUpdateManyMutationInput, PeralatanUncheckedUpdateManyWithoutLokasiRelationInput>
  }

  export type PeralatanScalarWhereInput = {
    AND?: PeralatanScalarWhereInput | PeralatanScalarWhereInput[]
    OR?: PeralatanScalarWhereInput[]
    NOT?: PeralatanScalarWhereInput | PeralatanScalarWhereInput[]
    id?: StringFilter<"Peralatan"> | string
    kodeId?: StringFilter<"Peralatan"> | string
    nama?: StringFilter<"Peralatan"> | string
    jenis?: StringFilter<"Peralatan"> | string
    lokasi?: StringFilter<"Peralatan"> | string
    noRegister?: StringNullableFilter<"Peralatan"> | string | null
    fotoUrl?: StringNullableFilter<"Peralatan"> | string | null
    kapasitas?: StringNullableFilter<"Peralatan"> | string | null
    tinggiDimensi?: StringNullableFilter<"Peralatan"> | string | null
    jenisKabel?: StringNullableFilter<"Peralatan"> | string | null
    masaBerlaku?: DateTimeNullableFilter<"Peralatan"> | Date | string | null
    lat?: FloatNullableFilter<"Peralatan"> | number | null
    lng?: FloatNullableFilter<"Peralatan"> | number | null
    status?: StringFilter<"Peralatan"> | string
    qrCodeUrl?: StringNullableFilter<"Peralatan"> | string | null
    createdAt?: DateTimeFilter<"Peralatan"> | Date | string
    lokasiId?: StringNullableFilter<"Peralatan"> | string | null
  }

  export type PeralatanCreateWithoutJadwalInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    laporan?: LaporanCreateNestedManyWithoutPeralatanInput
    lokasiRelation?: LokasiCreateNestedOneWithoutPeralatanInput
  }

  export type PeralatanUncheckedCreateWithoutJadwalInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    lokasiId?: string | null
    laporan?: LaporanUncheckedCreateNestedManyWithoutPeralatanInput
  }

  export type PeralatanCreateOrConnectWithoutJadwalInput = {
    where: PeralatanWhereUniqueInput
    create: XOR<PeralatanCreateWithoutJadwalInput, PeralatanUncheckedCreateWithoutJadwalInput>
  }

  export type TeknisiCreateWithoutJadwalInput = {
    id?: string
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTeknisiInput
    laporan?: LaporanCreateNestedManyWithoutTeknisiInput
  }

  export type TeknisiUncheckedCreateWithoutJadwalInput = {
    id?: string
    userId?: string | null
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    laporan?: LaporanUncheckedCreateNestedManyWithoutTeknisiInput
  }

  export type TeknisiCreateOrConnectWithoutJadwalInput = {
    where: TeknisiWhereUniqueInput
    create: XOR<TeknisiCreateWithoutJadwalInput, TeknisiUncheckedCreateWithoutJadwalInput>
  }

  export type LaporanCreateWithoutJadwalInput = {
    id?: string
    kodeId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    peralatan: PeralatanCreateNestedOneWithoutLaporanInput
    teknisi: TeknisiCreateNestedOneWithoutLaporanInput
    timeline?: LaporanTimelineCreateNestedManyWithoutLaporanInput
  }

  export type LaporanUncheckedCreateWithoutJadwalInput = {
    id?: string
    kodeId: string
    peralatanId: string
    teknisiId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    timeline?: LaporanTimelineUncheckedCreateNestedManyWithoutLaporanInput
  }

  export type LaporanCreateOrConnectWithoutJadwalInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput>
  }

  export type PeralatanUpsertWithoutJadwalInput = {
    update: XOR<PeralatanUpdateWithoutJadwalInput, PeralatanUncheckedUpdateWithoutJadwalInput>
    create: XOR<PeralatanCreateWithoutJadwalInput, PeralatanUncheckedCreateWithoutJadwalInput>
    where?: PeralatanWhereInput
  }

  export type PeralatanUpdateToOneWithWhereWithoutJadwalInput = {
    where?: PeralatanWhereInput
    data: XOR<PeralatanUpdateWithoutJadwalInput, PeralatanUncheckedUpdateWithoutJadwalInput>
  }

  export type PeralatanUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanUpdateManyWithoutPeralatanNestedInput
    lokasiRelation?: LokasiUpdateOneWithoutPeralatanNestedInput
  }

  export type PeralatanUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    laporan?: LaporanUncheckedUpdateManyWithoutPeralatanNestedInput
  }

  export type TeknisiUpsertWithoutJadwalInput = {
    update: XOR<TeknisiUpdateWithoutJadwalInput, TeknisiUncheckedUpdateWithoutJadwalInput>
    create: XOR<TeknisiCreateWithoutJadwalInput, TeknisiUncheckedCreateWithoutJadwalInput>
    where?: TeknisiWhereInput
  }

  export type TeknisiUpdateToOneWithWhereWithoutJadwalInput = {
    where?: TeknisiWhereInput
    data: XOR<TeknisiUpdateWithoutJadwalInput, TeknisiUncheckedUpdateWithoutJadwalInput>
  }

  export type TeknisiUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeknisiNestedInput
    laporan?: LaporanUpdateManyWithoutTeknisiNestedInput
  }

  export type TeknisiUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanUncheckedUpdateManyWithoutTeknisiNestedInput
  }

  export type LaporanUpsertWithoutJadwalInput = {
    update: XOR<LaporanUpdateWithoutJadwalInput, LaporanUncheckedUpdateWithoutJadwalInput>
    create: XOR<LaporanCreateWithoutJadwalInput, LaporanUncheckedCreateWithoutJadwalInput>
    where?: LaporanWhereInput
  }

  export type LaporanUpdateToOneWithWhereWithoutJadwalInput = {
    where?: LaporanWhereInput
    data: XOR<LaporanUpdateWithoutJadwalInput, LaporanUncheckedUpdateWithoutJadwalInput>
  }

  export type LaporanUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peralatan?: PeralatanUpdateOneRequiredWithoutLaporanNestedInput
    teknisi?: TeknisiUpdateOneRequiredWithoutLaporanNestedInput
    timeline?: LaporanTimelineUpdateManyWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateWithoutJadwalInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    peralatanId?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: LaporanTimelineUncheckedUpdateManyWithoutLaporanNestedInput
  }

  export type JadwalCreateWithoutLaporanInput = {
    id?: string
    kodeJadwal: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    peralatan: PeralatanCreateNestedOneWithoutJadwalInput
    teknisi: TeknisiCreateNestedOneWithoutJadwalInput
  }

  export type JadwalUncheckedCreateWithoutLaporanInput = {
    id?: string
    kodeJadwal: string
    peralatanId: string
    teknisiId: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalCreateOrConnectWithoutLaporanInput = {
    where: JadwalWhereUniqueInput
    create: XOR<JadwalCreateWithoutLaporanInput, JadwalUncheckedCreateWithoutLaporanInput>
  }

  export type PeralatanCreateWithoutLaporanInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    jadwal?: JadwalCreateNestedManyWithoutPeralatanInput
    lokasiRelation?: LokasiCreateNestedOneWithoutPeralatanInput
  }

  export type PeralatanUncheckedCreateWithoutLaporanInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
    lokasiId?: string | null
    jadwal?: JadwalUncheckedCreateNestedManyWithoutPeralatanInput
  }

  export type PeralatanCreateOrConnectWithoutLaporanInput = {
    where: PeralatanWhereUniqueInput
    create: XOR<PeralatanCreateWithoutLaporanInput, PeralatanUncheckedCreateWithoutLaporanInput>
  }

  export type TeknisiCreateWithoutLaporanInput = {
    id?: string
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTeknisiInput
    jadwal?: JadwalCreateNestedManyWithoutTeknisiInput
  }

  export type TeknisiUncheckedCreateWithoutLaporanInput = {
    id?: string
    userId?: string | null
    nama: string
    idKaryawan: string
    email: string
    noHp?: string | null
    divisi: string
    avatarUrl?: string | null
    status?: string
    totalInspeksi?: number
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalUncheckedCreateNestedManyWithoutTeknisiInput
  }

  export type TeknisiCreateOrConnectWithoutLaporanInput = {
    where: TeknisiWhereUniqueInput
    create: XOR<TeknisiCreateWithoutLaporanInput, TeknisiUncheckedCreateWithoutLaporanInput>
  }

  export type LaporanTimelineCreateWithoutLaporanInput = {
    id?: string
    type: string
    description: string
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type LaporanTimelineUncheckedCreateWithoutLaporanInput = {
    id?: string
    type: string
    description: string
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type LaporanTimelineCreateOrConnectWithoutLaporanInput = {
    where: LaporanTimelineWhereUniqueInput
    create: XOR<LaporanTimelineCreateWithoutLaporanInput, LaporanTimelineUncheckedCreateWithoutLaporanInput>
  }

  export type LaporanTimelineCreateManyLaporanInputEnvelope = {
    data: LaporanTimelineCreateManyLaporanInput | LaporanTimelineCreateManyLaporanInput[]
    skipDuplicates?: boolean
  }

  export type JadwalUpsertWithoutLaporanInput = {
    update: XOR<JadwalUpdateWithoutLaporanInput, JadwalUncheckedUpdateWithoutLaporanInput>
    create: XOR<JadwalCreateWithoutLaporanInput, JadwalUncheckedCreateWithoutLaporanInput>
    where?: JadwalWhereInput
  }

  export type JadwalUpdateToOneWithWhereWithoutLaporanInput = {
    where?: JadwalWhereInput
    data: XOR<JadwalUpdateWithoutLaporanInput, JadwalUncheckedUpdateWithoutLaporanInput>
  }

  export type JadwalUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peralatan?: PeralatanUpdateOneRequiredWithoutJadwalNestedInput
    teknisi?: TeknisiUpdateOneRequiredWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    peralatanId?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeralatanUpsertWithoutLaporanInput = {
    update: XOR<PeralatanUpdateWithoutLaporanInput, PeralatanUncheckedUpdateWithoutLaporanInput>
    create: XOR<PeralatanCreateWithoutLaporanInput, PeralatanUncheckedCreateWithoutLaporanInput>
    where?: PeralatanWhereInput
  }

  export type PeralatanUpdateToOneWithWhereWithoutLaporanInput = {
    where?: PeralatanWhereInput
    data: XOR<PeralatanUpdateWithoutLaporanInput, PeralatanUncheckedUpdateWithoutLaporanInput>
  }

  export type PeralatanUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateManyWithoutPeralatanNestedInput
    lokasiRelation?: LokasiUpdateOneWithoutPeralatanNestedInput
  }

  export type PeralatanUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lokasiId?: NullableStringFieldUpdateOperationsInput | string | null
    jadwal?: JadwalUncheckedUpdateManyWithoutPeralatanNestedInput
  }

  export type TeknisiUpsertWithoutLaporanInput = {
    update: XOR<TeknisiUpdateWithoutLaporanInput, TeknisiUncheckedUpdateWithoutLaporanInput>
    create: XOR<TeknisiCreateWithoutLaporanInput, TeknisiUncheckedCreateWithoutLaporanInput>
    where?: TeknisiWhereInput
  }

  export type TeknisiUpdateToOneWithWhereWithoutLaporanInput = {
    where?: TeknisiWhereInput
    data: XOR<TeknisiUpdateWithoutLaporanInput, TeknisiUncheckedUpdateWithoutLaporanInput>
  }

  export type TeknisiUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTeknisiNestedInput
    jadwal?: JadwalUpdateManyWithoutTeknisiNestedInput
  }

  export type TeknisiUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nama?: StringFieldUpdateOperationsInput | string
    idKaryawan?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    noHp?: NullableStringFieldUpdateOperationsInput | string | null
    divisi?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    totalInspeksi?: IntFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUncheckedUpdateManyWithoutTeknisiNestedInput
  }

  export type LaporanTimelineUpsertWithWhereUniqueWithoutLaporanInput = {
    where: LaporanTimelineWhereUniqueInput
    update: XOR<LaporanTimelineUpdateWithoutLaporanInput, LaporanTimelineUncheckedUpdateWithoutLaporanInput>
    create: XOR<LaporanTimelineCreateWithoutLaporanInput, LaporanTimelineUncheckedCreateWithoutLaporanInput>
  }

  export type LaporanTimelineUpdateWithWhereUniqueWithoutLaporanInput = {
    where: LaporanTimelineWhereUniqueInput
    data: XOR<LaporanTimelineUpdateWithoutLaporanInput, LaporanTimelineUncheckedUpdateWithoutLaporanInput>
  }

  export type LaporanTimelineUpdateManyWithWhereWithoutLaporanInput = {
    where: LaporanTimelineScalarWhereInput
    data: XOR<LaporanTimelineUpdateManyMutationInput, LaporanTimelineUncheckedUpdateManyWithoutLaporanInput>
  }

  export type LaporanTimelineScalarWhereInput = {
    AND?: LaporanTimelineScalarWhereInput | LaporanTimelineScalarWhereInput[]
    OR?: LaporanTimelineScalarWhereInput[]
    NOT?: LaporanTimelineScalarWhereInput | LaporanTimelineScalarWhereInput[]
    id?: StringFilter<"LaporanTimeline"> | string
    laporanId?: StringFilter<"LaporanTimeline"> | string
    type?: StringFilter<"LaporanTimeline"> | string
    description?: StringFilter<"LaporanTimeline"> | string
    createdBy?: StringNullableFilter<"LaporanTimeline"> | string | null
    createdAt?: DateTimeFilter<"LaporanTimeline"> | Date | string
  }

  export type LaporanCreateWithoutTimelineInput = {
    id?: string
    kodeId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    jadwal?: JadwalCreateNestedOneWithoutLaporanInput
    peralatan: PeralatanCreateNestedOneWithoutLaporanInput
    teknisi: TeknisiCreateNestedOneWithoutLaporanInput
  }

  export type LaporanUncheckedCreateWithoutTimelineInput = {
    id?: string
    kodeId: string
    jadwalId?: string | null
    peralatanId: string
    teknisiId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanCreateOrConnectWithoutTimelineInput = {
    where: LaporanWhereUniqueInput
    create: XOR<LaporanCreateWithoutTimelineInput, LaporanUncheckedCreateWithoutTimelineInput>
  }

  export type LaporanUpsertWithoutTimelineInput = {
    update: XOR<LaporanUpdateWithoutTimelineInput, LaporanUncheckedUpdateWithoutTimelineInput>
    create: XOR<LaporanCreateWithoutTimelineInput, LaporanUncheckedCreateWithoutTimelineInput>
    where?: LaporanWhereInput
  }

  export type LaporanUpdateToOneWithWhereWithoutTimelineInput = {
    where?: LaporanWhereInput
    data: XOR<LaporanUpdateWithoutTimelineInput, LaporanUncheckedUpdateWithoutTimelineInput>
  }

  export type LaporanUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateOneWithoutLaporanNestedInput
    peralatan?: PeralatanUpdateOneRequiredWithoutLaporanNestedInput
    teknisi?: TeknisiUpdateOneRequiredWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateWithoutTimelineInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    jadwalId?: NullableStringFieldUpdateOperationsInput | string | null
    peralatanId?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNotifikasiInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatarUrl?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teknisi?: TeknisiCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotifikasiInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: string
    avatarUrl?: string | null
    isActive?: boolean
    refreshToken?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    teknisi?: TeknisiUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotifikasiInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotifikasiInput, UserUncheckedCreateWithoutNotifikasiInput>
  }

  export type UserUpsertWithoutNotifikasiInput = {
    update: XOR<UserUpdateWithoutNotifikasiInput, UserUncheckedUpdateWithoutNotifikasiInput>
    create: XOR<UserCreateWithoutNotifikasiInput, UserUncheckedCreateWithoutNotifikasiInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotifikasiInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotifikasiInput, UserUncheckedUpdateWithoutNotifikasiInput>
  }

  export type UserUpdateWithoutNotifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teknisi?: TeknisiUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotifikasiInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teknisi?: TeknisiUncheckedUpdateOneWithoutUserNestedInput
  }

  export type NotifikasiCreateManyUserInput = {
    id?: string
    type: string
    title: string
    message: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotifikasiUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotifikasiUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalCreateManyPeralatanInput = {
    id?: string
    kodeJadwal: string
    teknisiId: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanCreateManyPeralatanInput = {
    id?: string
    kodeId: string
    jadwalId?: string | null
    teknisiId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalUpdateWithoutPeralatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teknisi?: TeknisiUpdateOneRequiredWithoutJadwalNestedInput
    laporan?: LaporanUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutPeralatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateManyWithoutPeralatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    teknisiId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUpdateWithoutPeralatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateOneWithoutLaporanNestedInput
    teknisi?: TeknisiUpdateOneRequiredWithoutLaporanNestedInput
    timeline?: LaporanTimelineUpdateManyWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateWithoutPeralatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    jadwalId?: NullableStringFieldUpdateOperationsInput | string | null
    teknisiId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: LaporanTimelineUncheckedUpdateManyWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateManyWithoutPeralatanInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    jadwalId?: NullableStringFieldUpdateOperationsInput | string | null
    teknisiId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalCreateManyTeknisiInput = {
    id?: string
    kodeJadwal: string
    peralatanId: string
    tanggal: Date | string
    waktuMulai: string
    waktuSelesai: string
    status?: string
    catatan?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LaporanCreateManyTeknisiInput = {
    id?: string
    kodeId: string
    jadwalId?: string | null
    peralatanId: string
    checklist?: string
    pengukuran?: string | null
    catatan?: string | null
    fotoUrls?: string
    kesimpulan?: string | null
    status?: string
    approvalNote?: string | null
    approvedBy?: string | null
    approvedAt?: Date | string | null
    revisiCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type JadwalUpdateWithoutTeknisiInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    peralatan?: PeralatanUpdateOneRequiredWithoutJadwalNestedInput
    laporan?: LaporanUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateWithoutTeknisiInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    peralatanId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    laporan?: LaporanUncheckedUpdateOneWithoutJadwalNestedInput
  }

  export type JadwalUncheckedUpdateManyWithoutTeknisiInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeJadwal?: StringFieldUpdateOperationsInput | string
    peralatanId?: StringFieldUpdateOperationsInput | string
    tanggal?: DateTimeFieldUpdateOperationsInput | Date | string
    waktuMulai?: StringFieldUpdateOperationsInput | string
    waktuSelesai?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanUpdateWithoutTeknisiInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateOneWithoutLaporanNestedInput
    peralatan?: PeralatanUpdateOneRequiredWithoutLaporanNestedInput
    timeline?: LaporanTimelineUpdateManyWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateWithoutTeknisiInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    jadwalId?: NullableStringFieldUpdateOperationsInput | string | null
    peralatanId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    timeline?: LaporanTimelineUncheckedUpdateManyWithoutLaporanNestedInput
  }

  export type LaporanUncheckedUpdateManyWithoutTeknisiInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    jadwalId?: NullableStringFieldUpdateOperationsInput | string | null
    peralatanId?: StringFieldUpdateOperationsInput | string
    checklist?: StringFieldUpdateOperationsInput | string
    pengukuran?: NullableStringFieldUpdateOperationsInput | string | null
    catatan?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrls?: StringFieldUpdateOperationsInput | string
    kesimpulan?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvalNote?: NullableStringFieldUpdateOperationsInput | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    revisiCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PeralatanCreateManyLokasiRelationInput = {
    id?: string
    kodeId: string
    nama: string
    jenis: string
    lokasi: string
    noRegister?: string | null
    fotoUrl?: string | null
    kapasitas?: string | null
    tinggiDimensi?: string | null
    jenisKabel?: string | null
    masaBerlaku?: Date | string | null
    lat?: number | null
    lng?: number | null
    status?: string
    qrCodeUrl?: string | null
    createdAt?: Date | string
  }

  export type PeralatanUpdateWithoutLokasiRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUpdateManyWithoutPeralatanNestedInput
    laporan?: LaporanUpdateManyWithoutPeralatanNestedInput
  }

  export type PeralatanUncheckedUpdateWithoutLokasiRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    jadwal?: JadwalUncheckedUpdateManyWithoutPeralatanNestedInput
    laporan?: LaporanUncheckedUpdateManyWithoutPeralatanNestedInput
  }

  export type PeralatanUncheckedUpdateManyWithoutLokasiRelationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kodeId?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    jenis?: StringFieldUpdateOperationsInput | string
    lokasi?: StringFieldUpdateOperationsInput | string
    noRegister?: NullableStringFieldUpdateOperationsInput | string | null
    fotoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    kapasitas?: NullableStringFieldUpdateOperationsInput | string | null
    tinggiDimensi?: NullableStringFieldUpdateOperationsInput | string | null
    jenisKabel?: NullableStringFieldUpdateOperationsInput | string | null
    masaBerlaku?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    lat?: NullableFloatFieldUpdateOperationsInput | number | null
    lng?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    qrCodeUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanTimelineCreateManyLaporanInput = {
    id?: string
    type: string
    description: string
    createdBy?: string | null
    createdAt?: Date | string
  }

  export type LaporanTimelineUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanTimelineUncheckedUpdateWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LaporanTimelineUncheckedUpdateManyWithoutLaporanInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeralatanCountOutputTypeDefaultArgs instead
     */
    export type PeralatanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeralatanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeknisiCountOutputTypeDefaultArgs instead
     */
    export type TeknisiCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeknisiCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LokasiCountOutputTypeDefaultArgs instead
     */
    export type LokasiCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LokasiCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LaporanCountOutputTypeDefaultArgs instead
     */
    export type LaporanCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LaporanCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PeralatanDefaultArgs instead
     */
    export type PeralatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PeralatanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JenisPeralatanDefaultArgs instead
     */
    export type JenisPeralatanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JenisPeralatanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeknisiDefaultArgs instead
     */
    export type TeknisiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeknisiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LokasiDefaultArgs instead
     */
    export type LokasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LokasiDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JadwalDefaultArgs instead
     */
    export type JadwalArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JadwalDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LaporanDefaultArgs instead
     */
    export type LaporanArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LaporanDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LaporanTimelineDefaultArgs instead
     */
    export type LaporanTimelineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LaporanTimelineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use NotifikasiDefaultArgs instead
     */
    export type NotifikasiArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = NotifikasiDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}