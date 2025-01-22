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
      slotProps={{
        inputLabel: {
          sx: {
            fontFamily: "Poppins, sans-serif",
            color: "theme('colors.headingColor')",
          },
        },
        input: {
          sx: {
            fontFamily: "Poppins, sans-serif",
            "&::placeholder": {
              fontFamily: "Poppins, sans-serif",
              color: "var(--headingColor)",
            },
          },
        },
      }}
    />
  );
};

export default InputTextFieldWithVariant;
