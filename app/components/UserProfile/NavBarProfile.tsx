import { Avatar } from "@mui/material";
import React from "react";

const NavBarProfile = () => {
  return (
    <div className="flex items-center gap-8 text-lg font-medium leading-5 text-midnightBlack">
      <h1>Salman Aziz</h1>
      <Avatar
        className=""
        alt="Salman Aziz"
        src="/profile_avatar.jpeg"
        sx={{ height: 50, width: 50 }}
      />
    </div>
  );
};

export default NavBarProfile;
