import React, { useState } from "react";
import { Spin as SpinIcon } from "hamburger-react";
import { Blur, IconWrapper, Wrapper } from "./Styled";
import { NavBar } from "../NavBar/Index";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconWrapper>
        <SpinIcon toggled={isOpen} toggle={setOpen} />
      </IconWrapper>
      {isOpen && (
        <>
          <Wrapper>
            <NavBar />
          </Wrapper>
          <Blur />
        </>
      )}
    </>
  );
};
