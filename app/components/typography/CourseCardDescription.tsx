import React from "react";

const CourseCardDescription = ({
  text,
  color,
  fontSize,
}: {
  text: string;
  color: string;
  fontSize: string;
}) => {
  return (
    <h1
      className={`font-poppins font-normal ${fontSize} leading-[1.3125rem] ${color}`}
    >
      {text}
    </h1>
  );
};

export default CourseCardDescription;
