import React from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import TeamPage from "./pages/TeamPage";
import CareersPage from "./pages/CareersPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import RTSPage from "./pages/RTSPage";
import { AppContextProvider } from "./AppContext";

const Routes = () => (
  <App>
    <Switch>
      <AppContextProvider>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/careers" component={CareersPage} />
        <Route exact path="/clients" component={ClientsPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/rts/login" component={RTSPage} />
      </AppContextProvider>
    </Switch>
  </App>
);

export default Routes;
