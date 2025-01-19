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

const SelectTextFields = () => {
  return (
    <TextField
      className="w-[420px] mx-auto"
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

export default SelectTextFields;
