import React from 'react';
import {Link} from 'react-router-dom';
import './Logo.css';
import {c, h, l, i, w, lf, rg, s} from '../../meta';

export default class Logo extends React.Component {
  render() {
    return (
      <Link className={`${h}-${l}-${i}-${w}`} to="/">
        <span className={`${h}-${l}-${c}`}>
          <span className={`${h}-${l}-${c}-${l}-${lf}-${s}`}>Randian</span>
          <span className={`${h}-${l}-${c}-${l}-${rg}-${s}`}>tech</span>
        </span>
      </Link>
    );
  }
}
