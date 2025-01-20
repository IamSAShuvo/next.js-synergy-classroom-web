import React from "react";

const ActionButton = ({
  text,
  textColor,
  hoverColor,
  bgColor,
  borderColor,
}: {
  text: string;
  textColor: string;
  hoverColor: string;
  bgColor: string;
  borderColor?: string;
}) => {
  return (
    <button
      className={`mx-auto ${hoverColor} ${bgColor} ${
        borderColor ? `${borderColor} border-[3px]` : ""
      } px-6 py-[10px] rounded ${textColor} font-poppins font-medium text-xl leading-5`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
