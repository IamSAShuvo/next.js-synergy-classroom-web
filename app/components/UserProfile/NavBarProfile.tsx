"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import PrimaryPoppers from "../CardComponent/PrimaryPoppers";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/store";
import { fetchProfile } from "@/app/store/slices/profileSlice";

interface NavBarProfileProps {
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
}

const NavBarProfile: FC<NavBarProfileProps> = ({
  avatarSrc,
  avatarHeight,
  avatarWidth,
}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch<AppDispatch>();

  const { profile } = useSelector((state: RootState) => state.profile);
  console.log({ profile });

  // Fetch courses on mount
  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

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
        <h1>{profile?.name}</h1>
        <Avatar
          alt={profile?.name}
          src={avatarSrc}
          sx={{ height: avatarHeight, width: avatarWidth }}
        />
      </div>

      <PrimaryPoppers
        open={open}
        setOpen={setOpen}
        avatarSrc={avatarSrc}
        anchorRef={anchorRef}
      />
    </React.Fragment>
  );
};

export default NavBarProfile;
