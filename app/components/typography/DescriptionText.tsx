import React, { FC } from "react";

interface DescriptionTextProps {
  text?: string;

  children?: React.ReactNode;
  className?: string;
}

const DescriptionText: FC<DescriptionTextProps> = ({
  text,
  children,
  className = "",
}) => {
  return (
    <p className={className}>
      {text} {children && <span>{children}</span>}
    </p>
  );
};

export default DescriptionText;
