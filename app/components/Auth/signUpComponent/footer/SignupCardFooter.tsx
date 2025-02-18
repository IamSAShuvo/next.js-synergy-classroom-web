// components/SignupCardFooter.tsx
import LinkText from "@/app/components/links/LinkText";
import DescriptionText from "@/app/components/typography/DescriptionText";
import React from "react";

const SignupCardFooter = () => (
  <DescriptionText
    text="Already have an account?"
    color="text-secondaryColor"
    fontSize="text-sm"
    lineHeight="leading-6"
  >
    <LinkText
      className="font-normal text-sm leading-5 text-skyBlue hover:underline"
      url="/login"
      text="Login"
    />
  </DescriptionText>
);

export default SignupCardFooter;
