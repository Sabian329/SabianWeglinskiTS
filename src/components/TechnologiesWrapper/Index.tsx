import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Technologies } from "../../Constans/Technologies";
import { TechnologiesItem } from "../TechnologiesItem/Index";
import { Wrapper } from "./Styled";
import { Heading, Text } from "@chakra-ui/layout";

export const TechnologiesWrapper = () => {
  return (
    <>
      <Heading color="white" margin="1rem" textAlign="center" fontWeight="400">
        Technologies
      </Heading>
      <Text color="white" margin="1rem" textAlign="center" fontWeight="300">
        learn about the technologies I use
      </Text>
      <Wrapper>
        {Technologies.map((item) => (
          <TechnologiesItem {...item} key={item.name} />
        ))}
      </Wrapper>
    </>
  );
};
