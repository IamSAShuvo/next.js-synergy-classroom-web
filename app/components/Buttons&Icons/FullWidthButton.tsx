"use client";
import React, { FC } from "react";

interface FullWidthButtonProps {
  text: string;
}

const FullWidthButton: FC<FullWidthButtonProps> = ({ text }) => {
  return (
    <button className="w-1/3 mx-auto hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6">
      {text}
    </button>
  );
};

export default FullWidthButton;
