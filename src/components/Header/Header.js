import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {isMobile: window.innerWidth <= 1200};
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: window.innerWidth <= 1200});
  }

  renderMobileItems() {
    return (
      <div className="header-mobile-items-container">
        <FontAwesomeIcon className="header-mobile-item" icon={faBars} size="lg"/>
      </div>
    );
  }

  renderDesktopItems() {
    return (
      <div className="header-desktop-items-container">
        <div className="header-desktop-item">ABOUT</div>
        <div className="header-desktop-item">SERVICES</div>
        <div className="header-desktop-item">TEAM</div>
        <div className="header-desktop-item">CAREERS</div>
        <div className="header-desktop-item">CLIENTS</div>
        <div className="header-desktop-item">CONTACT</div>
      </div>
    );
  }

  render() {
    const {isMobile} = this.state;
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <span className="header-logo-container-logo-left-side">Randian</span>
          <span className="header-logo-container-logo-right-side">tech</span>
        </div>
        <div>
          {isMobile ? this.renderMobileItems() : this.renderDesktopItems()}
        </div>
      </div>
    );
  }
}
