import React from "react";
import { ImageGallery } from "../../components/ImageGallery";

export const BrandSection = React.memo((isMobile) => {
  return (
    <ImageGallery
      items={[1, 2, 4, 6, 10]}
      path="/images/clients"
      imgFilenamePrefix="c"
      imageType="png"
      title="Trusting Us"
      altText="Randiantech"
      rows={1}
    />
  );
});
