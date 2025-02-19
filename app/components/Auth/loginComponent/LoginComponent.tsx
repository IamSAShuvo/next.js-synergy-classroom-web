import React from "react";
import PrimaryCard from "../../CardComponent/PrimaryCard";
import PrimaryButton from "../../Buttons/PrimaryButton";
import LoginCardContent from "./content/LoginCardContent";
import CardHeader from "../primaryCardHeading/CardHeader";
import CardFooter from "../primaryCardFooter/CardFooter";
// import Link from "next/link";
import LinkText from "../../links/LinkText";

const LoginComponent = () => {
  return (
    <PrimaryCard
      className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
      header={
        <CardHeader
          title="Login"
          desc="Welcome back! Enter your details to proceed."
        />
      }
      content={<LoginCardContent />}
      forgotPasswordLink={
        <LinkText
          url="/forgot-password"
          text="Forgot Password?"
          className="font-normal text-sm leading-5 text-secondaryColor hover:underline"
        />
      }
      button={
        <PrimaryButton
          text="Log In"
          className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
        />
      }
      footer={
        <CardFooter
          text="Don't have an account?"
          url="/signup"
          urlText="Sign Up"
        />
      }
    />
  );
};

export default LoginComponent;
