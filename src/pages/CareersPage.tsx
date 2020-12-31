import React, { useEffect } from "react";
import styled from "styled-components";
import { color, dist } from "../theme";
import { ImageGallerySection } from "../sections/ImageGallerySection";
import { TabulatedItem } from "../components/TabulatedItem";
import { ArticleCard } from "../components/ArticleCard";
import { OPEN_POSITIONS_ITEMS } from "../data";

const headerImages = [
  {
    original: "/images/hiring3.png",
  },
];

const Image = styled.div`
  border-bottom: 1px solid ${color.defAppColor};
`;

export const Label = styled.div`
  position: absolute;
  top: 150px;
  left: calc(100% - 500px);
  width: 300px;
  color: var(--main-deg-app-color);
  font-weight: bolder;
  background: var(--main-app-color);
  padding: ${dist.defItemDistance};
  border-radius: 50px;
  border-bottom-left-radius: 0;
  cursor: none;
  z-index: 1;

  .label {
    font-size: 25px;
    text-align: center;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 20px 20px 60px var(--main-app-color),
      -20px -20px 60px var(--main-app-color);
  }
`;

const WrapperStaff = styled.div`
  display: grid;
  grid-template-columns: ${(props: any) =>
    `${props.isMoble ? "1.5fr" : "1.5fr 1.5fr 1.5fr 1.5fr"}`};
  row-gap: ${dist.defItemDistance};
  padding-top: ${dist.defItemDistance};
  padding-right: ${dist.defItemDistance};
  border: 10px solid ${color.defAppColor};
  border-bottom: none;
  border-top: none;
  border-right: none;
`;

const sendEmail = () => {
  window.location.href =
    "mailto:info@randiantech.com?subject=I'm interested to join the team!";
};

export const CareersPage = React.memo(() => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      <Image>
        <Label>
          <div className="label">Come work with us!</div>
        </Label>
        <ImageGallerySection images={headerImages} />
      </Image>

      <WrapperStaff
        onClick={() => {
          return sendEmail();
        }}
      >
        {OPEN_POSITIONS_ITEMS.map((i, idx) =>
          idx === 0 ? (
            <TabulatedItem text="Open Positions" height="95%" />
          ) : (
            <ArticleCard
              img={i.img}
              desc={i.desc}
              title={i.title}
              detailsAlign="left"
            />
          )
        )}
      </WrapperStaff>
    </div>
  );
});
