import { useEffect } from "react";
import { Button } from "@mui/material";
import Typewriter from "typewriter-effect";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Services from "./Services.jsx";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import "../../Styles/Home.css";
import UserService from "../../Services/UserService.jsx";
import { addUserDetails, addRole,addUser } from "../../Store/Masterslice.jsx";

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

  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.master);
  const { accessToken } = useSelector((state) => state.master);
  

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await UserService.getUserByEmail(user, accessToken);
    console.log("response", " ", response.data);
    console.log("user", " ", user);
    console.log("role", " ",response.data.charRole);
    dispatch(addUserDetails(response.data));
    dispatch(addRole(response.data.charRole));
    dispatch(addUser(response.data.email));
  };

  console.log(user);

  return (  
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ThemeProvider theme={theme}>
        <div className="home">
          <div className="home-container">
            <div className="home-content">
              <div className="home-title" style={{ marginBottom: "20px" }}>
                <Typewriter
                  options={{
                    strings: ["Satisfaction is a rating Loyalty is a brand 🪄"],
                    autoStart: true,
                    loop: true,
                    pauseFor: 3000,
                  }}
                />
              </div>
              <p className="description">
                Booking a local service is a convenient and efficient way to
                access various professional services in your area. Whether you
                need a plumber, electrician, house cleaner, handyman, or any
                other service provider.
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
                onClick={() => navigate("/register")}
              >
                Get Started
              </Button>
            </div>
            <div className="home-image">
              <img src="/images/home.jpg" width="100%" height="606px"></img>
            </div>
          </div>
        </div>
        <Services />
      </ThemeProvider>
    </motion.div>
  );
};

export default Home;
