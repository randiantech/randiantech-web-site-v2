import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import {DESKTOP_ITEMS} from '../../constants';
import {isMobileWidth} from '../../utils';
import './Header.css';

interface HeaderState {
  isMobile: boolean;
  hoveredItem: string;
  toggleMobileMenu: boolean;
}

export default class Header extends React.Component<any, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
      hoveredItem: '',
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

  renderMobileMenu() {
    const {hoveredItem} = this.state;
    return (
      <div className="header-mobile-mobile-menu-container">
        {DESKTOP_ITEMS.map((item) => (
          <Link
            key={item}
            className={`header-item-wrapper ${
              item === 'CONTACT' ? 'item-is-contact' : ''
            }`}
            to={`${item.toLowerCase()}`}
            onClick={() => this.setState({toggleMobileMenu: false})}
          >
            <div
              className={`header-mobile-item${
                hoveredItem === item ? ` item-selected-mobile` : ''
              }`}
              onMouseOver={() => this.setState({hoveredItem: item})}
              onMouseOut={() => this.setState({hoveredItem: ''})}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  renderMobileItems() {
    return (
      <>
        <div
          className="header-mobile-items-container"
          onClick={() =>
            this.setState({toggleMobileMenu: !this.state.toggleMobileMenu})
          }
        >
          <FontAwesomeIcon
            className="header-mobile-item"
            icon={faBars}
            size="lg"
          />
        </div>
        {this.state.toggleMobileMenu && this.renderMobileMenu()}
      </>
    );
  }

  renderDesktopItems(hoveredItem: string) {
    return (
      <div className="header-desktop-items-container">
        {DESKTOP_ITEMS.map((item) => (
          <Link
            key={item}
            className="header-item-wrapper"
            to={`${item.toLowerCase()}`}
          >
            <div
              className={`header-desktop-item${
                hoveredItem === item ? ' item-selected' : ''
              }`}
              onMouseOver={() => this.setState({hoveredItem: item})}
              onMouseOut={() => this.setState({hoveredItem: ''})}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    const {isMobile, hoveredItem}: HeaderState = this.state;
    return (
      <div className="header-container">
        <div className="header-logo-wrapper">
          <Logo />
        </div>
        <div>
          {isMobile
            ? this.renderMobileItems()
            : this.renderDesktopItems(hoveredItem)}
        </div>
        <div className="header-login-rts-btn">RTS Login</div>
      </div>
    );
  }
}
