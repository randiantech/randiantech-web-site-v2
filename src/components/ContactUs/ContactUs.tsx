import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import './ContactUs.css';

const MOBILE_WIDTH = 1200;

interface ContactUsState {
  isMobile: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export default class ContactUs extends React.Component<any, ContactUsState> {
  constructor(props: any) {
    super(props);
    this.state = {isMobile: isMobileWidth()};
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  render() {
    const {isMobile} = this.state;
    return (
      <div className="contact-us-container">
        <div className="contact-us-container-title">Contact Us</div>
        <div className="contact-us-container-options">
            <div>FORM</div>
            <div>Details</div>
        </div>
        <div className="contact-us-container-img">img</div>
      </div>
    );
  }
}
