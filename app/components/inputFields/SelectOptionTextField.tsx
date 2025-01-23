import { MenuItem, TextField } from "@mui/material";
import React from "react";

const roles = [
  {
    value: "student",
    label: "Student",
  },
  {
    value: "teacher",
    label: "Teacher",
  },
];

const SelectOptionTextField = () => {
  return (
    <TextField
      className="w-[420px] mx-auto"
      sx={{
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
      }}
      id="outlined-select-currency"
      select
      label="Profession"
      defaultValue="student"
      helperText="Please select your Role"
    >
      {roles.map((option) => (
        <MenuItem
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
          }}
          key={option.value}
          value={option.value}
        >
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectOptionTextField;
