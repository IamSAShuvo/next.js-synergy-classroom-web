import React from "react";
import PrimaryCard from "../../CardComponent/PrimaryCard";
import DescriptionText from "../../typography/DescriptionText";
import PrimaryButton from "../../Buttons/PrimaryButton";
import LoginCardContent from "./content/LoginCardContent";
import LoginCardFooter from "./footer/LoginCardFooter";
import LoginCardHeader from "./header/LoginCardHeader";

const LoginComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PrimaryCard
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
        header={<LoginCardHeader />}
        content={<LoginCardContent />}
        aside={
          <DescriptionText
            text="Forgot PassWord?"
            color="text-secondaryColor"
            fontSize="text-sm"
            lineHeight="leading-5"
            letterSpacing="tracking-wider"
          />
        }
        button={
          <PrimaryButton
            text="Log In"
            className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
          />
        }
        footer={<LoginCardFooter />}
      />
    </div>
  );
};

export default LoginComponent;
