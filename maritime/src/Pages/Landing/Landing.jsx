import React from "react";
import "./Landing.css";
import boatImage from "../../Assets/cargoship.png";
import Title from "./Title";
import Navbar from "../Components/Navbar/Navbar.jsx";

function Landing() {
  return (
    <>
      <div className="landing-page">
        <Navbar />
        <div className="waves-section">
          <div className="boat-section">
            <div className="title-section bg-red-300">
              <Title />
            </div>
            <img src={boatImage} className="boat-image" />
          </div>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
      </div>
    </>
  );
}

export default Landing;
