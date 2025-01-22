import React from "react";

const SectionDescription = ({
  text,
  color,
  fontSize,
}: {
  text: string;
  color: string;
  fontSize: string;
}) => {
  return (
    <h1 className={`font-normal ${fontSize} leading-[1.3125rem] ${color}`}>
      {text}
    </h1>
  );
};

export default SectionDescription;
