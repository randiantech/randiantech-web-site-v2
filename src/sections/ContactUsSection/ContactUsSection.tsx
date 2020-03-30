import React from 'react';
import {isMobileWidth} from '../../utils';
import {CONTACT_US_ITEMS} from '../../constants';
import './ContactUsSection.css';

const itemErrorKey = (id: string) =>
  `error${id.charAt(0).toUpperCase() + id.substring(1)}`;

export default class ContactUsSection extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    let initialState: any = {};
    CONTACT_US_ITEMS.forEach(item => {
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
    this.setState({[itemErrorKey(item.id)]: !item.isValid(value)});
  }

  validateAllInputs() {
    CONTACT_US_ITEMS.forEach(item => {
      const value = this.state[item.id];
      this.setState({[itemErrorKey(item.id)]: !item.isValid(value)});
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
          Send
        </div>
      </div>
    );
  }

  renderContactUsLabel() {
    return <div className="contact-us-section-container-title">Contact Us</div>;
  }

  renderFormItems() {
    return (
      <div className="contact-us-section-container-form">
        {CONTACT_US_ITEMS.map(item => {
          console.log(
            `item = ${item.id} | itemErrorKey(item.id) => ${itemErrorKey(
              item.id
            )} | this.state[itemErrorKey(item.id)] => ${
              this.state[itemErrorKey(item.id)]
            }`
          );
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
              <input
                className="contact-us-section-item-input"
                type="text"
                name={`randiantech-${item.id}`}
                onChange={e => {
                  this.setState({[item.id]: e.target.value});
                  this.validateInput(item, e.target.value);
                }}
                onFocus={e => this.validateInput(item, e.target.value)}
              />
            </div>
          );
        })}
      </div>
    );
  }

  render() {
    return (
      <div className="contact-us-section-container">
        {this.renderContactUsLabel()}
        {this.renderFormItems()}
        {this.renderSendButton()}
      </div>
    );
  }
}
