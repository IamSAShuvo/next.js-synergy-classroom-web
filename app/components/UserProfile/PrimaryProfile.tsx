import { Avatar } from "@mui/material";
import React, { FC } from "react";
import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

type PrimaryProfileProps = {
  avatarSrc: string;
  className?: string;
};

const PrimaryProfile: FC<PrimaryProfileProps> = ({
  avatarSrc,
  className = "",
}) => {
  const { user } = useSelector((state: RootState) => state.profile);
  const role = Cookies.get("role")?.toLowerCase();

  return (
    <div className={className}>
      <Avatar
        alt={user?.username}
        src={avatarSrc}
        sx={{
          height: 150,
          width: 150,
        }}
      />
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-medium text-3xl text-deepNavy">{user?.username}</h1>
        <p className="text-blueHaze font-normal text-xl">{role}</p>
      </div>
    </div>
  );
};

export default PrimaryProfile;
