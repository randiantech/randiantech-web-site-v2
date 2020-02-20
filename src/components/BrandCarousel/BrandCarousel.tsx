import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';
import Logo from '../Logo/Logo';
import './BrandCarousel.css';

const MOBILE_WIDTH = 1200;

interface CarouselState {
  isMobile: boolean;
}

const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export default class BrandCarousel extends React.Component<any, CarouselState> {
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
        <div>
            CAROUSEL
        </div>
    );
  }
}