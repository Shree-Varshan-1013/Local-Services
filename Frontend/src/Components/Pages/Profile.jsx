import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import { Paper } from "@mui/material";
import { FaCircleUser } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../Styles/Profile.css";

const Profile = () => {
  const [isOpen, setOpen] = useState(false);

  const { userDetails } = useSelector((state) => state.master);
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    AOS.init();
  }, []);

  console.log(userDetails);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="profile-root">
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <motion.div
            layout
            transition={{ layout: { duration: 1 }, type: "spring" }}
            className="card"
            onClick={() => setOpen(!isOpen)}
          >
            <Paper elevation={16}>
              <motion.h1 layout id="profile-head">
              👻
              </motion.h1>

              {isOpen && (
                <motion.div>
                  <div className="profile-card-content">
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gridGap: "20px",
                        margin: "40px",
                      }}
                    >
                      <div>
                        <h2 className="profile-field">First Name</h2>
                      </div>
                      <div className="profile-value">
                        <h2>{userDetails.firstName}</h2>
                      </div>
                      <div>
                        <h2 className="profile-field">Last Name</h2>
                      </div>
                      <div className="profile-value">
                        <h2>{userDetails.lastName}</h2>
                      </div>
                      <div>
                        <h2 className="profile-field">Username</h2>
                      </div>
                      <div className="profile-value">
                        <h2>{userDetails.username}</h2>
                      </div>
                      <div>
                        <h2 className="profile-field">Date Of Birth</h2>
                      </div>
                      <div className="profile-value">
                        <h2>{userDetails.dob}</h2>
                      </div>
                      <div className="profile-field">
                        <h2>Email ID</h2>
                      </div>
                      <div className="profile-value">
                        <h2>{userDetails.email}</h2>
                      </div>
                      <div className="profile-field">
                        <h2>Phone Number</h2>
                      </div>
                      <div className="profile-value">
                        <h2>{userDetails.phoneNumber}</h2>
                      </div>
                      <div className="profile-field">
                        <h2>location</h2>
                      </div>
                      <div className="profile-value">
                        <h2>{userDetails.location}</h2>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </Paper>
          </motion.div>
        </div>
        {isOpen === false && (
          <div data-aos="zoom-in-up" data-aos-duration="3000">
            <h1 style={{ color: "white", fontSize: "60px" }}>
            Smile you made it
            </h1>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Profile;
