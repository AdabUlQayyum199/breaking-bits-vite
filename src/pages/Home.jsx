/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import Footer from "../components/Footer";
import Backtotop from "../components/Backtotop";
import Infobox from "../components/Infobox";
import BackgroundAudio from "../components/Audios";
import BackgroundVideos from "../components/BannerVideos";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <BackgroundVideos />
      {/* background audio */}
      <BackgroundAudio />
      {/* Info Section */}
      <Infobox />
      {/* footer section */}
      <Footer />
      {/* Back To Top Section */}
      <Backtotop />
    </>
  );
};

export default Home;
