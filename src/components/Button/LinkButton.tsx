import React from "react";
import { Wrapper, LinkWrapper } from "./Styles";
import { Link } from "react-router-dom";

interface LinkProps {
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
