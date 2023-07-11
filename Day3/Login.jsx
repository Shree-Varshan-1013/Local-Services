import React, { useState } from "react";
import { Button, TextField, Checkbox } from "@mui/material";
import {Link} from 'react-router-dom'
import "../../Styles/App.css";

const Login = () => {
  const [hide, setHide] = useState(true);

  const toggle = () => {
    setHide(!hide);
  };

  const initialState = {
    email: "",
    password: "",
  };

  const [user, setUser] = useState(initialState);

  const eventChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const eventLogin = () => {
    console.log(user);
    setUser(initialState);
  };

  return (
    <div className="master">
      <div style={{ width: "65%",margin: "0 auto", padding: "20px"}}>
        <div className="login-container">
          <div>
            <div className="base">
              <div style={{ width: "70%" }}>
                <img
                  src="/images/login-bg.jpg"
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundSize: "cover",
                  }}
                />
              </div>
              <div
                style={{
                  width: "60%",
                  marginTop: "50px",
                }}
              >
                <h1 style={{ textAlign: "center" }}>Login</h1>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    margin: "50px",
                  }}
                >
                  <TextField
                    id="standard-basic"
                    label="Email"
                    name="email"
                    value={user.email}
                    variant="standard"
                    onChange={eventChange}
                    size="small"
                    InputLabelProps={{
                        shrink: true,
                      }}  
                  />
                  <TextField
                    id="standard-basic"
                    label="Password"
                    name="password"
                    type={hide ? "password" : "text"}
                    value={user.password}
                    variant="standard"
                    onChange={eventChange}
                    size="small"
                    style={{ marginTop: "20px" }}
                    InputLabelProps={{
                        shrink: true,
                      }}  
                  />
                  <span style={{ marginTop: "5px" }}>
                    <label>Show Password</label>
                    <Checkbox onClick={toggle} />
                  </span>
                  <span>
                    <a href="#">Forget Password?</a>
                  </span>
                  <Button variant="contained" style={{ marginTop: "25px" }}>
                    Log in
                  </Button>
                  <Link to="/register">
                  <p style={{marginTop:"20px"}}>
                    Don't have an account ?<a href="#">Sign Up.</a>
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

export default Login;
