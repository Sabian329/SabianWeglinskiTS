import React, { ReactElement } from "react";
import { Header } from "./components/Header/Index";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { MainView } from "./views/MainView/Index";
import { AboutView } from "./views/AboutView/Index";
import { MyProjectView } from "./views/MyProjectsView/Index";
import { TechnologiesView } from "./views/TechnologiesView/Index";
import { Footer } from "./components/Footer/Index";
import { ChakraProvider } from "@chakra-ui/react";
import overrides from "./Theme/theme";
import styled from "@emotion/styled";
import { ContactView } from "./views/ContactView/Index";

function App(): ReactElement {
  return (
    <Wrapper>
      <ChakraProvider theme={overrides}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" element={<MainView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/myprojects" element={<MyProjectView />} />
            <Route path="/technologies" element={<TechnologiesView />} />
            <Route path="/contact" element={<ContactView />} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
