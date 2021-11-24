import React, { useEffect } from "react";
import { Wrapper } from "./Styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useDisclosure } from "@chakra-ui/hooks";
import { TechnologiesModal } from "../TechnologiesModal/Index";
import { ITechnologiesProps } from "../../Constans/Interfaces";

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
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1.09 }}>
        <tr>
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
        </tr>
      </motion.div>
    </motion.div>
  );
};
