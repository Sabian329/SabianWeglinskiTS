import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  font-weight: 200;
  margin: 1rem;
  &.active {
    color: #b4b4b4;
  }
`;
