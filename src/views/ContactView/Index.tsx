import React, { useEffect } from "react";
import { EmailForm } from "../../components/EmailForm/Index";
import { motion } from "framer-motion";
import { ContactWrapper } from "../../components/ContactWrapper/Index";
import { Wrapper } from "./Styled";

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
        <EmailForm />
        <ContactWrapper />
      </Wrapper>
    </motion.div>
  );
};
