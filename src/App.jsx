import "./App.css";
import "./styles/global.css";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Navbar from "./components/layout/Navbar";
import Placements from "./pages/Placements";
import React from "react";
import StudentCorner from "./pages/StudentCorner";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/student-corner" element={<StudentCorner />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
