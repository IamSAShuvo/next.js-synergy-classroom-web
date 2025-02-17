import Link from "next/link";
import React, { FC } from "react";

interface LinkTextProps {
  url: string;
  text: string;
  newTab?: boolean;
  isExternal?: boolean;
}

const LinkText: FC<LinkTextProps> = ({ url, text, newTab, isExternal }) => {
  return (
    <Link
      href={url}
      passHref
      rel={newTab || isExternal ? "noopener noreferrer" : undefined}
      target={newTab || isExternal ? "_blank" : undefined}
      className="font-normal text-sm leading-5 text-skyBlue hover:underline"
    >
      {text}
    </Link>
  );
};

export default LinkText;
