/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TimerRedirect = ({ children, endTime }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkTime = () => {
      const currentTime = new Date();
      if (currentTime >= endTime) {
        navigate("/home");
      }
    };

    const timer = setInterval(checkTime, 1000);

    return () => clearInterval(timer);
  }, [endTime, navigate]);

  return <>{children}</>;
};

export default TimerRedirect;
