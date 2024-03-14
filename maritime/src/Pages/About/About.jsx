import React from "react";
import NavbarTwo from "../Components/Navbar/NavbarTwo";
import "./About.css";
import Logo from "../../Assets/Navbar-Logo.png";
import Footer from "../Components/Footer/Footer";
import TeamCarousel from "./TeamCarousel";

function About() {
  return (
    <>
      <NavbarTwo />
      <div className="abouts-page">
        <div className="row ">
          <div className="col-lg-5 col-md-6 col-12 about-logo-section">
            <img src={Logo} alt="GFT-Logo" className="about-logo-image" />
          </div>
          <div className="col-lg-7 col-md-6 col-12 about-text-section">
            <p className="about-text">
              At Great Future Technologies Ltd., we're on a mission to
              revolutionize the maritime and cargo transportation industry.
              <br></br>
              <br></br>
              <p className="Priorities">OUR PRIORITIES:</p>
              <ul>
                <li>Efficient and reliable goods transportation.</li>
                <br></br>
                <li>Optimizing route planning.</li>
                <br></br>
                <li>Enhancing cost efficiency.</li>
                <br></br>
                <li>Refining decision-making processes.</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="about-mission-statement">
          <p>
            Elevating maritime trade with precision and pride, our tailored
            solutions and tech strides redefine the tide.
          </p>
        </div>
        <div className="about-team-section">
          <TeamCarousel />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
