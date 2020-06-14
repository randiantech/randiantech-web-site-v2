import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import { FOOTER_DESKTOP_ITEMS } from "../../constants";
import { FOOTER_TERMS_AND_CONDS } from "../../constants";
import { isMobileWidth } from "../../utils";
import "./Footer.css";

interface FooterState {
  isMobile: boolean;
  hoveredItem: string;
  toggleMobileMenu: boolean;
}

export default class Footer extends React.Component<any, FooterState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
      hoveredItem: "",
      toggleMobileMenu: false,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isMobile: isMobileWidth() });
  }

  renderMobileMenu() {
    const { hoveredItem } = this.state;
    return (
      <div className="footer-mobile-mobile-menu-container">
        {FOOTER_DESKTOP_ITEMS.map((item) => (
          <Link
            key={item}
            className={`footer-item-wrapper ${item === "CONTACT" ? "item-is-contact" : ""}`}
            to={`${item.toLowerCase()}`}
            onClick={() => this.setState({ toggleMobileMenu: false })}
          >
            <div
              className={`footer-mobile-item${hoveredItem === item ? ` item-selected-mobile` : ""}`}
              onMouseOver={() => this.setState({ hoveredItem: item })}
              onMouseOut={() => this.setState({ hoveredItem: "" })}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  renderMobileItems() {
    return (
      <>
        <div
          className="footer-mobile-items-container"
          onClick={() => this.setState({ toggleMobileMenu: !this.state.toggleMobileMenu })}
        >
          <FontAwesomeIcon className="footer-mobile-item" icon={faBars} size="lg" />
        </div>
        {this.state.toggleMobileMenu && this.renderMobileMenu()}
      </>
    );
  }

  renderDesktopItems(hoveredItem: string) {
    return (
      <div className="footer-desktop-items-container">
        {FOOTER_DESKTOP_ITEMS.map((item) => (
          <Link key={item} className="footer-item-wrapper" to={`${item.toLowerCase()}`}>
            <div
              className={`footer-desktop-item${
                hoveredItem === item ? " footer-item-selected" : ""
              }`}
              onMouseOver={() => this.setState({ hoveredItem: item })}
              onMouseOut={() => this.setState({ hoveredItem: "" })}
            >
              {item}
            </div>
          </Link>
        ))}
      </div>
    );
  }

  render() {
    const { isMobile, hoveredItem }: FooterState = this.state;
    return (
      <div className="footer-container">
        <div className="footer-logo-wrapper">
          <Logo />
        </div>
        <div>{isMobile ? this.renderMobileItems() : this.renderDesktopItems(hoveredItem)}</div>
      </div>
    );
  }
}
