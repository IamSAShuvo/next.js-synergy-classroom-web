import React, { FC } from "react";
import DescriptionText from "../../typography/DescriptionText";
import LinkText from "../../links/LinkText";

interface CardFooterProps {
  text: string;
  url: string;
  urlText: string;
}

const CardFooter: FC<CardFooterProps> = ({ text, url, urlText }) => {
  return (
    <DescriptionText
      text={text}
      className="text-secondaryColor text-sm leading-6"
    >
      <LinkText
        className="font-normal text-sm leading-5 text-skyBlue hover:underline"
        url={url}
        text={urlText}
      />
    </DescriptionText>
  );
};

export default CardFooter;
