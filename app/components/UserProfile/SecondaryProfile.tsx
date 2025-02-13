import React, { FC, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import PrimaryPoppers from "../CardComponent/PrimaryPoppers";

interface SecondaryProfileProps {
  name: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  className?: string;
  placeOrder?: string;
  shouldOpenModal: true | false;
}

const SecondaryProfile: FC<SecondaryProfileProps> = ({
  name,
  avatarSrc,
  avatarHeight,
  avatarWidth,
  className = "",
  placeOrder,
  shouldOpenModal,
}) => {
  const [open, setOpen] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <React.Fragment>
      <div ref={anchorRef} onClick={handleToggle} className={className}>
        <Avatar
          alt={name}
          src={avatarSrc}
          sx={{ height: avatarHeight, width: avatarWidth }}
          className={placeOrder}
        />
        <h1>{name}</h1>
      </div>
      {shouldOpenModal && (
        <PrimaryPoppers
          open={open}
          setOpen={setOpen}
          anchorRef={anchorRef}
          avatarSrc="/profile_avatar.jpeg"
        />
      )}
    </React.Fragment>
  );
};

export default SecondaryProfile;
