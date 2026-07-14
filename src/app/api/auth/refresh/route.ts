import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { signAccessToken, verifyRefreshToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = body?.refreshToken;

    if (!token) {
      return NextResponse.json({ success: false, message: "Refresh token wajib" }, { status: 400 });
    }

    const payload = verifyRefreshToken(token) as { id?: string };
    if (!payload?.id) {
      return NextResponse.json({ success: false, message: "Refresh token tidak valid" }, { status: 401 });
    }

    const user = await prisma.user.findUnique({ where: { id: payload.id } });
    if (!user || user.refreshToken !== token) {
      return NextResponse.json({ success: false, message: "Refresh token tidak valid" }, { status: 401 });
    }

    const accessToken = signAccessToken({ id: user.id, email: user.email, role: user.role, name: user.name });
    return NextResponse.json({ success: true, message: "Token diperbarui", data: { accessToken } });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Refresh token tidak valid" }, { status: 401 });
  }
}
