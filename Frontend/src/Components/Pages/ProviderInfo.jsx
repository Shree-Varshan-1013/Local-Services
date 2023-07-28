import { useState, useEffect } from "react";
import Rating from "@mui/material/Rating";
import { Button, ThemeProvider, createTheme } from "@mui/material";
import {
  FaClock,
  FaLocationDot,
  FaPhone,
  FaCrown,
  FaCircleInfo,
} from "react-icons/fa6";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProviderService from "../../Services/ProviderService.jsx";
import { addServices, addProviderDetails } from "../../Store/Masterslice";
import "../../Styles/Providerinfo.css";

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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const { accessToken } = useSelector((state) => state.master);
  const { providerEmail } = useSelector((state) => state.master);

  const [details, setDetails] = useState([]);

  const fetchData = async () => {
    const response = await ProviderService.getParticularProviderByEmail(
      accessToken,
      providerEmail
    );
    console.log(response);
    setDetails(response.data);
    dispatch(addProviderDetails(response.data));
  };

  const eventAddToCart = (emails) => {
    alert("item added");
    dispatch(addServices(emails));
  };

  const handleSubmit = () => {
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Booked Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleBook = () => {
    navigate("/confirm-details");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <ThemeProvider theme={theme}>
        <div className="provider-contain">
          <h1 style={{ marginTop: "30px" }}>Provider Information</h1>
          <div className="provider-info-root">
            <div className="provider-left">
              <img src="/images/providerinfo.png" width="100%" />
            </div>
            <div className="provider-right">
              <h1
                style={{ fontSize: "60px", margin: "0px", textAlign: "start" }}
              >
                {details.firstName}
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
                  {details.serviceProviding}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <FaLocationDot
                  style={{ marginTop: "5px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  {details.location}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <FaPhone
                  style={{ marginTop: "5px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  +91 {details.phoneNumber}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <FaClock
                  style={{ marginTop: "0px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  {details.workingHour}
                </h4>
              </div>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <FaCrown
                  style={{ marginTop: "0px", marginRight: "7px" }}
                  fontSize={20}
                />
                <h4 style={{ fontFamily: "'Anuphan', sans-serif" }}>
                  {details.experience} years of Experience
                </h4>
              </div>
              <Rating name="read-only" value={3} readOnly />
              <div style={{ display: "flex" }}>
                <Button
                  variant="contained"
                  style={{ marginRight: "20px", marginTop: "20px" }}
                  onClick={handleBook}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </motion.div>
  );
};

export default ProviderInfo;
