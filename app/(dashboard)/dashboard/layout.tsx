import DashboardSidebarContent from "@/app/components/DashboardComponent/DashboardSideBar/DashboardSidebarContent";
import NavBar from "@/app/components/DashboardComponent/DashboardNavbar/NavBar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <div className="w-full border-b border-gray-200 relative">
        <NavBar />
      </div>

      <div className="flex flex-1 overflow-hidden">
        <DashboardSidebarContent />
        <div className="flex-1 bg-white overflow-auto">{children}</div>
      </div>
    </div>
  );
}
