import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { device } from "../../Theme/MediaQueries";

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #a7a7a7;
  font-size: 1rem;
  font-weight: 200;
  margin: 1rem;

  &.active {
    color: #ffffff;
  }
`;

export const Wrapper = styled.div`
  @media ${device.mobileL} {
    display: flex;
    flex-direction: column;
  }
`;
