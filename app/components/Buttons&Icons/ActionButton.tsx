import React from "react";

const ActionButton = ({
  text,
  hoverColor,
}: {
  text: string;
  hoverColor: string;
}) => {
  return (
    <button
      className={`mx-auto ${hoverColor} bg-white/[0.12] border-[#B1B1B1] border-[3px] px-6 py-[10px] rounded text-[#B1B1B1] font-poppins font-medium text-xl leading-5`}
    >
      {text}
    </button>
  );
};

export default ActionButton;
