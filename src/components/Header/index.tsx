import React, { useContext, useState } from "react";
import { LinkButton } from "../LinkButton";
import styled from "styled-components";
import { Logo } from "../Logo";
import { AppContext } from "../../AppContext";
import { HeaderDesktopItems } from "./HeaderDesktopItems";
import { HeaderMobileItems } from "./HeaderMobileItems";

interface HeaderProps {
  linkBtnText: string;
  linkBtnPath: string;
}

const HeaderWrapperDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 200px;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100px;
  align-items: center;
  text-align: center;
  background-color: var(--main-bg-color);
  -webkit-box-shadow: 0px 15px 33px -9px rgba(17, 8, 25, 1);
  -moz-box-shadow: 0px 15px 33px -9px rgba(17, 8, 25, 1);
  box-shadow: 0px 15px 33px -9px rgba(17, 8, 25, 1);
`;

const HeaderWrapperMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: fixed;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100px;
  align-items: center;
  text-align: center;
  background-color: var(--main-bg-color);
  -webkit-box-shadow: 0px 15px 33px -9px rgba(17, 8, 25, 1);
  -moz-box-shadow: 0px 15px 33px -9px rgba(17, 8, 25, 1);
  box-shadow: 0px 15px 33px -9px rgba(17, 8, 25, 1);
`;

const LogoWrapper = styled.div`
  text-align: left;
  padding-left: var(--main-item-distance);
`;

export const Header = (props: HeaderProps) => {
  const { state } = useContext(AppContext);
  const { isMobile } = state;
  const [hoveredItem, setHoveredItem] = useState("");
  const Items = isMobile ? HeaderMobileItems : HeaderDesktopItems;
  const Wrapper = isMobile ? HeaderWrapperMobile : HeaderWrapperDesktop;
  const { linkBtnText, linkBtnPath } = props;
  return (
    <Wrapper>
      <LogoWrapper className="rt-std-left-padding">
        <Logo color="white" />
      </LogoWrapper>
      <Items hoveredItem={hoveredItem} setHoveredItem={setHoveredItem} />
      {!isMobile && <LinkButton text={linkBtnText} to={linkBtnPath} />}
    </Wrapper>
  );
};
