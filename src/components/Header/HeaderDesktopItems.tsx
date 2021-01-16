import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { DESKTOP_MENU_ITEMS } from "../../data";
import { Styleable } from "../../utils";
import { size, color, dist } from "../../theme";

interface HeaderDesktopProps extends Styleable {
  hoveredItem: any;
  setHoveredItem: Function;
}

const HeaderWrapper = styled.div`
  display: grid;
  color: white;
  font-weight: bolder;
  grid-template-columns: repeat(5, 20%);

  .item {
    color: var(--main-app-color);
    text-decoration: none;
    line-height: 50px;
    cursor: pointer;

    &:hover {
      background-color: var(--main-deg-app-color);
      border-radius: ${size.defRadius};
    }

    .selected {
      border-radius: ${size.defRadius};
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
      {DESKTOP_MENU_ITEMS.map((item) => (
        <Link key={item} className="item" to={`/${item.toLowerCase()}`}>
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
