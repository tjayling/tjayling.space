import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

const Main = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
    </Routes>
  );
};

export default Main;
