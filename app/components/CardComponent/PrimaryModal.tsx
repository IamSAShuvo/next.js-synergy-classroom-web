"use client";
import React, { FC } from "react";
import {
  ClickAwayListener,
  Avatar,
  Button,
  Grow,
  Paper,
  Popper,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import UserProfile from "../UserProfile/UserProfile";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";

interface ProfileModalProps {
  // open?: boolean;
  // setOpen?: (open: boolean) => void;
  name: string;
  avatarSrc: string;
  roles: string[];
}

const Arrow = styled("div")(({ theme }) => ({
  width: "20px",
  height: "20px",
  backgroundColor: theme.palette.background.paper,
  position: "absolute",
  top: "-10px",
  right: "1%",
  transform: "translateX(-50%) rotate(45deg)",
  // boxShadow: theme.shadows[3],
  zIndex: -1,
}));

const ProfileModal: FC<ProfileModalProps> = ({
  name,
  avatarSrc,
  roles,
  // open,
  // setOpen,
}) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const router = useRouter();

  const handleNavigate = () => router.push("/");

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  return (
    <Stack direction="row" spacing={2}>
      <Button
        ref={anchorRef}
        onClick={handleToggle}
        disableRipple
        sx={{ minWidth: 0, p: 0 }}
      >
        <div className="flex items-center cursor-pointer gap-8 text-lg font-medium leading-5 text-midnightBlack">
          <h1>{name}</h1>
          <Avatar
            alt={name}
            src={avatarSrc}
            sx={{ height: 50, width: 50 }}
            className=""
          />
        </div>
      </Button>
      <ClickAwayListener onClickAway={handleClose}>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          placement="bottom-start"
          transition
          disablePortal
          modifiers={[
            {
              name: "offset",
              options: {
                offset: [0, 20],
              },
            },
          ]}
          sx={{ zIndex: 1200, width: 320 }}
        >
          {({ TransitionProps }) => (
            <Grow {...TransitionProps}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  position: "relative",
                  width: "100%",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                }}
              >
                <Arrow />

                <div className="w-full">
                  <UserProfile
                    avatarSrc={avatarSrc}
                    name={name}
                    role={roles[0]}
                  />
                  <PrimaryButton
                    onClick={handleNavigate}
                    text="Log out"
                    className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6 mt-16"
                  />
                </div>
              </Paper>
            </Grow>
          )}
        </Popper>
      </ClickAwayListener>
    </Stack>
  );
};

export default ProfileModal;

{
  /* <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
  <div className="flex items-center justify-between mt-8">
    <p>username:</p>
    <span>{name}</span>
  </div>
</Box> */
}

{
  /* <ClickAwayListener onClickAway={handleClose}>
                <div className="w-full">
                  <UserProfile
                    avatarSrc={avatarSrc}
                    name={name}
                    role={roles[0]}
                  />
                  <PrimaryButton
                    text="Log out"
                    className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6 mt-16"
                  />
                </div>
              </ClickAwayListener> */
}
