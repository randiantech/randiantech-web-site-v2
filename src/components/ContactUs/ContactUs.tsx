import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import './ContactUs.css';

const MOBILE_WIDTH = 1200;

interface ContactUsState {
  isMobile: boolean;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

const ITEMS = [
  {
    label: 'First Name',
    id: 'firstName',
  },
  {
    label: 'Last Name',
    id: 'lastName',
  },
  {
    label: 'Email',
    id: 'email',
  },
  {
    label: 'Phone',
    id: 'phone',
  },
];

export default class ContactUs extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
      errorFirstName: false,
      errorLastName: false,
      errorEmail: false,
      errorPhone: false,
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
    this.setState({errorFirstName: ''});
    this.setState({errorLastName: ''});
    this.setState({errorPhone: ''});
    this.setState({errorEmail: ''});
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  validateInput() {
    const {firstName, lastName, phone, email} = this.state;
    const isValidPhoneNumber = new RegExp(
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    );
    const isValidEmail = new RegExp(
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    );

    this.setState({errorFirstName: firstName.length < 1});
    this.setState({errorLastName: lastName.length < 1});
    this.setState({errorPhone: !isValidPhoneNumber.test(phone)});
    this.setState({errorEmail: !isValidEmail.test(email)});
  }

  render() {
    const {
      isMobile,
      firstName,
      lastName,
      phone,
      email,
      errorFirstName,
      errorLastName,
      errorPhone,
      errorEmail,
    } = this.state;
    return (
      <div className="contact-us-container">
        <div className="contact-us-container-title">Contact Us</div>
        <div className="contact-us-container-form">
          {ITEMS.map(item => (
            <div key={`key-${item.label}`} className="contact-us-item">
              <div className="contact-us-item-label">
                <div>{item.label}</div>
                {this.state[
                  `error${item.id.charAt(0).toUpperCase() +
                    item.id.substring(1)}`
                ] && (
                  <div className="contact-us-item-label-error-container">
                    <img
                      src="./alert-circle.png"
                      className="contact-us-item-label-error"
                    />
                    <span className="contact-us-item-label-error-label">
                      Required
                    </span>
                  </div>
                )}
              </div>
              <input
                defaultValue=""
                className="contact-us-item-input"
                type="text"
                name={`randiantech-${item.id}`}
                onChange={e => {
                  this.setState({[item.id]: e.target.value});
                  this.validateInput();
                }}
                onFocus={() => this.validateInput()}
              />
            </div>
          ))}
        </div>
        <div className="contact-us-send-btn-container">
          <div
            className="contact-us-send-btn"
            onClick={() => this.validateInput()}
          >
            Send
          </div>
        </div>
      </div>
    );
  }
}
