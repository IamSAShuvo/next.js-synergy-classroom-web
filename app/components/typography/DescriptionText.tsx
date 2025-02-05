import React, { FC } from "react";

interface DescriptionWithChildrenProps {
  text?: string;

  children?: React.ReactNode;
  className?: string;
}

const DescriptionWithChildren: FC<DescriptionWithChildrenProps> = ({
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

export default DescriptionWithChildren;
