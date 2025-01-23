"use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface RowRadioButtonsGroupProps {
  initialValue?: string;
}

const RowRadioButtonsGroup: React.FC<RowRadioButtonsGroupProps> = ({
  initialValue = "female",
}) => {
  const [value, setValue] = React.useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <FormLabel
          id="demo-row-radio-buttons-group-label"
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "var(--primaryColor)",
            "&.Mui-focused": {
              color: "var(--primaryColor)",
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
            value="female"
            control={<Radio sx={{ color: "var(--primaryColor)" }} />}
            label="Student"
            sx={{
              fontFamily: "Poppins, sans-serif",
              "& .MuiFormControlLabel-label": {
                fontFamily: "Poppins, sans-serif",
                color: "var(--primaryColor)",
              },
            }}
          />
          <FormControlLabel
            value="male"
            control={<Radio sx={{ color: "var(--primaryColor)" }} />}
            label="Teacher"
            sx={{
              fontFamily: "Poppins, sans-serif",
              "& .MuiFormControlLabel-label": {
                fontFamily: "Poppins, sans-serif",
                color: "var(--primaryColor)",
              },
            }}
          />
        </RadioGroup>
      </FormControl>
    </div>
  );
};

export default RowRadioButtonsGroup;
