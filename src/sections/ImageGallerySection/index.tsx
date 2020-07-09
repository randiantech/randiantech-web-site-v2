import React from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "https://picsum.photos/id/1015/1000/300/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/300/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/300/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const Wrapper = styled.div`
  padding: 50px;
  padding-left: 0;
  padding-right: 0;
  border-left: 10px solid var(--main-app-color);
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
      />
    </Wrapper>
  );
});
