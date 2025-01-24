import React, { FC } from "react";

interface ActionButtonProps {
  fontSize: string;
  text: string;
  textColor: string;
  hoverColor: string;
  bgColor: string;
  borderColor?: string;
}

const ActionButton: FC<ActionButtonProps> = ({
  fontSize,
  text,
  textColor,
  hoverColor,
  bgColor,
  borderColor,
}) => {
  return (
    <button
      className={`mx-auto ${hoverColor} ${bgColor} ${
        borderColor ? `${borderColor} border-[3px]` : ""
      } px-6 py-[10px] rounded ${textColor} font-medium ${fontSize} leading-5`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
