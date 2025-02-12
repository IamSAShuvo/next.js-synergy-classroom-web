import { Avatar } from "@mui/material";
import React, { FC } from "react";

type UserProfileProps = {
  name: string;
  role: string;
  avatarSrc: string;
  className?: string;
};

const UserProfile: FC<UserProfileProps> = ({
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
        <p className="text-shadowSteel font-normal text-xl">{role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
