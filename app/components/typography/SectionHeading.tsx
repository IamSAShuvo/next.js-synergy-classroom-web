import React, { FC } from "react";

interface SectionHeadingProps {
  text?: string;
  className?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({ text, className }) => {
  return <h3 className={className}>{text}</h3>;
};

export default SectionHeading;
