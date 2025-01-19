import { TextField } from "@mui/material";
import React from "react";

const TextFieldWithFilled = () => {
  return (
    <div>
      <TextField
        id="filled-basic"
        label="Create Course"
        variant="filled"
        className="w-[420px] mx-auto"
      />
    </div>
  );
};

export default TextFieldWithFilled;
