import React from "react";
import { Technologies } from "../../Constans/Technologies";
import { TechnologiesItem } from "../TechnologiesItem/Index";
import { Image, TextWrapper, Wrapper } from "./Styled";
import logistic from "../../Assets/tech.svg";
import { Heading, Text } from "@chakra-ui/layout";

export const TechnologiesWrapper = () => {
  return (
    <>
      <TextWrapper>
        <Heading
          color="white"
          margin="1rem"
          textAlign="center"
          fontWeight="400"
        >
          Technologies
        </Heading>
        <Text color="white" margin="1rem" textAlign="center" fontWeight="300">
          learn about the technologies I use
        </Text>
        <Image src={logistic} />
      </TextWrapper>
      <Wrapper>
        {Technologies.map((item) => (
          <TechnologiesItem {...item} key={item.name} />
        ))}
      </Wrapper>
    </>
  );
};
