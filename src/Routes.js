import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import HomeSection from './components/HomeSection/HomeSection';
import AboutSection from './components/AboutSection/AboutSection';
import ServicesSection from './components/ServicesSection/ServicesSection';
import TeamSection from './components/TeamSection/TeamSection';
import CareersSection from './components/CareersSection/CareersSection';
import ClientsSection from './components/ClientsSection/ClientsSection';
import ContactSection from './components/ContactSection/ContactSection';

const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={HomeSection} />
            <Route exact path="/about" component={AboutSection} />
            <Route exact path="/services/staff-augmentation" component={ServicesSection} />
            <Route exact path="/services/fixed-price" component={ServicesSection} />
            <Route exact path="/services/managed-agile-teams" component={ServicesSection} />
            <Route exact path="/services/field-agent-management" component={ServicesSection} />
            <Route exact path="/services/technical-mentoring" component={ServicesSection} />
            <Route exact path="/services/on-site-training" component={ServicesSection} />
            <Route exact path="/services" component={ServicesSection} />
            <Route exact path="/team" component={TeamSection} />
            <Route exact path="/careers" component={CareersSection} />
            <Route exact path="/clients" component={ClientsSection} />
            <Route exact path="/contact" component={ContactSection} />
        </Switch>
    </App> )

export default Routes
