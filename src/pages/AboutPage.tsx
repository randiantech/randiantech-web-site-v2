import React from 'react';
import {ABOUT_PAGE} from '../data';

export default class AboutPage extends React.Component {
  render() {
    const {header, body, footer} = ABOUT_PAGE;
    return (
      <>
        <div className="about-page-header-container">
          <div className="about-page-header-title">{header.title}</div>
          <div className="about-page-header-subtitle">{header.subtitle}</div>
          <div className="about-page-header-desc">{header.desc}</div>
        </div>
        <div className="about-page-body-container">
          <div className="about-page-body-title">{body.title}</div>
          <div className="about-page-body-desc">{body.desc}</div>
          <div className="about-page-body-title">{body.list.title}</div>
          {body.list.items.map((item, idx) => (
            <div
              className="about-page-body-list-item"
              key={`rt-page-item-${idx}`}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="about-page-footer-container">
          <div>{footer.image}</div>
        </div>
      </>
    );
  }
}
