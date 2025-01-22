import React from "react";

interface SectionDescriptionProps {
  text: string;
  color: string;
  fontSize: string;
}

const SectionDescription: React.FC<SectionDescriptionProps> = ({
  text,
  color,
  fontSize,
}) => {
  return (
    <h1 className={`font-normal ${fontSize} leading-5 ${color}`}>{text}</h1>
  );
};

export default SectionDescription;
