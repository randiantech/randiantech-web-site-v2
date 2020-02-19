import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import './FrontImage.css';

const MOBILE_WIDTH = 1200;

interface FrontImageState {
  isMobile: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export default class FrontImage extends React.Component<any, FrontImageState> {
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
            ? 'front-image-content-mobile'
            : 'front-image-content-desktop'
        }`}
      >
        <span>
          <Logo />
          <span className="front-image-content-text">
            {' '}
            is your partner <br /> to craft{' '}
            <span className="front-image-instantly-loved-text">
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
      <div className="front-image-container">
        <img
          className="front-image-img"
          src={isMobile ? '/office-mobile.png' : '/office.png'}
        />
        {this.renderContent()}
      </div>
    );
  }
}
