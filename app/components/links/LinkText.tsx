import Link from "next/link";
import React, { FC } from "react";

interface LinkTextProps {
  url: string;
  text: string;
  className?: string;
}

const LinkText: FC<LinkTextProps> = ({ url, text, className = "" }) => {
  return (
    <Link href={url} className={className}>
      {text}
    </Link>
  );
};

export default LinkText;
