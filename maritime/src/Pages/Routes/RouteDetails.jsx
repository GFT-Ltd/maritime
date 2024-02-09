// import React from "react";

// function RouteDetails({ routeDetails }) {
//   const renderDetails = (details) => {
//     // Check if details is null or undefined
//     if (!details) return null;

//     return Object.entries(details).map(([key, value]) => {
//       if (typeof value === "object") {
//         // If the value is an object, recursively render its details
//         return (
//           <div key={key}>
//             <h3>{key}</h3>
//             {renderDetails(value)}
//           </div>
//         );
//       } else {
//         // Otherwise, render the key-value pair
//         return (
//           <div key={key}>
//             <h3>{key}</h3>
//             <p>{value}</p>
//           </div>
//         );
//       }
//     });
//   };

//   return (
//     <div>
//       <h2>Route Details</h2>
//       {renderDetails(routeDetails)}
//     </div>
//   );
// }

// export default RouteDetails;

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
// import RouteMap from './RouteMap';

// const RouteDetails = ({ routeDetails }) => {
//   if (!routeDetails || !routeDetails.features || routeDetails.features.length === 0) {
//     return <div>No route details available</div>;
//   }

//   // Extract coordinates for the route from routeDetails
//   const coordinates_first = routeDetails.features[0].geometry.coordinates;

//   // Convert coordinates to LatLng objects required by Leaflet
//   const routeLatLngs = coordinates_first.map(coord => [coord[1], coord[0]]);

//   console.log(routeLatLngs)

//   const coordinateString = routeLatLngs;

// // Split the string into an array of individual coordinate pairs
// const coordinatePairs = coordinateString.split(" ");

// // Map over the array of coordinate pairs and split each pair into latitude and longitude values
// const coordinates = coordinatePairs.map(pair => {
//   const [latitude, longitude] = pair.split(",");
//   return [parseFloat(latitude), parseFloat(longitude)];
// });

// console.log(coordinates);

//   return (
//     <div>
//       {/* <RouteMap coordinates={routeLatLngs} /> */}
//       <p>{routeLatLngs}</p>
//       <br />
//       <br />
//       <p>{coordinates}</p>
//     </div>
//   );
// }

// export default RouteDetails;

// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
// import RouteMap from './RouteMap';

// const RouteDetails = ({ routeDetails }) => {
//   if (!routeDetails || !routeDetails.features || routeDetails.features.length === 0) {
//     return <div>No route details available</div>;
//   }

//   // Extract coordinates for the route from routeDetails
//   const coordinates_first = routeDetails.features[0].geometry.coordinates;

//   // Convert coordinates to LatLng objects required by Leaflet
//   const routeLatLngs = coordinates_first.map(coord => [coord[1], coord[0]]);

//   return (
//     <div>
//       {/* <RouteMap coordinates={routeLatLngs} /> */}
//       <p>Route LatLngs:</p>
//       <ul>
//         {routeLatLngs.map((coord, index) => (
//           <li key={index}>{coord.join(', ')}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default RouteDetails;

import React, { useState } from "react";
import RouteMap from "./RouteMap";
import "./RouteDetails.css";

const RouteDetails = ({ routeDetails }) => {
  const [showCoordinates, setShowCoordinates] = useState(false); // State variable to toggle visibility
  const [showRouteDetails, setShowRouteDetails] = useState(false); // State variable to toggle visibility

  if (
    !routeDetails ||
    !routeDetails.features ||
    routeDetails.features.length === 0
  ) {
    return <div>No route details available</div>;
  }

  // Extract coordinates for the route from routeDetails
  const coordinates_first = routeDetails.features[0].geometry.coordinates;

  // Convert coordinates to the desired format
  const routeLatLngs = coordinates_first.map((coord) => [coord[1], coord[0]]); // Changed to an array of arrays

  // Convert distance from meters to nautical miles
  const distanceInNauticalMiles = routeDetails.properties.distance / 1852;

  // Convert duration from milliseconds to days and hours
  const durationInDays = routeDetails.properties.duration / (1000 * 3600 * 24);
  const durationInHours =
    (routeDetails.properties.duration % (1000 * 3600 * 24)) / (1000 * 3600);

  const toggleCoordinates = () => {
    setShowCoordinates(!showCoordinates);
  };

  const toggleRouteDetails = () => {
    setShowRouteDetails(!showRouteDetails);
  };

  return (
    <div>
      <RouteMap coordinates={routeLatLngs} />
      <button
        className="btn btn-success toggle-button"
        onClick={toggleCoordinates}
      >
        {showCoordinates ? "Hide Coordinates" : "Show Coordinates"}
      </button>
      <button
        className="btn btn-info toggle-button"
        onClick={toggleRouteDetails}
      >
        {showRouteDetails ? "Hide Details" : "Show Details"}
      </button>
      {showCoordinates && (
        <>
          <p>Route LatLngs:</p>
          <ul className="route-details">
            {routeLatLngs.map((coord, index) => (
              <li key={index}>{coord.join(", ")}</li> // Join latitude and longitude for display
            ))}
          </ul>
        </>
      )}
      {showRouteDetails && (
        <>
          <p>Route Details:</p>
          <ul className="route-deatails">
            <li>
              Duration: {Math.floor(durationInDays)} days{" "}
              {Math.round(durationInHours)} hours
            </li>
            <li>
              Distance: {distanceInNauticalMiles.toFixed(2)} nautical miles
            </li>
            <li>Speed: {routeDetails.properties.speed} km/h</li>
          </ul>
        </>
      )}
    </div>
  );
};

export default RouteDetails;
