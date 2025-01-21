import React from "react";

const AuthHeadingText = ({ text }: { text: string }) => {
  return (
    <h1 className="font-bold text-[38.39px] leading-[57.58px] text-primaryColor">
      {text}
    </h1>
  );
};

export default AuthHeadingText;
