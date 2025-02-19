import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SectionHeading from "@/app/components/typography/SectionHeading";
import DescriptionText from "@/app/components/typography/DescriptionText";
import { Course } from "@/app/constants/constantData";

interface SectionHeaderProps {
  courseData: Course;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ courseData }) => {
  return (
    <header
      className="relative bg-cover bg-center px-8 pt-7 pb-20  rounded-md"
      style={{ backgroundImage: "url(/card_bg.jpeg)" }}
    >
      <div className="absolute top-8 right-4 text-white cursor-pointer">
        <MoreVertIcon className="hover:bg-gray-200/45 rounded-full" />
      </div>
      <SectionHeading
        text="Electrical Circuit 01"
        className="font-medium text-4xl leading-9 text-white mb-8"
      />
      <DescriptionText
        text={`Course Teacher - ${courseData.teacherName}`}
        fontSize="text-2xl"
        color="text-white"
        lineHeight="leading-5"
      />
    </header>
  );
};

export default SectionHeader;
