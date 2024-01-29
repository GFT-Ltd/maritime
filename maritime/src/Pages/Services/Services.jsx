import React from "react";
import "./Services.css";
import Carousel from "./Carousel";

function Services() {
  return (
    <div className="services-page">
      <div className="row">
        <div className="col-lg-2 col-md-2 col-sm-12 services-functions">
          <div className="services-functions-buttons">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-4 mb-3">
                <button className="button-4" role="button">
                  Map
                </button>
              </div>
              <div className="col-lg-12 col-md-12 col-4 mb-3">
                <button className="button-4" role="button">
                  Route
                </button>
              </div>
              <div className="col-lg-12 col-md-12 col-4 mb-3">
                <button className="button-4" role="button">
                  Freight
                </button>
              </div>
              <div className="col-lg-12  col-md-12 col-4 mb-3">
                <button className="button-4" role="button">
                  Weather
                </button>
              </div>
              <div className="col-lg-12 col-md-12 col-4 mb-3">
                <button className="button-4" role="button">
                  Optimization
                </button>
              </div>
              <div className="col-lg-12 col-md-12 col-4 mb-3">
                <button className="button-4" role="button">
                  Ship Details
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10 col-md-10 col-sm-12 right-container">
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
      </div>
    </div>
  );
}

export default Services;
