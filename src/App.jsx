import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import ComingSoon from "./Pages/coming_soon";
import TimerRedirect from "./components/TimerRedirect"; // Ensure the correct path
import CommingSoon from "./pages/comming-soon";
import "./App.css";

function App() {
  // Set the end time to 2:15 PM on May 16, 2024
  const endTime = new Date("2024-05-16T12:00:00");

  return (
    <Router>
      <TimerRedirect endTime={endTime}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<CommingSoon />} />
        </Routes>
      </TimerRedirect>
    </Router>
  );
}

export default App;
