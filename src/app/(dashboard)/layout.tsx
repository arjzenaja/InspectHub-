import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Sidebar Navigation */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="lg:pl-[240px]">
        {/* Top Header */}
        <Header />

        {/* Content Container */}
        <main className="pt-20 lg:pt-24 px-6 pb-6 min-h-[calc(100vh-64px)]">
          {children}
        </main>
      </div>
    </div>
  );
}
