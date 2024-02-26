// import React, { useState } from "react";
// import WeatherLineGraph from "./WeatherLineGraph";

// const properties = [
//   "Max Temp",
//   "Min Temp",
//   "Sunrise",
//   "Sunset",
//   "Wind Speed",
//   "Precipitation",
//   "Humidity",
//   "Visibility",
//   "Pressure",
//   "Swell Height",
//   "Water Temp",
// ];

// function HistoryGraph({ weatherHistoryData }) {
//   const [selectedProperty, setSelectedProperty] = useState(properties[0]);

//   const handlePropertyChange = (event) => {
//     setSelectedProperty(event.target.value);
//   };

//   return (
//     <div className="history-graph">
//       <h3>Weather History Graph</h3>
//       <div>
//         <select value={selectedProperty} onChange={handlePropertyChange}>
//           {properties.map((property) => (
//             <option key={property} value={property}>
//               {property}
//             </option>
//           ))}
//         </select>
//       </div>
//       {weatherHistoryData ? (
//         <WeatherLineGraph
//           weatherHistoryData={weatherHistoryData}
//           selectedProperty={selectedProperty}
//         />
//       ) : (
//         <p>No weather data available</p>
//       )}
//     </div>
//   );
// }

// export default HistoryGraph;

// import React, { useState, useEffect } from "react";
// import Chart from "chart.js/auto";
// import "./HistoryGraph.css";

// const properties = [
//   "Max Temp",
//   "Min Temp",
//   "Wind Speed",
//   "Precipitation",
//   "Humidity",
//   "Visibility",
//   "Pressure",
//   "Swell Height",
//   "Water Temp",
// ];

// function HistoryGraph({ weatherHistoryData }) {
//   const [selectedProperty, setSelectedProperty] = useState(properties[0]);
//   const [chartInstance, setChartInstance] = useState(null);

//   const handlePropertyChange = (event) => {
//     setSelectedProperty(event.target.value);
//   };

//   useEffect(() => {
//     if (!chartInstance) return;

//     chartInstance.destroy(); // Destroy the existing chart instance
//   }, [selectedProperty]);

//   useEffect(() => {
//     if (!weatherHistoryData) return;

//     const ctx = document.getElementById("weatherChart");
//     const past30DaysData = weatherHistoryData.data.weather.slice(-30);
//     const labels = past30DaysData.map((day) => day.date);
//     let propertyData;
//     switch (selectedProperty) {
//       case "Max Temp":
//         propertyData = past30DaysData.map((day) => parseInt(day.maxtempC));
//         break;
//       case "Min Temp":
//         propertyData = past30DaysData.map((day) => parseInt(day.mintempC));
//         break;
//       case "Wind Speed":
//         propertyData = past30DaysData.map((day) => parseInt(day.hourly[5].windspeedKmph));
//         break;
//       case "Precipitation":
//         propertyData = past30DaysData.map((day) => parseFloat(day.hourly[5].precipMM));
//         break;
//       case "Humidity":
//         propertyData = past30DaysData.map((day) => parseInt(day.hourly[5].humidity));
//         break;
//       case "Visibility":
//         propertyData = past30DaysData.map((day) => parseInt(day.hourly[5].visibility));
//         break;
//       case "Pressure":
//         propertyData = past30DaysData.map((day) => parseInt(day.hourly[5].pressure));
//         break;
//       case "Swell Height":
//         propertyData = past30DaysData.map((day) => parseFloat(day.hourly[5].swellHeight_m));
//         break;
//       case "Water Temp":
//         propertyData = past30DaysData.map((day) => parseInt(day.hourly[5].waterTemp_C));
//         break;
//       default:
//         propertyData = [];
//     }

//     const newChartInstance = new Chart(ctx, {
//       type: "line",
//       data: {
//         labels: labels,
//         datasets: [
//           {
//             label: selectedProperty,
//             data: propertyData,
//             borderColor: "rgb(75, 192, 192)",
//             tension: 0.1,
//           },
//         ],
//       },
//       options: {
//         scales: {
//           y: {
//             beginAtZero: false,
//           },
//         },
//       },
//     });

//     setChartInstance(newChartInstance);

//     return () => newChartInstance.destroy(); // Cleanup function
//   }, [selectedProperty, weatherHistoryData]);

//   return (
//     // <div className="history-graph">
//     //   <h3>Weather History Graph</h3>
//     //   <div>
//     //     <select value={selectedProperty} onChange={handlePropertyChange}>
//     //       {properties.map((property) => (
//     //         <option key={property} value={property}>
//     //           {property}
//     //         </option>
//     //       ))}
//     //     </select>
//     //   </div>
//     //   <canvas id="weatherChart" width={400} height={200}></canvas>
//     // </div>

//     <div className="history-graph-container">
//       <h3>Weather History Graph</h3>
//       <div className="dropdown-container">
//         <select className="property-dropdown" value={selectedProperty} onChange={handlePropertyChange}>
//           {properties.map((property) => (
//             <option key={property} value={property}>
//               {property}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="chart-container">
//         <canvas id="weatherChart" width={400} height={200}></canvas>
//       </div>
//     </div>
//   );
// }

// export default HistoryGraph;
import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import "./HistoryGraph.css";

const properties = [
  "Max Temp",
  "Min Temp",
  "Wind Speed",
  "Precipitation",
  "Humidity",
  "Visibility",
  "Pressure",
  "Swell Height",
  "Water Temp",
];

function HistoryGraph({ weatherHistoryData }) {
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);
  const [chartInstance, setChartInstance] = useState(null);

  const handlePropertyChange = (event) => {
    setSelectedProperty(event.target.value);
  };

  useEffect(() => {
    if (!chartInstance) return;

    chartInstance.destroy(); // Destroy the existing chart instance
  }, [selectedProperty]);

  useEffect(() => {
    if (!weatherHistoryData) return;

    const ctx = document.getElementById("weatherChart");
    const past30DaysData = weatherHistoryData.data.weather.slice(-30);
    const labels = past30DaysData.map((day) => day.date);
    let propertyData;
    let yAxisLabel;
    switch (selectedProperty) {
      case "Max Temp":
        propertyData = past30DaysData.map((day) => parseInt(day.maxtempC));
        yAxisLabel = "Temperature (°C)";
        break;
      case "Min Temp":
        propertyData = past30DaysData.map((day) => parseInt(day.mintempC));
        yAxisLabel = "Temperature (°C)";
        break;
      case "Wind Speed":
        propertyData = past30DaysData.map((day) =>
          parseInt(day.hourly[5].windspeedKmph)
        );
        yAxisLabel = "Wind Speed (km/h)";
        break;
      case "Precipitation":
        propertyData = past30DaysData.map((day) =>
          parseFloat(day.hourly[5].precipMM)
        );
        yAxisLabel = "Precipitation (mm)";
        break;
      case "Humidity":
        propertyData = past30DaysData.map((day) =>
          parseInt(day.hourly[5].humidity)
        );
        yAxisLabel = "Humidity (%)";
        break;
      case "Visibility":
        propertyData = past30DaysData.map((day) =>
          parseInt(day.hourly[5].visibility)
        );
        yAxisLabel = "Visibility (km)";
        break;
      case "Pressure":
        propertyData = past30DaysData.map((day) =>
          parseInt(day.hourly[5].pressure)
        );
        yAxisLabel = "Pressure (mb)";
        break;
      case "Swell Height":
        propertyData = past30DaysData.map((day) =>
          parseFloat(day.hourly[5].swellHeight_m)
        );
        yAxisLabel = "Swell Height (m)";
        break;
      case "Water Temp":
        propertyData = past30DaysData.map((day) =>
          parseInt(day.hourly[5].waterTemp_C)
        );
        yAxisLabel = "Water Temperature (°C)";
        break;
      default:
        propertyData = [];
    }

    const newChartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "",
            data: propertyData,
            borderColor: "#00ddfb", // Black color for the line
            borderWidth: 1, // Make the line slightly thinner
            tension: 0.1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: yAxisLabel,
              font: {
                size: 14,
                weight: "bold",
                color: "black",
              },
            },
            beginAtZero: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    setChartInstance(newChartInstance);

    return () => newChartInstance.destroy(); // Cleanup function
  }, [selectedProperty, weatherHistoryData]);

  return (
    <div className="history-graph-container">
      <h3 className="history-title">Weather History Graph</h3>
      <div className="dropdown-container">
        <select
          className="property-dropdown"
          value={selectedProperty}
          onChange={handlePropertyChange}
        >
          {properties.map((property) => (
            <option className="history-options" key={property} value={property}>
              {property}
            </option>
          ))}
        </select>
      </div>
      <div className="chart-container">
        <canvas id="weatherChart" width={500} height={250}></canvas>
      </div>
    </div>
  );
}

export default HistoryGraph;
