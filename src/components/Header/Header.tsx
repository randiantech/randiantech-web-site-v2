import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import './Header.css';

const MOBILE_WIDTH = 1200;

const DESKTOP_ITEMS = [
  'ABOUT',
  'SERVICES',
  'TEAM',
  'CAREERS',
  'CLIENTS',
  'CONTACT',
];

interface HeaderProps {
  isMobile?: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export default class Header extends React.Component<HeaderProps> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {isMobile: isMobileWidth()};
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  renderMobileItems() {
    return (
      <div className="header-mobile-items-container">
        <FontAwesomeIcon
          className="header-mobile-item"
          icon={faBars}
          size="lg"
        />
      </div>
    );
  }

  renderDesktopItems() {
    return (
      <div className="header-desktop-items-container">
        {DESKTOP_ITEMS.map(item => (
          <div key={item} className="header-desktop-item">
            {item}
          </div>
        ))}
      </div>
    );
  }

  render() {
    const {isMobile}: HeaderProps = this.state;
    return (
      <div className="header-container">
        <div className="header-logo-wrapper">
          <Logo />
        </div>
        <div>
          {isMobile ? this.renderMobileItems() : this.renderDesktopItems()}
        </div>
      </div>
    );
  }
}
