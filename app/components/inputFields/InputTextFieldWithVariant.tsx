"use client";

import { TextField } from "@mui/material";
import React from "react";

import { TextFieldProps } from "@mui/material";

interface InputTextFieldWithVariantProps {
  label: string;
  placeholder?: string;
  variant?: TextFieldProps["variant"];
}

const InputTextFieldWithVariant: React.FC<InputTextFieldWithVariantProps> = ({
  label,
  placeholder,
  variant,
}) => {
  return (
    <TextField
      id="filled-basic"
      label={label}
      variant={variant || "standard"}
      placeholder={placeholder}
      className="w-[420px]"
      sx={{
        "& .MuiInputLabel-root": {
          fontFamily: "Poppins, sans-serif",
          color: "var(--primaryColor)",
        },
        "& .MuiInputBase-input": {
          fontFamily: "Poppins, sans-serif",
          color: "var(--primaryColor)",
          "&::placeholder": {
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
            opacity: 1,
          },
        },
      }}
    />
  );
};

export default InputTextFieldWithVariant;
