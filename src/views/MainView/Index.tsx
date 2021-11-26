import React from "react";
import { TextWrapper, Wrapper } from "./Styled";
import programing from "../../Assets/programing.svg";
import { Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const MainView = () => {
  return (
    <motion.div
      animate={{
        opacity: [0, 1],
        scale: [0.99, 1],
      }}
      transition={{ duration: 1.2 }}
    >
      <Wrapper>
        <TextWrapper>
          <Heading>Hi, I'm Sabian</Heading>
          <Text>Front-end Developer</Text>
        </TextWrapper>
        <img
          src={programing}
          alt="programist
      "
        />
        <article>
          I am focused on writing clean, efficient code, creating modern ,user
          friendly, responsive layouts based on <strong>React.js</strong>{" "}
          library.
        </article>
      </Wrapper>
    </motion.div>
  );
};
