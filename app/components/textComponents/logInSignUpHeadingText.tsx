import React from "react";

type LogInSignUpHeadingTextProps = {
  text: string;
};

export default function LogInSignUpHeadingText({
  text,
}: LogInSignUpHeadingTextProps) {
  return (
    <h1 className="font-poppins font-bold text-[38.39px] leading-[57.58px] text-headingTextColorPrimary">
      {text}
    </h1>
  );
}
