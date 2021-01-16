import React from "react";
import styled from "styled-components";
import { Clickable, Styleable } from "../../utils";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 50px;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  color: var(--main-sec-app-color);

  .image {
    width: 130px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  .text {
    padding-top: 15px;
  }
`;

interface SimpleItemPros extends Clickable, Styleable {
  key?: string;
  txt?: string;
  img?: string;
}

export const SimpleItem = React.memo((props: SimpleItemPros) => {
  return (
    <Wrapper {...props} key={props.key}>
      <img className="image" src={props.img} />
      <div className="text">{props.txt}</div>
    </Wrapper>
  );
});
