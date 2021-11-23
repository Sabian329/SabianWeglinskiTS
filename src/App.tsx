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

function App(): ReactElement {
  return (
    <>
      <ChakraProvider theme={overrides}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" element={<MainView />} />
            <Route path="/about" element={<AboutView />} />
            <Route path="/myprojects" element={<MyProjectView />} />
            <Route path="/technologies" element={<TechnologiesView />} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ChakraProvider>
    </>
  );
}

export default App;
