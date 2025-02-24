"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/app/store/store";
import { fetchCourses } from "@/app/store/slices/dashboardSlice";
import SecondaryCard from "../../CardComponent/SecondaryCard";
import LinkText from "../../links/LinkText";
import { fetchCourseDetails } from "@/app/store/slices/courseDetailsSlice";
import Cookies from "js-cookie";
import { fetchEnrolledStudents } from "@/app/store/slices/enrolledStudentsSlice";
import CardHeader from "./header/CardHeader";
import CardContent from "./content/CardContent";

const DashboardEnrolledCourse = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { courses, teacherName, loading, error } = useSelector(
    (state: RootState) => state.courses
  );

  const { success } = useSelector((state: RootState) => state.courseCreate);

  useEffect(() => {
    if (success) {
      dispatch(fetchCourses());
    }
  }, [success, dispatch]);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  const role = Cookies.get("role")?.toLowerCase();

  const handleCardClick = (courseId: number) => {
    dispatch(fetchCourseDetails({ courseId: courseId.toString() }));
    dispatch(fetchEnrolledStudents({ courseId: courseId.toString() }));
    router.push(`/dashboard/course-details/${courseId}`);
  };

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
              <CardHeader
                title={course.title || course.courseTitle}
                teacherName={teacherName}
                teachers={course.teacherName}
              />
            }
            content={<CardContent books={course.books} />}
          ></SecondaryCard>
        ))}
      </div>
    </div>
  );
};

export default DashboardEnrolledCourse;
