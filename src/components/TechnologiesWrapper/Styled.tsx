import styled from "@emotion/styled";
import { device } from "../../Theme/MediaQueries";

export const Wrapper = styled.table`
  padding: 2rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
  align-items: center;
  background-color: #000000;
`;
export const TextWrapper = styled.div`
  padding: 0;
  margin: 2rem 0 1rem 0;
  h2 {
    color: #ffffff;
    text-align: center;
    font-size: 4rem;
    font-weight: 300;
  }
  p {
    color: #ffffff;
  }
  @media ${device.mobileL} {
    margin: 4rem 0 0 0;
    h2 {
      font-size: 3rem;
    }
  }
`;

export const Image = styled.img`
  width: 20rem;
  margin: 0 2rem 0 2rem;
  @media ${device.mobileLL} {
    width: 12rem;
    margin: 1rem;
  }
`;
