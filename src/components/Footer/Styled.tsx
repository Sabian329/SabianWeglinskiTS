import Icon from "@chakra-ui/icon";
import styled from "@emotion/styled";

export const FooterWrapper = styled.footer`
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffff;
  padding: 1rem 0 1rem 0;
  margin: 0 0 0 0;
  overflow-y: hidden;
  h2 {
    font-size: 0.8rem;
    margin: 0.5rem;
    font-weight: 300;
    em {
      font-style: unset;
      font-weight: 600;
    }
  }
`;
export const MDB = styled.img`
  width: 9.5rem;
  margin: 1rem;
  filter: invert(100%);
  :hover {
    filter: invert(0%);
  }
`;
export const SocialWrapper = styled.div`
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
export const IconLogo = styled.img`
  width: 2rem;
`;
