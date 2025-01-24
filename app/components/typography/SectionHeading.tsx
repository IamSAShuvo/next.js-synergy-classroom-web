import React from "react";

interface SectionHeadingProps {
  text: string;
  fontSize: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ text, fontSize }) => {
  return (
    <h3 className={`font-medium ${fontSize} leading-9 text-white`}>{text}</h3>
  );
};

export default SectionHeading;
