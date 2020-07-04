import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.span`
  .link {
    color: white;
    text-decoration: none;

    .content {
      color: white;
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

export const Logo = () => {
  return (
    <Wrapper>
      <Link className="link" to="/">
        <span className="content">
          <span className="left">Randian</span>
          <span className="right">tech</span>
        </span>
      </Link>
    </Wrapper>
  );
};
