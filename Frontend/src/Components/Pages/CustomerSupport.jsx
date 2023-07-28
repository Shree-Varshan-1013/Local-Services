import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const CustomerSupport = () => {
  useEffect(() => {
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
    AOS.init();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(/images/customer-support.jpg)",
          height: "100vh",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{ paddingTop: "20px" }}
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1700"
        >
          <h1
            style={{
              margin: "0",
              fontFamily: "'Anuphan', sans-serif",
              fontSize: "100px",
              color: "white",
            }}
          >
            24/7 Support
          </h1>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingRight: "80px",
            }}
          >
            <h2 style={{ color: "white", fontFamily: "'Anuphan', sans-serif" }}>
              - We will solve all your queries anytime anywhere !
            </h2>
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default CustomerSupport;
