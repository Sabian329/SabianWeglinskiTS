import styled from "@emotion/styled";

export const Wrapper = styled.div``;
export const Titile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 1rem 0 1rem 0;
  z-index: 10;

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

export const Descriptoion = styled.div`\
display: flex;
  background-color: #000000;
  position: relative;
  height: 30rem;
`;
export const Decoration = styled.div`
  background-color: #2c2c2c;
  height: 2rem;
`;
export const LeftWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
    color: #fff;
    width: 20rem;
    margin-bottom: 6rem;
    font-size: 1.5rem;
  }
`;
export const RightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  img {
    height: 25rem;
    margin: 0 2rem 0 2rem;
    filter: drop-shadow(4px 5px 20px #2a2a2a);
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
  img {
    width: 25rem;
  }
`;
