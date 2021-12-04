import React, { useEffect } from "react";
import { useState } from "react";
import { HamburgerMenu } from "../HamurgerMenu/Index";
import { Header } from "../Header/Index";
import { useWindowSize } from "../../Hook/useWindowSize";

export const Menu = () => {
  const [isMobile, setIsMobile] = useState(false);
  const screenSize = useWindowSize();

  useEffect(
    () => (screenSize.width <= 526 ? setIsMobile(true) : setIsMobile(false)),
    [screenSize.width, isMobile]
  );
  return <>{isMobile ? <HamburgerMenu /> : <Header />}</>;
};
