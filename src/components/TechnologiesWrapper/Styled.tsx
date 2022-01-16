import { device } from "../../Theme/MediaQueries";
import styled from "@emotion/styled";

export const Wrapper = styled.ul`
  display: grid;
  gap: 2rem;
  justify-items: center;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 2rem;
  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${device.mobileLL} {
    grid-template-columns: 1fr;
  }
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
  @media ${device.mobileL} {
    width: 12rem;
    margin: 1rem;
  }
`;
