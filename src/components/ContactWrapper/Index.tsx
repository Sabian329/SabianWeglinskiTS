import React from "react";
import { Img, Main, Wrapper } from "./Styled";
import phone from "../../Assets/phone.svg";
import email from "../../Assets/email.svg";
import pin from "../../Assets/pin.svg";
import adress from "../../Assets/adress.svg";
import { Tooltip } from "@chakra-ui/tooltip";
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

              <td
                onClick={() => {
                  navigator.clipboard.writeText("+48 662 921 107");
                  alert("phone number copied");
                }}
              >
                <Tooltip hasArrow label="copy">
                  +48 662 921 107
                </Tooltip>
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
                  alert("copied");
                }}
              >
                <Tooltip hasArrow label="copy">
                  sabianweglinski.dev@gmail.com
                </Tooltip>
              </td>
            </tr>
            <tr>
              <th>
                <img src={pin} alt="phone" />
              </th>
              <td
                onClick={() => {
                  navigator.clipboard.writeText("Legnica");
                  alert("copied");
                }}
              >
                <Tooltip hasArrow label="copy">
                  Legnica
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </Wrapper>
    </Main>
  );
};
