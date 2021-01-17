import React from "react";
import styled from "styled-components";
import { size } from "../../theme";
import { Styleable, override } from "../../utils";

export const WrapperDesktop = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  font-size: 40px;
  background-color: var(--main-sec-app-color);
  color: var(--main-app-color);
  font-weight: bolder;
  box-shadow: -20px 20px 60px var(--main-app-shadow-color),
    20px -20px 60px var(--main-app-color);
  border-top-right-radius: 45px;
  border-bottom-right-radius: 45px;
  border-top-left-radius: 45px;
  ${(props: any) => override(props)};
`;

export const WrapperMobile = styled.div`
  color: white;
  font-size: ${size.extraFontSize};
  opacity: 0.9;
  font-weight: bolder;
  text-align: center;
  ${(props: any) => override(props)};
`;

interface TabulatedItemProps extends Styleable {
  text: string;
  height?: string;
}

export const TabulatedItem = (props: TabulatedItemProps) => {
  const isMobile = false;
  const { text } = props;
  return (
    <WrapperDesktop
      key="tabulated-item"
      className={`${
        isMobile
          ? "rt-std-bottom-padding rt-std-top-padding rt-glow-effect rt-linear-grad-bg"
          : ""
      }`}
      {...props}
    >
      {text}
    </WrapperDesktop>
  );
};
