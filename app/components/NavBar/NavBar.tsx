"use client";
import Image from "next/image";
import React, { useState } from "react";
import NavBarProfile from "../UserProfile/NavBarProfile";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import InputBoxModal from "../CardComponent/InputBoxModal";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Get courses from Redux store
  const { role } = useSelector((state: RootState) => state.courses);
  console.log(`from navbar role: ${role}`);
  const handleNavigate = () => router.push("/dashboard");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <React.Fragment>
      <nav className="flex justify-between items-center p-6">
        <Image
          className="cursor-pointer"
          onClick={handleNavigate}
          src="/logo.svg"
          alt="logo"
          width={180}
          height={120}
          priority
        />
        <div className="flex items-center gap-12">
          {role === "teacher" && (
            <AddIcon className="cursor-pointer" onClick={handleOpen} />
          )}

          <NavBarProfile
            avatarSrc="/my_profile.jpeg"
            avatarHeight={50}
            avatarWidth={50}
          />
        </div>
      </nav>
      <InputBoxModal open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export default NavBar;
