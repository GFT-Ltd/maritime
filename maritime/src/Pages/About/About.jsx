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
              revolutionize the maritime and cargo transportation industry. With
              a focus on tailored solutions and advanced technologies, we
              prioritize efficient and reliable goods transportation. Our
              commitment includes optimizing route planning, enhancing cost
              efficiency, refining decision-making processes, and relentlessly
              pursuing cutting-edge solutions. Join us in this transformative
              journey as we redefine excellence in maritime solutions.
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
