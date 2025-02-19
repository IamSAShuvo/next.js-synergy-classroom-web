import React from "react";
import SecondaryProfile from "@/app/components/UserProfile/SecondaryProfile";
import DescriptionText from "@/app/components/typography/DescriptionText";
import ItemList from "@/app/components/typography/itemsList/ItemList";
import { Course } from "@/app/constants/constantData";

interface CourseDetailsSectionProps {
  courseData: Course;
}

const CourseDetailsSection: React.FC<CourseDetailsSectionProps> = ({
  courseData,
}) => {
  return (
    <section className="flex flex-col gap-8 p-5 border-2 rounded-md border-gray-300">
      <SecondaryProfile
        name={courseData.teacherName}
        avatarSrc="/profile_avatar.png"
        avatarHeight={60}
        avatarWidth={60}
        shouldOpenModal={false}
        className="flex items-center gap-3 text-xl font-normal leading-5 text-midnightBlack"
      />
      <div className="space-y-5">
        <DescriptionText
          text="Book List"
          color="text-steelBlue"
          fontSize="text-xl"
          lineHeight="leading-5"
        />
        <ItemList
          items={courseData.books.map((book) => book.name)}
          className="text-secondaryColor font-normal text-base leading-5"
          useNumber={true}
        />
      </div>
    </section>
  );
};

export default CourseDetailsSection;
