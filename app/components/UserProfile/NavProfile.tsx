import { Avatar, Stack } from "@mui/material";
import React from "react";

const NavProfile = () => {
  return (
    <Stack direction="row" spacing={5}>
      <Avatar alt="Demo Image" src="/profile_avatar.png" />
      <Avatar className="" alt="Salman Aziz" src="/profile_avatar.jpeg" />
    </Stack>
  );
};

export default NavProfile;
