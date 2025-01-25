import { Avatar } from "@mui/material";
import React, { FC } from "react";

interface NavBarProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
}
const NavBarProfile: FC<NavBarProfileProps> = ({
  name,
  avatarSrc,
  avatarHeight,
  avatarWidth,
}) => {
  return (
    <div className="flex items-center gap-8 text-lg font-medium leading-5 text-midnightBlack">
      <h1>{name}</h1>
      <Avatar
        className=""
        alt={name}
        src={avatarSrc}
        sx={{ height: avatarHeight, width: avatarWidth }}
      />
    </div>
  );
};

export default NavBarProfile;
