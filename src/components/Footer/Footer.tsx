import React from 'react';
import {Link} from 'react-router-dom';
import {DESKTOP_ITEMS} from '../../constants';
import {isMobileWidth} from '../../utils';
import './Footer.css';

const c = 'container';
const f = 'footer';
const d = 'desktop';
const m = 'mobile';
const i = 'item';
const l = 'logo';
const w = 'wrapper';

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
      <div className={`${f}-${d}-${i}s-${c} rt-std-left-padding`}>
        {DESKTOP_ITEMS.map((item) => (
          <Link
            key={item}
            className={`${f}-${i}-${w}`}
            to={`${item.toLowerCase()}`}
          >
            <div className={`${f}-${d}-${i}`}>{item}</div>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    const {isMobile}: FooterState = this.state;
    if (isMobile) return <></>;
    return (
      <div className={`${f}-${c} rt-centered-txt`}>
        <div className={`${f}-${l}-${w} rt-std-left-padding`}>
          <img src="./logo.png" alt="Randiantech" className={`${f}-${l}-img`} />
        </div>
        <div>{this.renderItems()}</div>
      </div>
    );
  }
}
