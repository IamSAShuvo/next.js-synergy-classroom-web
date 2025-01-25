import { Avatar } from "@mui/material";
import React, { FC } from "react";

interface CardProfileProps {
  name: string;
  avatarSrc: string;
  fontSize: string;
  fontWeight: string;
  avatarHeight?: number;
  avatarWidth?: number;
}

const CardProfile: FC<CardProfileProps> = ({
  name,
  avatarSrc,
  fontSize,
  fontWeight,
  avatarHeight,
  avatarWidth,
}) => {
  return (
    <div
      className={`flex items-center gap-3 ${fontSize} ${fontWeight} leading-5 text-midnightBlack`}
    >
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
