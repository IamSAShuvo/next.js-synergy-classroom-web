// "use client";
// import {
//   FilledInput,
//   FormControl,
//   IconButton,
//   Input,
//   InputAdornment,
//   InputLabel,
//   OutlinedInput,
//   styled,
// } from "@mui/material";
// import React, { FC, useState } from "react";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
// import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

// interface PrimaryInputFieldProps {
//   label: string;
//   placeholder?: string;
//   variant?: "standard" | "outlined" | "filled";
//   isPassword?: boolean;
//   hasExpandableFields?: boolean;
// }

// const inputStyle = {
//   fontFamily: "Poppins, sans-serif",
//   color: "var(--primaryColor)",
//   "&.Mui-focused": {
//     color: "var(--primaryColor)",
//   },
// };

// const StyledFormControl = styled(FormControl)(({}) => ({
//   "& label": {
//     fontFamily: "Poppins, sans-serif",
//     color: "var(--primaryColor, #1976d2)",
//   },
// }));

// const inputComponents = {
//   standard: Input,
//   filled: FilledInput,
//   outlined: OutlinedInput,
// };

// const PrimaryInputField: FC<PrimaryInputFieldProps> = ({
//   label,
//   placeholder,
//   variant = "outlined",
//   isPassword = false,
//   hasExpandableFields = false,
//   ...props
// }) => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const handleClickShowPassword = () => setShowPassword((show) => !show);
//   const handleExpandToggle = () => setIsExpanded((prev) => !prev);
//   const handleMouseDownPassword = (
//     event: React.MouseEvent<HTMLButtonElement>
//   ) => event.preventDefault();
//   const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) =>
//     event.preventDefault();

//   const InputComponent = inputComponents[variant] || OutlinedInput;

//   const endAdornment = () => {
//     if (isPassword) {
//       return (
//         <InputAdornment position="end">
//           <IconButton
//             aria-label={showPassword ? "Hide password" : "Show password"}
//             onClick={handleClickShowPassword}
//             onMouseDown={handleMouseDownPassword}
//             onMouseUp={handleMouseUpPassword}
//           >
//             {showPassword ? <Visibility /> : <VisibilityOff />}
//           </IconButton>
//         </InputAdornment>
//       );
//     }
//     if (hasExpandableFields) {
//       return (
//         <InputAdornment position="end">
//           <IconButton
//             aria-label={
//               isExpanded ? "Hide additional fields" : "Show additional fields"
//             }
//             onClick={handleExpandToggle}
//             edge="end"
//           >
//             {isExpanded ? (
//               <IndeterminateCheckBoxOutlinedIcon />
//             ) : (
//               <AddBoxOutlinedIcon />
//             )}
//           </IconButton>
//         </InputAdornment>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="w-full flex flex-col gap-5">
//       <StyledFormControl variant={variant}>
//         <InputLabel htmlFor={label.toLowerCase().replace(/\s+/g, "-")}>
//           {label}
//         </InputLabel>
//         <InputComponent
//           sx={inputStyle}
//           id={label.toLowerCase().replace(/\s+/g, "-")}
//           type={isPassword && !showPassword ? "password" : "text"}
//           placeholder={placeholder}
//           endAdornment={endAdornment()}
//           label={variant === "outlined" ? label : undefined}
//           {...props}
//         />
//       </StyledFormControl>

//       {isExpanded && hasExpandableFields && (
//         <>
//           <PrimaryInputField
//             label="Author Name"
//             variant="standard"
//             placeholder="Book Author"
//           />
//           <PrimaryInputField
//             label="Book Name"
//             variant="standard"
//             placeholder="Add your book name"
//             hasExpandableFields
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default PrimaryInputField;

"use client";
import React, { FC, useState } from "react";
import {
  FilledInput,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";

interface PrimaryInputFieldProps {
  label: string;
  placeholder?: string;
  variant?: "standard" | "outlined" | "filled";
  isPassword?: boolean;
  hasExpandableFields?: boolean;
  value?: string; // Added for controlled input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Callback function for input changes
}

const StyledFormControl = styled(FormControl)(({}) => ({
  "& label": {
    fontFamily: "Poppins, sans-serif",
    color: "var(--primaryColor, #1976d2)",
    "&.Mui-focused": {
      color: "var(--primaryColor, #1976d2) !important", // Fixes label color on focus
    },
  },
}));

const inputComponents = {
  standard: Input,
  filled: FilledInput,
  outlined: OutlinedInput,
};

const PrimaryInputField: FC<PrimaryInputFieldProps> = ({
  label,
  placeholder,
  variant = "outlined",
  isPassword = false,
  hasExpandableFields = false,
  value = "", // Default value for controlled input
  onChange,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
  const handleExpandToggle = () => setIsExpanded((prev) => !prev);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => event.preventDefault();
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) =>
    event.preventDefault();

  const InputComponent = inputComponents[variant] || OutlinedInput;

  const endAdornment = () => {
    if (isPassword) {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            onMouseUp={handleMouseUpPassword}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        </InputAdornment>
      );
    }
    if (hasExpandableFields) {
      return (
        <InputAdornment position="end">
          <IconButton
            aria-label={
              isExpanded ? "Hide additional fields" : "Show additional fields"
            }
            onClick={handleExpandToggle}
            edge="end"
          >
            {isExpanded ? (
              <IndeterminateCheckBoxOutlinedIcon />
            ) : (
              <AddBoxOutlinedIcon />
            )}
          </IconButton>
        </InputAdornment>
      );
    }
    return null;
  };

  return (
    <div className="w-full flex flex-col gap-5">
      <StyledFormControl variant={variant} fullWidth>
        <InputLabel htmlFor={label.toLowerCase().replace(/\s+/g, "-")}>
          {label}
        </InputLabel>
        <InputComponent
          id={label.toLowerCase().replace(/\s+/g, "-")}
          type={isPassword && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value} // Controlled input
          onChange={onChange} // Controlled input
          endAdornment={endAdornment()}
          label={variant === "outlined" ? label : undefined}
          {...props}
        />
      </StyledFormControl>

      {isExpanded && hasExpandableFields && (
        <div className="flex flex-col gap-3">
          <PrimaryInputField
            label="Author Name"
            variant="standard"
            placeholder="Book Author"
          />
          <PrimaryInputField
            label="Book Name"
            variant="standard"
            placeholder="Add your book name"
          />
        </div>
      )}
    </div>
  );
};

export default PrimaryInputField;
