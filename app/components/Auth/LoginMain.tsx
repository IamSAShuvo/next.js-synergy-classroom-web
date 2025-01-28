import React from "react";
import PrimaryCard from "../CardComponent/PrimaryCard";
import PrimaryHeading from "../typography/PrimaryHeading";
import DescriptionText from "../typography/DescriptionText";
import InputTextFieldWithVariant from "../inputFields/InputTextFieldWithVariant";
import InputPasswordField from "../inputFields/InputPasswordField";
import LinkText from "../links/LinkText";
import PrimaryButton from "../Buttons/PrimaryButton";

const LoginMain = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <PrimaryCard
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
        header={
          <>
            <PrimaryHeading text="Login" />
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
            <InputTextFieldWithVariant
              label="Username"
              placeholder="Enter Your UserName"
              variant="outlined"
            />
            <InputPasswordField />
          </>
        }
        aside={
          <DescriptionText
            text="Forgot PassWord?"
            color="text-secondaryColor"
            fontSize="text-sm"
            lineHeight="leading-5"
            letterSpacing="tracking-[0.48px]"
          />
        }
        footer={
          <DescriptionText
            text="Don't have an account?"
            color="text-secondaryColor"
            fontSize="text-sm"
            lineHeight="leading-6"
          >
            <LinkText url="/signup" text="Sign Up" />
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

export default LoginMain;
