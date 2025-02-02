"use client";
import React from "react";
import { Modal, Box, IconButton } from "@mui/material";
import SecondaryHeading from "../typography/SecondaryHeading";
import PrimaryInputField from "../inputFields/PrimaryInputField";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../Buttons/PrimaryButton";

interface CreateCourseModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateCourseModal: React.FC<CreateCourseModalProps> = ({
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        className="bg-[#696969]/[0.40] p-6 rounded-lg shadow-lg"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "30%",
          bgcolor: "var(--lightGray)",
          p: 4,
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          borderRadius: 2,
          outline: "none",
          border: "none",
          boxShadow: 24,
        }}
      >
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: "gray",
          }}
        >
          <CloseIcon />
        </IconButton>

        <SecondaryHeading text="Create Course" />
        <div className="bg-white p-5 mt-4 flex flex-col gap-5">
          <PrimaryInputField
            label="Course Name"
            placeholder="Course Name"
            variant="standard"
          />
          <PrimaryInputField
            label="Book Name"
            placeholder="Add your book name"
            variant="standard"
            hasExpandableFields
          />
        </div>

        <div className="flex justify-end gap-4 mt-12">
          <PrimaryButton
            onClick={onClose}
            text="Cancel"
            className="text-ashGray hover:bg-slate-200 bg-white/[0.12] text-xl px-6 py-3 rounded font-medium leading-5"
            borderColor="border-ashGray"
          />
          <PrimaryButton
            text="Create"
            className="text-white hover:bg-indigo-600 bg-skyBlue text-xl px-6 py-3 rounded font-medium leading-5"
          />
        </div>
      </Box>
    </Modal>
  );
};

export default CreateCourseModal;
