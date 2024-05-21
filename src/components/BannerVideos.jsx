/* eslint-disable no-unused-vars */
import React from "react";
import MobileBackgroundVideo from "../assets/Videos/Mobile_UI Animated.mp4";
import DesktopBackgroundVideo from "../assets/Videos/Post-Launch_Desktop_Animated_.mp4";
import MoonComp from "./MoonComp";
import WebsiteLogo from "../assets/images/WebsiteLogo.png";
import BackgroundAudio from "../components/Audios";

const BannerVideos = () => {
  return (
    <>
      <div className="banner_sec">
        <img
          src={WebsiteLogo}
          alt="Breaking Bits Logo"
          id="breaking_bits_logo"
        />
        <video
          className="background_video desktop_bg home_bg"
          autoPlay
          loop
          muted
          playsInline
          src={DesktopBackgroundVideo}
        ></video>
        <video
          className="mobile_bg home_bg"
          autoPlay
          loop
          muted
          playsInline
          src={MobileBackgroundVideo}
        ></video>
        <MoonComp />
        <h2>swipe To unleash</h2>
        {/* background audio */}
        <BackgroundAudio />
      </div>
    </>
  );
};

export default BannerVideos;
