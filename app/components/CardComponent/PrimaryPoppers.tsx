"use client";

import React, { FC, RefObject } from "react";
import { ClickAwayListener, Grow, Paper, Popper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import PrimaryProfile from "../UserProfile/PrimaryProfile";

interface PrimaryPoppersProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  avatarSrc: string;
  anchorRef: RefObject<HTMLDivElement | null>;
  userName?: string;
}

const Arrow = styled("div")(({ theme }) => ({
  width: "20px",
  height: "20px",
  backgroundColor: theme.palette.background.paper,
  position: "absolute",
  top: "-10px",
  right: "1%",
  transform: "translateX(-50%) rotate(45deg)",
  zIndex: -1,
}));

const PrimaryPoppers: FC<PrimaryPoppersProps> = ({
  avatarSrc,
  open,
  setOpen,
  anchorRef,
  userName = "User",
}) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/");
    setOpen(false);
  };

  const handleClose = (event: MouseEvent | TouchEvent) => {
    if (anchorRef.current?.contains(event.target as Node)) {
      return;
    }
    setOpen(false);
  };

  return (
    <Stack direction="row" spacing={2}>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-end"
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
          <ClickAwayListener onClickAway={handleClose}>
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
                  <PrimaryProfile
                    avatarSrc={avatarSrc}
                    name={userName}
                    className="flex flex-col items-center gap-7"
                  />
                  <PrimaryButton
                    onClick={handleNavigate}
                    text={"Log out"}
                    className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6 mt-16"
                  />
                </div>
              </Paper>
            </Grow>
          </ClickAwayListener>
        )}
      </Popper>
    </Stack>
  );
};

export default PrimaryPoppers;
