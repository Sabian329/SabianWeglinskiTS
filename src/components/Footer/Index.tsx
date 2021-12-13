import React from "react";
import { Heading } from "@chakra-ui/layout";
import { FooterWrapper, SocialWrapper } from "./Styled";
import gitLogo from "../../Assets/git.png";

export const Footer = () => {
  return (
    <FooterWrapper>
      <SocialWrapper>
        <a href="https://github.com/Sabian329" target="_blank" rel="noreferrer">
          <img src={gitLogo} alt="social media logo" />
        </a>
      </SocialWrapper>
      <Heading fontWeight="light">
        made with ❤️ by
        <strong> Sabian Węgliński</strong>
      </Heading>
      <Heading> &copy; 2021 All rights reserved</Heading>
    </FooterWrapper>
  );
};
