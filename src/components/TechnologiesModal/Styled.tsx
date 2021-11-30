import { ModalContent } from "@chakra-ui/modal";
import styled from "@emotion/styled";
import { device } from "../../Theme/MediaQueries";

export const Logo = styled.img`
  width: 1.2rem;
  margin: 0 0.5rem 0 0;
`;

export const ModalContentStyled = styled(ModalContent)`
  background-color: #444444;
  color: #ffffff;
  @media ${device.mobileL} {
    width: 80vw;
  }
`;
