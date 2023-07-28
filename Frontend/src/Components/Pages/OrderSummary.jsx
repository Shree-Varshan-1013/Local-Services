import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Paper } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import "aos/dist/aos.css";
import { useSelector } from "react-redux";

const OrderSummary = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const { providerDetails } =useSelector(state => state.master);

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <div style={{ width: "50%", display: "grid", placeItems: "center" }}>
        <div data-aos="zoom-out-up" data-aos-duration="3000">
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              height="300"
              image="/images/support.png"
              alt="service"
            />
            <CardContent>
              <Typography variant="body2" color="text.primary">
                Provider Name : {providerDetails.firstName}
              </Typography>
              <Typography variant="body2" color="text.primary">
                Servicing Providing : {providerDetails.serviceProviding}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div
        style={{ width: "50%" }}
        data-aos="zoom-out-up"
        data-aos-duration="3000"
      >
        <div style={{ width: "80%", display: "block", margin: "0 auto" }}>
          <Paper elevation="15">
            <div id="payment-details">
              <div style={{ padding: "30px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    marginBottom: "25px",
                  }}
                >
                  <h1
                    style={{
                      fontSize: "40px",
                      marginTop: "0px",
                      marginBottom: "0px",
                    }}
                  >
                    Price Details
                  </h1>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "30px",
                  }}
                >
                  <div className="payment-field">
                    <h2>Price (1 item)</h2>
                  </div>
                  <div className="payment-value">
                    <h2>₹{providerDetails.price}</h2>
                  </div>
                  <div className="payment-field">
                    <h2 style={{ color: "red" }}>Discount</h2>
                  </div>
                  <div className="payment-value">
                    <h2 style={{ color: "red" }}>-₹100</h2>
                  </div>
                  <div className="payment-field">
                    <h2>Delivery Charges</h2>
                  </div>
                  <div className="payment-value">
                    <h2 style={{ color: "green" }}>Free Delivery</h2>
                  </div>
                  <div className="payment-field">
                    <h2>Total Amount</h2>
                  </div>
                  <div className="payment-value">
                    <h2>₹{providerDetails.price - 100}</h2>
                  </div>
                  <div className="payment-field">
                    <h2 style={{ color: "green" }}>Total Savings</h2>
                  </div>
                  <div className="payment-value">
                    <h2 style={{ color: "green" }}>₹100</h2>
                  </div>
                </div>
                <div style={{ margin: "10px" }}></div>
              </div>
            </div>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
