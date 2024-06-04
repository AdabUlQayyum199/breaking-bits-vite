import React from "react";
import IcpSwap from "../../assets/images/icpswap_logo2.png";
import InternetICP from "../../assets/images/internet-computer-icp-logo.png";
import OpenChat from "../../assets/images/4.png";
import WindOge from "../../assets/images/Windoge98.png";
import Clown from "../../assets/images/Clown.png";
import Infinite from "../../assets/images/ICP Logo.png";
import "./alliasBoard.css";

const alliasBoard = () => {
  return (
    <div className="allias_container">
      <div className="allias_box">
        <a
          id="infinity_logo"
          className="alias alias1"
          target="_blank"
          href="https://internetcomputer.org/"
        >
          <img src={Infinite} alt="Clown image" />
        </a>
        <a
          className="alias alias4 top"
          target="_blank"
          href="https://info.icpswap.com/"
        >
          <img src={IcpSwap} alt="Clown image" />
        </a>
        <div className="last_allias">
          <a
            className="clown_sec"
            target="_blank"
            href="https://www.clownicp.org/"
          >
            <img src={Clown} alt="Clown image" />
          </a>
          <a
            className="alias alias5 two"
            target="_blank"
            href="https://windoge98.com/"
          >
            <img src={WindOge} alt="Clown image" />
          </a>
          <a
            className="alias alias3 three"
            target="_blank"
            href="https://chat.catalyze.one"
          >
            <img src={OpenChat} alt="Clown image" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default alliasBoard;
