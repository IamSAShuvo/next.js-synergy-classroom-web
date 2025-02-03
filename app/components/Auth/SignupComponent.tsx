"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from "@/app/store/slices/authSlice";
// import { useRouter } from "next/navigation";
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
  // const router = useRouter();
  const { loading, error } = useSelector((state: RootState) => state.auth);

  // State for Snackbar
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

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

      console.log("Signup result action:", resultAction.meta.arg.role);

      if (signupUser.fulfilled.match(resultAction)) {
        console.log("Signup successful:", resultAction.payload);
        setFormData({
          username: "",
          email: "",
          password: "",
          role: "student",
          name: "",
        });
        // 🎉 Success: Show Snackbar with User Role
        setSnackbarSeverity("success");
        setSnackbarMessage(
          `Signup successful! Welcome, ${resultAction.payload.role}`
        );
        setOpenSnackbar(true);
      } else {
        console.error("Signup failed:", resultAction.payload);

        // ❌ Error: Show Error Message in Snackbar
        setSnackbarSeverity("error");
        setSnackbarMessage(
          (resultAction.payload as { message: string })?.message ||
            "Signup failed. Please try again."
        );
        setOpenSnackbar(true);

        // if (resultAction.payload) {
        //   console.error(
        //     "Signup error message:",
        //     JSON.stringify(resultAction.payload, null, 2)
        //   );
        // } else {
        //   console.error("Signup failed but no payload received.");
        // }
      }
    } catch (err) {
      console.error("Signup failed due to an error:", err);
      setSnackbarSeverity("error");
      setSnackbarMessage("An unexpected error occurred. Please try again.");
      setOpenSnackbar(true);
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
          <p className="mt-4 text-red-700">
            {(error as { message: string }).message}
          </p>
        )}
        {/* ✅ MUI Snackbar for Success & Error */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={10000}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }} // Position Snackbar on the right
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
