import React, { useEffect } from "react";
import { Heading, Text } from "@chakra-ui/layout";
import {
  Decoration,
  Descriptoion,
  DescriptoionOne,
  LeftWrapper,
  MainImage,
  MovieDB,
  RightWrapper,
  Titile,
  Wrapper,
} from "./Styled";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button, ButtonGroup } from "@chakra-ui/button";
import { PhoneVariants } from "../../Constans/Animations";
import { TextVariants } from "../../Constans/Animations";

interface IProjectProps {
  name: string;
  logo: string;
  short: string;
  mainImage: string;
  overwiew: string;
  photoOne: string;
  photoTwo: string;
  apiLogo: string;
  color1: string;
  color: string;
  color2: string;
  link: string;
  codeLink: string;
}

export const ProjectWrapper = ({
  name,
  logo,
  short,
  mainImage,
  overwiew,
  photoTwo,
  apiLogo,
  color1,
  color,
  codeLink,
  link,
}: IProjectProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  // const { reff, inViewf } = useInView();

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  return (
    <>
      {name === "CosyMovies" && (
        <motion.div
          animate={{
            opacity: [0, 1, 0, 0, 0],
            height: [2000, 0],
          }}
          transition={{ duration: [3.45] }}
        >
          <DescriptoionOne>
            <Heading color="white" fontWeight="300" fontSize="2rem">
              Immerse yourself in the world of movies and television series.
            </Heading>
          </DescriptoionOne>
        </motion.div>
      )}

      <Wrapper>
        <Titile style={{ backgroundColor: color1 }}>
          <img src={logo} alt="cosymovies logo" />
          <Heading>{short}</Heading>
        </Titile>
        <AnimatePresence>
          <MainImage src={mainImage} alt="cosymovies poster" />
        </AnimatePresence>

        <Descriptoion style={{ backgroundColor: color }}>
          <LeftWrapper>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={TextVariants}
            >
              <Text>{overwiew}</Text>
            </motion.div>
          </LeftWrapper>
          <RightWrapper>
            {/* <img src={photoOne} alt="the movie db logo" /> */}

            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={PhoneVariants}
            >
              <img
                src={photoTwo}
                alt="the movie db logo"
                style={{
                  width: `${name !== "CosyMovies" && "25rem"}`,
                  height: `${name !== "CosyMovies" && "20rem"}`,
                }}
              ></img>
            </motion.div>
          </RightWrapper>
        </Descriptoion>
      </Wrapper>
      <Decoration>
        <LeftWrapper>
          <Text>{overwiew}</Text>
          <ButtonGroup>
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
        </LeftWrapper>
        <RightWrapper>
          <MovieDB>
            <img src={apiLogo} alt="the movie db logo" />
          </MovieDB>
        </RightWrapper>
      </Decoration>
    </>
  );
};
