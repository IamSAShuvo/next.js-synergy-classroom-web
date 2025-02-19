import React from "react";
import PrimaryCard from "../../CardComponent/PrimaryCard";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SignupCardContent from "./content/SignupCardContent";
import CardHeader from "../primaryCardHeading/CardHeader";
import CardFooter from "../primaryCardFooter/CardFooter";

const SignupComponent = () => {
  return (
    <PrimaryCard
      className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
      header={
        <CardHeader
          title="Sign Up"
          desc="Enter your details below & free sign up"
        />
      }
      content={<SignupCardContent />}
      button={
        <PrimaryButton
          text="Sign Up"
          className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
        />
      }
      footer={
        <CardFooter
          text="Already have an account?"
          url="/login"
          urlText="Login"
        />
      }
    />
  );
};

export default SignupComponent;
