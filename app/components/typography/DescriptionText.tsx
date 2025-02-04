import React, { FC } from "react";

interface DescriptionWithChildrenProps {
  text: string;
  color: string;
  fontSize: string;
  lineHeight?:
    | "leading-normal"
    | "leading-loose"
    | "leading-tight"
    | "leading-snug"
    | "leading-none"
    | "leading-extra-loose"
    | "leading-5"
    | "leading-6"
    | "leading-7";
  letterSpacing?: string;
  children?: React.ReactNode;
}

const DescriptionWithChildren: FC<DescriptionWithChildrenProps> = ({
  text,
  color,
  fontSize,
  children,
  lineHeight,
  letterSpacing = "tracking-normal",
}) => {
  return (
    <p
      className={`font-normal ${color} ${lineHeight} ${
        letterSpacing || ""
      } ${fontSize}`}
    >
      {text} {children && <span>{children}</span>}
    </p>
  );
};

export default DescriptionWithChildren;
