"use client";

import React, { useState } from "react";
import PrimaryCard from "../../CardComponent/PrimaryCard";
import PrimaryButton from "../../Buttons/PrimaryButton";
import SignupCardContent from "./content/SignupCardContent";
import CardHeader from "../primaryCardHeading/CardHeader";
import CardFooter from "../primaryCardFooter/CardFooter";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { signupUser } from "@/app/store/slices/authenticationSlice/authActions/authActions";
import { Snackbar, Alert } from "@mui/material";

const SignupComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

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

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleChange = (role: "student" | "teacher") => {
    setFormData((prev) => ({ ...prev, role }));
  };

  const handleSignup = async () => {
    try {
      const resultAction = await dispatch(signupUser(formData));

      if (signupUser.fulfilled.match(resultAction)) {
        setFormData({
          username: "",
          email: "",
          password: "",
          role: "student",
          name: "",
        });

        setSnackbarSeverity("success");
        setSnackbarMessage(
          `Signup successful! Welcome, ${resultAction.meta.arg.name}`
        );
        setOpenSnackbar(true);
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage(
          (resultAction.payload as { message: string })?.message ||
            "Signup failed. Please try again."
        );
        setOpenSnackbar(true);
      }
    } catch {
      setSnackbarSeverity("error");
      setSnackbarMessage("An unexpected error occurred. Please try again.");
      setOpenSnackbar(true);
    }
  };

  return (
    <>
      <PrimaryCard
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
        header={
          <CardHeader
            title="Sign Up"
            desc="Enter your details below & free sign up"
          />
        }
        content={
          <SignupCardContent
            formData={formData}
            handleChange={handleChange}
            handleRoleChange={handleRoleChange}
          />
        }
        button={
          <>
            <PrimaryButton
              text={loading ? "Signing Up..." : "Sign Up"}
              className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
              onClick={handleSignup}
            />
            {error && typeof error === "object" && "message" in error && (
              <p className="mt-4 text-red-700">
                {(error as { message: string }).message}
              </p>
            )}
          </>
        }
        footer={
          <CardFooter
            text="Already have an account?"
            url="/login"
            urlText="Login"
          />
        }
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={10000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{
            mb: 8,
            width: "100%",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)",
            borderRadius: "8px",
          }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SignupComponent;
