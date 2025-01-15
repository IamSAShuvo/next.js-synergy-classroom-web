import React from "react";

const AuthHeadingText = ({ text }: { text: string }) => {
  return (
    <h1 className="font-poppins font-bold text-[38.39px] leading-[57.58px] text-headingColor">
      {text}
    </h1>
  );
};

export default AuthHeadingText;
