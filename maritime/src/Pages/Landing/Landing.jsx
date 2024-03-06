import React from "react";
import "./Landing.css";
import boatImage from "../../Assets/cargoship.png";
import Title from "./Title";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import videoBg from "../../Assets/101.mp4";


function Landing() {
  return (
    <>
      <div className="landing-page">
        <div className="waves-section">
          <div className="boat-section">
            <div className="title-section bg-red-300">
              <Navbar />
              <Title />
            </div>
            <div className="video section">
              <video src={videoBg} autoPlay loop muted />
            </div>
            <img src={boatImage} className="boat-image" />
          </div>
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
          <div className="wave wave4"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
