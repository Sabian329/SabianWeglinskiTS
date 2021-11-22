import styled from "@emotion/styled";
import back from "../../Assets/back.jpg";
import { size } from "../../Theme/MediaQueries";

export const Wrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #757575;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 100;
  height: 4rem;
  max-width: ${size.laptop};
  animation: mymove 120s infinite;
  @keyframes mymove {
    0% {
      background-position: bottom;
    }
    50% {
      background-position: center;
    }
    100% {
      background-position: bottom;
    }
  }
`;
