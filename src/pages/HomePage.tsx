import React from 'react';
import FrontImageSection from '../sections/FrontImageSection/FrontImageSection';
import ServicesSection from '../sections/ServicesSection/ServicesSection';
import BrandSection from '../sections/BrandSection/BrandSection';
import BlogSection from '../sections/BlogSection/BlogSection';
import ContactUsSection from '../sections/ContactUsSection/ContactUsSection';
import Footer from '../components/Footer/Footer';


export default class HomePage extends React.Component {
  render() {
    return (
      <>
        <FrontImageSection />
        <ServicesSection />
        <BrandSection />
        <BlogSection />
        <ContactUsSection />
        <Footer />
      </>
    );
  }
}
