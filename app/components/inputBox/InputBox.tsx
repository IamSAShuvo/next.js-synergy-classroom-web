import { Box, TextField } from "@mui/material";
// import TextField from "@mui/material/TextField/TextField";
import React from "react";

const InputBox = () => {
  return (
    <div>
      <TextField
        className="w-3/4"
        id="outlined-basic"
        label="username"
        variant="outlined"
      />

      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />
      </Box>
    </div>
  );
};

export default InputBox;
