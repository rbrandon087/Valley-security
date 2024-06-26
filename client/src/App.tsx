import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Homepage from "./pages/Homepage.";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
export interface IAppProps {}

const App: React.FC = () => {
  function handleSubmit(data: FormData): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Router>
      <Navbar name={""} />
      <Routes>
        <Route path="/" element={<Navigate to="/Homepage" replace />} />
        <Route
          path="/Homepage"
          element={<Homepage name={""} description={""} />}
        />
        <Route path="/About" element={<About name={""} />} />
        <Route path="/Contact" element={<Contact name={""} rows={0} />} />
        <Route path="/Careers" element={<Careers name={""} />} />
        <Route path="/Hello" element={<Careers name={""} />} />
      </Routes>
      <Footer name={""} />
    </Router>
  );
};

export default App;
