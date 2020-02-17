import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import './FrontImage.css';

const MOBILE_WIDTH = 1200;

interface FrontImageProps {
  isMobile?: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export default class FrontImage extends React.Component<FrontImageProps> {
  constructor(props: FrontImageProps) {
    super(props);
    this.state = {isMobile: isMobileWidth()};
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  render() {
    return (
      <div className="front-image-container">
        <img className="front-image-img" src="/office.png" />
        <div className="front-image-content-desktop">
          <span>
            <Logo />
            <span className="front-image-content-text">
              {' '}
              is your partner <br /> in crafting{' '}
              <span className="front-image-instantly-loved-text">
                INSTANTLY LOVED
              </span>{' '}
              software.
            </span>
            <FontAwesomeIcon
              className="front-image-btn"
              icon={faArrowCircleRight}
              size="lg"
            />
          </span>
        </div>
      </div>
    );
  }
}
