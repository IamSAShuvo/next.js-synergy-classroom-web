import React from "react";
const SectionTitle = ({
  text,
  fontSize,
}: {
  text: string;
  fontSize: string;
}) => {
  return (
    <h1
      className={`font-poppins font-medium ${fontSize} leading-[2.375rem] text-white`}
    >
      {text}
    </h1>
  );
};

export default SectionTitle;
