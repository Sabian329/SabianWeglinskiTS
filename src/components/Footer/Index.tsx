import React from "react";
import { Heading } from "@chakra-ui/layout";
import { FooterWrapper, SocialWrapper } from "./Styled";
import fbLogo from "../../Assets/fb.png";
import inLogo from "../../Assets/linked.png";
import gitLogo from "../../Assets/git.png";

export const Footer = () => {
  return (
    <FooterWrapper>
      <SocialWrapper>
        <a href="https://github.com/Sabian329" target="_blank" rel="noreferrer">
          <img src={gitLogo} alt="social media logo" />
        </a>
        <a
          href="https://www.linkedin.com/in/sabian-w%C4%99gli%C5%84ski-7299a0225/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={inLogo} alt="social media logo" />
        </a>
        <a
          href="https://www.facebook.com/sabian.weglinski"
          target="_blank"
          rel="noreferrer"
        >
          <img src={fbLogo} alt="social media logo" />
        </a>
      </SocialWrapper>
      <Heading fontWeight="light">
        made with ❤️ by
        <a href="//https//google.com">
          <strong> Sabian Węgliński</strong>
        </a>
      </Heading>
      <Heading> &copy; 2021 All rights reserved</Heading>
    </FooterWrapper>
  );
};
