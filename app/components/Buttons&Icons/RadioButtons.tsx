"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function RowRadioButtonsGroup() {
  const [value, setValue] = React.useState("female");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <div className="text-headingColor">
      <FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--headingColor)",
            "&.Mui-focused": {
              color: "var(--headingColor)",
            },
          }}
        >
          Select Profession
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            sx={{
              fontFamily: "Poppins, sans-serif",
              "& .MuiFormControlLabel-label": {
                fontFamily: "Poppins, sans-serif",
              },
            }}
            value="female"
            control={<Radio />}
            label="Student"
          />
          <FormControlLabel
            sx={{
              fontFamily: "Poppins, sans-serif",
              "& .MuiFormControlLabel-label": {
                fontFamily: "Poppins, sans-serif",
              },
            }}
            value="male"
            control={<Radio />}
            label="Teacher"
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
}
