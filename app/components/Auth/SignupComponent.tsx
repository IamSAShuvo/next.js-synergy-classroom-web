"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/app/store/slices/authSlice";
import { useRouter } from "next/navigation";
import PrimaryCard from "../CardComponent/PrimaryCard";
import PrimaryHeading from "../typography/PrimaryHeading";
import DescriptionText from "../typography/DescriptionText";
import PrimaryInputField from "../inputFields/PrimaryInputField";
import RadioButtons from "../Buttons/RadioButtons";
import LinkText from "../links/LinkText";
import PrimaryButton from "../Buttons/PrimaryButton";
import { RootState } from "@/app/store/store";
import store from "@/app/store/store";

const SignupComponent = () => {
  const dispatch = useDispatch<typeof store.dispatch>();
  const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  // State for form inputs
  const [formData, setFormData] = useState<{
    username: string;
    email: string;
    password: string;
    role: "student" | "teacher";
    name: string;
  }>({
    username: "",
    email: "",
    password: "",
    role: "student",
    name: "",
  });

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle Radio Button Change
  const handleRoleChange = (role: "student" | "teacher") => {
    setFormData({ ...formData, role });
  };

  // Handle Signup
  const handleSignup = async () => {
    try {
      const resultAction = await dispatch(signupUser(formData));

      console.log("Signup result action:", resultAction);

      if (signupUser.fulfilled.match(resultAction)) {
        console.log("Signup successful:", resultAction.payload);
        router.push("/dashboard");
      } else {
        console.error("Signup failed:", resultAction);

        if (resultAction.payload) {
          console.error(
            "Signup error message:",
            JSON.stringify(resultAction.payload, null, 2)
          );
        } else {
          console.error("Signup failed but no payload received.");
        }
      }
    } catch (err) {
      console.error("Signup failed due to an error:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <PrimaryCard
        className="w-[25%] mx-auto bg-white rounded-2xl shadow-lg p-8"
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
              name="username"
              placeholder="Enter Your UserName"
              value={formData.username}
              onChange={handleChange}
              variant="outlined"
            />
            <PrimaryInputField
              label="Name"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
            <PrimaryInputField
              label="Password"
              name="password"
              isPassword
              value={formData.password}
              onChange={handleChange}
              variant="outlined"
            />
            <PrimaryInputField
              label="Email"
              name="email"
              placeholder="Please Provide Your Email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
            />
            <div>
              <RadioButtons
                selectedRole={formData.role}
                onRoleChange={handleRoleChange}
              />
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
          text={loading ? "Signing Up..." : "Sign Up"}
          onClick={handleSignup}
          className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
          disabled={loading}
        />
        {error && typeof error === "object" && "message" in error && (
          <p>{(error as { message: string }).message}</p>
        )}
      </PrimaryCard>
    </div>
  );
};

export default SignupComponent;
