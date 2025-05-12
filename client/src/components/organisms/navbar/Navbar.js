import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "./../../../hooks/useNotification";
import { logoutUser, setTheam } from "../../../redux/reducers/userReducer";
import Hamburger from "../../atoms/switch/Hamburger";
import { useTheme } from "@emotion/react";
import ModeSwitch from "../../atoms/switch/ModeSwitch";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
    const instanceId = useSelector((state) => state.user.instaInstanceId);
  

  const { setNotification } = useNotification();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    setNotification("Logout successfully!", "success");
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        bgcolor: theme.palette.background.default,
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: theme.palette.text.primary,
            }}
          >
            {/* <Hamburger color={theme.palette.text.primary} />
            <Link to="/">
            Admin Dashboard
            </Link> */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
              }}
            >
              <Link to="/">
                <span className="gradient-text">SocialSync</span>
              </Link>
            </motion.div>
          </Box>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <ul className={"flex mr-6 "}>
              <Link to={`/dashboard/${instanceId}/chat`} className="p-2 nav-text">
                Chat
              </Link>
              <Link to={`/dashboard/${instanceId}/comment`}  className="p-2 nav-text">
               Comment
              </Link>
              <Link to={`/dashboard/${instanceId}/analytics`}className="p-2 nav-text">
               Analytics
              </Link>
              <Link to={`/dashboard/${instanceId}/config`} className="p-2 nav-text">
              Configration
              </Link>
            </ul>
          </Box>

         
          {/* <span style={{ paddingRight: "10px", color: theme.palette.text.primary }}> Welcome back {user?.username}!</span> */}
          <span style={{ paddingRight: "10px" }}>
            {" "}
            <ModeSwitch />
          </span>
          <IconButton onClick={handleAvatarClick} sx={{ p: 0 }}>
            <div className="avatar online">
              <div className="ring-primary ring-offset-base-100 w-8 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

            {/* <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
              {user?.username?.split('')[0]?.toUpperCase()}
            </Avatar> */}
          </IconButton>
        </Box>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          sx={{ mt: 2 }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Settings</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
