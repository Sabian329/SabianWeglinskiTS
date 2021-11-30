import React, { useEffect, useRef, useState } from "react";
import { Correct, DeliveredText, Wrapper } from "./Styled";
import emailjs from "emailjs-com";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { MailData } from "../../Constans/mailjs";
import { Heading, Text } from "@chakra-ui/layout";
import { Button, ButtonGroup } from "@chakra-ui/button";
import mail from "../../Assets/mail.svg";
import correct from "../../Assets/correct.svg";
import { motion, useAnimation } from "framer-motion";

export const EmailForm = () => {
  const form = useRef<any>();
  const nameInput = useRef<any>();
  const emailInput = useRef<any>();
  const textInput = useRef<any>();
  const [isSending, setIsSending] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [isButtonsActive, setIsButtonsActive] = useState(true);
  const controls = useAnimation();

  useEffect(() => {
    isSend ? controls.start("start") : controls.start("stop");
  }, [controls, isSend]);

  const sendEmail = (e: any) => {
    setIsSending(true);
    e.preventDefault();

    emailjs
      .sendForm(
        MailData.YOUR_SERVICE_ID,
        MailData.YOUR_TEMPLATE_ID,
        form.current,
        MailData.YOUR_USER_ID
      )
      .then(
        (result) => {
          result.status === 200 ? setIsSending(false) : setIsSending(true);
          result.status === 200 && setIsSend(true);
          result.status === 200 && setIsButtonsActive(false);
          console.log(result.status);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <Wrapper
      //  initial="stop" animate={controls} variants={MailVariants}
      >
        {isSend ? (
          <motion.div
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.7, 1, 1, 0],
            }}
            transition={{ duration: 4 }}
            onAnimationComplete={() => setIsSend(false)}
          >
            <Correct>
              <img src={correct} alt="Send icon" />
            </Correct>
          </motion.div>
        ) : (
          <motion.div
            animate={{
              opacity: [0, 1],
              scale: [0.9, 1],
            }}
          >
            <img src={mail} alt="e-mail letter" />
          </motion.div>
        )}
        {isButtonsActive ? (
          <>
            <Heading>leave a message</Heading>
            <form ref={form} onSubmit={sendEmail}>
              <label>
                <Text>Name</Text>
              </label>
              <Input required ref={nameInput} type="text" name="from_name" />
              <label>
                <Text>Email</Text>
              </label>
              <Input required ref={emailInput} type="email" name="user_email" />
              <label>
                <Text>Message</Text>
              </label>
              <Textarea required ref={textInput} name="message" />

              <ButtonGroup>
                <Button
                  type="submit"
                  value=""
                  fontWeight="400"
                  isLoading={isSending}
                  bg="#6C63FF"
                >
                  send
                </Button>

                <div onClick={() => setIsSending(false)}>
                  <Button type="reset" value="" fontWeight="400" bg="#6C63FF">
                    reset
                  </Button>
                </div>
              </ButtonGroup>
            </form>
          </>
        ) : (
          <>
            <Heading>Thank you !</Heading>
            <DeliveredText>your message has been delivered</DeliveredText>
          </>
        )}
      </Wrapper>
    </>
  );
};
