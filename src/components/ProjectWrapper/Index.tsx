import React, { useEffect, useRef } from "react";
import { Heading } from "@chakra-ui/layout";
import {
  Decoration,
  Descriptoion,
  LeftWrapper,
  MainImage,
  MovieDB,
  RightWrapper,
  Titile,
  Wrapper,
} from "./Styled";
import { AnimatePresence, motion } from "framer-motion";

interface IProjectProps {
  logo: string;
  short: string;
  mainImage: string;
  overwiew: string;
  photoOne: string;
  photoTwo: string;
  apiLogo: string;
  color1: string;
  color2: string;
}

export const ProjectWrapper = ({
  logo,
  short,
  mainImage,
  overwiew,
  photoOne,
  photoTwo,
  apiLogo,
  color1,
  color2,
}: IProjectProps) => {
  return (
    <Wrapper>
      <Titile style={{ backgroundColor: color1 }}>
        <motion.div
          animate={{
            y: [70, 0],
            opacity: [0, 1],
          }}
          transition={{ duration: [1.2] }}
        >
          <div>
            <img src={logo} alt="cosymovies logo" />
            <Heading>{short}</Heading>
          </div>
        </motion.div>
      </Titile>

      <AnimatePresence initial={true}>
        <motion.div
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: [2] }}
        >
          <MainImage src={mainImage} alt="cosymovies poster" />
        </motion.div>
      </AnimatePresence>
      <Descriptoion style={{ backgroundColor: color1 }}>
        <LeftWrapper>
          <p style={{ backgroundColor: color2 }}>{overwiew}</p>
        </LeftWrapper>
        <RightWrapper>
          <img src={photoOne} alt="the movie db logo" />

          <img src={photoTwo} alt="the movie db logo"></img>
        </RightWrapper>
        <MovieDB style={{ backgroundColor: color2 }}>
          <img src={apiLogo} alt="the movie db logo" />
        </MovieDB>
      </Descriptoion>
      <Decoration style={{ backgroundColor: color2 }} />
    </Wrapper>
  );
};
