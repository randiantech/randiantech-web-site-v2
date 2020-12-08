import React from "react";
import styled from "styled-components";
import { color, dist } from "../theme";
import { PositionsSection } from "../sections/PositionsSection/PositionsSection";
import { ImageGallerySection } from "../sections/ImageGallerySection";

const headerImages = [
  {
    original: "/images/contact-us-3.png",
  },
];

const Image = styled.div`
  border-bottom: 1px solid ${color.defAppColor};
`;

export const Label = styled.div`
  position: absolute;
  top: 150px;
  left: calc(100% - 500px);
  width: 300px;
  color: var(--main-deg-app-color);
  font-weight: bolder;
  background: var(--main-app-color);
  padding: ${dist.defItemDistance};
  border-radius: 50px;
  border-bottom-left-radius: 0;
  cursor: pointer;
  z-index: 1;

  .label {
    font-size: 25px;
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 60px var(--main-app-color), -20px -20px 60px var(--main-app-color);
  }
`;

export const FrontendPage = React.memo(() => (
  <div>
    <Image>
      <Label>
        <div className="label">Lets's craft together!</div>
      </Label>
      <ImageGallerySection images={headerImages} />
    </Image>
    <PositionsSection isMobile={false} />
  </div>
));
