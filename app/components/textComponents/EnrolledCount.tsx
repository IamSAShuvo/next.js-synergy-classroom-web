import React from "react";

const EnrolledCount = ({ count }: { count: number }) => {
  return (
    <span className="font-poppins font-medium text-xs leading-[1.125rem] text-enrolledCountColor">
      {count} person Enrolled
    </span>
  );
};

export default EnrolledCount;
