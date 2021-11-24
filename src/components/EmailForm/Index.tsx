import React, { useEffect, useRef, useState } from "react";
import { Btn, Wrapper } from "./Styled";
import emailjs from "emailjs-com";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import { MailData } from "../../Constans/mailjs";
import { Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import mail from "../../Assets/mail.svg";

export const EmailForm = () => {
  const form = useRef<any>();
  const nameInput = useRef<any>();
  const emailInput = useRef<any>();
  const textInput = useRef<any>();
  const [isSending, setIsSending] = useState(false);
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isMailEmpty, setIsMailEmpty] = useState(false);
  const [isTextEmpty, setIsTextEmpty] = useState(false);

  const sendEmail = (e: any) => {
    !nameInput.current.value ? setIsNameEmpty(true) : setIsNameEmpty(false);
    !emailInput.current.value ? setIsMailEmpty(true) : setIsMailEmpty(false);
    !textInput.current.value ? setIsTextEmpty(true) : setIsTextEmpty(false);
    nameInput.current.value && textInput.current.value && setIsSending(true);
    e.preventDefault();
    nameInput.current.value &&
      textInput.current.value &&
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
            console.log(result.status);
          },
          (error) => {
            console.log(error.text);
          }
        );
  };
  return (
    <Wrapper>
      <img src={mail} />
      <Heading>Send e-mail</Heading>
      <form ref={form} onSubmit={sendEmail}>
        <label>
          <Text>Name</Text>
        </label>
        <Input
          isInvalid={isNameEmpty}
          errorBorderColor="crimson"
          ref={nameInput}
          type="text"
          name="from_name"
        />
        <label>
          <Text>Email</Text>
        </label>
        <Input
          isInvalid={isMailEmpty}
          errorBorderColor="crimson"
          ref={emailInput}
          type="email"
          name="user_email"
        />
        <label>
          <Text>Message</Text>
        </label>
        <Textarea
          isInvalid={isTextEmpty}
          errorBorderColor="crimson"
          ref={textInput}
          name="message"
        />
        <Button
          type="submit"
          value=""
          fontWeight="300"
          isLoading={isSending}
          colorScheme="blue"
        >
          send
        </Button>
      </form>
    </Wrapper>
  );
};
