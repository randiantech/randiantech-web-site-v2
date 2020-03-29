import React from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import {isMobileWidth} from '../../utils';
import './BrandSection.css';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

interface BrandCarouselState {
  isMobile: boolean;
}

export default class BrandSection extends React.Component<
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
      <div
        className={`brand-section-container-${
          isMobile ? 'mobile' : 'desktop'
        }`}
      >
        <div
          className={`brand-section-container-left-${
            isMobile ? 'mobile' : 'desktop'
          }`}
        >
          Clients
        </div>
        <div
          className={`brand-section-container-right-${
            isMobile ? 'mobile' : 'desktop'
          }`}
        >
          {items.map(item => (
            <div key={item} className="brand-section-item">
              <img
                className="brand-section-item-img"
                src={`/images/clients/c${item}.png`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
