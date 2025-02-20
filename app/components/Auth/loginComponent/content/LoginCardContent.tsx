import React, { FC } from "react";
import PrimaryInputField from "@/app/components/inputFields/PrimaryInputField";

interface LoginCardContentProps {
  username: string;
  setUsername: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

const LoginCardContent: FC<LoginCardContentProps> = ({
  username,
  setUsername,
  password,
  setPassword,
}) => {
  return (
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
  );
};

export default LoginCardContent;
