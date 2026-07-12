
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
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamPlayer
 * 
 */
export type TeamPlayer = $Result.DefaultSelection<Prisma.$TeamPlayerPayload>
/**
 * Model Round
 * 
 */
export type Round = $Result.DefaultSelection<Prisma.$RoundPayload>
/**
 * Model Goal
 * 
 */
export type Goal = $Result.DefaultSelection<Prisma.$GoalPayload>
/**
 * Model Badge
 * 
 */
export type Badge = $Result.DefaultSelection<Prisma.$BadgePayload>
/**
 * Model SessionParticipant
 * 
 */
export type SessionParticipant = $Result.DefaultSelection<Prisma.$SessionParticipantPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Position: {
  ZAGUEIRO: 'ZAGUEIRO',
  MEIO: 'MEIO',
  ATACANTE: 'ATACANTE'
};

export type Position = (typeof Position)[keyof typeof Position]


export const SessionStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  FINISHED: 'FINISHED'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]


export const BadgeType: {
  ARTILHEIRO: 'ARTILHEIRO',
  MVP: 'MVP',
  ON_FIRE: 'ON_FIRE',
  VETERANO: 'VETERANO',
  AZARADO: 'AZARADO',
  GOLEADOR: 'GOLEADOR'
};

export type BadgeType = (typeof BadgeType)[keyof typeof BadgeType]


export const ParticipantStatus: {
  CONFIRMED: 'CONFIRMED',
  WAITING_LIST: 'WAITING_LIST'
};

export type ParticipantStatus = (typeof ParticipantStatus)[keyof typeof ParticipantStatus]

}

export type Position = $Enums.Position

export const Position: typeof $Enums.Position

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

export type BadgeType = $Enums.BadgeType

export const BadgeType: typeof $Enums.BadgeType

export type ParticipantStatus = $Enums.ParticipantStatus

export const ParticipantStatus: typeof $Enums.ParticipantStatus

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
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamPlayer`: Exposes CRUD operations for the **TeamPlayer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamPlayers
    * const teamPlayers = await prisma.teamPlayer.findMany()
    * ```
    */
  get teamPlayer(): Prisma.TeamPlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goal`: Exposes CRUD operations for the **Goal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Goals
    * const goals = await prisma.goal.findMany()
    * ```
    */
  get goal(): Prisma.GoalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.badge`: Exposes CRUD operations for the **Badge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Badges
    * const badges = await prisma.badge.findMany()
    * ```
    */
  get badge(): Prisma.BadgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionParticipant`: Exposes CRUD operations for the **SessionParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionParticipants
    * const sessionParticipants = await prisma.sessionParticipant.findMany()
    * ```
    */
  get sessionParticipant(): Prisma.SessionParticipantDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Session: 'Session',
    Team: 'Team',
    TeamPlayer: 'TeamPlayer',
    Round: 'Round',
    Goal: 'Goal',
    Badge: 'Badge',
    SessionParticipant: 'SessionParticipant'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "session" | "team" | "teamPlayer" | "round" | "goal" | "badge" | "sessionParticipant"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamPlayer: {
        payload: Prisma.$TeamPlayerPayload<ExtArgs>
        fields: Prisma.TeamPlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamPlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamPlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>
          }
          findFirst: {
            args: Prisma.TeamPlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamPlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>
          }
          findMany: {
            args: Prisma.TeamPlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>[]
          }
          create: {
            args: Prisma.TeamPlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>
          }
          createMany: {
            args: Prisma.TeamPlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamPlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>[]
          }
          delete: {
            args: Prisma.TeamPlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>
          }
          update: {
            args: Prisma.TeamPlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>
          }
          deleteMany: {
            args: Prisma.TeamPlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamPlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamPlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>[]
          }
          upsert: {
            args: Prisma.TeamPlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPlayerPayload>
          }
          aggregate: {
            args: Prisma.TeamPlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamPlayer>
          }
          groupBy: {
            args: Prisma.TeamPlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamPlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamPlayerCountArgs<ExtArgs>
            result: $Utils.Optional<TeamPlayerCountAggregateOutputType> | number
          }
        }
      }
      Round: {
        payload: Prisma.$RoundPayload<ExtArgs>
        fields: Prisma.RoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findFirst: {
            args: Prisma.RoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findMany: {
            args: Prisma.RoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          create: {
            args: Prisma.RoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          createMany: {
            args: Prisma.RoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          delete: {
            args: Prisma.RoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          update: {
            args: Prisma.RoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          deleteMany: {
            args: Prisma.RoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          upsert: {
            args: Prisma.RoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          aggregate: {
            args: Prisma.RoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRound>
          }
          groupBy: {
            args: Prisma.RoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundCountArgs<ExtArgs>
            result: $Utils.Optional<RoundCountAggregateOutputType> | number
          }
        }
      }
      Goal: {
        payload: Prisma.$GoalPayload<ExtArgs>
        fields: Prisma.GoalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findFirst: {
            args: Prisma.GoalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          findMany: {
            args: Prisma.GoalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          create: {
            args: Prisma.GoalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          createMany: {
            args: Prisma.GoalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          delete: {
            args: Prisma.GoalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          update: {
            args: Prisma.GoalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          deleteMany: {
            args: Prisma.GoalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>[]
          }
          upsert: {
            args: Prisma.GoalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalPayload>
          }
          aggregate: {
            args: Prisma.GoalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoal>
          }
          groupBy: {
            args: Prisma.GoalGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalCountArgs<ExtArgs>
            result: $Utils.Optional<GoalCountAggregateOutputType> | number
          }
        }
      }
      Badge: {
        payload: Prisma.$BadgePayload<ExtArgs>
        fields: Prisma.BadgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BadgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BadgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findFirst: {
            args: Prisma.BadgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BadgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          findMany: {
            args: Prisma.BadgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          create: {
            args: Prisma.BadgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          createMany: {
            args: Prisma.BadgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BadgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          delete: {
            args: Prisma.BadgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          update: {
            args: Prisma.BadgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          deleteMany: {
            args: Prisma.BadgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BadgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BadgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>[]
          }
          upsert: {
            args: Prisma.BadgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BadgePayload>
          }
          aggregate: {
            args: Prisma.BadgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBadge>
          }
          groupBy: {
            args: Prisma.BadgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<BadgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.BadgeCountArgs<ExtArgs>
            result: $Utils.Optional<BadgeCountAggregateOutputType> | number
          }
        }
      }
      SessionParticipant: {
        payload: Prisma.$SessionParticipantPayload<ExtArgs>
        fields: Prisma.SessionParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          findFirst: {
            args: Prisma.SessionParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          findMany: {
            args: Prisma.SessionParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>[]
          }
          create: {
            args: Prisma.SessionParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          createMany: {
            args: Prisma.SessionParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>[]
          }
          delete: {
            args: Prisma.SessionParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          update: {
            args: Prisma.SessionParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          deleteMany: {
            args: Prisma.SessionParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>[]
          }
          upsert: {
            args: Prisma.SessionParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionParticipantPayload>
          }
          aggregate: {
            args: Prisma.SessionParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionParticipant>
          }
          groupBy: {
            args: Prisma.SessionParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<SessionParticipantCountAggregateOutputType> | number
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
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    session?: SessionOmit
    team?: TeamOmit
    teamPlayer?: TeamPlayerOmit
    round?: RoundOmit
    goal?: GoalOmit
    badge?: BadgeOmit
    sessionParticipant?: SessionParticipantOmit
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
    | 'updateManyAndReturn'
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
    teamPlayers: number
    goals: number
    badges: number
    createdSessions: number
    mvpSessions: number
    topScorerSessions: number
    sessionParticipants: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamPlayers?: boolean | UserCountOutputTypeCountTeamPlayersArgs
    goals?: boolean | UserCountOutputTypeCountGoalsArgs
    badges?: boolean | UserCountOutputTypeCountBadgesArgs
    createdSessions?: boolean | UserCountOutputTypeCountCreatedSessionsArgs
    mvpSessions?: boolean | UserCountOutputTypeCountMvpSessionsArgs
    topScorerSessions?: boolean | UserCountOutputTypeCountTopScorerSessionsArgs
    sessionParticipants?: boolean | UserCountOutputTypeCountSessionParticipantsArgs
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
  export type UserCountOutputTypeCountTeamPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamPlayerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMvpSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTopScorerSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionParticipantWhereInput
  }


  /**
   * Count Type SessionCountOutputType
   */

  export type SessionCountOutputType = {
    teams: number
    rounds: number
    badges: number
    participants: number
  }

  export type SessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | SessionCountOutputTypeCountTeamsArgs
    rounds?: boolean | SessionCountOutputTypeCountRoundsArgs
    badges?: boolean | SessionCountOutputTypeCountBadgesArgs
    participants?: boolean | SessionCountOutputTypeCountParticipantsArgs
  }

  // Custom InputTypes
  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionCountOutputType
     */
    select?: SessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountBadgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
  }

  /**
   * SessionCountOutputType without action
   */
  export type SessionCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionParticipantWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    players: number
    homeRounds: number
    awayRounds: number
    wonRounds: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    homeRounds?: boolean | TeamCountOutputTypeCountHomeRoundsArgs
    awayRounds?: boolean | TeamCountOutputTypeCountAwayRoundsArgs
    wonRounds?: boolean | TeamCountOutputTypeCountWonRoundsArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamPlayerWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountHomeRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountAwayRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountWonRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }


  /**
   * Count Type RoundCountOutputType
   */

  export type RoundCountOutputType = {
    goals: number
  }

  export type RoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    goals?: boolean | RoundCountOutputTypeCountGoalsArgs
  }

  // Custom InputTypes
  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountGoalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rating: number | null
    avatarIndex: number | null
  }

  export type UserSumAggregateOutputType = {
    rating: number | null
    avatarIndex: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    nickname: string | null
    position: $Enums.Position | null
    rating: number | null
    avatarIndex: number | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    nickname: string | null
    position: $Enums.Position | null
    rating: number | null
    avatarIndex: number | null
    isAdmin: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    nickname: number
    position: number
    rating: number
    avatarIndex: number
    isAdmin: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rating?: true
    avatarIndex?: true
  }

  export type UserSumAggregateInputType = {
    rating?: true
    avatarIndex?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    nickname?: true
    position?: true
    rating?: true
    avatarIndex?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    nickname?: true
    position?: true
    rating?: true
    avatarIndex?: true
    isAdmin?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    nickname?: true
    position?: true
    rating?: true
    avatarIndex?: true
    isAdmin?: true
    createdAt?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    nickname: string | null
    position: $Enums.Position
    rating: number
    avatarIndex: number
    isAdmin: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    nickname?: boolean
    position?: boolean
    rating?: boolean
    avatarIndex?: boolean
    isAdmin?: boolean
    createdAt?: boolean
    teamPlayers?: boolean | User$teamPlayersArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    badges?: boolean | User$badgesArgs<ExtArgs>
    createdSessions?: boolean | User$createdSessionsArgs<ExtArgs>
    mvpSessions?: boolean | User$mvpSessionsArgs<ExtArgs>
    topScorerSessions?: boolean | User$topScorerSessionsArgs<ExtArgs>
    sessionParticipants?: boolean | User$sessionParticipantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    nickname?: boolean
    position?: boolean
    rating?: boolean
    avatarIndex?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    nickname?: boolean
    position?: boolean
    rating?: boolean
    avatarIndex?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    nickname?: boolean
    position?: boolean
    rating?: boolean
    avatarIndex?: boolean
    isAdmin?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "nickname" | "position" | "rating" | "avatarIndex" | "isAdmin" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamPlayers?: boolean | User$teamPlayersArgs<ExtArgs>
    goals?: boolean | User$goalsArgs<ExtArgs>
    badges?: boolean | User$badgesArgs<ExtArgs>
    createdSessions?: boolean | User$createdSessionsArgs<ExtArgs>
    mvpSessions?: boolean | User$mvpSessionsArgs<ExtArgs>
    topScorerSessions?: boolean | User$topScorerSessionsArgs<ExtArgs>
    sessionParticipants?: boolean | User$sessionParticipantsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      teamPlayers: Prisma.$TeamPlayerPayload<ExtArgs>[]
      goals: Prisma.$GoalPayload<ExtArgs>[]
      badges: Prisma.$BadgePayload<ExtArgs>[]
      createdSessions: Prisma.$SessionPayload<ExtArgs>[]
      mvpSessions: Prisma.$SessionPayload<ExtArgs>[]
      topScorerSessions: Prisma.$SessionPayload<ExtArgs>[]
      sessionParticipants: Prisma.$SessionParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      nickname: string | null
      position: $Enums.Position
      rating: number
      avatarIndex: number
      isAdmin: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teamPlayers<T extends User$teamPlayersArgs<ExtArgs> = {}>(args?: Subset<T, User$teamPlayersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    goals<T extends User$goalsArgs<ExtArgs> = {}>(args?: Subset<T, User$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    badges<T extends User$badgesArgs<ExtArgs> = {}>(args?: Subset<T, User$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdSessions<T extends User$createdSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mvpSessions<T extends User$mvpSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$mvpSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    topScorerSessions<T extends User$topScorerSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$topScorerSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessionParticipants<T extends User$sessionParticipantsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionParticipantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly nickname: FieldRef<"User", 'String'>
    readonly position: FieldRef<"User", 'Position'>
    readonly rating: FieldRef<"User", 'Int'>
    readonly avatarIndex: FieldRef<"User", 'Int'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.teamPlayers
   */
  export type User$teamPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    where?: TeamPlayerWhereInput
    orderBy?: TeamPlayerOrderByWithRelationInput | TeamPlayerOrderByWithRelationInput[]
    cursor?: TeamPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamPlayerScalarFieldEnum | TeamPlayerScalarFieldEnum[]
  }

  /**
   * User.goals
   */
  export type User$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * User.badges
   */
  export type User$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    cursor?: BadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * User.createdSessions
   */
  export type User$createdSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.mvpSessions
   */
  export type User$mvpSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.topScorerSessions
   */
  export type User$topScorerSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.sessionParticipants
   */
  export type User$sessionParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    where?: SessionParticipantWhereInput
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    cursor?: SessionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    maxPlayers: number | null
  }

  export type SessionSumAggregateOutputType = {
    maxPlayers: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    status: $Enums.SessionStatus | null
    createdById: string | null
    mvpPlayerId: string | null
    topScorerPlayerId: string | null
    maxPlayers: number | null
    createdAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    title: string | null
    date: Date | null
    status: $Enums.SessionStatus | null
    createdById: string | null
    mvpPlayerId: string | null
    topScorerPlayerId: string | null
    maxPlayers: number | null
    createdAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    title: number
    date: number
    status: number
    createdById: number
    mvpPlayerId: number
    topScorerPlayerId: number
    maxPlayers: number
    createdAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    maxPlayers?: true
  }

  export type SessionSumAggregateInputType = {
    maxPlayers?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    title?: true
    date?: true
    status?: true
    createdById?: true
    mvpPlayerId?: true
    topScorerPlayerId?: true
    maxPlayers?: true
    createdAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    title?: true
    date?: true
    status?: true
    createdById?: true
    mvpPlayerId?: true
    topScorerPlayerId?: true
    maxPlayers?: true
    createdAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    title?: true
    date?: true
    status?: true
    createdById?: true
    mvpPlayerId?: true
    topScorerPlayerId?: true
    maxPlayers?: true
    createdAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    title: string | null
    date: Date
    status: $Enums.SessionStatus
    createdById: string
    mvpPlayerId: string | null
    topScorerPlayerId: string | null
    maxPlayers: number
    createdAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    status?: boolean
    createdById?: boolean
    mvpPlayerId?: boolean
    topScorerPlayerId?: boolean
    maxPlayers?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    mvpPlayer?: boolean | Session$mvpPlayerArgs<ExtArgs>
    topScorerPlayer?: boolean | Session$topScorerPlayerArgs<ExtArgs>
    teams?: boolean | Session$teamsArgs<ExtArgs>
    rounds?: boolean | Session$roundsArgs<ExtArgs>
    badges?: boolean | Session$badgesArgs<ExtArgs>
    participants?: boolean | Session$participantsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    status?: boolean
    createdById?: boolean
    mvpPlayerId?: boolean
    topScorerPlayerId?: boolean
    maxPlayers?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    mvpPlayer?: boolean | Session$mvpPlayerArgs<ExtArgs>
    topScorerPlayer?: boolean | Session$topScorerPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    date?: boolean
    status?: boolean
    createdById?: boolean
    mvpPlayerId?: boolean
    topScorerPlayerId?: boolean
    maxPlayers?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    mvpPlayer?: boolean | Session$mvpPlayerArgs<ExtArgs>
    topScorerPlayer?: boolean | Session$topScorerPlayerArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    title?: boolean
    date?: boolean
    status?: boolean
    createdById?: boolean
    mvpPlayerId?: boolean
    topScorerPlayerId?: boolean
    maxPlayers?: boolean
    createdAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "date" | "status" | "createdById" | "mvpPlayerId" | "topScorerPlayerId" | "maxPlayers" | "createdAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    mvpPlayer?: boolean | Session$mvpPlayerArgs<ExtArgs>
    topScorerPlayer?: boolean | Session$topScorerPlayerArgs<ExtArgs>
    teams?: boolean | Session$teamsArgs<ExtArgs>
    rounds?: boolean | Session$roundsArgs<ExtArgs>
    badges?: boolean | Session$badgesArgs<ExtArgs>
    participants?: boolean | Session$participantsArgs<ExtArgs>
    _count?: boolean | SessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    mvpPlayer?: boolean | Session$mvpPlayerArgs<ExtArgs>
    topScorerPlayer?: boolean | Session$topScorerPlayerArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    mvpPlayer?: boolean | Session$mvpPlayerArgs<ExtArgs>
    topScorerPlayer?: boolean | Session$topScorerPlayerArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      mvpPlayer: Prisma.$UserPayload<ExtArgs> | null
      topScorerPlayer: Prisma.$UserPayload<ExtArgs> | null
      teams: Prisma.$TeamPayload<ExtArgs>[]
      rounds: Prisma.$RoundPayload<ExtArgs>[]
      badges: Prisma.$BadgePayload<ExtArgs>[]
      participants: Prisma.$SessionParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string | null
      date: Date
      status: $Enums.SessionStatus
      createdById: string
      mvpPlayerId: string | null
      topScorerPlayerId: string | null
      maxPlayers: number
      createdAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
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
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    mvpPlayer<T extends Session$mvpPlayerArgs<ExtArgs> = {}>(args?: Subset<T, Session$mvpPlayerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    topScorerPlayer<T extends Session$topScorerPlayerArgs<ExtArgs> = {}>(args?: Subset<T, Session$topScorerPlayerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    teams<T extends Session$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Session$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rounds<T extends Session$roundsArgs<ExtArgs> = {}>(args?: Subset<T, Session$roundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    badges<T extends Session$badgesArgs<ExtArgs> = {}>(args?: Subset<T, Session$badgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    participants<T extends Session$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Session$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly title: FieldRef<"Session", 'String'>
    readonly date: FieldRef<"Session", 'DateTime'>
    readonly status: FieldRef<"Session", 'SessionStatus'>
    readonly createdById: FieldRef<"Session", 'String'>
    readonly mvpPlayerId: FieldRef<"Session", 'String'>
    readonly topScorerPlayerId: FieldRef<"Session", 'String'>
    readonly maxPlayers: FieldRef<"Session", 'Int'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session.mvpPlayer
   */
  export type Session$mvpPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Session.topScorerPlayer
   */
  export type Session$topScorerPlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Session.teams
   */
  export type Session$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Session.rounds
   */
  export type Session$roundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Session.badges
   */
  export type Session$badgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    cursor?: BadgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Session.participants
   */
  export type Session$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    where?: SessionParticipantWhereInput
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    cursor?: SessionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    totalRating: number | null
  }

  export type TeamSumAggregateOutputType = {
    totalRating: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    name: string | null
    color: string | null
    totalRating: number | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    name: string | null
    color: string | null
    totalRating: number | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    sessionId: number
    name: number
    color: number
    totalRating: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    totalRating?: true
  }

  export type TeamSumAggregateInputType = {
    totalRating?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    sessionId?: true
    name?: true
    color?: true
    totalRating?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    sessionId?: true
    name?: true
    color?: true
    totalRating?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    sessionId?: true
    name?: true
    color?: true
    totalRating?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    sessionId: string
    name: string
    color: string
    totalRating: number
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    name?: boolean
    color?: boolean
    totalRating?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    homeRounds?: boolean | Team$homeRoundsArgs<ExtArgs>
    awayRounds?: boolean | Team$awayRoundsArgs<ExtArgs>
    wonRounds?: boolean | Team$wonRoundsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    name?: boolean
    color?: boolean
    totalRating?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    name?: boolean
    color?: boolean
    totalRating?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    sessionId?: boolean
    name?: boolean
    color?: boolean
    totalRating?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "name" | "color" | "totalRating", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    players?: boolean | Team$playersArgs<ExtArgs>
    homeRounds?: boolean | Team$homeRoundsArgs<ExtArgs>
    awayRounds?: boolean | Team$awayRoundsArgs<ExtArgs>
    wonRounds?: boolean | Team$wonRoundsArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      players: Prisma.$TeamPlayerPayload<ExtArgs>[]
      homeRounds: Prisma.$RoundPayload<ExtArgs>[]
      awayRounds: Prisma.$RoundPayload<ExtArgs>[]
      wonRounds: Prisma.$RoundPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      name: string
      color: string
      totalRating: number
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    players<T extends Team$playersArgs<ExtArgs> = {}>(args?: Subset<T, Team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    homeRounds<T extends Team$homeRoundsArgs<ExtArgs> = {}>(args?: Subset<T, Team$homeRoundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    awayRounds<T extends Team$awayRoundsArgs<ExtArgs> = {}>(args?: Subset<T, Team$awayRoundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    wonRounds<T extends Team$wonRoundsArgs<ExtArgs> = {}>(args?: Subset<T, Team$wonRoundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly sessionId: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly color: FieldRef<"Team", 'String'>
    readonly totalRating: FieldRef<"Team", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.players
   */
  export type Team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    where?: TeamPlayerWhereInput
    orderBy?: TeamPlayerOrderByWithRelationInput | TeamPlayerOrderByWithRelationInput[]
    cursor?: TeamPlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamPlayerScalarFieldEnum | TeamPlayerScalarFieldEnum[]
  }

  /**
   * Team.homeRounds
   */
  export type Team$homeRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Team.awayRounds
   */
  export type Team$awayRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Team.wonRounds
   */
  export type Team$wonRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamPlayer
   */

  export type AggregateTeamPlayer = {
    _count: TeamPlayerCountAggregateOutputType | null
    _avg: TeamPlayerAvgAggregateOutputType | null
    _sum: TeamPlayerSumAggregateOutputType | null
    _min: TeamPlayerMinAggregateOutputType | null
    _max: TeamPlayerMaxAggregateOutputType | null
  }

  export type TeamPlayerAvgAggregateOutputType = {
    id: number | null
  }

  export type TeamPlayerSumAggregateOutputType = {
    id: number | null
  }

  export type TeamPlayerMinAggregateOutputType = {
    id: number | null
    teamId: string | null
    playerId: string | null
  }

  export type TeamPlayerMaxAggregateOutputType = {
    id: number | null
    teamId: string | null
    playerId: string | null
  }

  export type TeamPlayerCountAggregateOutputType = {
    id: number
    teamId: number
    playerId: number
    _all: number
  }


  export type TeamPlayerAvgAggregateInputType = {
    id?: true
  }

  export type TeamPlayerSumAggregateInputType = {
    id?: true
  }

  export type TeamPlayerMinAggregateInputType = {
    id?: true
    teamId?: true
    playerId?: true
  }

  export type TeamPlayerMaxAggregateInputType = {
    id?: true
    teamId?: true
    playerId?: true
  }

  export type TeamPlayerCountAggregateInputType = {
    id?: true
    teamId?: true
    playerId?: true
    _all?: true
  }

  export type TeamPlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamPlayer to aggregate.
     */
    where?: TeamPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamPlayers to fetch.
     */
    orderBy?: TeamPlayerOrderByWithRelationInput | TeamPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamPlayers
    **/
    _count?: true | TeamPlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamPlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamPlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamPlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamPlayerMaxAggregateInputType
  }

  export type GetTeamPlayerAggregateType<T extends TeamPlayerAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamPlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamPlayer[P]>
      : GetScalarType<T[P], AggregateTeamPlayer[P]>
  }




  export type TeamPlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamPlayerWhereInput
    orderBy?: TeamPlayerOrderByWithAggregationInput | TeamPlayerOrderByWithAggregationInput[]
    by: TeamPlayerScalarFieldEnum[] | TeamPlayerScalarFieldEnum
    having?: TeamPlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamPlayerCountAggregateInputType | true
    _avg?: TeamPlayerAvgAggregateInputType
    _sum?: TeamPlayerSumAggregateInputType
    _min?: TeamPlayerMinAggregateInputType
    _max?: TeamPlayerMaxAggregateInputType
  }

  export type TeamPlayerGroupByOutputType = {
    id: number
    teamId: string
    playerId: string
    _count: TeamPlayerCountAggregateOutputType | null
    _avg: TeamPlayerAvgAggregateOutputType | null
    _sum: TeamPlayerSumAggregateOutputType | null
    _min: TeamPlayerMinAggregateOutputType | null
    _max: TeamPlayerMaxAggregateOutputType | null
  }

  type GetTeamPlayerGroupByPayload<T extends TeamPlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamPlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamPlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamPlayerGroupByOutputType[P]>
            : GetScalarType<T[P], TeamPlayerGroupByOutputType[P]>
        }
      >
    >


  export type TeamPlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    playerId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamPlayer"]>

  export type TeamPlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    playerId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamPlayer"]>

  export type TeamPlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    playerId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamPlayer"]>

  export type TeamPlayerSelectScalar = {
    id?: boolean
    teamId?: boolean
    playerId?: boolean
  }

  export type TeamPlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "playerId", ExtArgs["result"]["teamPlayer"]>
  export type TeamPlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamPlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TeamPlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TeamPlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamPlayer"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      player: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teamId: string
      playerId: string
    }, ExtArgs["result"]["teamPlayer"]>
    composites: {}
  }

  type TeamPlayerGetPayload<S extends boolean | null | undefined | TeamPlayerDefaultArgs> = $Result.GetResult<Prisma.$TeamPlayerPayload, S>

  type TeamPlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamPlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamPlayerCountAggregateInputType | true
    }

  export interface TeamPlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamPlayer'], meta: { name: 'TeamPlayer' } }
    /**
     * Find zero or one TeamPlayer that matches the filter.
     * @param {TeamPlayerFindUniqueArgs} args - Arguments to find a TeamPlayer
     * @example
     * // Get one TeamPlayer
     * const teamPlayer = await prisma.teamPlayer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamPlayerFindUniqueArgs>(args: SelectSubset<T, TeamPlayerFindUniqueArgs<ExtArgs>>): Prisma__TeamPlayerClient<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamPlayer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamPlayerFindUniqueOrThrowArgs} args - Arguments to find a TeamPlayer
     * @example
     * // Get one TeamPlayer
     * const teamPlayer = await prisma.teamPlayer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamPlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamPlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamPlayerClient<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamPlayer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerFindFirstArgs} args - Arguments to find a TeamPlayer
     * @example
     * // Get one TeamPlayer
     * const teamPlayer = await prisma.teamPlayer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamPlayerFindFirstArgs>(args?: SelectSubset<T, TeamPlayerFindFirstArgs<ExtArgs>>): Prisma__TeamPlayerClient<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamPlayer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerFindFirstOrThrowArgs} args - Arguments to find a TeamPlayer
     * @example
     * // Get one TeamPlayer
     * const teamPlayer = await prisma.teamPlayer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamPlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamPlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamPlayerClient<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamPlayers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamPlayers
     * const teamPlayers = await prisma.teamPlayer.findMany()
     * 
     * // Get first 10 TeamPlayers
     * const teamPlayers = await prisma.teamPlayer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamPlayerWithIdOnly = await prisma.teamPlayer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamPlayerFindManyArgs>(args?: SelectSubset<T, TeamPlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamPlayer.
     * @param {TeamPlayerCreateArgs} args - Arguments to create a TeamPlayer.
     * @example
     * // Create one TeamPlayer
     * const TeamPlayer = await prisma.teamPlayer.create({
     *   data: {
     *     // ... data to create a TeamPlayer
     *   }
     * })
     * 
     */
    create<T extends TeamPlayerCreateArgs>(args: SelectSubset<T, TeamPlayerCreateArgs<ExtArgs>>): Prisma__TeamPlayerClient<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamPlayers.
     * @param {TeamPlayerCreateManyArgs} args - Arguments to create many TeamPlayers.
     * @example
     * // Create many TeamPlayers
     * const teamPlayer = await prisma.teamPlayer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamPlayerCreateManyArgs>(args?: SelectSubset<T, TeamPlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamPlayers and returns the data saved in the database.
     * @param {TeamPlayerCreateManyAndReturnArgs} args - Arguments to create many TeamPlayers.
     * @example
     * // Create many TeamPlayers
     * const teamPlayer = await prisma.teamPlayer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamPlayers and only return the `id`
     * const teamPlayerWithIdOnly = await prisma.teamPlayer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamPlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamPlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamPlayer.
     * @param {TeamPlayerDeleteArgs} args - Arguments to delete one TeamPlayer.
     * @example
     * // Delete one TeamPlayer
     * const TeamPlayer = await prisma.teamPlayer.delete({
     *   where: {
     *     // ... filter to delete one TeamPlayer
     *   }
     * })
     * 
     */
    delete<T extends TeamPlayerDeleteArgs>(args: SelectSubset<T, TeamPlayerDeleteArgs<ExtArgs>>): Prisma__TeamPlayerClient<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamPlayer.
     * @param {TeamPlayerUpdateArgs} args - Arguments to update one TeamPlayer.
     * @example
     * // Update one TeamPlayer
     * const teamPlayer = await prisma.teamPlayer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamPlayerUpdateArgs>(args: SelectSubset<T, TeamPlayerUpdateArgs<ExtArgs>>): Prisma__TeamPlayerClient<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamPlayers.
     * @param {TeamPlayerDeleteManyArgs} args - Arguments to filter TeamPlayers to delete.
     * @example
     * // Delete a few TeamPlayers
     * const { count } = await prisma.teamPlayer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamPlayerDeleteManyArgs>(args?: SelectSubset<T, TeamPlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamPlayers
     * const teamPlayer = await prisma.teamPlayer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamPlayerUpdateManyArgs>(args: SelectSubset<T, TeamPlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamPlayers and returns the data updated in the database.
     * @param {TeamPlayerUpdateManyAndReturnArgs} args - Arguments to update many TeamPlayers.
     * @example
     * // Update many TeamPlayers
     * const teamPlayer = await prisma.teamPlayer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamPlayers and only return the `id`
     * const teamPlayerWithIdOnly = await prisma.teamPlayer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TeamPlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamPlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamPlayer.
     * @param {TeamPlayerUpsertArgs} args - Arguments to update or create a TeamPlayer.
     * @example
     * // Update or create a TeamPlayer
     * const teamPlayer = await prisma.teamPlayer.upsert({
     *   create: {
     *     // ... data to create a TeamPlayer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamPlayer we want to update
     *   }
     * })
     */
    upsert<T extends TeamPlayerUpsertArgs>(args: SelectSubset<T, TeamPlayerUpsertArgs<ExtArgs>>): Prisma__TeamPlayerClient<$Result.GetResult<Prisma.$TeamPlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamPlayers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerCountArgs} args - Arguments to filter TeamPlayers to count.
     * @example
     * // Count the number of TeamPlayers
     * const count = await prisma.teamPlayer.count({
     *   where: {
     *     // ... the filter for the TeamPlayers we want to count
     *   }
     * })
    **/
    count<T extends TeamPlayerCountArgs>(
      args?: Subset<T, TeamPlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamPlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamPlayerAggregateArgs>(args: Subset<T, TeamPlayerAggregateArgs>): Prisma.PrismaPromise<GetTeamPlayerAggregateType<T>>

    /**
     * Group by TeamPlayer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamPlayerGroupByArgs} args - Group by arguments.
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
      T extends TeamPlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamPlayerGroupByArgs['orderBy'] }
        : { orderBy?: TeamPlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamPlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamPlayer model
   */
  readonly fields: TeamPlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamPlayer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamPlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamPlayer model
   */
  interface TeamPlayerFieldRefs {
    readonly id: FieldRef<"TeamPlayer", 'Int'>
    readonly teamId: FieldRef<"TeamPlayer", 'String'>
    readonly playerId: FieldRef<"TeamPlayer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeamPlayer findUnique
   */
  export type TeamPlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TeamPlayer to fetch.
     */
    where: TeamPlayerWhereUniqueInput
  }

  /**
   * TeamPlayer findUniqueOrThrow
   */
  export type TeamPlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TeamPlayer to fetch.
     */
    where: TeamPlayerWhereUniqueInput
  }

  /**
   * TeamPlayer findFirst
   */
  export type TeamPlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TeamPlayer to fetch.
     */
    where?: TeamPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamPlayers to fetch.
     */
    orderBy?: TeamPlayerOrderByWithRelationInput | TeamPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamPlayers.
     */
    cursor?: TeamPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamPlayers.
     */
    distinct?: TeamPlayerScalarFieldEnum | TeamPlayerScalarFieldEnum[]
  }

  /**
   * TeamPlayer findFirstOrThrow
   */
  export type TeamPlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TeamPlayer to fetch.
     */
    where?: TeamPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamPlayers to fetch.
     */
    orderBy?: TeamPlayerOrderByWithRelationInput | TeamPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamPlayers.
     */
    cursor?: TeamPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamPlayers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamPlayers.
     */
    distinct?: TeamPlayerScalarFieldEnum | TeamPlayerScalarFieldEnum[]
  }

  /**
   * TeamPlayer findMany
   */
  export type TeamPlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * Filter, which TeamPlayers to fetch.
     */
    where?: TeamPlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamPlayers to fetch.
     */
    orderBy?: TeamPlayerOrderByWithRelationInput | TeamPlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamPlayers.
     */
    cursor?: TeamPlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamPlayers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamPlayers.
     */
    skip?: number
    distinct?: TeamPlayerScalarFieldEnum | TeamPlayerScalarFieldEnum[]
  }

  /**
   * TeamPlayer create
   */
  export type TeamPlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamPlayer.
     */
    data: XOR<TeamPlayerCreateInput, TeamPlayerUncheckedCreateInput>
  }

  /**
   * TeamPlayer createMany
   */
  export type TeamPlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamPlayers.
     */
    data: TeamPlayerCreateManyInput | TeamPlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamPlayer createManyAndReturn
   */
  export type TeamPlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * The data used to create many TeamPlayers.
     */
    data: TeamPlayerCreateManyInput | TeamPlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamPlayer update
   */
  export type TeamPlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamPlayer.
     */
    data: XOR<TeamPlayerUpdateInput, TeamPlayerUncheckedUpdateInput>
    /**
     * Choose, which TeamPlayer to update.
     */
    where: TeamPlayerWhereUniqueInput
  }

  /**
   * TeamPlayer updateMany
   */
  export type TeamPlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamPlayers.
     */
    data: XOR<TeamPlayerUpdateManyMutationInput, TeamPlayerUncheckedUpdateManyInput>
    /**
     * Filter which TeamPlayers to update
     */
    where?: TeamPlayerWhereInput
    /**
     * Limit how many TeamPlayers to update.
     */
    limit?: number
  }

  /**
   * TeamPlayer updateManyAndReturn
   */
  export type TeamPlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * The data used to update TeamPlayers.
     */
    data: XOR<TeamPlayerUpdateManyMutationInput, TeamPlayerUncheckedUpdateManyInput>
    /**
     * Filter which TeamPlayers to update
     */
    where?: TeamPlayerWhereInput
    /**
     * Limit how many TeamPlayers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamPlayer upsert
   */
  export type TeamPlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamPlayer to update in case it exists.
     */
    where: TeamPlayerWhereUniqueInput
    /**
     * In case the TeamPlayer found by the `where` argument doesn't exist, create a new TeamPlayer with this data.
     */
    create: XOR<TeamPlayerCreateInput, TeamPlayerUncheckedCreateInput>
    /**
     * In case the TeamPlayer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamPlayerUpdateInput, TeamPlayerUncheckedUpdateInput>
  }

  /**
   * TeamPlayer delete
   */
  export type TeamPlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
    /**
     * Filter which TeamPlayer to delete.
     */
    where: TeamPlayerWhereUniqueInput
  }

  /**
   * TeamPlayer deleteMany
   */
  export type TeamPlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamPlayers to delete
     */
    where?: TeamPlayerWhereInput
    /**
     * Limit how many TeamPlayers to delete.
     */
    limit?: number
  }

  /**
   * TeamPlayer without action
   */
  export type TeamPlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamPlayer
     */
    select?: TeamPlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamPlayer
     */
    omit?: TeamPlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamPlayerInclude<ExtArgs> | null
  }


  /**
   * Model Round
   */

  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundAvgAggregateOutputType = {
    roundNumber: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type RoundSumAggregateOutputType = {
    roundNumber: number | null
    homeScore: number | null
    awayScore: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    roundNumber: number | null
    homeTeamId: string | null
    awayTeamId: string | null
    homeScore: number | null
    awayScore: number | null
    winnerTeamId: string | null
    isDraw: boolean | null
    createdAt: Date | null
  }

  export type RoundMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    roundNumber: number | null
    homeTeamId: string | null
    awayTeamId: string | null
    homeScore: number | null
    awayScore: number | null
    winnerTeamId: string | null
    isDraw: boolean | null
    createdAt: Date | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    sessionId: number
    roundNumber: number
    homeTeamId: number
    awayTeamId: number
    homeScore: number
    awayScore: number
    winnerTeamId: number
    isDraw: number
    createdAt: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    roundNumber?: true
    homeScore?: true
    awayScore?: true
  }

  export type RoundSumAggregateInputType = {
    roundNumber?: true
    homeScore?: true
    awayScore?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    sessionId?: true
    roundNumber?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    winnerTeamId?: true
    isDraw?: true
    createdAt?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    sessionId?: true
    roundNumber?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    winnerTeamId?: true
    isDraw?: true
    createdAt?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    sessionId?: true
    roundNumber?: true
    homeTeamId?: true
    awayTeamId?: true
    homeScore?: true
    awayScore?: true
    winnerTeamId?: true
    isDraw?: true
    createdAt?: true
    _all?: true
  }

  export type RoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithAggregationInput | RoundOrderByWithAggregationInput[]
    by: RoundScalarFieldEnum[] | RoundScalarFieldEnum
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _avg?: RoundAvgAggregateInputType
    _sum?: RoundSumAggregateInputType
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }

  export type RoundGroupByOutputType = {
    id: string
    sessionId: string
    roundNumber: number
    homeTeamId: string
    awayTeamId: string
    homeScore: number
    awayScore: number
    winnerTeamId: string | null
    isDraw: boolean
    createdAt: Date
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    roundNumber?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    winnerTeamId?: boolean
    isDraw?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    winnerTeam?: boolean | Round$winnerTeamArgs<ExtArgs>
    goals?: boolean | Round$goalsArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    roundNumber?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    winnerTeamId?: boolean
    isDraw?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    winnerTeam?: boolean | Round$winnerTeamArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    roundNumber?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    winnerTeamId?: boolean
    isDraw?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    winnerTeam?: boolean | Round$winnerTeamArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectScalar = {
    id?: boolean
    sessionId?: boolean
    roundNumber?: boolean
    homeTeamId?: boolean
    awayTeamId?: boolean
    homeScore?: boolean
    awayScore?: boolean
    winnerTeamId?: boolean
    isDraw?: boolean
    createdAt?: boolean
  }

  export type RoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "roundNumber" | "homeTeamId" | "awayTeamId" | "homeScore" | "awayScore" | "winnerTeamId" | "isDraw" | "createdAt", ExtArgs["result"]["round"]>
  export type RoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    winnerTeam?: boolean | Round$winnerTeamArgs<ExtArgs>
    goals?: boolean | Round$goalsArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    winnerTeam?: boolean | Round$winnerTeamArgs<ExtArgs>
  }
  export type RoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    homeTeam?: boolean | TeamDefaultArgs<ExtArgs>
    awayTeam?: boolean | TeamDefaultArgs<ExtArgs>
    winnerTeam?: boolean | Round$winnerTeamArgs<ExtArgs>
  }

  export type $RoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Round"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      homeTeam: Prisma.$TeamPayload<ExtArgs>
      awayTeam: Prisma.$TeamPayload<ExtArgs>
      winnerTeam: Prisma.$TeamPayload<ExtArgs> | null
      goals: Prisma.$GoalPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      roundNumber: number
      homeTeamId: string
      awayTeamId: string
      homeScore: number
      awayScore: number
      winnerTeamId: string | null
      isDraw: boolean
      createdAt: Date
    }, ExtArgs["result"]["round"]>
    composites: {}
  }

  type RoundGetPayload<S extends boolean | null | undefined | RoundDefaultArgs> = $Result.GetResult<Prisma.$RoundPayload, S>

  type RoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Round'], meta: { name: 'Round' } }
    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundFindUniqueArgs>(args: SelectSubset<T, RoundFindUniqueArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Round that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundFindFirstArgs>(args?: SelectSubset<T, RoundFindFirstArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundWithIdOnly = await prisma.round.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoundFindManyArgs>(args?: SelectSubset<T, RoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
     */
    create<T extends RoundCreateArgs>(args: SelectSubset<T, RoundCreateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rounds.
     * @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundCreateManyArgs>(args?: SelectSubset<T, RoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rounds and returns the data saved in the database.
     * @param {RoundCreateManyAndReturnArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
     */
    delete<T extends RoundDeleteArgs>(args: SelectSubset<T, RoundDeleteArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundUpdateArgs>(args: SelectSubset<T, RoundUpdateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundDeleteManyArgs>(args?: SelectSubset<T, RoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundUpdateManyArgs>(args: SelectSubset<T, RoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds and returns the data updated in the database.
     * @param {RoundUpdateManyAndReturnArgs} args - Arguments to update many Rounds.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoundUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
     */
    upsert<T extends RoundUpsertArgs>(args: SelectSubset<T, RoundUpsertArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
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
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Round model
   */
  readonly fields: RoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    homeTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    awayTeam<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    winnerTeam<T extends Round$winnerTeamArgs<ExtArgs> = {}>(args?: Subset<T, Round$winnerTeamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    goals<T extends Round$goalsArgs<ExtArgs> = {}>(args?: Subset<T, Round$goalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Round model
   */
  interface RoundFieldRefs {
    readonly id: FieldRef<"Round", 'String'>
    readonly sessionId: FieldRef<"Round", 'String'>
    readonly roundNumber: FieldRef<"Round", 'Int'>
    readonly homeTeamId: FieldRef<"Round", 'String'>
    readonly awayTeamId: FieldRef<"Round", 'String'>
    readonly homeScore: FieldRef<"Round", 'Int'>
    readonly awayScore: FieldRef<"Round", 'Int'>
    readonly winnerTeamId: FieldRef<"Round", 'String'>
    readonly isDraw: FieldRef<"Round", 'Boolean'>
    readonly createdAt: FieldRef<"Round", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Round findUnique
   */
  export type RoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findFirst
   */
  export type RoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findMany
   */
  export type RoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round create
   */
  export type RoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }

  /**
   * Round createMany
   */
  export type RoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round createManyAndReturn
   */
  export type RoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round update
   */
  export type RoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round updateManyAndReturn
   */
  export type RoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round upsert
   */
  export type RoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }

  /**
   * Round delete
   */
  export type RoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to delete.
     */
    limit?: number
  }

  /**
   * Round.winnerTeam
   */
  export type Round$winnerTeamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Round.goals
   */
  export type Round$goalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    cursor?: GoalWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Round without action
   */
  export type RoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
  }


  /**
   * Model Goal
   */

  export type AggregateGoal = {
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  export type GoalAvgAggregateOutputType = {
    id: number | null
    minute: number | null
  }

  export type GoalSumAggregateOutputType = {
    id: number | null
    minute: number | null
  }

  export type GoalMinAggregateOutputType = {
    id: number | null
    roundId: string | null
    playerId: string | null
    minute: number | null
  }

  export type GoalMaxAggregateOutputType = {
    id: number | null
    roundId: string | null
    playerId: string | null
    minute: number | null
  }

  export type GoalCountAggregateOutputType = {
    id: number
    roundId: number
    playerId: number
    minute: number
    _all: number
  }


  export type GoalAvgAggregateInputType = {
    id?: true
    minute?: true
  }

  export type GoalSumAggregateInputType = {
    id?: true
    minute?: true
  }

  export type GoalMinAggregateInputType = {
    id?: true
    roundId?: true
    playerId?: true
    minute?: true
  }

  export type GoalMaxAggregateInputType = {
    id?: true
    roundId?: true
    playerId?: true
    minute?: true
  }

  export type GoalCountAggregateInputType = {
    id?: true
    roundId?: true
    playerId?: true
    minute?: true
    _all?: true
  }

  export type GoalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goal to aggregate.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Goals
    **/
    _count?: true | GoalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalMaxAggregateInputType
  }

  export type GetGoalAggregateType<T extends GoalAggregateArgs> = {
        [P in keyof T & keyof AggregateGoal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoal[P]>
      : GetScalarType<T[P], AggregateGoal[P]>
  }




  export type GoalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalWhereInput
    orderBy?: GoalOrderByWithAggregationInput | GoalOrderByWithAggregationInput[]
    by: GoalScalarFieldEnum[] | GoalScalarFieldEnum
    having?: GoalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalCountAggregateInputType | true
    _avg?: GoalAvgAggregateInputType
    _sum?: GoalSumAggregateInputType
    _min?: GoalMinAggregateInputType
    _max?: GoalMaxAggregateInputType
  }

  export type GoalGroupByOutputType = {
    id: number
    roundId: string
    playerId: string
    minute: number | null
    _count: GoalCountAggregateOutputType | null
    _avg: GoalAvgAggregateOutputType | null
    _sum: GoalSumAggregateOutputType | null
    _min: GoalMinAggregateOutputType | null
    _max: GoalMaxAggregateOutputType | null
  }

  type GetGoalGroupByPayload<T extends GoalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalGroupByOutputType[P]>
            : GetScalarType<T[P], GoalGroupByOutputType[P]>
        }
      >
    >


  export type GoalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    playerId?: boolean
    minute?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    playerId?: boolean
    minute?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roundId?: boolean
    playerId?: boolean
    minute?: boolean
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["goal"]>

  export type GoalSelectScalar = {
    id?: boolean
    roundId?: boolean
    playerId?: boolean
    minute?: boolean
  }

  export type GoalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roundId" | "playerId" | "minute", ExtArgs["result"]["goal"]>
  export type GoalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type GoalIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    round?: boolean | RoundDefaultArgs<ExtArgs>
    player?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $GoalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Goal"
    objects: {
      round: Prisma.$RoundPayload<ExtArgs>
      player: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roundId: string
      playerId: string
      minute: number | null
    }, ExtArgs["result"]["goal"]>
    composites: {}
  }

  type GoalGetPayload<S extends boolean | null | undefined | GoalDefaultArgs> = $Result.GetResult<Prisma.$GoalPayload, S>

  type GoalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalCountAggregateInputType | true
    }

  export interface GoalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Goal'], meta: { name: 'Goal' } }
    /**
     * Find zero or one Goal that matches the filter.
     * @param {GoalFindUniqueArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalFindUniqueArgs>(args: SelectSubset<T, GoalFindUniqueArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Goal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalFindUniqueOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalFindFirstArgs>(args?: SelectSubset<T, GoalFindFirstArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Goal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindFirstOrThrowArgs} args - Arguments to find a Goal
     * @example
     * // Get one Goal
     * const goal = await prisma.goal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Goals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Goals
     * const goals = await prisma.goal.findMany()
     * 
     * // Get first 10 Goals
     * const goals = await prisma.goal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalWithIdOnly = await prisma.goal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalFindManyArgs>(args?: SelectSubset<T, GoalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Goal.
     * @param {GoalCreateArgs} args - Arguments to create a Goal.
     * @example
     * // Create one Goal
     * const Goal = await prisma.goal.create({
     *   data: {
     *     // ... data to create a Goal
     *   }
     * })
     * 
     */
    create<T extends GoalCreateArgs>(args: SelectSubset<T, GoalCreateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Goals.
     * @param {GoalCreateManyArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalCreateManyArgs>(args?: SelectSubset<T, GoalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Goals and returns the data saved in the database.
     * @param {GoalCreateManyAndReturnArgs} args - Arguments to create many Goals.
     * @example
     * // Create many Goals
     * const goal = await prisma.goal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Goal.
     * @param {GoalDeleteArgs} args - Arguments to delete one Goal.
     * @example
     * // Delete one Goal
     * const Goal = await prisma.goal.delete({
     *   where: {
     *     // ... filter to delete one Goal
     *   }
     * })
     * 
     */
    delete<T extends GoalDeleteArgs>(args: SelectSubset<T, GoalDeleteArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Goal.
     * @param {GoalUpdateArgs} args - Arguments to update one Goal.
     * @example
     * // Update one Goal
     * const goal = await prisma.goal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalUpdateArgs>(args: SelectSubset<T, GoalUpdateArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Goals.
     * @param {GoalDeleteManyArgs} args - Arguments to filter Goals to delete.
     * @example
     * // Delete a few Goals
     * const { count } = await prisma.goal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalDeleteManyArgs>(args?: SelectSubset<T, GoalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalUpdateManyArgs>(args: SelectSubset<T, GoalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Goals and returns the data updated in the database.
     * @param {GoalUpdateManyAndReturnArgs} args - Arguments to update many Goals.
     * @example
     * // Update many Goals
     * const goal = await prisma.goal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Goals and only return the `id`
     * const goalWithIdOnly = await prisma.goal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GoalUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Goal.
     * @param {GoalUpsertArgs} args - Arguments to update or create a Goal.
     * @example
     * // Update or create a Goal
     * const goal = await prisma.goal.upsert({
     *   create: {
     *     // ... data to create a Goal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Goal we want to update
     *   }
     * })
     */
    upsert<T extends GoalUpsertArgs>(args: SelectSubset<T, GoalUpsertArgs<ExtArgs>>): Prisma__GoalClient<$Result.GetResult<Prisma.$GoalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Goals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalCountArgs} args - Arguments to filter Goals to count.
     * @example
     * // Count the number of Goals
     * const count = await prisma.goal.count({
     *   where: {
     *     // ... the filter for the Goals we want to count
     *   }
     * })
    **/
    count<T extends GoalCountArgs>(
      args?: Subset<T, GoalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalAggregateArgs>(args: Subset<T, GoalAggregateArgs>): Prisma.PrismaPromise<GetGoalAggregateType<T>>

    /**
     * Group by Goal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalGroupByArgs} args - Group by arguments.
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
      T extends GoalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalGroupByArgs['orderBy'] }
        : { orderBy?: GoalGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Goal model
   */
  readonly fields: GoalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Goal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    round<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Goal model
   */
  interface GoalFieldRefs {
    readonly id: FieldRef<"Goal", 'Int'>
    readonly roundId: FieldRef<"Goal", 'String'>
    readonly playerId: FieldRef<"Goal", 'String'>
    readonly minute: FieldRef<"Goal", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Goal findUnique
   */
  export type GoalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findUniqueOrThrow
   */
  export type GoalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal findFirst
   */
  export type GoalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findFirstOrThrow
   */
  export type GoalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goal to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Goals.
     */
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal findMany
   */
  export type GoalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter, which Goals to fetch.
     */
    where?: GoalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Goals to fetch.
     */
    orderBy?: GoalOrderByWithRelationInput | GoalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Goals.
     */
    cursor?: GoalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Goals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Goals.
     */
    skip?: number
    distinct?: GoalScalarFieldEnum | GoalScalarFieldEnum[]
  }

  /**
   * Goal create
   */
  export type GoalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to create a Goal.
     */
    data: XOR<GoalCreateInput, GoalUncheckedCreateInput>
  }

  /**
   * Goal createMany
   */
  export type GoalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Goal createManyAndReturn
   */
  export type GoalCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to create many Goals.
     */
    data: GoalCreateManyInput | GoalCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal update
   */
  export type GoalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The data needed to update a Goal.
     */
    data: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
    /**
     * Choose, which Goal to update.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal updateMany
   */
  export type GoalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
  }

  /**
   * Goal updateManyAndReturn
   */
  export type GoalUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * The data used to update Goals.
     */
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyInput>
    /**
     * Filter which Goals to update
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Goal upsert
   */
  export type GoalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * The filter to search for the Goal to update in case it exists.
     */
    where: GoalWhereUniqueInput
    /**
     * In case the Goal found by the `where` argument doesn't exist, create a new Goal with this data.
     */
    create: XOR<GoalCreateInput, GoalUncheckedCreateInput>
    /**
     * In case the Goal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalUpdateInput, GoalUncheckedUpdateInput>
  }

  /**
   * Goal delete
   */
  export type GoalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
    /**
     * Filter which Goal to delete.
     */
    where: GoalWhereUniqueInput
  }

  /**
   * Goal deleteMany
   */
  export type GoalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Goals to delete
     */
    where?: GoalWhereInput
    /**
     * Limit how many Goals to delete.
     */
    limit?: number
  }

  /**
   * Goal without action
   */
  export type GoalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Goal
     */
    select?: GoalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Goal
     */
    omit?: GoalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GoalInclude<ExtArgs> | null
  }


  /**
   * Model Badge
   */

  export type AggregateBadge = {
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  export type BadgeAvgAggregateOutputType = {
    id: number | null
  }

  export type BadgeSumAggregateOutputType = {
    id: number | null
  }

  export type BadgeMinAggregateOutputType = {
    id: number | null
    playerId: string | null
    type: $Enums.BadgeType | null
    sessionId: string | null
    earnedAt: Date | null
  }

  export type BadgeMaxAggregateOutputType = {
    id: number | null
    playerId: string | null
    type: $Enums.BadgeType | null
    sessionId: string | null
    earnedAt: Date | null
  }

  export type BadgeCountAggregateOutputType = {
    id: number
    playerId: number
    type: number
    sessionId: number
    earnedAt: number
    _all: number
  }


  export type BadgeAvgAggregateInputType = {
    id?: true
  }

  export type BadgeSumAggregateInputType = {
    id?: true
  }

  export type BadgeMinAggregateInputType = {
    id?: true
    playerId?: true
    type?: true
    sessionId?: true
    earnedAt?: true
  }

  export type BadgeMaxAggregateInputType = {
    id?: true
    playerId?: true
    type?: true
    sessionId?: true
    earnedAt?: true
  }

  export type BadgeCountAggregateInputType = {
    id?: true
    playerId?: true
    type?: true
    sessionId?: true
    earnedAt?: true
    _all?: true
  }

  export type BadgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badge to aggregate.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Badges
    **/
    _count?: true | BadgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BadgeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BadgeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BadgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BadgeMaxAggregateInputType
  }

  export type GetBadgeAggregateType<T extends BadgeAggregateArgs> = {
        [P in keyof T & keyof AggregateBadge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBadge[P]>
      : GetScalarType<T[P], AggregateBadge[P]>
  }




  export type BadgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BadgeWhereInput
    orderBy?: BadgeOrderByWithAggregationInput | BadgeOrderByWithAggregationInput[]
    by: BadgeScalarFieldEnum[] | BadgeScalarFieldEnum
    having?: BadgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BadgeCountAggregateInputType | true
    _avg?: BadgeAvgAggregateInputType
    _sum?: BadgeSumAggregateInputType
    _min?: BadgeMinAggregateInputType
    _max?: BadgeMaxAggregateInputType
  }

  export type BadgeGroupByOutputType = {
    id: number
    playerId: string
    type: $Enums.BadgeType
    sessionId: string | null
    earnedAt: Date
    _count: BadgeCountAggregateOutputType | null
    _avg: BadgeAvgAggregateOutputType | null
    _sum: BadgeSumAggregateOutputType | null
    _min: BadgeMinAggregateOutputType | null
    _max: BadgeMaxAggregateOutputType | null
  }

  type GetBadgeGroupByPayload<T extends BadgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BadgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BadgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BadgeGroupByOutputType[P]>
            : GetScalarType<T[P], BadgeGroupByOutputType[P]>
        }
      >
    >


  export type BadgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    type?: boolean
    sessionId?: boolean
    earnedAt?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Badge$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    type?: boolean
    sessionId?: boolean
    earnedAt?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Badge$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    type?: boolean
    sessionId?: boolean
    earnedAt?: boolean
    player?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Badge$sessionArgs<ExtArgs>
  }, ExtArgs["result"]["badge"]>

  export type BadgeSelectScalar = {
    id?: boolean
    playerId?: boolean
    type?: boolean
    sessionId?: boolean
    earnedAt?: boolean
  }

  export type BadgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "type" | "sessionId" | "earnedAt", ExtArgs["result"]["badge"]>
  export type BadgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Badge$sessionArgs<ExtArgs>
  }
  export type BadgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Badge$sessionArgs<ExtArgs>
  }
  export type BadgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | UserDefaultArgs<ExtArgs>
    session?: boolean | Badge$sessionArgs<ExtArgs>
  }

  export type $BadgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Badge"
    objects: {
      player: Prisma.$UserPayload<ExtArgs>
      session: Prisma.$SessionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      playerId: string
      type: $Enums.BadgeType
      sessionId: string | null
      earnedAt: Date
    }, ExtArgs["result"]["badge"]>
    composites: {}
  }

  type BadgeGetPayload<S extends boolean | null | undefined | BadgeDefaultArgs> = $Result.GetResult<Prisma.$BadgePayload, S>

  type BadgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BadgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BadgeCountAggregateInputType | true
    }

  export interface BadgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Badge'], meta: { name: 'Badge' } }
    /**
     * Find zero or one Badge that matches the filter.
     * @param {BadgeFindUniqueArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BadgeFindUniqueArgs>(args: SelectSubset<T, BadgeFindUniqueArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Badge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BadgeFindUniqueOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BadgeFindUniqueOrThrowArgs>(args: SelectSubset<T, BadgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BadgeFindFirstArgs>(args?: SelectSubset<T, BadgeFindFirstArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Badge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindFirstOrThrowArgs} args - Arguments to find a Badge
     * @example
     * // Get one Badge
     * const badge = await prisma.badge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BadgeFindFirstOrThrowArgs>(args?: SelectSubset<T, BadgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Badges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Badges
     * const badges = await prisma.badge.findMany()
     * 
     * // Get first 10 Badges
     * const badges = await prisma.badge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const badgeWithIdOnly = await prisma.badge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BadgeFindManyArgs>(args?: SelectSubset<T, BadgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Badge.
     * @param {BadgeCreateArgs} args - Arguments to create a Badge.
     * @example
     * // Create one Badge
     * const Badge = await prisma.badge.create({
     *   data: {
     *     // ... data to create a Badge
     *   }
     * })
     * 
     */
    create<T extends BadgeCreateArgs>(args: SelectSubset<T, BadgeCreateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Badges.
     * @param {BadgeCreateManyArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BadgeCreateManyArgs>(args?: SelectSubset<T, BadgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Badges and returns the data saved in the database.
     * @param {BadgeCreateManyAndReturnArgs} args - Arguments to create many Badges.
     * @example
     * // Create many Badges
     * const badge = await prisma.badge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BadgeCreateManyAndReturnArgs>(args?: SelectSubset<T, BadgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Badge.
     * @param {BadgeDeleteArgs} args - Arguments to delete one Badge.
     * @example
     * // Delete one Badge
     * const Badge = await prisma.badge.delete({
     *   where: {
     *     // ... filter to delete one Badge
     *   }
     * })
     * 
     */
    delete<T extends BadgeDeleteArgs>(args: SelectSubset<T, BadgeDeleteArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Badge.
     * @param {BadgeUpdateArgs} args - Arguments to update one Badge.
     * @example
     * // Update one Badge
     * const badge = await prisma.badge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BadgeUpdateArgs>(args: SelectSubset<T, BadgeUpdateArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Badges.
     * @param {BadgeDeleteManyArgs} args - Arguments to filter Badges to delete.
     * @example
     * // Delete a few Badges
     * const { count } = await prisma.badge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BadgeDeleteManyArgs>(args?: SelectSubset<T, BadgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BadgeUpdateManyArgs>(args: SelectSubset<T, BadgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Badges and returns the data updated in the database.
     * @param {BadgeUpdateManyAndReturnArgs} args - Arguments to update many Badges.
     * @example
     * // Update many Badges
     * const badge = await prisma.badge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Badges and only return the `id`
     * const badgeWithIdOnly = await prisma.badge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BadgeUpdateManyAndReturnArgs>(args: SelectSubset<T, BadgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Badge.
     * @param {BadgeUpsertArgs} args - Arguments to update or create a Badge.
     * @example
     * // Update or create a Badge
     * const badge = await prisma.badge.upsert({
     *   create: {
     *     // ... data to create a Badge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Badge we want to update
     *   }
     * })
     */
    upsert<T extends BadgeUpsertArgs>(args: SelectSubset<T, BadgeUpsertArgs<ExtArgs>>): Prisma__BadgeClient<$Result.GetResult<Prisma.$BadgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Badges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeCountArgs} args - Arguments to filter Badges to count.
     * @example
     * // Count the number of Badges
     * const count = await prisma.badge.count({
     *   where: {
     *     // ... the filter for the Badges we want to count
     *   }
     * })
    **/
    count<T extends BadgeCountArgs>(
      args?: Subset<T, BadgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BadgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BadgeAggregateArgs>(args: Subset<T, BadgeAggregateArgs>): Prisma.PrismaPromise<GetBadgeAggregateType<T>>

    /**
     * Group by Badge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BadgeGroupByArgs} args - Group by arguments.
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
      T extends BadgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BadgeGroupByArgs['orderBy'] }
        : { orderBy?: BadgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BadgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBadgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Badge model
   */
  readonly fields: BadgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Badge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BadgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    session<T extends Badge$sessionArgs<ExtArgs> = {}>(args?: Subset<T, Badge$sessionArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Badge model
   */
  interface BadgeFieldRefs {
    readonly id: FieldRef<"Badge", 'Int'>
    readonly playerId: FieldRef<"Badge", 'String'>
    readonly type: FieldRef<"Badge", 'BadgeType'>
    readonly sessionId: FieldRef<"Badge", 'String'>
    readonly earnedAt: FieldRef<"Badge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Badge findUnique
   */
  export type BadgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findUniqueOrThrow
   */
  export type BadgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge findFirst
   */
  export type BadgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findFirstOrThrow
   */
  export type BadgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badge to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Badges.
     */
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge findMany
   */
  export type BadgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter, which Badges to fetch.
     */
    where?: BadgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Badges to fetch.
     */
    orderBy?: BadgeOrderByWithRelationInput | BadgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Badges.
     */
    cursor?: BadgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Badges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Badges.
     */
    skip?: number
    distinct?: BadgeScalarFieldEnum | BadgeScalarFieldEnum[]
  }

  /**
   * Badge create
   */
  export type BadgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Badge.
     */
    data: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
  }

  /**
   * Badge createMany
   */
  export type BadgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Badge createManyAndReturn
   */
  export type BadgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to create many Badges.
     */
    data: BadgeCreateManyInput | BadgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Badge update
   */
  export type BadgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Badge.
     */
    data: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
    /**
     * Choose, which Badge to update.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge updateMany
   */
  export type BadgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
  }

  /**
   * Badge updateManyAndReturn
   */
  export type BadgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * The data used to update Badges.
     */
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyInput>
    /**
     * Filter which Badges to update
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Badge upsert
   */
  export type BadgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Badge to update in case it exists.
     */
    where: BadgeWhereUniqueInput
    /**
     * In case the Badge found by the `where` argument doesn't exist, create a new Badge with this data.
     */
    create: XOR<BadgeCreateInput, BadgeUncheckedCreateInput>
    /**
     * In case the Badge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BadgeUpdateInput, BadgeUncheckedUpdateInput>
  }

  /**
   * Badge delete
   */
  export type BadgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
    /**
     * Filter which Badge to delete.
     */
    where: BadgeWhereUniqueInput
  }

  /**
   * Badge deleteMany
   */
  export type BadgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Badges to delete
     */
    where?: BadgeWhereInput
    /**
     * Limit how many Badges to delete.
     */
    limit?: number
  }

  /**
   * Badge.session
   */
  export type Badge$sessionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
  }

  /**
   * Badge without action
   */
  export type BadgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Badge
     */
    select?: BadgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Badge
     */
    omit?: BadgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BadgeInclude<ExtArgs> | null
  }


  /**
   * Model SessionParticipant
   */

  export type AggregateSessionParticipant = {
    _count: SessionParticipantCountAggregateOutputType | null
    _min: SessionParticipantMinAggregateOutputType | null
    _max: SessionParticipantMaxAggregateOutputType | null
  }

  export type SessionParticipantMinAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    status: $Enums.ParticipantStatus | null
    createdAt: Date | null
  }

  export type SessionParticipantMaxAggregateOutputType = {
    id: string | null
    sessionId: string | null
    userId: string | null
    status: $Enums.ParticipantStatus | null
    createdAt: Date | null
  }

  export type SessionParticipantCountAggregateOutputType = {
    id: number
    sessionId: number
    userId: number
    status: number
    createdAt: number
    _all: number
  }


  export type SessionParticipantMinAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    status?: true
    createdAt?: true
  }

  export type SessionParticipantMaxAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    status?: true
    createdAt?: true
  }

  export type SessionParticipantCountAggregateInputType = {
    id?: true
    sessionId?: true
    userId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type SessionParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionParticipant to aggregate.
     */
    where?: SessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionParticipants to fetch.
     */
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionParticipants
    **/
    _count?: true | SessionParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionParticipantMaxAggregateInputType
  }

  export type GetSessionParticipantAggregateType<T extends SessionParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionParticipant[P]>
      : GetScalarType<T[P], AggregateSessionParticipant[P]>
  }




  export type SessionParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionParticipantWhereInput
    orderBy?: SessionParticipantOrderByWithAggregationInput | SessionParticipantOrderByWithAggregationInput[]
    by: SessionParticipantScalarFieldEnum[] | SessionParticipantScalarFieldEnum
    having?: SessionParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionParticipantCountAggregateInputType | true
    _min?: SessionParticipantMinAggregateInputType
    _max?: SessionParticipantMaxAggregateInputType
  }

  export type SessionParticipantGroupByOutputType = {
    id: string
    sessionId: string
    userId: string
    status: $Enums.ParticipantStatus
    createdAt: Date
    _count: SessionParticipantCountAggregateOutputType | null
    _min: SessionParticipantMinAggregateOutputType | null
    _max: SessionParticipantMaxAggregateOutputType | null
  }

  type GetSessionParticipantGroupByPayload<T extends SessionParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], SessionParticipantGroupByOutputType[P]>
        }
      >
    >


  export type SessionParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionParticipant"]>

  export type SessionParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionParticipant"]>

  export type SessionParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessionParticipant"]>

  export type SessionParticipantSelectScalar = {
    id?: boolean
    sessionId?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type SessionParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionId" | "userId" | "status" | "createdAt", ExtArgs["result"]["sessionParticipant"]>
  export type SessionParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | SessionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionParticipant"
    objects: {
      session: Prisma.$SessionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionId: string
      userId: string
      status: $Enums.ParticipantStatus
      createdAt: Date
    }, ExtArgs["result"]["sessionParticipant"]>
    composites: {}
  }

  type SessionParticipantGetPayload<S extends boolean | null | undefined | SessionParticipantDefaultArgs> = $Result.GetResult<Prisma.$SessionParticipantPayload, S>

  type SessionParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionParticipantCountAggregateInputType | true
    }

  export interface SessionParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionParticipant'], meta: { name: 'SessionParticipant' } }
    /**
     * Find zero or one SessionParticipant that matches the filter.
     * @param {SessionParticipantFindUniqueArgs} args - Arguments to find a SessionParticipant
     * @example
     * // Get one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionParticipantFindUniqueArgs>(args: SelectSubset<T, SessionParticipantFindUniqueArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionParticipantFindUniqueOrThrowArgs} args - Arguments to find a SessionParticipant
     * @example
     * // Get one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantFindFirstArgs} args - Arguments to find a SessionParticipant
     * @example
     * // Get one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionParticipantFindFirstArgs>(args?: SelectSubset<T, SessionParticipantFindFirstArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantFindFirstOrThrowArgs} args - Arguments to find a SessionParticipant
     * @example
     * // Get one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionParticipants
     * const sessionParticipants = await prisma.sessionParticipant.findMany()
     * 
     * // Get first 10 SessionParticipants
     * const sessionParticipants = await prisma.sessionParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionParticipantWithIdOnly = await prisma.sessionParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionParticipantFindManyArgs>(args?: SelectSubset<T, SessionParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionParticipant.
     * @param {SessionParticipantCreateArgs} args - Arguments to create a SessionParticipant.
     * @example
     * // Create one SessionParticipant
     * const SessionParticipant = await prisma.sessionParticipant.create({
     *   data: {
     *     // ... data to create a SessionParticipant
     *   }
     * })
     * 
     */
    create<T extends SessionParticipantCreateArgs>(args: SelectSubset<T, SessionParticipantCreateArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionParticipants.
     * @param {SessionParticipantCreateManyArgs} args - Arguments to create many SessionParticipants.
     * @example
     * // Create many SessionParticipants
     * const sessionParticipant = await prisma.sessionParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionParticipantCreateManyArgs>(args?: SelectSubset<T, SessionParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionParticipants and returns the data saved in the database.
     * @param {SessionParticipantCreateManyAndReturnArgs} args - Arguments to create many SessionParticipants.
     * @example
     * // Create many SessionParticipants
     * const sessionParticipant = await prisma.sessionParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionParticipants and only return the `id`
     * const sessionParticipantWithIdOnly = await prisma.sessionParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionParticipant.
     * @param {SessionParticipantDeleteArgs} args - Arguments to delete one SessionParticipant.
     * @example
     * // Delete one SessionParticipant
     * const SessionParticipant = await prisma.sessionParticipant.delete({
     *   where: {
     *     // ... filter to delete one SessionParticipant
     *   }
     * })
     * 
     */
    delete<T extends SessionParticipantDeleteArgs>(args: SelectSubset<T, SessionParticipantDeleteArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionParticipant.
     * @param {SessionParticipantUpdateArgs} args - Arguments to update one SessionParticipant.
     * @example
     * // Update one SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionParticipantUpdateArgs>(args: SelectSubset<T, SessionParticipantUpdateArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionParticipants.
     * @param {SessionParticipantDeleteManyArgs} args - Arguments to filter SessionParticipants to delete.
     * @example
     * // Delete a few SessionParticipants
     * const { count } = await prisma.sessionParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionParticipantDeleteManyArgs>(args?: SelectSubset<T, SessionParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionParticipants
     * const sessionParticipant = await prisma.sessionParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionParticipantUpdateManyArgs>(args: SelectSubset<T, SessionParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionParticipants and returns the data updated in the database.
     * @param {SessionParticipantUpdateManyAndReturnArgs} args - Arguments to update many SessionParticipants.
     * @example
     * // Update many SessionParticipants
     * const sessionParticipant = await prisma.sessionParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionParticipants and only return the `id`
     * const sessionParticipantWithIdOnly = await prisma.sessionParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionParticipant.
     * @param {SessionParticipantUpsertArgs} args - Arguments to update or create a SessionParticipant.
     * @example
     * // Update or create a SessionParticipant
     * const sessionParticipant = await prisma.sessionParticipant.upsert({
     *   create: {
     *     // ... data to create a SessionParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionParticipant we want to update
     *   }
     * })
     */
    upsert<T extends SessionParticipantUpsertArgs>(args: SelectSubset<T, SessionParticipantUpsertArgs<ExtArgs>>): Prisma__SessionParticipantClient<$Result.GetResult<Prisma.$SessionParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantCountArgs} args - Arguments to filter SessionParticipants to count.
     * @example
     * // Count the number of SessionParticipants
     * const count = await prisma.sessionParticipant.count({
     *   where: {
     *     // ... the filter for the SessionParticipants we want to count
     *   }
     * })
    **/
    count<T extends SessionParticipantCountArgs>(
      args?: Subset<T, SessionParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SessionParticipantAggregateArgs>(args: Subset<T, SessionParticipantAggregateArgs>): Prisma.PrismaPromise<GetSessionParticipantAggregateType<T>>

    /**
     * Group by SessionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionParticipantGroupByArgs} args - Group by arguments.
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
      T extends SessionParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionParticipantGroupByArgs['orderBy'] }
        : { orderBy?: SessionParticipantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SessionParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionParticipant model
   */
  readonly fields: SessionParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends SessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SessionDefaultArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SessionParticipant model
   */
  interface SessionParticipantFieldRefs {
    readonly id: FieldRef<"SessionParticipant", 'String'>
    readonly sessionId: FieldRef<"SessionParticipant", 'String'>
    readonly userId: FieldRef<"SessionParticipant", 'String'>
    readonly status: FieldRef<"SessionParticipant", 'ParticipantStatus'>
    readonly createdAt: FieldRef<"SessionParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionParticipant findUnique
   */
  export type SessionParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipant to fetch.
     */
    where: SessionParticipantWhereUniqueInput
  }

  /**
   * SessionParticipant findUniqueOrThrow
   */
  export type SessionParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipant to fetch.
     */
    where: SessionParticipantWhereUniqueInput
  }

  /**
   * SessionParticipant findFirst
   */
  export type SessionParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipant to fetch.
     */
    where?: SessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionParticipants to fetch.
     */
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionParticipants.
     */
    cursor?: SessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionParticipants.
     */
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * SessionParticipant findFirstOrThrow
   */
  export type SessionParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipant to fetch.
     */
    where?: SessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionParticipants to fetch.
     */
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionParticipants.
     */
    cursor?: SessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionParticipants.
     */
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * SessionParticipant findMany
   */
  export type SessionParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which SessionParticipants to fetch.
     */
    where?: SessionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionParticipants to fetch.
     */
    orderBy?: SessionParticipantOrderByWithRelationInput | SessionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionParticipants.
     */
    cursor?: SessionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionParticipants.
     */
    skip?: number
    distinct?: SessionParticipantScalarFieldEnum | SessionParticipantScalarFieldEnum[]
  }

  /**
   * SessionParticipant create
   */
  export type SessionParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionParticipant.
     */
    data: XOR<SessionParticipantCreateInput, SessionParticipantUncheckedCreateInput>
  }

  /**
   * SessionParticipant createMany
   */
  export type SessionParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionParticipants.
     */
    data: SessionParticipantCreateManyInput | SessionParticipantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionParticipant createManyAndReturn
   */
  export type SessionParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many SessionParticipants.
     */
    data: SessionParticipantCreateManyInput | SessionParticipantCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionParticipant update
   */
  export type SessionParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionParticipant.
     */
    data: XOR<SessionParticipantUpdateInput, SessionParticipantUncheckedUpdateInput>
    /**
     * Choose, which SessionParticipant to update.
     */
    where: SessionParticipantWhereUniqueInput
  }

  /**
   * SessionParticipant updateMany
   */
  export type SessionParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionParticipants.
     */
    data: XOR<SessionParticipantUpdateManyMutationInput, SessionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which SessionParticipants to update
     */
    where?: SessionParticipantWhereInput
    /**
     * Limit how many SessionParticipants to update.
     */
    limit?: number
  }

  /**
   * SessionParticipant updateManyAndReturn
   */
  export type SessionParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * The data used to update SessionParticipants.
     */
    data: XOR<SessionParticipantUpdateManyMutationInput, SessionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which SessionParticipants to update
     */
    where?: SessionParticipantWhereInput
    /**
     * Limit how many SessionParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionParticipant upsert
   */
  export type SessionParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionParticipant to update in case it exists.
     */
    where: SessionParticipantWhereUniqueInput
    /**
     * In case the SessionParticipant found by the `where` argument doesn't exist, create a new SessionParticipant with this data.
     */
    create: XOR<SessionParticipantCreateInput, SessionParticipantUncheckedCreateInput>
    /**
     * In case the SessionParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionParticipantUpdateInput, SessionParticipantUncheckedUpdateInput>
  }

  /**
   * SessionParticipant delete
   */
  export type SessionParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
    /**
     * Filter which SessionParticipant to delete.
     */
    where: SessionParticipantWhereUniqueInput
  }

  /**
   * SessionParticipant deleteMany
   */
  export type SessionParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionParticipants to delete
     */
    where?: SessionParticipantWhereInput
    /**
     * Limit how many SessionParticipants to delete.
     */
    limit?: number
  }

  /**
   * SessionParticipant without action
   */
  export type SessionParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionParticipant
     */
    select?: SessionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionParticipant
     */
    omit?: SessionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionParticipantInclude<ExtArgs> | null
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
    email: 'email',
    password: 'password',
    name: 'name',
    nickname: 'nickname',
    position: 'position',
    rating: 'rating',
    avatarIndex: 'avatarIndex',
    isAdmin: 'isAdmin',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    date: 'date',
    status: 'status',
    createdById: 'createdById',
    mvpPlayerId: 'mvpPlayerId',
    topScorerPlayerId: 'topScorerPlayerId',
    maxPlayers: 'maxPlayers',
    createdAt: 'createdAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    name: 'name',
    color: 'color',
    totalRating: 'totalRating'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamPlayerScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    playerId: 'playerId'
  };

  export type TeamPlayerScalarFieldEnum = (typeof TeamPlayerScalarFieldEnum)[keyof typeof TeamPlayerScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    roundNumber: 'roundNumber',
    homeTeamId: 'homeTeamId',
    awayTeamId: 'awayTeamId',
    homeScore: 'homeScore',
    awayScore: 'awayScore',
    winnerTeamId: 'winnerTeamId',
    isDraw: 'isDraw',
    createdAt: 'createdAt'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const GoalScalarFieldEnum: {
    id: 'id',
    roundId: 'roundId',
    playerId: 'playerId',
    minute: 'minute'
  };

  export type GoalScalarFieldEnum = (typeof GoalScalarFieldEnum)[keyof typeof GoalScalarFieldEnum]


  export const BadgeScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    type: 'type',
    sessionId: 'sessionId',
    earnedAt: 'earnedAt'
  };

  export type BadgeScalarFieldEnum = (typeof BadgeScalarFieldEnum)[keyof typeof BadgeScalarFieldEnum]


  export const SessionParticipantScalarFieldEnum: {
    id: 'id',
    sessionId: 'sessionId',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type SessionParticipantScalarFieldEnum = (typeof SessionParticipantScalarFieldEnum)[keyof typeof SessionParticipantScalarFieldEnum]


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
   * Reference to a field of type 'Position'
   */
  export type EnumPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Position'>
    


  /**
   * Reference to a field of type 'Position[]'
   */
  export type ListEnumPositionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Position[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    


  /**
   * Reference to a field of type 'BadgeType'
   */
  export type EnumBadgeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BadgeType'>
    


  /**
   * Reference to a field of type 'BadgeType[]'
   */
  export type ListEnumBadgeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BadgeType[]'>
    


  /**
   * Reference to a field of type 'ParticipantStatus'
   */
  export type EnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus'>
    


  /**
   * Reference to a field of type 'ParticipantStatus[]'
   */
  export type ListEnumParticipantStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ParticipantStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    position?: EnumPositionFilter<"User"> | $Enums.Position
    rating?: IntFilter<"User"> | number
    avatarIndex?: IntFilter<"User"> | number
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    teamPlayers?: TeamPlayerListRelationFilter
    goals?: GoalListRelationFilter
    badges?: BadgeListRelationFilter
    createdSessions?: SessionListRelationFilter
    mvpSessions?: SessionListRelationFilter
    topScorerSessions?: SessionListRelationFilter
    sessionParticipants?: SessionParticipantListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    position?: SortOrder
    rating?: SortOrder
    avatarIndex?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    teamPlayers?: TeamPlayerOrderByRelationAggregateInput
    goals?: GoalOrderByRelationAggregateInput
    badges?: BadgeOrderByRelationAggregateInput
    createdSessions?: SessionOrderByRelationAggregateInput
    mvpSessions?: SessionOrderByRelationAggregateInput
    topScorerSessions?: SessionOrderByRelationAggregateInput
    sessionParticipants?: SessionParticipantOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    nickname?: StringNullableFilter<"User"> | string | null
    position?: EnumPositionFilter<"User"> | $Enums.Position
    rating?: IntFilter<"User"> | number
    avatarIndex?: IntFilter<"User"> | number
    isAdmin?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    teamPlayers?: TeamPlayerListRelationFilter
    goals?: GoalListRelationFilter
    badges?: BadgeListRelationFilter
    createdSessions?: SessionListRelationFilter
    mvpSessions?: SessionListRelationFilter
    topScorerSessions?: SessionListRelationFilter
    sessionParticipants?: SessionParticipantListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    position?: SortOrder
    rating?: SortOrder
    avatarIndex?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    nickname?: StringNullableWithAggregatesFilter<"User"> | string | null
    position?: EnumPositionWithAggregatesFilter<"User"> | $Enums.Position
    rating?: IntWithAggregatesFilter<"User"> | number
    avatarIndex?: IntWithAggregatesFilter<"User"> | number
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    title?: StringNullableFilter<"Session"> | string | null
    date?: DateTimeFilter<"Session"> | Date | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    createdById?: StringFilter<"Session"> | string
    mvpPlayerId?: StringNullableFilter<"Session"> | string | null
    topScorerPlayerId?: StringNullableFilter<"Session"> | string | null
    maxPlayers?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    mvpPlayer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    topScorerPlayer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    teams?: TeamListRelationFilter
    rounds?: RoundListRelationFilter
    badges?: BadgeListRelationFilter
    participants?: SessionParticipantListRelationFilter
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    mvpPlayerId?: SortOrderInput | SortOrder
    topScorerPlayerId?: SortOrderInput | SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    mvpPlayer?: UserOrderByWithRelationInput
    topScorerPlayer?: UserOrderByWithRelationInput
    teams?: TeamOrderByRelationAggregateInput
    rounds?: RoundOrderByRelationAggregateInput
    badges?: BadgeOrderByRelationAggregateInput
    participants?: SessionParticipantOrderByRelationAggregateInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    title?: StringNullableFilter<"Session"> | string | null
    date?: DateTimeFilter<"Session"> | Date | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    createdById?: StringFilter<"Session"> | string
    mvpPlayerId?: StringNullableFilter<"Session"> | string | null
    topScorerPlayerId?: StringNullableFilter<"Session"> | string | null
    maxPlayers?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    mvpPlayer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    topScorerPlayer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    teams?: TeamListRelationFilter
    rounds?: RoundListRelationFilter
    badges?: BadgeListRelationFilter
    participants?: SessionParticipantListRelationFilter
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    date?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    mvpPlayerId?: SortOrderInput | SortOrder
    topScorerPlayerId?: SortOrderInput | SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    title?: StringNullableWithAggregatesFilter<"Session"> | string | null
    date?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    status?: EnumSessionStatusWithAggregatesFilter<"Session"> | $Enums.SessionStatus
    createdById?: StringWithAggregatesFilter<"Session"> | string
    mvpPlayerId?: StringNullableWithAggregatesFilter<"Session"> | string | null
    topScorerPlayerId?: StringNullableWithAggregatesFilter<"Session"> | string | null
    maxPlayers?: IntWithAggregatesFilter<"Session"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    sessionId?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    color?: StringFilter<"Team"> | string
    totalRating?: IntFilter<"Team"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    players?: TeamPlayerListRelationFilter
    homeRounds?: RoundListRelationFilter
    awayRounds?: RoundListRelationFilter
    wonRounds?: RoundListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    totalRating?: SortOrder
    session?: SessionOrderByWithRelationInput
    players?: TeamPlayerOrderByRelationAggregateInput
    homeRounds?: RoundOrderByRelationAggregateInput
    awayRounds?: RoundOrderByRelationAggregateInput
    wonRounds?: RoundOrderByRelationAggregateInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    sessionId?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    color?: StringFilter<"Team"> | string
    totalRating?: IntFilter<"Team"> | number
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    players?: TeamPlayerListRelationFilter
    homeRounds?: RoundListRelationFilter
    awayRounds?: RoundListRelationFilter
    wonRounds?: RoundListRelationFilter
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    totalRating?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    sessionId?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    color?: StringWithAggregatesFilter<"Team"> | string
    totalRating?: IntWithAggregatesFilter<"Team"> | number
  }

  export type TeamPlayerWhereInput = {
    AND?: TeamPlayerWhereInput | TeamPlayerWhereInput[]
    OR?: TeamPlayerWhereInput[]
    NOT?: TeamPlayerWhereInput | TeamPlayerWhereInput[]
    id?: IntFilter<"TeamPlayer"> | number
    teamId?: StringFilter<"TeamPlayer"> | string
    playerId?: StringFilter<"TeamPlayer"> | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TeamPlayerOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    playerId?: SortOrder
    team?: TeamOrderByWithRelationInput
    player?: UserOrderByWithRelationInput
  }

  export type TeamPlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    teamId_playerId?: TeamPlayerTeamIdPlayerIdCompoundUniqueInput
    AND?: TeamPlayerWhereInput | TeamPlayerWhereInput[]
    OR?: TeamPlayerWhereInput[]
    NOT?: TeamPlayerWhereInput | TeamPlayerWhereInput[]
    teamId?: StringFilter<"TeamPlayer"> | string
    playerId?: StringFilter<"TeamPlayer"> | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "teamId_playerId">

  export type TeamPlayerOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    playerId?: SortOrder
    _count?: TeamPlayerCountOrderByAggregateInput
    _avg?: TeamPlayerAvgOrderByAggregateInput
    _max?: TeamPlayerMaxOrderByAggregateInput
    _min?: TeamPlayerMinOrderByAggregateInput
    _sum?: TeamPlayerSumOrderByAggregateInput
  }

  export type TeamPlayerScalarWhereWithAggregatesInput = {
    AND?: TeamPlayerScalarWhereWithAggregatesInput | TeamPlayerScalarWhereWithAggregatesInput[]
    OR?: TeamPlayerScalarWhereWithAggregatesInput[]
    NOT?: TeamPlayerScalarWhereWithAggregatesInput | TeamPlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeamPlayer"> | number
    teamId?: StringWithAggregatesFilter<"TeamPlayer"> | string
    playerId?: StringWithAggregatesFilter<"TeamPlayer"> | string
  }

  export type RoundWhereInput = {
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    id?: StringFilter<"Round"> | string
    sessionId?: StringFilter<"Round"> | string
    roundNumber?: IntFilter<"Round"> | number
    homeTeamId?: StringFilter<"Round"> | string
    awayTeamId?: StringFilter<"Round"> | string
    homeScore?: IntFilter<"Round"> | number
    awayScore?: IntFilter<"Round"> | number
    winnerTeamId?: StringNullableFilter<"Round"> | string | null
    isDraw?: BoolFilter<"Round"> | boolean
    createdAt?: DateTimeFilter<"Round"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    homeTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    winnerTeam?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    goals?: GoalListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roundNumber?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    winnerTeamId?: SortOrderInput | SortOrder
    isDraw?: SortOrder
    createdAt?: SortOrder
    session?: SessionOrderByWithRelationInput
    homeTeam?: TeamOrderByWithRelationInput
    awayTeam?: TeamOrderByWithRelationInput
    winnerTeam?: TeamOrderByWithRelationInput
    goals?: GoalOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    sessionId?: StringFilter<"Round"> | string
    roundNumber?: IntFilter<"Round"> | number
    homeTeamId?: StringFilter<"Round"> | string
    awayTeamId?: StringFilter<"Round"> | string
    homeScore?: IntFilter<"Round"> | number
    awayScore?: IntFilter<"Round"> | number
    winnerTeamId?: StringNullableFilter<"Round"> | string | null
    isDraw?: BoolFilter<"Round"> | boolean
    createdAt?: DateTimeFilter<"Round"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    homeTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    awayTeam?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    winnerTeam?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    goals?: GoalListRelationFilter
  }, "id">

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roundNumber?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    winnerTeamId?: SortOrderInput | SortOrder
    isDraw?: SortOrder
    createdAt?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _avg?: RoundAvgOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
    _sum?: RoundSumOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    OR?: RoundScalarWhereWithAggregatesInput[]
    NOT?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Round"> | string
    sessionId?: StringWithAggregatesFilter<"Round"> | string
    roundNumber?: IntWithAggregatesFilter<"Round"> | number
    homeTeamId?: StringWithAggregatesFilter<"Round"> | string
    awayTeamId?: StringWithAggregatesFilter<"Round"> | string
    homeScore?: IntWithAggregatesFilter<"Round"> | number
    awayScore?: IntWithAggregatesFilter<"Round"> | number
    winnerTeamId?: StringNullableWithAggregatesFilter<"Round"> | string | null
    isDraw?: BoolWithAggregatesFilter<"Round"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
  }

  export type GoalWhereInput = {
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    id?: IntFilter<"Goal"> | number
    roundId?: StringFilter<"Goal"> | string
    playerId?: StringFilter<"Goal"> | string
    minute?: IntNullableFilter<"Goal"> | number | null
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type GoalOrderByWithRelationInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    minute?: SortOrderInput | SortOrder
    round?: RoundOrderByWithRelationInput
    player?: UserOrderByWithRelationInput
  }

  export type GoalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GoalWhereInput | GoalWhereInput[]
    OR?: GoalWhereInput[]
    NOT?: GoalWhereInput | GoalWhereInput[]
    roundId?: StringFilter<"Goal"> | string
    playerId?: StringFilter<"Goal"> | string
    minute?: IntNullableFilter<"Goal"> | number | null
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type GoalOrderByWithAggregationInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    minute?: SortOrderInput | SortOrder
    _count?: GoalCountOrderByAggregateInput
    _avg?: GoalAvgOrderByAggregateInput
    _max?: GoalMaxOrderByAggregateInput
    _min?: GoalMinOrderByAggregateInput
    _sum?: GoalSumOrderByAggregateInput
  }

  export type GoalScalarWhereWithAggregatesInput = {
    AND?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    OR?: GoalScalarWhereWithAggregatesInput[]
    NOT?: GoalScalarWhereWithAggregatesInput | GoalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Goal"> | number
    roundId?: StringWithAggregatesFilter<"Goal"> | string
    playerId?: StringWithAggregatesFilter<"Goal"> | string
    minute?: IntNullableWithAggregatesFilter<"Goal"> | number | null
  }

  export type BadgeWhereInput = {
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    id?: IntFilter<"Badge"> | number
    playerId?: StringFilter<"Badge"> | string
    type?: EnumBadgeTypeFilter<"Badge"> | $Enums.BadgeType
    sessionId?: StringNullableFilter<"Badge"> | string | null
    earnedAt?: DateTimeFilter<"Badge"> | Date | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }

  export type BadgeOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    earnedAt?: SortOrder
    player?: UserOrderByWithRelationInput
    session?: SessionOrderByWithRelationInput
  }

  export type BadgeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BadgeWhereInput | BadgeWhereInput[]
    OR?: BadgeWhereInput[]
    NOT?: BadgeWhereInput | BadgeWhereInput[]
    playerId?: StringFilter<"Badge"> | string
    type?: EnumBadgeTypeFilter<"Badge"> | $Enums.BadgeType
    sessionId?: StringNullableFilter<"Badge"> | string | null
    earnedAt?: DateTimeFilter<"Badge"> | Date | string
    player?: XOR<UserScalarRelationFilter, UserWhereInput>
    session?: XOR<SessionNullableScalarRelationFilter, SessionWhereInput> | null
  }, "id">

  export type BadgeOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    sessionId?: SortOrderInput | SortOrder
    earnedAt?: SortOrder
    _count?: BadgeCountOrderByAggregateInput
    _avg?: BadgeAvgOrderByAggregateInput
    _max?: BadgeMaxOrderByAggregateInput
    _min?: BadgeMinOrderByAggregateInput
    _sum?: BadgeSumOrderByAggregateInput
  }

  export type BadgeScalarWhereWithAggregatesInput = {
    AND?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    OR?: BadgeScalarWhereWithAggregatesInput[]
    NOT?: BadgeScalarWhereWithAggregatesInput | BadgeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Badge"> | number
    playerId?: StringWithAggregatesFilter<"Badge"> | string
    type?: EnumBadgeTypeWithAggregatesFilter<"Badge"> | $Enums.BadgeType
    sessionId?: StringNullableWithAggregatesFilter<"Badge"> | string | null
    earnedAt?: DateTimeWithAggregatesFilter<"Badge"> | Date | string
  }

  export type SessionParticipantWhereInput = {
    AND?: SessionParticipantWhereInput | SessionParticipantWhereInput[]
    OR?: SessionParticipantWhereInput[]
    NOT?: SessionParticipantWhereInput | SessionParticipantWhereInput[]
    id?: StringFilter<"SessionParticipant"> | string
    sessionId?: StringFilter<"SessionParticipant"> | string
    userId?: StringFilter<"SessionParticipant"> | string
    status?: EnumParticipantStatusFilter<"SessionParticipant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"SessionParticipant"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionParticipantOrderByWithRelationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    session?: SessionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type SessionParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionId_userId?: SessionParticipantSessionIdUserIdCompoundUniqueInput
    AND?: SessionParticipantWhereInput | SessionParticipantWhereInput[]
    OR?: SessionParticipantWhereInput[]
    NOT?: SessionParticipantWhereInput | SessionParticipantWhereInput[]
    sessionId?: StringFilter<"SessionParticipant"> | string
    userId?: StringFilter<"SessionParticipant"> | string
    status?: EnumParticipantStatusFilter<"SessionParticipant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"SessionParticipant"> | Date | string
    session?: XOR<SessionScalarRelationFilter, SessionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionId_userId">

  export type SessionParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: SessionParticipantCountOrderByAggregateInput
    _max?: SessionParticipantMaxOrderByAggregateInput
    _min?: SessionParticipantMinOrderByAggregateInput
  }

  export type SessionParticipantScalarWhereWithAggregatesInput = {
    AND?: SessionParticipantScalarWhereWithAggregatesInput | SessionParticipantScalarWhereWithAggregatesInput[]
    OR?: SessionParticipantScalarWhereWithAggregatesInput[]
    NOT?: SessionParticipantScalarWhereWithAggregatesInput | SessionParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionParticipant"> | string
    sessionId?: StringWithAggregatesFilter<"SessionParticipant"> | string
    userId?: StringWithAggregatesFilter<"SessionParticipant"> | string
    status?: EnumParticipantStatusWithAggregatesFilter<"SessionParticipant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeWithAggregatesFilter<"SessionParticipant"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerCreateNestedManyWithoutPlayerInput
    goals?: GoalCreateNestedManyWithoutPlayerInput
    badges?: BadgeCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerUncheckedCreateNestedManyWithoutPlayerInput
    goals?: GoalUncheckedCreateNestedManyWithoutPlayerInput
    badges?: BadgeUncheckedCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionUncheckedCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionUncheckedCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUpdateManyWithoutPlayerNestedInput
    goals?: GoalUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUncheckedUpdateManyWithoutPlayerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUncheckedUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUncheckedUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    maxPlayers?: number
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSessionsInput
    mvpPlayer?: UserCreateNestedOneWithoutMvpSessionsInput
    topScorerPlayer?: UserCreateNestedOneWithoutTopScorerSessionsInput
    teams?: TeamCreateNestedManyWithoutSessionInput
    rounds?: RoundCreateNestedManyWithoutSessionInput
    badges?: BadgeCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    mvpPlayerId?: string | null
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutSessionInput
    rounds?: RoundUncheckedCreateNestedManyWithoutSessionInput
    badges?: BadgeUncheckedCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSessionsNestedInput
    mvpPlayer?: UserUpdateOneWithoutMvpSessionsNestedInput
    topScorerPlayer?: UserUpdateOneWithoutTopScorerSessionsNestedInput
    teams?: TeamUpdateManyWithoutSessionNestedInput
    rounds?: RoundUpdateManyWithoutSessionNestedInput
    badges?: BadgeUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutSessionNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutSessionNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateManyInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    mvpPlayerId?: string | null
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    color: string
    totalRating?: number
    session: SessionCreateNestedOneWithoutTeamsInput
    players?: TeamPlayerCreateNestedManyWithoutTeamInput
    homeRounds?: RoundCreateNestedManyWithoutHomeTeamInput
    awayRounds?: RoundCreateNestedManyWithoutAwayTeamInput
    wonRounds?: RoundCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    sessionId: string
    name: string
    color: string
    totalRating?: number
    players?: TeamPlayerUncheckedCreateNestedManyWithoutTeamInput
    homeRounds?: RoundUncheckedCreateNestedManyWithoutHomeTeamInput
    awayRounds?: RoundUncheckedCreateNestedManyWithoutAwayTeamInput
    wonRounds?: RoundUncheckedCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutTeamsNestedInput
    players?: TeamPlayerUpdateManyWithoutTeamNestedInput
    homeRounds?: RoundUpdateManyWithoutHomeTeamNestedInput
    awayRounds?: RoundUpdateManyWithoutAwayTeamNestedInput
    wonRounds?: RoundUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    players?: TeamPlayerUncheckedUpdateManyWithoutTeamNestedInput
    homeRounds?: RoundUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayRounds?: RoundUncheckedUpdateManyWithoutAwayTeamNestedInput
    wonRounds?: RoundUncheckedUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    sessionId: string
    name: string
    color: string
    totalRating?: number
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
  }

  export type TeamPlayerCreateInput = {
    team: TeamCreateNestedOneWithoutPlayersInput
    player: UserCreateNestedOneWithoutTeamPlayersInput
  }

  export type TeamPlayerUncheckedCreateInput = {
    id?: number
    teamId: string
    playerId: string
  }

  export type TeamPlayerUpdateInput = {
    team?: TeamUpdateOneRequiredWithoutPlayersNestedInput
    player?: UserUpdateOneRequiredWithoutTeamPlayersNestedInput
  }

  export type TeamPlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamPlayerCreateManyInput = {
    id?: number
    teamId: string
    playerId: string
  }

  export type TeamPlayerUpdateManyMutationInput = {

  }

  export type TeamPlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type RoundCreateInput = {
    id?: string
    roundNumber: number
    homeScore?: number
    awayScore?: number
    isDraw?: boolean
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutRoundsInput
    homeTeam: TeamCreateNestedOneWithoutHomeRoundsInput
    awayTeam: TeamCreateNestedOneWithoutAwayRoundsInput
    winnerTeam?: TeamCreateNestedOneWithoutWonRoundsInput
    goals?: GoalCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id?: string
    sessionId: string
    roundNumber: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutRoundsNestedInput
    homeTeam?: TeamUpdateOneRequiredWithoutHomeRoundsNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayRoundsNestedInput
    winnerTeam?: TeamUpdateOneWithoutWonRoundsNestedInput
    goals?: GoalUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: string
    sessionId: string
    roundNumber: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
  }

  export type RoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateInput = {
    minute?: number | null
    round: RoundCreateNestedOneWithoutGoalsInput
    player: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateInput = {
    id?: number
    roundId: string
    playerId: string
    minute?: number | null
  }

  export type GoalUpdateInput = {
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    round?: RoundUpdateOneRequiredWithoutGoalsNestedInput
    player?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    minute?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GoalCreateManyInput = {
    id?: number
    roundId: string
    playerId: string
    minute?: number | null
  }

  export type GoalUpdateManyMutationInput = {
    minute?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GoalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    minute?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BadgeCreateInput = {
    type: $Enums.BadgeType
    earnedAt?: Date | string
    player: UserCreateNestedOneWithoutBadgesInput
    session?: SessionCreateNestedOneWithoutBadgesInput
  }

  export type BadgeUncheckedCreateInput = {
    id?: number
    playerId: string
    type: $Enums.BadgeType
    sessionId?: string | null
    earnedAt?: Date | string
  }

  export type BadgeUpdateInput = {
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutBadgesNestedInput
    session?: SessionUpdateOneWithoutBadgesNestedInput
  }

  export type BadgeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeCreateManyInput = {
    id?: number
    playerId: string
    type: $Enums.BadgeType
    sessionId?: string | null
    earnedAt?: Date | string
  }

  export type BadgeUpdateManyMutationInput = {
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionParticipantCreateInput = {
    id?: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutParticipantsInput
    user: UserCreateNestedOneWithoutSessionParticipantsInput
  }

  export type SessionParticipantUncheckedCreateInput = {
    id?: string
    sessionId: string
    userId: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type SessionParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutParticipantsNestedInput
    user?: UserUpdateOneRequiredWithoutSessionParticipantsNestedInput
  }

  export type SessionParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionParticipantCreateManyInput = {
    id?: string
    sessionId: string
    userId: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type SessionParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
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

  export type EnumPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionFilter<$PrismaModel> | $Enums.Position
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

  export type TeamPlayerListRelationFilter = {
    every?: TeamPlayerWhereInput
    some?: TeamPlayerWhereInput
    none?: TeamPlayerWhereInput
  }

  export type GoalListRelationFilter = {
    every?: GoalWhereInput
    some?: GoalWhereInput
    none?: GoalWhereInput
  }

  export type BadgeListRelationFilter = {
    every?: BadgeWhereInput
    some?: BadgeWhereInput
    none?: BadgeWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionParticipantListRelationFilter = {
    every?: SessionParticipantWhereInput
    some?: SessionParticipantWhereInput
    none?: SessionParticipantWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TeamPlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GoalOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BadgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    position?: SortOrder
    rating?: SortOrder
    avatarIndex?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rating?: SortOrder
    avatarIndex?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    position?: SortOrder
    rating?: SortOrder
    avatarIndex?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    position?: SortOrder
    rating?: SortOrder
    avatarIndex?: SortOrder
    isAdmin?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rating?: SortOrder
    avatarIndex?: SortOrder
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

  export type EnumPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionWithAggregatesFilter<$PrismaModel> | $Enums.Position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionFilter<$PrismaModel>
    _max?: NestedEnumPositionFilter<$PrismaModel>
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

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    mvpPlayerId?: SortOrder
    topScorerPlayerId?: SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    maxPlayers?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    mvpPlayerId?: SortOrder
    topScorerPlayerId?: SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    date?: SortOrder
    status?: SortOrder
    createdById?: SortOrder
    mvpPlayerId?: SortOrder
    topScorerPlayerId?: SortOrder
    maxPlayers?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    maxPlayers?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type SessionScalarRelationFilter = {
    is?: SessionWhereInput
    isNot?: SessionWhereInput
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    totalRating?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    totalRating?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    totalRating?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    name?: SortOrder
    color?: SortOrder
    totalRating?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    totalRating?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamPlayerTeamIdPlayerIdCompoundUniqueInput = {
    teamId: string
    playerId: string
  }

  export type TeamPlayerCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    playerId?: SortOrder
  }

  export type TeamPlayerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamPlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    playerId?: SortOrder
  }

  export type TeamPlayerMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    playerId?: SortOrder
  }

  export type TeamPlayerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roundNumber?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    winnerTeamId?: SortOrder
    isDraw?: SortOrder
    createdAt?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    roundNumber?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roundNumber?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    winnerTeamId?: SortOrder
    isDraw?: SortOrder
    createdAt?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    roundNumber?: SortOrder
    homeTeamId?: SortOrder
    awayTeamId?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
    winnerTeamId?: SortOrder
    isDraw?: SortOrder
    createdAt?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    roundNumber?: SortOrder
    homeScore?: SortOrder
    awayScore?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RoundScalarRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type GoalCountOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    minute?: SortOrder
  }

  export type GoalAvgOrderByAggregateInput = {
    id?: SortOrder
    minute?: SortOrder
  }

  export type GoalMaxOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    minute?: SortOrder
  }

  export type GoalMinOrderByAggregateInput = {
    id?: SortOrder
    roundId?: SortOrder
    playerId?: SortOrder
    minute?: SortOrder
  }

  export type GoalSumOrderByAggregateInput = {
    id?: SortOrder
    minute?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumBadgeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeType | EnumBadgeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeType[] | ListEnumBadgeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeType[] | ListEnumBadgeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeTypeFilter<$PrismaModel> | $Enums.BadgeType
  }

  export type SessionNullableScalarRelationFilter = {
    is?: SessionWhereInput | null
    isNot?: SessionWhereInput | null
  }

  export type BadgeCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    sessionId?: SortOrder
    earnedAt?: SortOrder
  }

  export type BadgeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BadgeMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    sessionId?: SortOrder
    earnedAt?: SortOrder
  }

  export type BadgeMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    type?: SortOrder
    sessionId?: SortOrder
    earnedAt?: SortOrder
  }

  export type BadgeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumBadgeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeType | EnumBadgeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeType[] | ListEnumBadgeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeType[] | ListEnumBadgeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeTypeWithAggregatesFilter<$PrismaModel> | $Enums.BadgeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBadgeTypeFilter<$PrismaModel>
    _max?: NestedEnumBadgeTypeFilter<$PrismaModel>
  }

  export type EnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type SessionParticipantSessionIdUserIdCompoundUniqueInput = {
    sessionId: string
    userId: string
  }

  export type SessionParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type SessionParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    sessionId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type TeamPlayerCreateNestedManyWithoutPlayerInput = {
    create?: XOR<TeamPlayerCreateWithoutPlayerInput, TeamPlayerUncheckedCreateWithoutPlayerInput> | TeamPlayerCreateWithoutPlayerInput[] | TeamPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TeamPlayerCreateOrConnectWithoutPlayerInput | TeamPlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: TeamPlayerCreateManyPlayerInputEnvelope
    connect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
  }

  export type GoalCreateNestedManyWithoutPlayerInput = {
    create?: XOR<GoalCreateWithoutPlayerInput, GoalUncheckedCreateWithoutPlayerInput> | GoalCreateWithoutPlayerInput[] | GoalUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutPlayerInput | GoalCreateOrConnectWithoutPlayerInput[]
    createMany?: GoalCreateManyPlayerInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type BadgeCreateNestedManyWithoutPlayerInput = {
    create?: XOR<BadgeCreateWithoutPlayerInput, BadgeUncheckedCreateWithoutPlayerInput> | BadgeCreateWithoutPlayerInput[] | BadgeUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutPlayerInput | BadgeCreateOrConnectWithoutPlayerInput[]
    createMany?: BadgeCreateManyPlayerInputEnvelope
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput> | SessionCreateWithoutCreatedByInput[] | SessionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreatedByInput | SessionCreateOrConnectWithoutCreatedByInput[]
    createMany?: SessionCreateManyCreatedByInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutMvpPlayerInput = {
    create?: XOR<SessionCreateWithoutMvpPlayerInput, SessionUncheckedCreateWithoutMvpPlayerInput> | SessionCreateWithoutMvpPlayerInput[] | SessionUncheckedCreateWithoutMvpPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutMvpPlayerInput | SessionCreateOrConnectWithoutMvpPlayerInput[]
    createMany?: SessionCreateManyMvpPlayerInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutTopScorerPlayerInput = {
    create?: XOR<SessionCreateWithoutTopScorerPlayerInput, SessionUncheckedCreateWithoutTopScorerPlayerInput> | SessionCreateWithoutTopScorerPlayerInput[] | SessionUncheckedCreateWithoutTopScorerPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTopScorerPlayerInput | SessionCreateOrConnectWithoutTopScorerPlayerInput[]
    createMany?: SessionCreateManyTopScorerPlayerInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionParticipantCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput> | SessionParticipantCreateWithoutUserInput[] | SessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutUserInput | SessionParticipantCreateOrConnectWithoutUserInput[]
    createMany?: SessionParticipantCreateManyUserInputEnvelope
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
  }

  export type TeamPlayerUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<TeamPlayerCreateWithoutPlayerInput, TeamPlayerUncheckedCreateWithoutPlayerInput> | TeamPlayerCreateWithoutPlayerInput[] | TeamPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TeamPlayerCreateOrConnectWithoutPlayerInput | TeamPlayerCreateOrConnectWithoutPlayerInput[]
    createMany?: TeamPlayerCreateManyPlayerInputEnvelope
    connect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<GoalCreateWithoutPlayerInput, GoalUncheckedCreateWithoutPlayerInput> | GoalCreateWithoutPlayerInput[] | GoalUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutPlayerInput | GoalCreateOrConnectWithoutPlayerInput[]
    createMany?: GoalCreateManyPlayerInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type BadgeUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<BadgeCreateWithoutPlayerInput, BadgeUncheckedCreateWithoutPlayerInput> | BadgeCreateWithoutPlayerInput[] | BadgeUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutPlayerInput | BadgeCreateOrConnectWithoutPlayerInput[]
    createMany?: BadgeCreateManyPlayerInputEnvelope
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput> | SessionCreateWithoutCreatedByInput[] | SessionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreatedByInput | SessionCreateOrConnectWithoutCreatedByInput[]
    createMany?: SessionCreateManyCreatedByInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutMvpPlayerInput = {
    create?: XOR<SessionCreateWithoutMvpPlayerInput, SessionUncheckedCreateWithoutMvpPlayerInput> | SessionCreateWithoutMvpPlayerInput[] | SessionUncheckedCreateWithoutMvpPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutMvpPlayerInput | SessionCreateOrConnectWithoutMvpPlayerInput[]
    createMany?: SessionCreateManyMvpPlayerInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutTopScorerPlayerInput = {
    create?: XOR<SessionCreateWithoutTopScorerPlayerInput, SessionUncheckedCreateWithoutTopScorerPlayerInput> | SessionCreateWithoutTopScorerPlayerInput[] | SessionUncheckedCreateWithoutTopScorerPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTopScorerPlayerInput | SessionCreateOrConnectWithoutTopScorerPlayerInput[]
    createMany?: SessionCreateManyTopScorerPlayerInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type SessionParticipantUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput> | SessionParticipantCreateWithoutUserInput[] | SessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutUserInput | SessionParticipantCreateOrConnectWithoutUserInput[]
    createMany?: SessionParticipantCreateManyUserInputEnvelope
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPositionFieldUpdateOperationsInput = {
    set?: $Enums.Position
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamPlayerUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<TeamPlayerCreateWithoutPlayerInput, TeamPlayerUncheckedCreateWithoutPlayerInput> | TeamPlayerCreateWithoutPlayerInput[] | TeamPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TeamPlayerCreateOrConnectWithoutPlayerInput | TeamPlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: TeamPlayerUpsertWithWhereUniqueWithoutPlayerInput | TeamPlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: TeamPlayerCreateManyPlayerInputEnvelope
    set?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    disconnect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    delete?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    connect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    update?: TeamPlayerUpdateWithWhereUniqueWithoutPlayerInput | TeamPlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: TeamPlayerUpdateManyWithWhereWithoutPlayerInput | TeamPlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: TeamPlayerScalarWhereInput | TeamPlayerScalarWhereInput[]
  }

  export type GoalUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<GoalCreateWithoutPlayerInput, GoalUncheckedCreateWithoutPlayerInput> | GoalCreateWithoutPlayerInput[] | GoalUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutPlayerInput | GoalCreateOrConnectWithoutPlayerInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutPlayerInput | GoalUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: GoalCreateManyPlayerInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutPlayerInput | GoalUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutPlayerInput | GoalUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type BadgeUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<BadgeCreateWithoutPlayerInput, BadgeUncheckedCreateWithoutPlayerInput> | BadgeCreateWithoutPlayerInput[] | BadgeUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutPlayerInput | BadgeCreateOrConnectWithoutPlayerInput[]
    upsert?: BadgeUpsertWithWhereUniqueWithoutPlayerInput | BadgeUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: BadgeCreateManyPlayerInputEnvelope
    set?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    disconnect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    delete?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    update?: BadgeUpdateWithWhereUniqueWithoutPlayerInput | BadgeUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: BadgeUpdateManyWithWhereWithoutPlayerInput | BadgeUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput> | SessionCreateWithoutCreatedByInput[] | SessionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreatedByInput | SessionCreateOrConnectWithoutCreatedByInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCreatedByInput | SessionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SessionCreateManyCreatedByInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCreatedByInput | SessionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCreatedByInput | SessionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutMvpPlayerNestedInput = {
    create?: XOR<SessionCreateWithoutMvpPlayerInput, SessionUncheckedCreateWithoutMvpPlayerInput> | SessionCreateWithoutMvpPlayerInput[] | SessionUncheckedCreateWithoutMvpPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutMvpPlayerInput | SessionCreateOrConnectWithoutMvpPlayerInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutMvpPlayerInput | SessionUpsertWithWhereUniqueWithoutMvpPlayerInput[]
    createMany?: SessionCreateManyMvpPlayerInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutMvpPlayerInput | SessionUpdateWithWhereUniqueWithoutMvpPlayerInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutMvpPlayerInput | SessionUpdateManyWithWhereWithoutMvpPlayerInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutTopScorerPlayerNestedInput = {
    create?: XOR<SessionCreateWithoutTopScorerPlayerInput, SessionUncheckedCreateWithoutTopScorerPlayerInput> | SessionCreateWithoutTopScorerPlayerInput[] | SessionUncheckedCreateWithoutTopScorerPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTopScorerPlayerInput | SessionCreateOrConnectWithoutTopScorerPlayerInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutTopScorerPlayerInput | SessionUpsertWithWhereUniqueWithoutTopScorerPlayerInput[]
    createMany?: SessionCreateManyTopScorerPlayerInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutTopScorerPlayerInput | SessionUpdateWithWhereUniqueWithoutTopScorerPlayerInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutTopScorerPlayerInput | SessionUpdateManyWithWhereWithoutTopScorerPlayerInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionParticipantUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput> | SessionParticipantCreateWithoutUserInput[] | SessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutUserInput | SessionParticipantCreateOrConnectWithoutUserInput[]
    upsert?: SessionParticipantUpsertWithWhereUniqueWithoutUserInput | SessionParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionParticipantCreateManyUserInputEnvelope
    set?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    disconnect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    delete?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    update?: SessionParticipantUpdateWithWhereUniqueWithoutUserInput | SessionParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionParticipantUpdateManyWithWhereWithoutUserInput | SessionParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
  }

  export type TeamPlayerUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<TeamPlayerCreateWithoutPlayerInput, TeamPlayerUncheckedCreateWithoutPlayerInput> | TeamPlayerCreateWithoutPlayerInput[] | TeamPlayerUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: TeamPlayerCreateOrConnectWithoutPlayerInput | TeamPlayerCreateOrConnectWithoutPlayerInput[]
    upsert?: TeamPlayerUpsertWithWhereUniqueWithoutPlayerInput | TeamPlayerUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: TeamPlayerCreateManyPlayerInputEnvelope
    set?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    disconnect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    delete?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    connect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    update?: TeamPlayerUpdateWithWhereUniqueWithoutPlayerInput | TeamPlayerUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: TeamPlayerUpdateManyWithWhereWithoutPlayerInput | TeamPlayerUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: TeamPlayerScalarWhereInput | TeamPlayerScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<GoalCreateWithoutPlayerInput, GoalUncheckedCreateWithoutPlayerInput> | GoalCreateWithoutPlayerInput[] | GoalUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutPlayerInput | GoalCreateOrConnectWithoutPlayerInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutPlayerInput | GoalUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: GoalCreateManyPlayerInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutPlayerInput | GoalUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutPlayerInput | GoalUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type BadgeUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<BadgeCreateWithoutPlayerInput, BadgeUncheckedCreateWithoutPlayerInput> | BadgeCreateWithoutPlayerInput[] | BadgeUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutPlayerInput | BadgeCreateOrConnectWithoutPlayerInput[]
    upsert?: BadgeUpsertWithWhereUniqueWithoutPlayerInput | BadgeUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: BadgeCreateManyPlayerInputEnvelope
    set?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    disconnect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    delete?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    update?: BadgeUpdateWithWhereUniqueWithoutPlayerInput | BadgeUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: BadgeUpdateManyWithWhereWithoutPlayerInput | BadgeUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput> | SessionCreateWithoutCreatedByInput[] | SessionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutCreatedByInput | SessionCreateOrConnectWithoutCreatedByInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutCreatedByInput | SessionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SessionCreateManyCreatedByInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutCreatedByInput | SessionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutCreatedByInput | SessionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutMvpPlayerNestedInput = {
    create?: XOR<SessionCreateWithoutMvpPlayerInput, SessionUncheckedCreateWithoutMvpPlayerInput> | SessionCreateWithoutMvpPlayerInput[] | SessionUncheckedCreateWithoutMvpPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutMvpPlayerInput | SessionCreateOrConnectWithoutMvpPlayerInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutMvpPlayerInput | SessionUpsertWithWhereUniqueWithoutMvpPlayerInput[]
    createMany?: SessionCreateManyMvpPlayerInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutMvpPlayerInput | SessionUpdateWithWhereUniqueWithoutMvpPlayerInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutMvpPlayerInput | SessionUpdateManyWithWhereWithoutMvpPlayerInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutTopScorerPlayerNestedInput = {
    create?: XOR<SessionCreateWithoutTopScorerPlayerInput, SessionUncheckedCreateWithoutTopScorerPlayerInput> | SessionCreateWithoutTopScorerPlayerInput[] | SessionUncheckedCreateWithoutTopScorerPlayerInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutTopScorerPlayerInput | SessionCreateOrConnectWithoutTopScorerPlayerInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutTopScorerPlayerInput | SessionUpsertWithWhereUniqueWithoutTopScorerPlayerInput[]
    createMany?: SessionCreateManyTopScorerPlayerInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutTopScorerPlayerInput | SessionUpdateWithWhereUniqueWithoutTopScorerPlayerInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutTopScorerPlayerInput | SessionUpdateManyWithWhereWithoutTopScorerPlayerInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type SessionParticipantUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput> | SessionParticipantCreateWithoutUserInput[] | SessionParticipantUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutUserInput | SessionParticipantCreateOrConnectWithoutUserInput[]
    upsert?: SessionParticipantUpsertWithWhereUniqueWithoutUserInput | SessionParticipantUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionParticipantCreateManyUserInputEnvelope
    set?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    disconnect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    delete?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    update?: SessionParticipantUpdateWithWhereUniqueWithoutUserInput | SessionParticipantUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionParticipantUpdateManyWithWhereWithoutUserInput | SessionParticipantUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedSessionsInput = {
    create?: XOR<UserCreateWithoutCreatedSessionsInput, UserUncheckedCreateWithoutCreatedSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMvpSessionsInput = {
    create?: XOR<UserCreateWithoutMvpSessionsInput, UserUncheckedCreateWithoutMvpSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMvpSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTopScorerSessionsInput = {
    create?: XOR<UserCreateWithoutTopScorerSessionsInput, UserUncheckedCreateWithoutTopScorerSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopScorerSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedManyWithoutSessionInput = {
    create?: XOR<TeamCreateWithoutSessionInput, TeamUncheckedCreateWithoutSessionInput> | TeamCreateWithoutSessionInput[] | TeamUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutSessionInput | TeamCreateOrConnectWithoutSessionInput[]
    createMany?: TeamCreateManySessionInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type RoundCreateNestedManyWithoutSessionInput = {
    create?: XOR<RoundCreateWithoutSessionInput, RoundUncheckedCreateWithoutSessionInput> | RoundCreateWithoutSessionInput[] | RoundUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutSessionInput | RoundCreateOrConnectWithoutSessionInput[]
    createMany?: RoundCreateManySessionInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type BadgeCreateNestedManyWithoutSessionInput = {
    create?: XOR<BadgeCreateWithoutSessionInput, BadgeUncheckedCreateWithoutSessionInput> | BadgeCreateWithoutSessionInput[] | BadgeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutSessionInput | BadgeCreateOrConnectWithoutSessionInput[]
    createMany?: BadgeCreateManySessionInputEnvelope
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
  }

  export type SessionParticipantCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput> | SessionParticipantCreateWithoutSessionInput[] | SessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutSessionInput | SessionParticipantCreateOrConnectWithoutSessionInput[]
    createMany?: SessionParticipantCreateManySessionInputEnvelope
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<TeamCreateWithoutSessionInput, TeamUncheckedCreateWithoutSessionInput> | TeamCreateWithoutSessionInput[] | TeamUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutSessionInput | TeamCreateOrConnectWithoutSessionInput[]
    createMany?: TeamCreateManySessionInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<RoundCreateWithoutSessionInput, RoundUncheckedCreateWithoutSessionInput> | RoundCreateWithoutSessionInput[] | RoundUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutSessionInput | RoundCreateOrConnectWithoutSessionInput[]
    createMany?: RoundCreateManySessionInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type BadgeUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<BadgeCreateWithoutSessionInput, BadgeUncheckedCreateWithoutSessionInput> | BadgeCreateWithoutSessionInput[] | BadgeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutSessionInput | BadgeCreateOrConnectWithoutSessionInput[]
    createMany?: BadgeCreateManySessionInputEnvelope
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
  }

  export type SessionParticipantUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput> | SessionParticipantCreateWithoutSessionInput[] | SessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutSessionInput | SessionParticipantCreateOrConnectWithoutSessionInput[]
    createMany?: SessionParticipantCreateManySessionInputEnvelope
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type UserUpdateOneRequiredWithoutCreatedSessionsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSessionsInput, UserUncheckedCreateWithoutCreatedSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSessionsInput
    upsert?: UserUpsertWithoutCreatedSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSessionsInput, UserUpdateWithoutCreatedSessionsInput>, UserUncheckedUpdateWithoutCreatedSessionsInput>
  }

  export type UserUpdateOneWithoutMvpSessionsNestedInput = {
    create?: XOR<UserCreateWithoutMvpSessionsInput, UserUncheckedCreateWithoutMvpSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMvpSessionsInput
    upsert?: UserUpsertWithoutMvpSessionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMvpSessionsInput, UserUpdateWithoutMvpSessionsInput>, UserUncheckedUpdateWithoutMvpSessionsInput>
  }

  export type UserUpdateOneWithoutTopScorerSessionsNestedInput = {
    create?: XOR<UserCreateWithoutTopScorerSessionsInput, UserUncheckedCreateWithoutTopScorerSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTopScorerSessionsInput
    upsert?: UserUpsertWithoutTopScorerSessionsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTopScorerSessionsInput, UserUpdateWithoutTopScorerSessionsInput>, UserUncheckedUpdateWithoutTopScorerSessionsInput>
  }

  export type TeamUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TeamCreateWithoutSessionInput, TeamUncheckedCreateWithoutSessionInput> | TeamCreateWithoutSessionInput[] | TeamUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutSessionInput | TeamCreateOrConnectWithoutSessionInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutSessionInput | TeamUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TeamCreateManySessionInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutSessionInput | TeamUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutSessionInput | TeamUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type RoundUpdateManyWithoutSessionNestedInput = {
    create?: XOR<RoundCreateWithoutSessionInput, RoundUncheckedCreateWithoutSessionInput> | RoundCreateWithoutSessionInput[] | RoundUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutSessionInput | RoundCreateOrConnectWithoutSessionInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutSessionInput | RoundUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: RoundCreateManySessionInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutSessionInput | RoundUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutSessionInput | RoundUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type BadgeUpdateManyWithoutSessionNestedInput = {
    create?: XOR<BadgeCreateWithoutSessionInput, BadgeUncheckedCreateWithoutSessionInput> | BadgeCreateWithoutSessionInput[] | BadgeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutSessionInput | BadgeCreateOrConnectWithoutSessionInput[]
    upsert?: BadgeUpsertWithWhereUniqueWithoutSessionInput | BadgeUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: BadgeCreateManySessionInputEnvelope
    set?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    disconnect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    delete?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    update?: BadgeUpdateWithWhereUniqueWithoutSessionInput | BadgeUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: BadgeUpdateManyWithWhereWithoutSessionInput | BadgeUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
  }

  export type SessionParticipantUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput> | SessionParticipantCreateWithoutSessionInput[] | SessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutSessionInput | SessionParticipantCreateOrConnectWithoutSessionInput[]
    upsert?: SessionParticipantUpsertWithWhereUniqueWithoutSessionInput | SessionParticipantUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionParticipantCreateManySessionInputEnvelope
    set?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    disconnect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    delete?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    update?: SessionParticipantUpdateWithWhereUniqueWithoutSessionInput | SessionParticipantUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionParticipantUpdateManyWithWhereWithoutSessionInput | SessionParticipantUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<TeamCreateWithoutSessionInput, TeamUncheckedCreateWithoutSessionInput> | TeamCreateWithoutSessionInput[] | TeamUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutSessionInput | TeamCreateOrConnectWithoutSessionInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutSessionInput | TeamUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: TeamCreateManySessionInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutSessionInput | TeamUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutSessionInput | TeamUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<RoundCreateWithoutSessionInput, RoundUncheckedCreateWithoutSessionInput> | RoundCreateWithoutSessionInput[] | RoundUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutSessionInput | RoundCreateOrConnectWithoutSessionInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutSessionInput | RoundUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: RoundCreateManySessionInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutSessionInput | RoundUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutSessionInput | RoundUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type BadgeUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<BadgeCreateWithoutSessionInput, BadgeUncheckedCreateWithoutSessionInput> | BadgeCreateWithoutSessionInput[] | BadgeUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: BadgeCreateOrConnectWithoutSessionInput | BadgeCreateOrConnectWithoutSessionInput[]
    upsert?: BadgeUpsertWithWhereUniqueWithoutSessionInput | BadgeUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: BadgeCreateManySessionInputEnvelope
    set?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    disconnect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    delete?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    connect?: BadgeWhereUniqueInput | BadgeWhereUniqueInput[]
    update?: BadgeUpdateWithWhereUniqueWithoutSessionInput | BadgeUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: BadgeUpdateManyWithWhereWithoutSessionInput | BadgeUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
  }

  export type SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput> | SessionParticipantCreateWithoutSessionInput[] | SessionParticipantUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: SessionParticipantCreateOrConnectWithoutSessionInput | SessionParticipantCreateOrConnectWithoutSessionInput[]
    upsert?: SessionParticipantUpsertWithWhereUniqueWithoutSessionInput | SessionParticipantUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: SessionParticipantCreateManySessionInputEnvelope
    set?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    disconnect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    delete?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    connect?: SessionParticipantWhereUniqueInput | SessionParticipantWhereUniqueInput[]
    update?: SessionParticipantUpdateWithWhereUniqueWithoutSessionInput | SessionParticipantUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: SessionParticipantUpdateManyWithWhereWithoutSessionInput | SessionParticipantUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
  }

  export type SessionCreateNestedOneWithoutTeamsInput = {
    create?: XOR<SessionCreateWithoutTeamsInput, SessionUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTeamsInput
    connect?: SessionWhereUniqueInput
  }

  export type TeamPlayerCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamPlayerCreateWithoutTeamInput, TeamPlayerUncheckedCreateWithoutTeamInput> | TeamPlayerCreateWithoutTeamInput[] | TeamPlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamPlayerCreateOrConnectWithoutTeamInput | TeamPlayerCreateOrConnectWithoutTeamInput[]
    createMany?: TeamPlayerCreateManyTeamInputEnvelope
    connect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
  }

  export type RoundCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<RoundCreateWithoutHomeTeamInput, RoundUncheckedCreateWithoutHomeTeamInput> | RoundCreateWithoutHomeTeamInput[] | RoundUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutHomeTeamInput | RoundCreateOrConnectWithoutHomeTeamInput[]
    createMany?: RoundCreateManyHomeTeamInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type RoundCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<RoundCreateWithoutAwayTeamInput, RoundUncheckedCreateWithoutAwayTeamInput> | RoundCreateWithoutAwayTeamInput[] | RoundUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutAwayTeamInput | RoundCreateOrConnectWithoutAwayTeamInput[]
    createMany?: RoundCreateManyAwayTeamInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type RoundCreateNestedManyWithoutWinnerTeamInput = {
    create?: XOR<RoundCreateWithoutWinnerTeamInput, RoundUncheckedCreateWithoutWinnerTeamInput> | RoundCreateWithoutWinnerTeamInput[] | RoundUncheckedCreateWithoutWinnerTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutWinnerTeamInput | RoundCreateOrConnectWithoutWinnerTeamInput[]
    createMany?: RoundCreateManyWinnerTeamInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type TeamPlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamPlayerCreateWithoutTeamInput, TeamPlayerUncheckedCreateWithoutTeamInput> | TeamPlayerCreateWithoutTeamInput[] | TeamPlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamPlayerCreateOrConnectWithoutTeamInput | TeamPlayerCreateOrConnectWithoutTeamInput[]
    createMany?: TeamPlayerCreateManyTeamInputEnvelope
    connect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutHomeTeamInput = {
    create?: XOR<RoundCreateWithoutHomeTeamInput, RoundUncheckedCreateWithoutHomeTeamInput> | RoundCreateWithoutHomeTeamInput[] | RoundUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutHomeTeamInput | RoundCreateOrConnectWithoutHomeTeamInput[]
    createMany?: RoundCreateManyHomeTeamInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutAwayTeamInput = {
    create?: XOR<RoundCreateWithoutAwayTeamInput, RoundUncheckedCreateWithoutAwayTeamInput> | RoundCreateWithoutAwayTeamInput[] | RoundUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutAwayTeamInput | RoundCreateOrConnectWithoutAwayTeamInput[]
    createMany?: RoundCreateManyAwayTeamInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutWinnerTeamInput = {
    create?: XOR<RoundCreateWithoutWinnerTeamInput, RoundUncheckedCreateWithoutWinnerTeamInput> | RoundCreateWithoutWinnerTeamInput[] | RoundUncheckedCreateWithoutWinnerTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutWinnerTeamInput | RoundCreateOrConnectWithoutWinnerTeamInput[]
    createMany?: RoundCreateManyWinnerTeamInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type SessionUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<SessionCreateWithoutTeamsInput, SessionUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutTeamsInput
    upsert?: SessionUpsertWithoutTeamsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutTeamsInput, SessionUpdateWithoutTeamsInput>, SessionUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamPlayerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamPlayerCreateWithoutTeamInput, TeamPlayerUncheckedCreateWithoutTeamInput> | TeamPlayerCreateWithoutTeamInput[] | TeamPlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamPlayerCreateOrConnectWithoutTeamInput | TeamPlayerCreateOrConnectWithoutTeamInput[]
    upsert?: TeamPlayerUpsertWithWhereUniqueWithoutTeamInput | TeamPlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamPlayerCreateManyTeamInputEnvelope
    set?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    disconnect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    delete?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    connect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    update?: TeamPlayerUpdateWithWhereUniqueWithoutTeamInput | TeamPlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamPlayerUpdateManyWithWhereWithoutTeamInput | TeamPlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamPlayerScalarWhereInput | TeamPlayerScalarWhereInput[]
  }

  export type RoundUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<RoundCreateWithoutHomeTeamInput, RoundUncheckedCreateWithoutHomeTeamInput> | RoundCreateWithoutHomeTeamInput[] | RoundUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutHomeTeamInput | RoundCreateOrConnectWithoutHomeTeamInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutHomeTeamInput | RoundUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: RoundCreateManyHomeTeamInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutHomeTeamInput | RoundUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutHomeTeamInput | RoundUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type RoundUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<RoundCreateWithoutAwayTeamInput, RoundUncheckedCreateWithoutAwayTeamInput> | RoundCreateWithoutAwayTeamInput[] | RoundUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutAwayTeamInput | RoundCreateOrConnectWithoutAwayTeamInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutAwayTeamInput | RoundUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: RoundCreateManyAwayTeamInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutAwayTeamInput | RoundUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutAwayTeamInput | RoundUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type RoundUpdateManyWithoutWinnerTeamNestedInput = {
    create?: XOR<RoundCreateWithoutWinnerTeamInput, RoundUncheckedCreateWithoutWinnerTeamInput> | RoundCreateWithoutWinnerTeamInput[] | RoundUncheckedCreateWithoutWinnerTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutWinnerTeamInput | RoundCreateOrConnectWithoutWinnerTeamInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutWinnerTeamInput | RoundUpsertWithWhereUniqueWithoutWinnerTeamInput[]
    createMany?: RoundCreateManyWinnerTeamInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutWinnerTeamInput | RoundUpdateWithWhereUniqueWithoutWinnerTeamInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutWinnerTeamInput | RoundUpdateManyWithWhereWithoutWinnerTeamInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type TeamPlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamPlayerCreateWithoutTeamInput, TeamPlayerUncheckedCreateWithoutTeamInput> | TeamPlayerCreateWithoutTeamInput[] | TeamPlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamPlayerCreateOrConnectWithoutTeamInput | TeamPlayerCreateOrConnectWithoutTeamInput[]
    upsert?: TeamPlayerUpsertWithWhereUniqueWithoutTeamInput | TeamPlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamPlayerCreateManyTeamInputEnvelope
    set?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    disconnect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    delete?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    connect?: TeamPlayerWhereUniqueInput | TeamPlayerWhereUniqueInput[]
    update?: TeamPlayerUpdateWithWhereUniqueWithoutTeamInput | TeamPlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamPlayerUpdateManyWithWhereWithoutTeamInput | TeamPlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamPlayerScalarWhereInput | TeamPlayerScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutHomeTeamNestedInput = {
    create?: XOR<RoundCreateWithoutHomeTeamInput, RoundUncheckedCreateWithoutHomeTeamInput> | RoundCreateWithoutHomeTeamInput[] | RoundUncheckedCreateWithoutHomeTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutHomeTeamInput | RoundCreateOrConnectWithoutHomeTeamInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutHomeTeamInput | RoundUpsertWithWhereUniqueWithoutHomeTeamInput[]
    createMany?: RoundCreateManyHomeTeamInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutHomeTeamInput | RoundUpdateWithWhereUniqueWithoutHomeTeamInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutHomeTeamInput | RoundUpdateManyWithWhereWithoutHomeTeamInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutAwayTeamNestedInput = {
    create?: XOR<RoundCreateWithoutAwayTeamInput, RoundUncheckedCreateWithoutAwayTeamInput> | RoundCreateWithoutAwayTeamInput[] | RoundUncheckedCreateWithoutAwayTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutAwayTeamInput | RoundCreateOrConnectWithoutAwayTeamInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutAwayTeamInput | RoundUpsertWithWhereUniqueWithoutAwayTeamInput[]
    createMany?: RoundCreateManyAwayTeamInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutAwayTeamInput | RoundUpdateWithWhereUniqueWithoutAwayTeamInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutAwayTeamInput | RoundUpdateManyWithWhereWithoutAwayTeamInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutWinnerTeamNestedInput = {
    create?: XOR<RoundCreateWithoutWinnerTeamInput, RoundUncheckedCreateWithoutWinnerTeamInput> | RoundCreateWithoutWinnerTeamInput[] | RoundUncheckedCreateWithoutWinnerTeamInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutWinnerTeamInput | RoundCreateOrConnectWithoutWinnerTeamInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutWinnerTeamInput | RoundUpsertWithWhereUniqueWithoutWinnerTeamInput[]
    createMany?: RoundCreateManyWinnerTeamInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutWinnerTeamInput | RoundUpdateWithWhereUniqueWithoutWinnerTeamInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutWinnerTeamInput | RoundUpdateManyWithWhereWithoutWinnerTeamInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    connect?: TeamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTeamPlayersInput = {
    create?: XOR<UserCreateWithoutTeamPlayersInput, UserUncheckedCreateWithoutTeamPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamPlayersInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutPlayersNestedInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    upsert?: TeamUpsertWithoutPlayersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayersInput, TeamUpdateWithoutPlayersInput>, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type UserUpdateOneRequiredWithoutTeamPlayersNestedInput = {
    create?: XOR<UserCreateWithoutTeamPlayersInput, UserUncheckedCreateWithoutTeamPlayersInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamPlayersInput
    upsert?: UserUpsertWithoutTeamPlayersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamPlayersInput, UserUpdateWithoutTeamPlayersInput>, UserUncheckedUpdateWithoutTeamPlayersInput>
  }

  export type SessionCreateNestedOneWithoutRoundsInput = {
    create?: XOR<SessionCreateWithoutRoundsInput, SessionUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutRoundsInput
    connect?: SessionWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutHomeRoundsInput = {
    create?: XOR<TeamCreateWithoutHomeRoundsInput, TeamUncheckedCreateWithoutHomeRoundsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeRoundsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutAwayRoundsInput = {
    create?: XOR<TeamCreateWithoutAwayRoundsInput, TeamUncheckedCreateWithoutAwayRoundsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayRoundsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutWonRoundsInput = {
    create?: XOR<TeamCreateWithoutWonRoundsInput, TeamUncheckedCreateWithoutWonRoundsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutWonRoundsInput
    connect?: TeamWhereUniqueInput
  }

  export type GoalCreateNestedManyWithoutRoundInput = {
    create?: XOR<GoalCreateWithoutRoundInput, GoalUncheckedCreateWithoutRoundInput> | GoalCreateWithoutRoundInput[] | GoalUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutRoundInput | GoalCreateOrConnectWithoutRoundInput[]
    createMany?: GoalCreateManyRoundInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type GoalUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<GoalCreateWithoutRoundInput, GoalUncheckedCreateWithoutRoundInput> | GoalCreateWithoutRoundInput[] | GoalUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutRoundInput | GoalCreateOrConnectWithoutRoundInput[]
    createMany?: GoalCreateManyRoundInputEnvelope
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
  }

  export type SessionUpdateOneRequiredWithoutRoundsNestedInput = {
    create?: XOR<SessionCreateWithoutRoundsInput, SessionUncheckedCreateWithoutRoundsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutRoundsInput
    upsert?: SessionUpsertWithoutRoundsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutRoundsInput, SessionUpdateWithoutRoundsInput>, SessionUncheckedUpdateWithoutRoundsInput>
  }

  export type TeamUpdateOneRequiredWithoutHomeRoundsNestedInput = {
    create?: XOR<TeamCreateWithoutHomeRoundsInput, TeamUncheckedCreateWithoutHomeRoundsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutHomeRoundsInput
    upsert?: TeamUpsertWithoutHomeRoundsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutHomeRoundsInput, TeamUpdateWithoutHomeRoundsInput>, TeamUncheckedUpdateWithoutHomeRoundsInput>
  }

  export type TeamUpdateOneRequiredWithoutAwayRoundsNestedInput = {
    create?: XOR<TeamCreateWithoutAwayRoundsInput, TeamUncheckedCreateWithoutAwayRoundsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutAwayRoundsInput
    upsert?: TeamUpsertWithoutAwayRoundsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutAwayRoundsInput, TeamUpdateWithoutAwayRoundsInput>, TeamUncheckedUpdateWithoutAwayRoundsInput>
  }

  export type TeamUpdateOneWithoutWonRoundsNestedInput = {
    create?: XOR<TeamCreateWithoutWonRoundsInput, TeamUncheckedCreateWithoutWonRoundsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutWonRoundsInput
    upsert?: TeamUpsertWithoutWonRoundsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutWonRoundsInput, TeamUpdateWithoutWonRoundsInput>, TeamUncheckedUpdateWithoutWonRoundsInput>
  }

  export type GoalUpdateManyWithoutRoundNestedInput = {
    create?: XOR<GoalCreateWithoutRoundInput, GoalUncheckedCreateWithoutRoundInput> | GoalCreateWithoutRoundInput[] | GoalUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutRoundInput | GoalCreateOrConnectWithoutRoundInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutRoundInput | GoalUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: GoalCreateManyRoundInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutRoundInput | GoalUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutRoundInput | GoalUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type GoalUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<GoalCreateWithoutRoundInput, GoalUncheckedCreateWithoutRoundInput> | GoalCreateWithoutRoundInput[] | GoalUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: GoalCreateOrConnectWithoutRoundInput | GoalCreateOrConnectWithoutRoundInput[]
    upsert?: GoalUpsertWithWhereUniqueWithoutRoundInput | GoalUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: GoalCreateManyRoundInputEnvelope
    set?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    disconnect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    delete?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    connect?: GoalWhereUniqueInput | GoalWhereUniqueInput[]
    update?: GoalUpdateWithWhereUniqueWithoutRoundInput | GoalUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: GoalUpdateManyWithWhereWithoutRoundInput | GoalUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: GoalScalarWhereInput | GoalScalarWhereInput[]
  }

  export type RoundCreateNestedOneWithoutGoalsInput = {
    create?: XOR<RoundCreateWithoutGoalsInput, RoundUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: RoundCreateOrConnectWithoutGoalsInput
    connect?: RoundWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGoalsInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RoundUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<RoundCreateWithoutGoalsInput, RoundUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: RoundCreateOrConnectWithoutGoalsInput
    upsert?: RoundUpsertWithoutGoalsInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutGoalsInput, RoundUpdateWithoutGoalsInput>, RoundUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateOneRequiredWithoutGoalsNestedInput = {
    create?: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGoalsInput
    upsert?: UserUpsertWithoutGoalsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGoalsInput, UserUpdateWithoutGoalsInput>, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserCreateNestedOneWithoutBadgesInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    connect?: UserWhereUniqueInput
  }

  export type SessionCreateNestedOneWithoutBadgesInput = {
    create?: XOR<SessionCreateWithoutBadgesInput, SessionUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutBadgesInput
    connect?: SessionWhereUniqueInput
  }

  export type EnumBadgeTypeFieldUpdateOperationsInput = {
    set?: $Enums.BadgeType
  }

  export type UserUpdateOneRequiredWithoutBadgesNestedInput = {
    create?: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: UserCreateOrConnectWithoutBadgesInput
    upsert?: UserUpsertWithoutBadgesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBadgesInput, UserUpdateWithoutBadgesInput>, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type SessionUpdateOneWithoutBadgesNestedInput = {
    create?: XOR<SessionCreateWithoutBadgesInput, SessionUncheckedCreateWithoutBadgesInput>
    connectOrCreate?: SessionCreateOrConnectWithoutBadgesInput
    upsert?: SessionUpsertWithoutBadgesInput
    disconnect?: SessionWhereInput | boolean
    delete?: SessionWhereInput | boolean
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutBadgesInput, SessionUpdateWithoutBadgesInput>, SessionUncheckedUpdateWithoutBadgesInput>
  }

  export type SessionCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<SessionCreateWithoutParticipantsInput, SessionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutParticipantsInput
    connect?: SessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSessionParticipantsInput = {
    create?: XOR<UserCreateWithoutSessionParticipantsInput, UserUncheckedCreateWithoutSessionParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionParticipantsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumParticipantStatusFieldUpdateOperationsInput = {
    set?: $Enums.ParticipantStatus
  }

  export type SessionUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<SessionCreateWithoutParticipantsInput, SessionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: SessionCreateOrConnectWithoutParticipantsInput
    upsert?: SessionUpsertWithoutParticipantsInput
    connect?: SessionWhereUniqueInput
    update?: XOR<XOR<SessionUpdateToOneWithWhereWithoutParticipantsInput, SessionUpdateWithoutParticipantsInput>, SessionUncheckedUpdateWithoutParticipantsInput>
  }

  export type UserUpdateOneRequiredWithoutSessionParticipantsNestedInput = {
    create?: XOR<UserCreateWithoutSessionParticipantsInput, UserUncheckedCreateWithoutSessionParticipantsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionParticipantsInput
    upsert?: UserUpsertWithoutSessionParticipantsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionParticipantsInput, UserUpdateWithoutSessionParticipantsInput>, UserUncheckedUpdateWithoutSessionParticipantsInput>
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

  export type NestedEnumPositionFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionFilter<$PrismaModel> | $Enums.Position
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

  export type NestedEnumPositionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Position | EnumPositionFieldRefInput<$PrismaModel>
    in?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Position[] | ListEnumPositionFieldRefInput<$PrismaModel>
    not?: NestedEnumPositionWithAggregatesFilter<$PrismaModel> | $Enums.Position
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPositionFilter<$PrismaModel>
    _max?: NestedEnumPositionFilter<$PrismaModel>
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

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type NestedEnumBadgeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeType | EnumBadgeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeType[] | ListEnumBadgeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeType[] | ListEnumBadgeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeTypeFilter<$PrismaModel> | $Enums.BadgeType
  }

  export type NestedEnumBadgeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BadgeType | EnumBadgeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.BadgeType[] | ListEnumBadgeTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.BadgeType[] | ListEnumBadgeTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumBadgeTypeWithAggregatesFilter<$PrismaModel> | $Enums.BadgeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBadgeTypeFilter<$PrismaModel>
    _max?: NestedEnumBadgeTypeFilter<$PrismaModel>
  }

  export type NestedEnumParticipantStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusFilter<$PrismaModel> | $Enums.ParticipantStatus
  }

  export type NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ParticipantStatus | EnumParticipantStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ParticipantStatus[] | ListEnumParticipantStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumParticipantStatusWithAggregatesFilter<$PrismaModel> | $Enums.ParticipantStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumParticipantStatusFilter<$PrismaModel>
    _max?: NestedEnumParticipantStatusFilter<$PrismaModel>
  }

  export type TeamPlayerCreateWithoutPlayerInput = {
    team: TeamCreateNestedOneWithoutPlayersInput
  }

  export type TeamPlayerUncheckedCreateWithoutPlayerInput = {
    id?: number
    teamId: string
  }

  export type TeamPlayerCreateOrConnectWithoutPlayerInput = {
    where: TeamPlayerWhereUniqueInput
    create: XOR<TeamPlayerCreateWithoutPlayerInput, TeamPlayerUncheckedCreateWithoutPlayerInput>
  }

  export type TeamPlayerCreateManyPlayerInputEnvelope = {
    data: TeamPlayerCreateManyPlayerInput | TeamPlayerCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GoalCreateWithoutPlayerInput = {
    minute?: number | null
    round: RoundCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutPlayerInput = {
    id?: number
    roundId: string
    minute?: number | null
  }

  export type GoalCreateOrConnectWithoutPlayerInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutPlayerInput, GoalUncheckedCreateWithoutPlayerInput>
  }

  export type GoalCreateManyPlayerInputEnvelope = {
    data: GoalCreateManyPlayerInput | GoalCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type BadgeCreateWithoutPlayerInput = {
    type: $Enums.BadgeType
    earnedAt?: Date | string
    session?: SessionCreateNestedOneWithoutBadgesInput
  }

  export type BadgeUncheckedCreateWithoutPlayerInput = {
    id?: number
    type: $Enums.BadgeType
    sessionId?: string | null
    earnedAt?: Date | string
  }

  export type BadgeCreateOrConnectWithoutPlayerInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutPlayerInput, BadgeUncheckedCreateWithoutPlayerInput>
  }

  export type BadgeCreateManyPlayerInputEnvelope = {
    data: BadgeCreateManyPlayerInput | BadgeCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutCreatedByInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    maxPlayers?: number
    createdAt?: Date | string
    mvpPlayer?: UserCreateNestedOneWithoutMvpSessionsInput
    topScorerPlayer?: UserCreateNestedOneWithoutTopScorerSessionsInput
    teams?: TeamCreateNestedManyWithoutSessionInput
    rounds?: RoundCreateNestedManyWithoutSessionInput
    badges?: BadgeCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutCreatedByInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    mvpPlayerId?: string | null
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutSessionInput
    rounds?: RoundUncheckedCreateNestedManyWithoutSessionInput
    badges?: BadgeUncheckedCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutCreatedByInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput>
  }

  export type SessionCreateManyCreatedByInputEnvelope = {
    data: SessionCreateManyCreatedByInput | SessionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutMvpPlayerInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    maxPlayers?: number
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSessionsInput
    topScorerPlayer?: UserCreateNestedOneWithoutTopScorerSessionsInput
    teams?: TeamCreateNestedManyWithoutSessionInput
    rounds?: RoundCreateNestedManyWithoutSessionInput
    badges?: BadgeCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutMvpPlayerInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutSessionInput
    rounds?: RoundUncheckedCreateNestedManyWithoutSessionInput
    badges?: BadgeUncheckedCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutMvpPlayerInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutMvpPlayerInput, SessionUncheckedCreateWithoutMvpPlayerInput>
  }

  export type SessionCreateManyMvpPlayerInputEnvelope = {
    data: SessionCreateManyMvpPlayerInput | SessionCreateManyMvpPlayerInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutTopScorerPlayerInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    maxPlayers?: number
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSessionsInput
    mvpPlayer?: UserCreateNestedOneWithoutMvpSessionsInput
    teams?: TeamCreateNestedManyWithoutSessionInput
    rounds?: RoundCreateNestedManyWithoutSessionInput
    badges?: BadgeCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutTopScorerPlayerInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    mvpPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutSessionInput
    rounds?: RoundUncheckedCreateNestedManyWithoutSessionInput
    badges?: BadgeUncheckedCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutTopScorerPlayerInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTopScorerPlayerInput, SessionUncheckedCreateWithoutTopScorerPlayerInput>
  }

  export type SessionCreateManyTopScorerPlayerInputEnvelope = {
    data: SessionCreateManyTopScorerPlayerInput | SessionCreateManyTopScorerPlayerInput[]
    skipDuplicates?: boolean
  }

  export type SessionParticipantCreateWithoutUserInput = {
    id?: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutParticipantsInput
  }

  export type SessionParticipantUncheckedCreateWithoutUserInput = {
    id?: string
    sessionId: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type SessionParticipantCreateOrConnectWithoutUserInput = {
    where: SessionParticipantWhereUniqueInput
    create: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput>
  }

  export type SessionParticipantCreateManyUserInputEnvelope = {
    data: SessionParticipantCreateManyUserInput | SessionParticipantCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeamPlayerUpsertWithWhereUniqueWithoutPlayerInput = {
    where: TeamPlayerWhereUniqueInput
    update: XOR<TeamPlayerUpdateWithoutPlayerInput, TeamPlayerUncheckedUpdateWithoutPlayerInput>
    create: XOR<TeamPlayerCreateWithoutPlayerInput, TeamPlayerUncheckedCreateWithoutPlayerInput>
  }

  export type TeamPlayerUpdateWithWhereUniqueWithoutPlayerInput = {
    where: TeamPlayerWhereUniqueInput
    data: XOR<TeamPlayerUpdateWithoutPlayerInput, TeamPlayerUncheckedUpdateWithoutPlayerInput>
  }

  export type TeamPlayerUpdateManyWithWhereWithoutPlayerInput = {
    where: TeamPlayerScalarWhereInput
    data: XOR<TeamPlayerUpdateManyMutationInput, TeamPlayerUncheckedUpdateManyWithoutPlayerInput>
  }

  export type TeamPlayerScalarWhereInput = {
    AND?: TeamPlayerScalarWhereInput | TeamPlayerScalarWhereInput[]
    OR?: TeamPlayerScalarWhereInput[]
    NOT?: TeamPlayerScalarWhereInput | TeamPlayerScalarWhereInput[]
    id?: IntFilter<"TeamPlayer"> | number
    teamId?: StringFilter<"TeamPlayer"> | string
    playerId?: StringFilter<"TeamPlayer"> | string
  }

  export type GoalUpsertWithWhereUniqueWithoutPlayerInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutPlayerInput, GoalUncheckedUpdateWithoutPlayerInput>
    create: XOR<GoalCreateWithoutPlayerInput, GoalUncheckedCreateWithoutPlayerInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutPlayerInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutPlayerInput, GoalUncheckedUpdateWithoutPlayerInput>
  }

  export type GoalUpdateManyWithWhereWithoutPlayerInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutPlayerInput>
  }

  export type GoalScalarWhereInput = {
    AND?: GoalScalarWhereInput | GoalScalarWhereInput[]
    OR?: GoalScalarWhereInput[]
    NOT?: GoalScalarWhereInput | GoalScalarWhereInput[]
    id?: IntFilter<"Goal"> | number
    roundId?: StringFilter<"Goal"> | string
    playerId?: StringFilter<"Goal"> | string
    minute?: IntNullableFilter<"Goal"> | number | null
  }

  export type BadgeUpsertWithWhereUniqueWithoutPlayerInput = {
    where: BadgeWhereUniqueInput
    update: XOR<BadgeUpdateWithoutPlayerInput, BadgeUncheckedUpdateWithoutPlayerInput>
    create: XOR<BadgeCreateWithoutPlayerInput, BadgeUncheckedCreateWithoutPlayerInput>
  }

  export type BadgeUpdateWithWhereUniqueWithoutPlayerInput = {
    where: BadgeWhereUniqueInput
    data: XOR<BadgeUpdateWithoutPlayerInput, BadgeUncheckedUpdateWithoutPlayerInput>
  }

  export type BadgeUpdateManyWithWhereWithoutPlayerInput = {
    where: BadgeScalarWhereInput
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyWithoutPlayerInput>
  }

  export type BadgeScalarWhereInput = {
    AND?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
    OR?: BadgeScalarWhereInput[]
    NOT?: BadgeScalarWhereInput | BadgeScalarWhereInput[]
    id?: IntFilter<"Badge"> | number
    playerId?: StringFilter<"Badge"> | string
    type?: EnumBadgeTypeFilter<"Badge"> | $Enums.BadgeType
    sessionId?: StringNullableFilter<"Badge"> | string | null
    earnedAt?: DateTimeFilter<"Badge"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutCreatedByInput, SessionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SessionCreateWithoutCreatedByInput, SessionUncheckedCreateWithoutCreatedByInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutCreatedByInput, SessionUncheckedUpdateWithoutCreatedByInput>
  }

  export type SessionUpdateManyWithWhereWithoutCreatedByInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    title?: StringNullableFilter<"Session"> | string | null
    date?: DateTimeFilter<"Session"> | Date | string
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    createdById?: StringFilter<"Session"> | string
    mvpPlayerId?: StringNullableFilter<"Session"> | string | null
    topScorerPlayerId?: StringNullableFilter<"Session"> | string | null
    maxPlayers?: IntFilter<"Session"> | number
    createdAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutMvpPlayerInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutMvpPlayerInput, SessionUncheckedUpdateWithoutMvpPlayerInput>
    create: XOR<SessionCreateWithoutMvpPlayerInput, SessionUncheckedCreateWithoutMvpPlayerInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutMvpPlayerInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutMvpPlayerInput, SessionUncheckedUpdateWithoutMvpPlayerInput>
  }

  export type SessionUpdateManyWithWhereWithoutMvpPlayerInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutMvpPlayerInput>
  }

  export type SessionUpsertWithWhereUniqueWithoutTopScorerPlayerInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutTopScorerPlayerInput, SessionUncheckedUpdateWithoutTopScorerPlayerInput>
    create: XOR<SessionCreateWithoutTopScorerPlayerInput, SessionUncheckedCreateWithoutTopScorerPlayerInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutTopScorerPlayerInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutTopScorerPlayerInput, SessionUncheckedUpdateWithoutTopScorerPlayerInput>
  }

  export type SessionUpdateManyWithWhereWithoutTopScorerPlayerInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutTopScorerPlayerInput>
  }

  export type SessionParticipantUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionParticipantWhereUniqueInput
    update: XOR<SessionParticipantUpdateWithoutUserInput, SessionParticipantUncheckedUpdateWithoutUserInput>
    create: XOR<SessionParticipantCreateWithoutUserInput, SessionParticipantUncheckedCreateWithoutUserInput>
  }

  export type SessionParticipantUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionParticipantWhereUniqueInput
    data: XOR<SessionParticipantUpdateWithoutUserInput, SessionParticipantUncheckedUpdateWithoutUserInput>
  }

  export type SessionParticipantUpdateManyWithWhereWithoutUserInput = {
    where: SessionParticipantScalarWhereInput
    data: XOR<SessionParticipantUpdateManyMutationInput, SessionParticipantUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionParticipantScalarWhereInput = {
    AND?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
    OR?: SessionParticipantScalarWhereInput[]
    NOT?: SessionParticipantScalarWhereInput | SessionParticipantScalarWhereInput[]
    id?: StringFilter<"SessionParticipant"> | string
    sessionId?: StringFilter<"SessionParticipant"> | string
    userId?: StringFilter<"SessionParticipant"> | string
    status?: EnumParticipantStatusFilter<"SessionParticipant"> | $Enums.ParticipantStatus
    createdAt?: DateTimeFilter<"SessionParticipant"> | Date | string
  }

  export type UserCreateWithoutCreatedSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerCreateNestedManyWithoutPlayerInput
    goals?: GoalCreateNestedManyWithoutPlayerInput
    badges?: BadgeCreateNestedManyWithoutPlayerInput
    mvpSessions?: SessionCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerUncheckedCreateNestedManyWithoutPlayerInput
    goals?: GoalUncheckedCreateNestedManyWithoutPlayerInput
    badges?: BadgeUncheckedCreateNestedManyWithoutPlayerInput
    mvpSessions?: SessionUncheckedCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionUncheckedCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSessionsInput, UserUncheckedCreateWithoutCreatedSessionsInput>
  }

  export type UserCreateWithoutMvpSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerCreateNestedManyWithoutPlayerInput
    goals?: GoalCreateNestedManyWithoutPlayerInput
    badges?: BadgeCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionCreateNestedManyWithoutCreatedByInput
    topScorerSessions?: SessionCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMvpSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerUncheckedCreateNestedManyWithoutPlayerInput
    goals?: GoalUncheckedCreateNestedManyWithoutPlayerInput
    badges?: BadgeUncheckedCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
    topScorerSessions?: SessionUncheckedCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMvpSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMvpSessionsInput, UserUncheckedCreateWithoutMvpSessionsInput>
  }

  export type UserCreateWithoutTopScorerSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerCreateNestedManyWithoutPlayerInput
    goals?: GoalCreateNestedManyWithoutPlayerInput
    badges?: BadgeCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionCreateNestedManyWithoutMvpPlayerInput
    sessionParticipants?: SessionParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTopScorerSessionsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerUncheckedCreateNestedManyWithoutPlayerInput
    goals?: GoalUncheckedCreateNestedManyWithoutPlayerInput
    badges?: BadgeUncheckedCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionUncheckedCreateNestedManyWithoutMvpPlayerInput
    sessionParticipants?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTopScorerSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTopScorerSessionsInput, UserUncheckedCreateWithoutTopScorerSessionsInput>
  }

  export type TeamCreateWithoutSessionInput = {
    id?: string
    name: string
    color: string
    totalRating?: number
    players?: TeamPlayerCreateNestedManyWithoutTeamInput
    homeRounds?: RoundCreateNestedManyWithoutHomeTeamInput
    awayRounds?: RoundCreateNestedManyWithoutAwayTeamInput
    wonRounds?: RoundCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamUncheckedCreateWithoutSessionInput = {
    id?: string
    name: string
    color: string
    totalRating?: number
    players?: TeamPlayerUncheckedCreateNestedManyWithoutTeamInput
    homeRounds?: RoundUncheckedCreateNestedManyWithoutHomeTeamInput
    awayRounds?: RoundUncheckedCreateNestedManyWithoutAwayTeamInput
    wonRounds?: RoundUncheckedCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamCreateOrConnectWithoutSessionInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutSessionInput, TeamUncheckedCreateWithoutSessionInput>
  }

  export type TeamCreateManySessionInputEnvelope = {
    data: TeamCreateManySessionInput | TeamCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutSessionInput = {
    id?: string
    roundNumber: number
    homeScore?: number
    awayScore?: number
    isDraw?: boolean
    createdAt?: Date | string
    homeTeam: TeamCreateNestedOneWithoutHomeRoundsInput
    awayTeam: TeamCreateNestedOneWithoutAwayRoundsInput
    winnerTeam?: TeamCreateNestedOneWithoutWonRoundsInput
    goals?: GoalCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutSessionInput = {
    id?: string
    roundNumber: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutSessionInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutSessionInput, RoundUncheckedCreateWithoutSessionInput>
  }

  export type RoundCreateManySessionInputEnvelope = {
    data: RoundCreateManySessionInput | RoundCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type BadgeCreateWithoutSessionInput = {
    type: $Enums.BadgeType
    earnedAt?: Date | string
    player: UserCreateNestedOneWithoutBadgesInput
  }

  export type BadgeUncheckedCreateWithoutSessionInput = {
    id?: number
    playerId: string
    type: $Enums.BadgeType
    earnedAt?: Date | string
  }

  export type BadgeCreateOrConnectWithoutSessionInput = {
    where: BadgeWhereUniqueInput
    create: XOR<BadgeCreateWithoutSessionInput, BadgeUncheckedCreateWithoutSessionInput>
  }

  export type BadgeCreateManySessionInputEnvelope = {
    data: BadgeCreateManySessionInput | BadgeCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type SessionParticipantCreateWithoutSessionInput = {
    id?: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutSessionParticipantsInput
  }

  export type SessionParticipantUncheckedCreateWithoutSessionInput = {
    id?: string
    userId: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type SessionParticipantCreateOrConnectWithoutSessionInput = {
    where: SessionParticipantWhereUniqueInput
    create: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput>
  }

  export type SessionParticipantCreateManySessionInputEnvelope = {
    data: SessionParticipantCreateManySessionInput | SessionParticipantCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedSessionsInput = {
    update: XOR<UserUpdateWithoutCreatedSessionsInput, UserUncheckedUpdateWithoutCreatedSessionsInput>
    create: XOR<UserCreateWithoutCreatedSessionsInput, UserUncheckedCreateWithoutCreatedSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSessionsInput, UserUncheckedUpdateWithoutCreatedSessionsInput>
  }

  export type UserUpdateWithoutCreatedSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUpdateManyWithoutPlayerNestedInput
    goals?: GoalUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUpdateManyWithoutPlayerNestedInput
    mvpSessions?: SessionUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUncheckedUpdateManyWithoutPlayerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutPlayerNestedInput
    mvpSessions?: SessionUncheckedUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUncheckedUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutMvpSessionsInput = {
    update: XOR<UserUpdateWithoutMvpSessionsInput, UserUncheckedUpdateWithoutMvpSessionsInput>
    create: XOR<UserCreateWithoutMvpSessionsInput, UserUncheckedCreateWithoutMvpSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMvpSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMvpSessionsInput, UserUncheckedUpdateWithoutMvpSessionsInput>
  }

  export type UserUpdateWithoutMvpSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUpdateManyWithoutPlayerNestedInput
    goals?: GoalUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUpdateManyWithoutCreatedByNestedInput
    topScorerSessions?: SessionUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMvpSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUncheckedUpdateManyWithoutPlayerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
    topScorerSessions?: SessionUncheckedUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutTopScorerSessionsInput = {
    update: XOR<UserUpdateWithoutTopScorerSessionsInput, UserUncheckedUpdateWithoutTopScorerSessionsInput>
    create: XOR<UserCreateWithoutTopScorerSessionsInput, UserUncheckedCreateWithoutTopScorerSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTopScorerSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTopScorerSessionsInput, UserUncheckedUpdateWithoutTopScorerSessionsInput>
  }

  export type UserUpdateWithoutTopScorerSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUpdateManyWithoutPlayerNestedInput
    goals?: GoalUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUpdateManyWithoutMvpPlayerNestedInput
    sessionParticipants?: SessionParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTopScorerSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUncheckedUpdateManyWithoutPlayerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUncheckedUpdateManyWithoutMvpPlayerNestedInput
    sessionParticipants?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithWhereUniqueWithoutSessionInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutSessionInput, TeamUncheckedUpdateWithoutSessionInput>
    create: XOR<TeamCreateWithoutSessionInput, TeamUncheckedCreateWithoutSessionInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutSessionInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutSessionInput, TeamUncheckedUpdateWithoutSessionInput>
  }

  export type TeamUpdateManyWithWhereWithoutSessionInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutSessionInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    sessionId?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    color?: StringFilter<"Team"> | string
    totalRating?: IntFilter<"Team"> | number
  }

  export type RoundUpsertWithWhereUniqueWithoutSessionInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutSessionInput, RoundUncheckedUpdateWithoutSessionInput>
    create: XOR<RoundCreateWithoutSessionInput, RoundUncheckedCreateWithoutSessionInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutSessionInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutSessionInput, RoundUncheckedUpdateWithoutSessionInput>
  }

  export type RoundUpdateManyWithWhereWithoutSessionInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutSessionInput>
  }

  export type RoundScalarWhereInput = {
    AND?: RoundScalarWhereInput | RoundScalarWhereInput[]
    OR?: RoundScalarWhereInput[]
    NOT?: RoundScalarWhereInput | RoundScalarWhereInput[]
    id?: StringFilter<"Round"> | string
    sessionId?: StringFilter<"Round"> | string
    roundNumber?: IntFilter<"Round"> | number
    homeTeamId?: StringFilter<"Round"> | string
    awayTeamId?: StringFilter<"Round"> | string
    homeScore?: IntFilter<"Round"> | number
    awayScore?: IntFilter<"Round"> | number
    winnerTeamId?: StringNullableFilter<"Round"> | string | null
    isDraw?: BoolFilter<"Round"> | boolean
    createdAt?: DateTimeFilter<"Round"> | Date | string
  }

  export type BadgeUpsertWithWhereUniqueWithoutSessionInput = {
    where: BadgeWhereUniqueInput
    update: XOR<BadgeUpdateWithoutSessionInput, BadgeUncheckedUpdateWithoutSessionInput>
    create: XOR<BadgeCreateWithoutSessionInput, BadgeUncheckedCreateWithoutSessionInput>
  }

  export type BadgeUpdateWithWhereUniqueWithoutSessionInput = {
    where: BadgeWhereUniqueInput
    data: XOR<BadgeUpdateWithoutSessionInput, BadgeUncheckedUpdateWithoutSessionInput>
  }

  export type BadgeUpdateManyWithWhereWithoutSessionInput = {
    where: BadgeScalarWhereInput
    data: XOR<BadgeUpdateManyMutationInput, BadgeUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionParticipantUpsertWithWhereUniqueWithoutSessionInput = {
    where: SessionParticipantWhereUniqueInput
    update: XOR<SessionParticipantUpdateWithoutSessionInput, SessionParticipantUncheckedUpdateWithoutSessionInput>
    create: XOR<SessionParticipantCreateWithoutSessionInput, SessionParticipantUncheckedCreateWithoutSessionInput>
  }

  export type SessionParticipantUpdateWithWhereUniqueWithoutSessionInput = {
    where: SessionParticipantWhereUniqueInput
    data: XOR<SessionParticipantUpdateWithoutSessionInput, SessionParticipantUncheckedUpdateWithoutSessionInput>
  }

  export type SessionParticipantUpdateManyWithWhereWithoutSessionInput = {
    where: SessionParticipantScalarWhereInput
    data: XOR<SessionParticipantUpdateManyMutationInput, SessionParticipantUncheckedUpdateManyWithoutSessionInput>
  }

  export type SessionCreateWithoutTeamsInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    maxPlayers?: number
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSessionsInput
    mvpPlayer?: UserCreateNestedOneWithoutMvpSessionsInput
    topScorerPlayer?: UserCreateNestedOneWithoutTopScorerSessionsInput
    rounds?: RoundCreateNestedManyWithoutSessionInput
    badges?: BadgeCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutTeamsInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    mvpPlayerId?: string | null
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
    rounds?: RoundUncheckedCreateNestedManyWithoutSessionInput
    badges?: BadgeUncheckedCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutTeamsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutTeamsInput, SessionUncheckedCreateWithoutTeamsInput>
  }

  export type TeamPlayerCreateWithoutTeamInput = {
    player: UserCreateNestedOneWithoutTeamPlayersInput
  }

  export type TeamPlayerUncheckedCreateWithoutTeamInput = {
    id?: number
    playerId: string
  }

  export type TeamPlayerCreateOrConnectWithoutTeamInput = {
    where: TeamPlayerWhereUniqueInput
    create: XOR<TeamPlayerCreateWithoutTeamInput, TeamPlayerUncheckedCreateWithoutTeamInput>
  }

  export type TeamPlayerCreateManyTeamInputEnvelope = {
    data: TeamPlayerCreateManyTeamInput | TeamPlayerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutHomeTeamInput = {
    id?: string
    roundNumber: number
    homeScore?: number
    awayScore?: number
    isDraw?: boolean
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutRoundsInput
    awayTeam: TeamCreateNestedOneWithoutAwayRoundsInput
    winnerTeam?: TeamCreateNestedOneWithoutWonRoundsInput
    goals?: GoalCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutHomeTeamInput = {
    id?: string
    sessionId: string
    roundNumber: number
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutHomeTeamInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutHomeTeamInput, RoundUncheckedCreateWithoutHomeTeamInput>
  }

  export type RoundCreateManyHomeTeamInputEnvelope = {
    data: RoundCreateManyHomeTeamInput | RoundCreateManyHomeTeamInput[]
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutAwayTeamInput = {
    id?: string
    roundNumber: number
    homeScore?: number
    awayScore?: number
    isDraw?: boolean
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutRoundsInput
    homeTeam: TeamCreateNestedOneWithoutHomeRoundsInput
    winnerTeam?: TeamCreateNestedOneWithoutWonRoundsInput
    goals?: GoalCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutAwayTeamInput = {
    id?: string
    sessionId: string
    roundNumber: number
    homeTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutAwayTeamInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutAwayTeamInput, RoundUncheckedCreateWithoutAwayTeamInput>
  }

  export type RoundCreateManyAwayTeamInputEnvelope = {
    data: RoundCreateManyAwayTeamInput | RoundCreateManyAwayTeamInput[]
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutWinnerTeamInput = {
    id?: string
    roundNumber: number
    homeScore?: number
    awayScore?: number
    isDraw?: boolean
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutRoundsInput
    homeTeam: TeamCreateNestedOneWithoutHomeRoundsInput
    awayTeam: TeamCreateNestedOneWithoutAwayRoundsInput
    goals?: GoalCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutWinnerTeamInput = {
    id?: string
    sessionId: string
    roundNumber: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    isDraw?: boolean
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutWinnerTeamInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutWinnerTeamInput, RoundUncheckedCreateWithoutWinnerTeamInput>
  }

  export type RoundCreateManyWinnerTeamInputEnvelope = {
    data: RoundCreateManyWinnerTeamInput | RoundCreateManyWinnerTeamInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithoutTeamsInput = {
    update: XOR<SessionUpdateWithoutTeamsInput, SessionUncheckedUpdateWithoutTeamsInput>
    create: XOR<SessionCreateWithoutTeamsInput, SessionUncheckedCreateWithoutTeamsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutTeamsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutTeamsInput, SessionUncheckedUpdateWithoutTeamsInput>
  }

  export type SessionUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSessionsNestedInput
    mvpPlayer?: UserUpdateOneWithoutMvpSessionsNestedInput
    topScorerPlayer?: UserUpdateOneWithoutTopScorerSessionsNestedInput
    rounds?: RoundUpdateManyWithoutSessionNestedInput
    badges?: BadgeUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rounds?: RoundUncheckedUpdateManyWithoutSessionNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TeamPlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamPlayerWhereUniqueInput
    update: XOR<TeamPlayerUpdateWithoutTeamInput, TeamPlayerUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamPlayerCreateWithoutTeamInput, TeamPlayerUncheckedCreateWithoutTeamInput>
  }

  export type TeamPlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamPlayerWhereUniqueInput
    data: XOR<TeamPlayerUpdateWithoutTeamInput, TeamPlayerUncheckedUpdateWithoutTeamInput>
  }

  export type TeamPlayerUpdateManyWithWhereWithoutTeamInput = {
    where: TeamPlayerScalarWhereInput
    data: XOR<TeamPlayerUpdateManyMutationInput, TeamPlayerUncheckedUpdateManyWithoutTeamInput>
  }

  export type RoundUpsertWithWhereUniqueWithoutHomeTeamInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutHomeTeamInput, RoundUncheckedUpdateWithoutHomeTeamInput>
    create: XOR<RoundCreateWithoutHomeTeamInput, RoundUncheckedCreateWithoutHomeTeamInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutHomeTeamInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutHomeTeamInput, RoundUncheckedUpdateWithoutHomeTeamInput>
  }

  export type RoundUpdateManyWithWhereWithoutHomeTeamInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutHomeTeamInput>
  }

  export type RoundUpsertWithWhereUniqueWithoutAwayTeamInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutAwayTeamInput, RoundUncheckedUpdateWithoutAwayTeamInput>
    create: XOR<RoundCreateWithoutAwayTeamInput, RoundUncheckedCreateWithoutAwayTeamInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutAwayTeamInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutAwayTeamInput, RoundUncheckedUpdateWithoutAwayTeamInput>
  }

  export type RoundUpdateManyWithWhereWithoutAwayTeamInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutAwayTeamInput>
  }

  export type RoundUpsertWithWhereUniqueWithoutWinnerTeamInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutWinnerTeamInput, RoundUncheckedUpdateWithoutWinnerTeamInput>
    create: XOR<RoundCreateWithoutWinnerTeamInput, RoundUncheckedCreateWithoutWinnerTeamInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutWinnerTeamInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutWinnerTeamInput, RoundUncheckedUpdateWithoutWinnerTeamInput>
  }

  export type RoundUpdateManyWithWhereWithoutWinnerTeamInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutWinnerTeamInput>
  }

  export type TeamCreateWithoutPlayersInput = {
    id?: string
    name: string
    color: string
    totalRating?: number
    session: SessionCreateNestedOneWithoutTeamsInput
    homeRounds?: RoundCreateNestedManyWithoutHomeTeamInput
    awayRounds?: RoundCreateNestedManyWithoutAwayTeamInput
    wonRounds?: RoundCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamUncheckedCreateWithoutPlayersInput = {
    id?: string
    sessionId: string
    name: string
    color: string
    totalRating?: number
    homeRounds?: RoundUncheckedCreateNestedManyWithoutHomeTeamInput
    awayRounds?: RoundUncheckedCreateNestedManyWithoutAwayTeamInput
    wonRounds?: RoundUncheckedCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamCreateOrConnectWithoutPlayersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
  }

  export type UserCreateWithoutTeamPlayersInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    goals?: GoalCreateNestedManyWithoutPlayerInput
    badges?: BadgeCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamPlayersInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    goals?: GoalUncheckedCreateNestedManyWithoutPlayerInput
    badges?: BadgeUncheckedCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionUncheckedCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionUncheckedCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamPlayersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamPlayersInput, UserUncheckedCreateWithoutTeamPlayersInput>
  }

  export type TeamUpsertWithoutPlayersInput = {
    update: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutTeamsNestedInput
    homeRounds?: RoundUpdateManyWithoutHomeTeamNestedInput
    awayRounds?: RoundUpdateManyWithoutAwayTeamNestedInput
    wonRounds?: RoundUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    homeRounds?: RoundUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayRounds?: RoundUncheckedUpdateManyWithoutAwayTeamNestedInput
    wonRounds?: RoundUncheckedUpdateManyWithoutWinnerTeamNestedInput
  }

  export type UserUpsertWithoutTeamPlayersInput = {
    update: XOR<UserUpdateWithoutTeamPlayersInput, UserUncheckedUpdateWithoutTeamPlayersInput>
    create: XOR<UserCreateWithoutTeamPlayersInput, UserUncheckedCreateWithoutTeamPlayersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamPlayersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamPlayersInput, UserUncheckedUpdateWithoutTeamPlayersInput>
  }

  export type UserUpdateWithoutTeamPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUncheckedUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUncheckedUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionCreateWithoutRoundsInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    maxPlayers?: number
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSessionsInput
    mvpPlayer?: UserCreateNestedOneWithoutMvpSessionsInput
    topScorerPlayer?: UserCreateNestedOneWithoutTopScorerSessionsInput
    teams?: TeamCreateNestedManyWithoutSessionInput
    badges?: BadgeCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutRoundsInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    mvpPlayerId?: string | null
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutSessionInput
    badges?: BadgeUncheckedCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutRoundsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutRoundsInput, SessionUncheckedCreateWithoutRoundsInput>
  }

  export type TeamCreateWithoutHomeRoundsInput = {
    id?: string
    name: string
    color: string
    totalRating?: number
    session: SessionCreateNestedOneWithoutTeamsInput
    players?: TeamPlayerCreateNestedManyWithoutTeamInput
    awayRounds?: RoundCreateNestedManyWithoutAwayTeamInput
    wonRounds?: RoundCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamUncheckedCreateWithoutHomeRoundsInput = {
    id?: string
    sessionId: string
    name: string
    color: string
    totalRating?: number
    players?: TeamPlayerUncheckedCreateNestedManyWithoutTeamInput
    awayRounds?: RoundUncheckedCreateNestedManyWithoutAwayTeamInput
    wonRounds?: RoundUncheckedCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamCreateOrConnectWithoutHomeRoundsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutHomeRoundsInput, TeamUncheckedCreateWithoutHomeRoundsInput>
  }

  export type TeamCreateWithoutAwayRoundsInput = {
    id?: string
    name: string
    color: string
    totalRating?: number
    session: SessionCreateNestedOneWithoutTeamsInput
    players?: TeamPlayerCreateNestedManyWithoutTeamInput
    homeRounds?: RoundCreateNestedManyWithoutHomeTeamInput
    wonRounds?: RoundCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamUncheckedCreateWithoutAwayRoundsInput = {
    id?: string
    sessionId: string
    name: string
    color: string
    totalRating?: number
    players?: TeamPlayerUncheckedCreateNestedManyWithoutTeamInput
    homeRounds?: RoundUncheckedCreateNestedManyWithoutHomeTeamInput
    wonRounds?: RoundUncheckedCreateNestedManyWithoutWinnerTeamInput
  }

  export type TeamCreateOrConnectWithoutAwayRoundsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutAwayRoundsInput, TeamUncheckedCreateWithoutAwayRoundsInput>
  }

  export type TeamCreateWithoutWonRoundsInput = {
    id?: string
    name: string
    color: string
    totalRating?: number
    session: SessionCreateNestedOneWithoutTeamsInput
    players?: TeamPlayerCreateNestedManyWithoutTeamInput
    homeRounds?: RoundCreateNestedManyWithoutHomeTeamInput
    awayRounds?: RoundCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamUncheckedCreateWithoutWonRoundsInput = {
    id?: string
    sessionId: string
    name: string
    color: string
    totalRating?: number
    players?: TeamPlayerUncheckedCreateNestedManyWithoutTeamInput
    homeRounds?: RoundUncheckedCreateNestedManyWithoutHomeTeamInput
    awayRounds?: RoundUncheckedCreateNestedManyWithoutAwayTeamInput
  }

  export type TeamCreateOrConnectWithoutWonRoundsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutWonRoundsInput, TeamUncheckedCreateWithoutWonRoundsInput>
  }

  export type GoalCreateWithoutRoundInput = {
    minute?: number | null
    player: UserCreateNestedOneWithoutGoalsInput
  }

  export type GoalUncheckedCreateWithoutRoundInput = {
    id?: number
    playerId: string
    minute?: number | null
  }

  export type GoalCreateOrConnectWithoutRoundInput = {
    where: GoalWhereUniqueInput
    create: XOR<GoalCreateWithoutRoundInput, GoalUncheckedCreateWithoutRoundInput>
  }

  export type GoalCreateManyRoundInputEnvelope = {
    data: GoalCreateManyRoundInput | GoalCreateManyRoundInput[]
    skipDuplicates?: boolean
  }

  export type SessionUpsertWithoutRoundsInput = {
    update: XOR<SessionUpdateWithoutRoundsInput, SessionUncheckedUpdateWithoutRoundsInput>
    create: XOR<SessionCreateWithoutRoundsInput, SessionUncheckedCreateWithoutRoundsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutRoundsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutRoundsInput, SessionUncheckedUpdateWithoutRoundsInput>
  }

  export type SessionUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSessionsNestedInput
    mvpPlayer?: UserUpdateOneWithoutMvpSessionsNestedInput
    topScorerPlayer?: UserUpdateOneWithoutTopScorerSessionsNestedInput
    teams?: TeamUpdateManyWithoutSessionNestedInput
    badges?: BadgeUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutSessionNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type TeamUpsertWithoutHomeRoundsInput = {
    update: XOR<TeamUpdateWithoutHomeRoundsInput, TeamUncheckedUpdateWithoutHomeRoundsInput>
    create: XOR<TeamCreateWithoutHomeRoundsInput, TeamUncheckedCreateWithoutHomeRoundsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutHomeRoundsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutHomeRoundsInput, TeamUncheckedUpdateWithoutHomeRoundsInput>
  }

  export type TeamUpdateWithoutHomeRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutTeamsNestedInput
    players?: TeamPlayerUpdateManyWithoutTeamNestedInput
    awayRounds?: RoundUpdateManyWithoutAwayTeamNestedInput
    wonRounds?: RoundUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutHomeRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    players?: TeamPlayerUncheckedUpdateManyWithoutTeamNestedInput
    awayRounds?: RoundUncheckedUpdateManyWithoutAwayTeamNestedInput
    wonRounds?: RoundUncheckedUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamUpsertWithoutAwayRoundsInput = {
    update: XOR<TeamUpdateWithoutAwayRoundsInput, TeamUncheckedUpdateWithoutAwayRoundsInput>
    create: XOR<TeamCreateWithoutAwayRoundsInput, TeamUncheckedCreateWithoutAwayRoundsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutAwayRoundsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutAwayRoundsInput, TeamUncheckedUpdateWithoutAwayRoundsInput>
  }

  export type TeamUpdateWithoutAwayRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutTeamsNestedInput
    players?: TeamPlayerUpdateManyWithoutTeamNestedInput
    homeRounds?: RoundUpdateManyWithoutHomeTeamNestedInput
    wonRounds?: RoundUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutAwayRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    players?: TeamPlayerUncheckedUpdateManyWithoutTeamNestedInput
    homeRounds?: RoundUncheckedUpdateManyWithoutHomeTeamNestedInput
    wonRounds?: RoundUncheckedUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamUpsertWithoutWonRoundsInput = {
    update: XOR<TeamUpdateWithoutWonRoundsInput, TeamUncheckedUpdateWithoutWonRoundsInput>
    create: XOR<TeamCreateWithoutWonRoundsInput, TeamUncheckedCreateWithoutWonRoundsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutWonRoundsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutWonRoundsInput, TeamUncheckedUpdateWithoutWonRoundsInput>
  }

  export type TeamUpdateWithoutWonRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    session?: SessionUpdateOneRequiredWithoutTeamsNestedInput
    players?: TeamPlayerUpdateManyWithoutTeamNestedInput
    homeRounds?: RoundUpdateManyWithoutHomeTeamNestedInput
    awayRounds?: RoundUpdateManyWithoutAwayTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutWonRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    players?: TeamPlayerUncheckedUpdateManyWithoutTeamNestedInput
    homeRounds?: RoundUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayRounds?: RoundUncheckedUpdateManyWithoutAwayTeamNestedInput
  }

  export type GoalUpsertWithWhereUniqueWithoutRoundInput = {
    where: GoalWhereUniqueInput
    update: XOR<GoalUpdateWithoutRoundInput, GoalUncheckedUpdateWithoutRoundInput>
    create: XOR<GoalCreateWithoutRoundInput, GoalUncheckedCreateWithoutRoundInput>
  }

  export type GoalUpdateWithWhereUniqueWithoutRoundInput = {
    where: GoalWhereUniqueInput
    data: XOR<GoalUpdateWithoutRoundInput, GoalUncheckedUpdateWithoutRoundInput>
  }

  export type GoalUpdateManyWithWhereWithoutRoundInput = {
    where: GoalScalarWhereInput
    data: XOR<GoalUpdateManyMutationInput, GoalUncheckedUpdateManyWithoutRoundInput>
  }

  export type RoundCreateWithoutGoalsInput = {
    id?: string
    roundNumber: number
    homeScore?: number
    awayScore?: number
    isDraw?: boolean
    createdAt?: Date | string
    session: SessionCreateNestedOneWithoutRoundsInput
    homeTeam: TeamCreateNestedOneWithoutHomeRoundsInput
    awayTeam: TeamCreateNestedOneWithoutAwayRoundsInput
    winnerTeam?: TeamCreateNestedOneWithoutWonRoundsInput
  }

  export type RoundUncheckedCreateWithoutGoalsInput = {
    id?: string
    sessionId: string
    roundNumber: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
  }

  export type RoundCreateOrConnectWithoutGoalsInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutGoalsInput, RoundUncheckedCreateWithoutGoalsInput>
  }

  export type UserCreateWithoutGoalsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerCreateNestedManyWithoutPlayerInput
    badges?: BadgeCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutGoalsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerUncheckedCreateNestedManyWithoutPlayerInput
    badges?: BadgeUncheckedCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionUncheckedCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionUncheckedCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutGoalsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
  }

  export type RoundUpsertWithoutGoalsInput = {
    update: XOR<RoundUpdateWithoutGoalsInput, RoundUncheckedUpdateWithoutGoalsInput>
    create: XOR<RoundCreateWithoutGoalsInput, RoundUncheckedCreateWithoutGoalsInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutGoalsInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutGoalsInput, RoundUncheckedUpdateWithoutGoalsInput>
  }

  export type RoundUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutRoundsNestedInput
    homeTeam?: TeamUpdateOneRequiredWithoutHomeRoundsNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayRoundsNestedInput
    winnerTeam?: TeamUpdateOneWithoutWonRoundsNestedInput
  }

  export type RoundUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutGoalsInput = {
    update: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
    create: XOR<UserCreateWithoutGoalsInput, UserUncheckedCreateWithoutGoalsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGoalsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGoalsInput, UserUncheckedUpdateWithoutGoalsInput>
  }

  export type UserUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutGoalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUncheckedUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUncheckedUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUncheckedUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutBadgesInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerCreateNestedManyWithoutPlayerInput
    goals?: GoalCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBadgesInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerUncheckedCreateNestedManyWithoutPlayerInput
    goals?: GoalUncheckedCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionUncheckedCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionUncheckedCreateNestedManyWithoutTopScorerPlayerInput
    sessionParticipants?: SessionParticipantUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBadgesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
  }

  export type SessionCreateWithoutBadgesInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    maxPlayers?: number
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSessionsInput
    mvpPlayer?: UserCreateNestedOneWithoutMvpSessionsInput
    topScorerPlayer?: UserCreateNestedOneWithoutTopScorerSessionsInput
    teams?: TeamCreateNestedManyWithoutSessionInput
    rounds?: RoundCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutBadgesInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    mvpPlayerId?: string | null
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutSessionInput
    rounds?: RoundUncheckedCreateNestedManyWithoutSessionInput
    participants?: SessionParticipantUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutBadgesInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutBadgesInput, SessionUncheckedCreateWithoutBadgesInput>
  }

  export type UserUpsertWithoutBadgesInput = {
    update: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
    create: XOR<UserCreateWithoutBadgesInput, UserUncheckedCreateWithoutBadgesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBadgesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBadgesInput, UserUncheckedUpdateWithoutBadgesInput>
  }

  export type UserUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUpdateManyWithoutPlayerNestedInput
    goals?: GoalUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUncheckedUpdateManyWithoutPlayerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUncheckedUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUncheckedUpdateManyWithoutTopScorerPlayerNestedInput
    sessionParticipants?: SessionParticipantUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SessionUpsertWithoutBadgesInput = {
    update: XOR<SessionUpdateWithoutBadgesInput, SessionUncheckedUpdateWithoutBadgesInput>
    create: XOR<SessionCreateWithoutBadgesInput, SessionUncheckedCreateWithoutBadgesInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutBadgesInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutBadgesInput, SessionUncheckedUpdateWithoutBadgesInput>
  }

  export type SessionUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSessionsNestedInput
    mvpPlayer?: UserUpdateOneWithoutMvpSessionsNestedInput
    topScorerPlayer?: UserUpdateOneWithoutTopScorerSessionsNestedInput
    teams?: TeamUpdateManyWithoutSessionNestedInput
    rounds?: RoundUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutBadgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutSessionNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionCreateWithoutParticipantsInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    maxPlayers?: number
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedSessionsInput
    mvpPlayer?: UserCreateNestedOneWithoutMvpSessionsInput
    topScorerPlayer?: UserCreateNestedOneWithoutTopScorerSessionsInput
    teams?: TeamCreateNestedManyWithoutSessionInput
    rounds?: RoundCreateNestedManyWithoutSessionInput
    badges?: BadgeCreateNestedManyWithoutSessionInput
  }

  export type SessionUncheckedCreateWithoutParticipantsInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    mvpPlayerId?: string | null
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutSessionInput
    rounds?: RoundUncheckedCreateNestedManyWithoutSessionInput
    badges?: BadgeUncheckedCreateNestedManyWithoutSessionInput
  }

  export type SessionCreateOrConnectWithoutParticipantsInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutParticipantsInput, SessionUncheckedCreateWithoutParticipantsInput>
  }

  export type UserCreateWithoutSessionParticipantsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerCreateNestedManyWithoutPlayerInput
    goals?: GoalCreateNestedManyWithoutPlayerInput
    badges?: BadgeCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionCreateNestedManyWithoutTopScorerPlayerInput
  }

  export type UserUncheckedCreateWithoutSessionParticipantsInput = {
    id?: string
    email: string
    password: string
    name: string
    nickname?: string | null
    position?: $Enums.Position
    rating?: number
    avatarIndex?: number
    isAdmin?: boolean
    createdAt?: Date | string
    teamPlayers?: TeamPlayerUncheckedCreateNestedManyWithoutPlayerInput
    goals?: GoalUncheckedCreateNestedManyWithoutPlayerInput
    badges?: BadgeUncheckedCreateNestedManyWithoutPlayerInput
    createdSessions?: SessionUncheckedCreateNestedManyWithoutCreatedByInput
    mvpSessions?: SessionUncheckedCreateNestedManyWithoutMvpPlayerInput
    topScorerSessions?: SessionUncheckedCreateNestedManyWithoutTopScorerPlayerInput
  }

  export type UserCreateOrConnectWithoutSessionParticipantsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionParticipantsInput, UserUncheckedCreateWithoutSessionParticipantsInput>
  }

  export type SessionUpsertWithoutParticipantsInput = {
    update: XOR<SessionUpdateWithoutParticipantsInput, SessionUncheckedUpdateWithoutParticipantsInput>
    create: XOR<SessionCreateWithoutParticipantsInput, SessionUncheckedCreateWithoutParticipantsInput>
    where?: SessionWhereInput
  }

  export type SessionUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: SessionWhereInput
    data: XOR<SessionUpdateWithoutParticipantsInput, SessionUncheckedUpdateWithoutParticipantsInput>
  }

  export type SessionUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSessionsNestedInput
    mvpPlayer?: UserUpdateOneWithoutMvpSessionsNestedInput
    topScorerPlayer?: UserUpdateOneWithoutTopScorerSessionsNestedInput
    teams?: TeamUpdateManyWithoutSessionNestedInput
    rounds?: RoundUpdateManyWithoutSessionNestedInput
    badges?: BadgeUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutSessionNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutSessionNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type UserUpsertWithoutSessionParticipantsInput = {
    update: XOR<UserUpdateWithoutSessionParticipantsInput, UserUncheckedUpdateWithoutSessionParticipantsInput>
    create: XOR<UserCreateWithoutSessionParticipantsInput, UserUncheckedCreateWithoutSessionParticipantsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionParticipantsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionParticipantsInput, UserUncheckedUpdateWithoutSessionParticipantsInput>
  }

  export type UserUpdateWithoutSessionParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUpdateManyWithoutPlayerNestedInput
    goals?: GoalUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUpdateManyWithoutTopScorerPlayerNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    position?: EnumPositionFieldUpdateOperationsInput | $Enums.Position
    rating?: IntFieldUpdateOperationsInput | number
    avatarIndex?: IntFieldUpdateOperationsInput | number
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamPlayers?: TeamPlayerUncheckedUpdateManyWithoutPlayerNestedInput
    goals?: GoalUncheckedUpdateManyWithoutPlayerNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutPlayerNestedInput
    createdSessions?: SessionUncheckedUpdateManyWithoutCreatedByNestedInput
    mvpSessions?: SessionUncheckedUpdateManyWithoutMvpPlayerNestedInput
    topScorerSessions?: SessionUncheckedUpdateManyWithoutTopScorerPlayerNestedInput
  }

  export type TeamPlayerCreateManyPlayerInput = {
    id?: number
    teamId: string
  }

  export type GoalCreateManyPlayerInput = {
    id?: number
    roundId: string
    minute?: number | null
  }

  export type BadgeCreateManyPlayerInput = {
    id?: number
    type: $Enums.BadgeType
    sessionId?: string | null
    earnedAt?: Date | string
  }

  export type SessionCreateManyCreatedByInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    mvpPlayerId?: string | null
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
  }

  export type SessionCreateManyMvpPlayerInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    topScorerPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
  }

  export type SessionCreateManyTopScorerPlayerInput = {
    id?: string
    title?: string | null
    date: Date | string
    status?: $Enums.SessionStatus
    createdById: string
    mvpPlayerId?: string | null
    maxPlayers?: number
    createdAt?: Date | string
  }

  export type SessionParticipantCreateManyUserInput = {
    id?: string
    sessionId: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type TeamPlayerUpdateWithoutPlayerInput = {
    team?: TeamUpdateOneRequiredWithoutPlayersNestedInput
  }

  export type TeamPlayerUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamPlayerUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    teamId?: StringFieldUpdateOperationsInput | string
  }

  export type GoalUpdateWithoutPlayerInput = {
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    round?: RoundUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: StringFieldUpdateOperationsInput | string
    minute?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GoalUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    roundId?: StringFieldUpdateOperationsInput | string
    minute?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type BadgeUpdateWithoutPlayerInput = {
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneWithoutBadgesNestedInput
  }

  export type BadgeUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    sessionId?: NullableStringFieldUpdateOperationsInput | string | null
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mvpPlayer?: UserUpdateOneWithoutMvpSessionsNestedInput
    topScorerPlayer?: UserUpdateOneWithoutTopScorerSessionsNestedInput
    teams?: TeamUpdateManyWithoutSessionNestedInput
    rounds?: RoundUpdateManyWithoutSessionNestedInput
    badges?: BadgeUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutSessionNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutSessionNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutMvpPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSessionsNestedInput
    topScorerPlayer?: UserUpdateOneWithoutTopScorerSessionsNestedInput
    teams?: TeamUpdateManyWithoutSessionNestedInput
    rounds?: RoundUpdateManyWithoutSessionNestedInput
    badges?: BadgeUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutMvpPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutSessionNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutSessionNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutMvpPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    topScorerPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutTopScorerPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedSessionsNestedInput
    mvpPlayer?: UserUpdateOneWithoutMvpSessionsNestedInput
    teams?: TeamUpdateManyWithoutSessionNestedInput
    rounds?: RoundUpdateManyWithoutSessionNestedInput
    badges?: BadgeUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateWithoutTopScorerPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutSessionNestedInput
    rounds?: RoundUncheckedUpdateManyWithoutSessionNestedInput
    badges?: BadgeUncheckedUpdateManyWithoutSessionNestedInput
    participants?: SessionParticipantUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type SessionUncheckedUpdateManyWithoutTopScorerPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    createdById?: StringFieldUpdateOperationsInput | string
    mvpPlayerId?: NullableStringFieldUpdateOperationsInput | string | null
    maxPlayers?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionParticipantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutParticipantsNestedInput
  }

  export type SessionParticipantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionParticipantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateManySessionInput = {
    id?: string
    name: string
    color: string
    totalRating?: number
  }

  export type RoundCreateManySessionInput = {
    id?: string
    roundNumber: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
  }

  export type BadgeCreateManySessionInput = {
    id?: number
    playerId: string
    type: $Enums.BadgeType
    earnedAt?: Date | string
  }

  export type SessionParticipantCreateManySessionInput = {
    id?: string
    userId: string
    status?: $Enums.ParticipantStatus
    createdAt?: Date | string
  }

  export type TeamUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    players?: TeamPlayerUpdateManyWithoutTeamNestedInput
    homeRounds?: RoundUpdateManyWithoutHomeTeamNestedInput
    awayRounds?: RoundUpdateManyWithoutAwayTeamNestedInput
    wonRounds?: RoundUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
    players?: TeamPlayerUncheckedUpdateManyWithoutTeamNestedInput
    homeRounds?: RoundUncheckedUpdateManyWithoutHomeTeamNestedInput
    awayRounds?: RoundUncheckedUpdateManyWithoutAwayTeamNestedInput
    wonRounds?: RoundUncheckedUpdateManyWithoutWinnerTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    color?: StringFieldUpdateOperationsInput | string
    totalRating?: IntFieldUpdateOperationsInput | number
  }

  export type RoundUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: TeamUpdateOneRequiredWithoutHomeRoundsNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayRoundsNestedInput
    winnerTeam?: TeamUpdateOneWithoutWonRoundsNestedInput
    goals?: GoalUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUpdateWithoutSessionInput = {
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: UserUpdateOneRequiredWithoutBadgesNestedInput
  }

  export type BadgeUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BadgeUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    type?: EnumBadgeTypeFieldUpdateOperationsInput | $Enums.BadgeType
    earnedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionParticipantUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionParticipantsNestedInput
  }

  export type SessionParticipantUncheckedUpdateWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionParticipantUncheckedUpdateManyWithoutSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumParticipantStatusFieldUpdateOperationsInput | $Enums.ParticipantStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamPlayerCreateManyTeamInput = {
    id?: number
    playerId: string
  }

  export type RoundCreateManyHomeTeamInput = {
    id?: string
    sessionId: string
    roundNumber: number
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
  }

  export type RoundCreateManyAwayTeamInput = {
    id?: string
    sessionId: string
    roundNumber: number
    homeTeamId: string
    homeScore?: number
    awayScore?: number
    winnerTeamId?: string | null
    isDraw?: boolean
    createdAt?: Date | string
  }

  export type RoundCreateManyWinnerTeamInput = {
    id?: string
    sessionId: string
    roundNumber: number
    homeTeamId: string
    awayTeamId: string
    homeScore?: number
    awayScore?: number
    isDraw?: boolean
    createdAt?: Date | string
  }

  export type TeamPlayerUpdateWithoutTeamInput = {
    player?: UserUpdateOneRequiredWithoutTeamPlayersNestedInput
  }

  export type TeamPlayerUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamPlayerUncheckedUpdateManyWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
  }

  export type RoundUpdateWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutRoundsNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayRoundsNestedInput
    winnerTeam?: TeamUpdateOneWithoutWonRoundsNestedInput
    goals?: GoalUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutHomeTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUpdateWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutRoundsNestedInput
    homeTeam?: TeamUpdateOneRequiredWithoutHomeRoundsNestedInput
    winnerTeam?: TeamUpdateOneWithoutWonRoundsNestedInput
    goals?: GoalUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutAwayTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    winnerTeamId?: NullableStringFieldUpdateOperationsInput | string | null
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUpdateWithoutWinnerTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    session?: SessionUpdateOneRequiredWithoutRoundsNestedInput
    homeTeam?: TeamUpdateOneRequiredWithoutHomeRoundsNestedInput
    awayTeam?: TeamUpdateOneRequiredWithoutAwayRoundsNestedInput
    goals?: GoalUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutWinnerTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    goals?: GoalUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutWinnerTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionId?: StringFieldUpdateOperationsInput | string
    roundNumber?: IntFieldUpdateOperationsInput | number
    homeTeamId?: StringFieldUpdateOperationsInput | string
    awayTeamId?: StringFieldUpdateOperationsInput | string
    homeScore?: IntFieldUpdateOperationsInput | number
    awayScore?: IntFieldUpdateOperationsInput | number
    isDraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalCreateManyRoundInput = {
    id?: number
    playerId: string
    minute?: number | null
  }

  export type GoalUpdateWithoutRoundInput = {
    minute?: NullableIntFieldUpdateOperationsInput | number | null
    player?: UserUpdateOneRequiredWithoutGoalsNestedInput
  }

  export type GoalUncheckedUpdateWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    minute?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GoalUncheckedUpdateManyWithoutRoundInput = {
    id?: IntFieldUpdateOperationsInput | number
    playerId?: StringFieldUpdateOperationsInput | string
    minute?: NullableIntFieldUpdateOperationsInput | number | null
  }



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