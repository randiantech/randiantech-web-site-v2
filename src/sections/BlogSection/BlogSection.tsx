import React from 'react';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
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
        className={`blog-section-container-${isMobile ? 'mobile' : 'desktop'}`}
      >
        {BLOG_ITEMS.map((item, index) => {
          const {url, title, description, img} = item;
          if (index === 0) {
            return (
              <div className="blog-section-first-item">News and Articles</div>
            );
          }
          return (
            <a className="blog-section-item-desktop" href={url}>
              <div>
                <img src={img} className="blog-section-item-img-desktop" />
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
