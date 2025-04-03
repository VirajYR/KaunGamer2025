import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import MeetTheTeam from "./MeetTheTeam/MeetTheTeam.jsx";
import Footer from "./Footer/Footer.jsx";
import Home from "./Home/Home.jsx";
import Faq from "./FAQ/Faq.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx";
import Rules from "./Rules/Rules.jsx";
import TeamComponent from "./Teams/TeamComponent.jsx";
import AdminLogin from "./AdminLogin/Admin.jsx";
import AdminPanel from "./AdminPanel/AdminPanel.jsx";

// Protect Admin Routes
const PrivateRoute = ({ children }) => {
  return localStorage.getItem("adminToken") ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/team" element={<MeetTheTeam />} />
          <Route path="/teams" element={<TeamComponent />} />
          <Route path="/about" element={<AboutUs />} />

          {/* Admin Protected Route */}
          <Route path="/admin-panel" element={<PrivateRoute><AdminPanel /></PrivateRoute>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
