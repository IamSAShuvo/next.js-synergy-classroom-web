"use client";
import React, { useEffect, useState } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import SecondaryHeading from "../typography/SecondaryHeading";
import PrimaryInputField from "../inputFields/PrimaryInputField";
import CloseIcon from "@mui/icons-material/Close";
import PrimaryButton from "../Buttons/PrimaryButton";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import { useDispatch, useSelector } from "react-redux";
import { createCourse } from "@/app/store/slices/courseCreateSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import { fetchCourses } from "@/app/store/slices/dashboardSlice";

interface InputBoxModalProps {
  open: boolean;
  onClose: () => void;
}

const InputBoxModal: React.FC<InputBoxModalProps> = ({ open, onClose }) => {
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

  const handleCreateCourse = async () => {
    try {
      const result = await dispatch(createCourse(courseData)).unwrap();

      if (result) {
        setCourseData({ title: "", books: [{ name: "", author: "" }] });
        onClose();
        dispatch(fetchCourses());
      }
    } catch {
      alert("Failed to create course");
    }
  };

  const handleModalClose = () => {
    setCourseData({
      title: "",
      books: [{ name: "", author: "" }],
    });
    onClose();
  };

  const addNewBookFields = () => {
    setCourseData((prev) => ({
      ...prev,
      books: [
        ...prev.books,
        {
          name: "",
          author: "",
        },
      ],
    }));
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
          onClick={handleModalClose}
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
            name="title"
            placeholder="Course Name"
            variant="standard"
            value={courseData.title}
            onChange={(e) =>
              setCourseData({ ...courseData, title: e.target.value })
            }
          />

          {courseData.books.map((book, index) => (
            <div key={index} className="flex flex-col gap-4 border p-3 rounded">
              <PrimaryInputField
                label={`Book Name ${index + 1}`}
                name={`bookName_${index}`}
                placeholder="Add your book name"
                variant="standard"
                value={book.name}
                onChange={(e) => {
                  const updatedBooks = [...courseData.books];
                  updatedBooks[index].name = e.target.value;
                  setCourseData({ ...courseData, books: updatedBooks });
                }}
              />
              <PrimaryInputField
                label={`Author Name ${index + 1}`}
                name={`author_${index}`}
                placeholder="Book Author"
                variant="standard"
                value={book.author}
                onChange={(e) => {
                  const updatedBooks = [...courseData.books];
                  updatedBooks[index].author = e.target.value;
                  setCourseData({ ...courseData, books: updatedBooks });
                }}
              />
            </div>
          ))}

          <div className="flex justify-end">
            <IconButton
              aria-label="Add new book fields"
              onClick={addNewBookFields}
            >
              <AddBoxOutlinedIcon />
            </IconButton>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-12">
          <PrimaryButton
            onClick={handleModalClose}
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

export default InputBoxModal;
