import React from "react";
import { Wrapper } from "./Styled";
import { motion } from "framer-motion";
interface ITechnologiesProps {
  name: string;
  logo: string;
}
export const TechnologiesItem = ({ name, logo }: ITechnologiesProps) => {
  return (
    <motion.div
      animate={{
        opacity: [0.1, 1],
        scale: [0.9, 1],
      }}
      transition={{ duration: [0.7] }}
    >
      <Wrapper>
        <p>{name}</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
          <img src={logo} alt={`${name} logo`} />
        </motion.div>
      </Wrapper>
    </motion.div>
  );
};
