import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Nav from "../components/Nav";
import Home from "../containers/Home/Home.js";
import About from "../containers/About/About.js";
import Services from "../containers/Services/Services";
import Certifications from "../containers/Certifications/Certifications";
import Clients from "../containers/Clients/Clients";
import Footer from "../components/Footer/Footer";

export const history = createBrowserHistory();

function Routes() {
  return (
    <Router history={history}>
      <Nav />
      <Switch>
        <Route path="/about-us" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/certifications" component={Certifications} />
        <Route path="/Clients" component={Clients} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
