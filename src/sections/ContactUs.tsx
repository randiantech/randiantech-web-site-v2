import React from "react";
import styled from "styled-components";
import { isMobileWidth } from "../utils";
import { CONTACT_US_ITEMS } from "../data";
import "./ContactUsSection.css";
import ReactLoading from "react-loading";
import { SimpleButton } from "../components/SimpleButton";

const WrapperDesktop = styled.div`
  .container {
    display: grid;
    grid-template-columns: 1fr 500px;
    padding-top: var(--main-item-distance);
    padding-right: var(--main-item-distance);
    margin-bottom: var(--main-item-distance);
    border-left: 50px solid var(--main-app-color);
    border-bottom: none;
    border-top: none;
    color: var(--main-deg-app-color);
  }
`;

const WrapperMobile = styled.div`
  .container {
    display: grid;
    grid-template-rows: fit-content(200px) 1fr;
    border-left: 10px solid var(--main-deg-app-color);
  }
`;

const WrapperItemDesktop = styled.div`
  .item-container {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 250px;
  }
`;

const WrapperItemMobile = styled.div`
  .item-container {
    display: grid;
    padding-right: 10px;
    padding-top: var(--main-item-distance);
    grid-template-rows: 1fr 1fr 1fr 1fr 250px;
  }
`;

const WrapperErrorLabel = styled.div`
  display: grid;
  grid-column-gap: 5px;
  grid-template-columns: fit-content(130px) 1fr;
  align-items: center;

  img {
    display: grid;
    width: 15px;
    text-align: left;
    filter: invert(27%) sepia(85%) saturate(1985%) hue-rotate(327deg)
      brightness(86%) contrast(82%);
  }

  span {
    color: var(--main-sec-app-color);
    font-size: smaller;
  }
`;

const WrapperSendButton = styled.div`
  width: 140px;
  float: left;
  padding-top: 25px;
  font-size: 18px;
`;

const itemErrorKey = (id: string) =>
  `error${id.charAt(0).toUpperCase() + id.substring(1)}`;

class ContactUs extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    let initialState: any = {
      isLoading: false,
    };
    CONTACT_US_ITEMS.forEach((item) => {
      initialState[item.id] = item.initialValue;
      initialState[itemErrorKey(item.id)] = false;
    });
    this.state = {
      isMobile: isMobileWidth(),
      ...initialState,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isMobile: isMobileWidth() });
  }

  validateInput(item: any, value: any) {
    this.setState({
      [itemErrorKey(item.id)]: item.isValid && !item.isValid(value),
    });
  }

  validateAllInputs() {
    let errors = 0;
    CONTACT_US_ITEMS.forEach((item) => {
      const value = this.state[item.id];
      let itemIsInvalid = item.isValid && !item.isValid(value);
      if (itemIsInvalid && item.isRequired) ++errors;
      this.setState({
        [itemErrorKey(item.id)]: itemIsInvalid,
      });
    });
    return errors === 0;
  }

  submitMessage(e: any) {
    e.preventDefault();
    this.setState({ isLoading: true });
    if (this.validateAllInputs()) {
      fetch("http://192.241.136.96:3005/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state),
      })
        .then(() => {
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            comments: "",
            isLoading: false,
          });
        })
        .catch(() => {
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            comments: "",
            isLoading: false,
          });
        });
    }
  }

  renderErrorLabel() {
    return (
      <WrapperErrorLabel>
        <img src="./images/icons/alert-circle.png" alt="error" />
        <span>Required</span>
      </WrapperErrorLabel>
    );
  }

  renderSendButton() {
    const { isMobile } = this.state;
    return (
      <WrapperSendButton
        className={`${
          isMobile ? "rt-std-left-padding-5perc" : "rt-std-left-padding"
        }`}
      >
        <SimpleButton text="Submit" onClick={(e) => this.submitMessage(e)} />
      </WrapperSendButton>
    );
  }

  renderContactUsLabel() {
    const { isMobile } = this.state;
    return (
      <div
        className={`${
          isMobile
            ? "contact-us-section-container-title-mobile rt-std-top-padding rt-std-bottom-padding rt-glow-effect rt-linear-grad-bg"
            : "contact-us-section-container-title-desktop rt-std-right-padding"
        }`}
      >
        <div className="contact-us-section-container-title-inner-message">
          Let's craft it together.
        </div>
      </div>
    );
  }

  renderFormItems() {
    const { isMobile } = this.state;
    const WrapperItem = isMobile ? WrapperItemMobile : WrapperItemDesktop;
    return (
      <WrapperItem>
        <div className="item-container">
          {CONTACT_US_ITEMS.map((item) => {
            const isErrorInItem =
              this.state[itemErrorKey(item.id)] && item.isRequired;
            return (
              <div
                key={`randiantech-key-${item.label}`}
                className={`contact-us-section-item ${
                  !isMobile
                    ? "rt-std-left-padding"
                    : "rt-std-left-padding-5perc"
                }`}
              >
                <div className="contact-us-section-item-label">
                  <div>{item.label}</div>
                  {isErrorInItem && this.renderErrorLabel()}
                </div>
                {item.style === "free-text" ? (
                  <textarea
                    className={`${
                      isMobile
                        ? "contact-us-section-item-input-free-text-mobile"
                        : "contact-us-section-item-input-free-text"
                    }`}
                    name={`randiantech-${item.id}`}
                    onChange={(e) => {
                      this.setState({ [item.id]: e.target.value });
                      this.validateInput(item, e.target.value);
                    }}
                    onFocus={(e) => this.validateInput(item, e.target.value)}
                    value={this.state[item.id]}
                  />
                ) : (
                  <input
                    id={item.id}
                    className={`${
                      isMobile
                        ? "contact-us-section-item-input-mobile"
                        : "contact-us-section-item-input"
                    }`}
                    type="text"
                    name={`randiantech-${item.id}`}
                    onChange={(e) => {
                      this.setState({ [item.id]: e.target.value });
                      this.validateInput(item, e.target.value);
                    }}
                    value={this.state[item.id]}
                    onFocus={(e) => this.validateInput(item, e.target.value)}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div>{this.renderSendButton()}</div>
      </WrapperItem>
    );
  }

  render() {
    const { isMobile, isLoading } = this.state;
    const Wrapper = isMobile ? WrapperMobile : WrapperDesktop;
    return (
      <Wrapper>
        {isMobile && (
          <div className={`left-pane rt-centered-txt rt-linear-bg`}>
            Contact Us
          </div>
        )}
        <div className="container">
          {isLoading && (
            <span className="rts-page-loading">
              <ReactLoading type="spin" color="#ff4970" />
            </span>
          )}
          {!isMobile && this.renderContactUsLabel()}
          {this.renderFormItems()}
        </div>
      </Wrapper>
    );
  }
}

export default ContactUs;
