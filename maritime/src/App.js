import React from "react";
import { Route, Routes } from "react-router-dom";
import Services from "./Pages/Services/Services";
import Landing from "./Pages/Landing/Landing";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />} />
      <Route exact path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
