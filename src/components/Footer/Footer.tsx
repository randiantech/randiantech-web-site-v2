import React from 'react';
import {Link} from 'react-router-dom';
import {FOOTER_ITEMS, SOCIAL_NETWORKS} from '../../constants';
import {isMobileWidth} from '../../utils';
import {c, f, d, m, i, l, w} from '../../meta';
import './Footer.css';
import Logo from '../Logo/Logo';

interface FooterState {
  isMobile: boolean;
}

export default class Footer extends React.Component<any, FooterState> {
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
    const {isMobile}: FooterState = this.state;
    if (isMobile) return <></>;
    return (
      <div className="footer-container">
        <div className="footer-left-pane-container">
          <Logo />
          <div className="footer-left-pane-container-list">
            {FOOTER_ITEMS.map((i) => (
              <Link
                key={`footer-item-${i.name}`}
                to={i.url}
                className="footer-item"
              >
                {i.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-right-pane-container">
          <div className="footer-right-pane-container-items">
            {SOCIAL_NETWORKS.map((i) => {
              return (
                <a href={i.url} className="footer-right-pane-item">
                  <div className="footer-right-pane-item-img">
                    <img width="30px" src={i.img} />
                  </div>
                  <div
                    key={`footer-item-sn-${i.name}`}
                    className="footer-right-pane-item-link"
                  >
                    {i.name}
                  </div>
                </a>
              );
            })}
          </div>
          <div className="footer-right-pane-container-disclaimer">
            2020 Copyright Randiantech LLC. All rights reserved.
          </div>
        </div>
      </div>
    );
  }
}
