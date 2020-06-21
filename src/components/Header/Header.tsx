import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import {DESKTOP_ITEMS} from '../../constants';
import {isMobileWidth} from '../../utils';
import {h, m, c, i, sel, w, d, l} from '../../meta';
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
      <div className={`${h}-${m}-menu-${c}`}>
        {DESKTOP_ITEMS.map((item) => (
          <Link
            key={item}
            className={`${h}-${i}-${w} ${
              item === 'CONTACT' ? `${i}-is-contact` : ''
            }`}
            to={`${item.toLowerCase()}`}
            onClick={() => this.setState({toggleMobileMenu: false})}
          >
            <div
              className={`${h}-${m}-${i}${
                hoveredItem === item
                  ? ` ${i}-${sel}-${m} rt-glow-effect rt-linear-grad-bg`
                  : ''
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
          className={`${h}-${m}-${i}s-${c} rt-std-right-padding`}
          onClick={() =>
            this.setState({toggleMobileMenu: !this.state.toggleMobileMenu})
          }
        >
          <FontAwesomeIcon
            className={`${h}-${m}-${i}`}
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
      <div className={`${h}-${d}-${i}s-${c} rt-std-right-padding`}>
        {DESKTOP_ITEMS.map((item) => (
          <Link
            key={item}
            className={`${h}-${i}-${w}`}
            to={`${item.toLowerCase()}`}
          >
            <div
              className={`${h}-${d}-${i}${
                hoveredItem === item ? ` ${i}-${sel}` : ''
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
      <div className={`${h}-${c}`}>
        <div className={`${h}-${l}-${w} rt-std-left-padding`}>
          <Logo />
        </div>
        <div>
          {isMobile
            ? this.renderMobileItems()
            : this.renderDesktopItems(hoveredItem)}
        </div>
        <Link to="/rts/login" className="rt-access-btn rt-rounded">RTS Login</Link>
      </div>
    );
  }
}
