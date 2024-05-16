/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

import Footer from "../components/Footer";
import Backtotop from "../components/Backtotop";
import Infobox from "../components/Infobox";
import BackgroundVideos from "../components/BannerVideos";

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <BackgroundVideos />

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
