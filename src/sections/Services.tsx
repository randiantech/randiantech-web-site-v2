/*eslint-disable jsx-a11y/alt-text*/

import React from "react";
import styled from "styled-components";
import { SimpleItem } from "../components/SimpleItem";
import { isMobileWidth } from "../utils";
import { SERVICES_ITEMS } from "../data";

const WrapperDesktop = styled.div`
  border-top: 2px solid var(--main-app-color);
  border-left: 10px solid var(--main-app-color);

  .container {
    display: grid;
    grid-template-columns: 300px 1fr;
    padding-top: var(--main-item-distance);

    .left {
      display: grid;
      height: 100%;
      background: var(--main-sec-app-color);
      color: var(--main-app-color);
      font-size: 35px;
      transition: transform 100ms ease-in-out;
      transform-origin: center;
      font-weight: bolder;
    }

    .right {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-row-gap: 20px;
      grid-template-rows: 1fr 1fr;
      padding-left: 100px;
    }
  }
`;

const WrapperMobile = styled.div`
  border-top: 2px solid var(--main-app-color);

  .container {
    position: relative;
    display: grid;
    grid-template-rows: 1fr;

    .left {
      color: var(--main-app-deg-color);
      font-size: 35px;
      transform-origin: center;
      background: var(--main-app-color);
      font-weight: bolder;
      padding-top: 50px;
      padding-bottom: 50px;
    }

    .right {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 20px;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`;

interface ServicesSectionState {
  isMobile: boolean;
}

export default class Services extends React.Component<
  any,
  ServicesSectionState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isMobile: isMobileWidth(),
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({ isMobile: isMobileWidth() });
  }

  render() {
    const { isMobile }: ServicesSectionState = this.state;
    const Wrapper = isMobile ? WrapperMobile : WrapperDesktop;
    return (
      <Wrapper>
        <div className="container rt-centered-txt">
          <div className="left rt-rounded rt-centered-txt">Our Services</div>
          <div
            className={`right ${
              isMobile ? "rt-std-top-padding rt-std-bottom-padding" : ""
            }`}
          >
            {SERVICES_ITEMS.map((item) => (
              <SimpleItem
                key={item.text}
                img={item.img}
                txt={item.text}
                onClick={e => e}
              ></SimpleItem>
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}
