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
import { Button } from "@chakra-ui/button";

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
}

export const ProjectWrapper = ({
  name,
  logo,
  short,
  mainImage,
  overwiew,
  photoOne,
  photoTwo,
  apiLogo,
  color1,
  color,
  color2,
  link,
}: IProjectProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  // const { reff, inViewf } = useInView();

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  const PhoneVariants = {
    hidden: {
      y: 400,
      x: name !== "CosyMovies" ? 58 : 0,
      opacity: 0,
      zIndex: 10,
    },
    visible: {
      y: name !== "CosyMovies" ? 173 : 90,
      x: name !== "CosyMovies" ? 58 : 0,
      opacity: 1,
      zIndex: 10,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <>
      {name === "CosyMovies" && (
        <motion.div
          animate={{
            opacity: [0, 1],
          }}
          transition={{ duration: [1.5] }}
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
              opacity: [0.1, 1],
            }}
            transition={{ duration: [2] }}
          >
            <MainImage src={mainImage} alt="cosymovies poster" />
          </motion.div>
        </AnimatePresence>

        <Descriptoion style={{ backgroundColor: color }}>
          <LeftWrapper>
            <Heading>{name}</Heading>
            <Button>
              <a href={link} target="_blank" rel="noreferrer">
                <Heading> Visit page</Heading>
              </a>
            </Button>
            <Text>{overwiew}</Text>
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
          <MovieDB style={{ backgroundColor: color1 }}>
            <img src={apiLogo} alt="the movie db logo" />
          </MovieDB>
        </Descriptoion>
      </Wrapper>
      <Decoration style={{ backgroundColor: color1 }} />
    </>
  );
};
