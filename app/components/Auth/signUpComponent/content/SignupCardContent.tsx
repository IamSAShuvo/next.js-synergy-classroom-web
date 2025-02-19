import React from "react";
import RadioButtons from "@/app/components/Buttons/RadioButtons";
import PrimaryInputField from "@/app/components/inputFields/PrimaryInputField";

const SignupCardContent = () => (
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
);

export default SignupCardContent;
