import styled from "@emotion/styled";
import BG from "../../Assets/mainBG.svg";

export const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #000000;
  background-image: url(${BG});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  min-height: 80vh;
  article {
    text-align: center;
    margin: 2rem;
    width: 20rem;
    padding: 1rem;
    border-radius: 5px;
  }
`;
export const TextWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  color: #000000;
  text-align: center;
  h2 {
    margin: 1rem;
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
  h1 {
    font-size: 1.2rem;
  }
`;
export const Logo = styled.img`
  width: 2.5rem;
  :hover {
    filter: invert(100%);
  }
`;
export const Png = styled.img`
  width: 20rem;
`;
