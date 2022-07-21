import { Button, FormControl, Grid, Input, InputLabel, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

const Login = () => {
    const errRef = useRef(null);
    const [errors, setErrors] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const email = data.get("email");
      const password = data.get("password");
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          setErrors([errors, 'Email / Password is incorrect']);
          errRef.current.focus();
        });
    };

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
            <form
              style={{ display: "flex", flexDirection: "Column", width: "60%" }}
              onSubmit={handleSubmit}
            >
              <div
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src="../../assets/images/logo.png"
                  alt="logo"
                  style={{ width: "20%" }}
                />
              </div>
              <div
                ref={errRef}
                style={{
                  color: "red",
                  fontSize: "14px",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {errors}
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
                  htmlFor="email"
                  color="info"
                  style={{ color: "#c3c3c3" }}
                >
                  Email
                </InputLabel>
                <Input
                  id="email"
                  name="email"
                  style={{
                    color: "white",
                    padding: "5px 15px",
                  }}
                />
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
                <Input
                  id="password"
                  type="password"
                  name="password"
                  style={{
                    color: "white",
                    padding: "5px 15px",
                  }}
                />
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
                  SignIn
                </Button>
              </FormControl>

              <Typography
                sx={{
                  color: "#c3c3c3",
                  fontSize: "16px",
                }}
              >
                Already have account?{" "}
                <Link style={{ color: "#B22727" }} to="/register">
                  SignUp
                </Link>
              </Typography>
            </form>
          </div>
          <div />
        </Grid>
      </Grid>
    );
}

export default Login;