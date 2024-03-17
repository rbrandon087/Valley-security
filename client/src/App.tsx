import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Employment from "./pages/Employment";
import Estimate from "./pages/Estimate";
import "./App.css";

export interface IAppProps {}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage name={""} />} />
        <Route path="/Gallery" element={<Gallery name={""} />} />
        <Route path="/About" element={<About name={""} />} />
        <Route path="/Estimate" element={<Estimate name={""} />} />
        <Route path="/Employment" element={<Employment name={""} />} />
      </Routes>
    </Router>
  );
};

export default App;
