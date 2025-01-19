import TextField from "@mui/material/TextField";
import React from "react";

const TextInputField = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        className="w-[420px] mx-auto"
      />
    </div>
  );
};

export default TextInputField;
