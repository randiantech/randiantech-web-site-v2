import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import './Logo.css';

export default class Logo extends React.Component {
  render() {
    return (
      <span className="header-logo-container">
        <span className="header-logo-container-logo-left-side">Randian</span>
        <span className="header-logo-container-logo-right-side">tech</span>
      </span>
    );
  }
}
