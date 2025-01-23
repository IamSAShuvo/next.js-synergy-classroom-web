"use client";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextFieldProps,
} from "@mui/material";
import React, { useState } from "react";
import InputTextFieldWithVariant from "./InputTextFieldWithVariant";

interface InputTextFieldWithExpandableProps {
  placeholder?: string;
  variant?: TextFieldProps["variant"];
}

const InputTextFieldWithExpandable: React.FC<
  InputTextFieldWithExpandableProps
> = ({ variant }) => {
  const [expand, setExpand] = useState<boolean>(false);
  const handleIconClick = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <FormControl variant={variant || "standard"} className="w-[420px]">
        <InputLabel
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
            "&.Mui-focused": {
              color: "var(--primaryColor)",
            },
          }}
          htmlFor="standard-adornment-password"
        >
          Book Name
        </InputLabel>
        <Input
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
            "&.Mui-focused": {
              color: "var(--primaryColor)",
            },
          }}
          placeholder="Add Book"
          id="standard-adornment-password"
          type="text"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={expand ? "hide the field" : "show the field"}
                onClick={handleIconClick}
              >
                {expand ? (
                  <IndeterminateCheckBoxOutlinedIcon />
                ) : (
                  <AddBoxOutlinedIcon />
                )}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      {expand && (
        <>
          <InputTextFieldWithVariant label="Author Name" />
          <InputTextFieldWithExpandable />
        </>
      )}
    </div>
  );
};

export default InputTextFieldWithExpandable;
