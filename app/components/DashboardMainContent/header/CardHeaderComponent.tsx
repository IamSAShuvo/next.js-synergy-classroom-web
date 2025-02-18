import React, { FC } from "react";
import DescriptionText from "../../typography/DescriptionText";
import SectionHeading from "../../typography/SectionHeading";
import { Course } from "@/app/constants/constantData";

const CardHeaderComponent: FC<{ course: Course }> = ({ course }) => (
  <>
    <SectionHeading
      text="Electrical Circuit 01"
      className="font-medium text-2xl leading-9 text-white"
    />
    <DescriptionText
      color="text-white"
      fontSize="text-sm"
      text={`Section - ${course.section}`}
      lineHeight="leading-5"
    />
    <DescriptionText
      color="text-white"
      fontSize="text-sm"
      text={`Course Teacher - ${course.teacherName}`}
      lineHeight="leading-5"
    />
  </>
);

export default CardHeaderComponent;
