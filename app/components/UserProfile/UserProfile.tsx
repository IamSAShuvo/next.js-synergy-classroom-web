import { RootState } from "@/app/store/store";
import { Avatar } from "@mui/material";
import React, { FC } from "react";
import { useSelector } from "react-redux";

type UserProfileProps = {
  avatarSrc: string;
};

const UserProfile: FC<UserProfileProps> = ({ avatarSrc }) => {
  const { role } = useSelector((state: RootState) => state.courses);
  const { user } = useSelector((state: RootState) => state.profile);
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
