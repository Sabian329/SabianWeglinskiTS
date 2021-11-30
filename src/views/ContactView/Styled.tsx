import styled from "@emotion/styled";
import wordlmap from "../../Assets/WorldMap.svg";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 90vw;
  min-height: 90vh;
  background-image: url(${wordlmap});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media ${device.laptop} {
    background-image: none;
  }
`;

export const Blocks = styled.div`
  display: flex;
  margin-bottom: 2rem;
  @media ${device.laptop} {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  color: #ffffff;
  text-align: center;
  margin: 3rem 0 2rem 0;
  h2 {
    font-size: 4rem;
    font-weight: 400;
  }
  h3 {
    font-size: 1.2rem;
  }
`;
