import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { getDemoUser } from "@/lib/demoAuth";

async function getPrismaClient() {
  const { prisma } = await import("@/lib/prisma");
  return prisma;
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const email = credentials.email as string;
        const password = credentials.password as string;

        try {
          const prisma = await getPrismaClient();
          const user = await prisma.user.findUnique({ where: { email } });

          if (user?.password && (await bcrypt.compare(password, user.password))) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
              avatarUrl: user.avatarUrl,
            };
          }
        } catch {
          // Database unavailable — fall through to demo credentials below.
        }

        const demoUser = getDemoUser(email, password);
        if (!demoUser) {
          return null;
        }

        return {
          id: demoUser.id,
          name: demoUser.name,
          email: demoUser.email,
          role: demoUser.role,
          avatarUrl: demoUser.avatarUrl,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = (user as any).role;
        token.avatarUrl = (user as any).avatarUrl;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = token.id ?? token.sub;
        (session.user as any).role = token.role;
        (session.user as any).avatarUrl = token.avatarUrl;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  trustHost: true,
  secret: process.env.NEXTAUTH_SECRET,
});
