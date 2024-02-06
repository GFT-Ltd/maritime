import React, { useState } from "react";
import portsData from "../../Assets/ports.json";
import "./Routes.css";
import Bot from "../Services/Bot/Bot";
import { FaLocationDot } from "react-icons/fa6";

function Routes() {
  const [selectedSourcePort, setSelectedSourcePort] = useState(null);
  const [selectedDestinationPort, setSelectedDestinationPort] = useState(null);
  const [searchTermSource, setSearchTermSource] = useState("");
  const [searchTermDestination, setSearchTermDestination] = useState("");

  const handleSourcePortChange = (event) => {
    setSelectedSourcePort(event.target.value);
    expandCardBody("source");
  };

  const handleSearchTermSourceChange = (event) => {
    setSearchTermSource(event.target.value);
  };

  const handleDestinationPortChange = (event) => {
    setSelectedDestinationPort(event.target.value);
    expandCardBody("destination");
  };

  const handleSearchTermDestinationChange = (event) => {
    setSearchTermDestination(event.target.value);
  };

  const handleEnterPress = (event, setPort, searchTerm, type) => {
    if (event.key === "Enter") {
      const filteredPorts = Object.keys(portsData).filter((portCode) =>
        portsData[portCode].name
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );

      if (filteredPorts.length > 0) {
        setPort(filteredPorts[0]);
        expandCardBody(type);
      }
    }
  };

  const expandCardBody = (type) => {
    const cardBody = document.querySelector(`.${type}-search-box .card-body`);
    if (cardBody) {
      cardBody.classList.add("expanded");
    }
  };

  return (
    <div className="routes-page">
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-12 source-search-box">
              <div className="card source-destination-cards">
                <div className="card-body">
                  <span className="location-icon">
                    <FaLocationDot />
                  </span>

                  <input
                    type="text"
                    placeholder="Enter Source"
                    value={searchTermSource}
                    onChange={handleSearchTermSourceChange}
                    onKeyPress={(event) =>
                      handleEnterPress(
                        event,
                        setSelectedSourcePort,
                        searchTermSource,
                        "source"
                      )
                    }
                    className="search-input-box"
                  />
                  <select
                    id="source"
                    value={selectedSourcePort || ""}
                    onChange={handleSourcePortChange}
                    className="dropdown"
                  >
                    <option value="" disabled>
                      Select source port
                    </option>
                    {Object.keys(portsData).map((portCode) => (
                      <option key={portCode} value={portCode}>
                        {portsData[portCode].name}
                      </option>
                    ))}
                  </select>
                  <h5 className="card-title">
                    Port Name :{" "}
                    {selectedSourcePort
                      ? portsData[selectedSourcePort].name
                      : ""}
                  </h5>
                  <h6 className="card-title mb-2">
                    Country :{" "}
                    {selectedSourcePort
                      ? portsData[selectedSourcePort].country
                      : ""}
                  </h6>
                  <h6 className="card-title mb-2 ">
                    Timezone :{" "}
                    {selectedSourcePort
                      ? portsData[selectedSourcePort].timezone
                      : ""}
                  </h6>
                  {/* <h6 className="card-title mb-2 ">Coordinates :-</h6> */}
                  <p className="card-subtitle mb-1 text-body-secondary">
                    Latitude :{" "}
                    {selectedSourcePort
                      ? portsData[selectedSourcePort].coordinates[1]
                      : ""}
                  </p>
                  <p className="card-subtitle text-body-secondary lat-log-p">
                    Longitude :{" "}
                    {selectedSourcePort
                      ? portsData[selectedSourcePort].coordinates[0]
                      : ""}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 destination-search-box">
              <div className="card source-destination-cards">
                <div className="card-body">
                  <span className="location-icon2">
                    <FaLocationDot />
                  </span>
                  <input
                    type="text"
                    placeholder="Enter Destination"
                    value={searchTermDestination}
                    onChange={handleSearchTermDestinationChange}
                    onKeyPress={(event) =>
                      handleEnterPress(
                        event,
                        setSelectedDestinationPort,
                        searchTermDestination,
                        "destination"
                      )
                    }
                    className="search-input-box"
                  />
                  <select
                    id="destination"
                    value={selectedDestinationPort || ""}
                    onChange={handleDestinationPortChange}
                    className="dropdown"
                  >
                    <option value="" disabled>
                      Select destination port
                    </option>
                    {Object.keys(portsData).map((portCode) => (
                      <option key={portCode} value={portCode}>
                        {portsData[portCode].name}
                      </option>
                    ))}
                  </select>

                  <h5 className="card-title">
                    Port Name :{" "}
                    {selectedDestinationPort
                      ? portsData[selectedDestinationPort].name
                      : ""}
                  </h5>
                  <h6 className="card-title mb-2">
                    Country :{" "}
                    {selectedDestinationPort
                      ? portsData[selectedDestinationPort].country
                      : ""}
                  </h6>
                  <h6 className="card-title mb-2 ">
                    Timezone :{" "}
                    {selectedDestinationPort
                      ? portsData[selectedDestinationPort].timezone
                      : ""}
                  </h6>
                  {/* <h6 className="card-title mb-2 ">Coordinates :-</h6> */}
                  <p className="card-subtitle mb-1 text-body-secondary">
                    Latitude :{" "}
                    {selectedDestinationPort
                      ? portsData[selectedDestinationPort].coordinates[1]
                      : ""}
                  </p>
                  <p className="card-subtitle text-body-secondary lat-log-p">
                    Longitude :{" "}
                    {selectedDestinationPort
                      ? portsData[selectedDestinationPort].coordinates[0]
                      : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <p className="result">Get Results</p>
          <div className="get-results"></div>
          <div className="bot-routes-section">
            <Bot />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Routes;
