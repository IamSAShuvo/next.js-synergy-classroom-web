import React from "react";

const DashboardCardTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="font-poppins font-normal text-sm leading-[1.3125rem] text-white">
      {text}
    </h1>
  );
};

export default DashboardCardTitle;
