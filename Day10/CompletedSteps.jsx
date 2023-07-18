import React, { useEffect } from "react";

const CompletedSteps = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "0px", marginTop: "30px" }}>
        Your Order Has been Placed Successfully !<br /> We have send you the
        details of the provider
      </h1>
      <div style={{ width: "50%", display: "block", margin: "0 auto" }}>
        <img src="/images/final-happy.png" width="100%"></img>
      </div>
    </div>
  );
};

export default CompletedSteps;
