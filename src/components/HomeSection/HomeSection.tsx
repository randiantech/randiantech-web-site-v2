import React from 'react';
import FrontImage from '../FrontImage/FrontImage';
import ServicesGroup from '../ServicesGroup/ServicesGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import BlogGroup from '../BlogGroup/BlogGroup';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';


export default class HomeSection extends React.Component {
  render() {
    return (
      <>
        <FrontImage />
        <ServicesGroup />
        <BrandCarousel />
        <BlogGroup />
        <ContactUs />
        <Footer />
      </>
    );
  }
}
