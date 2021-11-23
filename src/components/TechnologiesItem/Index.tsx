import React, { useEffect, useState } from "react";
import { Wrapper } from "./Styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useDisclosure } from "@chakra-ui/hooks";
import { TechnologiesModal } from "../TechnologiesModal/Index";

interface ITechnologiesProps {
  name: string;
  logo: string;
  description: string;
}
export const TechnologiesItem = ({
  name,
  logo,
  description,
}: ITechnologiesProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    inView ? controls.start("visible") : controls.start("hidden");
  }, [controls, inView]);

  const PhoneVariants = {
    hidden: {
      scale: 0.9,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={PhoneVariants}
    >
      <Wrapper ref={ref}>
        <p>{name}</p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1.1 }}>
          <img onClick={onOpen} src={logo} alt={`${name} logo`} />
        </motion.div>
        <TechnologiesModal
          description={description}
          name={name}
          logo={logo}
          onClose={onClose}
          isOpen={isOpen}
        />
      </Wrapper>
    </motion.div>
  );
};
