import React from "react";
import styled from "styled-components";
import { size, color, dist } from "../../theme";
import { override, Styleable } from "../../utils";

export const Wrapper = styled.a`
  display: grid;
  grid-template-rows: 1fr 200px;
  padding-left: ${dist.defItemDistance};
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
  filter: grayscale(100%);

  .details {
    display: grid;
    width: 95%;
    align-self: center;
    margin: auto;
    margin-top: 0;

    .title {
      display: grid;
      color: white;
      font-weight: bolder;
      font-size: ${size.titleFontSize};
      padding-bottom: 10px;
    }

    .desc {
      color: white;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: justify;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 5;
      -webkit-box-orient: vertical;
    }
  }

  .img {
    width: 95%;
  }

  &:hover {
    filter: none;
  }

  ${(props: any) => override(props)};
`;

interface ArticleCardProps extends Styleable {
  text?: string;
  to?: string;
  url?: string;
  title?: string;
  desc?: string;
  img?: string;
  index?: string;
}

export const ArticleCard = (props: ArticleCardProps) => {
  const { index, url, title, desc, img } = props;
  return (
    <Wrapper {...props} key={`bsi-${index}`} href={url} target="_blank">
      <div>
        <img src={img} className="img rt-rounded" />
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="desc">{desc}</div>
      </div>
    </Wrapper>
  );
};
