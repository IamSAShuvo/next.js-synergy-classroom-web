"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import InputBoxModal from "../../CardComponent/InputBoxModal";
import Cookies from "js-cookie";
import SecondaryProfile from "../../UserProfile/SecondaryProfile";

const NavBar = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const role = Cookies.get("role")?.toLowerCase();

  const handleNavigate = () => router.push("/dashboard");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
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
          {role === "teacher" && isClient && (
            <AddIcon className="cursor-pointer" onClick={handleOpen} />
          )}

          {/* <NavBarProfile
            avatarSrc="/my_profile.jpeg"
            avatarHeight={50}
            avatarWidth={50}
          /> */}
          <SecondaryProfile
            shouldOpenModal={true}
            flexOrder="order-1"
            avatarHeight={50}
            avatarWidth={50}
            avatarSrc="/profile_avatar.jpeg"
            className="flex items-center gap-8 cursor-pointer text-lg font-medium leading-5 text-midnightBlack"
          />
        </div>
      </nav>
      <InputBoxModal open={open} onClose={handleClose} />
    </>
  );
};

export default NavBar;
