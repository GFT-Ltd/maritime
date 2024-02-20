// RouteResult.js

import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import RouteDetails from "../RouteDetails/RouteDetails";
import "./RouteResult.css";
import Navbar from "../../Components/Navbar/Navbar";

function RouteResult() {
  const location = useLocation(); // Get location

  // Access routeDetails from location state
  const routeDetails = location.state && location.state.routeDetails;
  const source = location.state && location.state.source;
  const destination = location.state && location.state.destination;

  return (
    <div>
      <Navbar />
      <div className="ports-title">
        <h5>
          {source || ""} to {destination || ""}
        </h5>
      </div>

      <div className="map-container">
        {routeDetails ? <RouteDetails routeDetails={routeDetails} /> : null}
      </div>
    </div>
  );
}

export default RouteResult;
