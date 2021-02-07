import React from "react";
import { Title } from "./components/Title";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PageIntro } from "./pages/Intro";
import Footer from "./components/Footer";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Title} />
          <Route exact path="/intro" component={PageIntro} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </>
  );
};
