import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/jwt";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export type AuthUser = {
  id: string;
  email: string;
  role: "admin" | "manager" | "teknisi";
  name: string;
};

export const withAuth = (
  handler: (req: NextRequest, user: AuthUser, ...args: any[]) => Promise<NextResponse>,
  allowedRoles?: string[]
) => {
  return async (req: NextRequest, ...args: any[]) => {
    try {
      let decoded: AuthUser | null = null;
      const authHeader = req.headers.get("authorization") || req.headers.get("Authorization");

      // Try Bearer token first
      if (authHeader?.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        try {
          decoded = verifyAccessToken(token) as AuthUser;
        } catch {
          decoded = null;
        }
      }

      // Fallback: JWT from cookies (used by custom login flow)
      if (!decoded) {
        const cookieToken = req.cookies.get("accessToken")?.value || req.cookies.get("token")?.value;
        if (cookieToken) {
          try {
            decoded = verifyAccessToken(cookieToken) as AuthUser;
          } catch {
            decoded = null;
          }
        }
      }

      // If no Bearer token, try session from cookies
      if (!decoded) {
        try {
          const session = await auth();
          const user = session?.user as unknown as {
            id?: string;
            email?: string;
            role?: AuthUser["role"];
            name?: string;
          };

          if (user?.email && user?.role) {
            try {
              const dbUser = await prisma.user.findUnique({
                where: { email: user.email },
              });

              if (dbUser) {
                decoded = {
                  id: dbUser.id,
                  email: dbUser.email,
                  role: dbUser.role as AuthUser["role"],
                  name: dbUser.name,
                };
              } else {
                decoded = {
                  id: user.id ?? user.email,
                  email: user.email,
                  role: user.role,
                  name: user.name ?? user.email,
                };
              }
            } catch {
              decoded = {
                id: user.id ?? user.email,
                email: user.email,
                role: user.role,
                name: user.name ?? user.email,
              };
            }
          }
        } catch (error) {
          console.warn("Session auth failed:", error);
          decoded = null;
        }
      }

      if (!decoded) {
        return NextResponse.json(
          { success: false, message: "Token tidak ditemukan. Silakan login terlebih dahulu." },
          { status: 401 }
        );
      }

      if (allowedRoles && !allowedRoles.includes(decoded.role)) {
        return NextResponse.json(
          { success: false, message: `Akses ditolak. Memerlukan role: ${allowedRoles.join(", ")}` },
          { status: 403 }
        );
      }

      return handler(req, decoded, ...args);
    } catch (error) {
      console.error("Auth middleware error:", error);
      return NextResponse.json(
        { success: false, message: "Terjadi kesalahan pada autentikasi" },
        { status: 401 }
      );
    }
  };
};
