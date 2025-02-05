"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchCourses } from "@/app/store/slices/dashboardSlice";
import { RootState, AppDispatch } from "@/app/store/store";
import SecondaryCard from "../CardComponent/SecondaryCard";
import SectionHeading from "../typography/SectionHeading";
import DescriptionText from "../typography/DescriptionText";
import ItemList from "../typography/itemsList/ItemList";
import NumberBadge from "../typography/NumberBadge";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinkText from "../links/LinkText";
import { fetchCourseDetails } from "@/app/store/slices/courseDetailsSlice";

const DashboardMainContent = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { courses, teacherName, loading, error, role } = useSelector(
    (state: RootState) => state.courses
  );

  const handleCardClick = (courseId: number) => {
    dispatch(fetchCourseDetails({ courseId: courseId.toString() }));
    router.push(`/dashboard/course-details/${courseId}`);
  };

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  if (loading) return <div>Loading courses...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex flex-col mx-7 my-6 gap-4">
      {role === "student" && (
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
                  text={`Course Teacher - ${teacherName}`}
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
            footer={<NumberBadge count={course.courseId} />}
          >
            <CheckCircleIcon className="text-green-500" fontSize="large" />
          </SecondaryCard>
        ))}
      </div>
    </div>
  );
};

export default DashboardMainContent;
