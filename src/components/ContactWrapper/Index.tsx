import { Img, Main, SocialWrapper, Wrapper } from "./Styled";

import { Heading } from "@chakra-ui/layout";
import React from "react";
import adress from "../../Assets/adress.svg";
import email from "../../Assets/email.svg";
import fbLogo from "../../Assets/fb.png";
import gitLogo from "../../Assets/git.png";
import inLogo from "../../Assets/linked.png";
import phone from "../../Assets/phone.svg";
import pin from "../../Assets/pin.svg";

export const ContactWrapper = () => {
  return (
    <Main>
      <Img src={adress} />
      <Heading>contact</Heading>
      <Wrapper>
        <table>
          <colgroup>
            <col />
            <col />
          </colgroup>
          <tbody>
            <tr>
              <th>
                <img src={phone} alt="phone" />
              </th>
              <td>
                <a href="tel:+48-662-921-107">+48 662 921 107</a>
              </td>
            </tr>
            <tr>
              <th>
                <img src={email} alt="phone" />
              </th>
              <td>
                <a href="mailto:sabian329@gmail.com">sabian329@gmail.com</a>
              </td>
            </tr>
            <tr>
              <th>
                <img src={pin} alt="phone" />
              </th>
              <td>
                <a
                  href="https://goo.gl/maps/qQVcFvqC444XTRJZA"
                  target="_blank"
                  rel="noreferrer"
                >
                  Legnica, Poland
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
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
        <a
          href="https://drive.google.com/file/d/1uBh7fcYhrmXZrhNNddNYgruF93-sdr-W/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <div>CV</div>
        </a>
      </SocialWrapper>
    </Main>
  );
};
