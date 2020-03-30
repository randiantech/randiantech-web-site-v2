import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.css';

export default class Logo extends React.Component {
  render() {
    return (
      <Link className="header-logo-item-wrapper" to="/">
        <span className="header-logo-container">
          <span className="header-logo-container-logo-left-side">Randian</span>
          <span className="header-logo-container-logo-right-side">tech</span>
        </span>
      </Link>
    );
  }
}
