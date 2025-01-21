import React from "react";

const TextDescriptionWithChildren = ({
  text,
  children,
  lineHeight,
  letterSpacing,
}: {
  text: string;
  lineHeight: string;
  letterSpacing?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h1
      className={`font-normal text-[14.39px] ${lineHeight} ${letterSpacing} text-descriptionColor`}
    >
      {text} {children}
    </h1>
  );
};

export default TextDescriptionWithChildren;
