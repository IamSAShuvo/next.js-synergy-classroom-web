import SidebarMenuButton from "@/app/components/Buttons/SidebarMenuButton";
import NavBar from "@/app/components/NavBar/NavBar";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
        <aside className="w-40 md:w-52 lg:w-64 bg-white border-r border-gray-200 px-4 flex flex-col justify-between h-[calc(100vh-4rem)] sticky top-[4rem]">
          <div className="flex-1 overflow-hidden">
            <nav className="mt-6">
              <SidebarMenuButton
                icon={HomeIcon}
                text="Home"
                trailingIcon={ChevronRightIcon}
                className="w-full bg-skyBlue hover:bg-indigo-600 text-white px-7 py-5 rounded-full font-medium text-sm leading-3 flex justify-between"
              />
            </nav>
          </div>
          <div className="pb-24">
            <SidebarMenuButton
              icon={LogoutIcon}
              text="Log Out"
              className="w-full hover:border-2 border-cosmicBlue text-cosmicBlue px-7 py-5 rounded-full font-medium text-sm leading-3 flex justify-between"
            />
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 bg-white overflow-auto">{children}</div>
      </div>
    </div>
  );
}
