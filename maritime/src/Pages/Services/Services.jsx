import React from "react";
import "./Services.css";
import Carousel from "./Carousel";

function Services() {
  return (
    <div className="services-page">
      <div className="row">
        <div className="col-lg-2 col-md-2 side-functions">
          <div className="buttons-background">
            <button className="button-17" role="button">
              Map
            </button>
            <button className="button-17" role="button">
              Route
            </button>
            <button className="button-17" role="button">
              Freight
            </button>
            <button className="button-17" role="button">
              Weather
            </button>
            <button className="button-17" role="button">
              Ship Details
            </button>
            <button className="button-17" role="button">
              Optimization
            </button>
          </div>
        </div>
        <div className="col-lg-10 col-md-2 right-segment">
          <div className="row">
            <div className="col-lg-5 col-md-5 square-box-segment">
              <div className="data-box">
                <div className="box-1">
                  <p>Box - 1</p>
                </div>
                <div className="box-2">
                  <p>Box - 2</p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 traingle-segment">
              <div className="triangle-box"></div>
              <Carousel />
              <div className="bot">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
