import React from "react";

interface AuthHeadingTextProps {
  text: string;
}

const AuthHeadingText: React.FC<AuthHeadingTextProps> = ({ text }) => {
  return (
    <h1 className="font-bold text-xl-plus leading-extra-loose text-primaryColor">
      {text}
    </h1>
  );
};

export default AuthHeadingText;
