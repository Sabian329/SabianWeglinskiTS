import styled from "@emotion/styled";
import { device } from "../../Theme/MediaQueries";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c7c7c7;
  border-radius: 10px;
  margin: 2rem 0 0 0;
  @media ${device.mobileL} {
    width: 19rem;
    margin: 5rem 0 0 0;
  }
  h2 {
    font-weight: 300;
  }
`;
export const Img = styled.img`
  width: 10rem;
  margin: 2rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 10rem;
  padding: 0 1rem 0 1rem;
  @media ${device.mobileL} {
    padding: 2rem;
  }

  table {
    margin: 0 auto;
    @media ${device.mobileL} {
      padding: 2rem;
    }
  }
  th {
    width: max-content;
  }
  tr {
    text-align: left;
  }
  td {
    color: #000000;
    cursor: pointer;
    font-size: 1.1rem;
    @media ${device.mobileL} {
      font-size: 1rem;
    }
    :hover {
      color: #ffffff;
    }
  }
  img {
    width: 1.2rem;
    margin: 0 1rem 0 0;
  }
`;
