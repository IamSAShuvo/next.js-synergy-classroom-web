// import Link from "next/link";
import React, { FC, ReactNode } from "react";

interface PrimaryCardProps {
  header?: ReactNode;
  content: ReactNode;
  forgotPasswordLink?: ReactNode;
  footer?: ReactNode;
  button?: ReactNode;
  className?: string;
}

const PrimaryCard: FC<PrimaryCardProps> = ({
  header,
  content,
  forgotPasswordLink,
  footer,
  button,
  className = "",
}) => {
  return (
    <div className={className}>
      <header className="mb-8">
        {header || (
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Default Header
          </h2>
        )}
      </header>

      <main className="mb-8 flex flex-col gap-6">{content}</main>

      <div className="mb-4 text-right hover:underline">
        {forgotPasswordLink}
      </div>

      {button}

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
