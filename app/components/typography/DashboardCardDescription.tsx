import React from "react";

const DashboardCardDescription = ({
  text,
  color,
}: {
  text: string;
  color: string;
}) => {
  return (
    <h1
      className={`font-poppins font-normal text-sm leading-[1.3125rem] ${color}`}
    >
      {text}
    </h1>
  );
};

export default DashboardCardDescription;
