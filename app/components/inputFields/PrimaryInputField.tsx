"use client";
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
import React, { FC, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

interface PrimaryInputFieldProps {
  label: string;
  placeholder?: string;
  variant?: "standard" | "outlined" | "filled";
  isPassword?: boolean;
  hasExpandableFields?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  placeholder,
  variant = "outlined",
  isPassword = false,
  hasExpandableFields = false,
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleExpandToggle = () => setIsExpanded((prev) => !prev);

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
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      );
    }
    if (hasExpandableFields) {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label={
              isExpanded ? "Hide additional fields" : "Show additional fields"
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
        </InputAdornment>
      );
    }
    return null;
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <StyledFormControl variant={variant}>
        <InputLabel htmlFor={inputId}>{label}</InputLabel>
        <InputComponent
          sx={inputStyle}
          id={inputId}
          type={isPassword && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          endAdornment={endAdornment()}
          onChange={onChange}
          label={variant === "outlined" ? label : undefined}
          {...props}
        />
      </StyledFormControl>

      {isExpanded && hasExpandableFields && (
        <>
          <PrimaryInputField
            label="Author Name"
            variant="standard"
            placeholder="Book Author"
          />
          <PrimaryInputField
            label="Book Name"
            variant="standard"
            placeholder="Add your book name"
            hasExpandableFields
          />
        </>
      )}
    </div>
  );
};

export default PrimaryInputField;
