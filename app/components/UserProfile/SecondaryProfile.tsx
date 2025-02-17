import React, { FC, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import PrimaryPoppers from "../CardComponent/PrimaryPoppers";

interface SecondaryProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  className?: string;
  flexOrder?: string;
  shouldOpenModal: boolean;
}

const SecondaryProfile: FC<SecondaryProfileProps> = ({
  name,
  avatarSrc,
  avatarHeight = 40,
  avatarWidth = 40,
  className = "",
  flexOrder,
  shouldOpenModal,
}) => {
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <div ref={anchorRef} onClick={handleToggle} className={className}>
        <Avatar
          alt={name}
          src={avatarSrc}
          sx={{ height: avatarHeight, width: avatarWidth }}
          className={flexOrder}
        />
        <h1>{name}</h1>
      </div>
      {shouldOpenModal && (
        <PrimaryPoppers
          open={open}
          setOpen={setOpen}
          anchorRef={anchorRef}
          userName={name}
          avatarSrc="/profile_avatar.jpeg"
        />
      )}
    </>
  );
};

export default SecondaryProfile;
