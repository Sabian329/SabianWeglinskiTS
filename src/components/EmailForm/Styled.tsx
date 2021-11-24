import styled from "@emotion/styled";
import { size } from "../../Theme/MediaQueries";

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  max-width: ${size.laptop};
  background-color: #c7c7c7;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem;
  img {
    width: 10rem;
  }
  textArea {
    background-color: #ffffff;
    margin: 0 0 1rem 0;
  }
  input {
    background-color: #ffffff;
  }
  h2 {
    font-weight: 300;
    text-align: center;
  }
  p {
    padding: 0.5rem;
  }
`;

export const Btn = styled.input`
  background: transparent;
`;
