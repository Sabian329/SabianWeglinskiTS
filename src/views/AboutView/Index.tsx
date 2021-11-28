import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { AboutWrapper } from "../../components/AboutWrapper/Index";
import { Wrapper } from "./Styled";

export const AboutView = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [1, 1],
      }}
      transition={{ duration: 1.2 }}
    >
      <Wrapper>
        <AboutWrapper />
      </Wrapper>
    </motion.div>
  );
};
