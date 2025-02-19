import Link from "next/link";
import React, { FC } from "react";

interface LinkTextProps {
  url: string;
  text: string;
  className?: string;
  newTab?: boolean;
  isExternal?: boolean;
}

const LinkText: FC<LinkTextProps> = ({
  url,
  text,
  className = "",
  newTab,
  isExternal,
}) => {
  return (
    <Link
      href={url}
      className={className}
      passHref
      rel={newTab || isExternal ? "noopener noreferrer" : undefined}
      target={newTab || isExternal ? "_blank" : undefined}
    >
      {text}
    </Link>
  );
};

export default LinkText;
