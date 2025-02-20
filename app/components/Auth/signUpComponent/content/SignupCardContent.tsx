import React from "react";
import RadioButtons from "@/app/components/Buttons/RadioButtons";
import PrimaryInputField from "@/app/components/inputFields/PrimaryInputField";

interface SignupCardContentProps {
  formData: {
    username: string;
    email: string;
    password: string;
    role: "student" | "teacher";
    name: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleRoleChange: (role: "student" | "teacher") => void;
}

const SignupCardContent: React.FC<SignupCardContentProps> = ({
  formData,
  handleChange,
  handleRoleChange,
}) => (
  <>
    <PrimaryInputField
      label="Username"
      name="username"
      placeholder="Enter Your Username"
      variant="outlined"
      value={formData.username}
      onChange={handleChange}
    />
    <PrimaryInputField
      label="Name"
      name="name"
      placeholder="Enter Your Name"
      variant="outlined"
      value={formData.name}
      onChange={handleChange}
    />
    <PrimaryInputField
      label="Password"
      name="password"
      isPassword
      variant="outlined"
      value={formData.password}
      onChange={handleChange}
    />
    <PrimaryInputField
      label="Email"
      name="email"
      placeholder="Please Provide Your Email"
      variant="outlined"
      value={formData.email}
      onChange={handleChange}
    />
    <div>
      <RadioButtons
        selectedRole={formData.role}
        onRoleChange={handleRoleChange}
      />
    </div>
  </>
);

export default SignupCardContent;
