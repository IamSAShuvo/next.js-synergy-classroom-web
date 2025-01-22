"use client";

import { TextField } from "@mui/material";
import React from "react";

import { TextFieldProps } from "@mui/material";

interface InputTextFieldWithBottomBorderProps {
  label: string;
  placeholder: string;
  variant?: TextFieldProps["variant"];
}

const InputTextFieldWithBottomBorder: React.FC<
  InputTextFieldWithBottomBorderProps
> = ({ label, placeholder, variant }) => {
  return (
    <div className="flex flex-col">
      <TextField
        id="filled-basic"
        label={label}
        variant={variant || "standard"}
        placeholder={placeholder}
        className="w-[420px]"
        slotProps={{
          inputLabel: {
            sx: {
              fontFamily: "Poppins, sans-serif",
              color: "theme('colors.headingColor')",
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

export default InputTextFieldWithBottomBorder;

// import React, { useState } from "react";
// import {
//   FormControl,
//   InputLabel,
//   Input,
//   InputAdornment,
//   IconButton,
//   TextField,
// } from "@mui/material";
// import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

// const TextFieldWithPasswordToggle = () => {
//   const [showTextFields, setShowTextFields] = useState(false);

//   // Handle the button click to toggle the visibility of two TextFields
//   const handleButtonClick = () => {
//     setShowTextFields((prev) => !prev);
//   };

//   return (
//     <div className="flex flex-col items-center">
//       <FormControl variant="standard" className="w-[420px] mx-auto mb-4">
//         <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//         <Input
//           id="standard-adornment-password"
//           type="text"
//           endAdornment={
//             <InputAdornment position="end">
//               <IconButton
//                 aria-label={showTextFields ? "hide the fields" : "show the fields"}
//                 onClick={handleButtonClick} // Toggle the state on button click
//               >
//                 <AddBoxOutlinedIcon />
//               </IconButton>
//             </InputAdornment>
//           }
//         />
//       </FormControl>

//       {/* Show two TextFields below the Input when the state is true */}
//       {showTextFields && (
//         <div className="flex flex-col items-center space-y-4">
//           <TextField
//             id="filled-basic-1"
//             label="Create Course 1"
//             variant="standard"
//             className="w-[420px]"
//             slotProps={{
//               inputLabel: {
//                 sx: {
//                   fontFamily: "Poppins, sans-serif",
//                   color: "theme('colors.headingColor')",
//                 },
//               },
//               input: {
//                 sx: {
//                   fontFamily: "Poppins, sans-serif",
//                   "&::placeholder": {
//                     fontFamily: "Poppins, sans-serif",
//                     color: "var(--headingColor)",
//                   },
//                 },
//               },
//             }}
//           />
//           <TextField
//             id="filled-basic-2"
//             label="Create Course 2"
//             variant="standard"
//             className="w-[420px]"
//             slotProps={{
//               inputLabel: {
//                 sx: {
//                   fontFamily: "Poppins, sans-serif",
//                   color: "theme('colors.headingColor')",
//                 },
//               },
//               input: {
//                 sx: {
//                   fontFamily: "Poppins, sans-serif",
//                   "&::placeholder": {
//                     fontFamily: "Poppins, sans-serif",
//                     color: "var(--headingColor)",
//                   },
//                 },
//               },
//             }}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default TextFieldWithPasswordToggle;
