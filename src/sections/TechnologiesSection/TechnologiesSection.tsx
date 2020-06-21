import React from 'react';
import ImageGallery from '../../components/ImageGallery/ImageGallery';

export default class TechnologiesSection extends React.Component<any, any> {
  render() {
    return (
      <ImageGallery
        items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        path={'/images/technologies'}
        imgFilenamePrefix={'t'}
        imageType={'png'}
        title={'Technologies'}
        rows={2}
      />
    );
  }
}
