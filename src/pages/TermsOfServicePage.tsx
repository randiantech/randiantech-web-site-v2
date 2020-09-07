import React from "react";
import styled from "styled-components";
import { color, dist } from "../theme";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  padding: ${dist.defItemDistance};
  background: white;
`;

export const TermsOfServicePage = React.memo(() => (
  <Wrapper>
    <div>
      <b>Title</b>
      <div>Some Text</div>
    </div>
  </Wrapper>
));
