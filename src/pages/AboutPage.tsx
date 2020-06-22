import React from 'react';
import Header from '../components/Header/Header';
import AboutSection from '../sections/AboutSection/AboutSection';

class AboutPage extends React.Component {
  render() {
    return <AboutSection />;
  }
}

export default React.memo(AboutPage);
