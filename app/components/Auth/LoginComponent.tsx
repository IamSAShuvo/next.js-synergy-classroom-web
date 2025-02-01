import React from "react";
import PrimaryCard from "../CardComponent/PrimaryCard";
import PrimaryHeading from "../typography/PrimaryHeading";
import DescriptionText from "../typography/DescriptionText";
import LinkText from "../links/LinkText";
import PrimaryButton from "../Buttons/PrimaryButton";
import PrimaryInputField from "../inputFields/PrimaryInputField";

const LoginComponent = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PrimaryCard
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
        header={
          <>
            <PrimaryHeading text="Login" />
            <DescriptionText
              text="Welcome back! Enter your details to proceed."
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
            <PrimaryInputField label="Password" isPassword variant="outlined" />
          </>
        }
        aside={
          <DescriptionText
            text="Forgot PassWord?"
            color="text-secondaryColor"
            fontSize="text-sm"
            lineHeight="leading-5"
            letterSpacing="tracking-wider"
          />
        }
        footer={
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
        }
      >
        <PrimaryButton
          text="Log In"
          className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
        />
      </PrimaryCard>
    </div>
  );
};

export default LoginComponent;
