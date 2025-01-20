import HomeIcon from "@mui/icons-material/Home";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import React from "react";
const ButtonWithIcons = () => {
  return (
    <div className="w-1/5 py-5 px-4 mx-auto active:bg-buttonColor font-poppins active:text-white text-[#030D25]">
      <button className="flex justify-end items-center">
        <HomeIcon />
        <span>Home</span>
        <ChevronRightIcon />
      </button>
    </div>
  );
};

export default ButtonWithIcons;
