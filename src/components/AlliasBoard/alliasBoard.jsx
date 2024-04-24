import React from "react";
import IcpSwap from "../../assets/images/icpswap_logo2.png";
import InternetICP from "../../assets/images/internet-computer-icp-logo.png";
import OpenChat from "../../assets/images/4.png";
import WindOge from "../../assets/images/Windoge98.png";
import Clown from "../../assets/images/1.png";
import Infinite from "../../assets/images/ICP Logo.png";
import "./alliasBoard.css";

const alliasBoard = () => {
  return (
    <div className="allias_container">
      <div className="allias_box">
        <a
          id="infinity_logo"
          className="alias alias1"
          href="https://www.clownicp.org/"
        >
          <img src={Infinite} alt="Clown image" />
        </a>
        <a className="alias alias4 top" href="https://info.icpswap.com/">
          <img src={IcpSwap} alt="Clown image" />
        </a>
        <div className="last_allias">
          <a className="clown_sec" href="https://www.clownicp.org/">
            <img src={Clown} alt="Clown image" />
          </a>
          <a className="alias alias5 two" href="https://windoge98.com/">
            <img src={WindOge} alt="Clown image" />
          </a>
          <a className="alias alias3 three" href="https://chat.catalyze.one">
            <img src={OpenChat} alt="Clown image" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default alliasBoard;
