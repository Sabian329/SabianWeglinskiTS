import { motion } from "framer-motion";
import React from "react";
import { AboutWrapper } from "../../components/AboutWrapper/Index";
import { Wrapper } from "./Styled";

export const AboutView = () => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [1, 1],
      }}
      transition={{ duration: 1.2 }}
    >
      <Wrapper>{/* <AboutWrapper /> */}</Wrapper>
    </motion.div>
  );
};
