// import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
// import { Map, View } from "ol";
// import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
// import { OSM, Vector as VectorSource } from "ol/source";
// import { Style, Circle, Fill } from "ol/style"; // Add imports for Circle and Fill
// import { GeoJSON } from "ol/format";
// import { useGeographic } from "ol/proj";  // Import useGeographic
// import * as ol from 'ol'; // Import entire ol namespace
// import "./WeatherRoute.css";

// function WeatherRoute({ routeWeatherDetails }) {
//   const mapRef = useRef(null);
//   useGeographic();

//   useEffect(() => {
//     if (!mapRef.current) return;

//     // Initialize the map
//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: routeLatLngs[0],
//         zoom: 10,
//       }),
//     });

//     const markerStyle = new Style({
//       image: new Circle({
//         radius: 6,
//         fill: new Fill({ color: "red" }),
//       }),
//     });

//     const markerFeatures = routeLatLngs.map((coord) => {
//       return new ol.Feature({
//         geometry: new ol.geom.Point(coord),
//       });
//     });

//     const markerSource = new VectorSource({
//       features: markerFeatures,
//     });

//     const markerLayer = new VectorLayer({
//       source: markerSource,
//       style: markerStyle,
//     });

//     map.addLayer(markerLayer);

//     return () => {
//       map.setTarget(null);
//     };
//   }, [routeWeatherDetails]);

//   console.log(routeWeatherDetails);
//   if (
//     !routeWeatherDetails ||
//     !routeWeatherDetails.features ||
//     routeWeatherDetails.features.length === 0
//   ) {
//     return <div>No route details available</div>;
//   }

//   const coordinates_first =
//     routeWeatherDetails.features[0].geometry.coordinates;
//   const filteredCoordinates = filterCoordinates(coordinates_first);
//   const routeLatLngs = filteredCoordinates.map((coord) => [coord[1], coord[0]]);
//   console.log("the coordinates are :", routeLatLngs);

//   return <div ref={mapRef} className="map-container"></div>;
// }

// function filterCoordinates(coordinates) {
//   const filteredCoordinates = [];
//   const step = 20;

//   filteredCoordinates.push(coordinates[0]);

//   for (let i = step; i < coordinates.length - 1; i += step) {
//     filteredCoordinates.push(coordinates[i]);
//   }

//   filteredCoordinates.push(coordinates[coordinates.length - 1]);

//   return filteredCoordinates;
// }

// export default WeatherRoute;

// import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
// import "./WeatherRoute.css";

// function WeatherRoute({ routeWeatherDetails }) {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current) return;
//     const ol = window.ol;

//     const { Map, View, TileLayer, VectorLayer, Circle, Fill, Style, OSM, VectorSource, Feature, geom } = ol;

//     // Initialize the map
//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: routeLatLngs[0],
//         zoom: 10,
//       }),
//     });

//     const markerStyle = new Style({
//       image: new Circle({
//         radius: 6,
//         fill: new Fill({ color: "red" }),
//       }),
//     });

//     const markerFeatures = routeLatLngs.map((coord) => {
//       return new Feature({
//         geometry: new geom.Point(coord),
//       });
//     });

//     const markerSource = new VectorSource({
//       features: markerFeatures,
//     });

//     const markerLayer = new VectorLayer({
//       source: markerSource,
//       style: markerStyle,
//     });

//     map.addLayer(markerLayer);

//     return () => {
//       map.setTarget(null);
//     };
//   }, [routeWeatherDetails]);

//   console.log(routeWeatherDetails);
//   if (
//     !routeWeatherDetails ||
//     !routeWeatherDetails.features ||
//     routeWeatherDetails.features.length === 0
//   ) {
//     return <div>No route details available</div>;
//   }

//   const coordinates_first = routeWeatherDetails.features[0].geometry.coordinates;
//   const filteredCoordinates = filterCoordinates(coordinates_first);
//   const routeLatLngs = filteredCoordinates.map((coord) => [coord[1], coord[0]]);
//   console.log("the coordinates are :", routeLatLngs);

//   return <div ref={mapRef} className="map-container"></div>;
// }

// function filterCoordinates(coordinates) {
//   const filteredCoordinates = [];
//   const step = 20;

//   filteredCoordinates.push(coordinates[0]);

//   for (let i = step; i < coordinates.length - 1; i += step) {
//     filteredCoordinates.push(coordinates[i]);
//   }

//   filteredCoordinates.push(coordinates[coordinates.length - 1]);

//   return filteredCoordinates;
// }

// export default WeatherRoute;

// import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
// import { Map, View } from "ol";
// import TileLayer from "ol/layer/Tile";
// import VectorLayer from "ol/layer/Vector";
// import { Circle as CircleStyle, Fill, Style } from "ol/style";
// import OSM from "ol/source/OSM";
// import VectorSource from "ol/source/Vector";
// import GeoJSON from "ol/format/GeoJSON";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";

// import "./WeatherRoute.css";

// function WeatherRoute({ routeWeatherDetails }) {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current) return;

//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: routeLatLngs[0],
//         zoom: 10,
//       }),
//     });

//     const markerStyle = new Style({
//       image: new CircleStyle({
//         radius: 6,
//         fill: new Fill({ color: "red" }),
//       }),
//     });

//     const markerFeatures = routeLatLngs.map((coord) => {
//       return new Feature({
//         geometry: new Point(coord),
//       });
//     });

//     const markerSource = new VectorSource({
//       features: markerFeatures,
//     });

//     const markerLayer = new VectorLayer({
//       source: markerSource,
//       style: markerStyle,
//     });

//     map.addLayer(markerLayer);

//     return () => {
//       map.setTarget(null);
//     };
//   }, [routeWeatherDetails]);

//   if (
//     !routeWeatherDetails ||
//     !routeWeatherDetails.features ||
//     routeWeatherDetails.features.length === 0
//   ) {
//     return <div>No route details available</div>;
//   }

//   const coordinates_first =
//     routeWeatherDetails.features[0].geometry.coordinates;
//   const filteredCoordinates = filterCoordinates(coordinates_first);
//   const routeLatLngs = filteredCoordinates.map((coord) => [coord[1], coord[0]]);
//   console.log("the coordinates are :", routeLatLngs);

//   return <div ref={mapRef} className="map-container"></div>;
// }

// function filterCoordinates(coordinates) {
//   const filteredCoordinates = [];
//   const step = 20;

//   filteredCoordinates.push(coordinates[0]);

//   for (let i = step; i < coordinates.length - 1; i += step) {
//     filteredCoordinates.push(coordinates[i]);
//   }

//   filteredCoordinates.push(coordinates[coordinates.length - 1]);

//   return filteredCoordinates;
// }
// export default WeatherRoute;

import React from "react";
import WeatherRouteMap from "./WeatherRouteMap";

function WeatherRoute({ coordinateHops, routeWeatherDetails }) {
  if (
    !routeWeatherDetails ||
    !routeWeatherDetails.features ||
    routeWeatherDetails.features.length === 0
  ) {
    return;
  }

  const coordinates_first =
    routeWeatherDetails.features[0].geometry.coordinates;
  const filteredCoordinates = filterCoordinates(
    coordinates_first,
    coordinateHops
  );

  const routeLatLngs = filteredCoordinates.map((coord) => [coord[1], coord[0]]);
  console.log("Weather routeLatLng : ", routeLatLngs);
  return (
    <div>
      {/* <RouteDetails /> */}
      <WeatherRouteMap routeLatLong={routeLatLngs} />
    </div>
  );
}

function filterCoordinates(coordinates, hops) {
  const filteredCoordinates = [];
  const step = hops;

  filteredCoordinates.push(coordinates[0]);

  for (let i = step; i < coordinates.length - 1; i += step) {
    filteredCoordinates.push(coordinates[i]);
  }

  filteredCoordinates.push(coordinates[coordinates.length - 1]);

  return filteredCoordinates;
}

export default WeatherRoute;
