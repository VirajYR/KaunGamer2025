import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import MeetTheTeam from "./MeetTheTeam/MeetTheTeam.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import Faq from "./FAQ/Faq.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Rules from "./Rules/Rules.jsx";
// Sample Placeholder Components

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
};

export default App;
