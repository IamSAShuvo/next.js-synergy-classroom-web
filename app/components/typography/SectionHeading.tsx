import React from "react";

interface SectionHeadingProps {
  text: string;
  fontSize: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, fontSize }) => {
  return (
    <h1 className={`font-medium ${fontSize} leading-9 text-white`}>{text}</h1>
  );
};

export default SectionHeading;
