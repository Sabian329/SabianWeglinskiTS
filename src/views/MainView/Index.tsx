import React, { useEffect } from "react";
import { Logo, Png, TextWrapper, Wrapper } from "./Styled";
import programing from "../../Assets/programing.svg";
import icon from "../../Assets/ico.svg";
import { Heading, Text } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const MainView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.1, 1],
        }}
        transition={{ duration: 1.2 }}
      >
        <Wrapper>
          <TextWrapper>
            <Heading>"Hello, I'm Sabian"</Heading>
            <Logo
              src={icon}
              alt="Logo
      "
            />
            <h1>Front-end Developer</h1>
          </TextWrapper>
          <Png
            src={programing}
            alt="programist
      "
          />
          <article>
            <Text>
              I'm focused on writing clean and efficient code. Creating modern,
              user friendly, responsive layouts based on{" "}
              <strong>React.js</strong> library.
            </Text>
          </article>
        </Wrapper>
      </motion.div>
    </>
  );
};
