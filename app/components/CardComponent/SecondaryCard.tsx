// import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface SecondaryCardProps {
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
}

const SecondaryCard: FC<SecondaryCardProps> = ({
  header,
  content,
  footer,
  children,
  className = "",
}) => {
  return (
    <div className={className}>
      {header ? (
        <header
          className="bg-cover bg-center"
          style={{ backgroundImage: "url(/card_bg.jpeg)" }}
        >
          {header}
        </header>
      ) : (
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Default Header
        </h2>
      )}
      {content ? (
        <main className="mb-4 flex flex-col gap-6">{content}</main>
      ) : (
        <p className="text-gray-600 mb-4">
          This is the default content of the card.
        </p>
      )}
      {children}
      {footer ? (
        <footer className="border-t-2 mt-16 text-center">{footer}</footer>
      ) : (
        <footer className="mt-16 border-t pt-4 text-gray-500">
          This is the default footer of the card.
        </footer>
      )}
    </div>
  );
};

export default SecondaryCard;
