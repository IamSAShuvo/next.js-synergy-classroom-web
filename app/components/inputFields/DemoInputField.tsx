"use client";

import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextFieldProps,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

interface ReusableInputFieldProps {
  label: string;
  placeholder?: string;
  variant?: TextFieldProps["variant"];
  isPassword?: boolean;
  hasExpandableFields?: boolean;
  onExpand?: () => void;
}

const ReusableInputField: React.FC<ReusableInputFieldProps> = ({
  label,
  placeholder,
  variant = "outlined",
  isPassword = false,
  hasExpandableFields = false,
  onExpand,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleVisibilityToggle = () => {
    setIsVisible((prev) => !prev);
  };

  const handleExpandToggle = () => {
    setIsExpanded((prev) => !prev);
    if (onExpand) onExpand();
  };

  const endAdornment = isPassword ? (
    <IconButton
      aria-label={isVisible ? "hide password" : "show password"}
      onClick={handleVisibilityToggle}
      edge="end"
    >
      {isVisible ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  ) : hasExpandableFields ? (
    <IconButton
      aria-label={
        isExpanded ? "hide additional fields" : "show additional fields"
      }
      onClick={handleExpandToggle}
      edge="end"
    >
      {isExpanded ? (
        <IndeterminateCheckBoxOutlinedIcon />
      ) : (
        <AddBoxOutlinedIcon />
      )}
    </IconButton>
  ) : null;

  return (
    <div className="flex flex-col gap-4">
      <FormControl variant={variant} className="w-[420px]">
        <InputLabel
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
            "&.Mui-focused": {
              color: "var(--primaryColor)",
            },
          }}
          htmlFor={`input-${label}`}
        >
          {label}
        </InputLabel>
        <OutlinedInput
          id={`input-${label}`}
          type={isPassword && !isVisible ? "password" : "text"}
          placeholder={placeholder}
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
            "&.Mui-focused": {
              color: "var(--primaryColor)",
            },
          }}
          endAdornment={
            <InputAdornment position="end">{endAdornment}</InputAdornment>
          }
          label={label}
        />
      </FormControl>
      {isExpanded && hasExpandableFields && (
        <>
          <ReusableInputField label="Author Name" />
          <ReusableInputField label="Additional Field" />
        </>
      )}
    </div>
  );
};

export default ReusableInputField;
