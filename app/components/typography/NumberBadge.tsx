import React from "react";

interface NumberBadgeProps {
  count: number;
}

const NumberBadge: React.FC<NumberBadgeProps> = ({ count }) => {
  return (
    <span className="font-medium text-xs leading-5 text-leafGreen">
      {count} person Enrolled
    </span>
  );
};

export default NumberBadge;
