import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Nav from "../components/Nav/Nav";
import Home from "../containers/Home/Home.js";
import About from "../containers/About/About.js";
import Services from "../containers/Services/Services";
import Clients from "../containers/Clients/Clients";
import Footer from "../components/Footer/Footer";
import Lost from "../containers/Lost/Lost";
import Benefits from "../containers/Benefits/Benefits";

export const history = createBrowserHistory();

function Routes() {
  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <Route path="/about-us" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/clients" component={Clients} />
        <Route path="/benefits" component={Benefits} />
        <Route path="/home" component={Home} />
        <Route path="/" exact component={Home} />
        <Route component={Lost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
