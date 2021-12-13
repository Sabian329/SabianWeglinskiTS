import React from "react";
import { StyledLink, Wrapper } from "./Styled";

export const NavBar = ({
  setOpen,
}: {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper>
      <StyledLink onClick={() => setOpen && setOpen(false)} to="/">
        home
      </StyledLink>
      <StyledLink onClick={() => setOpen && setOpen(false)} to="/about">
        about
      </StyledLink>
      <StyledLink onClick={() => setOpen && setOpen(false)} to="/myprojects">
        my projects
      </StyledLink>
      <StyledLink onClick={() => setOpen && setOpen(false)} to="/technologies">
        technologies
      </StyledLink>
      <StyledLink onClick={() => setOpen && setOpen(false)} to="/contact">
        contact
      </StyledLink>
    </Wrapper>
  );
};
