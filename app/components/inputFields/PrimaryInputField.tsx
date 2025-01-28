"use client";
import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
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
  onExpand?: () => void;
}

const inputStyle = {
  fontFamily: "Poppins, sans-serif",
  color: "var(--primaryColor)",
  "&.Mui-focused": {
    color: "var(--primaryColor)",
  },
};

const PrimaryInputField: FC<PrimaryInputFieldProps> = ({
  label,
  placeholder,
  variant,
  isPassword = false,
  hasExpandableFields = false,
  onExpand,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleExpandToggle = () => {
    setIsExpanded((prev) => !prev);
    if (onExpand) onExpand();
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const endAdornment = isPassword ? (
    <IconButton
      aria-label={showPassword ? "hide the password" : "display the password"}
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
      onMouseUp={handleMouseUpPassword}
    >
      {showPassword ? <VisibilityOff /> : <Visibility />}
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
    <div className="flex flex-col gap-5">
      <FormControl variant={variant} className="md:w-[420px] lg:w-[420px]">
        <InputLabel sx={inputStyle} htmlFor="standard-adornment-password">
          {label}
        </InputLabel>
        {variant === "standard" ? (
          <Input
            sx={inputStyle}
            id={`input-${label}`}
            type={isPassword && !showPassword ? "text" : "password"}
            placeholder={placeholder}
            endAdornment={
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            }
          />
        ) : variant === "filled" ? (
          <FilledInput
            sx={inputStyle}
            id={`input-${label}`}
            type={isPassword && !showPassword ? "text" : "password"}
            placeholder={placeholder}
            endAdornment={
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            }
          />
        ) : (
          <OutlinedInput
            sx={inputStyle}
            id={`input-${label}`}
            type={isPassword && !showPassword ? "text" : "password"}
            placeholder={placeholder}
            endAdornment={
              <InputAdornment position="end">{endAdornment}</InputAdornment>
            }
            label={label}
          />
        )}
      </FormControl>
      {isExpanded && hasExpandableFields && (
        <PrimaryInputField
          placeholder="add your input"
          variant="outlined"
          label="Author Name"
        />
      )}
    </div>
  );
};

export default PrimaryInputField;
