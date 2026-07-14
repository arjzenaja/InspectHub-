import { auth } from "@/lib/auth";

// Prevent Edge bundling issues (e.g. pg -> util/types) by forcing Node runtime.
export const runtime = "nodejs";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const { pathname } = req.nextUrl;

  const isProtectedRoute = 
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/peralatan") ||
    pathname.startsWith("/teknisi") ||
    pathname.startsWith("/jadwal") ||
    pathname.startsWith("/laporan") ||
    pathname.startsWith("/lokasi");

  if (isProtectedRoute && !isLoggedIn) {
    const loginUrl = new URL("/login", req.nextUrl.origin);
    return Response.redirect(loginUrl);
  }
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
