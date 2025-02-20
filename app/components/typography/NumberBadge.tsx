import React, { FC } from "react";

interface NumberBadgeProps {
  count: number;
}

const NumberBadge: FC<NumberBadgeProps> = ({ count = 0 }) => {
  return (
    <span className="font-medium text-xs leading-5 text-leafGreen">
      {count} {count < 2 ? "person Enrolled" : "people Enrolled"}
    </span>
  );
};

export default NumberBadge;
