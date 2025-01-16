import React from "react";

const DashboardCardTitle = ({ text }: { text: string }) => {
  return (
    <h1 className="font-poppins font-medium text-2xl leading-9 text-white">
      {text}
    </h1>
  );
};

export default DashboardCardTitle;
