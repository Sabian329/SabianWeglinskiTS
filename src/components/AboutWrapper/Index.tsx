import React from "react";
import { Heading } from "@chakra-ui/layout";
import { Wrapper } from "./Styled";
import coding from "../../Assets/coding.svg";
export const AboutWrapper = () => {
  return (
    <>
      <Wrapper>
        <img src={coding} alt="coding svg" />
        <article>
          My name is Sabian. I'm most passionate about new technologies and
          using them in my projects 🚀.I'am focused on writing clean, efficient
          code. Creating modern, user friendly and responsive layouts based on
          <strong> React.js </strong> n library.
        </article>
      </Wrapper>
    </>
  );
};
