import React from "react";

interface DescriptionWithChildrenProps {
  text: string;
  lineHeight: string;
  letterSpacing?: string;
  children?: React.ReactNode;
}

const DescriptionWithChildren: React.FC<DescriptionWithChildrenProps> = ({
  text,
  children,
  lineHeight,
  letterSpacing,
}) => {
  return (
    <h1
      className={`font-normal text-sm ${lineHeight} ${letterSpacing} text-secondaryColor`}
    >
      {text} {children}
    </h1>
  );
};

export default DescriptionWithChildren;
