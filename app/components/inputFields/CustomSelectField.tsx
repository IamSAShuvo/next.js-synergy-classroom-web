import { MenuItem, TextField } from "@mui/material";
import React, { FC } from "react";
import USER_ROLE_OPTIONS from "@/app/constants/professionOptions";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectFieldProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  helperText?: string;
  options?: Option[];
}

const CustomSelectField: FC<CustomSelectFieldProps> = ({
  value,
  onChange,
  label = "Profession",
  helperText = "Please select your Role",
  options = USER_ROLE_OPTIONS,
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
      className="w-full"
      sx={inputFieldStyle}
      id="outlined-select-currency"
      select
      label={label}
      value={value} // Controlled component
      onChange={onChange} // Handle change to update value
      helperText={helperText}
    >
      {options.map((option) => (
        <MenuItem sx={menuItemStyle} key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default CustomSelectField;
