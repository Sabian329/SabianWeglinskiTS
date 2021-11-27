import styled from "@emotion/styled";
import { size } from "../../Theme/MediaQueries";
import Board from "../../Assets/BG.svg";

export const Wrapper = styled.section`
  overflow-y: hidden;
  width: 100vw;
  background-image: url(${Board});
  background-size: cover;
  background-repeat: no-repeat;
`;
