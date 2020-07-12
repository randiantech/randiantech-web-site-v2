import React from "react";
import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const Wrapper = styled.div`
  padding: ${(props: any) => (props.padding ? props.padding : "50px")};
  padding-top: 0;
  padding-left: 0;
  padding-bottom: 0;
  padding-right: 0;
`;

export const ImageGallerySection = React.memo((props: any) => {
  return (
    <Wrapper {...props}>
      <ImageGallery
        items={props.images}
        showFullscreenButton={false}
        showPlayButton={false}
        showThumbnails={false}
        slideInterval={5000}
        showNav={false}
        autoPlay={true}
      />
    </Wrapper>
  );
});
