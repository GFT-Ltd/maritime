// import React from 'react';
// import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

// const RouteMap = ({ coordinates }) => {
//   return (
//     <MapContainer style={{ height: '400px', width: '100%' }} center={coordinates[0]} zoom={10}>
//       <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//       <Polyline
//         pathOptions={{ color: 'red', weight: 2 }}
//         positions={coordinates}
//       />
//     </MapContainer>
//   );
// };

// export default RouteMap;

// import React, { useEffect, useRef } from 'react';
// import 'ol/ol.css';
// import { Map, View } from 'ol';
// import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
// import { OSM, Vector as VectorSource } from 'ol/source';
// import { Style, Stroke } from 'ol/style';
// import { GeoJSON } from 'ol/format';

// const RouteMap = ({ coordinates }) => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     // Initialize the map when the component mounts
//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(), // OpenStreetMap as base layer
//         }),
//       ],
//       view: new View({
//         center: coordinates[0],
//         zoom: 10,
//       }),
//     });

//     // Define the style for the route
//     const routeStyle = new Style({
//       stroke: new Stroke({
//         color: 'red',
//         width: 2,
//       }),
//     });

//     // Add the route as a vector layer
//     const routeSource = new VectorSource({
//       features: new GeoJSON().readFeatures({
//         type: 'Feature',
//         geometry: {
//           type: 'LineString',
//           coordinates: coordinates,
//         },
//       }),
//     });

//     const routeLayer = new VectorLayer({
//       source: routeSource,
//       style: routeStyle,
//     });

//     map.addLayer(routeLayer);

//     // Cleanup function
//     return () => {
//       map.setTarget(undefined);
//     };
//   }, [coordinates]);

//   return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
// };

// export default RouteMap;

// import React, { useEffect, useRef } from 'react';
// import 'ol/ol.css';
// import { Map, View } from 'ol';
// import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
// import { OSM, Vector as VectorSource } from 'ol/source';
// import { Style, Stroke } from 'ol/style';
// import { GeoJSON } from 'ol/format';
// import { useGeographic } from 'ol/proj'; // Import useGeographic

// const RouteMap = ({ coordinates }) => {
//   const mapRef = useRef(null);

//   // Call useGeographic to configure OpenLayers to work with [longitude, latitude] coordinates
//   useGeographic();

//   useEffect(() => {
//     // Initialize the map when the component mounts
//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(), // OpenStreetMap as base layer
//         }),
//       ],
//       view: new View({
//         center: coordinates[0],
//         zoom: 10,
//       }),
//     });

//     // Define the style for the route
//     const routeStyle = new Style({
//       stroke: new Stroke({
//         color: 'red',
//         width: 2,
//       }),
//     });

//     // Add the route as a vector layer
//     const routeSource = new VectorSource({
//       features: new GeoJSON().readFeatures({
//         type: 'Feature',
//         geometry: {
//           type: 'LineString',
//           coordinates: coordinates,
//         },
//       }),
//     });

//     const routeLayer = new VectorLayer({
//       source: routeSource,
//       style: routeStyle,
//     });

//     map.addLayer(routeLayer);

//     // Cleanup function
//     return () => {
//       map.setTarget(undefined);
//     };
//   }, [coordinates]);

//   return <div ref={mapRef} style={{ width: '100%', height: '400px' }}></div>;
// };

// export default RouteMap;

// import React, { useEffect, useRef } from 'react';
// import 'ol/ol.css';
// import { Map, View } from 'ol';
// import { Tile as TileLayer, Vector as VectorLayer } from 'ol/layer';
// import { OSM, Vector as VectorSource } from 'ol/source';
// import { Style, Stroke } from 'ol/style';
// import { GeoJSON } from 'ol/format';
// import { useGeographic } from 'ol/proj'; // Import useGeographic

// const RouteMap = ({ coordinates }) => {
//   const mapRef = useRef(null);

//   // Call useGeographic to configure OpenLayers to work with [longitude, latitude] coordinates
//   useGeographic();

//   useEffect(() => {
//     // Initialize the map when the component mounts
//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(), // OpenStreetMap as base layer
//         }),
//       ],
//       view: new View({
//         center: coordinates[0],
//         zoom: 10,
//       }),
//     });

//     // Define the style for the route
//     const routeStyle = new Style({
//       stroke: new Stroke({
//         color: 'red',
//         width: 2,
//       }),
//     });

//     // Swap longitude and latitude values in the coordinates array
//     const swappedCoordinates = coordinates.map(coord => [coord[1], coord[0]]);

//     // Add the route as a vector layer
//     const routeSource = new VectorSource({
//       features: new GeoJSON().readFeatures({
//         type: 'Feature',
//         geometry: {
//           type: 'LineString',
//           coordinates: swappedCoordinates,
//         },
//       }),
//     });

//     const routeLayer = new VectorLayer({
//       source: routeSource,
//       style: routeStyle,
//     });

//     map.addLayer(routeLayer);

//     // Cleanup function
//     return () => {
//       map.setTarget(undefined);
//     };
//   }, [coordinates]);

//   return <div ref={mapRef} style={{ width: '100%', height: '30rem' }}></div>;
// };

// export default RouteMap;

import React, { useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { OSM, Vector as VectorSource } from "ol/source";
import { Style, Stroke } from "ol/style";
import { GeoJSON } from "ol/format";
import { useGeographic } from "ol/proj"; // Import useGeographic

const RouteMap = ({ coordinates }) => {
  const mapRef = useRef(null);

  // Call useGeographic to configure OpenLayers to work with [longitude, latitude] coordinates
  useGeographic();

  useEffect(() => {
    // Initialize the map when the component mounts
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(), // OpenStreetMap as base layer
        }),
      ],
      view: new View({
        // Set initial center and zoom level
        center: coordinates[0],
        zoom: 10,
      }),
    });

    // Define the style for the route
    const routeStyle = new Style({
      stroke: new Stroke({
        color: "green",
        width: 2,
      }),
    });

    // Swap longitude and latitude values in the coordinates array
    const swappedCoordinates = coordinates.map((coord) => [coord[1], coord[0]]);

    // Add the route as a vector layer
    const routeSource = new VectorSource({
      features: new GeoJSON().readFeatures({
        type: "Feature",
        geometry: {
          type: "LineString",
          coordinates: swappedCoordinates,
        },
      }),
    });

    const routeLayer = new VectorLayer({
      source: routeSource,
      style: routeStyle,
    });

    map.addLayer(routeLayer);

    // Calculate the extent of the route and set the map view to that extent
    const routeExtent = routeSource.getExtent();
    map.getView().fit(routeExtent, { padding: [100, 100, 100, 100] });

    // Cleanup function
    return () => {
      map.setTarget(undefined);
    };
  }, [coordinates]);

  return <div ref={mapRef} style={{ width: "100%", height: "30rem" }}></div>;
};

export default RouteMap;
