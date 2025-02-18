import React from "react";
import LinkText from "@/app/components/links/LinkText";
import DescriptionText from "@/app/components/typography/DescriptionText";

const LoginCardFooter = () => {
  return (
    <DescriptionText
      text="Don't have an account?"
      color="text-secondaryColor"
      fontSize="text-sm"
      lineHeight="leading-6"
    >
      <LinkText
        className="font-normal text-sm leading-5 text-skyBlue hover:underline "
        url="/signup"
        text="Sign Up"
      />
    </DescriptionText>
  );
};

export default LoginCardFooter;
