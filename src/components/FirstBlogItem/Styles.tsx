import styled from "styled-components";
import { size, color, dist } from "../../theme";
import { override } from "../../utils";

export const WrapperDesktop = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  font-size: 40px;
  background-color: var(--main-sec-app-color);
  color: var(--main-app-color);
  font-weight: bolder;
  ${(props: any) => override(props)};
`;

export const WrapperMobile = styled.div`
  color: white;
  font-size: 35px;
  opacity: 0.9;
  font-weight: bolder;
  text-align: center;
  ${(props: any) => override(props)};
`;
