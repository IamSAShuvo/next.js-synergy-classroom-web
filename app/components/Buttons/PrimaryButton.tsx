import React, { FC } from "react";

interface PrimaryButtonProps {
  text: string;
  borderColor?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  borderColor,
  className = "",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        borderColor ? `${borderColor} border-[3px]` : ""
      }`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
