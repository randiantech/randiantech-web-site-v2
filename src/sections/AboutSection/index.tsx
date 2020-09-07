import React, { useEffect } from "react";
import styled from "styled-components";
import { color, size, dist } from "../../theme";
import { ABOUT_PAGE } from "../../data";
import { ImageGallerySection } from "../ImageGallerySection";
import { Link } from "react-router-dom";

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
    var(--main-sec-app-color) 0%,
    white
  );
  border-left: 10px solid ${color.defAppColor};
  color: white;

  .desc-img-1 {
    display: grid;
    max-width: 600px;
  }

  .underline {
    border-bottom: 2px solid ${color.defAppColor};
  }
`;

export const Header = styled.div`
  display: grid;
  grid-template-rows: fit-min-content fit-min-content fit-min-content;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};

  .title {
    font-size: ${size.extraFontSize};
    font-weight: bolder;
    border-bottom: 10px solid ${color.defAppColor};
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

export const Body = styled.div`
  display: grid;
  padding: ${dist.defItemDistance};
  padding-top: 0;
  font-size: ${size.defFontSize};

  .title {
    font-size: ${size.extraFontSize};
    font-weight: bolder;
    border-bottom: 10px solid ${color.defAppColor};
    margin-bottom: 25px;
    width: fit-content;
  }

  .description-wrapper {
    display: grid;
    grid-template-columns: 2fr 3fr;
    align-items: center;
    .description {
      font-size: 24px;
    }
  }

  .list-title {
    margin-top: 30px;
    font-size: 24px;
    border-bottom: 3px solid ${color.defAppColor};
    margin-bottom: 25px;
    font-weight: bolder;
    width: fit-content;
  }

  .list-item-container {
    .item {
      font-size: 24px;
      padding-bottom: 20px;
    }
  }
`;

export const Label = styled(Link)`
  position: relative;
  margin-left: auto;
  width: 300px;
  margin-left: ${dist.defItemDistance};
  color: white;
  font-weight: bolder;
  background: var(--main-app-color);
  padding: ${dist.defItemDistance};
  border-radius: 50px;
  border-bottom-left-radius: 0;
  cursor: pointer;
  z-index: 1;
  font-size: 25px;
  text-align: center;
  color: white;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 60px var(--main-deg-app-color),
      -20px -20px 60px var(--main-app-color);
  }
`;

export const Footer = styled.div`
  padding: 0;
  padding-top: ${dist.defItemDistance};
  font-size: ${size.defFontSize};
`;

const AboutSection = () => {
  const { header, body } = ABOUT_PAGE;
  const { items } = body.list;

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  const desc1Text = header.desc;
  const desc2Text = header.desc2;
  const desc3Text = header.desc3;

  const descBody = body.desc;

  return (
    <>
      <ImageGallerySection images={headerImages} />
      <Wrapper>
        <Header>
          <div className="title">
            <div>{header.title}</div>
          </div>
          <div className="subtitle">{header.subtitle}</div>
          <div className="description">
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
            <div className="desc-img-1">
              <ImageGallerySection images={descImages} />
            </div>
          </div>
        </Header>
        <Body>
          <div className="title">
            <div>{body.title}</div>
          </div>
          <div className="description-wrapper">
            <ImageGallerySection images={descBodyImages} />
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: descBody }}
            />
          </div>
          <div className="list-title">{body.list.title}</div>
          <div className="list-item-container">
            {items.map((item, idx) => (
              <div className="item" key={`rt-page-item-${idx}`}>
                {item}
              </div>
            ))}
          </div>
        </Body>
        <Footer>
          <Label to="/contact">Contact Us</Label>
          <ImageGallerySection images={bottomImages} />
        </Footer>
      </Wrapper>
    </>
  );
};

export default AboutSection;
