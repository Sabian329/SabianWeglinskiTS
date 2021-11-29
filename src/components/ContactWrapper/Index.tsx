import React from "react";
import { Img, Main, Wrapper } from "./Styled";
import phone from "../../Assets/phone.svg";
import email from "../../Assets/email.svg";
import pin from "../../Assets/pin.svg";
import adress from "../../Assets/adress.svg";
import { Heading } from "@chakra-ui/layout";
import { motion } from "framer-motion";

export const ContactWrapper = () => {
  return (
    <Main>
      <motion.div
        animate={{
          opacity: [0.1, 1],
          scale: [0.98, 1],
        }}
        transition={{ duration: 1 }}
      >
        <Img src={adress} />
      </motion.div>
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
                {/* <Tooltip hasArrow label="call"> */}
                <a href="tel:+48-662-921-107">+48 662 921 107</a>
                {/* </Tooltip> */}
              </td>
            </tr>
            <tr>
              <th>
                <img src={email} alt="phone" />
              </th>
              <td
                onClick={() => {
                  navigator.clipboard.writeText(
                    "sabianweglinski.dev@gmail.com"
                  );
                }}
              >
                <a href="mailto: sabianweglinski.dev@gmail.com">
                  sabianweglinski.dev@gmail.com
                </a>
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
    </Main>
  );
};
