"use client";
import React, { FC, useState } from "react";
import { Avatar } from "@mui/material";
import PrimaryModal from "../CardComponent/PrimaryModal";

interface NavBarProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  roles: string[];
}

const NavBarProfile: FC<NavBarProfileProps> = ({
  roles,
  name,
  avatarSrc,
  avatarHeight,
  avatarWidth,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="flex items-center cursor-pointer gap-8 text-lg font-medium leading-5 text-midnightBlack"
      >
        <h1>{name}</h1>
        <Avatar
          alt={name}
          src={avatarSrc}
          sx={{ height: avatarHeight, width: avatarWidth }}
          className=""
        />
      </div>
      <PrimaryModal
        open={open}
        setOpen={setOpen}
        avatarSrc={avatarSrc}
        name={name}
        roles={roles}
      />
    </>
  );
};

export default NavBarProfile;
