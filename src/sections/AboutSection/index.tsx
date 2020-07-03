import React from "react";
import styled from "styled-components";
import { size, dist } from "../../theme";
import { ABOUT_PAGE } from "../../data";

export const Header = styled.div`
  display: grid;
  grid-template-rows: 75px 75px 200px;
  color: white;
  padding: ${dist.defItemDistance};
  font-size: ${size.defFontSize};

  .title {
    font-size: ${size.titleFontSize};
  }

  .subtitle {
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
  return (
    <>
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
    </>
  );
};

export default AboutSection;
