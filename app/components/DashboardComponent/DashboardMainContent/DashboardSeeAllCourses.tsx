"use client";
import React, { useEffect, useState } from "react";
import SecondaryCard from "../../CardComponent/SecondaryCard";
import SectionHeading from "../../typography/SectionHeading";
import DescriptionText from "../../typography/DescriptionText";
import ItemList from "../../typography/itemsList/ItemList";
import NumberBadge from "../../typography/NumberBadge";
import PrimaryButton from "../../Buttons/PrimaryButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { fetchCourseDetails } from "@/app/store/slices/courseDetailsSlice";
import {
  enrollInCourse,
  reset,
} from "@/app/store/slices/courseEnrollmentSlice";
import { seeAllCoursesReducers } from "@/app/store/slices/allCoursesSlice";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { fetchEnrolledStudents } from "@/app/store/slices/enrolledStudentsSlice";

const DashboardSeeAllCourses = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const { seeAllCourses } = useSelector(
    (state: RootState) => state.seeAllCourses
  );

  const { success, error } = useSelector(
    (state: RootState) => state.courseEnroll
  );

  useEffect(() => {
    dispatch(seeAllCoursesReducers());
  }, [dispatch]);

  useEffect(() => {
    if (success) {
      setSnackbarSeverity("success");
      setSnackbarMessage(`enrollment successful`);
      setOpenSnackbar(true);
      setTimeout(() => {
        dispatch(reset());
      }, 500);
    }
    if (error) {
      setSnackbarSeverity("error");
      setSnackbarMessage("An unexpected error occurred. Please try again.");
      setOpenSnackbar(true);
      setTimeout(() => {
        dispatch(reset());
      }, 500);
    }
  }, [success, error, dispatch]);

  const handleCardClick = (courseId: number) => {
    dispatch(fetchCourseDetails({ courseId: courseId.toString() }));
    dispatch(fetchEnrolledStudents({ courseId: courseId.toString() }));
    router.push(`/dashboard/course-details/${courseId}`);
  };

  const handleEnroll = async (courseId: number) => {
    try {
      const enrolledAction = await dispatch(enrollInCourse(courseId)).unwrap();
      if (enrolledAction) {
        setSnackbarSeverity("success");
        setSnackbarMessage("Enrollment successful");
        setOpenSnackbar(true);
        dispatch(seeAllCoursesReducers());
      }
    } catch {
      setSnackbarSeverity("error");
      setSnackbarMessage("An unexpected error occurred. Please try again.");
      setOpenSnackbar(true);
    }
  };

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5 m-7">
      {seeAllCourses.map((course) => (
        <SecondaryCard
          key={course.courseId || course.id}
          onClick={() => handleCardClick(course.courseId || course.id)}
          className="w-full mx-auto bg-white rounded-2xl shadow-lg"
          header={
            <>
              <SectionHeading
                text={course.title || course.courseTitle}
                className="font-medium text-2xl leading-9 text-white"
              />
              <DescriptionText
                className="text-white text-sm leading-5"
                text={`Course Teacher - ${course.teacherName}`}
              />
            </>
          }
          content={
            <>
              <div className="flex justify-between mt-5">
                <DescriptionText
                  text="Book List"
                  className="text-primaryColor text-sm leading-5"
                />
                <DescriptionText
                  text="Author"
                  className="text-primaryColor text-sm leading-5"
                />
              </div>
              <div className="flex justify-between mb-6">
                <ItemList
                  items={course.books.map((book) => book.name)}
                  className="text-primaryColor font-medium text-ex_sm leading-4"
                  useNumber={true}
                />
                <ItemList
                  items={course.books.map((book) => book.author)}
                  className="text-secondaryColor font-normal text-ex_sm leading-4"
                  useNumber={false}
                />
              </div>
            </>
          }
          enrollment={
            course.studentEnrolled ? (
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircleIcon className="w-6 h-6" />
                <span className="text-sm font-medium">Enrolled</span>
              </div>
            ) : (
              <PrimaryButton
                onClick={() => handleEnroll(course.courseId)}
                text="Enroll"
                className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
              />
            )
          }
          footer={<NumberBadge count={course.numberOfStudentsEnrolled} />}
        />
      ))}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={5000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{
            mb: 8,
            width: "100%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            borderRadius: "8px",
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default DashboardSeeAllCourses;
