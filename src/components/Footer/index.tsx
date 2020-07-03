import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FOOTER_ITEMS, SOCIAL_NETWORKS } from "../../constants";
import Logo from "../Logo/Logo";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 350px;
  align-items: center;
  background-color: var(--main-bg-color);
  margin-top: var(--main-item-distance);
  border-top: 1px solid var(--main-app-color);
  border-left: 10px solid var(--main-app-color);
  border-right: 10px solid var(--main-app-color);

  .left-pane-container {
    display: grid;
    padding: 50px;
    grid-template-rows: 100px 1fr;

    .list {
      display: grid;
      grid-template-rows: 1fr 1fr 1fr 1fr;
      grid-template-columns: 1fr 1fr;
      row-gap: 10px;

      .item {
        text-decoration: none;
        color: white;
        font-size: 18px;
        font-weight: bold;

        &:hover {
          color: var(--main-app-color);
        }
      }
    }
  }

  .right-pane-container {
    display: grid;
    padding: 50px;
    grid-template-rows: 50px 50px;
    row-gap: 25px;

    .list {
      display: grid;
      grid-template-columns: 120px 120px 120px 120px 120px;
      column-gap: 25px;

      .item {
        display: grid;
        text-decoration: none;
        grid-template-columns: 40px 1fr;
        align-items: center;

        .img {
          width: 20px;
        }

        .link {
          color: white;
          font-weight: bold;
          font-size: 18px;

          &:hover {
            color: var(--main-app-color);
          }
        }
      }
    }

    .disclaimer {
      color: white;
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <div className="left-pane-container">
        <Logo />
        <div className="list">
          {FOOTER_ITEMS.map((i) => (
            <Link key={`footer-item-${i.name}`} to={i.url} className="item">
              {i.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="right-pane-container">
        <div className="list">
          {SOCIAL_NETWORKS.map((i) => {
            return (
              <a href={i.url} className="item">
                <div className="img">
                  <img width="30px" src={i.img} />
                </div>
                <div key={`footer-item-sn-${i.name}`} className="link">
                  {i.name}
                </div>
              </a>
            );
          })}
        </div>
        <div className="disclaimer">
          2020 Copyright Randiantech LLC. All rights reserved.
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;