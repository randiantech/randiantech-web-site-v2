import React from "react";
import ImageGallery from "../../components/ImageGallery/ImageGallery";

export const BrandSection = React.memo(() => {
  return (
    <ImageGallery
      items={[1, 2, 4, 6, 10]}
      path="/images/clients"
      imgFilenamePrefix="c"
      imageType="png"
      title="Trusting Us"
    />
  );
});