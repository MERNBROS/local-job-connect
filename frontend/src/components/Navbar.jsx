import React from "react";
// import { assets } from '../assets/assets'
import { Box, Typography, Button } from "@mui/material";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import { useClerk, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { user } = useClerk();

  return (
    <div className="shadow py-4 bg-slate-900 text-white">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        {/* <img src={assets.Logo} alt="Logo" /> */}

        <Box
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ display: "flex", alignItems: "center" }}
          // onClick={() => navigate("/")} // Navigate to home when clicked
          style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
        >
          <WorkRoundedIcon sx={{ mr: 1, fontSize: { xs: 24, md: 30 } }} />

          <Typography
            variant="h6"
            component="div"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              fontWeight: 600,
              color: "#fff",
              letterSpacing: 1,
            }}
            //   onClick={() => navigate("/")} // Navigate to home when clicked
            style={{ cursor: "pointer" }} // Change cursor to pointer for better UX
          >
            Local Job Connect
          </Typography>
        </Box>

        {/* TIME 25.30 CLERK STARTS */}
        {user ? (
          <div className="flex items-center gap-3">
            <Link to="/applications">Applied Jobs</Link>
            <p>|</p>
            <p className="max-sm:hidden">
              Hi , {user.firstName + " " + user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="small"
              sx={{
                padding: { xs: "4px 10px", sm: "6px 14px" },
                fontSize: { xs: "0.65rem", sm: "0.875rem" },
                borderColor: "#fff",
                color: "#fff",
                textTransform: "none",
              }}
            >
              Recruiter Login
            </Button>
            <Button
              onClick={() => openSignIn()}
              variant="outlined"
              size="small"
              sx={{
                padding: { xs: "4px 10px", sm: "6px 14px" },
                fontSize: { xs: "0.65rem", sm: "0.875rem" },
                borderColor: "#fff",
                color: "#fff",
                textTransform: "none",
              }}
            >
              Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
