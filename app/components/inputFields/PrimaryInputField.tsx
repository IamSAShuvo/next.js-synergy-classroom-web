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
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

interface PrimaryInputFieldProps {
  label: string;
  name?: string;
  placeholder?: string;
  variant?: "standard" | "outlined" | "filled";
  isPassword?: boolean;
  hasExpandableFields?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children?: React.ReactNode;
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
  hasExpandableFields = false,
  value = "",
  onChange,
  children,
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
          onChange={onChange}
          value={value}
          label={variant === "outlined" ? label : undefined}
          {...props}
        />
      </StyledFormControl>

      {isExpanded && hasExpandableFields && (
        <div className="w-full flex flex-col gap-5">
          {children}
          {/* <PrimaryInputField
            label="Author Name"
            variant="standard"
            placeholder="Book Author"
          />
          <PrimaryInputField
            label="Book Name"
            variant="standard"
            placeholder="Add your book name"
          /> */}
        </div>
      )}
    </div>
  );
};

export default PrimaryInputField;
