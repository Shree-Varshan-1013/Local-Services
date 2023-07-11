import React, { useState } from "react";
import { Container, Box, Grid, TextField, Card, Button, Checkbox, Typography } from "@mui/material";

const Register2 = () => {
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
      <div style={{ width: "65%", margin: "0 auto", padding: "270px"}}>
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
                    label="Email"
                    name="email"
                    value={user.email}
                    variant="standard"
                    onChange={eventChange}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    size="small"
                  />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    name="password"
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
                    label="Phone Number"
                    name="phoneNumber"
                    type="number"
                    value={user.phoneNumber}
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
                    label="Address"
                    name="address"
                    type="text"
                    value={user.address}
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
                    label="location"
                    name="location"
                    type="text"
                    value={user.location}
                    variant="standard"
                    onChange={eventChange}
                    size="small"
                    style={{ marginTop: "20px" }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <span>
                  <Typography sx={{fontSize:'12px'}}> agree to the Terms of Service and Privacy Policy</Typography>
                  <span> <Checkbox/></span>
                 
                  </span>
                  <Button variant="contained">Sign Up</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register2;
