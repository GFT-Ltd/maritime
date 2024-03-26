// import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
// import { Map, View } from "ol";
// import TileLayer from "ol/layer/Tile";
// import VectorLayer from "ol/layer/Vector";
// import { Circle as CircleStyle, Fill, Style } from "ol/style";
// import OSM from "ol/source/OSM";
// import VectorSource from "ol/source/Vector";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";

// function WeatherRouteMap({ routeLatLong }) {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current || !routeLatLong) return;

//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: routeLatLong,
//         zoom: 10,
//       }),
//     });

//     const markerStyle = new Style({
//       image: new CircleStyle({
//         radius: 6,
//         fill: new Fill({ color: "red" }),
//       }),
//     });

//     const markerFeature = new Feature({
//       geometry: new Point(routeLatLong),
//     });

//     const markerSource = new VectorSource({
//       features: [markerFeature],
//     });

//     const markerLayer = new VectorLayer({
//       source: markerSource,
//       style: markerStyle,
//     });

//     map.addLayer(markerLayer);

//     return () => {
//       map.setTarget(null);
//     };
//   }, [routeLatLong]);

//   console.log(routeLatLong)

//   if (!routeLatLong) {
//     return <div>No route details available</div>;
//   }

//   return <div ref={mapRef} className="map-container"></div>;
// }

// export default WeatherRouteMap;

// import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
// import { Map, View } from "ol";
// import TileLayer from "ol/layer/Tile";
// import VectorLayer from "ol/layer/Vector";
// import { Circle as CircleStyle, Fill, Style } from "ol/style";
// import OSM from "ol/source/OSM";
// import VectorSource from "ol/source/Vector";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";

// function WeatherRouteMap({ routeLatLong }) {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current || !routeLatLong || routeLatLong.length === 0) return;

//     // Create the map
//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: routeLatLong[0], // Assuming the first coordinate is the initial center
//         zoom: 10,
//       }),
//     });

//     // Create marker style
//     const markerStyle = new Style({
//       image: new CircleStyle({
//         radius: 6,
//         fill: new Fill({ color: "red" }),
//       }),
//     });

//     // Create marker features for each coordinate
//     const markerFeatures = routeLatLong.map((coord) => {
//       // Swap latitude and longitude as OpenLayers expects [longitude, latitude]
//       console.log([coord[0], coord[1]])
//       return new Feature({
//         geometry: new Point([coord[0], coord[1]]), // Swap the coordinates here
//       });
//     });

//     // Create vector source and layer for markers
//     const markerSource = new VectorSource({
//       features: markerFeatures,
//     });

//     const markerLayer = new VectorLayer({
//       source: markerSource,
//       style: markerStyle,
//     });

//     // Add marker layer to the map
//     map.addLayer(markerLayer);

//     return () => {
//       map.setTarget(null);
//     };
//   }, [routeLatLong]);

//   if (!routeLatLong || routeLatLong.length === 0) {
//     return <div>No route details available</div>;
//   }

//   return <div ref={mapRef} style={{ width: "100%", height: "30rem" }} className="map-container"></div>;
// }

// export default WeatherRouteMap;

// import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
// import { Map, View } from "ol";
// import TileLayer from "ol/layer/Tile";
// import VectorLayer from "ol/layer/Vector";
// import { Circle as CircleStyle, Fill, Style } from "ol/style";
// import OSM from "ol/source/OSM";
// import VectorSource from "ol/source/Vector";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";

// function WeatherRouteMap({ routeLatLong }) {
//   console.log(routeLatLong)
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (!mapRef.current || !routeLatLong || routeLatLong.length === 0) return;

//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         center: routeLatLong[0], // Assuming the first coordinate is the initial center
//         zoom: 10,
//       }),
//     });

//     const markerStyle = new Style({
//       image: new CircleStyle({
//         radius: 6,
//         fill: new Fill({ color: "red" }),
//       }),
//     });

//     const markerSource = new VectorSource();

//     routeLatLong.forEach(coord => {
//       const feature = new Feature({
//         geometry: new Point([coord[0], coord[1]]),
//       });
//       feature.setStyle(markerStyle);
//       markerSource.addFeature(feature);
//     });

//     const markerLayer = new VectorLayer({
//       source: markerSource,
//     });

//     map.addLayer(markerLayer);

//     return () => {
//       map.setTarget(null);
//     };
//   }, [routeLatLong]);

//   if (!routeLatLong || routeLatLong.length === 0) {
//     return <div>No route details available</div>;
//   }

//   return <div ref={mapRef} style={{ width: "100%", height: "30rem" }} className="map-container"></div>;
// }

// export default WeatherRouteMap;

// import React, { useEffect, useRef } from "react";
// import "ol/ol.css";
// import { Map, View } from "ol";
// import TileLayer from "ol/layer/Tile";
// import VectorLayer from "ol/layer/Vector";
// import { Circle as CircleStyle, Fill, Style } from "ol/style";
// import OSM from "ol/source/OSM";
// import VectorSource from "ol/source/Vector";
// import Feature from "ol/Feature";
// import Point from "ol/geom/Point";
// import "./WeatherRouteMap.css";
// import Select from "ol/interaction/Select";
// import { fromLonLat } from "ol/proj"; // Import fromLonLat function

// function WeatherRouteMap({ routeLatLong }) {
//   const mapRef = useRef(null);

// useEffect(() => {
//   if (!mapRef.current || !routeLatLong || routeLatLong.length === 0) return;

//   const map = new Map({
//     target: mapRef.current,
//     layers: [
//       new TileLayer({
//         source: new OSM(),
//       }),
//     ],
//     view: new View({
//       center: routeLatLong[0], // Assuming the first coordinate is the initial center
//       zoom: 20,
//     }),
//   });

//   const markerStyle = new Style({
//     image: new CircleStyle({
//       radius: 6,
//       fill: new Fill({ color: "red" }),
//     }),
//   });

//   const markerFeatures = [];

//   // Create marker features for each coordinate
//   routeLatLong.forEach(coord => {
//     const markerFeature = new Feature({
//       geometry: new Point(coord),
//     });
//     markerFeature.setStyle(markerStyle);
//     markerFeatures.push(markerFeature);
//   });

//   const markerSource = new VectorSource({
//     features: markerFeatures,
//   });

//   const markerLayer = new VectorLayer({
//     source: markerSource,
//   });

//   map.addLayer(markerLayer);

//   return () => {
//     map.setTarget(null);
//   };
// }, [routeLatLong]);

//   useEffect(() => {
//     if (!mapRef.current || !routeLatLong || routeLatLong.length === 0) return;

//     // Swap latitude and longitude values in the inner arrays
//     const reversedRouteLatLong = routeLatLong.map((coord) => [
//       coord[1],
//       coord[0],
//     ]);

//     const map = new Map({
//       target: mapRef.current,
//       layers: [
//         new TileLayer({
//           source: new OSM(),
//         }),
//       ],
//       view: new View({
//         // center: reversedRouteLatLong[0],
//         center:fromLonLat(reversedRouteLatLong[0]),
//         zoom: 3,
//       }),
//     });

//     const markerStyle = new Style({
//       image: new CircleStyle({
//         radius: 4,
//         fill: new Fill({ color: "blue" }),
//       }),
//     });

//     const markerFeatures = [];

//     // Create marker features for each coordinate
//     reversedRouteLatLong.forEach((coord) => {
//       const markerFeature = new Feature({
//         geometry: new Point(coord),
//       });

//       markerFeature.setStyle(markerStyle);
//       markerFeatures.push(markerFeature);
//     });

//     const markerSource = new VectorSource({
//       features: markerFeatures,
//     });

//     const markerLayer = new VectorLayer({
//       source: markerSource,
//     });

//     map.addLayer(markerLayer);

//     // Calculate the extent of the route
//     const routeExtent = markerSource.getExtent();

//     // Set the map view to fit the extent of the route
//     map.getView().fit(routeExtent, { padding: [100, 100, 100, 100] });

//     // Create a Select interaction to handle feature clicks
//     const selectInteraction = new Select();
//     map.addInteraction(selectInteraction);

//     // Event listener for feature clicks
//     selectInteraction.on("select", (event) => {
//       const selectedFeatures = event.selected;
//       if (selectedFeatures.length > 0) {
//         const clickedCoord = selectedFeatures[0].getGeometry().getCoordinates();
//         console.log("Clicked Coordinate: ", clickedCoord);
//         // Here you can save the clicked coordinate to state or perform any other action
//       }
//     });

//     // Set cursor style to pointer for map container
//     mapRef.current.style.cursor = "pointer";

//     return () => {
//       map.setTarget(null);
//     };
//   }, [routeLatLong]);

//   if (!routeLatLong || routeLatLong.length === 0) {
//     return <div>No route details available</div>;
//   }

//   return (
//     <div
//       ref={mapRef}
//       style={{ width: "100%", height: "30rem" }}
//       className="map-container weather-map"
//     ></div>
//   );
// }

// export default WeatherRouteMap;

// useEffect(() => {
//   if (!mapRef.current || !routeLatLong || routeLatLong.length === 0) return;

//   // Swap latitude and longitude values in the inner arrays
//   const reversedRouteLatLong = routeLatLong.map(coord => [coord[1], coord[0]]);
//   console.log("Weather Swapped : ",reversedRouteLatLong)

//   const map = new Map({
//     target: mapRef.current,
//     layers: [
//       new TileLayer({
//         source: new OSM(),
//       }),
//     ],
//     view: new View({
//       center: reversedRouteLatLong[0], // Use the first reversed coordinate as the initial center
//       zoom: 3,
//     }),
//   });

//   const markerStyle = new Style({
//     image: new CircleStyle({
//       radius: 4,
//       fill: new Fill({ color: "blue" }),
//     }),
//   });

//   const markerFeatures = [];

//   // Create marker features for each coordinate
//   reversedRouteLatLong.forEach(coord => {
//     const markerFeature = new Feature({
//       geometry: new Point(coord),
//     });
//     markerFeature.setStyle(markerStyle);
//     markerFeatures.push(markerFeature);
//   });

//   const markerSource = new VectorSource({
//     features: markerFeatures,
//   });

//   const markerLayer = new VectorLayer({
//     source: markerSource,
//   });

//   map.addLayer(markerLayer);

//   return () => {
//     map.setTarget(null);
//   };
// }, [routeLatLong]);

import React, { useState, useEffect, useRef } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { Circle as CircleStyle, Fill, Style } from "ol/style";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import Select from "ol/interaction/Select";
import { fromLonLat } from "ol/proj";
import "./WeatherRouteMap.css";
import WeatherRouteModal from "../../Components/WeatherRoute/WeatherRouteModal";

function WeatherRouteMap({ routeLatLong }) {
  const mapRef = useRef(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchForecastWeatherData = (latitude, longitude) => {
    setIsForecastLoading(true);

    const apiKey = "e8e630783de24be59cc104030242603";
    const apiUrl = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Handle the fetched weather data here
        console.log("Forecast Weather Data:", data);
        setForecastWeatherData(data);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error fetching forecast weather data:", error);
      })
      .finally(() => {
        setIsForecastLoading(false);
      });
  };

  function coord3857To4326(coord) {
    const e_value = 2.7182818284;
    const X = 20037508.34;

    const lat3857 = coord.lat;
    const long3857 = coord.lng;

    //converting the longitute from epsg 3857 to 4326
    const long4326 = (long3857 * 180) / X;

    //converting the latitude from epsg 3857 to 4326 split in multiple lines for readability
    let lat4326 = lat3857 / (X / 180);
    const exponent = (Math.PI / 180) * lat4326;

    lat4326 = Math.atan(Math.pow(e_value, exponent));
    lat4326 = lat4326 / (Math.PI / 360); // Here is the fixed line
    lat4326 = lat4326 - 90;

    return { lat: lat4326, lng: long4326 };
  }

  useEffect(() => {
    if (!mapRef.current || !routeLatLong || routeLatLong.length === 0) return;

    // Swap latitude and longitude values in the inner arrays and transform to OpenLayers coordinates
    const reversedRouteLatLong = routeLatLong.map((coord) =>
      fromLonLat([coord[1], coord[0]])
    );

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: reversedRouteLatLong[0],
        zoom: 3,
      }),
    });

    const markerStyle = new Style({
      image: new CircleStyle({
        radius: 4,
        fill: new Fill({ color: "blue" }),
      }),
    });

    const markerFeatures = reversedRouteLatLong.map((coord) => {
      const markerFeature = new Feature({
        geometry: new Point(coord),
      });
      markerFeature.setStyle(markerStyle);
      return markerFeature;
    });

    const markerSource = new VectorSource({
      features: markerFeatures,
    });

    const markerLayer = new VectorLayer({
      source: markerSource,
    });

    map.addLayer(markerLayer);

    // Create a Select interaction to handle feature clicks
    const selectInteraction = new Select();
    map.addInteraction(selectInteraction);

    // Event listener for feature clicks
    selectInteraction.on("select", (event) => {
      const selectedFeatures = event.selected;
      if (selectedFeatures.length > 0) {
        const clickedCoord = selectedFeatures[0].getGeometry().getCoordinates();
        const { lat, lng } = coord3857To4326({
          lat: clickedCoord[1],
          lng: clickedCoord[0],
        });
        console.log("Clicked Coordinate (Longitude, Latitude): ", [lng, lat]);
        fetchForecastWeatherData(lat, lng);
        // Here you can save the clicked coordinate to state or perform any other action
      }
    });

    const routeExtent = markerSource.getExtent();
    map.getView().fit(routeExtent, { padding: [100, 100, 100, 100] });

    // Set cursor style to pointer for map container
    mapRef.current.style.cursor = "pointer";

    return () => {
      map.setTarget(null);
    };
  }, [routeLatLong]);

  if (!routeLatLong || routeLatLong.length === 0) {
    return <div>No route details available</div>;
  }

  return (
    <div>
      <div
        ref={mapRef}
        style={{ height: "30rem" }}
        className="map-container weather-map"
      ></div>
      {isModalOpen && (
        <WeatherRouteModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          forecastData={forecastWeatherData}
        />
      )}
    </div>
  );
}

export default WeatherRouteMap;
