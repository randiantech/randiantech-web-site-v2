import React, { useEffect } from "react";
import styled from "styled-components";
import { size, dist } from "../../theme";
import { ABOUT_PAGE } from "../../data";
import { ImageGallerySection } from "../ImageGallerySection";

export const Wrapper = styled.div`
  background: white;
  border-left: 10px solid var(--main-app-color);
`;

export const Header = styled.div`
  display: grid;
  grid-template-rows: 60px 40px 10px;
  color: white;
  color: black;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};

  .title {
    font-size: ${size.extraFontSize};
    font-weight: bolder;
  }

  .subtitle {
    font-style: italic;
    font-weight: bold;
  }

  .description {
  }
`;

export const Body = styled.div`
  display: grid;
  color: white;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};

  .title {
  }

  .description {
  }

  .list-title {
  }

  .list-item-container {
    .item {
    }
  }
`;

export const Footer = styled.div`
  display: grid;
  color: white;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};
`;

const AboutSection = () => {
  const { header, body, footer } = ABOUT_PAGE;
  const { items } = body.list;

  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <>
      <ImageGallerySection />
      <Wrapper>
        <Header>
          <div className="title">{header.title}</div>
          <div className="subtitle">{header.subtitle}</div>
          <div className="description">{header.desc}</div>
        </Header>
        <Body>
          <div className="title">{body.title}</div>
          <div className="description">{body.desc}</div>
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
          <div>{footer.image}</div>
        </Footer>
      </Wrapper>
    </>
  );
};

export default AboutSection;
