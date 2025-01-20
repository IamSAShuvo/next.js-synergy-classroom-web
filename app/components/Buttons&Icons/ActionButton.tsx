import React from "react";

const ActionButton = ({ text }: { text: string }) => {
  return (
    <button className="w-28 mx-auto hover:bg-indigo-600 bg-buttonColor px-[10px] py-[8px] rounded text-white font-poppins font-medium text-xs leading-5">
      {text}
    </button>
  );
};

export default ActionButton;
