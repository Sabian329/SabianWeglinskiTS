import { motion } from "framer-motion";
import React from "react";
import { Technologies } from "../../Constans/Technologies";
import { TechnologiesItem } from "../TechnologiesItem/Index";
import { Wrapper } from "./Styled";

export const TechnologiesWrapper = () => {
  return (
    <Wrapper>
      {Technologies.map((item) => (
        <TechnologiesItem {...item} key={item.name} />
      ))}
    </Wrapper>
  );
};
