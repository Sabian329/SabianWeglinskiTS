import styled from "@emotion/styled";
import { size } from "../../Theme/MediaQueries";
import Board from "../../Assets/Cloudy.svg";

export const Wrapper = styled.section`
  overflow: hidden;
  max-width: ${size.laptop};
  background-image: url(${Board});
  background-position: bottom;
  background-repeat: no-repeat;
  height: 90vh;
`;
