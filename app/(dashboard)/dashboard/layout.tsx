import SidebarMenuButton from "@/app/components/Buttons/SidebarMenuButton";
import NavBar from "@/app/components/NavBar/NavBar";
import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function authLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <NavBar />
      <main className="flex">
        <aside className="border-r-2 border-gray-200 p-6 h-[83vh]">
          <h1>Dashboard</h1>
          <ul>
            <li>
              <SidebarMenuButton
                icon={HomeIcon}
                text="Home"
                trailingIcon={ChevronRightIcon}
              />
            </li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </aside>
        <div>{children}</div>
      </main>
    </div>
  );
}
