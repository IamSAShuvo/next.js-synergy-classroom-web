import React from "react";

const NumberBadge = ({ count }: { count: number }) => {
  return (
    <span className="font-medium text-xs leading-[1.125rem] text-leafGreen">
      {count} person Enrolled
    </span>
  );
};

export default NumberBadge;
