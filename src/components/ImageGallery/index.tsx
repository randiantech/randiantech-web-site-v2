import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AppContext } from "../../AppContext";
import { Styleable } from "../../utils";
import { size, color, dist } from "../../theme";

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
}

const WrapperDesktop = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr ${dist.defItemDistance};
  border: 10px solid ${color.defAppColor};
  border-bottom: none;
  border-top: none;
  border-right: none;
  padding-top: ${dist.defItemDistance};

  .left-pane {
    display: grid;
    background: ${color.defSecAppColor};
    color: ${color.defAppColor};
    font-size: 35px;
    font-weight: bolder;
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
        width: 60%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        transition: transform 200ms ease-in-out;
        transform-origin: center;
        filter: ${(props) => props.itemGreyscale && "grayscale(100%)"};
      }

      .img:hover {
        transform: scale(1.2);
        filter: none;
      }
    }
  }
`;

const WrapperMobile = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 1fr;

  .left-pane {
    color: white;
    font-size: 35px;
    opacity: 0.9;
    font-weight: bolder;
  }

  .right-pane {
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    padding-top: ${dist.defItemDistance};

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
        filter: blur(20px) grayscale(20%);
      }

      .img:hover {
        transform: scale(1.05);
        filter: none;
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
            ? "rt-centered-txt rt-glow-effect rt-linear-grad-bg"
            : "rt-rounded rt-centered-txt"
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
