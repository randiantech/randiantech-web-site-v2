import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MENU_ITEMS } from "../../constants";
import { Styleable } from "../../utils";

interface HeaderDesktopProps extends Styleable {
  hoveredItem: any;
  setHoveredItem: Function;
}

const HeaderWrapper = styled.div`
  display: grid;
  color: white;
  font-weight: bolder;
  grid-template-columns: repeat(6, 16.67%);

  .item {
    color: white;
    text-decoration: none;
    line-height: 50px;
    cursor: pointer;

    &:hover {
      background-color: var(--main-app-color);
      border-radius: 50px;
    }

    .selected {
      border-radius: 50px;
      font-weight: 900;
      opacity: 0.9;
    }
  }
`;

export const HeaderDesktopItems = ({
  hoveredItem,
  setHoveredItem,
}: HeaderDesktopProps) => {
  return (
    <HeaderWrapper className="rt-std-right-padding">
      {MENU_ITEMS.map((item) => (
        <Link key={item} className="item" to={item.toLowerCase()}>
          <div
            className={`${hoveredItem === item ? "selected" : ""}`}
            onMouseOver={() => setHoveredItem(item)}
            onMouseOut={() => setHoveredItem("")}
          >
            {item}
          </div>
        </Link>
      ))}
    </HeaderWrapper>
  );
};
