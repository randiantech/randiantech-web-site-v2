import React from "react";
import styled from "styled-components";
import { size } from "../../theme";
import { override, Styleable } from "../../utils";

export const Wrapper = styled.a`
  display: grid;
  grid-template-rows: 1fr 150px;
  padding-left: var(--main-item-distance);
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
  filter: grayscale(100%);

  .details {
    display: grid;
    width: 95%;
    text-align: ${(props: any) => (props.detailsAlign ? props.detailsAlign : "center")};
    margin: auto;
    margin-top: 0;

    .title {
      display: grid;
      color: var(--main-sec-app-color);
      font-weight: bolder;
      font-size: ${size.titleFontSize};
    }

    .position {
      display: grid;
      color: var(--main-sec-app-color);
      font-weight: bolder;
      font-size: 20px;
      padding-bottom: 10px;
    }

    .desc {
      color: var(--main-sec-app-color);
      overflow: hidden;
      text-overflow: ellipsis;
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
  detailsAlign?: string;
  position?: string;
}

export const ArticleCard = (props: ArticleCardProps) => {
  const { index, url, title, desc, img, position } = props;
  return (
    <Wrapper {...props} key={`bsi-${index}`} href={url} target="_blank">
      <div>
        <img src={img} className="img rt-rounded" alt="randiantech.com" />
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="position">{position}</div>
        <div className="desc">{desc}</div>
      </div>
    </Wrapper>
  );
};
