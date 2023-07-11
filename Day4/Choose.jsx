import React, { useEffect } from "react";
import "../../Styles/Choose.css";
import Switch from "@mui/material/Switch";
import AOS from "aos";
import "aos/dist/aos.css";

const Choose = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="choose-container">
      <div className="choose-content1">
        <div className="form">
          <h1>User</h1>
          <h1>Or</h1>
          <h1>Service Provider</h1>
        </div>
      </div>
    </div>
  );
};

export default Choose;
