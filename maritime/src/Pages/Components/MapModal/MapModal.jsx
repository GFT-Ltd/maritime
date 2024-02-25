// import React from "react";
// import "./MapModal.css"; // Import CSS for modal styles

// function MapModal({ show, handleClose }) {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName}>
//       <div className="modal-main">
//         <div className="map-nav-bar">
//         <button onClick={handleClose} className="close-button"></button>
//         </div>

//         <iframe
//           title="Map"
//           width="560"
//           height="400"
//           frameBorder="0"
//           scrolling="no"
//           marginHeight="0"
//           marginWidth="0"
//           src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Haldwani+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default MapModal;

// import React, { useEffect } from "react";
// import "./MapModal.css";
// import "ol/ol.css";
// import Map from "ol/Map";
// import View from "ol/View";
// import TileLayer from "ol/layer/Tile";
// import OSM from "ol/source/OSM";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import { fromLonLat } from "ol/proj";
// import { Vector as VectorLayer } from "ol/layer";
// import { Vector as VectorSource } from "ol/source";
// import { Icon, Style } from "ol/style";

// function MapModal({ show, handleClose }) {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   useEffect(() => {
//     if (show) {
//       const map = new Map({
//         target: "map",
//         layers: [
//           new TileLayer({
//             source: new OSM(),
//           }),
//         ],
//         view: new View({
//           center: fromLonLat([0, 0]),
//           zoom: 2,
//         }),
//       });

//       // Add marker on click
//       map.on("click", (event) => {
//         const { coordinate } = event;
//         addMarker(map, coordinate);
//         console.log("Clicked Coordinates:", coordinate);
//       });
//     }
//   }, [show]);

//   // Function to add a marker
//   const addMarker = (map, coordinate) => {
//     const marker = new Feature({
//       geometry: new Point(coordinate),
//     });

//     const markerStyle = new Style({
//       image: new Icon({
//         anchor: [0.5, 1],
//         src: "https://openlayers.org/en/latest/examples/data/icon.png",
//       }),
//     });

//     marker.setStyle(markerStyle);

//     const vectorLayer = new VectorLayer({
//       source: new VectorSource({
//         features: [marker],
//       }),
//     });

//     map.addLayer(vectorLayer);
//   };

//   return (
//     <div className={showHideClassName}>
//       <div className="modal-main">
//         <div className="map-nav-bar">
//           <button onClick={handleClose} className="close-button"></button>
//         </div>
//         <div id="map" className="map-container"></div>
//       </div>
//     </div>
//   );
// }

// export default MapModal;

// import React, { useEffect, useState } from "react";
// import "./MapModal.css";
// import "ol/ol.css";
// import Map from "ol/Map";
// import View from "ol/View";
// import TileLayer from "ol/layer/Tile";
// import OSM from "ol/source/OSM";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import { fromLonLat } from "ol/proj";
// import { Vector as VectorLayer } from "ol/layer";
// import { Vector as VectorSource } from "ol/source";
// import { Icon, Style } from "ol/style";

// function MapModal({ show, handleClose }) {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";
//   const [map, setMap] = useState(null);
//   const [marker, setMarker] = useState(null);

//   useEffect(() => {
//     if (show) {
//       const newMap = new Map({
//         layers: [
//           new TileLayer({
//             source: new OSM(),
//           }),
//         ],
//         view: new View({
//           center: fromLonLat([0, 0]),
//           zoom: 2,
//         }),
//       });

//       const target = document.getElementById("map");

//       newMap.setTarget(target);

//       // Add click event listener to the map to add or remove marker
//       newMap.on("click", handleMapClick);

//       console.log("Map initialized:", newMap);

//       setMap(newMap);
//     }
//   }, [show]);

//   useEffect(() => {
//     // Cleanup function to remove event listener when component unmounts or modal closes
//     return () => {
//       if (map) {
//         map.un("click", handleMapClick);
//       }
//     };
//   }, [map]);

//   const handleMapClick = (event) => {
//     console.log("Map clicked");
//     if (!map) return; // Check if map is null

//     const coordinate = map.getEventCoordinate(event);

//     console.log("Clicked Coordinate:", coordinate);

//     if (!marker) {
//       // If no marker exists, add a new one
//       addMarker(coordinate);
//     } else {
//       // If a marker exists, remove it
//       removeMarker();
//     }
//   };

// // Function to add a marker
// const addMarker = (coordinate) => {
//   const newMarker = new Feature({
//     geometry: new Point(coordinate),
//   });

//   const markerStyle = new Style({
//     image: new Icon({
//       anchor: [0.5, 1],
//       src: "https://openlayers.org/en/latest/examples/data/icon.png",
//     }),
//   });

//   newMarker.setStyle(markerStyle);

//   const vectorSource = new VectorSource({
//     features: [newMarker],
//   });

//   const vectorLayer = new VectorLayer({
//     source: vectorSource,
//   });

//   map.addLayer(vectorLayer);
//   setMarker(newMarker);
// };

//   // Function to remove the marker
//   const removeMarker = () => {
//     map.removeLayer(map.getLayers().getArray()[1]); // Remove the vector layer containing the marker
//     setMarker(null);
//   };

//   return (
//     <div className={showHideClassName}>
//       <div className="modal-main">
//         <div className="map-nav-bar">
//           <button onClick={handleClose} className="close-button"></button>
//         </div>
//         <div id="map" className="map-container"></div>
//       </div>
//     </div>
//   );
// }

// export default MapModal;

import React, { useState, useEffect, useRef } from "react";
import "./MapModal.css"; // Import CSS for modal styles
import "ol/ol.css"; // Import OpenLayers CSS
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay";
import { toLonLat } from "ol/proj";

function MapModal({ show, handleClose, onCoordinatesCapture }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [marker, setMarker] = useState(null);

  const mapRef = useRef(null);

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [22, 78], // India's center coordinates
        zoom: 5, // Zoom level
      }),
    });

    mapRef.current = map;

    map.on("click", handleMapClick);

    return () => {
      map.un("click", handleMapClick);
    };
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleMapClick = (event) => {
    const map = mapRef.current;

    if (!map) return;

    const coordinate = event.coordinate;

    // Transform the clicked coordinates to EPSG:4326 (latitude and longitude)
    const lonLat = toLonLat(coordinate);

    const longitude = lonLat[0];
    const latitude = lonLat[1];

    setLatitude(latitude.toFixed(6));
    setLongitude(longitude.toFixed(6));

    if (marker) {
      map.removeOverlay(marker);
    }

    const markerElement = document.createElement("div");
    markerElement.className = "marker";
    const markerOverlay = new Overlay({
      position: coordinate,
      positioning: "center-center",
      element: markerElement,
      stopEvent: false,
    });
    map.addOverlay(markerOverlay);

    setMarker(markerOverlay);
    // Pass the captured coordinates to the parent component
    onCoordinatesCapture(latitude, longitude);
  };

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div className="map-nav-bar">
          <button onClick={handleClose} className="close-button"></button>
        </div>
        <div id="map" className="map"></div>
        <form action="" className="form-lat-longs">
          <input type="text" value={latitude} placeholder="Latitude" readOnly />
          <input
            type="text"
            value={longitude}
            placeholder="Longitude"
            readOnly
          />
        </form>
      </div>
    </div>
  );
}

export default MapModal;
