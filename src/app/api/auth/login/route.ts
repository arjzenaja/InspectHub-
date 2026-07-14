import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { signAccessToken, signRefreshToken } from "@/lib/jwt";
import { successResponse, errorResponse } from "@/lib/apiResponse";
import { getDemoUser } from "@/lib/demoAuth";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return errorResponse("Validasi gagal", 400, parsed.error.issues);
    }

    const { email, password } = parsed.data;
    let user: { id: string; name: string; email: string; role: string; avatarUrl?: string | null; password?: string } | null = null;

    try {
      const dbUser = await prisma.user.findUnique({ where: { email } });
      if (dbUser) {
        user = dbUser as unknown as { id: string; name: string; email: string; role: string; avatarUrl?: string | null; password?: string };
      }
    } catch {
      user = null;
    }

    const demoUser = getDemoUser(email, password);
    if (!user && !demoUser) {
      return errorResponse("Email atau kata sandi salah", 401);
    }

    const authenticatedUser = user ?? demoUser;
    if (!authenticatedUser) {
      return errorResponse("Email atau kata sandi salah", 401);
    }
    const payload = { id: authenticatedUser.id, email: authenticatedUser.email, role: authenticatedUser.role, name: authenticatedUser.name };
    const accessToken = signAccessToken(payload);
    const refreshToken = signRefreshToken({ id: authenticatedUser.id });

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: { refreshToken },
      }).catch(() => undefined);
    }

    const response = successResponse(
      {
        accessToken,
        refreshToken,
        user: { id: authenticatedUser.id, name: authenticatedUser.name, email: authenticatedUser.email, role: authenticatedUser.role, avatarUrl: authenticatedUser.avatarUrl ?? null },
      },
      "Login berhasil"
    );

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60,
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("Login error:", error);
    return errorResponse("Terjadi kesalahan server", 500);
  }
}
