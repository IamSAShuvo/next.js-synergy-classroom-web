"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/app/store/slices/authSlice";
import { AppDispatch, RootState } from "@/app/store/store";
import PrimaryCard from "../CardComponent/PrimaryCard";
import PrimaryHeading from "../typography/PrimaryHeading";
import DescriptionText from "../typography/DescriptionText";
import PrimaryButton from "../Buttons/PrimaryButton";
import PrimaryInputField from "../inputFields/PrimaryInputField";
import LinkText from "../links/LinkText";
import { useRouter } from "next/navigation";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const LoginComponent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const { loading, error } = useSelector((state: RootState) => state.auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success"
  );

  const handleLogin = async () => {
    try {
      const loginResult = await dispatch(loginUser({ username, password }));
      if (loginUser.fulfilled.match(loginResult)) {
        router.push("/dashboard");
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage(
          (loginResult.payload as { message: string })?.message ||
            "Login failed. Please try again."
        );
        setOpenSnackbar(true);
      }
    } catch (err) {
      console.error("Login failed due to an error:", err);
      setSnackbarSeverity("error");
      setSnackbarMessage("Login failed due to an error");
      setOpenSnackbar(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <PrimaryCard
        className="w-[25%] mx-auto bg-white rounded-2xl shadow-lg p-8"
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
              placeholder="Enter Your Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <PrimaryInputField
              label="Password"
              isPassword
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
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
          text={loading ? "Logging in..." : "Log In"}
          className="w-full bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6"
          onClick={handleLogin}
        />
        {error && typeof error === "object" && "message" in error && (
          <p className="mt-4 text-red-700">
            {(error as { message: string }).message}
          </p>
        )}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
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

export default LoginComponent;
