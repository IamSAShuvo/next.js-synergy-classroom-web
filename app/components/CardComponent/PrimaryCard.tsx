import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface PrimaryCardProps {
  header?: ReactNode;
  content: ReactNode;
  aside?: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const PrimaryCard: FC<PrimaryCardProps> = ({
  header,
  content,
  aside,
  footer,
  children,
  className = "",
}) => {
  return (
    <div className={className}>
      {header ? (
        <header className="mb-8">{header}</header>
      ) : (
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Default Header
        </h2>
      )}
      {content ? (
        <main className="mb-8 flex flex-col gap-6">{content}</main>
      ) : (
        <p className="text-gray-600 mb-4">
          This is the default content of the card.
        </p>
      )}
      {
        <aside className="mb-4 text-right hover:underline">
          <Link href={""}>{aside}</Link>
        </aside>
      }
      {children}
      {footer ? (
        <footer className="mt-16 text-center">{footer}</footer>
      ) : (
        <footer className="mt-16 border-t pt-4 text-gray-500">
          This is the default footer of the card.
        </footer>
      )}
    </div>
  );
};

export default PrimaryCard;
