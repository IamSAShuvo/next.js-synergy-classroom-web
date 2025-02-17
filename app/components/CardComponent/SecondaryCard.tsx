import React, { FC, ReactNode } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface SecondaryCardProps {
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
  // children?: ReactNode;
  className?: string;
}

const SecondaryCard: FC<SecondaryCardProps> = ({
  header,
  content,
  footer,
  className = "",
}) => {
  const MoreOptionsButton = () => (
    <button
      className="absolute top-6 right-4 text-white cursor-pointer"
      aria-label="More options"
    >
      <MoreVertIcon />
    </button>
  );

  return (
    <div className={className}>
      {header ? (
        <header
          className="relative bg-cover bg-center p-5 rounded-t-2xl"
          style={{ backgroundImage: "url(/card_bg.jpeg)" }}
        >
          <MoreOptionsButton />
          {header}
        </header>
      ) : (
        <div className="relative p-5 bg-gray-200 rounded-t-2xl">
          <MoreOptionsButton />
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

      {footer ? (
        <footer>{footer}</footer>
      ) : (
        <footer className="mt-16 border-t pt-4 text-gray-500">
          This is the default footer of the card.
        </footer>
      )}
    </div>
  );
};

export default SecondaryCard;
