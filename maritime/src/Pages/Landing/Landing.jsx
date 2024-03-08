import React from "react";
import "./Landing.css";
import boatImage from "../../Assets/cargoship.png";
import Title from "./Title";
import Navbar from "../Components/Navbar/Navbar.jsx";
import Footer from "../Components/Footer/Footer.jsx";
import videoBg from "../../Assets/101.mp4";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  const goToServices = () => {
    navigate("/services");
  };
  return (
    <>
      <div className="landing-page">
        <div className="waves-section">
          <Navbar />
          <div className="boat-section">
            <div className="title-section bg-red-300">
              <Title />
            </div>
            <div className="video section">
              <video src={videoBg} autoPlay loop muted />
            </div>
            <img src={boatImage} className="boat-image" alt="for phone" />
          </div>
        </div>
        <div className="services-section">
          <div>
            <h1>Our Services</h1>
            <div className="row services-list">
              <div className="col-lg-6 col-md-6 col-12">
                <li>Route: Optimize journeys with detailed tracking.</li>
                <li>Freight: Access cargo details and shipping costs.</li>
                <li>Weather: Stay informed with route-specific forecasts.</li>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <li>
                  Vessel Tracking: Real-time location monitoring for vessels.
                </li>
                <li>
                  Shipping Details: Explore companies, and shipping insights.
                </li>
                <li>Career Services: Job assistance, and talent matching.</li>
              </div>
            </div>
          </div>
        </div>
        <div className="action-button-section">
          <div className="row action-cards">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="action-card" onClick={goToServices}>
                <div className="icon"></div>
                <strong> Services</strong>
                <div className="action-card__body">
                  Check our services page.
                </div>
                <span>Go to services</span>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="action-card">
                <div className="icon"></div>
                <strong>Careers</strong>
                <div className="action-card__body">Check our careers page.</div>
                <span>Go to careers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
