import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage.";
import Gallery from "./components/Gallery";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Residential from "./pages/Residential";
import Commercial from "./pages/Commercial";

export interface IAppProps {}

const App: React.FC = () => {
  return (
    <Router>
      <Navbar name={""} />
      <Routes>
        <Route
          path="/Homepage"
          element={<Homepage name={""} description={""} />}
        />
        <Route path="/Gallery" element={<Gallery name={""} />} />
        <Route path="/Residential" element={<Residential name={""} />} />
        <Route path="/Commercial" element={<Commercial name={""} />} />
        <Route
          path="/About"
          element={
            <About
              name={""}
              person={{
                role: undefined,
                bio: undefined,
                name: "",
                imageUrl: "",
              }}
            />
          }
        />
        <Route path="/Contact" element={<Contact name={""} rows={0} />} />
        <Route path="/Careers" element={<Careers name={""} />} />
      </Routes>
      <Footer name={""} />
    </Router>
  );
};

export default App;
