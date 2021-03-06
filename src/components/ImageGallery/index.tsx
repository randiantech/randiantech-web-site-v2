import React, { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { Styleable } from "../../utils";

interface ImageGalleryProps extends Styleable {
  items?: any;
  path?: string;
  imgFilenamePrefix?: string;
  imageType?: string;
  title?: string;
  rows?: number;
  altText?: string;
  itemWidth?: string;
  itemGreyscale?: boolean;
  filter?: string;
}

const WrapperDesktop = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr var(--main-item-distance);
  border: 50px solid var(--main-app-color);
  border-bottom: none;
  border-top: none;
  border-right: none;
  padding-top: var(--main-item-distance);

  .left-pane {
    display: grid;
    background: var(--main-sec-app-color);
    color: var(--main-app-color);
    font-size: 35px;
    font-weight: bolder;
    box-shadow: -20px 20px 60px var(--main-app-shadow-color), 20px -20px 60px var(--main-app-color);
    border-top-right-radius: 45px;
    border-bottom-right-radius: 45px;
    border-top-left-radius: 45px;
  }

  .right-pane {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: ${(props: ImageGalleryProps) =>
      `repeat(${props.rows}, 1fr)`};
    max-width: 100%;

    .item {
      display: grid;
      grid-template-rows: 1fr;
      font-size: 18px;

      .img {
        width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        transition: transform 200ms ease-in-out;
        transform-origin: center;
        filter: ${(props: ImageGalleryProps) => `${props.filter}`};
      }

      .img:hover {
        transform: scale(1.2);
      }
    }
  }
`;

const WrapperMobile = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;
  padding-bottom: 50px;

  .left-pane {
    color: var(--main-app-deg-color);
    font-size: 35px;
    opacity: 0.9;
    font-weight: bolder;
    padding: 50px;
  }

  .right-pane {
    display: grid;
    grid-row-gap: 20px;
    padding-top: var(--main-item-distance);

    .item {
      display: grid;
      grid-template-rows: 1fr;
      min-height: 100px;
      font-size: 18px;

      .img {
        width: 50%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        filter: ${(props: ImageGalleryProps) => `${props.filter}`};
      }

      .img:hover {
        transform: scale(1.05);
      }
    }
  }
`;

export const ImageGallery = (props: ImageGalleryProps) => {
  const items = props.items || [];
  const path = props.path || "";
  const imgFilenamePrefix = props.imgFilenamePrefix || "";
  const imageType = props.imageType || "jpg";
  const title = props.title || "";
  const altText = props.altText;
  const { state } = useContext(AppContext);
  const { isMobile } = state;
  const Wrapper = isMobile ? WrapperMobile : WrapperDesktop;

  return (
    <Wrapper className={`${isMobile && "rt-centered-txt"}`} {...props}>
      <div
        className={`left-pane ${
          isMobile
            ? "rt-centered-txt rt-linear-bg"
            : "rt-centered-txt"
        }`}
      >
        {title}
      </div>
      <div className={`right-pane ${isMobile && "rt-centered-txt"}`}>
        {items.map((item: any) => (
          <div key={item} className="item rt-centered-txt">
            <img
              alt={altText}
              className="img rt-centered-txt"
              src={`${path}/${imgFilenamePrefix}${item}.${imageType}`}
            />
          </div>
        ))}
      </div>
    </Wrapper>
  );
};
