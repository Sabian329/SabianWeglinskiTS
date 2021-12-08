import React from "react";
import { StyledLink, Wrapper } from "./Styled";

export const NavBar = ({ setOpen }: { setOpen?: any }) => {
  return (
    <Wrapper>
      <StyledLink onClick={() => setOpen(false)} to="/">
        home
      </StyledLink>
      <StyledLink onClick={() => setOpen(false)} to="/about">
        about
      </StyledLink>
      <StyledLink onClick={() => setOpen(false)} to="/myprojects">
        my projects
      </StyledLink>
      <StyledLink onClick={() => setOpen(false)} to="/technologies">
        technologies
      </StyledLink>
      <StyledLink onClick={() => setOpen(false)} to="/contact">
        contact
      </StyledLink>
    </Wrapper>
  );
};
