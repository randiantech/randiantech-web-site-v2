/*eslint-disable jsx-a11y/alt-text*/

import React from 'react';
import Logo from '../../components/Logo/Logo';
import {isMobileWidth} from '../../utils';
import './FrontImageSection.css';

interface FrontImageState {
  isMobile: boolean;
}

export default class FrontImageSection extends React.Component<
  any,
  FrontImageState
> {
  constructor(props: any) {
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

  renderContent() {
    const {isMobile} = this.state;
    return (
      <div
        className={`${
          isMobile
            ? 'front-image-section-content-mobile'
            : 'front-image-section-content-desktop'
        }`}
      >
        <span>
          <Logo />
          <span className="front-image-section-content-text">
            {' '}
            is your partner <br /> to craft{' '}
            <span className="front-image-section-instantly-loved-text">
              INSTANTLY LOVED
            </span>{' '}
            software.
          </span>
        </span>
      </div>
    );
  }

  render() {
    const {isMobile} = this.state;
    return (
      <div className="front-image-section-container">
        <img
          className="front-image-section-img"
          src={isMobile ? '/images/front/office-mobile.jpg' : '/images/front/office-desktop.png'}
        />
        {this.renderContent()}
      </div>
    );
  }
}
