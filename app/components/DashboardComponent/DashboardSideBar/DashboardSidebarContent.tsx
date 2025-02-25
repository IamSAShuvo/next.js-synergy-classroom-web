"use client";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SidebarMenuButton from "@/app/components/Buttons/SidebarMenuButton";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/app/store/slices/authenticationSlice/authActions/authActions";
import { AppDispatch } from "@/app/store/store";
import Cookies from "js-cookie";

const DashboardSidebarContent = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const handleNavigate = async () => {
    try {
      const resultAction = await dispatch(logoutUser());
      if (logoutUser.fulfilled.match(resultAction)) {
        Cookies.remove("token");
        Cookies.remove("user");

        router.push("/login");
      }
    } catch {}
  };

  const handleNavigateToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <aside className="w-40 md:w-52 lg:w-64 bg-white border-r border-gray-200 px-4 flex flex-col justify-between h-[calc(100vh-4rem)] sticky top-[4rem]">
      <div className="flex-1 overflow-hidden">
        <nav className="mt-6">
          <SidebarMenuButton
            onClick={handleNavigateToDashboard}
            icon={HomeIcon}
            text="Home"
            trailingIcon={ChevronRightIcon}
            className="w-full bg-skyBlue hover:bg-indigo-600 text-white px-7 py-5 rounded-full font-medium text-sm leading-3 flex justify-between"
          />
        </nav>
      </div>
      <div className="pb-24">
        <SidebarMenuButton
          onClick={handleNavigate}
          icon={LogoutIcon}
          text="Log Out"
          className="w-full border-2 border-cosmicBlue text-cosmicBlue px-7 py-5 rounded-full font-medium text-sm leading-3 flex justify-between"
        />
      </div>
    </aside>
  );
};

export default DashboardSidebarContent;
