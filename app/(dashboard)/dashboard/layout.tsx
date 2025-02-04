import DashboardSidebarContent from "@/app/components/DashboardComponent/DashboardSidebarContent";
import NavBar from "@/app/components/NavBar/NavBar";

// import { cookies } from "next/headers";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <div className="w-full border-b border-gray-200 relative">
        <NavBar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <DashboardSidebarContent />
        {/* Main Content */}
        <div className="flex-1 bg-white overflow-auto">{children}</div>
      </div>
    </div>
  );
}
