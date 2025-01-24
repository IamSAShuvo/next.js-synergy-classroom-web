import React, { FC } from "react";

interface PrimaryHeadingProps {
  text: string;
}

const PrimaryHeading: FC<PrimaryHeadingProps> = ({ text }) => {
  return (
    <h1 className="font-bold text-xl-plus leading-extra-loose text-primaryColor">
      {text}
    </h1>
  );
};

export default PrimaryHeading;
