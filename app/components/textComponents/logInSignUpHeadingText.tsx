import React from "react";

export default function LogInSignUpHeadingText({ text }: { text: string }) {
  return (
    <h1 className="font-poppins font-bold text-[38.39px] leading-[57.58px] text-headingTextColorPrimary">
      {text}
    </h1>
  );
}
