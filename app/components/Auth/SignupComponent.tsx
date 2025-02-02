import React from "react";
import PrimaryCard from "../CardComponent/PrimaryCard";
import PrimaryHeading from "../typography/PrimaryHeading";
import DescriptionText from "../typography/DescriptionText";
import PrimaryInputField from "../inputFields/PrimaryInputField";
import RadioButtons from "../Buttons/RadioButtons";
import LinkText from "../links/LinkText";
import PrimaryButton from "../Buttons/PrimaryButton";

const SignupComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PrimaryCard
        className="w-[30%] mx-auto bg-white rounded-2xl shadow-lg p-8"
        header={
          <>
            <PrimaryHeading text="Sign Up" />
            <DescriptionText
              text="Enter your details below & free sign up"
              color="text-secondaryColor"
              fontSize="text-sm"
              lineHeight="leading-6"
            />
          </>
        }
        content={
          <>
            <PrimaryInputField
              label="Username"
              placeholder="Enter Your UserName"
              variant="outlined"
            />
            <PrimaryInputField
              label="Name"
              placeholder="Enter Your Name"
              variant="outlined"
            />
            <PrimaryInputField label="Password" isPassword variant="outlined" />
            <PrimaryInputField
              label="Email"
              placeholder="Please Provide Your Email"
              variant="outlined"
            />
            <div>
              <RadioButtons />
            </div>
          </>
        }
        footer={
          <DescriptionText
            text="Already have an account?"
            color="text-secondaryColor"
            fontSize="text-sm"
            lineHeight="leading-6"
          >
            <LinkText
              className="font-normal text-sm leading-5 text-skyBlue hover:underline "
              url="/login"
              text="Login"
            />
          </DescriptionText>
        }
      >
        <PrimaryButton
          text="Sign Up"
          className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
        />
      </PrimaryCard>
    </div>
  );
};

export default SignupComponent;
