import { Box, Button, FormControl, Grid, Input, InputLabel, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
    return (
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: { xs: "none", sm: "flex", lg: "flex" },
          }}
        >
          <img
            src="../../assets/images/ProfilePicture.png"
            alt="login profile"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "column",
            background: "#000000",
            boxShadow: "-100px 4px 400px 100px #000000",
          }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              style={{ display: "flex", flexDirection: "Column", width: "60%" }}
            >
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                }}
              >
                <img
                  src="../../assets/images/logo.png"
                  alt="logo"
                  style={{ width: "20%" }}
                />
              </div>
              <FormControl
                variant="filled"
                color="info"
                style={{
                  border: "1px solid #ffffff",
                  marginBottom: "30px",
                  background: "#333",
                }}
              >
                <InputLabel
                  htmlFor="username"
                  color="info"
                  style={{ color: "#c3c3c3" }}
                >
                  Username
                </InputLabel>
                <Input id="username" />
              </FormControl>
              <FormControl
                variant="filled"
                color="info"
                style={{
                  border: "1px solid #ffffff",
                  marginBottom: "20px",
                  background: "#333",
                }}
              >
                <InputLabel
                  htmlFor="password"
                  color="info"
                  style={{ color: "#c3c3c3" }}
                >
                  Password
                </InputLabel>
                <Input id="password" />
              </FormControl>
              <FormControl
                variant="filled"
                color="primary"
                style={{
                  border: "1px solid #B22727",
                  marginBottom: "20px",
                  background: "#B22727",
                }}
              >
                <Button color="info" type="submit">
                  Login
                </Button>
              </FormControl>

              <Typography
                sx={{
                  color: "#c3c3c3",
                  fontSize: "16px",
                }}
              >
                Don't have account?{" "}
                <Link style={{ color: "#B22727" }} to="/register">
                  SignUp here
                </Link>
              </Typography>
            </Box>
          </div>
          <div />
        </Grid>
      </Grid>
    );
}

export default Login;