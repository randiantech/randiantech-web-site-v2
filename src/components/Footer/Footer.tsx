import React from 'react';
import {Link} from 'react-router-dom';
import {DESKTOP_ITEMS} from '../../constants';
import {isMobileWidth} from '../../utils';
import './Footer.css';

interface FooterState {
  isMobile: boolean;
  toggleMobileMenu: boolean;
}

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
          <img src="./logo.png" alt="Randiantech" className="footer-logo-img" />
        </div>
        <div>{this.renderItems()}</div>
      </div>
    );
  }
}
