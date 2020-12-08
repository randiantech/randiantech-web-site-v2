import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MOBILE_MENU_ITEMS } from "../../data";
import { color} from "../../theme";

const MenuWrapper = styled.div`
  position: absolute;
  background-color: black;
  opacity: 0.9;
  width: 100%;
  height: 100vh;
  top: 100px;
  left: 0;
  font-size: 40px;

  .item {
    color: white;
    text-decoration: none;
    line-height: 50px;

    .is-contact {
      color: ${color.defAppColor};
    }

    .content {
      padding-top: 20px;
      padding-bottom: 20px;
      color: var(--main-deg-app-color);
    }

    .selected {
      font-weight: bolder;
    }
  }
`;

const HeaderWrapper = styled.div`
  text-align: right;
  cursor: pointer;

  .icon {
    padding-top: 20px;
    padding-bottom: 20px;
    color: white;
  }
`;

export const HeaderMobileItems = ({ hoveredItem, setHoveredItem }: any) => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const MobileMenu = () => {
    return (
      <MenuWrapper>
        {MOBILE_MENU_ITEMS.map((item) => (
          <Link
            key={item}
            className={`item ${item === "CONTACT" && "is-contact"}`}
            to={item.toLowerCase()}
            onClick={() => setToggleMobileMenu(false)}
          >
            <div
              className={`content ${
                hoveredItem === item &&
                "selected"
              }`}
              onMouseOver={() => setHoveredItem(item)}
              onMouseOut={() => setHoveredItem("")}
            >
              {item}
            </div>
          </Link>
        ))}
      </MenuWrapper>
    );
  };
  return (
    <>
      <HeaderWrapper
        className="rt-std-right-padding"
        onClick={() => setToggleMobileMenu(!toggleMobileMenu)}
      >
        <FontAwesomeIcon className="icon" icon={faBars} size="lg" />
      </HeaderWrapper>
      {toggleMobileMenu && <MobileMenu />}
    </>
  );
};
