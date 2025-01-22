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

const SelectOptionTextFields = () => {
  return (
    <TextField
      className="w-[420px] mx-auto"
      slotProps={{
        inputLabel: {
          sx: {
            fontFamily: "Poppins, sans-serif",
            color: 'theme("colors.headingColor")',
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
        formHelperText: {
          sx: {
            fontFamily: "Poppins, sans-serif",
            color: "var(--headingColor)",
          },
        },
      }}
      id="outlined-select-currency"
      select
      label="Profession"
      defaultValue="student"
      helperText="Please select your Role"
    >
      {roles.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectOptionTextFields;
