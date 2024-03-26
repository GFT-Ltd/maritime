// import React from "react";
// import NavbarTwo from "../Components/Navbar/NavbarTwo";
// import { FaMapMarkedAlt } from "react-icons/fa";
// import "./Weather.css";

// function Weather() {
//   return (
//     <div>
//       <NavbarTwo />
//       <div className="weather-section">
//         <div className="row">
//           <div className="col-lg-4 col-md-4 col-sm-12 col-12 input-section">
//             <div className="container history-weather">
//               <div className="box">
//                 <span className="title">Weather History</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon">
//                     <FaMapMarkedAlt />

//                     </div>
//                     <button className="button-8" role="button">
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="container forcast-weather">
//               <div className="box">
//                 <span className="title">Weather Forecast</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon">
//                     <FaMapMarkedAlt />

//                     </div>
//                     <button className="button-8" role="button">
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 col-md-8 col-sm-12 col-12 calender-section"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Weather;

// import React, { useState } from "react";
// import NavbarTwo from "../Components/Navbar/NavbarTwo";
// import { FaMapMarkedAlt } from "react-icons/fa";
// import MapModal from "../Components/MapModal/MapModal";
// import "./Weather.css";

// function Weather() {
//   const [showMapModal, setShowMapModal] = useState(false);

//   const openMapModal = () => {
//     setShowMapModal(true);
//   };

//   const closeMapModal = () => {
//     setShowMapModal(false);
//   };

//   const [capturedCoordinates, setCapturedCoordinates] = useState(null);

//   const handleCoordinatesCapture = (latitude, longitude) => {
//     // Handle the captured coordinates here, such as setting them in state
//     setCapturedCoordinates({ latitude, longitude });
//   };

//   return (
//     <div>
//       <NavbarTwo />
//       <div className="weather-section">
//         <div className="row">
//           <div className="col-lg-4 col-md-4 col-sm-12 col-12 input-section">
//             <div className="container history-weather">
//               <div className="box">
//                 <span className="title">Weather History</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon" onClick={openMapModal}>
//                       <FaMapMarkedAlt />
//                     </div>
//                     <button className="button-8" role="button">
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="container forcast-weather">
//               <div className="box">
//                 <span className="title">Weather Forecast</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon" onClick={openMapModal}>
//                       <FaMapMarkedAlt />
//                     </div>
//                     <button className="button-8" role="button">
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 col-md-8 col-sm-12 col-12 calender-section">
//             {capturedCoordinates && (
//               <p>
//                 Coordinates captured: {capturedCoordinates.latitude},{" "}
//                 {capturedCoordinates.longitude}
//               </p>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Modal for displaying the map */}
//       <MapModal
//         show={showMapModal}
//         handleClose={closeMapModal}
//         onCoordinatesCapture={handleCoordinatesCapture}
//       />
//     </div>
//   );
// }

// export default Weather;

// import React, { useState } from "react";
// import NavbarTwo from "../Components/Navbar/NavbarTwo";
// import { FaMapMarkedAlt } from "react-icons/fa";
// import MapModal from "../Components/MapModal/MapModal";
// import "./Weather.css";

// function Weather() {
//   const [showMapModal, setShowMapModal] = useState(false);
//   const [capturedCoordinates, setCapturedCoordinates] = useState(null);
//   const [weatherData, setWeatherData] = useState(null);

//   const openMapModal = () => {
//     setShowMapModal(true);
//   };

//   const closeMapModal = () => {
//     setShowMapModal(false);
//   };

//   const handleCoordinatesCapture = (latitude, longitude) => {
//     // Handle the captured coordinates here, such as setting them in state
//     setCapturedCoordinates({ latitude, longitude });

//     // Fetch weather data using the captured coordinates
//     fetchWeatherData(latitude, longitude);
//   };

//   const fetchWeatherData = (latitude, longitude) => {
//     const apiKey = "526e6cf6febd4002943183548242202";
//     const apiUrl = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}`;

//     fetch(apiUrl)
//       .then((response) => response.text())
//       .then((data) => {
//         // Parse the XML response here and set the weather data in state
//         // For now, let's just log the data to the console
//         console.log(data);
//         setWeatherData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//       });
//   };

//   return (
//     <div>
//       <NavbarTwo />
//       <div className="weather-section">
//         <div className="row">
//           <div className="col-lg-4 col-md-4 col-sm-12 col-12 input-section">
//             <div className="container history-weather">
//               <div className="box">
//                 <span className="title">Weather History</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon" onClick={openMapModal}>
//                       <FaMapMarkedAlt />
//                     </div>
//                     <button className="button-8" role="button">
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="container forcast-weather">
//               <div className="box">
//                 <span className="title">Weather Forecast</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon" onClick={openMapModal}>
//                       <FaMapMarkedAlt />
//                     </div>
//                     <button className="button-8" role="button">
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 col-md-8 col-sm-12 col-12 calender-section">
//             {capturedCoordinates && (
//               <p>
//                 Coordinates captured: {capturedCoordinates.latitude},{" "}
//                 {capturedCoordinates.longitude}
//               </p>
//             )}
//             {weatherData && (
//               <div>
//                 {/* Display weather data here */}
//                 <p>Weather Data: {weatherData}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Modal for displaying the map */}
//       <MapModal
//         show={showMapModal}
//         handleClose={closeMapModal}
//         onCoordinatesCapture={handleCoordinatesCapture}
//       />
//     </div>
//   );
// }

// export default Weather;

// import React, { useState } from "react";
// import NavbarTwo from "../Components/Navbar/NavbarTwo";
// import { FaMapMarkedAlt } from "react-icons/fa";
// import MapModal from "../Components/MapModal/MapModal";
// import "./Weather.css";

// function Weather() {
//   const [showMapModal, setShowMapModal] = useState(false);
//   const [capturedCoordinates, setCapturedCoordinates] = useState(null);
//   const [weatherData, setWeatherData] = useState(null);
//   const [locationQuery, setLocationQuery] = useState("");

//   const openMapModal = () => {
//     setShowMapModal(true);
//   };

//   const closeMapModal = () => {
//     setShowMapModal(false);
//   };

//   const handleCoordinatesCapture = (latitude, longitude) => {
//     setCapturedCoordinates({ latitude, longitude });

//     // Fetch weather data using the captured coordinates
//     fetchWeatherData(latitude, longitude);
//   };

//   const handleLocationQueryChange = (event) => {
//     setLocationQuery(event.target.value);
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       fetchCoordinatesForLocation(locationQuery);
//     }
//   };

//   const fetchCoordinatesForLocation = (query) => {
//     // Construct the API URL for geocoding service (using OpenStreetMap Nominatim API)
//     const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.length > 0) {
//           // Extract latitude and longitude from the response
//           const { lat, lon } = data[0];
//           setCapturedCoordinates({ latitude: lat, longitude: lon });
//           fetchWeatherData(lat, lon);
//         } else {
//           console.error("No coordinates found for the location:", query);
//           // Clear previously captured coordinates and weather data
//           setCapturedCoordinates(null);
//           setWeatherData(null);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching coordinates:", error);
//       });
//   };

//   const fetchWeatherData = (latitude, longitude) => {
//     // Fetch weather data using the captured coordinates
//     const apiKey = "526e6cf6febd4002943183548242202";
//     const apiUrl = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather data:", error);
//       });
//   };

//   return (
//     <div>
//       <NavbarTwo />
//       <div className="weather-section">
//         <div className="row">
//           <div className="col-lg-4 col-md-4 col-sm-12 col-12 input-section">
//             <div className="container history-weather">
//               <div className="box">
//                 <span className="title">Weather History</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                     value={locationQuery}
//                     onChange={handleLocationQueryChange}
//                     onKeyPress={handleKeyPress}
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon" onClick={openMapModal}>
//                       <FaMapMarkedAlt />
//                     </div>
//                     <button
//                       className="button-8"
//                       role="button"
//                       onClick={fetchCoordinatesForLocation}
//                     >
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="container forcast-weather">
//               <div className="box">
//                 <span className="title">Weather Forecast</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                     value={locationQuery}
//                     onChange={handleLocationQueryChange}
//                     onKeyPress={handleKeyPress}
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon" onClick={openMapModal}>
//                       <FaMapMarkedAlt />
//                     </div>
//                     <button
//                       className="button-8"
//                       role="button"
//                       onClick={fetchCoordinatesForLocation}
//                     >
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 col-md-8 col-sm-12 col-12 calender-section">
//             {capturedCoordinates && (
//               <p>
//                 Coordinates captured: {capturedCoordinates.latitude},{" "}
//                 {capturedCoordinates.longitude}
//               </p>
//             )}
//             {weatherData && (
//               <div>
//                 {/* Display weather data here */}
//                 <p>Weather Data: {JSON.stringify(weatherData)}</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       {/* Modal for displaying the map */}
//       <MapModal
//         show={showMapModal}
//         handleClose={closeMapModal}
//         onCoordinatesCapture={handleCoordinatesCapture}
//       />
//     </div>
//   );
// }

// export default Weather;

// import React, { useState, useEffect } from "react";
// import NavbarTwo from "../Components/Navbar/NavbarTwo";
// import { FaMapMarkedAlt } from "react-icons/fa";
// import MapModal from "../Components/MapModal/MapModal";
// import "./Weather.css";
// import Calendar from "../Components/Calender/Calendar";

// function Weather() {
//   const [showMapModal, setShowMapModal] = useState(false);
//   const [capturedCoordinates, setCapturedCoordinates] = useState(null);
//   const [weatherHistoryData, setWeatherHistoryData] = useState(null);
//   const [forecastWeatherData, setForecastWeatherData] = useState(null);
//   const [locationQuery, setLocationQuery] = useState("");
//   const [isForecastLoading, setIsForecastLoading] = useState(false);
//   const [isHistoryLoading, setIsHistoryLoading] = useState(false);

//   const openMapModal = () => {
//     setShowMapModal(true);
//   };

//   const closeMapModal = () => {
//     setShowMapModal(false);
//   };

//   const handleCoordinatesCapture = (latitude, longitude) => {
//     setCapturedCoordinates({ latitude, longitude });
//     // fetchWeatherHistoryData(latitude, longitude);
//     fetchForecastWeatherData(latitude, longitude);
//   };

//   const handleLocationQueryChange = (event) => {
//     setLocationQuery(event.target.value);
//   };

//   const handleWeatherHistoryButtonClick = () => {
//     fetchCoordinatesForLocation(locationQuery, fetchWeatherHistoryData);
//   };

//   const handleForecastWeatherButtonClick = () => {
//     fetchCoordinatesForLocation(locationQuery, fetchForecastWeatherData);
//   };

//   const fetchCoordinatesForLocation = (query, callback) => {
//     // Construct the API URL for geocoding service (using OpenStreetMap Nominatim API)
//     const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data && data.length > 0) {
//           // Extract latitude and longitude from the response
//           const { lat, lon } = data[0];
//           setCapturedCoordinates({ latitude: lat, longitude: lon });
//           // Call the callback function to fetch weather data
//           callback(lat, lon);
//         } else {
//           console.error("No coordinates found for the location:", query);
//           // Clear previously captured coordinates and weather data
//           setCapturedCoordinates(null);
//           setWeatherHistoryData(null);
//           setForecastWeatherData(null);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching coordinates:", error);
//       });
//   };

//   useEffect(() => {
//     if (forecastWeatherData) {
//       setIsForecastLoading(false);
//     }
//   }, [forecastWeatherData]);

//   useEffect(() => {
//     if (weatherHistoryData) {
//       setIsHistoryLoading(false);
//     }
//   }, [weatherHistoryData]);

//   // const fetchWeatherHistoryData = (latitude, longitude) => {
//   //   setIsHistoryLoading(true);
//   //   // Calculate the date 60 days before the current date
//   //   const currentDate = new Date();
//   //   const pastDate = new Date(currentDate);
//   //   pastDate.setDate(currentDate.getDate() - 60);

//   //   // Format the past date as YYYY-MM-DD
//   //   const formattedDate = pastDate.toISOString().split("T")[0];

//   //   // Fetch weather history data using the captured coordinates and past date
//   //   const apiKey = "526e6cf6febd4002943183548242202";
//   //   const apiUrl = `http://api.worldweatheronline.com/premium/v1/past-marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}&date=${formattedDate}`;

//   //   fetch(apiUrl)
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setWeatherHistoryData(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error fetching weather history data:", error);
//   //     });
//   // };

//   const fetchWeatherHistoryData = (latitude, longitude) => {
//     setIsHistoryLoading(true);

//     // Calculate the start date (1 month ago) and end date (today)
//     const endDate = new Date();
//     const startDate = new Date();
//     startDate.setMonth(startDate.getMonth() - 1); // Set start date to 1 month ago

//     // Format the dates as YYYY-MM-DD
//     const formattedStartDate = startDate.toISOString().split("T")[0];
//     const formattedEndDate = endDate.toISOString().split("T")[0];

//     // Fetch weather history data using the captured coordinates, start date, and end date
//     const apiKey = "526e6cf6febd4002943183548242202";
//     const apiUrl = `http://api.worldweatheronline.com/premium/v1/past-marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}&date=${formattedStartDate}&enddate=${formattedEndDate}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setWeatherHistoryData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching weather history data:", error);
//       })
//       .finally(() => {
//         setIsHistoryLoading(false); // Set isHistoryLoading to false regardless of success or failure
//       });
//   };

//   const fetchForecastWeatherData = (latitude, longitude) => {
//     setIsForecastLoading(true);
//     // Fetch forecast weather data using the captured coordinates
//     const apiKey = "526e6cf6febd4002943183548242202";
//     const apiUrl = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}`;

//     fetch(apiUrl)
//       .then((response) => response.json())
//       .then((data) => {
//         setForecastWeatherData(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching forecast weather data:", error);
//       });
//   };

//   return (
//     <div>
//       <NavbarTwo />
//       <div className="weather-section">
//         <div className="row">
//           <div className="col-lg-4 col-md-4 col-sm-12 col-12 input-section">
//             <div className="container history-weather">
//               <div className="box">
//                 <span className="title">Weather History</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                     value={locationQuery}
//                     onChange={handleLocationQueryChange}
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon" onClick={openMapModal}>
//                       <FaMapMarkedAlt />
//                     </div>
//                     <button
//                       className="button-8"
//                       role="button"
//                       onClick={handleWeatherHistoryButtonClick}
//                     >
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="container forcast-weather">
//               <div className="box">
//                 <span className="title">Forecast Weather</span>
//                 <div className="input-div">
//                   <input
//                     placeholder="Enter Location"
//                     className="weather-input-box"
//                     value={locationQuery}
//                     onChange={handleLocationQueryChange}
//                   />
//                   <div className="map-result-div">
//                     <div className="map-icon" onClick={openMapModal}>
//                       <FaMapMarkedAlt />
//                     </div>
//                     <button
//                       className="button-8"
//                       role="button"
//                       onClick={handleForecastWeatherButtonClick}
//                     >
//                       Get Result
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8 col-md-8 col-sm-12 col-12 calender-section">
//             {/* {capturedCoordinates && (
//               <p>
//                 Coordinates captured: {capturedCoordinates.latitude},{" "}
//                 {capturedCoordinates.longitude}
//               </p>
//             )} */}
//             <div className="card">
//               <div className="tools">
//                 <div className="circle">
//                   <span className="red box"></span>
//                 </div>
//                 <div className="circle">
//                   <span className="yellow box"></span>
//                 </div>
//                 <div className="circle">
//                   <span className="green box"></span>
//                 </div>
//               </div>
//               <div className="card__content">
//                 {capturedCoordinates && (
//                   <h6>
//                     Coordinates are : {capturedCoordinates.latitude},{" "}
//                     {capturedCoordinates.longitude}
//                   </h6>
//                 )}
//               </div>
//             </div>
//             <div className="weather-data">
//               {isForecastLoading ? (
//                 <div className="loading-icon">
//                   <i className="fa fa-spinner fa-spin"></i> Loading...
//                 </div>
//               ) : (
//                 <Calendar forecastData={forecastWeatherData} />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//       <MapModal
//         show={showMapModal}
//         handleClose={closeMapModal}
//         onCoordinatesCapture={handleCoordinatesCapture}
//       />
//     </div>
//   );
// }

// export default Weather;

import React, { useState, useEffect } from "react";
import NavbarTwo from "../Components/Navbar/NavbarTwo";
import { FaMapMarkedAlt } from "react-icons/fa";
import MapModal from "../Components/MapModal/MapModal";
import "./Weather.css";
import Calendar from "../Components/Calender/Calendar";
import HistoryGraph from "../Components/HistoryGraph/HistoryGraph";
import HistoryMapModal from "../Components/MapModal/HistoryMapModal";
import WeatherRoute from "./WeatherRoute/WeatherRoute";
import axios from "axios";
import RouteDetails from "../Routes/RouteDetails/RouteDetails";

function Weather() {
  const [showMapModal, setShowMapModal] = useState(false);
  const [showHistoryMapModal, setShowHistoryMapModal] = useState(false);
  const [capturedCoordinates, setCapturedCoordinates] = useState(null);
  const [weatherHistoryData, setWeatherHistoryData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [locationQuery, setLocationQuery] = useState("");
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);

  const [sourceQuery, setSourceQuery] = useState("");
  const [destinationQuery, setDestinationQuery] = useState("");
  const [sourceCoordinates, setSourceCoordinates] = useState(null);
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);

  const [routeWeatherDetails, setRouteWeatherDetails] = useState(null);
  const [isWeatherRouteLoading, setIsWeatherRouteLoading] = useState(false);
  const [coordinateHops, setCoordinateHops] = useState(20);

  const openMapModal = () => {
    setShowMapModal(true);
    setShowHistoryMapModal(false);
  };

  const closeMapModal = () => {
    setShowMapModal(false);
  };

  const openHistoryMapModal = () => {
    setShowHistoryMapModal(true);
    setShowMapModal(false);
  };

  const closeHistoryMapModal = () => {
    setShowHistoryMapModal(false);
  };

  const handleCoordinatesCapture = (latitude, longitude) => {
    setCapturedCoordinates({ latitude, longitude });
    fetchForecastWeatherData(latitude, longitude);
    // fetchWeatherHistoryData(latitude, longitude);
  };

  const handleHistoryCoordinatesCapture = (latitude, longitude) => {
    setCapturedCoordinates({ latitude, longitude });
    fetchWeatherHistoryData(latitude, longitude);
  };

  const handleLocationQueryChange = (event) => {
    setLocationQuery(event.target.value);
  };

  const handleWeatherHistoryButtonClick = () => {
    fetchCoordinatesForLocation(locationQuery, fetchWeatherHistoryData);
  };

  const handleForecastWeatherButtonClick = () => {
    fetchCoordinatesForLocation(locationQuery, fetchForecastWeatherData);
  };

  const handleSourceQueryChange = (event) => {
    setSourceQuery(event.target.value);
  };

  const handleDestinationQueryChange = (event) => {
    setDestinationQuery(event.target.value);
  };

  const apiUrl = "https://nominatim.openstreetmap.org/search?format=json&q=";

  const fetchCoordinatesForRoutes = async (query, setter) => {
    try {
      const response = await fetch(apiUrl + encodeURIComponent(query));
      const data = await response.json();
      if (data.length > 0) {
        setter({ lat: data[0].lat, lon: data[0].lon });
      } else {
        setter(null);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
    }
  };

  const handleRouteWeatherButtonClick = async () => {
    await fetchCoordinatesForRoutes(sourceQuery, setSourceCoordinates);
    await fetchCoordinatesForRoutes(
      destinationQuery,
      setDestinationCoordinates
    );
    // fetchRouteDetails();
  };

  useEffect(() => {
    if (sourceCoordinates && destinationCoordinates) {
      setIsWeatherRouteLoading(true);
      fetchRouteDetails();
    }
  }, [sourceCoordinates, destinationCoordinates]);

  // const fetchRouteDetails = () => {
  //   console.log("funciton is working.")
  //   if (sourceCoordinates && destinationCoordinates) {
  //     console.log("Source : ",sourceCoordinates, " and Destination : ", destinationCoordinates)
  //     const sourceCoords = `${sourceCoordinates.lat},${sourceCoordinates.lon}`;
  //     const destCoords = `${destinationCoordinates.lat},${destinationCoordinates.lon}`;
  //     const options = {
  //       method: "GET",
  //       url: `https://api.searoutes.com/route/v2/sea/${sourceCoords};${destCoords}/plan`,
  //       params: {
  //         continuousCoordinates: "true",
  //         allowIceAreas: "false",
  //         avoidHRA: "false",
  //         avoidSeca: "false",
  //       },
  //       headers: {
  //         accept: "application/json",
  //         "x-api-key": "u3G8bJqHIX5GgCZaItCIZ7FBOmSqKire8Ml4SUgJ",
  //       },
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         setRouteWeatherDetails(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }
  // };

  const fetchRouteDetails = () => {
    if (sourceCoordinates && destinationCoordinates) {
      const sourceLat = parseFloat(sourceCoordinates.lat);
      const sourceLon = parseFloat(sourceCoordinates.lon);
      const destLat = parseFloat(destinationCoordinates.lat);
      const destLon = parseFloat(destinationCoordinates.lon);

      // Validate latitude values
      if (
        isNaN(sourceLat) ||
        isNaN(destLat) ||
        sourceLat < -90 ||
        sourceLat > 90 ||
        destLat < -90 ||
        destLat > 90
      ) {
        console.error("Invalid latitude value");
        return;
      }

      // Validate longitude values
      if (
        isNaN(sourceLon) ||
        isNaN(destLon) ||
        sourceLon < -180 ||
        sourceLon > 180 ||
        destLon < -180 ||
        destLon > 180
      ) {
        console.error("Invalid longitude value");
        return;
      }

      const sourceCoords = `${sourceLon},${sourceLat}`;
      const destCoords = `${destLon},${destLat}`;
      console.log("Weather : ", sourceCoords, " and : ", destCoords);
      const options = {
        method: "GET",
        url: `https://api.searoutes.com/route/v2/sea/${sourceCoords};${destCoords}/plan`,
        params: {
          continuousCoordinates: "true",
          allowIceAreas: "false",
          avoidHRA: "false",
          avoidSeca: "false",
        },
        headers: {
          accept: "application/json",
          "x-api-key": "BF4az3YuMM5KTvm80keun5zsrWNtTBxs4RIRINx9",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          setRouteWeatherDetails(response.data);
          setIsWeatherRouteLoading(false);
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  const fetchCoordinatesForLocation = (query, callback) => {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setCapturedCoordinates({ latitude: lat, longitude: lon });
          callback(lat, lon);
        } else {
          console.error("No coordinates found for the location:", query);
          setCapturedCoordinates(null);
          setWeatherHistoryData(null);
          setForecastWeatherData(null);
        }
      })
      .catch((error) => {
        console.error("Error fetching coordinates:", error);
      });
  };

  useEffect(() => {
    if (forecastWeatherData) {
      setIsForecastLoading(false);
    }
  }, [forecastWeatherData]);

  useEffect(() => {
    if (weatherHistoryData) {
      setIsHistoryLoading(false);
    }
  }, [weatherHistoryData]);

  const fetchWeatherHistoryData = (latitude, longitude) => {
    // setIsWeatherRouteLoading(true);
    setIsHistoryLoading(true);
    setForecastWeatherData(null);
    setRouteWeatherDetails(null);

    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);

    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];

    const apiKey = "e8e630783de24be59cc104030242603";
    const apiUrl = `http://api.worldweatheronline.com/premium/v1/past-marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}&date=${formattedStartDate}&enddate=${formattedEndDate}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherHistoryData(data);
      })
      .catch((error) => {
        console.error("Error fetching weather history data:", error);
      })
      .finally(() => {
        setIsHistoryLoading(false);
      });
  };

  const fetchForecastWeatherData = (latitude, longitude) => {
    setIsForecastLoading(true);
    // setIsWeatherRouteLoading(true);
    setRouteWeatherDetails(null);

    const apiKey = "e8e630783de24be59cc104030242603";
    const apiUrl = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setForecastWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching forecast weather data:", error);
      })
      .finally(() => {
        setIsForecastLoading(false);
      });
  };

  return (
    <div>
      <NavbarTwo />
      <div className="weather-section">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 input-section">
            <div className="container route-weather">
              <div className="box route-box">
                <span className="title">Weather for Route</span>
                <div className="input-div">
                  <input
                    placeholder="Enter Source"
                    className="route-weather-input-box"
                    value={sourceQuery}
                    onChange={handleSourceQueryChange}
                  />
                  <input
                    placeholder="Enter Destination"
                    className="route-weather-input-box"
                    value={destinationQuery}
                    onChange={handleDestinationQueryChange}
                  />
                  <div className="map-result-div">
                    <div className="coordinate-hops">
                      <input
                        type="number"
                        className="form-control form-control-sm input-box-hops" // Bootstrap class for small input
                        value={coordinateHops} // Set the initial value here
                        min="0" // Set minimum value
                        max="20" // Set maximum value
                        onChange={(e) => {
                          const value = Math.min(
                            20,
                            Math.max(0, parseInt(e.target.value))
                          ); // Ensure value is between 0 and 20
                          setCoordinateHops(isNaN(value) ? 0 : value); // Update coordinateHops state on change
                        }}
                      />
                    </div>
                    <button
                      className="button-8"
                      role="button"
                      onClick={handleRouteWeatherButtonClick}
                    >
                      Get Result
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container forcast-weather">
              <div className="box">
                <span className="title">Forecast Weather</span>
                <div className="input-div">
                  <input
                    placeholder="Enter Location"
                    className="weather-input-box"
                    value={locationQuery}
                    onChange={handleLocationQueryChange}
                  />
                  <div className="map-result-div">
                    <div className="map-icon" onClick={openMapModal}>
                      <FaMapMarkedAlt />
                    </div>
                    <button
                      className="button-8"
                      role="button"
                      onClick={handleForecastWeatherButtonClick}
                    >
                      Get Result
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="container history-weather">
              <div className="box">
                <span className="title">Weather History</span>
                <div className="input-div">
                  <input
                    placeholder="Enter Location"
                    className="weather-input-box"
                    value={locationQuery}
                    onChange={handleLocationQueryChange}
                  />
                  <div className="map-result-div">
                    <div className="map-icon" onClick={openHistoryMapModal}>
                      <FaMapMarkedAlt />
                    </div>
                    <button
                      className="button-8"
                      role="button"
                      onClick={handleWeatherHistoryButtonClick}
                    >
                      Get Result
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 calender-section">
            <div className="card">
              <div className="tools">
                <div className="circle">
                  <span className="red box"></span>
                </div>
                <div className="circle">
                  <span className="yellow box"></span>
                </div>
                <div className="circle">
                  <span className="green box"></span>
                </div>
              </div>
              <div className="card__content">
                {capturedCoordinates && (
                  <h6>
                    Coordinates are : {capturedCoordinates.latitude},{" "}
                    {capturedCoordinates.longitude}
                  </h6>
                )}
              </div>
            </div>
            <div className="weather-data">
              {/* {isHistoryLoading ? (
                <div className="loading-icon">
                  <i className="fa fa-spinner fa-spin"></i> Loading...
                </div>
              ) : (
                <>
                  {weatherHistoryData ? (
                    <HistoryGraph weatherHistoryData={weatherHistoryData} />
                  ) : null}
                </>
              )}
              {isForecastLoading ? (
                <div className="loading-icon">
                  <i className="fa fa-spinner fa-spin"></i> Loading...
                </div>
              ) : (
                <>
                  {forecastWeatherData ? (
                    <Calendar forecastData={forecastWeatherData} />
                  ) : null}
                </>
              )} */}

              {isHistoryLoading || isForecastLoading ? (
                <div className="loading-icon">
                  <i className="fa fa-spinner fa-spin"></i> Loading...
                </div>
              ) : (
                <>
                  {weatherHistoryData && !forecastWeatherData ? (
                    <HistoryGraph weatherHistoryData={weatherHistoryData} />
                  ) : null}
                  {forecastWeatherData && !isHistoryLoading ? (
                    <Calendar forecastData={forecastWeatherData} />
                  ) : null}
                </>
              )}
              {console.log(isWeatherRouteLoading)}
              {isWeatherRouteLoading ? (
                <div className="loading-icon">
                  <i className="fa fa-spinner fa-spin"></i> Loading...
                </div>
              ) : (
                <>
                  {routeWeatherDetails ? (
                    <WeatherRoute
                      routeWeatherDetails={routeWeatherDetails}
                      coordinateHops={coordinateHops}
                    />
                  ) : null}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* <MapModal
        show={showMapModal}
        handleClose={closeMapModal}
        onCoordinatesCapture={handleCoordinatesCapture}
      />

      <HistoryMapModal
        show={showHistoryMapModal}
        handleClose={closeHistoryMapModal}
        onCoordinatesCapture={handleHistoryCoordinatesCapture}
      /> */}
      {showMapModal && (
        <MapModal
          show={showMapModal}
          handleClose={closeMapModal}
          onCoordinatesCapture={handleCoordinatesCapture}
        />
      )}

      {showHistoryMapModal && (
        <HistoryMapModal
          show={showHistoryMapModal}
          handleClose={closeHistoryMapModal}
          onCoordinatesCapture={handleHistoryCoordinatesCapture}
        />
      )}
    </div>
  );
}

export default Weather;
