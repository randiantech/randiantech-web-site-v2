/*eslint-disable jsx-a11y/alt-text*/

import React from "react";
import { Link } from "react-router-dom";
import { isMobileWidth } from "../../utils";
import { SERVICES_ITEMS } from "../../data";
import "./ServicesSection.css";

interface ServicesSectionState {
  isMobile: boolean;
}

export default class ServicesSection extends React.Component<
  any,
  ServicesSectionState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isMobile: isMobileWidth() });
  }

  render() {
    const { isMobile }: ServicesSectionState = this.state;
    return (
      <div className="services-section-wrapper">
        <div
          className={`services-section-container-${
            isMobile ? "mobile" : "desktop"
          } rt-centered-txt`}
        >
          <div
            className={`services-section-container-left-${
              isMobile
                ? "mobile"
                : "desktop rt-rounded rt-centered-txt"
            }`}
          >
            Our Services
          </div>
          <div
            className={`services-section-container-right-${
              isMobile
                ? "mobile rt-std-top-padding rt-std-bottom-padding"
                : "desktop"
            }`}
          >
            {SERVICES_ITEMS.map((item) => (
              <Link
                to={`${item.link}`}
                key={item.text}
                className="services-section-item"
              >
                <img className="services-section-item-img" src={item.img} />
                <div className="services-section-item-text">{item.text}</div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
