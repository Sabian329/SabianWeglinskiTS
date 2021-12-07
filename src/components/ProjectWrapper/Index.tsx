import React, { useEffect } from "react";
import { Heading, Text } from "@chakra-ui/layout";
import {
  Descriptoion,
  DescriptoionOne,
  WhiteWrapper,
  MainImage,
  BlackWrapper,
  Titile,
  Wrapper,
} from "./Styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { PhoneVariants } from "../../Constans/Animations";
import { PhoneCCVariants } from "../../Constans/Animations";
import { TextVariants } from "../../Constans/Animations";
import { ProjectSection } from "../ProjectSection/Index";
import { IProjectProps } from "../../Constans/Interfaces";

export const ProjectWrapper = ({
  name,
  logo,
  short,
  mainImage,
  overwiew,
  overwiewTwo,
  photoTwo,
  apiLogo,
  codeLink,
  link,
  apiLink,
}: IProjectProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    inView && controls.start("visible");
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
        <Titile
          style={{ backgroundColor: `${name === "CosyCurrency" && "#82b6e7"}` }}
        >
          <img src={logo} alt="cosymovies logo" />
          <Heading>{short}</Heading>
        </Titile>

        <MainImage src={mainImage} alt="cosymovies poster" />

        <Descriptoion>
          <WhiteWrapper>
            <motion.div
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={TextVariants}
            >
              <Text>{overwiew}</Text>
            </motion.div>
          </WhiteWrapper>
          <BlackWrapper>
            <motion.div
              initial="hidden"
              animate={controls}
              variants={name === "CosyMovies" ? PhoneVariants : PhoneCCVariants}
            >
              <img
                src={photoTwo}
                alt="the movie db logo"
                style={{
                  width: `${name !== "CosyMovies" && "20rem"}`,
                  height: `${name !== "CosyMovies" && "19rem"}`,
                }}
              ></img>
            </motion.div>
          </BlackWrapper>
        </Descriptoion>
        <ProjectSection
          overwiewTwo={overwiewTwo}
          link={link}
          codeLink={codeLink}
          apiLogo={apiLogo}
          apiLink={apiLink}
          name={name}
        />
      </Wrapper>
    </>
  );
};
