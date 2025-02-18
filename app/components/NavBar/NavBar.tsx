"use client";
import Image from "next/image";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import InputBoxModal from "../CardComponent/InputBoxModal";
import SecondaryProfile from "../UserProfile/SecondaryProfile";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleNavigate = () => router.push("/dashboard");

  const toggleOpen = () => setOpen((prev) => !prev);

  return (
    <>
      <nav className="flex justify-between items-center p-6">
        <Image
          className="cursor-pointer"
          onClick={handleNavigate}
          src="/logo.svg"
          alt="logo"
          width={180}
          height={100}
        />
        <div className="flex items-center gap-5">
          <AddIcon className="cursor-pointer" onClick={toggleOpen} />
          <SecondaryProfile
            shouldOpenModal={true}
            flexOrder="order-1"
            avatarSrc="/profile_avatar.jpeg"
            name="Salman Aziz"
            avatarHeight={50}
            avatarWidth={50}
            className="flex items-center gap-8 cursor-pointer text-lg font-medium leading-5 text-midnightBlack"
          />
        </div>
      </nav>
      <InputBoxModal open={open} onClose={toggleOpen} />
    </>
  );
};

export default NavBar;
