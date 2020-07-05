import React from "react";
import styled from "styled-components";
import { Styleable } from "../../utils";
import { size, color, dist } from "../../theme";
import { override } from "../../utils";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
  font-weight: bolder;
  height: ${dist.defItemDistance};
  align-items: center;
  width: fit-content;
  color: ${color.defAppColor};
  padding-left: ${dist.defTextPaddingLeft};
  padding-right: ${dist.defTextPaddingRight};
  border-top-right-radius: ${size.defRadius};
  border-bottom-right-radius: ${size.defRadius};
  border: ${size.defBorder};
  background-color: ${color.defSecAppColor};
  font-size: ${size.defFontSize};
  ${(props: any) => override(props)};
`;

const LinkWrapper = styled(Link)`
  color: ${color.defAppColor};
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
