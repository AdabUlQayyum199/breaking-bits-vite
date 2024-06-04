import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import ComingSoon from "./Pages/coming_soon";
import TimerRedirect from "./components/TimerRedirect"; // Ensure the correct path
import CommingSoon from "./pages/comming-soon";
import "./App.css";

function App() {
  // Set the end time to 2:15 PM on May 16, 2024
  const endTime = new Date(Date.UTC(2024, 5, 3, 21, 0, 0));

  return (
    <Router>
      <TimerRedirect endTime={endTime}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<CommingSoon />} />
        </Routes>
      </TimerRedirect>
    </Router>
  );
}

export default App;
