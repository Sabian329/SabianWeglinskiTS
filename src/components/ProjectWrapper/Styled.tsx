import styled from "@emotion/styled";
import { size } from "../../Theme/MediaQueries";

export const Wrapper = styled.div`
  max-width: ${size.laptop};
  overflow: hidden;
`;
export const Titile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 1rem 0 1rem 0;
  z-index: 10;
  overflow: hidden;

  h2 {
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
  }
  img {
    width: 15rem;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const MainImage = styled.img`
  width: 100%;
  margin: 0;
  padding: 0;
  -webkit-mask-image: linear-gradient(to top, transparent 2%, black 20%);
  mask-image: linear-gradient(to top, transparent 2%, black 20%);
  z-index: 100;
`;

export const Descriptoion = styled.div`
  display: flex;
  background-color: #000000;
  position: relative;
  height: 40rem;
`;
export const Decoration = styled.div`
  background-color: #2c2c2c;
  height: 2rem;
  z-index: 100;
`;
export const LeftWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-items: center;
  button {
    border: unset;
    padding: 0.9rem;
    border-radius: 15px;
    background-color: #252525;
    h2 {
      font-size: 0.9rem;
      font-weight: 400;
      padding: 0;
      margin: 0;
    }
    :hover {
      background-color: #444444;
    }
  }
  a {
    text-decoration: none;
  }
  h2 {
    color: #ffffff;
    font-weight: 400;
  }
  p {
    text-align: justify;
    color: #fff;
    width: 23rem;
    margin-bottom: 6rem;
    font-size: 1.2rem;
    font-weight: 200;
    padding: 1rem;
    border-radius: 15px;
    z-index: 11;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;

  height: 100%;
  img {
    height: 30rem;
    margin: 0 2rem 0 2rem;
    z-index: 10;

    /* filter: drop-shadow(4px 5px 20px #2a2a2a); */
  }
`;

export const MovieDB = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  bottom: 0;
  left: 0;
  width: 50%;
  height: 6rem;
  background-color: #2c2c2c;
  border-radius: 0 50px 0 0;
  z-index: 11;
  img {
    width: 20rem;
  }
`;
