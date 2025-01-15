import React from "react";

export default function AuthDescriptionText({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  return (
    <h1 className="font-poppins font-normal text-[14.39px] leading-[21.59px] text-descriptionColor">
      {text} {children}
    </h1>
  );
}
