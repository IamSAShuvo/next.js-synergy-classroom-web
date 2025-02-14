import React, { FC, ReactNode } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface SecondaryCardProps {
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
}

const SecondaryCard: FC<SecondaryCardProps> = ({
  header,
  content,
  footer,
  children,
  className = "",
  onClick,
}) => {
  return (
    <div className={className}>
      <div onClick={onClick} className="cursor-pointer">
        {header ? (
          <header
            className="relative bg-cover bg-center p-5 rounded-t-2xl"
            style={{ backgroundImage: "url(/card_bg.jpeg)" }}
          >
            <div className="absolute top-6 right-4 text-white cursor-pointer">
              <MoreVertIcon className="hover:bg-gray-200/45 rounded-full" />
            </div>
            {header}
          </header>
        ) : (
          <div className="relative p-5 bg-gray-200 rounded-t-2xl">
            <div className="absolute top-4 right-4 text-white cursor-pointer">
              <MoreVertIcon className="hover:bg-gray-200/45 rounded-full" />
            </div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Default Header
            </h2>
          </div>
        )}
        {content ? (
          <main className="flex flex-col gap-2 px-5">{content}</main>
        ) : (
          <p className="text-gray-600 mb-4">
            This is the default content of the card.
          </p>
        )}
      </div>

      {footer ? (
        <footer className="border-t-2 px-5 py-2 text-center flex items-center justify-between">
          {children}
          {footer}
        </footer>
      ) : (
        <footer className="mt-16 border-t pt-4 text-gray-500">
          This is the default footer of the card.
        </footer>
      )}
    </div>
  );
};

export default SecondaryCard;
