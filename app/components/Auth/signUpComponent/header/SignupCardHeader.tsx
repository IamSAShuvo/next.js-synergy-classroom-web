// components/SignupCardHeader.tsx
import React from "react";
import DescriptionText from "../../../typography/DescriptionText";
import PrimaryHeading from "../../../typography/PrimaryHeading";

const SignupCardHeader = () => (
  <>
    <PrimaryHeading text="Sign Up" />
    <DescriptionText
      text="Enter your details below & free sign up"
      color="text-secondaryColor"
      fontSize="text-sm"
      lineHeight="leading-6"
    />
  </>
);

export default SignupCardHeader;
