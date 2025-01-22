import TextField from "@mui/material/TextField";
import React from "react";

const InputTextFieldWithBorder = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
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

export default InputTextFieldWithBorder;
