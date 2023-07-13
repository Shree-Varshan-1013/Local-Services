import React from "react";
import Rating from "@mui/material/Rating";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import {
  FaClock,
  FaLocationDot,
  FaPhone,
  FaCrown,
  FaCircleInfo,
} from "react-icons/fa6";
import "../../Styles/Provierinfo.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2B2D42",
    },
    secondary: {
      main: "#fffffff",
    },
  },
});

const ProviderInfo = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="provider-contain">
        <h1>Provider Information</h1>
        <div className="provider-info-root">
          <div className="provider-left">
            <img src="/images/providerinfo.png" width="100%" />
          </div>
          <div className="provider-right">
            <h1 style={{ fontSize: "60px", margin: "0px", textAlign: "start" }}>
              Shree
            </h1>
            <div
              className="provider-desc"
              style={{ display: "flex", marginBottom: "10px" }}
            >
              <FaCircleInfo
                style={{ marginTop: "5px", marginRight: "7px" }}
                fontSize={20}
              />
              <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                Electrician
              </h4>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <FaLocationDot
                style={{ marginTop: "5px", marginRight: "7px" }}
                fontSize={20}
              />
              <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                Coimbatore
              </h4>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <FaPhone
                style={{ marginTop: "5px", marginRight: "7px" }}
                fontSize={20}
              />
              <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                +91 6367665439
              </h4>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <FaClock
                style={{ marginTop: "0px", marginRight: "7px" }}
                fontSize={20}
              />
              <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>6 - 9 PM</h4>
            </div>
            <div style={{ display: "flex", marginBottom: "10px" }}>
              <FaCrown
                style={{ marginTop: "0px", marginRight: "7px" }}
                fontSize={20}
              />
              <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                4 Years of Experience
              </h4>
            </div>
            <Rating name="read-only" value={3} readOnly />
            <h3 style={{ fontFamily: "'Anuphan', sans-serif" }} fontSize={20}>
              Hi homies im here to help you out the things related to plumbing
            </h3>
            <div style={{ display: "flex" }}>
              <Button
                variant="contained"
                style={{ marginRight: "20px", marginTop: "20px" }}
              >
                Book Now
              </Button>
              <Button variant="contained" style={{ marginTop: "20px" }}>
                Whish List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default ProviderInfo;
