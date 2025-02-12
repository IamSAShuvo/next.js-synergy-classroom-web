import { Avatar } from "@mui/material";
import React, { FC } from "react";

interface NavBarProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  className?: string;
}
const NavBarProfile: FC<NavBarProfileProps> = ({
  name,
  avatarSrc,
  avatarHeight,
  avatarWidth,
  className = "",
}) => {
  return (
    <div className={className}>
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
