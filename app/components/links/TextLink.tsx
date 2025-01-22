import Link from "next/link";
import React from "react";

export const TextLink = ({ url, text }: { url: string; text: string }) => {
  return (
    <Link
      href={url}
      className="font-normal text-[14.39px] leading-[21.59px] text-skyBlue"
    >
      {text}
    </Link>
  );
};
