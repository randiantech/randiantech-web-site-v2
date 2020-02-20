import React from 'react';
import FrontImage from '../FrontImage/FrontImage';
import ServicesGroup from '../ServicesGroup/ServicesGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

export default class HomeSection extends React.Component {
  render() {
    return (
      <>
        <FrontImage />
        <ServicesGroup />
        <BrandCarousel />
      </>
    );
  }
}
