/* eslint-disable no-unused-vars */
import React from "react";
import BackgroundAudio from "../assets/Audio/Background_Sound.mp3";

const Audios = () => {
  return (
    <div>
      <audio
        id="birdsAudio"
        src={BackgroundAudio}
        autoPlay
        loop
        style={{ display: "none" }}
      ></audio>
    </div>
  );
};

export default Audios;
