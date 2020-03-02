import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './Footer.css';

const MOBILE_WIDTH = 1200;

const DESKTOP_ITEMS = [
  'ABOUT',
  'SERVICES',
  'TEAM',
  'CAREERS',
  'CLIENTS',
  'CONTACT',
];

interface FooterState {
  isMobile: boolean;
  toggleMobileMenu: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export default class Footer extends React.Component<any, FooterState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
      toggleMobileMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  renderItems() {
    return (
      <div className="footer-desktop-items-container">
        {DESKTOP_ITEMS.map(item => (
          <Link
            key={item}
            className="footer-item-wrapper"
            to={`${item.toLowerCase()}`}
          >
            <div className="footer-desktop-item">{item}</div>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    const {isMobile}: FooterState = this.state;
    if (isMobile) return <></>;
    return (
      <div className="footer-container">
        <div className="footer-logo-wrapper">
          <img src="./logo.png" className="footer-logo-img" />
        </div>
        <div>{this.renderItems()}</div>
      </div>
    );
  }
}
