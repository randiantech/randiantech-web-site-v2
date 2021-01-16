import React from "react";
import { ImageGallery } from "../components/ImageGallery";

const Brand = React.memo((isMobile) => {
  return (
    <ImageGallery
      items={[1, 2, 3, 5, 10]}
      path="/images/clients"
      imgFilenamePrefix="c"
      imageType="png"
      title="Partners"
      altText="Randiantech"
      rows={1}
      filter="grayscale(100%)"
    />
  );
});

export default Brand;
