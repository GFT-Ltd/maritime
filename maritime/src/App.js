import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Landing from "./Pages/Landing/Landing";
import Routes_page from "./Pages/Routes/Routes";
import RouteResult from "./Pages/Routes/RouteResult/RouteResult";
import Weather from "./Pages/Weather/Weather";
import About from "./Pages/About/About";
// import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/services" element={<Services />} />
      <Route path="/routes" element={<Routes_page />} />
      <Route path="/route-results" element={<RouteResult />} />
      <Route path="/weather" element={<Weather />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
