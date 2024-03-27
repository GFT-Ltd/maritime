// import React, { useEffect } from "react";
// import "./WeatherRouteModal.css";

// function WeatherRouteModal({ isOpen, onClose, data }) {
//   useEffect(() => {
//     const handleEscapeKeyPress = (event) => {
//       if (event.keyCode === 27) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener("keydown", handleEscapeKeyPress);
//     }

//     return () => {
//       document.removeEventListener("keydown", handleEscapeKeyPress);
//     };
//   }, [isOpen, onClose]);

//   const handleClose = () => {
//     onClose();
//   };

//   return <div>hello</div>;
// }

// export default WeatherRouteModal;

import React, { useState, useEffect } from "react";
import "./WeatherRouteModal.css";

function WeatherRouteModal({ isOpen, onClose, forecastData }) {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedWeather, setSelectedWeather] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);
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

  const handleClose = () => {
    onClose();
  };

  const handleHourChange = (hour) => {
    setSelectedHour(hour);
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
    const selectedWeather = forecastData.data.weather.find(
      (weather) => weather.date === date
    );
    setSelectedWeather(selectedWeather);
    setSelectedHour(null);
  };
  const weatherArray = forecastData?.data?.weather;
  console.log("data", selectedWeather);

  return (
    <div className="route-map-modal">
      <div
        className={`modal ${isOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{ display: isOpen ? "block" : "none" }}
      >
        <div className="modal-dialog modal-xl modal-dialog-scrollable modal-fullscreen-md-down">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title title-text">
                Weather for next 7 days
              </h5>
              <button
                type="button"
                className="btn-close"
                onClick={handleClose}
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body route-weather-modal">
              <div className="date-buttons">
                <strong className="select-date-text">Select Date - </strong>

                {weatherArray.map((weather) => (
                  <button
                    key={weather.date}
                    className={`btn ${
                      selectedDate === weather.date
                        ? "btn-primary"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => handleDateClick(weather.date)}
                  >
                    {weather.date}
                  </button>
                ))}
              </div>
              {selectedWeather && (
                <div className="weatherRoute-modal-content">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                      <h2>{selectedWeather.date}</h2>
                      <div className="left-side">
                        <p>
                          <strong>Max Temperature:</strong>{" "}
                          {selectedWeather.maxtempC}°C (
                          {selectedWeather.maxtempF}
                          °F)
                        </p>
                        <p>
                          <strong>Min Temperature:</strong>{" "}
                          {selectedWeather.mintempC}°C (
                          {selectedWeather.mintempF}
                          °F)
                        </p>
                        <p>
                          <strong>UV Index:</strong> {selectedWeather.uvIndex}
                        </p>

                        <div className="dropdown-select">
                          <select
                            className="select-button"
                            onChange={(e) =>
                              handleHourChange(JSON.parse(e.target.value))
                            }
                          >
                            <option>Select Hour</option>
                            {selectedWeather.hourly.map((hour, index) => (
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
                              <p>
                                Wind Speed: {selectedHour.windspeedKmph} km/h
                              </p>
                              <p>Precipitation: {selectedHour.precipMM} mm</p>
                              <p>Humidity: {selectedHour.humidity}%</p>
                              <p>Visibility: {selectedHour.visibility} km</p>
                              <p>Pressure: {selectedHour.pressure} mb</p>
                              <p>Wind Gust: {selectedHour.WindGustKmph} km/h</p>
                              <p>
                                Water Temperature: {selectedHour.waterTemp_C}°C
                                ({selectedHour.waterTemp_F}°F)
                              </p>
                              <p>
                                Wind Direction: {selectedHour.winddirDegree}°
                              </p>
                            </div>
                            <div className="right-column">
                              <p className="weather-desc">
                                Weather Description:{" "}
                                {selectedHour.weatherDesc[0].value}
                              </p>
                              <p>
                                Heat Index: {selectedHour.HeatIndexC}°C (
                                {selectedHour.HeatIndexF}°F)
                              </p>
                              <p>Cloud Cover: {selectedHour.cloudcover}%</p>
                              <p>
                                Swell Height: {selectedHour.swellHeight_m} m
                              </p>
                              <p>Swell Direction: {selectedHour.swellDir}°</p>
                              <p>
                                Swell Period: {selectedHour.swellPeriod_secs}{" "}
                                secs
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherRouteModal;
