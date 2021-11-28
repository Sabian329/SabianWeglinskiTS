import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { device, size } from "../../Theme/MediaQueries";

export const Wrapper = styled(motion.div)`
  display: flex;
  width: 22rem;
  height: 40rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: hidden;
  max-width: ${size.laptop};
  background-color: #c7c7c7;
  border-radius: 10px;
  padding: 2rem;
  margin: 2rem;
  @media ${device.mobileL} {
    width: 19rem;
    margin: 4rem 0 0 0;
  }
  button {
    color: #ffffff;
  }
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
    font-size: 2rem;
  }
  p {
    padding: 0.5rem;
  }
`;
export const DeliveredText = styled.p`
  text-align: center;
  font-size: 0.9rem;
`;
export const Correct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  margin: auto;
  img {
    margin: auto;
    width: 2rem;
  }
`;
