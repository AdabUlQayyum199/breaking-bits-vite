import React, { useState, useEffect } from "react";

const timer = () => {
  const [remainingTime, setRemainingTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const setTargetDeadline = () => {
      const deadline = new Date(Date.UTC(2024, 5, 14, 21, 0, 0)); // May 10th at 12:00 PM
      localStorage.setItem("endingTime", deadline.getTime().toString());

      const birdsAudioElement = document.getElementById("birdsAudio");
      const clockAudioElement = document.getElementById("clockAudio");

      if (birdsAudioElement && clockAudioElement) {
        birdsAudioElement.loop = true;
        clockAudioElement.loop = true;

        // Check if audio can autoplay with sound
        const playPromise1 = birdsAudioElement.play();
        const playPromise2 = clockAudioElement.play();

        if (playPromise1 !== undefined && playPromise2 !== undefined) {
          Promise.all([playPromise1, playPromise2])
            .then(() => {
              // Autoplay started for both audios
            })
            .catch((error) => {
              // Autoplay was prevented, possibly due to browser restrictions
              console.error("Autoplay prevented:", error);
              setAutoplayPrevented(true);
            });
        }
      }
    };
    const calculateRemainingTime = () => {
      const currentTime = new Date().getTime();
      const endingTime = parseInt(localStorage.getItem("endingTime"), 10);

      if (isNaN(endingTime)) {
        // Handle invalid or missing deadline
        return { hours: 0, minutes: 0, seconds: 0 };
      }

      let timeDiff = endingTime - currentTime;
      if (timeDiff < 0) {
        // Handle case where deadline has passed
        timeDiff = 0;
      }

      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    };
    setTargetDeadline();
    const interval = setInterval(() => {
      const remainingTime = calculateRemainingTime();
      setRemainingTime(remainingTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="coming_soon_timer">
      <div className="timer_box">
        <span id="hours">
          {remainingTime.hours.toString().padStart(2, "0")}
        </span>
        <span id="minutes">
          {remainingTime.minutes.toString().padStart(2, "0")}
        </span>
        <span id="seconds">
          {remainingTime.seconds.toString().padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export default timer;
