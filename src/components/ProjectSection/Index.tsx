import React, { useEffect } from "react";
import { ButtonGroup, Button } from "@chakra-ui/button";
import { Heading, Text } from "@chakra-ui/layout";
import {
  Decoration,
  WhiteWrapper,
  MovieDB,
  BlackWrapper,
} from "../ProjectWrapper/Styled";
import { Wrapper } from "./Styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { LogoVariants, TextVariants } from "../../Constans/Animations";
import { IProjectSection } from "../../Constans/Interfaces";

export const ProjectSection = ({
  overwiewTwo,
  link,
  codeLink,
  apiLogo,
  apiLink,
  name,
}: IProjectSection) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    inView && controls.start("visible");
  }, [controls, inView]);

  return (
    <Wrapper>
      <Decoration>
        <WhiteWrapper>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={TextVariants}
          >
            <Text>{overwiewTwo}</Text>

            <ButtonGroup justifyContent="center" w="100%">
              <a href={link} target="_blank" rel="noreferrer">
                <Button>
                  <Heading>Visit page</Heading>
                </Button>
              </a>
              <a href={codeLink} target="_blank" rel="noreferrer">
                <Button>
                  <Heading>My code</Heading>
                </Button>
              </a>
            </ButtonGroup>
          </motion.div>
        </WhiteWrapper>
        <BlackWrapper>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={LogoVariants}
          >
            <MovieDB>
              <a href={apiLink} target="_blank" rel="noreferrer">
                <img src={apiLogo} alt="the movie db logo" />
              </a>
            </MovieDB>
          </motion.div>
        </BlackWrapper>
      </Decoration>
    </Wrapper>
  );
};
