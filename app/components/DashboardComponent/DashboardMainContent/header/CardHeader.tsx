import React, { FC } from "react";
import DescriptionText from "@/app/components/typography/DescriptionText";
import SectionHeading from "@/app/components/typography/SectionHeading";

interface CourseCardHeaderProps {
  title: string;
  teacherName: string | null;
  teachers?: { name: string }[];
}

const CardHeader: FC<CourseCardHeaderProps> = ({
  title,
  teacherName,
  teachers,
}) => {
  return (
    <>
      <SectionHeading
        text={title}
        className="font-medium text-2xl leading-9 text-white"
      />
      <DescriptionText
        className="text-white text-sm leading-5"
        text={`Course Teacher - ${
          teachers
            ? teachers.map((teacher) => teacher.name).join(", ")
            : teacherName || "N/A"
        }`}
      />
    </>
  );
};

export default CardHeader;
