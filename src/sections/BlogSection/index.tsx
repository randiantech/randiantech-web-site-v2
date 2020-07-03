/*eslint-disable jsx-a11y/alt-text*/

import React, { useContext } from "react";
import styled from "styled-components";
import { BLOG_ITEMS } from "../../data";
import { BlogItem } from "../../components/BlogItem";
import { FirstBlogItem } from "../../components/FirstBlogItem";
import { AppContext } from "../../AppContext";

const WrapperDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: var(--main-item-distance);
  padding-top: var(--main-item-distance);
  padding-right: var(--main-item-distance);
  border: 10px solid var(--main-app-color);
  border-bottom: none;
  border-top: none;
  border-right: none;
`;

export const BlogSection = React.memo(() => {
  const { state } = useContext(AppContext);
  const { isMobile } = state;

  return (
    <WrapperDesktop>
      {BLOG_ITEMS.map((i, idx) =>
        idx === 0 ? (
          <FirstBlogItem />
        ) : (
          <BlogItem url={i.url} img={i.img} desc={i.desc} title={i.title} />
        )
      )}
    </WrapperDesktop>
  );
});
