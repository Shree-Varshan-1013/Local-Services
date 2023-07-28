import React, { useEffect } from "react";
import { Button, Paper } from "@mui/material";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Payment.css";
import { useSelector } from "react-redux";

const Payment = () => {
  useEffect(() => {
    AOS.init();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const onPay = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Payment Success",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const { providerDetails } = useSelector((state) => state.master);

  return (
    <div className="payment-root">
      <div
        className="payment-left"
        data-aos="zoom-out-up"
        data-aos-duration="1500"
      >
        <img src="/images/secure-payment.png" width="80%" />
      </div>
      <div
        className="payment-right"
        data-aos="zoom-out-up"
        data-aos-duration="1500"
      >
        <div>
          <div style={{ width: "80%", display: "block", margin: "0 auto"}}>
            <Paper elevation="15">
              <div className="payment-form">
                <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    All Other Options
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="UPI"
                    name="radio-buttons-group"
                  >
                    <FormControlLabel
                      value="UPI"
                      control={<Radio />}
                      label="UPI"
                    />
                    <FormControlLabel
                      value="Wallet"
                      control={<Radio />}
                      label="Wallet/Postpaid"
                    />
                    <FormControlLabel
                      value="Net-Banking"
                      control={<Radio />}
                      label="Net Banking"
                    />
                    <FormControlLabel
                      value="Cash-on-delivery"
                      control={<Radio />}
                      label="Cash on delivery"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
            </Paper>
          </div>
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
                      <h2>₹{providerDetails.price - 100}</h2>
                    </div>
                    <div className="payment-field">
                      <h2>Delivery Charges</h2>
                    </div>
                    <div className="payment-value">
                      <h2 style={{ color: "green" }}>FREE</h2>
                    </div>
                    <div className="payment-field">
                      <h2>UPI Offer</h2>
                    </div>
                    <div className="payment-value">
                      <h2 style={{ color: "red" }}>-₹15</h2>
                    </div>
                    <div className="payment-field">
                      <h2>Amount Payable</h2>
                    </div>
                    <div className="payment-value">
                      <h2>₹{providerDetails.price - 15}</h2>
                    </div>
                    <div className="payment-value"></div>
                    <div className="payment-value">
                      <Button
                        size="large"
                        variant="contained"
                        onClick={onPay}
                        style={{ backgroundColor: "green" }}
                      >
                        Pay Now
                      </Button>
                    </div>
                  </div>
                  <div style={{ margin: "10px" }}></div>
                </div>
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
