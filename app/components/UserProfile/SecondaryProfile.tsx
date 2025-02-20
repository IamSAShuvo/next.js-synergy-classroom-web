import React, { FC, useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { fetchProfile } from "@/app/store/slices/profileSlice";
import PrimaryPoppers from "../CardComponent/PrimaryPoppers";

interface SecondaryProfileProps {
  avatarSrc: string;
  avatarHeight?: number;
  avatarWidth?: number;
  className?: string;
  flexOrder?: string;
  shouldOpenModal: boolean;
}

const SecondaryProfile: FC<SecondaryProfileProps> = ({
  avatarSrc,
  avatarHeight = 40,
  avatarWidth = 40,
  className = "",
  flexOrder,
  shouldOpenModal,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const anchorRef = useRef<HTMLDivElement | null>(null);

  const { profile } = useSelector((state: RootState) => state.profile);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  if (!isClient) return null;

  return (
    <>
      <div ref={anchorRef} onClick={handleToggle} className={className}>
        <Avatar
          alt={profile?.name}
          src={avatarSrc}
          sx={{ height: avatarHeight, width: avatarWidth }}
          className={flexOrder}
        />
        <h1>{profile?.name}</h1>
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
