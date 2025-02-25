"use client";
import React, { FC, useState } from "react";
import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface PrimaryInputFieldProps {
  label: string;
  name?: string;
  placeholder?: string;
  variant?: "standard" | "outlined" | "filled";
  isPassword?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const inputStyle = {
  fontFamily: "Poppins, sans-serif",
  color: "var(--primaryColor)",
  "&.Mui-focused": {
    color: "var(--primaryColor)",
  },
};

const StyledFormControl = styled(FormControl)(({}) => ({
  "& label": {
    fontFamily: "Poppins, sans-serif",
    color: "var(--primaryColor, #1976d2)",
    "&.Mui-focused": {
      color: "var(--primaryColor, #1976d2) !important",
    },
  },
}));

const inputComponents = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
};

const generateId = (label: string) => {
  return encodeURIComponent(label.toLowerCase().replace(/\s+/g, "-"));
};

const PrimaryInputField: FC<PrimaryInputFieldProps> = ({
  label,
  name,
  placeholder,
  variant = "outlined",
  isPassword = false,
  value = "",
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const InputComponent = inputComponents[variant] || OutlinedInput;

  const inputId = generateId(label);

  const endAdornment = () => {
    if (isPassword) {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={handleClickShowPassword}
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      );
    }

    return null;
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <StyledFormControl variant={variant}>
        <InputLabel htmlFor={name || inputId}>{label}</InputLabel>
        <InputComponent
          name={name}
          sx={inputStyle}
          id={name || inputId}
          type={isPassword && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          endAdornment={endAdornment()}
          label={variant === "outlined" ? label : undefined}
          {...props}
        />
      </StyledFormControl>
    </div>
  );
};

export default PrimaryInputField;
