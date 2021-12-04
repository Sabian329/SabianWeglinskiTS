import styled from "@emotion/styled";
import { device, size } from "../../Theme/MediaQueries";

export const Wrapper = styled.div`
  max-width: ${size.laptopL};
  overflow: hidden;
`;
export const Titile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 2rem 0 2rem 0;
  overflow: hidden;

  h2 {
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
  }
  img {
    margin: 1rem;
    width: 17rem;
  }
`;
export const MainImage = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
  z-index: 100;
`;

export const Descriptoion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  position: relative;
  height: 40rem;
  @media ${device.mobileL} {
    width: 100%;
    flex-direction: column;
    height: auto;
  }
`;
export const DescriptoionOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  position: relative;
  height: 100vh;
  h2 {
    text-align: center;
  }
  @media ${device.mobileL} {
    h2 {
      margin: 1rem;
      font-size: 1rem;
    }
  }
`;
export const Decoration = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #000000;
  height: 40rem;
  z-index: 100;
  @media ${device.mobileL} {
    width: 100%;
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`;
export const WhiteWrapper = styled.article`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  background-color: white;
  color: black;
  position: relative;
  @media ${device.mobileL} {
    width: 100%;
    padding: 0 0 2rem 0;
  }

  button {
    border: unset;
    padding: 1.2rem;
    border-radius: 15px;
    background-color: #000000;
    border-radius: 25px;
    color: #ffffff;
    :hover {
      background-color: #b1b1b1;

      h2 {
        color: #000000;
      }
    }
    h2 {
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0;
      margin: 0;
      color: #ffffff;
    }
  }
  p {
    text-align: justify;
    color: #000000;
    font-size: 1.2rem;
    font-weight: 200;
    padding: 1rem;
    margin: 4rem;
    border-radius: 15px;
    z-index: 11;
  }
`;
export const BlackWrapper = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  min-height: 30rem;
  overflow: hidden;
  img {
  }
  @media ${device.mobileL} {
    width: 100%;
  }
  img {
    height: 30rem;
    z-index: 10;
  }
`;

export const MovieDB = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  border-radius: 0 0px 0 0;
  z-index: 11;
  @media ${device.mobileL} {
    height: 25rem;
    img {
      width: 15rem;
      height: 7rem;
    }
  }
  img {
    width: 20rem;
    height: 9rem;
    filter: contrast(80%);

    :hover {
      filter: contrast(100%);
    }
  }
`;
