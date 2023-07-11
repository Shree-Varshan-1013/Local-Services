import React, { useState } from "react";
import { Container, Box, Grid, TextField, Card, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Register = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    username: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
    gender: "",
    location: "",
  };

  const [user, setUser] = useState(initialState);

  const eventChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const HandleSubmit = () => {
    console.log(user);
    setUser(initialState);
  };

  return (
    <div className="master">
      <div style={{ width: "65%", margin: "0 auto", padding: "20px" }}>
        <div className="login-container">
          <div>
            <div className="base">
              <div style={{ width: "70%" }}>
                <img
                  src="/images/register.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
              <div
                style={{
                  width: "60%",
                  marginTop: "10px",
                }}
              >
                <h1 style={{ textAlign: "center" }}>Register</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "50px",
                  }}
                >
                  <TextField
                    id="standard-number"
                    label="First Name"
                    name="firstName"
                    value={user.firstName}
                    variant="standard"
                    onChange={eventChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    name="lastName"
                    type="text"
                    value={user.lastName}
                    variant="standard"
                    onChange={eventChange}
                    size="small"
                    style={{ marginTop: "20px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={user.dateOfBirth}
                    variant="standard"
                    onChange={eventChange}
                    size="small"
                    style={{ marginTop: "20px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Gender"
                    name="gender"
                    type="text"
                    value={user.gender}
                    variant="standard"
                    onChange={eventChange}
                    size="small"
                    style={{ marginTop: "20px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id="standard-basic"
                    label="Username"
                    name="username"
                    type="text"
                    value={user.username}
                    variant="standard"
                    onChange={eventChange}
                    size="small"
                    style={{ marginTop: "20px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <Link to="/register2">
                    <Button style={{ marginTop: "40px", width:"100%" }} variant="contained">Next</Button>
                  </Link>
                  <Link to="/login">
                  <p style={{marginTop:"20px"}}>
                    Already have an account ?Sign In.
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
