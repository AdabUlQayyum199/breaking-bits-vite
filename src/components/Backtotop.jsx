/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import TopArrow from "../assets/images/Top_Arrow.png";

const Backtotop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const scrollPercentage =
      (scrollPosition / document.body.scrollHeight) * 100;
    setShowBackToTop(scrollPercentage > 10); // Show when scrolled 10% down
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showBackToTop && (
        <div className="back_to_top" onClick={handleBackToTop}>
          <h5>Back to Top</h5>
          <img src={TopArrow} alt="Back to Top Arrow" />
        </div>
      )}
    </>
  );
};

export default Backtotop;
