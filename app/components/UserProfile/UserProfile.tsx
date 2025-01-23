import { Avatar } from "@mui/material";
import React from "react";

type UserProfileProps = {
  name: string;
  role: string;
  imgSrc: string;
};

const UserProfile: React.FC<UserProfileProps> = ({ name, role, imgSrc }) => {
  return (
    <div className="flex flex-col items-center gap-7">
      <Avatar
        className=""
        alt="Salman Aziz"
        src={imgSrc}
        sx={{
          height: 150,
          width: 150,
        }}
      />
      <div className="flex flex-col items-center gap-2 ">
        <h1 className="font-medium text-3xl text-deepNavy">{name}</h1>
        <p className="text-shadowSteel font-normal text-xl">{role}</p>
      </div>
    </div>
  );
};

export default UserProfile;
