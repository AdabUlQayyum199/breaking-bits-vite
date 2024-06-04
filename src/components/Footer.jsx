/* eslint-disable no-unused-vars */
import React from "react";
import Windog98 from "../assets/images/Windoge98.png";
import OpenChat from "../assets/images/openchat_logo.png";
import ICPlogo from "../assets/images/ICP_Logo.png";
import Clownlogo from "../assets/images/Clown.png";
import ICPswap from "../assets/images/icpswap_logo.png";
import FooterBackgroundVideo from "../assets/Videos/Footer_background_video.mp4";
import TwitterLogo from "../assets/images/twitter.svg";
import TelegramLogo from "../assets/images/Telegram.svg";
import DiscordLogo from "../assets/images/discord.svg";
import OClogo from "../assets/images/OpenChat.svg";
import { AnimatePresence, motion } from "framer-motion";
import useScrollDirection from "../custonhooks/useScrollDirection ";

const logos = [
  { src: Clownlogo, alt: "Clown Logo", href: "https://www.clownicp.org/" },
  { src: ICPswap, alt: "ICPSwap Logo", href: "https://info.icpswap.com/" },
  { src: OpenChat, alt: "OpenChat Logo", href: "https://t.co/RrgdK18gus" },
  { src: Windog98, alt: "Windog98 Logo", href: "https://windoge98.com/" },
];

const Footer = () => {
  const scrollDirection = useScrollDirection();

  return (
    <>
      <footer>
        <video
          className="footer_background_video"
          autoPlay
          loop
          muted
          playsInline
          src={FooterBackgroundVideo}
        ></video>
        <div className="our_allies">
          <AnimatePresence>
            {scrollDirection === "down" && (
              <motion.h2
                key="heading"
                initial={{ x: "-40%" }} // Start from left outside the screen
                animate={{ x: 0 }} // Animate to the center
                exit={{ x: "-40%" }} // Animate back to left outside the screen
                transition={{ type: "spring", stiffness: 100, damping: 25 }}
              >
                Our Allies
              </motion.h2>
            )}
          </AnimatePresence>

          <div className="our_allies_logos">
            <AnimatePresence>
              {scrollDirection === "down" &&
                logos.map((logo, index) => (
                  <motion.a
                    key={logo.alt}
                    href={logo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    // initial={{ opacity: 0, y: 60 }}
                    // animate={{ opacity: 1, y: 0 }}
                    // exit={{ opacity: 0, y: 50 }}
                    // transition={{ duration: 0.7, delay: index * 0.3 }}
                    initial={{ x: "-100%" }} // Start from left outside the screen
                    animate={{ x: 0 }} // Animate to the center
                    exit={{ x: "-100%" }} // Animate back to left outside the screen
                    transition={{ type: "spring", stiffness: 70, damping: 26 }}
                  >
                    <img src={logo.src} alt={logo.alt} />
                  </motion.a>
                ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="footer_sec">
          <AnimatePresence>
            {scrollDirection === "down" && (
              <>
                <motion.h2
                  key="heading"
                  initial={{ x: "-100%" }} // Start from left outside the screen
                  animate={{ x: 0 }} // Animate to the center
                  exit={{ x: "-100%" }} // Animate back to left outside the screen
                  transition={{ type: "spring", stiffness: 50, damping: 25 }}
                >
                  Powered by{" "}
                  <a
                    href="https://internetcomputer.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={ICPlogo} alt="ICP Logo" />{" "}
                    <span>INTERNET COMPUTER</span>
                  </a>
                </motion.h2>
                <motion.div
                  className="social_icons"
                  key="social_icons"
                  initial={{ x: "+100%" }} // Start from left outside the screen
                  animate={{ x: 0 }} // Animate to the center
                  exit={{ x: "+100%" }} // Animate back to left outside the screen
                  transition={{ type: "spring", stiffness: 50, damping: 25 }}
                >
                  <a
                    href="https://t.me/Breaking_Bits"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={TelegramLogo} alt="Telegram Logo" />
                  </a>
                  <a
                    href="https://x.com/Breaking_Bits"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={TwitterLogo} alt="Twitter Logo" />
                  </a>
                  <a
                    href="https://discord.gg/Pv2R2xS2FS"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={DiscordLogo} alt="Discord Logo" />
                  </a>
                  <a
                    href="https://oc.app/group/qsqss-biaaa-aaaar-bf5wq-cai/?ref=yigko-7iaaa-aaaaf-a2mhq-cai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={OClogo} alt="Discord Logo" />
                  </a>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </footer>
    </>
  );
};

export default Footer;
