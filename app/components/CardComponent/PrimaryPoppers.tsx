"use client";
import React, { FC, RefObject } from "react";
import { ClickAwayListener, Grow, Paper, Popper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/app/store/slices/authenticationSlice/authActions/authActions";
import { AppDispatch, RootState } from "@/app/store/store";
import Cookies from "js-cookie";
import PrimaryProfile from "../UserProfile/PrimaryProfile";

interface PrimaryPoppersProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  avatarSrc: string;
  anchorRef: RefObject<HTMLDivElement | null>;
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
}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector((state: RootState) => state.auth);
  const role = Cookies.get("role")?.toLowerCase();
  const { courses, user } = useSelector((state: RootState) => state.profile);

  const handleNavigate = async () => {
    try {
      const logoutAction = await dispatch(logoutUser());
      if (logoutUser.fulfilled.match(logoutAction)) {
        Cookies.remove("token");
        Cookies.remove("user");
        Cookies.remove("role");
        router.push("/login");
      }
    } catch {}
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
                    className="flex flex-col items-center gap-7"
                  />
                  <div className="mt-6 text-gray-400 flex flex-col gap-4">
                    <p className="flex justify-between">
                      username: <span>{user?.username}</span>
                    </p>
                    <p className="flex justify-between">
                      email: <span>{user?.email}</span>
                    </p>
                    <p className="flex justify-between">
                      {`Course ${role === "student" ? "Enrolled" : "Created"}:`}
                      <span>{courses.length}</span>
                    </p>
                  </div>
                  <PrimaryButton
                    onClick={handleNavigate}
                    text={loading ? "Log out..." : "Log out"}
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
