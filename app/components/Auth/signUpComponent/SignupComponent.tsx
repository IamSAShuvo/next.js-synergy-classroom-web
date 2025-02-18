import React from "react";
import PrimaryCard from "../../CardComponent/PrimaryCard";

import PrimaryButton from "../../Buttons/PrimaryButton";
import SignupCardContent from "./content/SignupCardContent";
import SignupCardFooter from "./footer/SignupCardFooter";
import SignupCardHeader from "./header/SignupCardHeader";

const SignupComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PrimaryCard
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
        header={<SignupCardHeader />}
        content={<SignupCardContent />}
        button={
          <PrimaryButton
            text="Sign Up"
            className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
          />
        }
        footer={<SignupCardFooter />}
      />
    </div>
  );
};

export default SignupComponent;
