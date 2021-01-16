import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import ContactUs from "../sections/ContactUs";
import ImageGallery from "../sections/ImageGallery";
import { AppContext } from "../AppContext";

const headerImages = [
  {
    original: "/images/contact-us-4.png",
  },
];

const Image = styled.div`
  border-bottom: 1px solid var(--main-app-color);
`;

export const Label = styled.div`
  position: absolute;
  top: 150px;
  left: calc(100% - 500px);
  width: 300px;
  color: var(--main-deg-app-color);
  font-weight: bolder;
  background: var(--main-app-color);
  padding: var(--main-item-distance);
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
    box-shadow: 20px 20px 60px var(--main-app-color),
      -20px -20px 60px var(--main-app-color);
  }
`;

const Contact = React.memo(() => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const { state } = useContext(AppContext);
  const { isMobile } = state;

  return (
    <div>
      <Image>
        {!isMobile && (
          <Label>
            <div className="label">We are Ready.</div>
          </Label>
        )}
        <ImageGallery images={headerImages} />
      </Image>
      <ContactUs isMobile={false} />
    </div>
  );
});

export default Contact;