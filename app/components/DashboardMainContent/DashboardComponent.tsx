"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SecondaryCard from "../CardComponent/SecondaryCard";
import { courseList } from "@/app/constants/constantData";
import CardHeaderComponent from "./header/CardHeaderComponent";
import CardMainContent from "./mainContent/CardMainContent";
import CardFooterComponent from "./footer/CardFooterComponent";

console.log("courseList from dashboardComponent", courseList);

const DashboardComponent = () => {
  const router = useRouter();
  const [enrolledCourses, setEnrolledCourses] = useState<number[]>([]);

  const handleCardClick = (id: number) => {
    router.push(`/dashboard/course-details/${id}`);
  };

  const handleEnroll = (id: number) => {
    setEnrolledCourses((prev) => [...prev, id]);
  };

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-5">
      {courseList.map((course) => {
        const isEnrolled = enrolledCourses.includes(course.id);
        return (
          <div key={course.id}>
            <SecondaryCard
              onClick={() => {
                handleCardClick(course.id);
              }}
              className="w-full mx-auto bg-white rounded-2xl shadow-lg"
              header={<CardHeaderComponent course={course} />}
              content={<CardMainContent books={course.books} />}
              footer={
                <CardFooterComponent
                  isEnrolled={isEnrolled}
                  onEnroll={() => handleEnroll(course.id)}
                  studentCount={course.studentCount}
                />
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default DashboardComponent;
