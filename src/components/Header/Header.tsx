import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
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

interface HeaderState {
  isMobile: boolean;
  hoveredItem: string;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export default class Header extends React.Component<any, HeaderState> {
  constructor(props: any) {
    super(props);
    this.state = {isMobile: isMobileWidth(), hoveredItem: ''};
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

  renderDesktopItems(hoveredItem: string) {
    return (
      <div className="header-desktop-items-container">
        {DESKTOP_ITEMS.map(item => (
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
      </div>
    );
  }
}
