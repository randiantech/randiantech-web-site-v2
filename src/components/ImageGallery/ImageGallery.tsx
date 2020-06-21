import React from 'react';
import {isMobileWidth} from '../../utils';
import './ImageGallery.css';

const b = 'brand';
const s = 'section';
const m = 'mobile';
const d = 'desktop';
const c = 'container';
const i = 'item';
const rg = 'right';

interface ImageGalleryState {
  isMobile: boolean;
  items: Array<number>;
  path: string;
  imgFilenamePrefix: string;
  imageType: string;
  title: string;
  rows: number;
}

export default class ImageGallery extends React.Component<
  any,
  ImageGalleryState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
      items: props.items || [],
      path: props.path || '',
      imgFilenamePrefix: props.imgFilenamePrefix || '',
      imageType: props.imageType || 'jpg',
      title: props.title || '',
      rows: props.rows || 1,
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
    const {
      isMobile,
      items,
      path,
      imgFilenamePrefix,
      imageType,
      title,
      rows,
    }: ImageGalleryState = this.state;
    return (
      <div
        className={`${b}-${s}-${c}-${
          isMobile ? `${m} rt-std-bottom-padding` : `${d} rt-centered-txt`
        }`}
      >
        <div
          className={`${b}-${s}-${c}-left-${
            isMobile
              ? `${m} rt-std-top-padding rt-std-bottom-padding rt-centered-txt rt-glow-effect rt-linear-grad-bg`
              : `${d} rt-rounded rt-centered-txt`
          }`}
        >
          {title}
        </div>
        <div
          className={`${b}-${s}-${c}-${rg}-${
            isMobile
              ? `${m} rt-centered-txt`
              : `${d}-${rows}l rt-std-top-padding rt-std-bottom-padding`
          }`}
        >
          {items.map((item) => (
            <div key={item} className={`${b}-${s}-${i} rt-centered-txt`}>
              <img
                alt="Randiantech"
                className={`${b}-${s}-${i}-img rt-centered-txt`}
                src={`${path}/${imgFilenamePrefix}${item}.${imageType}`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
