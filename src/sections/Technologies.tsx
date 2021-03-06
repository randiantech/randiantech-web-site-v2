import React from "react";
import { ImageGallery } from "../components/ImageGallery";
import { isMobileWidth } from "../utils";

class Technologies extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
    };
  }

  render() {
    const { isMobile } = this.state;
    return (
      <ImageGallery
        items={
          isMobile
            ? [1, 2, 3, 4, 5, 8, 9, 20]
            : [
                1,
                2,
                3,
                4,
                6,
                10,
                7,
                8,
                9,
                5,
                11,
                12,
                13,
                14,
                15,
                16,
                17,
                20,
                19,
                18,
              ]
        }
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

export default Technologies;