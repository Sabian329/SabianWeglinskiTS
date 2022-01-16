import { Heading, Text } from "@chakra-ui/layout";
import { TextWrapper, Wrapper } from "./Styled";

import React from "react";
import { Technologies } from "../../Constans/Technologies";
import { TechnologiesItem } from "../TechnologiesItem/Index";
import { motion } from "framer-motion";

export const TechnologiesWrapper = () => {
  return (
    <>
      <TextWrapper>
        <Heading>Technologies</Heading>
        <Text color="white" margin="1rem" textAlign="center" fontWeight="300">
          learn about the technologies I use 🛠️
        </Text>
        <motion.div
          animate={{
            opacity: [0, 1],
            scale: [0.9, 1],
          }}
        ></motion.div>
      </TextWrapper>
      <Wrapper>
        {Technologies.map((item) => (
          <TechnologiesItem {...item} key={item.name} />
        ))}
      </Wrapper>
    </>
  );
};
