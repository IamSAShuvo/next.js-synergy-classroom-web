"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/app/store/slices/authenticationSlice/authSlice";
import PrimaryCard from "../CardComponent/PrimaryCard";
import PrimaryHeading from "../typography/PrimaryHeading";
import DescriptionText from "../typography/DescriptionText";
import PrimaryInputField from "../inputFields/PrimaryInputField";
import RadioButtons from "../Buttons/RadioButtons";
import LinkText from "../links/LinkText";
import PrimaryButton from "../Buttons/PrimaryButton";
import { AppDispatch, RootState } from "@/app/store/store";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SignupComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRoleChange = (role: "student" | "teacher") => {
    setFormData({ ...formData, role });
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
    } catch (err) {
      console.error(err);
      setSnackbarSeverity("error");
      setSnackbarMessage("An unexpected error occurred. Please try again.");
      setOpenSnackbar(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <PrimaryCard
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
        header={
          <>
            <PrimaryHeading text="Sign Up" />
            <DescriptionText
              text="Enter your details below & free sign up"
              className="text-secondaryColor text-sm leading-6"
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
            className="text-secondaryColor text-sm leading-6"
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
          <p className="mt-4 text-red-700">
            {(error as { message: string }).message}
          </p>
        )}
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
      </PrimaryCard>
    </div>
  );
};

export default SignupComponent;
