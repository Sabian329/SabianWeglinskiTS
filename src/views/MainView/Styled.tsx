import styled from "@emotion/styled";
import { size } from "../../Theme/MediaQueries";

export const Wrapper = styled.section`
  width: 100vw;
  overflow: hidden;
  max-width: ${size.laptop};
  background: rgb(44, 62, 80);
  background: linear-gradient(
    45deg,
    rgba(44, 62, 80, 1) 0%,
    rgba(189, 195, 199, 1) 100%
  );
`;
