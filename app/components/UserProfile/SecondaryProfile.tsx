import React, { FC, useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import PrimaryPoppers from "../CardComponent/PrimaryPoppers";

interface SecondaryProfileProps {
  profileName?: string;
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  className?: string;
  flexOrder?: string;
  shouldOpenModal: boolean;
}

const SecondaryProfile: FC<SecondaryProfileProps> = ({
  profileName,
  avatarSrc,
  avatarHeight = 40,
  avatarWidth = 40,
  className = "",
  flexOrder,
  shouldOpenModal,
}) => {
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  if (!isClient) return null;

  return (
    <>
      <div ref={anchorRef} onClick={handleToggle} className={className}>
        <Avatar
          alt={profileName}
          src={avatarSrc}
          sx={{ height: avatarHeight, width: avatarWidth }}
          className={flexOrder}
        />
        <h1>{profileName}</h1>
      </div>
      {shouldOpenModal && (
        <PrimaryPoppers
          open={open}
          setOpen={setOpen}
          avatarSrc={avatarSrc}
          anchorRef={anchorRef}
        />
      )}
    </>
  );
};

export default React.memo(SecondaryProfile);
