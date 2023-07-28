import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "animate.css";
import "../../Styles/Logout.css";

const Logout = () => {
  const navigate = useNavigate();

  return (
    <motion.div 
    initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="logout-root">
        <div className="animate__animated animate__bounce">
          <h1 style={{ fontSize: "35px", fontWeight: "900", marginTop:"0", paddingTop:"100px" }}>
            You have been successfully logged out. <br />
            We look forward to welcoming you back soon! <br />
            Have a wonderful day!
          </h1>
        
        </div>
      </div>
    </motion.div>
  );
};

export default Logout;
