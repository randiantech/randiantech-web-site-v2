/*eslint-disable jsx-a11y/alt-text*/

import React from 'react';
import {isMobileWidth} from '../../utils';
import {BLOG_ITEMS} from '../../data';
import './BlogSection.css';

interface BlogGroupState {
  isMobile: boolean;
}

export default class BlogGroup extends React.Component<any, BlogGroupState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({isMobile: isMobileWidth()});
  }

  render() {
    const {isMobile}: BlogGroupState = this.state;
    return (
      <div
        className={`blog-section-container-${
          isMobile
            ? 'mobile'
            : 'desktop rt-std-right-padding rt-std-bottom-padding'
        }`}
      >
        {BLOG_ITEMS.map((item, index) => {
          const {url, title, description, img} = item;
          if (index === 0) {
            return (
              <div
                key={`blog-setion-item-first`}
                className={`${
                  isMobile
                    ? 'blog-section-first-item-mobile rt-std-bottom-padding rt-std-top-padding rt-glow-effect rt-linear-grad-bg'
                    : 'blog-section-first-item-desktop rt-rounded'
                }`}
              >
                News and Articles
              </div>
            );
          }
          return (
            <a
              key={`blog-setion-item-${index}`}
              className="blog-section-item-desktop rt-std-left-padding"
              href={url}
              target="_blank"
            >
              <div>
                <img
                  src={img}
                  className="blog-section-item-img-desktop rt-rounded"
                />
              </div>
              <div className="blog-section-item-details">
                <div className="blog-section-item-title-desktop">{title}</div>
                <div className="blog-section-item-description-desktop">
                  {description}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    );
  }
}
