"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/store";
import { fetchCourses } from "@/app/store/slices/dashboardSlice";
import SecondaryCard from "../CardComponent/SecondaryCard";
import SectionHeading from "../typography/SectionHeading";
import DescriptionText from "../typography/DescriptionText";
import ItemList from "../typography/itemsList/ItemList";
import LinkText from "../links/LinkText";
import { fetchCourseDetails } from "@/app/store/slices/courseDetailsSlice";
import Cookies from "js-cookie";
import { fetchEnrolledStudents } from "@/app/store/slices/enrolledStudentsSlice";
// import { refreshToken } from "@/app/store/slices/authenticationSlice/authActions/authActions";
// import {
//   refreshToken,
//   logout,
// } from "@/app/store/slices/authenticationSlice/refreshTokenSlice";

const DashboardMainContent = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { courses, teacherName, loading, error } = useSelector(
    (state: RootState) => state.courses
  );

  console.log("dashboard courses", courses);

  const role = Cookies.get("role")?.toLowerCase();

  const handleCardClick = (courseId: number) => {
    dispatch(fetchCourseDetails({ courseId: courseId.toString() }));
    dispatch(fetchEnrolledStudents({ courseId: courseId.toString() }));
    router.push(`/dashboard/course-details/${courseId}`);
  };

  // // * Refresh token test
  // const { accessToken, refresh_Token, status } = useSelector(
  //   (state: RootState) => state.refreshToken
  // );

  // const handleRefresh = () => {
  //   dispatch(refreshToken());
  // };

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <div>Loading courses...</div>;
  if (error)
    return (
      <div>
        Error:{" "}
        {typeof error === "string"
          ? error
          : error.message || "An error occurred"}
      </div>
    );

  return (
    <div className="flex flex-col mx-7 my-6 gap-4">
      {mounted && role === "student" && (
        <LinkText
          className="font-normal text-sm leading-5 text-skyBlue hover:underline self-end"
          url="/dashboard/all-courses"
          text="See All"
        />
      )}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {courses.map((course) => (
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
                  text={`Course Teacher - ${
                    course.teacherName
                      ? course.teacherName
                          .map((teacher) => teacher.name)
                          .join(", ")
                      : teacherName || "N/A"
                  }`}
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
          ></SecondaryCard>
        ))}
      </div>

      {/* Refresh token test */}
      {/* <div>
        <h2 className="text-2xl"> Access Token: </h2>
        <p>
          {typeof accessToken === "string" ? accessToken : "No token available"}
        </p>

        <h2 className="text-2xl"> Refresh Token: </h2>
        <p>
          {typeof refresh_Token === "string"
            ? refresh_Token
            : "No token available"}
        </p>

        {status === "loading" && <p>Refreshing token...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button
          onClick={handleRefresh}
          disabled={status === "loading"}
          className="bg-green-500 hover:bg-green-200 p-6 border-2 rounded-lg"
        >
          Click to get RefreshToken
        </button>

        <button
          className="bg-green-500 hover:bg-green-200 p-6 border-2 rounded-lg"
          onClick={() => dispatch(logout())}
        >
          Logout
        </button>
      </div> */}
    </div>
  );
};

export default DashboardMainContent;
