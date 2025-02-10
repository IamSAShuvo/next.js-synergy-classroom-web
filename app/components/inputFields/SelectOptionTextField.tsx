import { MenuItem, TextField } from "@mui/material";
import React, { FC } from "react";
import USER_ROLE_OPTIONS from "@/app/constants/userRoleOption";

interface SelectOptionTextFieldProps {
  defaultValue?: string;
  label?: string;
  helperText?: string;
}

const SelectOptionTextField: FC<SelectOptionTextFieldProps> = ({
  defaultValue = "student",
  label = "Profession",
  helperText = "Please select your Role",
}) => {
  const inputFieldStyle = {
    "& .MuiInputLabel-root": {
      fontFamily: "Poppins, sans-serif",
      color: "var(--primaryColor)",
    },
    "& .MuiOutlinedInput-root": {
      fontFamily: "Poppins, sans-serif",
      "& fieldset": {
        borderColor: "var(--primaryColor)",
      },
      "&:hover fieldset": {
        borderColor: "var(--primaryColor)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "var(--primaryColor)",
      },
    },
    "& .MuiFormHelperText-root": {
      fontFamily: "Poppins, sans-serif",
      color: "var(--primaryColor)",
    },
  };
  const menuItemStyle = {
    fontFamily: "Poppins, sans-serif",
    color: "var(--primaryColor)",
  };
  return (
    <TextField
      className=" w-full"
      sx={inputFieldStyle}
      id="outlined-select-currency"
      select
      label={label}
      defaultValue={defaultValue}
      helperText={helperText}
    >
      {USER_ROLE_OPTIONS.map((option) => (
        <MenuItem sx={menuItemStyle} key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectOptionTextField;
