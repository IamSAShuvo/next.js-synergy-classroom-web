import React, { FC } from "react";
import {
  Avatar,
  Button,
  Grow,
  Paper,
  Popper,
  Tooltip,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
// import UserProfile from "../UserProfile/UserProfile";
// import PrimaryButton from "../Buttons/PrimaryButton";

interface ProfileModalProps {
  // open: boolean;
  // setOpen: (open: boolean) => void;
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
  boxShadow: theme.shadows[3],
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
      <Tooltip title="Profile" arrow>
        <Button
          ref={anchorRef}
          onClick={handleToggle}
          sx={{ borderRadius: "50%", minWidth: 0, p: 0 }}
        >
          <Avatar
            alt="User"
            src="https://randomuser.me/api/portraits/men/75.jpg"
          />
        </Button>
      </Tooltip>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 30],
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
                boxShadow: 5, // Adds outer shadow
              }}
            >
              {/* Arrow */}
              <Arrow />

              {/* Close Icon */}
              <IconButton
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Profile Content */}
              <Avatar
                alt="User"
                src="https://randomuser.me/api/portraits/men/75.jpg"
                sx={{ width: 80, height: 80, mb: 1 }}
              />
              <Typography variant="h6">Mr. Alvert Josh</Typography>
              <Typography variant="body2" color="textSecondary">
                Electrical Theory
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 2, width: "100%" }}
                onClick={handleClose}
              >
                Save
              </Button>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

export default ProfileModal;

{
  /* <UserProfile avatarSrc={avatarSrc} name={name} role={roles[0]} /> */
}

{
  /* <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
  <div className="flex items-center justify-between mt-8">
    <p>username:</p>
    <span>{name}</span>
  </div>
</Box> */
}

{
  /* <PrimaryButton
  text="Log out"
  className="w-full hover:bg-indigo-600 bg-skyBlue px-7 py-3 rounded text-white font-medium text-base leading-6 mt-8"
/> */
}
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Tooltip from "@mui/material/Tooltip";
// import PersonAdd from "@mui/icons-material/PersonAdd";
// import Settings from "@mui/icons-material/Settings";
// import Logout from "@mui/icons-material/Logout";

// export default function AccountMenu() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <React.Fragment>
//       <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
//         <Typography sx={{ minWidth: 100 }}>Contact</Typography>
//         <Typography sx={{ minWidth: 100 }}>Profile</Typography>
//         <Tooltip title="Account settings">
//           <IconButton
//             onClick={handleClick}
//             size="small"
//             sx={{ ml: 2 }}
//             aria-controls={open ? "account-menu" : undefined}
//             aria-haspopup="true"
//             aria-expanded={open ? "true" : undefined}
//           >
//             <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
//           </IconButton>
//         </Tooltip>
//       </Box>
//       <Menu
//         anchorEl={anchorEl}
//         id="account-menu"
//         open={open}
//         onClose={handleClose}
//         onClick={handleClose}
//         slotProps={{
//           paper: {
//             elevation: 0,
//             sx: {
//               overflow: "visible",
//               filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//               mt: 1.5,
//               "& .MuiAvatar-root": {
//                 width: 32,
//                 height: 32,
//                 ml: -0.5,
//                 mr: 1,
//               },
//               "&::before": {
//                 content: '""',
//                 display: "block",
//                 position: "absolute",
//                 top: 0,
//                 right: 14,
//                 width: 10,
//                 height: 10,
//                 bgcolor: "background.paper",
//                 transform: "translateY(-50%) rotate(45deg)",
//                 zIndex: 0,
//               },
//             },
//           },
//         }}
//         transformOrigin={{ horizontal: "right", vertical: "top" }}
//         anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
//       >
//         <MenuItem onClick={handleClose}>
//           <Avatar /> Profile
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <Avatar /> My account
//         </MenuItem>
//         <Divider />
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <PersonAdd fontSize="small" />
//           </ListItemIcon>
//           Add another account
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Settings fontSize="small" />
//           </ListItemIcon>
//           Settings
//         </MenuItem>
//         <MenuItem onClick={handleClose}>
//           <ListItemIcon>
//             <Logout fontSize="small" />
//           </ListItemIcon>
//           Logout
//         </MenuItem>
//       </Menu>
//     </React.Fragment>
//   );
// }

// import * as React from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   IconButton,
//   Popover,
//   Tooltip,
//   Typography,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// export default function AccountMenu() {
//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <React.Fragment>
//       {/* Avatar Button */}
//       <Tooltip title="View Profile" arrow>
//         <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
//           <Avatar
//             src="https://randomuser.me/api/portraits/men/75.jpg"
//             sx={{ width: 40, height: 40 }}
//           />
//         </IconButton>
//       </Tooltip>

//       {/* Popover for Profile Card */}
//       <Popover
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
//         transformOrigin={{ vertical: "top", horizontal: "right" }}
//         sx={{
//           ".MuiPaper-root": {
//             borderRadius: 3,
//             p: 2,
//             maxWidth: 420,
//             width: "100%",
//             overflowY: "auto",
//             mt: 1.5,
//             position: "absolute", // Make sure the position is absolute or fixed to not interfere with the flow
//             filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
//             zIndex: 1300, // Increase the z-index to ensure it overlays above other content
//             "&::before": {
//               content: '""',
//               display: "block",
//               position: "absolute",
//               top: 0,
//               right: 16,
//               width: 10,
//               height: 10,
//               bgcolor: "background.paper",
//               transform: "translateY(-50%) rotate(45deg)",
//               zIndex: 0,
//             },
//           },
//         }}
//       >
//         {/* Profile Section */}
//         <Box sx={{ textAlign: "center", position: "relative", mb: 5 }}>
//           <Avatar
//             src="https://randomuser.me/api/portraits/men/75.jpg"
//             sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
//           />
//           {/* Close Button - Now Closes the Popover */}
//           <IconButton
//             onClick={handleClose} // Close popover when clicked
//             sx={{
//               position: "absolute",
//               top: 10,
//               right: 10,
//               bgcolor: "white",
//               boxShadow: 2,
//             }}
//           >
//             <CloseIcon fontSize="small" />
//           </IconButton>
//           <Typography variant="h6">Mr. Alvert Josh</Typography>
//           <Typography color="gray">Electrical Theory</Typography>
//         </Box>

//         {/* Save Button */}
//         <Button variant="contained" fullWidth sx={{ mt: 1 }}>
//           Save
//         </Button>
//       </Popover>
//     </React.Fragment>
//   );
// }

// import * as React from "react";
// import {
//   Avatar,
//   Box,
//   Button,
//   IconButton,
//   Popper,
//   Paper,
//   Typography,
//   ClickAwayListener,
//   Grow,
//   Stack,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";

// export default function ProfilePopover() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef<HTMLButtonElement>(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event: Event | React.SyntheticEvent) => {
//     if (
//       anchorRef.current &&
//       anchorRef.current.contains(event.target as HTMLElement)
//     ) {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <Stack direction="row" spacing={2} zIndex={9999}>
//       <IconButton ref={anchorRef} onClick={handleToggle}>
//         <Avatar src="https://randomuser.me/api/portraits/men/75.jpg" />
//       </IconButton>
//       <Popper open={open} anchorEl={anchorRef.current} transition disablePortal>
//         {({ TransitionProps }) => (
//           <Grow {...TransitionProps}>
//             <Paper sx={{ p: 4, borderRadius: 3, maxWidth: 420, boxShadow: 5 }}>
//               <ClickAwayListener onClickAway={handleClose}>
//                 <Box sx={{ textAlign: "center", position: "relative" }}>
//                   <Avatar
//                     src="https://randomuser.me/api/portraits/men/75.jpg"
//                     sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}
//                   />
//                   <IconButton
//                     onClick={handleClose}
//                     sx={{ position: "absolute", top: 10, right: 10 }}
//                   >
//                     <CloseIcon />
//                   </IconButton>
//                   <Typography variant="h6">Mr. Alvert Josh</Typography>
//                   <Typography color="gray">Electrical Theory</Typography>
//                   <Button variant="contained" fullWidth sx={{ mt: 2 }}>
//                     Save
//                   </Button>
//                 </Box>
//               </ClickAwayListener>
//             </Paper>
//           </Grow>
//         )}
//       </Popper>
//     </Stack>
//   );
// }

// import * as React from "react";
// import {
//   Avatar,
//   Button,
//   Grow,
//   Paper,
//   Popper,
//   Tooltip,
//   IconButton,
//   Stack,
//   Typography,
// } from "@mui/material";
// import CloseIcon from "@mui/icons-material/Close";
// import { styled } from "@mui/material/styles";

// const Arrow = styled("div")(({ theme }) => ({
//   width: "20px",
//   height: "20px",
//   backgroundColor: theme.palette.background.paper,
//   position: "absolute",
//   top: "-10px",
//   right: "1%",
//   transform: "translateX(-50%) rotate(45deg)",
//   boxShadow: theme.shadows[3],
//   zIndex: -1,
// }));

// export default function ProfilePopper() {
//   const [open, setOpen] = React.useState(false);
//   const anchorRef = React.useRef<HTMLButtonElement>(null);

//   const handleToggle = () => {
//     setOpen((prevOpen) => !prevOpen);
//   };

//   const handleClose = (event: Event | React.SyntheticEvent) => {
//     if (
//       anchorRef.current &&
//       anchorRef.current.contains(event.target as HTMLElement)
//     ) {
//       return;
//     }
//     setOpen(false);
//   };

//   return (
//     <Stack direction="row" spacing={2}>
//       <Tooltip title="Profile" arrow>
//         <Button
//           ref={anchorRef}
//           onClick={handleToggle}
//           sx={{ borderRadius: "50%", minWidth: 0, p: 0 }}
//         >
//           <Avatar
//             alt="User"
//             src="https://randomuser.me/api/portraits/men/75.jpg"
//           />
//         </Button>
//       </Tooltip>
//       <Popper
//         open={open}
//         anchorEl={anchorRef.current}
//         role={undefined}
//         placement="bottom-start"
//         transition
//         disablePortal
//         modifiers={[
//           {
//             name: "offset",
//             options: {
//               offset: [0, 30],
//             },
//           },
//         ]}
//         sx={{ zIndex: 1200, width: 320 }}
//       >
//         {({ TransitionProps }) => (
//           <Grow {...TransitionProps}>
//             <Paper
//               sx={{
//                 p: 2,
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 position: "relative",
//                 width: "100%",
//                 boxShadow: 5, // Adds outer shadow
//               }}
//             >
//               {/* Arrow */}
//               <Arrow />

//               {/* Close Icon */}
//               <IconButton
//                 onClick={handleClose}
//                 sx={{
//                   position: "absolute",
//                   top: 8,
//                   right: 8,
//                 }}
//               >
//                 <CloseIcon />
//               </IconButton>

//               {/* Profile Content */}
//               <Avatar
//                 alt="User"
//                 src="https://randomuser.me/api/portraits/men/75.jpg"
//                 sx={{ width: 80, height: 80, mb: 1 }}
//               />
//               <Typography variant="h6">Mr. Alvert Josh</Typography>
//               <Typography variant="body2" color="textSecondary">
//                 Electrical Theory
//               </Typography>
//               <Button
//                 variant="contained"
//                 sx={{ mt: 2, width: "100%" }}
//                 onClick={handleClose}
//               >
//                 Save
//               </Button>
//             </Paper>
//           </Grow>
//         )}
//       </Popper>
//     </Stack>
//   );
// }
