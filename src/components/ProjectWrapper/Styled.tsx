import styled from "@emotion/styled";
import { size } from "../../Theme/MediaQueries";

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
  padding: 1rem 0 1rem 0;
  overflow: hidden;

  h2 {
    color: #fff;
    font-weight: 400;
    font-size: 1rem;
  }
  img {
    width: 15rem;
  }
  /* div {
    display: flex;
    flex-direction: column;
    align-items: center;
  } */
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
`;
export const DescriptoionOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  position: relative;
  height: 100vh;
`;
export const Decoration = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #000000;
  height: 40rem;
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
  background-color: white;
  color: black;
  position: relative;

  button {
    border: unset;
    padding: 1.2rem;
    border-radius: 15px;
    background-color: #000000;
    border-radius: 25px;
    h2 {
      font-size: 0.9rem;
      font-weight: 600;
      padding: 0;
      margin: 0;
      color: #ffffff;
    }

    :hover {
      background-color: #444444;
    }
  }
  a {
    text-decoration: none;
  }

  p {
    text-align: justify;
    color: #000000;
    width: 24rem;
    font-size: 1.2rem;
    font-weight: 200;
    padding: 1rem;
    margin: 0 0 2rem 0;
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
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  background-color: #000000;
  /* padding-top: 2rem; */
  border-radius: 0 0px 0 0;
  z-index: 11;
  img {
    width: 20rem;
    height: 9rem;
  }
`;
