import styled from "@emotion/styled";

export const IconWrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1002;
`;
export const Wrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 100vh;
  background-color: #383838;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  padding: 5rem 0 0 0;
  text-align: center;
  a {
    color: white;
    font-size: 1.5rem;
    &.active {
      color: #aaaaaa;
    }
  }
`;
export const Blur = styled.div`
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(5px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
`;
