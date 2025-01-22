import Link from "next/link";
import React from "react";

interface LinkTextProps {
  url: string;
  text: string;
}

const LinkText: React.FC<LinkTextProps> = ({ url, text }) => {
  return (
    <Link
      href={url}
      className="font-normal text-[14.39px] leading-[21.59px] text-skyBlue"
    >
      {text}
    </Link>
  );
};

export default LinkText;
