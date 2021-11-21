import React from "react";
import iphone from "../../Assets/iphonetrans.png";
import back from "../../Assets/cmlong.jpg";
import { Content, Phone, Wrapper } from "./Styled";

export const MagicPhone = () => {
  return (
    <Wrapper>
      <Phone src={iphone} alt="the movie db logo" />
      <Content src={back} alt="the movie db logo" />
    </Wrapper>
  );
};
