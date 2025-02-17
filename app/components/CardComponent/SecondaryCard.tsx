import React, { FC, ReactNode } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

interface SecondaryCardProps {
  header?: ReactNode;
  content: ReactNode;
  footer?: ReactNode;
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
      <header
        className={`relative p-5 rounded-t-2xl ${
          header ? "bg-cover bg-center" : "bg-gray-200"
        }`}
        style={header ? { backgroundImage: "url(/card_bg.jpeg)" } : {}}
      >
        <MoreOptionsButton />
        {header || (
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            Default Header
          </h2>
        )}
      </header>

      <main className="flex flex-col gap-2 px-5 py-4">{content}</main>

      {/* {footer ? (
        <footer>{footer}</footer>
      ) : (
        <footer className="mt-16 border-t pt-4 text-gray-500">
          This is the default footer of the card.
        </footer>
      )} */}
      {footer && <footer>{footer}</footer>}
    </div>
  );
};

export default SecondaryCard;
