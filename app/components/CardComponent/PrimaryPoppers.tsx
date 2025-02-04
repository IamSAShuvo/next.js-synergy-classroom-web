"use client";
import React, { FC, RefObject } from "react";
import Cookies from "js-cookie";
import { ClickAwayListener, Grow, Paper, Popper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import UserProfile from "../UserProfile/UserProfile";
import PrimaryButton from "../Buttons/PrimaryButton";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "@/app/store/slices/authSlice";
import { AppDispatch, RootState } from "@/app/store/store";

interface PrimaryPoppersProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name: string;
  avatarSrc: string;
  roles: string;
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
  name,
  avatarSrc,
  roles,
  open,
  setOpen,
  anchorRef,
}) => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { loading } = useSelector((state: RootState) => state.auth);

  const handleNavigate = async () => {
    try {
      const logoutAction = await dispatch(logoutUser());
      if (logoutUser.fulfilled.match(logoutAction)) {
        Cookies.remove("token");
        Cookies.remove("user");
        router.push("/login");
      } else {
        console.error("error unknown");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      event.target instanceof HTMLElement &&
      event.target.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false); // Close popper when clicking outside
  };

  return (
    <Stack direction="row" spacing={2}>
      {/* <div
        ref={anchorRef}
        onClick={handleToggle}
        className="flex items-center cursor-pointer gap-8 text-lg font-medium leading-5 text-midnightBlack"
      >
        <h1>{name}</h1>
        <Avatar
          alt={name}
          src={avatarSrc}
          sx={{ height: 50, width: 50 }}
          className=""
        />
      </div> */}
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
                  <UserProfile avatarSrc={avatarSrc} name={name} role={roles} />
                  <PrimaryButton
                    onClick={handleNavigate}
                    text={loading ? "Log out..." : "Log out"}
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

export default PrimaryPoppers;

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
