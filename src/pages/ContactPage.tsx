import React from "react";
import styled from "styled-components";
import { color, size, dist } from "../theme";
import { ContactUsSection } from "../sections/ContactUsSection/ContactUsSection";
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
  top: 50%;
  left: calc(100% - 500px);
  width: 300px;
  color: white;
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
    box-shadow: 20px 20px 60px var(--main-deg-app-color),
      -20px -20px 60px var(--main-app-color);
  }
`;

export const ContactPage = React.memo(() => (
  <div>
    <Image>
      <Label>
        <div className="label">We are Ready.</div>
      </Label>
      <ImageGallerySection images={headerImages} />
    </Image>
    <ContactUsSection isMobile={false} />
  </div>
));
