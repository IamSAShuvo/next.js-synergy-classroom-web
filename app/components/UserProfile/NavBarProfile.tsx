"use client";
import React, { FC, useState } from "react";
import { Avatar } from "@mui/material";
import ProfileModal from "../CardComponent/ProfileModal";

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
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div
      onClick={handleOpen}
      className="flex items-center cursor-pointer gap-8 text-lg font-medium leading-5 text-midnightBlack"
    >
      <h1>{name}</h1>
      <Avatar
        alt={name}
        src={avatarSrc}
        sx={{ height: avatarHeight, width: avatarWidth }}
        className=""
      />

      {open && (
        <ProfileModal
          name={name}
          avatarSrc={avatarSrc}
          roles={roles}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default NavBarProfile;
