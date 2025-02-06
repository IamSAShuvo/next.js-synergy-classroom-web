import { RootState } from "@/app/store/store";
import { Avatar } from "@mui/material";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

type UserProfileProps = {
  avatarSrc: string;
};

const UserProfile: FC<UserProfileProps> = ({ avatarSrc }) => {
  const { user } = useSelector((state: RootState) => state.profile);
  const role = Cookies.get("role")?.toLowerCase();
  return (
    <div className="flex flex-col items-center gap-7">
      <Avatar
        className=""
        alt="Salman Aziz"
        src={avatarSrc}
        sx={{
          height: 150,
          width: 150,
        }}
      />
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="font-medium text-3xl text-deepNavy">{user?.username}</h1>
        <p className="text-blueHaze font-normal text-xl">{role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
