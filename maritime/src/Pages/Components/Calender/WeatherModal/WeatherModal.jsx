// import React from "react";
// import "./WeatherModal.css";

// const WeatherModal = ({ isOpen, onClose, data }) => {
//   if (!isOpen || !data) {
//     return null;
//   }

//   console.log("Data in WeatherModal:", data); // Add this line to check if data is received

//   const handleClose = () => {
//     onClose();
//   };

//   return (
//     <div className="weather-modal">
//       <div className="modal-content">
//         <span className="close" onClick={handleClose}>
//           close
//         </span>
//         <div>
//           <p>Date: {data.date}</p>
//           <p>
//             Max Temperature: {data.maxtempC}°C ({data.maxtempF}°F)
//           </p>
//           <p>
//             Min Temperature: {data.mintempC}°C ({data.mintempF}°F)
//           </p>
//           <p>UV Index: {data.uvIndex}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WeatherModal;

import React, { useEffect, useState } from "react";
import "./WeatherModal.css";

const WeatherModal = ({ isOpen, onClose, data }) => {
  const [selectedHour, setSelectedHour] = useState(null);

  // Close the modal when the Escape key is pressed
  useEffect(() => {
    const handleEscapeKeyPress = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKeyPress);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !data) {
    return null;
  }

  const handleClose = () => {
    onClose();
  };

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  return (
    <div className="weather-modal-overlay" onClick={handleClose}>
      <div className="weather-modal" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>
          &times;
        </span>
        <div className="modal-content">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <h2>{data.date}</h2>
              <div className="left-side">
                <p>
                  <strong>Max Temperature:</strong> {data.maxtempC}°C (
                  {data.maxtempF}°F)
                </p>
                <p>
                  <strong>Min Temperature:</strong> {data.mintempC}°C (
                  {data.mintempF}°F)
                </p>
                <p>
                  <strong>UV Index:</strong> {data.uvIndex}
                </p>
                {/* Dropdown for hourly data */}
                <div className="dropdown-select">
                  <select
                    onChange={(e) =>
                      handleHourChange(JSON.parse(e.target.value))
                    }
                  >
                    <option>Select Hour</option>
                    {data.hourly.map((hour, index) => (
                      <option
                        className="dropdown-options"
                        key={index}
                        value={JSON.stringify(hour)}
                      >
                        Hour {index * 3}:00
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-6 col-12">
              <div className="right-side">
                <h3>Selected Hour Details</h3>
                {selectedHour && (
                  <div className="hour-details">
                    <div className="left-column">
                      <p>
                        Temperature: {selectedHour.tempC}°C (
                        {selectedHour.tempF}
                        °F)
                      </p>
                      <p>Wind Speed: {selectedHour.windspeedKmph} km/h</p>
                      <p>Precipitation: {selectedHour.precipMM} mm</p>
                      <p>Humidity: {selectedHour.humidity}%</p>
                      <p>Visibility: {selectedHour.visibility} km</p>
                      <p>Pressure: {selectedHour.pressure} mb</p>
                      <p>Wind Gust: {selectedHour.WindGustKmph} km/h</p>
                      <p>
                        Water Temperature: {selectedHour.waterTemp_C}°C (
                        {selectedHour.waterTemp_F}°F)
                      </p>
                      <p>Wind Direction: {selectedHour.winddirDegree}°</p>
                    </div>
                    <div className="right-column">
                      <p>
                        Weather Description: {selectedHour.weatherDesc[0].value}
                      </p>
                      <p>
                        Heat Index: {selectedHour.HeatIndexC}°C (
                        {selectedHour.HeatIndexF}°F)
                      </p>
                      <p>Cloud Cover: {selectedHour.cloudcover}%</p>
                      <p>Swell Height: {selectedHour.swellHeight_m} m</p>
                      <p>Swell Direction: {selectedHour.swellDir}°</p>
                      <p>Swell Period: {selectedHour.swellPeriod_secs} secs</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherModal;
