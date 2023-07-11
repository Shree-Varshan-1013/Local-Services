import React from "react";
import "../../Styles/Home.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import Service from "./Services.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import OwlSlider from "./OwlSlider";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#F3F6F7",
    },
    secondary: {
      main: "#EF233C",
    },
  },
});

const Home = () => {

  const navigate = useNavigate();

  const { user, isAuthenticated } = useAuth0();

  return (
    <ThemeProvider theme={theme}>
      <div className="home">
        <div className="home-container">
          <div className="home-content">
            <div className="home-title">
              <Typewriter
                options={{
                  strings: ["Satisfaction is a rating loyalty is a brand !"],
                  autoStart: true,
                  loop: true,
                  pauseFor: 3000,
                }}
              />
            </div>
            <p className="description">
              Booking a local service is a convenient and efficient way to
              access various professional services in your area. Whether you
              need a plumber, electrician, house cleaner, handyman, or any other
              service provider.
            </p>
            <Button
              color="secondary"
              variant="contained"
              style={{
                display: "block",
                margin: "0px auto",
                width: "200px",
                height: "50px",
                marginTop: "15px",
              }}
              onClick={() => navigate('/who-are-you')}
            >
              Get Started
            </Button>
          </div>
          <div className="home-image">
            <img src="/images/home.jpg" width="100%" height="606px"></img>
          </div>
        </div>
      </div>
      <Service/>
      <span id="services-start"></span>
      <OwlSlider/>
    </ThemeProvider>
  );
};

export default Home;
