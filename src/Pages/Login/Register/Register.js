import {
  Alert,
  AlertTitle,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import login from "../../../images/login.png";

const Register = () => {
  const [loginData, setLoginData] = useState({});

  const { user, authError, registerUser, isLoading } = useAuth();

  const history = useHistory();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
    console.log(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your password did not matched");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Register
          </Typography>
          {!isLoading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                variant="standard"
                name="name"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                variant="standard"
                type="email"
                name="email"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                type="password"
                id="standard-basic"
                label="Your password"
                variant="standard"
                name="password"
                onBlur={handleOnBlur}
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                type="password"
                id="standard-basic"
                label="Retype Your password"
                variant="standard"
                name="password2"
                onBlur={handleOnBlur}
              />

              <Button
                sx={{ width: "75%", m: 1 }}
                type="submit"
                variant="contained"
              >
                Register
              </Button>
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Already registered? Please Login</Button>
              </NavLink>
            </form>
          )}
          {isLoading && <CircularProgress />}
          {user.email && (
            <Alert severity="success">User created successfully</Alert>
          )}
          {authError && (
            <Alert severity="error">
              <AlertTitle>Error</AlertTitle>
              {authError}
            </Alert>
          )}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
