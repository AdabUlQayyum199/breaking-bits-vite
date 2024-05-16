/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import TheRecipe from "../assets/images/TheRecipe.png";
import BlueSkyShop from "../assets/images/BlueSkyShop.png";
import TheLab from "../assets/images/TheLab.png";
import { Box, useDisclosure } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const Infobox = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 100], [100, 0]);
  const y2 = useTransform(scrollY, [100, 200], [100, 0]);
  const y3 = useTransform(scrollY, [200, 300], [100, 0]);
  const opacity1 = useTransform(scrollY, [0, 100], [0, 1]);
  const opacity2 = useTransform(scrollY, [100, 200], [0, 1]);
  const opacity3 = useTransform(scrollY, [200, 300], [0, 1]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="info_sec">
      {/* info box 01 */}
      <motion.div className="info_box" style={{ y: y1, opacity: opacity1 }}>
        <div id="info_box01">
          <img src={TheRecipe} alt="The Recipe Icon" />
          <div className="info_content">
            <h2>The Recipe</h2>
            <p>
              Under the desert moon, I crafted a potent blend of precision &
              scarcity. Here, every element is transformed, scripting the rise
              of an empire unseen!
            </p>
          </div>
        </div>
        {/* accordion for mobile version */}
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <img src={TheRecipe} alt="The Recipe Icon" />
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box as="span" flex="1" textAlign="left">
                The Recipe
              </Box>
              Under the desert moon, I crafted a potent blend of precision &
              scarcity. Here, every element is transformed, scripting the rise
              of an empire unseen!
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </motion.div>
      {/* info box 02 */}
      <motion.div className="info_box" style={{ y: y2, opacity: opacity2 }}>
        <div id="info_box02">
          <img src={BlueSkyShop} alt="The Recipe Icon" />
          <div className="info_content">
            <h2>Blue Sky Shop</h2>
            <p>
              Scope out some of our badass exclusive merch that'll make your
              stash even more RAREE, yo!
            </p>
          </div>
        </div>
        {/* accordion for mobile version */}
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <img src={BlueSkyShop} alt="The Recipe Icon" />
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box as="span" flex="1" textAlign="left">
                Blue Sky Shop
              </Box>
              <p>
                Scope out some of our badass exclusive merch that'll make your
                stash even more RAREE, yo!
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </motion.div>
      {/* info box 03 */}
      <motion.div className="info_box" style={{ y: y3, opacity: opacity3 }}>
        <div id="info_box03">
          <img src={TheLab} alt="The Recipe Icon" />
          <div className="info_content">
            <h2>The Lab</h2>
            <p>
              Where desert secrets catalyze under the moonlight, The Lab
              distills rare essences into even rarer forms. This is the alchemy
              of the digital age!
            </p>
          </div>
        </div>
        {/* accordion for mobile version */}
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <img src={TheLab} alt="The Recipe Icon" />
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box as="span" flex="1" textAlign="left">
                The Lab
              </Box>
              <p>
                Where desert secrets catalyze under the moonlight, The Lab
                distills rare essences into even rarer forms. This is the
                alchemy of the digital age!
              </p>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </motion.div>
    </div>
  );
};

export default Infobox;
