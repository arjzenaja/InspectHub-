import "dotenv/config";
import { PrismaClient } from "../../generated/prisma";

const globalForPrisma = globalThis as unknown as { prisma?: PrismaClient };

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not set. Link the Prisma Postgres database first.");
}

if (!/^postgres(ql)?:\/\//i.test(connectionString) && !/^prisma:\/\//i.test(connectionString)) {
  // Helps catch misconfigured DATABASE_URL early (e.g. accidental wrapper formats)
  throw new Error(`Invalid DATABASE_URL format: ${connectionString.slice(0, 30)}...`);
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({

    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
