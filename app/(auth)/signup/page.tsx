import PrimaryButton from "@/app/components/Buttons/PrimaryButton";
import RadioButtons from "@/app/components/Buttons/RadioButtons";
import PrimaryCard from "@/app/components/CardComponent/PrimaryCard";
import InputPasswordField from "@/app/components/inputFields/InputPasswordField";
import InputTextFieldWithVariant from "@/app/components/inputFields/InputTextFieldWithVariant";
import LinkText from "@/app/components/links/LinkText";
import DescriptionText from "@/app/components/typography/DescriptionText";
import PrimaryHeading from "@/app/components/typography/PrimaryHeading";
import React from "react";

const page = () => {
  return (
    <div>
      <PrimaryCard
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
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
            <InputTextFieldWithVariant
              label="Username"
              placeholder="Enter Your UserName"
              variant="outlined"
            />
            <InputTextFieldWithVariant
              label="Name"
              placeholder="Enter Your Name"
              variant="outlined"
            />
            <InputPasswordField />
            <InputTextFieldWithVariant
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
            <LinkText url="/login" text="Login" />
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

export default page;
