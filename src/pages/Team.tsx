import React, { useEffect } from "react";
import styled from "styled-components";
import ImageGallery from "../sections/ImageGallery";
import { TabulatedItem } from "../components/TabulatedItem";
import { ArticleCard } from "../components/ArticleCard";
import { TEAM_MEMBERS_LEADERSHIP, TEAM_MEMBERS_STAFF } from "../data";

const headerImages = [
  {
    original: "/images/team1.png",
  },
];

const Image = styled.div`
  border-bottom: 1px solid var(--main-app-color);
`;

export const Label = styled.div`
  position: absolute;
  top: 150px;
  left: calc(100% - 500px);
  width: 300px;
  color: var(--main-deg-app-color);
  font-weight: bolder;
  background: var(--main-app-color);
  padding: var(--main-item-distance);
  border-radius: 50px;
  border-bottom-left-radius: 0;
  cursor: pointer;
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

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props: any) =>
    `${props.isMoble ? "1fr" : "1fr 1fr 1fr"}`};
  row-gap: var(--main-item-distance);
  padding-top: var(--main-item-distance);
  padding-right: var(--main-item-distance);
  border: 50px solid var(--main-app-color);
  border-bottom: none;
  border-top: none;
  border-right: none;
`;

const WrapperStaff = styled.div`
  display: grid;
  grid-template-columns: ${(props: any) =>
    `${props.isMoble ? "1.5fr" : "1.5fr 1.5fr 1.5fr 1.5fr"}`};
  row-gap: var(--main-item-distance);
  padding-top: var(--main-item-distance);
  padding-right: var(--main-item-distance);
  border: 50px solid var(--main-app-color);
  border-bottom: none;
  border-top: none;
  border-right: none;
`;

const Team = React.memo(() => {
  useEffect(() => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  
  return (
    <div>
      <Image>
        <Label>
          <div className="label">Meet The RT Team.</div>
        </Label>
        <ImageGallery images={headerImages} />
      </Image>
      <Wrapper>
        {TEAM_MEMBERS_LEADERSHIP.map((i, idx) =>
          idx === 0 ? (
            <TabulatedItem text="Leadership" height="95%" />
          ) : (
            <ArticleCard
              url={i.url}
              img={i.img}
              desc={i.desc}
              title={i.title}
              position={i.position}
            />
          )
        )}
      </Wrapper>
      <WrapperStaff>
        {TEAM_MEMBERS_STAFF.map((i, idx) =>
          idx === 0 ? (
            <TabulatedItem text="Team" height="95%" />
          ) : (
            <ArticleCard
              url={i.url}
              img={i.img}
              desc={i.desc}
              title={i.title}
              position={i.position}
              detailsAlign="left"
            />
          )
        )}
      </WrapperStaff>
    </div>
  );
});

export default Team;
