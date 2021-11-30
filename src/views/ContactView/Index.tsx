import React, { useEffect } from "react";
import { EmailForm } from "../../components/EmailForm/Index";
import { motion } from "framer-motion";
import { ContactWrapper } from "../../components/ContactWrapper/Index";
import { Blocks, Header, Wrapper } from "./Styled";
import { Heading } from "@chakra-ui/layout";

export const ContactView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <motion.div
      animate={{
        opacity: [0.1, 1],
        scale: [0.98, 1],
      }}
      transition={{ duration: 1 }}
    >
      <Wrapper>
        <Header>
          <Heading>Contact</Heading>
          <h3>get in touch</h3>
        </Header>
        <Blocks>
          <EmailForm />
          <ContactWrapper />
        </Blocks>
      </Wrapper>
    </motion.div>
  );
};
