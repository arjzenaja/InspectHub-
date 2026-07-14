import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { withAuth } from "@/middleware/auth";
import { successResponse, errorResponse } from "@/lib/apiResponse";

export const POST = withAuth(async (req) => {
  try {
    const { teknisiId, newPassword } = await req.json();

    const DEFAULT_PASSWORD = "Teknisi@123";
    const passwordToSet = newPassword ?? DEFAULT_PASSWORD;

    const teknisi = await prisma.teknisi.findUnique({
      where: { id: teknisiId },
      include: { user: true },
    });

    if (!teknisi || !teknisi.user) {
      return errorResponse("Teknisi tidak ditemukan", 404);
    }

    const hashed = await bcrypt.hash(passwordToSet, 12);
    await prisma.user.update({
      where: { id: teknisi.user.id },
      data: { password: hashed },
    });

    return successResponse({
      email: teknisi.email,
      password: passwordToSet,
      note: "Password berhasil direset",
    });
  } catch (error) {
    console.error("Reset password error:", error);
    return errorResponse("Gagal mereset password", 500);
  }
}, ["admin"]);
