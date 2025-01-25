import React, { FC } from "react";

interface FullWidthButtonProps {
  text: string;
  onClick: () => void;
}

const FullWidthButton: FC<FullWidthButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full mx-auto hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
    >
      {text}
    </button>
  );
};

export default FullWidthButton;
