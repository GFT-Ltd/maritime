import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Landing from "./Pages/Landing/Landing";
import Routes_page from "./Pages/Routes/Routes";
// import "./App.css";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/services" element={<Services />} />
      <Route path="/routes" element={<Routes_page />} />
    </Routes>
  );
}

export default App;
