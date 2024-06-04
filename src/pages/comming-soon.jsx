import React, { useEffect, useState } from "react";
// importing assests
import BirdsAudio from "../assets/Audio/Background_Sound.mp3";
import ClockAudio from "../assets/Audio/tik.mp3";
import Twittercon from "../assets/images/twitter.svg";
import TelegramIcon from "../assets/images/Telegram.svg";
import DiscordIcon from "../assets/images/discord.svg";
import OClogo from "../assets/images/OpenChat.svg";
import WebsiteLogo from "../assets/images/WebsiteLogo.png";
import DesktopBackgroundVideo from "../assets/Videos/Pre-Launch_Desktop_Animated_.mov";
import MobileBackgroundVideo from "../assets/Videos/Pre-Launch_Mobile_Animated_.mov";
import Timer from "../components/Timer/timer";
import AlliasBoard from "../components/AlliasBoard/alliasBoard";
import VoumeOn from "../assets/images/volume_On.svg";
const ComingSoon = () => {
  // State to track if audio autoplay is prevented
  const [autoplayPrevented, setAutoplayPrevented] = useState(true);

  useEffect(() => {
    // Set the target deadline in local storage
    const setTargetDeadline = () => {
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
      {/* background videos */}
      <video
        className="background_video desktop_bg coming_soon_bg"
        autoPlay
        loop
        muted
        playsInline
        src={DesktopBackgroundVideo}
      ></video>
      <video
        className="mobile_bg coming_soon_bg"
        autoPlay
        loop
        muted
        playsInline
        src={MobileBackgroundVideo}
      ></video>
      {/* our alias section */}
      <AlliasBoard />
      {/* header */}
      <header>
        <img src={WebsiteLogo} alt="Site Logo" />
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
          <a
            href="https://oc.app/group/qsqss-biaaa-aaaar-bf5wq-cai/?ref=yigko-7iaaa-aaaaf-a2mhq-cai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={OClogo} alt="Discord Icon" />
          </a>
        </div>
      </header>

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
      <Timer />
      {/* button_div */}
      <div className="button_div">
        {autoplayPrevented && (
          <img
            onClick={handleManualPlay}
            id="play_button"
            src={VoumeOn}
            alt="Volume On"
          />
        )}
      </div>
    </div>
  );
};

export default ComingSoon;
