import React from "react";
import styled from "styled-components";
import { dist } from "../theme";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  padding: ${dist.defItemDistance};
  background: white;
`;

export const PrivacyPage = React.memo(() => (
  <Wrapper>
    <div>
      <b>Title</b>
      <div>Some Text</div>
    </div>
  </Wrapper>
));
