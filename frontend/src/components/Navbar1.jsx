import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import WorkIcon from "@mui/icons-material/Work";
import MenuIcon from "@mui/icons-material/Menu";

import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Avatar, Tooltip } from "@mui/material";

// import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Login", path: "/login" },
];

const Navbar1 = () => {
  // useNavigate is a hook from react-router-dom that allows us to navigate programmatically
  const navigate = useNavigate();

  // This is a functional component for the Navbar
  const [anchorNav, setAnchorNav] = useState(null);
  // anchorNav is used to control the state of the menu
  // setAnchorNav is a function to update the state of anchorNav
  const openMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };
  // openMenu is a function that sets the anchorNav to the current target of the event
  // This is used to open the menu when the menu icon is clicked
  const closeMenu = () => {
    setAnchorNav(null);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#1e293b", // slate-800
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          borderRadius: 1,
          px: 2,
        }}
      >
        <Toolbar
          sx={{ justifyContent: "space-between", gap: 2, flexWrap: "nowrap" }}
        >
          <Box
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            sx={{ display: { xs: "none", md: "flex" } }}
            onClick={() => navigate("/")} // Navigate to home when clicked
            style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
          >
            <WorkIcon sx={{ mr: 1 }} />

            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                cursor: "pointer",
                fontWeight: 600,
                color: "#fff",
                letterSpacing: 1,
              }}
              onClick={() => navigate("/")} // Navigate to home when clicked
              style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
            >
              Local Job Connect
            </Typography>
          </Box>

          {/* Search bar */}
          {/* Search Box - Hidden on small screens */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" }, // Hide on extra small screens only
              alignItems: "center",
              backgroundColor: "#334155",
              px: 1.5,
              py: 0.5,
              borderRadius: 1,
              flexShrink: 0,
              maxWidth: 300, // Prevents it from taking up entire row
            }}
          >
            <SearchIcon sx={{ color: "#cbd5e1", mr: 1 }} />
            <InputBase
              placeholder="Search jobs…"
              sx={{ color: "#fff", fontSize: 14, width: "100%" }}
            />
          </Box>

          {/* desktop navigation links */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            {/* Add your navigation links here */}
            {/* <Button color="inherit">Home</Button>
                <Button color="inherit">About</Button>
                <Button color="inherit">Contact</Button>
                <Button color="inherit">Login</Button> */}
            {/* instead of hardcoding the buttons, we can map through the pages array */}
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => navigate(page.path)}
                sx={{
                  color: "#cbd5e1", // text-slate-300
                  fontWeight: 500,
                  "&:hover": {
                    color: "#fff",
                    backgroundColor: "#334155", // slate-700
                  },
                  borderRadius: 1,
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          {/* Avatar */}
          <Tooltip title="Profile">
            <IconButton sx={{ p: 0 }} onClick={() => navigate("/profile")}>
              <Avatar
                alt="User"
                src="https://img.freepik.com/premium-vector/male-face-avatar-icon-set-flat-design-social-media-profiles_1281173-3806.jpg?semt=ais_hybrid&w=740"
                sx={{ width: 36, height: 36 }}
              />
            </IconButton>
          </Tooltip>

          {/* mobile navigation menu icon */}
          {/* This icon will be displayed on smaller screens */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={openMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorNav}
              open={Boolean(anchorNav)}
              onClose={closeMenu}
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              sx={{
                "& .MuiPaper-root": {
                  mt: 1,
                  borderRadius: 2,
                  backgroundColor: "#1e293b",
                  color: "#fff",
                },
              }}
            >
              {/* This is the menu that will open when the menu icon is clicked */}
              {/* <MenuList>
                      <MenuItem>Home</MenuItem>
                      <MenuItem>About</MenuItem>
                      <MenuItem>Contact</MenuItem>
                      <MenuItem>Login</MenuItem>
                    </MenuList> */}
              {/* instead of hardcoding the menu items, we can map through the pages array */}
              <MenuList>
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    onClick={() => navigate(page.path)}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#334155", // slate-700
                      },
                    }}
                  >
                    {page.name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar1;
