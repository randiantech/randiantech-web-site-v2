import React from "react";
import styled from "styled-components";
import { color, dist } from "../theme";
import { ImageGallerySection } from "../sections/ImageGallerySection";
import { TabulatedItem } from "../components/TabulatedItem";
import { ArticleCard } from "../components/ArticleCard";
import { TEAM_MEMBERS } from "../data";

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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props: any) =>
    `${props.isMoble ? "1fr" : "1fr 1fr 1fr"}`};
  row-gap: ${dist.defItemDistance};
  padding-top: 100px;
  padding-right: ${dist.defItemDistance};
  border: 10px solid ${color.defAppColor};
  border-bottom: none;
  border-top: none;
  border-right: none;
`;

export const TeamPage = React.memo(() => (
  <div>
    <Image>
      <Label>
        <div className="label">Meet The Randiantech Team.</div>
      </Label>
      <ImageGallerySection images={headerImages} />
      <Wrapper>
        {TEAM_MEMBERS.map((i, idx) => (
          <ArticleCard url={i.url} img={i.img} desc={i.desc} title={i.title} />
        ))}
      </Wrapper>
    </Image>
  </div>
));
