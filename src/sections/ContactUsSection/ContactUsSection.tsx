import React from 'react';
import {isMobileWidth} from '../../utils';
import {CONTACT_US_ITEMS} from '../../constants';
import './ContactUsSection.css';
import circuitImage from '../../../public/circuit.png';

const itemErrorKey = (id: string) =>
  `error${id.charAt(0).toUpperCase() + id.substring(1)}`;

export default class ContactUsSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    let initialState: any = {};
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
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  validateInput(item: any, value: any) {
    this.setState({
      [itemErrorKey(item.id)]: item.isValid && !item.isValid(value),
    });
  }

  validateAllInputs() {
    CONTACT_US_ITEMS.forEach((item) => {
      const value = this.state[item.id];
      this.setState({
        [itemErrorKey(item.id)]: item.isValid && !item.isValid(value),
      });
    });
  }

  renderErrorLabel() {
    return (
      <div className="contact-us-section-item-label-error-container">
        <img
          src="./images/icons/alert-circle.png"
          className="contact-us-section-item-label-error"
          alt="error"
        />
        <span className="contact-us-section-item-label-error-label">
          Required
        </span>
      </div>
    );
  }

  renderSendButton() {
    return (
      <div className="contact-us-section-send-btn-container">
        <div
          className="contact-us-section-send-btn"
          onClick={() => this.validateAllInputs()}
        >
          Send Message
        </div>
      </div>
    );
  }

  renderContactUsLabel() {
    const {isMobile} = this.state;
    return (
      <div
        className={`${
          isMobile
            ? 'contact-us-section-container-title-mobile'
            : 'contact-us-section-container-title-desktop'
        }`}
      ></div>
    );
  }

  renderFormItems() {
    const {isMobile} = this.state;
    return (
      <div
        className={
          isMobile
            ? 'contact-us-section-container-form-wrapper-mobile'
            : 'contact-us-section-container-form-wrapper-desktop'
        }
      >
        <div
          className={
            isMobile
              ? 'contact-us-section-container-form-mobile'
              : 'contact-us-section-container-form-desktop'
          }
        >
          {CONTACT_US_ITEMS.map((item) => {
            const isErrorInItem =
              this.state[itemErrorKey(item.id)] && item.isRequired;
            return (
              <div
                key={`randiantech-key-${item.label}`}
                className="contact-us-section-item"
              >
                <div className="contact-us-section-item-label">
                  <div>{item.label}</div>
                  {isErrorInItem && this.renderErrorLabel()}
                </div>
                {item.style === 'free-text' ? (
                  <textarea
                    className="contact-us-section-item-input-free-text"
                    name={`randiantech-${item.id}`}
                    onChange={(e) => {
                      this.setState({[item.id]: e.target.value});
                      this.validateInput(item, e.target.value);
                    }}
                    onFocus={(e) => this.validateInput(item, e.target.value)}
                  />
                ) : (
                  <input
                    className="contact-us-section-item-input"
                    type="text"
                    name={`randiantech-${item.id}`}
                    onChange={(e) => {
                      this.setState({[item.id]: e.target.value});
                      this.validateInput(item, e.target.value);
                    }}
                    onFocus={(e) => this.validateInput(item, e.target.value)}
                  />
                )}
              </div>
            );
          })}
        </div>
        <div>{this.renderSendButton()}</div>
      </div>
    );
  }

  render() {
    const {isMobile} = this.state;
    return (
      <div
        className={`${
          isMobile
            ? 'contact-us-section-container-mobile'
            : 'contact-us-section-container-desktop'
        }`}
      >
        {this.renderContactUsLabel()}
        {this.renderFormItems()}
      </div>
    );
  }
}
