import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2B2D42",
    },
  },
});

const Address = () => {

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({
      top: 2,
      behavior: "smooth",
    });
  }, []);

  
  
  const { userDetails } = useSelector((state) => state.master);

  console.log(userDetails)


  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          minHeight: "max-content",
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "50%" }}>
          <img src="/images/delivery-address.png" width="100%" />
        </div>
        <div style={{ width: "50%", textAlign: "center" }}>
          <h1>Your Address</h1>
          <h2 style={{ fontFamily: "'Anuphan', sans-serif" }}>
            {userDetails.address}
          </h2>
          <h2 style={{ fontFamily: "'Anuphan', sans-serif" }}>
            {userDetails.location}
          </h2>
          <Button variant="contained" size="large" sx={{ marginTop: "20px" }}>
            Change
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Address;
