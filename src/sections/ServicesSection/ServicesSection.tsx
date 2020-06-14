/*eslint-disable jsx-a11y/alt-text*/

import React from "react";
import { Link } from "react-router-dom";
import { isMobileWidth } from "../../utils";
import { SERVICES_ITEMS } from "../../data";
import "./ServicesSection.css";

interface ServicesSectionState {
  isMobile: boolean;
}

export default class ServicesSection extends React.Component<any, ServicesSectionState> {
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
  renderItem(item: any) {
    return (
      <div className="services-group-item">
        <img className="services-group-item-img" src={item.img} />
        <div className="services-group-item-text">{item.text}</div>
      </div>
    );
  }

  render() {
    const { isMobile }: ServicesSectionState = this.state;
    const device = isMobile ? "mobile" : "desktop";
    return (
      <div className="services-group-wrapper">
        <div className={`services-group-container-${device}`}>
          <div className={`services-group-container-left-${device}`}>Our Services</div>
          <div className={`services-group-container-right-${device}`}>
            {SERVICES_ITEMS.map((item) => {
              return this.renderItem(item);
            })}
          </div>
        </div>
      </div>
    );
  }
}
