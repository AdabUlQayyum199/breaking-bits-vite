import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TimerRedirect = ({ children, endTime }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkTime = () => {
      const currentTime = new Date();

      if (currentTime >= endTime) {
        // After end time, allow only /home route
        if (location.pathname !== "/home") {
          navigate("/home");
        }
      } else {
        // Before end time, allow only / route
        if (location.pathname !== "/") {
          navigate("/");
        }
      }
    };

    // Check time on mount and set interval to check periodically
    checkTime();
    const timer = setInterval(checkTime, 1000);

    return () => clearInterval(timer);
  }, [endTime, location, navigate]);

  return <>{children}</>;
};

export default TimerRedirect;
