/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import NeonSound from "../assets/Audio/NeonSound.mp4";

const BuyNowBtn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const audioRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    audioRef.current.play();
    audioRef.current.loop = true;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    audioRef.current.pause();
    audioRef.current.loop = false;
    audioRef.current.currentTime = 0; // Reset audio to start position
  };

  return (
    <>
      <a
        href="https://info.icpswap.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="glowing-btn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span className="glowing-txt">
            BU<span className="faulty-letter">Y</span>NOW
          </span>
        </button>
      </a>
      <audio ref={audioRef} src={NeonSound} />
    </>
  );
};

export default BuyNowBtn;
