import React from "react";
import "../../Styles/Footer.css";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div style={{ width: "50%" }}>
          <img src="/images/support.png"></img>
        </div>
        <h3 style={{ fontSize: "28px" }}>Social Links</h3>
        <div className="socials">
          <a style={{textDecoration:"none", color:"white"}} href="https://www.linkedin.com/in/shree-varshan-g-a1a6bb233/" target="blank">
            <FaLinkedin size={40} />
          </a>
          <a style={{textDecoration:"none", color:"white"}} href="https://github.com/Shree-Varshan-1013" target="blank">
            <FaGithub size={40} />
          </a>
          <a style={{textDecoration:"none", color:"white"}} href="https://twitter.com/SHREEVARSHANG13" target="blank">
            <FaTwitter size={40} />
          </a>
          <a>
            <FaInstagram size={40} />
          </a>
        </div>
      </div>
      <ul className="footer-right">
        <li>
          <h2>Services</h2>
          <ul className="box">
            <li>Home Cleaning</li>
            <li>Professional</li>
            <li>Beauty</li>
            <li>Automobile</li>
          </ul>
        </li>
        <li>
          <h2>Useful links</h2>
          <ul>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Providers</li>
            <li>Customer Service</li>
          </ul>
        </li>
      </ul>
      <div className="footer-bottom">
        <p>All rights reserved by &copy;hashed 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
