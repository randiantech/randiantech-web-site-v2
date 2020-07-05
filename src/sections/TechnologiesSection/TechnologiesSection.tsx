import React from "react";
import { ImageGallery } from "../../components/ImageGallery";

export default class TechnologiesSection extends React.Component<any, any> {
  render() {
    return (
      <ImageGallery
        items={[
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
        ]}
        path="/images/technologies"
        imgFilenamePrefix="t"
        imageType="png"
        title="Technologies"
        altText="Randiantech"
        itemWidth="100px"
        rows={3}
        itemGreyscale={true}
      />
    );
  }
}
