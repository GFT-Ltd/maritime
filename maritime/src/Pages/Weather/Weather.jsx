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

import React, { useState, useEffect } from "react";
import NavbarTwo from "../Components/Navbar/NavbarTwo";
import { FaMapMarkedAlt } from "react-icons/fa";
import MapModal from "../Components/MapModal/MapModal";
import "./Weather.css";
import Calendar from "../Components/Calender/Calendar";

function Weather() {
  const [showMapModal, setShowMapModal] = useState(false);
  const [capturedCoordinates, setCapturedCoordinates] = useState(null);
  const [weatherHistoryData, setWeatherHistoryData] = useState(null);
  const [forecastWeatherData, setForecastWeatherData] = useState(null);
  const [locationQuery, setLocationQuery] = useState("");
  const [isForecastLoading, setIsForecastLoading] = useState(false);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);

  const openMapModal = () => {
    setShowMapModal(true);
  };

  const closeMapModal = () => {
    setShowMapModal(false);
  };

  const handleCoordinatesCapture = (latitude, longitude) => {
    setCapturedCoordinates({ latitude, longitude });
    fetchWeatherHistoryData(latitude, longitude);
    fetchForecastWeatherData(latitude, longitude);
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

  const fetchCoordinatesForLocation = (query, callback) => {
    // Construct the API URL for geocoding service (using OpenStreetMap Nominatim API)
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${query}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length > 0) {
          // Extract latitude and longitude from the response
          const { lat, lon } = data[0];
          setCapturedCoordinates({ latitude: lat, longitude: lon });
          // Call the callback function to fetch weather data
          callback(lat, lon);
        } else {
          console.error("No coordinates found for the location:", query);
          // Clear previously captured coordinates and weather data
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
      setIsForecastLoading(false);
    }
  }, [weatherHistoryData]);

  // const fetchWeatherHistoryData = (latitude, longitude) => {
  //   setIsHistoryLoading(true);
  //   // Calculate the date 60 days before the current date
  //   const currentDate = new Date();
  //   const pastDate = new Date(currentDate);
  //   pastDate.setDate(currentDate.getDate() - 60);

  //   // Format the past date as YYYY-MM-DD
  //   const formattedDate = pastDate.toISOString().split("T")[0];

  //   // Fetch weather history data using the captured coordinates and past date
  //   const apiKey = "526e6cf6febd4002943183548242202";
  //   const apiUrl = `http://api.worldweatheronline.com/premium/v1/past-marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}&date=${formattedDate}`;

  //   fetch(apiUrl)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setWeatherHistoryData(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching weather history data:", error);
  //     });
  // };

  const fetchWeatherHistoryData = (latitude, longitude) => {
    setIsHistoryLoading(true);
    
    // Calculate the start date (1 month ago) and end date (today)
    const endDate = new Date();
    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1); // Set start date to 1 month ago
  
    // Format the dates as YYYY-MM-DD
    const formattedStartDate = startDate.toISOString().split("T")[0];
    const formattedEndDate = endDate.toISOString().split("T")[0];
  
    // Fetch weather history data using the captured coordinates, start date, and end date
    const apiKey = "526e6cf6febd4002943183548242202";
    const apiUrl = `http://api.worldweatheronline.com/premium/v1/past-marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}&date=${formattedStartDate}&enddate=${formattedEndDate}`;
  
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherHistoryData(data);
        setIsHistoryLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching weather history data:", error);
        setIsHistoryLoading(false);
      });
  };
  

  const fetchForecastWeatherData = (latitude, longitude) => {
    setIsForecastLoading(true);
    // Fetch forecast weather data using the captured coordinates
    const apiKey = "526e6cf6febd4002943183548242202";
    const apiUrl = `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${apiKey}&format=json&q=${latitude},${longitude}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setForecastWeatherData(data);
      })
      .catch((error) => {
        console.error("Error fetching forecast weather data:", error);
      });
  };

  return (
    <div>
      <NavbarTwo />
      <div className="weather-section">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 col-12 input-section">
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
                    <div className="map-icon" onClick={openMapModal}>
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
          </div>
          <div className="col-lg-8 col-md-8 col-sm-12 col-12 calender-section">
            {/* {capturedCoordinates && (
              <p>
                Coordinates captured: {capturedCoordinates.latitude},{" "}
                {capturedCoordinates.longitude}
              </p>
            )} */}
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
              {/* {weatherHistoryData && (
                <div className="weather-card">
                  <h3>Weather History</h3>
                  <p>{JSON.stringify(weatherHistoryData)}</p>
                </div>
              )}
              {forecastWeatherData && (
                <div className="weather-card">
                  <h3>Forecast Weather</h3>
                  <p>{JSON.stringify(forecastWeatherData)}</p>
                </div>
              )} */}
              {isForecastLoading ? ( // Render loading icon if isLoading is true
                <div className="loading-icon">
                  <i className="fa fa-spinner fa-spin"></i> Loading...
                </div>
              ) : (
                <Calendar forecastData={forecastWeatherData} />
              )}
            </div>
          </div>
        </div>
      </div>
      <MapModal
        show={showMapModal}
        handleClose={closeMapModal}
        onCoordinatesCapture={handleCoordinatesCapture}
      />
    </div>
  );
}

export default Weather;
