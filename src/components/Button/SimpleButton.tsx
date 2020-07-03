import React, { useContext } from "react";
import styled from "styled-components";
import { size, color, dist } from "../../theme";
import { override } from "../../utils";
import { Clickable, Styleable } from "../../utils";
import { AppContext } from "../../AppContext";

export const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
  font-weight: bolder;
  height: ${dist.defItemDistance};
  align-items: center;
  width: fit-content;
  color: ${color.defAppColor};
  padding-left: ${dist.defTextPaddingLeft};
  padding-right: ${dist.defTextPaddingRight};
  border-top-right-radius: ${size.defaultRadius};
  border-bottom-right-radius: ${size.defaultRadius};
  border: ${size.defBorder};
  background-color: ${color.defSecondaryAppColor};
  font-size: ${size.defFontSize};
  ${(props: any) => override(props)};
`;

interface ButtonProps extends Clickable, Styleable {
  width?: string;
  text: string;
}

export const SimpleButton = (props: ButtonProps) => {
  const { state } = useContext(AppContext);
  console.log("state.hello => ", state.isMobile);
  return (
    <Wrapper {...props} onClick={props.onClick}>
      {props.text}
    </Wrapper>
  );
};
