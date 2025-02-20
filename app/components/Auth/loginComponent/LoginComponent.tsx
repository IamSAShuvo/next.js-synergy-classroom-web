"use client";
import React, { useState } from "react";
import PrimaryCard from "../../CardComponent/PrimaryCard";
import PrimaryButton from "../../Buttons/PrimaryButton";
import LoginCardContent from "./content/LoginCardContent";
import CardHeader from "../primaryCardHeading/CardHeader";
import CardFooter from "../primaryCardFooter/CardFooter";
import LinkText from "../../links/LinkText";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store/store";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/store/slices/authenticationSlice/authActions/authActions";
import { Snackbar, Alert } from "@mui/material";

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
    <PrimaryCard
      className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-8"
      header={
        <CardHeader
          title="Login"
          desc="Welcome back! Enter your details to proceed."
        />
      }
      content={
        <LoginCardContent
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      }
      forgotPasswordLink={
        <LinkText
          url="/forgot-password"
          text="Forgot Password?"
          className="font-normal text-sm leading-5 text-secondaryColor hover:underline"
        />
      }
      button={
        <>
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
        </>
      }
      footer={
        <CardFooter
          text="Don't have an account?"
          url="/signup"
          urlText="Sign Up"
        />
      }
      snackBar={
        <Snackbar
          open={openSnackbar}
          autoHideDuration={5000}
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
      }
    />
  );
};

export default LoginComponent;
