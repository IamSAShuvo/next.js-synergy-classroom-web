import React from "react";

interface NumberBadgeProps {
  count: number;
}

const NumberBadge: React.FC<NumberBadgeProps> = ({ count = 0 }) => {
  return (
    <span className="font-medium text-xs leading-5 text-leafGreen">
      {count} {count === 1 ? "person Enrolled" : "people Enrolled"}
    </span>
  );
};

export default NumberBadge;
