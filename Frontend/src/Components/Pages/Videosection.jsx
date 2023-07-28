import React from "react";
import Typewriter from "typewriter-effect";
import "../../Styles/Video.css";

const Videosection = () => {
  return (
    <div style={{ position: "relative" }}>
      <video autoPlay="true" muted id="video" width="100%" height="100%">
        <source src="/videos/bg-new.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <h1>Your Neighborhood's Service Experts</h1>
      </div>
    </div>
  );
};

export default Videosection;
