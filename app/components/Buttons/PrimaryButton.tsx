import React, { FC } from "react";
import classNames from "classnames";

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
  const buttonClasses = classNames(className, {
    [`${borderColor} border-[3px]`]: borderColor,
    "bg-gray-500 cursor-not-allowed": disabled,
  });

  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled}>
      {text}
    </button>
  );
};

export default PrimaryButton;
