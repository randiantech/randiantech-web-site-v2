import React from "react";
import styled from "styled-components";
import { size, dist } from "../../theme";
import { override } from "../../utils";
import { Clickable, Styleable } from "../../utils";

export const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
  font-weight: bolder;
  height: ${dist.defItemDistance};
  align-items: center;
  width: fit-content;
  color: var(--main-app-color);
  padding-left: ${dist.defTextPaddingLeft};
  padding-right: ${dist.defTextPaddingRight};
  border-top-right-radius: ${size.defRadius};
  border-bottom-right-radius: ${size.defRadius};
  border: ${size.defBorder};
  background-color: var(--main-sec-app-color);
  font-size: ${size.defFontSize};
  ${(props: any) => override(props)};
`;

interface ButtonProps extends Clickable, Styleable {
  width?: string;
  text: string;
}

export const SimpleButton = React.memo((props: ButtonProps) => {
  return (
    <Wrapper {...props} onClick={props.onClick}>
      {props.text}
    </Wrapper>
  );
});
