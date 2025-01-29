import React, { FC } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UserProfile from "../UserProfile/UserProfile";
import PrimaryButton from "../Buttons/PrimaryButton";

interface ProfileModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  avatarSrc: string;
  roles: string[];
}

const modalStyle = {
  position: "absolute",
  bottom: "4rem",
  right: "-10rem",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "420px",
  bgcolor: "white",
  borderRadius: "16px",
  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
  p: 4,
  outline: "none",
  maxHeight: "90vh",
  overflowY: "auto",
};

const ProfileModal: FC<ProfileModalProps> = ({
  name,
  avatarSrc,
  roles,
  open,
  setOpen,
}) => {
  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      container={() => document.body}
    >
      <Box sx={modalStyle}>
        <IconButton
          sx={{
            position: "absolute",
            top: "16px",
            right: "16px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          }}
          onClick={() => setOpen(false)}
        >
          <CloseIcon />
        </IconButton>

        <UserProfile avatarSrc={avatarSrc} name={name} role={roles[0]} />

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <div className="flex items-center justify-between mt-8">
            <p>username:</p>
            <span>{name}</span>
          </div>
        </Box>

        <PrimaryButton
          text="Log out"
          className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6 mt-8"
        />
      </Box>
    </Modal>
  );
};

export default ProfileModal;
