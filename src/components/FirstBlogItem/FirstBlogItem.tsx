import React from "react";
import { WrapperDesktop } from "./Styles";

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
