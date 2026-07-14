import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { successResponse, errorResponse } from "@/lib/apiResponse";
import { tambahTeknisiSchema } from "@/schemas/teknisi.schema";

/**
 * TEMP TEST ENDPOINT - No auth required
 * TODO: Remove after debugging auth issue
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log("📝 Received body:", body);

    const parsed = tambahTeknisiSchema.safeParse(body);

    if (!parsed.success) {
      console.error("❌ Validation failed:", parsed.error.flatten().fieldErrors);
      return errorResponse(
        "Validasi gagal",
        422,
        parsed.error.flatten().fieldErrors
      );
    }

    const { namaLengkap, email, noHp, divisi, statusKeaktifan, rating, password } = parsed.data;

    console.log("🔍 Checking existing user:", email);
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      console.warn("⚠️ Email already exists:", email);
      return errorResponse("Email sudah digunakan oleh akun lain", 409);
    }

    console.log("🔐 Hashing password...");
    const hashedPassword = await bcrypt.hash(password, 12);
    
    console.log("📊 Counting existing teknisi...");
    const count = await prisma.teknisi.count();
    const idKaryawan = `TK-${String(count + 1).padStart(3, "0")}`;

    console.log("💾 Creating user and teknisi in transaction...");
    const result = await prisma.$transaction(async (tx) => {
      const user = await tx.user.create({
        data: {
          name: namaLengkap,
          email,
          password: hashedPassword,
          role: "teknisi",
          isActive: true,
        },
      });
      console.log("✓ User created:", user.id);

      const teknisi = await tx.teknisi.create({
        data: {
          userId: user.id,
          idKaryawan,
          nama: namaLengkap,
          email,
          noHp: noHp ?? null,
          divisi,
          status: statusKeaktifan,
          rating,
        },
      });
      console.log("✓ Teknisi created:", teknisi.id);

      return { user, teknisi };
    });

    console.log("✅ Success creating teknisi");
    return successResponse(
      {
        teknisi: result.teknisi,
        idKaryawan,
        loginInfo: {
          email,
          password,
          note: "Informasikan kredensial ini kepada teknisi. Password hanya ditampilkan sekali.",
        },
      },
      "Teknisi berhasil ditambahkan",
      201
    );
  } catch (error) {
    console.error("❌ Create teknisi error:", error);
    return errorResponse("Gagal menambahkan teknisi", 500);
  }
}
