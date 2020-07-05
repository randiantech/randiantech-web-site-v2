/*eslint-disable jsx-a11y/alt-text*/

import React, { useContext } from "react";
import styled from "styled-components";
import { BLOG_ITEMS } from "../../data";
import { ArticleCard } from "../../components/ArticleCard";
import { TabulatedItem } from "../../components/TabulatedItem";
import { AppContext } from "../../AppContext";
import { color, dist } from "../../theme";

const WrapperDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: ${dist.defItemDistance};
  padding-top: ${dist.defItemDistance};
  padding-right: ${dist.defItemDistance};
  border: 10px solid ${color.defAppColor};
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
          <TabulatedItem text="News and Articles" />
        ) : (
          <ArticleCard url={i.url} img={i.img} desc={i.desc} title={i.title} />
        )
      )}
    </WrapperDesktop>
  );
});
