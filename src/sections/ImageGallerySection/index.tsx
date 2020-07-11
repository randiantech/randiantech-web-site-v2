import React from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/about-1.png",
  },
];

const Wrapper = styled.div`
  padding: 50px;
  padding-top: 0;
  padding-left: 0;
  padding-bottom: 0;
  padding-right: 0;
`;

export const ImageGallerySection = React.memo(() => {
  return (
    <Wrapper>
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        slideInterval={5000}
        showNav={false}
      />
    </Wrapper>
  );
});
