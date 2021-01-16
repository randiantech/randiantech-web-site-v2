/*eslint-disable jsx-a11y/alt-text*/

import React from "react";
import styled from "styled-components";
import { Logo } from "../components/Logo";

interface FrontImageProps {
  isMobile: boolean;
}

const WrapperDesktop = styled.div`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: calc(100vh - 67px);
  width: 100%;
  background-color: var(--main-app-color);
  overflow: hidden;
  border-right: 5px solid var(--main-app-color);

  .image {
    height: 100%;
    min-width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  .fi-content {
    position: absolute;
    bottom: 9%;
    left: 3%;
    padding: var(--main-item-distance);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    transition: transform 200ms ease-in-out;
    transform-origin: center;
    cursor: default;
    opacity: 0.9;
    text-align: center;
    color: black;
    background-color: var(--main-app-color);

    &:hover {
      transform: scale(1.05);
      box-shadow: 20px 20px 60px var(--main-app-color),
        -20px -20px 60px var(--main-app-color);
    }

    .text {
      font-size: 35px;
      color: black;
    }
  }
`;

const WrapperMobile = styled.div`
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: calc(100vh - 100px);
  background-color: var(--main-app-color);
  overflow: hidden;

  .image {
    height: 100%;
    min-width: 100%;
    -webkit-filter: grayscale(100%);
    filter: grayscale(100%);
  }

  .fi-content {
    position: absolute;
    bottom: 100px;
    width: 94%;
    color: black;
    opacity: 0.9;
    text-align: center;
    background-color: lightgray;
    border-radius: 45px;
    border: 2px solid black;
    left: 3%;
    right: 3%;

    .text {
      font-size: 35px;
      color: black;
      font-weight: bolder;
      line-height: 40px;
    }
  }
`;

class FrontImage extends React.Component<FrontImageProps, any> {
  render() {
    const { isMobile } = this.props;
    const Wrapper = isMobile ? WrapperMobile : WrapperDesktop;
    return (
      <Wrapper>
        <img
          className="image"
          src={
            isMobile
              ? "/images/front/office-mobile.jpg"
              : "/images/front/office-desktop.jpg"
          }
        />
        <div
          className={`fi-content${
            isMobile ? " rt-std-top-padding rt-std-bottom-padding" : ""
          }`}
        >
          <span>
            <Logo color="#FF3970" />
            <span className="text">
              {" "}
              {isMobile ? <br /> : ""} is your partner <br /> to craft{" "}
              {isMobile ? <br /> : " "}
              <span className="front-image-section-instantly-loved-text">
                SUPERB
              </span>{" "}
              software.
            </span>
          </span>
        </div>
      </Wrapper>
    );
  }
}

export default FrontImage;
