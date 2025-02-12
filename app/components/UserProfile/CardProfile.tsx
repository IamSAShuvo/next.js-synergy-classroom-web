import { Avatar } from "@mui/material";
import React, { FC } from "react";

interface CardProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  className?: string;
}

const CardProfile: FC<CardProfileProps> = ({
  name,
  avatarSrc,
  avatarHeight,
  avatarWidth,
  className = "",
}) => {
  return (
    <div className={className}>
      <Avatar
        className=""
        alt={name}
        src={avatarSrc}
        sx={{ height: avatarHeight, width: avatarWidth }}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default CardProfile;
