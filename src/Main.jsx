import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Circles from "./pages/Circles.jsx";
import Memory from "./pages/Memory.jsx";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/circles" element={<Circles />} />
      <Route exact path="/memory" element={<Memory />} />
    </Routes>
  );
};

export default Main;
