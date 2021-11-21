import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  font-weight: 200;
  margin: 1rem;
  &.active {
    color: #fdfdfd;
  }
`;
