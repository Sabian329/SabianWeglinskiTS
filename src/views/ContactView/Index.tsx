import React from "react";
import { EmailForm } from "../../components/EmailForm/Index";
import { motion } from "framer-motion";

export const ContactView = () => {
  return (
    <>
      <motion.div
        animate={{
          opacity: [0.1, 1],
          scale: [0.98, 1],
        }}
        transition={{ duration: 1 }}
      >
        <EmailForm />
      </motion.div>
    </>
  );
};
