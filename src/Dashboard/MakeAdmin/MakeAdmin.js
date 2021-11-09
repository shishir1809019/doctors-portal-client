import { Alert, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://glacial-ridge-64243.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
          console.log(data);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h3>Make an admin</h3>
      <form onSubmit={handleAdminSubmit}>
        <TextField
          sx={{ width: "50%" }}
          type="email"
          label="Email"
          onBlur={handleOnBlur}
          variant="standard"
        />{" "}
        <br /> <br />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
      {success && <Alert severity="success">Admin is made successfully</Alert>}
    </div>
  );
};

export default MakeAdmin;
