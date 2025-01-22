import React from "react";

const EnrollButton = ({ text }: { text: string }) => {
  return (
    <button className="mx-auto hover:bg-indigo-600 bg-skyBlue px-3 py-2 rounded text-white font-medium text-xs leading-5">
      {text}
    </button>
  );
};

export default EnrollButton;
