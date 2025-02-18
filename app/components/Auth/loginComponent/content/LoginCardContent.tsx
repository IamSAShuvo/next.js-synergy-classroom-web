import React from "react";
import PrimaryInputField from "@/app/components/inputFields/PrimaryInputField";

const LoginCardContent = () => {
  return (
    <>
      <PrimaryInputField
        label="Username"
        placeholder="Enter Your UserName"
        variant="outlined"
      />
      <PrimaryInputField label="Password" isPassword variant="outlined" />
    </>
  );
};

export default LoginCardContent;
