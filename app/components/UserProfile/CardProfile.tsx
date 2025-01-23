import { Avatar } from "@mui/material";
import React from "react";

const CourseCardProfile: React.FC = () => {
  return (
    <div className="flex items-center gap-3 text-xl font-normal leading-5 text-midnightBlack">
      <Avatar
        className=""
        alt="Salman Aziz"
        src="/profile_avatar.jpeg"
        sx={{ height: 60, width: 60 }}
      />
      <h1>Salman Aziz</h1>
    </div>
  );
};

export default CourseCardProfile;
