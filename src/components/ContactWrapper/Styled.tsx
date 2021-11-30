import styled from "@emotion/styled";
import { device } from "../../Theme/MediaQueries";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c7c7c7ce;
  backdrop-filter: blur(3px);
  border-radius: 10px;
  height: 35rem;
  margin: 1rem;

  @media ${device.mobileL} {
    width: 19rem;
    margin: 5rem 0 0 0;
  }
  h2 {
    font-weight: 300;
    margin-bottom: 2rem;
  }
`;
export const Img = styled.img`
  width: 10rem;
  margin-top: 1rem;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  height: 10rem;
  padding: 0 1rem 0 1rem;
  background-color: #00000067;
  @media ${device.mobileL} {
    padding: 2rem;
  }

  table {
    margin: 0 auto;
    @media ${device.mobileL} {
      padding: 2rem;
      color: white;
    }
  }
  th {
    width: max-content;
  }
  tr {
    text-align: left;
  }
  td {
    color: #ffffff;
    cursor: pointer;
    font-size: 1.1rem;
    @media ${device.mobileL} {
      font-size: 1rem;
    }
    :hover {
      color: #a5a5a5;
    }
  }
  img {
    width: 1.2rem;
    margin: 0 1rem 0 0;
  }
`;
export const SocialWrapper = styled.div`
  margin-top: 3rem;
  display: flex;

  img {
    margin: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
  a {
    :hover {
      img {
        filter: invert(100%);
      }
    }
  }
`;
