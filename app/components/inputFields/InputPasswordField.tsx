"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import React, { useState } from "react";

const InputPasswordField = () => {
  const [showPassword1, setShowPassword1] = useState(false);

  const handleClickShowPassword =
    (setShowPassword: React.Dispatch<React.SetStateAction<boolean>>) => () =>
      setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) =>
    event.preventDefault();
  return (
    <div>
      <FormControl variant="outlined" className="w-[420px] mx-auto">
        <InputLabel
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
            "&.Mui-focused": {
              color: "var(--primaryColor)",
            },
          }}
          htmlFor="outlined-adornment-password1"
        >
          Password
        </InputLabel>
        <OutlinedInput
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
            "&.Mui-focused": {
              color: "var(--primaryColor)",
            },
          }}
          id="outlined-adornment-password1"
          type={showPassword1 ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword1 ? "hide the password" : "display the password"
                }
                onClick={handleClickShowPassword(setShowPassword1)}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword1 ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </div>
  );
};

export default InputPasswordField;
