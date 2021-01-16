import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { size, dist } from "../theme";
import { ABOUT_PAGE } from "../data";
import ImageGallery from "./ImageGallery";
import { AppContext } from "../AppContext";

const headerImages = [
  {
    original: "/images/about-1.png",
  },
];

const descImages = [
  {
    original: "/images/about-4.png",
  },
];

const descBodyImages = [
  {
    original: "/images/about-5.png",
  },
];

const bottomImages = [
  {
    original: "/images/about-6.png",
  },
];

export const Wrapper = styled.div`
  background: linear-gradient(
    135deg,
    #7b4da5,
    var(--main-deg-app-color) 20%,
    grey
  );
  border-left: 10px solid var(--main-app-color);
  color: white;

  .desc-img-1 {
    display: grid;
    max-width: 600px;
  }

  .underline {
    border-bottom: 2px solid var(--main-app-color);
  }
`;

export const HeaderDesktop = styled.div`
  display: grid;
  grid-template-rows: fit-min-content fit-min-content fit-min-content;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};

  .title {
    font-size: ${size.extraFontSize};
    font-weight: bolder;
    border-bottom: 10px solid var(--main-app-color);
    width: fit-content;
  }

  .subtitle {
    font-style: italic;
    font-weight: bold;
    font-size: ${size.titleFontSize};
    margin-bottom: 25px;
    padding-top: 30px;
  }

  .description {
    display: grid;
    grid-template-columns: 3fr 2fr;
    align-items: center;

    .text {
      padding-top: 25px;
      padding-bottom: 25px;
      padding-right: 80px;
      text-align: justify;
      font-size: 24px;

      .item {
        padding-bottom: 30px;
      }
    }
  }
`;

export const HeaderMobile = styled.div`
  display: grid;
  grid-template-rows: fit-min-content fit-min-content fit-min-content;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};

  .title {
    font-size: ${size.extraFontSize};
    font-weight: bolder;
    border-bottom: 10px solid var(--main-app-color);
    margin-bottom: 25px;
    width: fit-content;
    text-align: center;
  }

  .subtitle {
    font-style: italic;
    font-weight: bold;
    font-size: ${size.titleFontSize};
    margin-bottom: 25px;
    padding-top: 30px;
    text-align: center;
  }

  .description {
    display: grid;
    grid-template-rows: fit-min-content fit-min-content;
    align-items: center;

    .text {
      padding-top: 25px;
      padding-bottom: 25px;
      text-align: center;
      font-size: 24px;

      .item {
        padding-bottom: 30px;
      }

      .list-title {
        background-color: var(--main-app-color);
        border-radius: 5px;
        font-weight: bolder;
        padding: 25px;
      }
    }
  }
`;

export const Label = styled(Link)`
  position: relative;
  margin-left: auto;
  width: 300px;
  margin-left: ${dist.defItemDistance};
  color: var(--main-deg-app-color);
  font-weight: bolder;
  background: var(--main-app-color);
  padding: ${dist.defItemDistance};
  border-radius: 50px;
  border-bottom-left-radius: 0;
  cursor: pointer;
  z-index: 1;
  font-size: 25px;
  text-align: center;
  text-decoration: none;
  bottom: 75px;

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 60px var(--main-app-color),
      -20px -20px 60px var(--main-app-color);
  }
`;

export const Footer = styled.div`
  padding: 0;
  padding-top: ${dist.defItemDistance};
  font-size: ${size.defFontSize};
`;

const About = () => {
  const { header, body } = ABOUT_PAGE;
  const { state } = useContext(AppContext);
  const { isMobile } = state;

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const desc1Text = header.desc;
  const desc2Text = header.desc2;
  const desc3Text = header.desc3;
  const descBody = body.desc;

  const Header = isMobile ? HeaderMobile : HeaderDesktop;

  return (
    <>
      <ImageGallery images={headerImages} />
      <Wrapper>
        <Header>
          <div className="title">
            <div>{header.title}</div>
          </div>
          <div className="subtitle">{header.subtitle}</div>
          <div className="description">
            {isMobile && (
              <div className="desc-img-1">
                <ImageGallery images={descImages} />
              </div>
            )}
            <div className="text">
              <div
                className="item"
                dangerouslySetInnerHTML={{ __html: desc1Text }}
              />
              <div
                className="item"
                dangerouslySetInnerHTML={{ __html: desc2Text }}
              />
              <div
                className="item"
                dangerouslySetInnerHTML={{ __html: desc3Text }}
              />
            </div>
            {!isMobile && (
              <div className="desc-img-1">
                <ImageGallery images={descImages} />
              </div>
            )}
          </div>
        </Header>
        <Header>
          <div className="title">
            <div>{body.title}</div>
          </div>
          <div className="subtitle">{header.subtitle}</div>
          <div className="description">
            {isMobile && (
              <div className="desc-img-1">
                <ImageGallery images={descBodyImages} />
              </div>
            )}
            <div className="text">
              <div
                className="item"
                dangerouslySetInnerHTML={{ __html: descBody }}
              ></div>
            </div>
            {!isMobile && (
              <div className="desc-img-1">
                <ImageGallery images={descBodyImages} />
              </div>
            )}
          </div>
        </Header>
        <Footer>
          <Label to="/contact">Contact Us</Label>
          {!isMobile ? <ImageGallery images={bottomImages} /> : <span />}
        </Footer>
      </Wrapper>
    </>
  );
};

export default About;
