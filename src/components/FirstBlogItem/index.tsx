import React from "react";
import styled from "styled-components";
import { size, color, dist } from "../../theme";
import { Clickable, Styleable, override } from "../../utils";

export const WrapperDesktop = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  font-size: 40px;
  background-color: ${color.defSecAppColor};
  color: ${color.defAppColor};
  font-weight: bolder;
  ${(props: any) => override(props)};
`;

export const WrapperMobile = styled.div`
  color: white;
  font-size: 35px;
  opacity: 0.9;
  font-weight: bolder;
  text-align: center;
  ${(props: any) => override(props)};
`;

interface FirstBlogItemProps {}

export const FirstBlogItem = (props: FirstBlogItemProps) => {
  const isMobile = false;
  return (
    <WrapperDesktop
      key="blog-setion-item-first"
      className={`${
        isMobile
          ? "rt-std-bottom-padding rt-std-top-padding rt-glow-effect rt-linear-grad-bg"
          : "rt-rounded"
      }`}
    >
      News and Articles
    </WrapperDesktop>
  );
};
