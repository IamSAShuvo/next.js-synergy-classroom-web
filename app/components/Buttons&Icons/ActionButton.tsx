import React, { FC } from "react";

interface ActionButtonProps {
  text: string;
  borderColor?: string;
  className?: string;
}
// ActionButton.defaultProps = {
//   fontSize: "text-xl",
//   textColor: "text-white",
//   hoverColor: "hover:bg-indigo-600",
//   bgColor: "bg-skyBlue",
// };

const ActionButton: FC<ActionButtonProps> = ({
  text,
  borderColor,
  className = "",
}) => {
  return (
    <button
      className={`${className} ${
        borderColor ? `${borderColor} border-[3px]` : ""
      }`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
