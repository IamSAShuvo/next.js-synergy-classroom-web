"use client";
import Image from "next/image";
import React from "react";
import NavBarProfile from "../UserProfile/NavBarProfile";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

const NavBar = () => {
  const router = useRouter();
  const handleNavigate = () => router.push("/");
  const role = ["Software Engineer", "Frontend Developer", "Backend Developer"];
  return (
    <nav className="flex justify-between items-center p-6">
      <Image
        className="cursor-pointer"
        onClick={handleNavigate}
        src="/logo.svg"
        alt="logo"
        width={180}
        height={100}
      />
      <div className="flex items-center gap-12">
        <AddIcon className="cursor-pointer" />
        <NavBarProfile
          roles={role}
          avatarSrc="/my_profile.jpeg"
          name="Salman Aziz"
          avatarHeight={50}
          avatarWidth={50}
        />
      </div>
    </nav>
  );
};

export default NavBar;
