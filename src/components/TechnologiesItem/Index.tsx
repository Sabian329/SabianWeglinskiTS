import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { ITechnologiesProps } from "../../Constans/Interfaces";
import { PhoneVariantsTech } from "../../Constans/Animations";
import { TechnologiesModal } from "../TechnologiesModal/Index";
import { Wrapper } from "./Styled";
import { useDisclosure } from "@chakra-ui/hooks";
import { useInView } from "react-intersection-observer";

export const TechnologiesItem = ({
  name,
  logo,
  description,
}: ITechnologiesProps) => {
  const controls = useAnimation();
  const { ref, inView } = useInView();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    inView && controls.start("visible");
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={PhoneVariantsTech}
    >
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1.09 }}>
        <Wrapper ref={ref} onClick={onOpen}>
          <p>{name}</p>

          <img src={logo} alt={`${name} logo`} />

          <TechnologiesModal
            description={description}
            name={name}
            logo={logo}
            onClose={onClose}
            isOpen={isOpen}
          />
        </Wrapper>
      </motion.div>
    </motion.div>
  );
};
