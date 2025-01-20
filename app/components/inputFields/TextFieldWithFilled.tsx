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
        }}
      />
    </div>
  );
};

export default TextFieldWithFilled;
