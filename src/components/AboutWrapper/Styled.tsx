import styled from "@emotion/styled";
import { size } from "../../Theme/MediaQueries";
import { device } from "../../Theme/MediaQueries";

export const Section = styled.section`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;
  max-width: ${size.laptop};
  background-color: #ffffff;
  border-radius: 0 0 27px 27px;
  overflow-x: hidden;
  h2 {
    color: #3f3f3f;
    margin-bottom: 1rem;
    font-size: 4rem;
  }
  h1 {
    color: #000000;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  article {
    text-align: justify;
    width: 25rem;
    padding: 3rem;
  }
  img {
    width: 30rem;
    margin: 5rem;
  }
  @media ${device.laptop} {
    flex-direction: column;
    width: max-content;
    img {
      width: 15rem;
    }
  }
  @media ${device.mobileM} {
    border-radius: 0;
    h2 {
      margin-bottom: 1rem;
      font-size: 3.5rem;
    }
    h1 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    article {
      padding: 3rem;
    }
    img {
      margin: 3rem;
    }
  }
`;
export const SectionTwo = styled.section`
  margin: 10rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  max-width: ${size.laptop};
  background-color: #2f2f2f;
  border-radius: 27px;
  overflow-x: hidden;

  h2 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 4rem;
  }
  h1 {
    color: #ffffff;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  article {
    text-align: justify;
    width: 35rem;
    padding: 3rem;
    border-radius: 10px;
  }
  img {
    border-radius: 50%;
    width: 17rem;
    margin: 5rem;
  }
  @media ${device.laptop} {
    flex-direction: column;

    width: max-content;
    img {
      width: 15rem;
    }
  }
  @media ${device.mobileM} {
    border-radius: 0;
    h2 {
      margin-bottom: 1rem;
      font-size: 3.5rem;
    }
    h1 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    article {
      padding: 3rem;
    }
    img {
      margin: 3rem;
    }
  }
`;
export const SectionThree = styled.section`
  margin: 10rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  max-width: ${size.laptop};
  background-color: #000000;
  border-radius: 27px;
  overflow-x: hidden;

  h2 {
    color: #ffffff;
    margin-bottom: 1rem;
    font-size: 4rem;
  }
  h1 {
    color: #ffffff;
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
  article {
    text-align: justify;
    width: 25rem;
    padding: 3rem;
    border-radius: 10px;
  }
  img {
    width: 17rem;
    margin: 5rem;
  }
  button {
    margin: 1.2rem 0 0 0;
    color: #000000;
  }
  @media ${device.laptop} {
    flex-direction: column;

    width: max-content;
    img {
      width: 15rem;
    }
  }
  @media ${device.mobileM} {
    border-radius: 0;
    width: ;
    h2 {
      margin-bottom: 1rem;
      font-size: 3.5rem;
    }
    h1 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
    }
    article {
      padding: 3rem;
    }
    img {
      margin: 3rem;
    }
  }
`;
