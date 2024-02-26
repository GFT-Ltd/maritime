import React, { useState, useEffect, useRef } from "react";
import "./MapModal.css"; // Import CSS for modal styles
import "ol/ol.css"; // Import OpenLayers CSS
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay";
import { toLonLat } from "ol/proj";

function HistoryMapModal({ show, handleClose, onCoordinatesCapture }) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [marker, setMarker] = useState(null);

  const mapRef = useRef(null);

  const showHideClassName = show ? "modal display-block" : "modal display-none";

  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.keyCode === 27) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);
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

export default HistoryMapModal;
