"use client";
import React from "react";

const FullWidthButton = ({ text }: { text: string }) => {
  return (
    <button className="w-1/3 mx-auto hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6">
      {text}
    </button>
  );
};

export default FullWidthButton;
