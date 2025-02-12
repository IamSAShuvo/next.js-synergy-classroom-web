import React, { FC, useState } from "react";
import { Avatar } from "@mui/material";
import PrimaryModal from "../CardComponent/PrimaryModal";

interface SecondaryProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  className?: string;
  placeOrder?: string;
}

const SecondaryProfile: FC<SecondaryProfileProps> = ({
  name,
  avatarSrc,
  avatarHeight,
  avatarWidth,
  className = "",
  placeOrder,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div onClick={() => setOpen(true)} className={className}>
        <Avatar
          alt={name}
          src={avatarSrc}
          sx={{ height: avatarHeight, width: avatarWidth }}
          className={placeOrder}
        />
        <h1>{name}</h1>
      </div>
      <PrimaryModal
        open={open}
        setOpen={setOpen}
        avatarSrc="/profile_avatar.jpeg"
        name={name}
      />
    </>
  );
};

export default SecondaryProfile;
