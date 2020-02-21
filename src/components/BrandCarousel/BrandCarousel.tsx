import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './BrandCarousel.css';

const MOBILE_WIDTH = 1200;

const items = [1,2,3,4,5,6,7,8,9,10];

interface BrandCarouselState {
  isMobile: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export default class BrandCarousel extends React.Component<
  any,
  BrandCarouselState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  render() {
    const {isMobile}: BrandCarouselState = this.state;
    return (
      <div className={`brand-carousel-container-${isMobile ? 'mobile' : 'desktop'}`}>
        <div className={`brand-carousel-container-left-${isMobile ? 'mobile' : 'desktop'}`}>Clients</div>
        <div className={`brand-carousel-container-right-${isMobile ? 'mobile' : 'desktop'}`}>
          {items.map(item => (
            <div key={item} className="brand-carousel-item">
              <img className="brand-carousel-item-img" src={`/clients/c${item}.png`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
