// src/App.js
import HealthCheck from "./components/HealthCheck";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";


import Dashboard from "./pages/Dashboard";
import Forms from "./pages/Forms";
import Employees from "./pages/Employees";
import Marketing from "./pages/Marketing";

import "./App.css";

function App() {
  const apiURL = process.env.REACT_APP_API_URL;
  console.log("API URL:", apiURL);

  return (
    <Router>
      <div className="app-container">
        {/* Optional Navbar */}
        <Navbar />

        <HealthCheck />

        <div className="app-layout">
          <Sidebar />
          <div className="main-view">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/marketing" element={<Marketing />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
