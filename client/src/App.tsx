import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import "./App.css";

export interface IAppProps {}

const App: React.FC = () => {
  return (
    <Router>
      <Navbar name={""} />
      <Routes>
        <Route path="/Homepage" element={<Homepage name={""} />} />
        <Route path="/Gallery" element={<Gallery name={""} />} />
        <Route path="/About" element={<About name={""} />} />
        <Route path="/Contact" element={<Contact name={""} />} />
        <Route path="/Careers" element={<Careers name={""} />} />
      </Routes>
    </Router>
  );
};

export default App;
