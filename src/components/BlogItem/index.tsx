import React from "react";
import styled from "styled-components";
import { size, color, dist } from "../../theme";
import { override } from "../../utils";

export const WrapperDesktop = styled.a`
  display: grid;
  grid-template-rows: 1fr 200px;
  padding-left: 50px;
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
  }

  .title {
    display: grid;
    color: var(--main-app-color);
    font-size: 24px;
    padding-bottom: 10px;
  }

  .description {
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }

  .img {
    width: 95%;
  }

  &:hover {
    filter: none;
  }

  ${(props: any) => override(props)};
`;

interface BlogItemProps {
  color?: string;
  width?: string;
  text?: string;
  to?: string;
  url?: string;
  title?: string;
  desc?: string;
  img?: string;
  index?: string;
}

export const BlogItem = (props: BlogItemProps) => {
  const { index, url, title, desc, img } = props;
  return (
    <WrapperDesktop
      {...props}
      key={`blog-section-item-${index}`}
      href={url}
      target="_blank"
    >
      <div>
        <img src={img} className="img rt-rounded" />
      </div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="description">{desc}</div>
      </div>
    </WrapperDesktop>
  );
};
