"use client";
import React, { FC, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import PrimaryPoppers from "../CardComponent/PrimaryPoppers";

interface NavBarProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  roles: string;
}

const NavBarProfile: FC<NavBarProfileProps> = ({
  roles,
  name,
  avatarSrc,
  avatarHeight,
  avatarWidth,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <React.Fragment>
      <div
        ref={anchorRef}
        onClick={handleToggle}
        className="flex items-center cursor-pointer gap-8 text-lg font-medium leading-5 text-midnightBlack"
      >
        <h1>{name}</h1>
        <Avatar
          alt={name}
          src={avatarSrc}
          sx={{ height: avatarHeight, width: avatarWidth }}
          className=""
        />
      </div>

      <PrimaryPoppers
        open={open}
        setOpen={setOpen}
        avatarSrc={avatarSrc}
        name={name}
        roles={roles}
        anchorRef={anchorRef}
      />
    </React.Fragment>
  );
};

export default NavBarProfile;
