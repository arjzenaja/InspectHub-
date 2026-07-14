import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest) {
  try {
    // Get cookies
    const cookies = request.headers.get("cookie");
    console.log("Cookies received:", cookies ? "✓ Ada" : "✗ Tidak ada");
    console.log("Authorization header:", request.headers.get("authorization") ? "✓ Ada" : "✗ Tidak ada");

    // Try to get session
    const session = await auth();
    console.log("Session result:", session);

    return NextResponse.json({
      message: "Test endpoint",
      hasCookies: !!cookies,
      cookieHeaders: cookies ? cookies.substring(0, 100) : null,
      hasAuthHeader: !!request.headers.get("authorization"),
      session: {
        user: session?.user || null,
        hasSession: !!session,
      },
      userAgent: request.headers.get("user-agent"),
    });
  } catch (error) {
    console.error("Test endpoint error:", error);
    return NextResponse.json(
      {
        error: String(error),
        message: "Test endpoint error",
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const session = await auth();
    const body = await request.json();

    if (!session) {
      return NextResponse.json(
        { success: false, message: "Tidak ada session", session: null },
        { status: 401 }
      );
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user?.email || "" },
    });

    return NextResponse.json({
      success: true,
      message: "Session verified",
      session: session.user,
      userFromDb: user
        ? {
            id: user.id,
            email: user.email,
            role: user.role,
            name: user.name,
          }
        : null,
    });
  } catch (error) {
    console.error("Test POST error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}
