import React, { useState } from "react";
import { Spin as SpinIcon } from "hamburger-react";
import { Blur, IconWrapper, Motion, Navfoot, Wrapper } from "./Styled";
import { NavBar } from "../NavBar/Index";
import icon from "../../Assets/ico.svg";

export const HamburgerMenu = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const VariantsNavigation = {
    close: {
      x: 300,
      opacity: 1,
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
      },
    },
  };
  const VariantsBlur = {
    close: {
      opacity: 1,
      display: "none",
    },
    open: {
      display: "block",
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

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
          <NavBar setOpen={setOpen} isOpen={isOpen} />
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
