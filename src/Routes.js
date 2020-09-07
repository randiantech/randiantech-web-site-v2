import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { TeamPage } from "./pages/TeamPage";
import { CareersPage } from "./pages/CareersPage";
import { ClientsPage } from "./pages/ClientsPage";
import { ContactPage } from "./pages/ContactPage";
import { FrontendPage } from "./pages/FrontendPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { TermsOfServicePage } from "./pages/TermsOfServicePage";
import { RTSPage } from "./pages/RTSPage";
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/privacy" component={PrivacyPage} />
          <Route exact path="/tos" component={TermsOfServicePage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/careers" component={CareersPage} />
          <Route exact path="/clients" component={ClientsPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/careers/frontend" component={FrontendPage} />
          <Route exact path="/rts/login" component={RTSPage} />
        </Switch>
      </App>
    </AppContextProvider>
  );
};

export default Routes;
