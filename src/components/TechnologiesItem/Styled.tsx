import styled from "@emotion/styled";

export const Wrapper = styled.td`
  width: 10rem;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #000000;
  background-color: #ffffff;
  margin: 1rem;
  border-radius: 8px;
  text-align: center;
  cursor: pointer;

  :hover {
    color: #3d3d3d;
    img {
      filter: invert(30%);
    }
  }

  p {
    margin: 1rem 1rem 0 1rem;
    font-size: 1rem;
    font-weight: 500;
  }
  img {
    margin-top: 0.8rem;
    width: 3rem;
  }
  button {
    border: none;
    background: transparent;
    cursor: pointer;
    color: #000000;
  }
`;
