/*eslint-disable jsx-a11y/alt-text*/

import React from "react";
import { Logo } from "../components/Logo";
import "./FrontImageSection.css";


interface FrontImageProps {
  isMobile: boolean;
}

class FrontImage extends React.Component<
  FrontImageProps,
  any
> {
  renderContent() {
    const { isMobile } = this.props;
    return (
      <div
        className={`${
          isMobile
            ? "front-image-section-content-mobile rt-std-top-padding rt-std-bottom-padding"
            : "front-image-section-content-desktop"
        }`}
      >
        <span>
          <Logo color="#FF3970"/>
          <span
            className={`${
              isMobile
                ? "front-image-section-content-text-mobile"
                : "front-image-section-content-text-desktop"
            }`}
          >
            {" "}
          {isMobile ? <br /> : ''} is your partner <br /> to craft {isMobile ? <br /> : ' '}
            <span className="front-image-section-instantly-loved-text">
              SUPERB
            </span>{" "}
            software.
          </span>
        </span>
      </div>
    );
  }

  render() {
    const { isMobile } = this.props;
    return (
      <div
        className={`${
          isMobile
            ? "front-image-section-container-mobile"
            : "front-image-section-container"
        }`}
      >
        <img
          className="front-image-section-img"
          src={
            isMobile
              ? "/images/front/office-mobile.jpg"
              : "/images/front/office-desktop.jpg"
          }
        />
        {this.renderContent()}
      </div>
    );
  }
}

export default FrontImage;