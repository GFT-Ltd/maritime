import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";
import Carousel from "./Carousel";
import Bot from "./Bot/Bot";

function Services() {
  const navigate = useNavigate();

  const navigateToRoutes = () => {
    navigate("/routes");
  };
  return (
    <div className="services-page">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12 services-functions">
          <div className="services-functions-buttons">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-4 mb-4">
                <button className="button-4" onClick={navigateToRoutes}>
                  Route
                </button>
              </div>
              <div className="col-lg-12 col-md-12 col-4 mb-4">
                <button className="button-4">Freight</button>
              </div>
              <div className="col-lg-12 col-md-12 col-4 mb-4">
                <button className="button-4">Weather</button>
              </div>
              <div className="col-lg-12  col-md-12 col-4 mb-4">
                <button className="button-4">Vessel Tracking</button>
              </div>
              <div className="col-lg-12 col-md-12 col-4 mb-4">
                <button className="button-4">Ship Details</button>
              </div>
              <div className="col-lg-12 col-md-12 col-4 mb-4">
                <button className="button-4">Optimization</button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12 right-container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-12 data-container">
                  <div className="data-square">
                    <div className="data-heading">
                      <h5>Data Information</h5>
                    </div>
                    <div className="data-information">
                      <p>Information for the data</p>
                    </div>
                  </div>
                  {/* <div className="triangle">
                
              </div> */}
                </div>
                <div className="col-lg-6 col-sm-6 col-12 image-container">
                  <div className="triangle">
                    <div className="carousel-container">
                      <Carousel />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row">
                <div
                  className="col-12 bot-container"
                  style={{ backgroundColor: "#fff" }}
                >
                  {/* <div className="col-lg-1 col-sm-1 col-12 bot-container">
                <Bot />
              </div> */}
                  <Bot />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
