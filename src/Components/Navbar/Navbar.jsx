import React from "react";
import "./Navbar.css";
import logo from "../../assets/Logo.png";
import letstalk from "../../assets/letstalk.svg";
import CallMadeIcon from "@mui/icons-material/CallMade";
import line from "../../assets/line.png";
import config from "../../../config.js";

function Navbar() {
  const phoneNumber = config;

  const message = "Hello, How can we help you ?"; // Replace with your default message

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <>
      <div className="nav_parent">
        <div className="nav_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav_sec">
          <p>Home</p>
          <img className="line" src={line} alt="" />
          <p>Contact </p>
          <img className="line" src={line} alt="" />
          <p>Services </p>
          <img className="line" src={line} alt="" />
          <p>Who We Are </p>
          <img className="line" src={line} alt="" />
          <p>FAQ's </p>
        </div>
        <div onClick={handleWhatsAppClick} className="nav_letsTalk">
          <p>Let's Talk</p>
        </div>
        <div onClick={handleWhatsAppClick} className="nav_letsTalki">
          <img className="img" src={letstalk} alt="logo" />
          <CallMadeIcon className="arrow" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
