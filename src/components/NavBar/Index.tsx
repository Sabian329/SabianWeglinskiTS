import React from "react";
import { StyledLink, Wrapper } from "./Styled";
import { NavbarRoutes } from "../../Constans/navbarRoutes";
import { INavbarRoutes } from "../../Constans/Interfaces";

export const NavBar = ({
  setOpen,
}: {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper>
      {NavbarRoutes.map(({ name, route }: INavbarRoutes) => (
        <StyledLink
          key={name}
          onClick={() => setOpen && setOpen(false)}
          to={route}
        >
          {name}
        </StyledLink>
      ))}
    </Wrapper>
  );
};
