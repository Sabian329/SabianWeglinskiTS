import styled from "@emotion/styled";
import { size } from "../../Theme/MediaQueries";

export const Wrapper = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: ${size.laptop};
  color: #ffff;
  height: 80vh;
  article {
    text-align: center;
    margin: 2rem;
    width: 20rem;
    padding: 1rem;
    border-radius: 5px;
  }
  img {
    width: 40rem;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem;
  color: #ffff;
  h2 {
    margin: 1rem;
  }
`;
