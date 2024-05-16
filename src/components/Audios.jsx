/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import BackgroundAudio from "../assets/Audio/Background_Sound.mp3";
import SpeakerButton from "../assets/images/volume_On.svg"; // Make sure this path is correct

const Audios = () => {
  const audioRef = useRef(null);
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
      setIsButtonVisible(false); // Hide the button div after clicking
    }
  };

  return (
    <div>
      {isButtonVisible && (
        <div
          className="button_div"
          id="speaker_button"
          onClick={handlePlayAudio}
        >
          <img src={SpeakerButton} alt="Play Audio" />
        </div>
      )}
      <audio
        ref={audioRef}
        src={BackgroundAudio}
        loop
        style={{ display: "none" }}
      />
    </div>
  );
};

export default Audios;
