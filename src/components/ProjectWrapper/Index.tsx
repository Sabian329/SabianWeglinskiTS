import {
  BlackWrapper,
  Descriptoion,
  MainImage,
  Titile,
  WhiteWrapper,
  Wrapper,
} from "./Styled";
import { Heading, Text } from "@chakra-ui/layout";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { IProjectProps } from "../../Constans/Interfaces";
import { PhoneCCVariants } from "../../Constans/Animations";
import { PhoneVariants } from "../../Constans/Animations";
import { ProjectSection } from "../ProjectSection/Index";
import { TextVariants } from "../../Constans/Animations";
import { useInView } from "react-intersection-observer";

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
    <Wrapper>
      <Titile
        style={{ backgroundColor: `${name === "CosyCurrency" && "#82b6e7"}` }}
      >
        <img src={logo} alt={`${name} logo`} />
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
  );
};
