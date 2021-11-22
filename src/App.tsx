import React, { ReactElement } from "react";
import { Header } from "./components/Header/Index";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";
import { MainView } from "./views/MainView/Index";
import { AboutView } from "./views/AboutView/Index";
import { MyProjectView } from "./views/MyProjectsView/Index";
import { TechnologiesView } from "./views/TechnologiesView/Index";
import { Footer } from "./components/Footer/Index";

function App(): ReactElement {
  return (
    <>
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
    </>
  );
}

export default App;
