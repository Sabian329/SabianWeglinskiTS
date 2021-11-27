import React from "react";
import { StyledLink, Wrapper } from "./Styled";

export const NavBar = () => {
  return (
    <Wrapper>
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/about">about</StyledLink>
      <StyledLink to="/myprojects">my projects</StyledLink>
      <StyledLink to="/technologies">technologies</StyledLink>
      <StyledLink to="/contact">contact</StyledLink>
    </Wrapper>
  );
};
