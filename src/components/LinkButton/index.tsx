import React from "react";
import styled from "styled-components";
import { Styleable } from "../../utils";
import { size } from "../../theme";
import { override } from "../../utils";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
  font-weight: bolder;
  height: 50px;
  align-items: center;
  width: fit-content;
  color: var(--main-app-color);
  padding-left: var(--main-app-padding-left);
  padding-right: var(--main-app-padding-right);
  border-top-right-radius: ${size.defRadius};
  border-bottom-right-radius: ${size.defRadius};
  border: ${size.defBorder};
  background-color: var(--main-sec-app-color);
  font-size: ${size.defFontSize};
  ${(props: any) => override(props)};
`;

const LinkWrapper = styled(Link)`
  color: var(--main-app-color);
  text-decoration: none;
  ${(props: any) => override(props)};
`;

interface LinkProps extends Styleable {
  color?: string;
  width?: string;
  text: string;
  to: string;
}

export const LinkButton = (props: LinkProps) => {
  return (
    <Wrapper {...props}>
      <LinkWrapper to={props.to}>{props.text}</LinkWrapper>
    </Wrapper>
  );
};
