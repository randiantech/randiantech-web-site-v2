import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Careers from "./pages/Careers";
import Clients from "./pages/Clients";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import TermsOfService from "./pages/TermsOfService";
import RTS from "./pages/RTS";
import { AppContextProvider } from "./AppContext";

const Routes = () => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <AppContextProvider>
      <App>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/tos" component={TermsOfService} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/clients" component={Clients} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rts/login" component={RTS} />
        </Switch>
      </App>
    </AppContextProvider>
  );
};

export default Routes;
