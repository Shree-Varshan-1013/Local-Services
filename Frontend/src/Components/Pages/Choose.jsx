import React, { useEffect, useState } from "react";
import AOS from "aos";
import Register from "./Register";
import "aos/dist/aos.css";
import "../../Styles/Choose.css";

const Choose = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="choose-container">
      <Register />
    </div>
  );
};

export default Choose;
