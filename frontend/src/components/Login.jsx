import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const Login = () => {
  const [action, setAction] = useState("Sign In");
  return (
    <>
      <Container
        maxwidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "80vh",
        }}
      >
        <Paper
          elavations={50}
          sx={{ padding: 3, marginTop: 0, width: "100%", maxWidth: 450 }}
        >
          <Avatar
            sx={{
              mx: "auto",
              bgcolor: "#1e293b", // slate-800
              textAlign: "center",
              mb: 1,
              
            }}
          >
            <LoginIcon />
          </Avatar>
          <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
            {action}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            {action === "Sign Up" && (
              <TextField
                placeholder="Enter Username
            "
                fullWidth
                required
                id="username"
                name="username"
                sx={{ mb: 2 }}
              />
            )}

            <TextField
              placeholder="Enter Email Address
            "
              fullWidth
              required
              id="email"
              name="email"
              type="email"
              sx={{ mb: 2 }}
            />

            {action !== "Forgot Password" && (
              <TextField
                placeholder="Enter Password"
                fullWidth
                required
                id="password"
                name="password"
                type="password"
                sx={{ mb: 2 }}
              />
            )}
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#1e293b", // slate-800
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              borderRadius: 1,
              px: 2,
              mt: 1,
            }}
            fullWidth
            // sx={{ mt: 1 }}
          >
            {action}
          </Button>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              {action !== "Forgot Password" && (
                <Link
                  component="button"
                  onClick={() => {
                    setAction("Forgot Password");
                  }}
                >
                  Forgot Password?
                </Link>
              )}
            </Grid>
            <Grid item>
              {action === "Sign In" ? (
                <Link
                  component="button"
                  onClick={() => {
                    setAction("Sign Up");
                  }}
                >
                  Sign Up
                </Link>
              ) : (
                <Link
                  component="button"
                  onClick={() => {
                    setAction("Sign In");
                  }}
              
                >
                Already Have Account? Sign in
                </Link>
              )}
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Login;
