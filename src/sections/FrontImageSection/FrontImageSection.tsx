import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../components/Logo/Logo';
import './FrontImageSection.css';

const MOBILE_WIDTH = 1200;

interface FrontImageState {
  isMobile: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

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
          src={isMobile ? '/office-mobile.png' : '/office.png'}
        />
        {this.renderContent()}
      </div>
    );
  }
}
