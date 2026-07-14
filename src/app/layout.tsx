import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "InspecPro Admin — Sistem Manajemen Inspeksi Peralatan Listrik",
  description: "Panel admin modern untuk memantau data inspeksi, jadwal teknisi, laporan kelayakan, dan analisis wilayah peralatan listrik.",
};

export default function RootLayout({
  children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <html lang="id">
      <head>
        {/* Leaflet CSS CDN fallback for maps compatibility */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="font-sans antialiased bg-[#F8FAFC] text-[#111827]">
        {children}
        <Toaster position="top-right" closeButton richColors />
      </body>
    </html>
  );
}
