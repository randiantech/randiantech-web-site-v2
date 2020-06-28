import React from "react";
import { ABOUT_PAGE } from "../../data";
import { Header, Body, Footer } from "./Styles";

const AboutSection = () => {
  const { header, body, footer } = ABOUT_PAGE;
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
          {body.list.items.map((item, idx) => (
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
