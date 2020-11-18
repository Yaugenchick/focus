import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";

import { Header } from "./header/header";
import { Nav } from "./nav/nav";
import { Home } from "./home-page/home";
import { About } from "./about-page/about";
import { Services } from "./services-page/sevices";
import { Rates } from "./rates-page/rates";
import { Info } from "./info-page/info";
import { Contacts } from "./contacts-page/contacts";
import { Footer } from "./footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about-page">
            <About />
          </Route>
          <Route exact path="/services-page">
            <Services />
          </Route>
          <Route exact path="/rates-page">
            <Rates />
          </Route>
          <Route exact path="/info-page">
            <Info />
          </Route>
          <Route exact path="/contacts-page">
            <Contacts />
          </Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
