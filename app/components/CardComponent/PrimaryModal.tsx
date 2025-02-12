import React, { FC } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryProfile from "../UserProfile/PrimaryProfile";
import PrimaryButton from "../Buttons/PrimaryButton";

interface PrimaryModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  name: string;
  avatarSrc: string;
}

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "380px",
  bgcolor: "white",
  borderRadius: "16px",
  boxShadow: "0px 8px 30px rgba(0, 0, 0, 0.2)",
  p: 4,
  outline: "none",
  maxHeight: "90vh",
  overflowY: "auto",
};

const PrimaryModal: FC<PrimaryModalProps> = ({
  name,
  avatarSrc,
  open,
  setOpen,
}) => {
  return (
    <Modal open={open} onClose={() => setOpen(false)}>
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

        <PrimaryProfile
          className="flex flex-col items-center gap-7"
          avatarSrc={avatarSrc}
          name={name}
        />

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

export default PrimaryModal;
