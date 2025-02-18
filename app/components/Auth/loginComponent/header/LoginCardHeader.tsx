import DescriptionText from "@/app/components/typography/DescriptionText";
import PrimaryHeading from "@/app/components/typography/PrimaryHeading";
import React from "react";

const LoginCardHeader = () => {
  return (
    <>
      <PrimaryHeading text="Login" />
      <DescriptionText
        text="Welcome back! Enter your details to proceed."
        color="text-secondaryColor"
        fontSize="text-sm"
        lineHeight="leading-6"
      />
    </>
  );
};

export default LoginCardHeader;
