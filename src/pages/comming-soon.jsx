import React, { useEffect, useState } from "react";
// importing assests
import BirdsAudio from "../assets/Audio/mixkit-birds-in-the-spring-forest.wav";
import ClockAudio from "../assets/Audio/clock-tick-tock-sound.mp3";
import Clown from "../assets/images/Clown.png";
import desktop from "../assets/images/Clock_Timer_Desktop.png";
import mobile from "../assets/images/Clock_Timer_Mobile.png";
import IcpSwap from "../assets/images/icpswap_logo2.png";
import InternetICP from "../assets/images/internet-computer-icp-logo.png";
import OpenChat from "../assets/images/openchat_logo.png";
import WindOge from "../assets/images/Windoge98.png";
import Twittercon from "../assets/images/twitter.svg";
import TelegramIcon from "../assets/images/Telegram.svg";
import DiscordIcon from "../assets/images/discord.svg";

const ComingSoon = () => {
  const [remainingTime, setRemainingTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // State to track if audio autoplay is prevented
  const [autoplayPrevented, setAutoplayPrevented] = useState(false);

  useEffect(() => {
    // Set the target deadline in local storage
    const setTargetDeadline = () => {
      const deadline = new Date("2024-05-10T12:00:00"); // May 10th at 12:00 PM
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

    // Calculate remaining time in hours, minutes, and seconds
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
  const handleManualPlay = () => {
    const birdsAudioElement = document.getElementById("birdsAudio");
    const clockAudioElement = document.getElementById("clockAudio");

    if (birdsAudioElement && clockAudioElement) {
      birdsAudioElement.play();
      clockAudioElement.play();
      setAutoplayPrevented(false);
    }
  };
  return (
    <div className="coming_soon">
      {/* <img className="desktop_bg coming_soon_bg" src={desktop} alt="Clown image" /> */}
      <img className="mobile_bg coming_soon_bg" src={mobile} alt="Clown image" />      
      <img className="desktop_bg coming_soon_bg" src={desktop} useMap="#image-map" />
      {/* <div className="alias_container">
        
      </div> */}
      <a className="alias alias1" href="https://www.clownicp.org/"><img src={Clown} alt="Clown image" /></a>
      <a className="alias alias2" href="https://info.icpswap.com/"> <img src={InternetICP} alt="Clown image" /></a>
      <a className="alias alias3" href="https://oc.app/"><img src={OpenChat} alt="Clown image" /></a>
      <a className="alias alias4" href="https://info.icpswap.com/"><img src={IcpSwap} alt="Clown image" /></a>
      <a className="alias alias5" href="https://windoge98.com/"><img src={WindOge} alt="Clown image" /></a>

      {/* Scoial Icons */}
      <div className="social_icons">
        <a
          href="https://t.me/Breaking_Bits"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          <img src={TelegramIcon} alt="Telegram Icon" />
        </a>
        <a
          href="https://x.com/Breaking_Bits"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={Twittercon} alt="Twitter Icon" />
        </a>
        <a
          href="https://discord.gg/Pv2R2xS2FS"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={DiscordIcon} alt="Discord Icon" />
        </a>
      </div>
      {/* audio_links */}
      <div className="audio_links">
        <audio
          id="birdsAudio"
          src={BirdsAudio}
          autoPlay
          loop
          style={{ display: "none" }}
        ></audio>
        <audio
          id="clockAudio"
          src={ClockAudio}
          autoPlay
          loop
          style={{ display: "none" }}
        ></audio>
      </div>
      {/* coming_soon_timer */}
      <div className="coming_soon_timer">
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
      {/* button_div */}
      <div className="button_div">
        {autoplayPrevented && (
          <button id="play_button" onClick={handleManualPlay}>
            Play Music
          </button>
        )}
      </div>
      <div className="partner_logos">
        <a href="https://www.clownicp.org/"><img src={Clown} alt="Clown image" /></a>
        <a href="https://info.icpswap.com/"> <img src={InternetICP} alt="Clown image" /></a>
        <a href="https://oc.app/"><img src={OpenChat} alt="Clown image" /></a>
        <a href="https://info.icpswap.com/"><img src={IcpSwap} alt="Clown image" /></a>
        <a href="https://windoge98.com/"><img src={WindOge} alt="Clown image" /></a>
      </div>
    </div>
  );
};

export default ComingSoon;
