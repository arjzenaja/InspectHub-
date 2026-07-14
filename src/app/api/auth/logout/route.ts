import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyAccessToken } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const authHeader = req.headers.get("authorization") || "";
    const token = authHeader.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json({ success: false, message: "Token wajib" }, { status: 400 });
    }

    const payload = verifyAccessToken(token) as { id?: string };
    if (!payload?.id) {
      return NextResponse.json({ success: false, message: "Token tidak valid" }, { status: 401 });
    }

    await prisma.user.update({ where: { id: payload.id }, data: { refreshToken: null } });
    return NextResponse.json({ success: true, message: "Logout berhasil" });
  } catch (error) {
    return NextResponse.json({ success: false, message: "Logout gagal" }, { status: 401 });
  }
}
