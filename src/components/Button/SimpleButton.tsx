import React from "react";
import { Clickable } from "../../utils";
import { Wrapper } from "./Styles";

interface ButtonProps extends Clickable {
  color?: string;
  width?: string;
  text: string;
}

export const SimpleButton = (props: ButtonProps) => {
  return (
    <Wrapper {...props} onClick={props.onClick}>
      {props.text}
    </Wrapper>
  );
};
