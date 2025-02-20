import React, { FC } from "react";
import PrimaryHeading from "../../typography/PrimaryHeading";
import DescriptionText from "../../typography/DescriptionText";

interface CardHeaderProps {
  title: string;
  desc: string;
}

const CardHeader: FC<CardHeaderProps> = ({ title, desc }) => {
  return (
    <>
      <PrimaryHeading text={title} />
      <DescriptionText
        text={desc}
        className="text-secondaryColor text-sm leading-6"
      />
    </>
  );
};

export default CardHeader;
