/*eslint-disable jsx-a11y/alt-text*/

import React from "react";
import { Logo } from "../../components/Logo";
import { isMobileWidth } from "../../utils";
import "./FrontImageSection.css";

interface FrontImageProps {
  isMobile: boolean;
}

export default class FrontImageSection extends React.Component<
  FrontImageProps,
  any
> {
  renderContent() {
    const { isMobile } = this.props;
    return (
      <div
        className={`${
          isMobile
            ? "front-image-section-content-mobile rt-std-top-padding rt-std-bottom-padding rt-linear-grad-bg rt-linear-grad-bg"
            : "front-image-section-content-desktop rt-linear-grad-bg"
        }`}
      >
        <span>
          <Logo />
          <span className="front-image-section-content-text">
            {" "}
            is your partner <br /> to craft{" "}
            <span className="front-image-section-instantly-loved-text">
              INSTANTLY LOVED
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
