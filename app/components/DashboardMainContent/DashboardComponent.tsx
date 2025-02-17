"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import SecondaryCard from "../CardComponent/SecondaryCard";
import SectionHeading from "../typography/SectionHeading";
import DescriptionText from "../typography/DescriptionText";
import ItemList from "../typography/itemsList/ItemList";
import NumberBadge from "../typography/NumberBadge";
import PrimaryButton from "../Buttons/PrimaryButton";
import { courseList } from "@/app/constantData/demoData";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { classroomData } from "@/app/constants/classroomData";

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
          <React.Fragment key={course.id}>
            <SecondaryCard
              onClick={() => {
                handleCardClick(course.id);
              }}
              className="w-full mx-auto bg-white rounded-2xl shadow-lg"
              header={
                <>
                  <SectionHeading
                    text="Electrical Circuit 01"
                    className="font-medium text-2xl leading-9 text-white"
                  />
                  <DescriptionText
                    color="text-white"
                    fontSize="text-sm"
                    text={`Section - ${course.Section}`}
                    lineHeight="leading-5"
                  />
                  <DescriptionText
                    color="text-white"
                    fontSize="text-sm"
                    text={`Course Teacher - ${course.teacherName}`}
                    lineHeight="leading-5"
                  />
                </>
              }
              content={
                <>
                  <div className="flex justify-between mt-5">
                    <DescriptionText
                      text={`Book List`}
                      color="text-primaryColor"
                      fontSize="text-sm"
                      lineHeight="leading-5"
                    />
                    <DescriptionText
                      text={`Author`}
                      color="text-primaryColor"
                      fontSize="text-sm"
                      lineHeight="leading-5"
                    />
                  </div>
                  <div className="flex justify-between mb-6">
                    <ItemList
                      items={course.bookList}
                      className="text-primaryColor font-medium text-ex_sm leading-4"
                      useNumber={true}
                    />
                    <ItemList
                      items={course.authorList}
                      className="text-secondaryColor font-normal text-ex_sm leading-4"
                      useNumber={false}
                    />
                  </div>
                </>
              }
              footer={
                <div className="border-t-2 px-5 py-2 text-center flex items-center justify-between">
                  {!isEnrolled ? (
                    <PrimaryButton
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEnroll(course.id);
                      }}
                      text="Enroll"
                      className="bg-skyBlue text-xs hover:bg-indigo-600 text-white px-6 py-3 rounded font-medium leading-5"
                      disabled={isEnrolled}
                    />
                  ) : (
                    <CheckCircleIcon
                      className="text-green-500"
                      fontSize="large"
                    />
                  )}
                  <NumberBadge count={classroomData.studentCount} />
                </div>
              }
            ></SecondaryCard>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default DashboardComponent;
