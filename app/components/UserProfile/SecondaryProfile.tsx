import { Avatar } from "@mui/material";
import React, { FC } from "react";

interface SecondaryProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  className?: string;
  flexOrder?: string;
}

const SecondaryProfile: FC<SecondaryProfileProps> = ({
  name,
  avatarSrc,
  avatarHeight,
  avatarWidth,
  className = "",
  flexOrder,
}) => {
  return (
    <div className={className}>
      <Avatar
        className={flexOrder}
        alt={name}
        src={avatarSrc}
        sx={{ height: avatarHeight, width: avatarWidth }}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default SecondaryProfile;
