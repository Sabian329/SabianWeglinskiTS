import { Blocks, Header, Wrapper } from "./Styled";
import React, { useEffect } from "react";

import { ContactWrapper } from "../../components/ContactWrapper/Index";
import { EmailForm } from "../../components/EmailForm/Index";
import { Heading } from "@chakra-ui/layout";

export const ContactView = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
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
  );
};
