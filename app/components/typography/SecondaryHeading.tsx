import React, { FC } from "react";

interface SecondaryHeadingProps {
  text: string;
}

const SecondaryHeading: FC<SecondaryHeadingProps> = ({ text }) => {
  return (
    <h1 className="font-normal text-3xl leading-10 text-primaryColor">
      {text}
    </h1>
  );
};

export default SecondaryHeading;
