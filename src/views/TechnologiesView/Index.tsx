import React, { useEffect } from "react";
import { TechnologiesWrapper } from "../../components/TechnologiesWrapper/Index";
import { Wrapper } from "./Styled";
import { motion } from "framer-motion";

export const TechnologiesView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <motion.div
        animate={{
          opacity: [0, 1],
        }}
        transition={{ duration: 1.2 }}
      >
        <Wrapper>
          <TechnologiesWrapper />
        </Wrapper>
      </motion.div>
    </>
  );
};
