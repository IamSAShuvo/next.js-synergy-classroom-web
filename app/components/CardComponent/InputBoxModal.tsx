"use client";
import React, { useEffect, useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import SecondaryHeading from "../typography/SecondaryHeading";
import PrimaryInputField from "../inputFields/PrimaryInputField";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "@/app/store/slices/courseCreateSlice";
import { AppDispatch, RootState } from "@/app/store/store";

interface CreateCourseModalProps {
  open: boolean;
  onClose: () => void;
}

const CreateCourseModal: React.FC<CreateCourseModalProps> = ({
  open,
  onClose,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [courseData, setCourseData] = useState({
    title: "",
    books: [
      {
        name: "",
        author: "",
      },
    ],
  });

  const { isLoading, success, error } = useSelector(
    (state: RootState) => state.courseCreate
  );

  useEffect(() => {
    if (success) {
      alert("Course created successfully!");
    }
    if (error) {
      alert(`Error: ${error}`);
    }
  }, [success, error]);

  const handleCreateCourse = () => {
    dispatch(createCourse(courseData));
    onClose();
  };

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
            value={courseData.title}
            onChange={(e) =>
              setCourseData({ ...courseData, title: e.target.value })
            }
          />
          <PrimaryInputField
            label="Book Name"
            placeholder="Add your book name"
            variant="standard"
            value={courseData.books[0].name}
            onChange={(e) =>
              setCourseData({
                ...courseData,
                books: [{ ...courseData.books[0], name: e.target.value }],
              })
            }
            hasExpandableFields
          >
            <PrimaryInputField
              label="Author Name"
              variant="standard"
              placeholder="Book Author"
              value={courseData.books[0].author}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  books: [
                    {
                      ...courseData.books[0],
                      author: e.target.value,
                    },
                  ],
                })
              }
            />
            <PrimaryInputField
              label="Book Name"
              placeholder="Add your book name"
              variant="standard"
              value={courseData.books[0].name}
              onChange={(e) =>
                setCourseData({
                  ...courseData,
                  books: [{ ...courseData.books[0], name: e.target.value }],
                })
              }
              hasExpandableFields
            />
          </PrimaryInputField>
        </div>

        <div className="flex justify-end gap-4 mt-12">
          <PrimaryButton
            onClick={onClose}
            text="Cancel"
            className="text-ashGray hover:bg-slate-200 bg-white/[0.12] text-xl px-6 py-3 rounded font-medium leading-5"
            borderColor="border-ashGray"
          />
          <PrimaryButton
            onClick={handleCreateCourse}
            text={isLoading ? "Creating..." : "Create"}
            className="text-white hover:bg-indigo-600 bg-skyBlue text-xl px-6 py-3 rounded font-medium leading-5"
          />
        </div>
      </Box>
    </Modal>
  );
};

export default CreateCourseModal;
