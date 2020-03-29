import React from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
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
    return (
      <div className="services-group-wrapper">
        <div
          className={`services-group-container-${
            isMobile ? 'mobile' : 'desktop'
          }`}
        >
          <div
            className={`services-group-container-left-${
              isMobile ? 'mobile' : 'desktop'
            }`}
          >
            Our Services
          </div>
          <div
            className={`services-group-container-right-${
              isMobile ? 'mobile' : 'desktop'
            }`}
          >
            {SERVICES_ITEMS.map(item => (
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
