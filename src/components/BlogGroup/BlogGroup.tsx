import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import Logo from '../Logo/Logo';
import './BlogGroup.css';

const MOBILE_WIDTH = 1200;

interface BlogGroupState {
  isMobile: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

const ITEMS = [
  {},
  {
    title: 'Some Title 2',
    description:
      'fkfjdklf fkdsjfklsdjf jfkdlsjfklsdjfkl jfdksjfsdklf jfklsdjfsdkf jfksldjf',
    img: '/blog/img1.jpg',
    url: 'Some URL',
  },
  {
    title: 'Some Title 3',
    description:
      'fkfjdklf fkdsjfklsdjf jfkdlsjfklsdjfkl jfdksjfsdklf jfklsdjfsdkf jfksldjf',
    img: '/blog/img2.jpg',
    url: 'Some URL',
  },
  {
    title: 'Some Title 4',
    description:
      'fkfjdklf fkdsjfklsdjf jfkdlsjfklsdjfkl jfdksjfsdklf jfklsdjfsdkf jfksldjf',
    img: '/blog/img3.jpg',
    url: 'Some URL',
  },
  {
    title: 'Some Title 5',
    description:
      'fkfjdklf fkdsjfklsdjf jfkdlsjfklsdjfkl jfdksjfsdklf jfklsdjfsdkf jfksldjf',
    img: '/blog/img4.jpg',
    url: 'Some URL',
  },
  {
    title: 'Some Title 6',
    description:
      'fkfjdklf fkdsjfklsdjf jfkdlsjfklsdjfkl jfdksjfsdklf jfklsdjfsdkf jfksldjf',
    img: '/blog/img5.jpg',
    url: 'Some URL',
  }
];

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
        className={`blog-group-container-${isMobile ? 'mobile' : 'desktop'}`}
      >
        {ITEMS.map((item, index) => {
          if (index === 0) {
            return (
              <div className="blog-group-first-item">News and Articles</div>
            );
          }
          return (
            <div className="blog-group-item-desktop">
              <div>
                <img src={item.img} className="blog-group-item-img-desktop" />
              </div>
              <div>
                <div className="blog-group-item-title-desktop">
                  {item.title}
                </div>
                <div className="blog-group-item-description-desktop">
                  {item.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
