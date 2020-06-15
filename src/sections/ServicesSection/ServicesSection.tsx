/*eslint-disable jsx-a11y/alt-text*/

import React from 'react';
import {Link} from 'react-router-dom';
import {isMobileWidth} from '../../utils';
import {SERVICES_ITEMS} from '../../data';
import './ServicesSection.css';

interface ServicesSectionState {
  isMobile: boolean;
}

export default class ServicesSection extends React.Component<
  any,
  ServicesSectionState
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
    const {isMobile}: ServicesSectionState = this.state;
    const device = isMobile ? 'mobile' : 'desktop';
    return (
      <div className="services-group-wrapper rt-std-top-padding">
        <div
          className={`services-group-container-${
            isMobile ? 'mobile' : 'desktop rt-std-bottom-padding'
          }`}
        >
          <div
            className={`services-group-container-left-${
              isMobile
                ? 'mobile rt-std-top-padding rt-std-bottom-padding'
                : 'desktop rt-std-bottom-padding rt-rounded'
            }`}
          >
            Our Services
          </div>
          <div
            className={`services-group-container-right-${
              isMobile
                ? 'mobile rt-std-top-padding rt-std-bottom-padding'
                : 'desktop'
            }`}
          >
            {SERVICES_ITEMS.map((item) => (
              <Link
                to={`${item.link}`}
                key={item.text}
                className="services-group-item"
              >
                <img className="services-group-item-img" src={item.img} />
                <div className="services-group-item-text">{item.text}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
