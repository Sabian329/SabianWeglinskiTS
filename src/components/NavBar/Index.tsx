import React from "react";
import { StyledLink } from "./Styled";

export const NavBar = () => {
  return (
    <div>
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/about">about</StyledLink>
      <StyledLink to="/myprojects">my projects</StyledLink>
      <StyledLink to="/technologies">technologies</StyledLink>
    </div>
  );
};
