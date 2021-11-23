import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  background-color: #ffffff0;
  margin: 1rem;
  border-radius: 8px;
  text-align: center;
  backdrop-filter: blur(40px);
  -webkit-box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.2);
  box-shadow: 2px 2px 25px rgba(0, 0, 0, 0.2);
  p {
    margin: 1rem 1rem 0 1rem;
    font-size: 1rem;
    font-weight: 500;
  }
  img {
    margin-top: 0.8rem;
    width: 5rem;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: #000000;
  }
`;
