import React from "react";
import { Wrapper, LinkWrapper } from "./Styles";

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
