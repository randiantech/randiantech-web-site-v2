import React from 'react';
import {isMobileWidth} from '../../utils';
import './BrandSection.css';

const items = [1, 2, 4, 6, 10];

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
        className={`brand-section-container-${isMobile ? 'mobile' : 'desktop'}`}
      >
        <div
          className={`brand-section-container-left-${
            isMobile ? 'mobile' : 'desktop'
          }`}
        >
          Trusting Us
        </div>
        <div
          className={`brand-section-container-right-${
            isMobile ? 'mobile' : 'desktop'
          }`}
        >
          {items.map((item) => (
            <div key={item} className="brand-section-item">
              <img
                alt="Randiantech"
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
