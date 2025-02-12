import { Avatar } from "@mui/material";
import React, { FC } from "react";

type PrimaryProfileProps = {
  name: string;
  role: string;
  avatarSrc: string;
  className?: string;
};

const PrimaryProfile: FC<PrimaryProfileProps> = ({
  name,
  role,
  avatarSrc,
  className = "",
}) => {
  return (
    <div className={className}>
      <Avatar
        className=""
        alt={name}
        src={avatarSrc}
        sx={{
          height: 150,
          width: 150,
        }}
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-medium text-3xl text-deepNavy">{name}</h1>
        <p className="text-blueHaze font-normal text-xl">{role}</p>
      </div>
    </div>
  );
};

export default PrimaryProfile;
