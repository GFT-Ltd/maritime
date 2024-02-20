// import React, { useState, useEffect } from "react";

// import portsData from "../../Assets/ports.json";
// import "./Routes.css";
// import Bot from "../Services/Bot/Bot";
// import { FaLocationDot } from "react-icons/fa6";
// import RouteDetails from "./RouteDetails";
// import axios from 'axios';

// function Routes() {
//   const [selectedSourcePort, setSelectedSourcePort] = useState(null);
//   const [selectedDestinationPort, setSelectedDestinationPort] = useState(null);
//   const [searchTermSource, setSearchTermSource] = useState("");
//   const [searchTermDestination, setSearchTermDestination] = useState("");
//   const [routeDetails, setRouteDetails] = useState(null);

//   const handleSourcePortChange = (event) => {
//     setSelectedSourcePort(event.target.value);
//     expandCardBody("source");
//   };

//   const handleSearchTermSourceChange = (event) => {
//     setSearchTermSource(event.target.value);
//   };

//   const handleDestinationPortChange = (event) => {
//     setSelectedDestinationPort(event.target.value);
//     expandCardBody("destination");
//   };

//   const handleSearchTermDestinationChange = (event) => {
//     setSearchTermDestination(event.target.value);
//   };

//   const handleEnterPress = (event, setPort, searchTerm, type) => {
//     if (event.key === "Enter") {
//       const filteredPorts = Object.keys(portsData).filter((portCode) =>
//         portsData[portCode].name
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase())
//       );

//       if (filteredPorts.length > 0) {
//         setPort(filteredPorts[0]);
//         expandCardBody(type);
//       }
//     }
//   };

//   const expandCardBody = (type) => {
//     const cardBody = document.querySelector(`.${type}-search-box .card-body`);
//     if (cardBody) {
//       cardBody.classList.add("expanded");
//     }
//   };

//   const fetchRouteDetails = () => {
//     if (selectedSourcePort && selectedDestinationPort) {
//       const sourceCoordinates = `${portsData[selectedSourcePort].coordinates[0]},${portsData[selectedSourcePort].coordinates[1]}`;
//       const destinationCoordinates = `${portsData[selectedDestinationPort].coordinates[0]},${portsData[selectedDestinationPort].coordinates[1]}`;

//       const options = {
//         method: 'GET',
//         url: `https://api.searoutes.com/route/v2/sea/${sourceCoordinates};${destinationCoordinates}/plan`,
//         params: {
//           continuousCoordinates: 'true',
//           allowIceAreas: 'false',
//           avoidHRA: 'false',
//           avoidSeca: 'false'
//         },
//         headers: {
//           accept: 'application/json',
//           'x-api-key': 'SbiGd7GJdR4eYDw35YwQz2i7W0UiRF0b4IJAg7Bh'
//         }
//       };

//       axios
//         .request(options)
//         .then(function (response) {
//           // Handle the response data here
//           console.log(response.data);
//           setRouteDetails(response.data); // Update routeDetails state
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//     }
//   };

//   useEffect(() => {
//     fetchRouteDetails();
//   }, [selectedSourcePort, selectedDestinationPort]);

//   return (
//     <div className="routes-page">
//       <div className="row">
//         <div className="col-6">
//           <div className="row">
//             <div className="col-12 source-search-box">
//               <div className="card source-destination-cards">
//                 <div className="card-body">
//                   <span className="location-icon">
//                     <FaLocationDot />
//                   </span>

//                   <input
//                     type="text"
//                     placeholder="Enter Source"
//                     value={searchTermSource}
//                     onChange={handleSearchTermSourceChange}
//                     onKeyPress={(event) =>
//                       handleEnterPress(
//                         event,
//                         setSelectedSourcePort,
//                         searchTermSource,
//                         "source"
//                       )
//                     }
//                     className="search-input-box"
//                   />
//                   <select
//                     id="source"
//                     value={selectedSourcePort || ""}
//                     onChange={handleSourcePortChange}
//                     className="dropdown"
//                   >
//                     <option value="" disabled>
//                       Select source port
//                     </option>
//                     {Object.keys(portsData).map((portCode) => (
//                       <option key={portCode} value={portCode}>
//                         {portsData[portCode].name}
//                       </option>
//                     ))}
//                   </select>
//                   <h5 className="card-title">
//                     Port Name :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].name
//                       : ""}
//                   </h5>
//                   <h6 className="card-title mb-2">
//                     Country :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].country
//                       : ""}
//                   </h6>
//                   <h6 className="card-title mb-2 ">
//                     Timezone :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].timezone
//                       : ""}
//                   </h6>
//                   {/* <h6 className="card-title mb-2 ">Coordinates :-</h6> */}
//                   <p className="card-subtitle mb-1 text-body-secondary">
//                     Latitude :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].coordinates[1]
//                       : ""}
//                   </p>
//                   <p className="card-subtitle text-body-secondary lat-log-p">
//                     Longitude :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].coordinates[0]
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 destination-search-box">
//               <div className="card source-destination-cards">
//                 <div className="card-body">
//                   <span className="location-icon2">
//                     <FaLocationDot />
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="Enter Destination"
//                     value={searchTermDestination}
//                     onChange={handleSearchTermDestinationChange}
//                     onKeyPress={(event) =>
//                       handleEnterPress(
//                         event,
//                         setSelectedDestinationPort,
//                         searchTermDestination,
//                         "destination"
//                       )
//                     }
//                     className="search-input-box"
//                   />
//                   <select
//                     id="destination"
//                     value={selectedDestinationPort || ""}
//                     onChange={handleDestinationPortChange}
//                     className="dropdown"
//                   >
//                     <option value="" disabled>
//                       Select destination port
//                     </option>
//                     {Object.keys(portsData).map((portCode) => (
//                       <option key={portCode} value={portCode}>
//                         {portsData[portCode].name}
//                       </option>
//                     ))}
//                   </select>

//                   <h5 className="card-title">
//                     Port Name :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].name
//                       : ""}
//                   </h5>
//                   <h6 className="card-title mb-2">
//                     Country :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].country
//                       : ""}
//                   </h6>
//                   <h6 className="card-title mb-2 ">
//                     Timezone :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].timezone
//                       : ""}
//                   </h6>
//                   {/* <h6 className="card-title mb-2 ">Coordinates :-</h6> */}
//                   <p className="card-subtitle mb-1 text-body-secondary">
//                     Latitude :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].coordinates[1]
//                       : ""}
//                   </p>
//                   <p className="card-subtitle text-body-secondary lat-log-p">
//                     Longitude :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].coordinates[0]
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-6">
//           <p className="result" onClick={fetchRouteDetails}>Get Results</p>
//           <div className="get-results"></div>
//           <div className="bot-routes-section">
//             <Bot />
//           </div>
//         </div>
//         {/* <div className="col-12">
//         <iframe id="sea-distance-iframe" style={{marginTop: "34rem", height:"100%"}} frameborder="0" src="http://ports.com/sea-route/" width="100%" />
//         </div> */}

//       </div>
//       <div style={{marginTop:"40rem", marginLeft:"4rem"}}>
//       <RouteDetails routeDetails={routeDetails}/>
//       </div>
//     </div>
//   );
// }

// export default Routes;

// import React, { useState, useEffect } from "react";
// import portsData from "../../Assets/ports.json";
// import "./Routes.css";
// import Bot from "../Services/Bot/Bot";
// import { FaLocationDot } from "react-icons/fa6";
// import RouteDetails from "./RouteDetails";
// import axios from "axios";

// function Routes() {
//   const [selectedSourcePort, setSelectedSourcePort] = useState(null);
//   const [selectedDestinationPort, setSelectedDestinationPort] = useState(null);
//   const [searchTermSource, setSearchTermSource] = useState("");
//   const [searchTermDestination, setSearchTermDestination] = useState("");
//   const [routeDetails, setRouteDetails] = useState(null);

//   const handleSourcePortChange = (event) => {
//     setSelectedSourcePort(event.target.value);
//     expandCardBody("source");
//   };

//   const handleSearchTermSourceChange = (event) => {
//     setSearchTermSource(event.target.value);
//   };

//   const handleDestinationPortChange = (event) => {
//     setSelectedDestinationPort(event.target.value);
//     expandCardBody("destination");
//   };

//   const handleSearchTermDestinationChange = (event) => {
//     setSearchTermDestination(event.target.value);
//   };

//   const handleEnterPress = (event, setPort, searchTerm, type) => {
//     if (event.key === "Enter") {
//       const filteredPorts = Object.keys(portsData).filter((portCode) =>
//         portsData[portCode].name
//           .toLowerCase()
//           .includes(searchTerm.toLowerCase())
//       );

//       if (filteredPorts.length > 0) {
//         setPort(filteredPorts[0]);
//         expandCardBody(type);
//       }
//     }
//   };

//   const expandCardBody = (type) => {
//     const cardBody = document.querySelector(`.${type}-search-box .card-body`);
//     if (cardBody) {
//       cardBody.classList.add("expanded");
//     }
//   };

//   const fetchRouteDetails = () => {
//     if (selectedSourcePort && selectedDestinationPort) {
//       const sourceCoordinates = `${portsData[selectedSourcePort].coordinates[0]},${portsData[selectedSourcePort].coordinates[1]}`;
//       const destinationCoordinates = `${portsData[selectedDestinationPort].coordinates[0]},${portsData[selectedDestinationPort].coordinates[1]}`;

//       const options = {
//         method: "GET",
//         url: `https://api.searoutes.com/route/v2/sea/${sourceCoordinates};${destinationCoordinates}/plan`,
//         params: {
//           continuousCoordinates: "true",
//           allowIceAreas: "false",
//           avoidHRA: "false",
//           avoidSeca: "false",
//         },
//         headers: {
//           accept: "application/json",
//           "x-api-key": "SbiGd7GJdR4eYDw35YwQz2i7W0UiRF0b4IJAg7Bh",
//         },
//       };

//       axios
//         .request(options)
//         .then(function (response) {
//           setRouteDetails(response.data);
//         })
//         .catch(function (error) {
//           console.error(error);
//         });
//     }
//   };

//   useEffect(() => {
//     fetchRouteDetails();
//   }, [selectedSourcePort, selectedDestinationPort]);

//   return (
//     <div className="routes-page">
//       <div className="row input-box-container">
//         <div className="col-6">
//           <div className="row">
//             <div className="col-12 source-search-box">
//               <div className="card source-destination-cards">
//                 <div className="card-body">
//                   <span className="location-icon">
//                     <FaLocationDot />
//                   </span>

//                   <input
//                     type="text"
//                     placeholder="Enter Source"
//                     value={searchTermSource}
//                     onChange={handleSearchTermSourceChange}
//                     onKeyPress={(event) =>
//                       handleEnterPress(
//                         event,
//                         setSelectedSourcePort,
//                         searchTermSource,
//                         "source"
//                       )
//                     }
//                     className="search-input-box"
//                   />
//                   <select
//                     id="source"
//                     value={selectedSourcePort || ""}
//                     onChange={handleSourcePortChange}
//                     className="dropdown"
//                   >
//                     <option value="" disabled>
//                       Select source port
//                     </option>
//                     {Object.keys(portsData).map((portCode) => (
//                       <option key={portCode} value={portCode}>
//                         {portsData[portCode].name}
//                       </option>
//                     ))}
//                   </select>
//                   <h5 className="card-title">
//                     Port Name :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].name
//                       : ""}
//                   </h5>
//                   <h6 className="card-title mb-2">
//                     Country :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].country
//                       : ""}
//                   </h6>
//                   <h6 className="card-title mb-2 ">
//                     Timezone :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].timezone
//                       : ""}
//                   </h6>
//                   {/* <h6 className="card-title mb-2 ">Coordinates :-</h6> */}
//                   <p className="card-subtitle mb-1 text-body-secondary">
//                     Latitude :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].coordinates[1]
//                       : ""}
//                   </p>
//                   <p className="card-subtitle text-body-secondary lat-log-p">
//                     Longitude :{" "}
//                     {selectedSourcePort
//                       ? portsData[selectedSourcePort].coordinates[0]
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 destination-search-box">
//               <div className="card source-destination-cards">
//                 <div className="card-body">
//                   <span className="location-icon2">
//                     <FaLocationDot />
//                   </span>
//                   <input
//                     type="text"
//                     placeholder="Enter Destination"
//                     value={searchTermDestination}
//                     onChange={handleSearchTermDestinationChange}
//                     onKeyPress={(event) =>
//                       handleEnterPress(
//                         event,
//                         setSelectedDestinationPort,
//                         searchTermDestination,
//                         "destination"
//                       )
//                     }
//                     className="search-input-box"
//                   />
//                   <select
//                     id="destination"
//                     value={selectedDestinationPort || ""}
//                     onChange={handleDestinationPortChange}
//                     className="dropdown"
//                   >
//                     <option value="" disabled>
//                       Select destination port
//                     </option>
//                     {Object.keys(portsData).map((portCode) => (
//                       <option key={portCode} value={portCode}>
//                         {portsData[portCode].name}
//                       </option>
//                     ))}
//                   </select>

//                   <h5 className="card-title">
//                     Port Name :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].name
//                       : ""}
//                   </h5>
//                   <h6 className="card-title mb-2">
//                     Country :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].country
//                       : ""}
//                   </h6>
//                   <h6 className="card-title mb-2 ">
//                     Timezone :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].timezone
//                       : ""}
//                   </h6>
//                   {/* <h6 className="card-title mb-2 ">Coordinates :-</h6> */}
//                   <p className="card-subtitle mb-1 text-body-secondary">
//                     Latitude :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].coordinates[1]
//                       : ""}
//                   </p>
//                   <p className="card-subtitle text-body-secondary lat-log-p">
//                     Longitude :{" "}
//                     {selectedDestinationPort
//                       ? portsData[selectedDestinationPort].coordinates[0]
//                       : ""}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-6">
//           <p className="result" onClick={fetchRouteDetails}>
//             Get Results
//           </p>
//           <div className="get-results"></div>
//           <div className="bot-routes-section">
//             <Bot />
//           </div>
//         </div>
//         {/* <div className="col-12">
//         <iframe id="sea-distance-iframe" style={{marginTop: "34rem", height:"100%"}} frameborder="0" src="http://ports.com/sea-route/" width="100%" />
//         </div> */}
//       </div>
//       <div className="map-container">
//         <h1 className="route-name">
//           Route from{" "}
//           {selectedSourcePort ? portsData[selectedSourcePort].name : ""} to{" "}
//           {selectedDestinationPort
//             ? portsData[selectedDestinationPort].name
//             : ""}
//         </h1>
//         <RouteDetails routeDetails={routeDetails} />
//       </div>
//     </div>
//   );
// }

// export default Routes;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import portsData from "../../Assets/ports.json";
import "./Routes.css";
import Bot from "../Components/Bot/Bot";
// import { FaLocationDot } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import RouteDetails from "./RouteDetails/RouteDetails";
import axios from "axios";
import NavbarTwo from "../Components/Navbar/NavbarTwo";

function Routes() {
  const [selectedSourcePort, setSelectedSourcePort] = useState(null);
  const [selectedDestinationPort, setSelectedDestinationPort] = useState(null);
  const [searchTermSource, setSearchTermSource] = useState("");
  const [searchTermDestination, setSearchTermDestination] = useState("");
  const [routeDetails, setRouteDetails] = useState(null);
  const [filteredSourcePorts, setFilteredSourcePorts] = useState([]);
  const [filteredDestinationPorts, setFilteredDestinationPorts] = useState([]);

  const navigate = useNavigate();

  const handleSourcePortChange = (event) => {
    setSelectedSourcePort(event.target.value);
    expandCardBody("source");
  };

  const handleSearchTermSourceChange = (event) => {
    setSearchTermSource(event.target.value);
    filterPorts(event.target.value, setFilteredSourcePorts);
  };

  const handleDestinationPortChange = (event) => {
    setSelectedDestinationPort(event.target.value);
    expandCardBody("destination");
  };

  const handleSearchTermDestinationChange = (event) => {
    setSearchTermDestination(event.target.value);
    filterPorts(event.target.value, setFilteredDestinationPorts);
  };

  const filterPorts = (searchTerm, setFilteredPorts) => {
    const filteredPorts = Object.keys(portsData).filter((portCode) =>
      portsData[portCode].name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPorts(filteredPorts);
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

  // const fetchRouteDetails = () => {
  //   if (selectedSourcePort && selectedDestinationPort) {
  //     const sourceCoordinates = `${portsData[selectedSourcePort].coordinates[0]},${portsData[selectedSourcePort].coordinates[1]}`;
  //     const destinationCoordinates = `${portsData[selectedDestinationPort].coordinates[0]},${portsData[selectedDestinationPort].coordinates[1]}`;

  //     const options = {
  //       method: "GET",
  //       url: `https://api.searoutes.com/route/v2/sea/${sourceCoordinates};${destinationCoordinates}/plan`,
  //       params: {
  //         continuousCoordinates: "true",
  //         allowIceAreas: "false",
  //         avoidHRA: "false",
  //         avoidSeca: "false",
  //       },
  //       headers: {
  //         accept: "application/json",
  //         "x-api-key": "SbiGd7GJdR4eYDw35YwQz2i7W0UiRF0b4IJAg7Bh",
  //       },
  //     };

  //     axios
  //       .request(options)
  //       .then(function (response) {
  //         setRouteDetails(response.data);
  //       })
  //       .catch(function (error) {
  //         console.error(error);
  //       });
  //   }
  // };

  const fetchRouteDetails = () => {
    if (selectedSourcePort && selectedDestinationPort) {
      const sourceCoordinates = `${portsData[selectedSourcePort].coordinates[0]},${portsData[selectedSourcePort].coordinates[1]}`;
      const destinationCoordinates = `${portsData[selectedDestinationPort].coordinates[0]},${portsData[selectedDestinationPort].coordinates[1]}`;

      const options = {
        method: "GET",
        url: `https://api.searoutes.com/route/v2/sea/${sourceCoordinates};${destinationCoordinates}/plan`,
        params: {
          continuousCoordinates: "true",
          allowIceAreas: "false",
          avoidHRA: "false",
          avoidSeca: "false",
        },
        headers: {
          accept: "application/json",
          "x-api-key": "nirontDGPFBmQJYrSAtZ6NgqZOt20cy7ReufSPM3",
        },
      };

      axios
        .request(options)
        .then(function (response) {
          // Instead of setting routeDetails state here, navigate to RouteResult component with route details
          navigate("/route-results", {
            state: {
              routeDetails: response.data,
              source: portsData[selectedSourcePort].name,
              destination: portsData[selectedDestinationPort].name,
            },
          });
        })
        .catch(function (error) {
          console.error(error);
        });
    }
  };

  useEffect(() => {
    fetchRouteDetails();
  }, [selectedSourcePort, selectedDestinationPort]);

  return (
    <>
      <div className="routes-page">
        <NavbarTwo />
        <div className="row input-box-container">
          <div className="col-6">
            <div className="row">
              <div className="col-12 source-search-box">
                <div className="card source-destination-cards">
                  <div className="card-body">
                    <span className="location-icon">
                      <MdLocationOn />
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
                      {filteredSourcePorts.map((portCode) => (
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
                      <MdLocationOn />
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
                      {filteredDestinationPorts.map((portCode) => (
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
            <p className="result" onClick={fetchRouteDetails}>
              Get Results
            </p>
            <div className="get-results"></div>
            <div className="bot-routes-section">
              <Bot />
            </div>
          </div>
          {/* <div className="col-12">
        <iframe id="sea-distance-iframe" style={{marginTop: "34rem", height:"100%"}} frameborder="0" src="http://ports.com/sea-route/" width="100%" />
        </div> */}
        </div>
        {/* <div className="map-container">
          <h1 className="route-name">
            Route from{" "}
            {selectedSourcePort ? portsData[selectedSourcePort].name : ""} to{" "}
            {selectedDestinationPort
              ? portsData[selectedDestinationPort].name
              : ""}
          </h1>
          <RouteDetails routeDetails={routeDetails} />
        </div> */}
      </div>
    </>
  );
}

export default Routes;
