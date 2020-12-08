import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Styleable, override } from "../../utils";

interface LogoProps extends Styleable {
  color?: string;
}

const Wrapper = styled.span`
  .link {
    color: ${(props: any) => props.color};
    text-decoration: none;

    .content {
      color: ${(props: any) => props.color};
      font-size: 30px;
      text-align: left;

      .left {
        font-family: "coco";
      }

      .right {
        font-family: "coco-light";
      }
    }
  }
`;

export const Logo = (props: LogoProps) => {
  return (
    <Wrapper {...props}>
      <Link className="link" to="/">
        <span className="content">
          <span className="left">Randian</span>
          <span className="right">tech</span>
        </span>
      </Link>
    </Wrapper>
  );
};
