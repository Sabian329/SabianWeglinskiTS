import { Blur, IconWrapper, Motion, Navfoot, Wrapper } from "./Styled";
import React, { useState } from "react";
import { VariantsBlur, VariantsNavigation } from "../../Constans/Animations";

import { NavBar } from "../NavBar/Index";
import { Spin as SpinIcon } from "hamburger-react";
import icon from "../../Assets/ico.svg";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  return (
    <>
      <IconWrapper>
        <SpinIcon
          toggled={isOpen}
          toggle={setOpen}
          color={isOpen ? "#e04f5f" : "#25b6d2"}
        />
      </IconWrapper>

      <Motion
        variants={VariantsNavigation}
        initial="close"
        animate={isOpen ? "open" : "close"}
      >
        <Wrapper>
          <img src={icon} alt="Sabian Weglinski Logo" />
          <NavBar setOpen={setOpen} />
          <Navfoot>
            <p>made by</p>
            <h1>
              Sabian<em>Węgliński</em>
            </h1>
          </Navfoot>
        </Wrapper>
      </Motion>
      <Blur
        onClick={() => setOpen(false)}
        variants={VariantsBlur}
        initial="close"
        animate={isOpen ? "open" : "close"}
      />
    </>
  );
};
