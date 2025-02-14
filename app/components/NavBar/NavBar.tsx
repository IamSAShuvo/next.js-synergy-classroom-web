"use client";
import Image from "next/image";
import React, { useState } from "react";
// import NavBarProfile from "../UserProfile/NavBarProfile";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import InputBoxModal from "../CardComponent/InputBoxModal";
import SecondaryProfile from "../UserProfile/SecondaryProfile";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleNavigate = () => router.push("/dashboard");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const role = ["Software Engineer", "Frontend Developer", "Backend Developer"];
  return (
    <React.Fragment>
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
          <AddIcon className="cursor-pointer" onClick={handleOpen} />
          {/* <NavBarProfile
            roles={role}
            avatarSrc="/my_profile.jpeg"
            name="Salman Aziz"
            avatarHeight={50}
            avatarWidth={50}
          /> */}
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
      <InputBoxModal open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export default NavBar;
