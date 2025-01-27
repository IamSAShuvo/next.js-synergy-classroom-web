import React, { FC } from "react";

interface ActionButtonProps {
  text: string;
  borderColor?: string;
  className?: string;
}

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
