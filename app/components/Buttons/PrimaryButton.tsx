import React, { FC } from "react";

interface PrimaryButtonProps {
  text: string;
  borderColor?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

const PrimaryButton: FC<PrimaryButtonProps> = ({
  text,
  borderColor,
  className = "",
  onClick,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`${className} ${
        borderColor ? `${borderColor} border-[3px]` : ""
      } ${disabled ? "bg-gray-500 cursor-not-allowed" : ""}`}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
