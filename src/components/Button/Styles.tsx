import styled from "styled-components";
import { size, color, dist } from "../../theme";
import { override } from "../../utils";
import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
  font-weight: bolder;
  height: 50px;
  align-items: center;
  width: fit-content;
  color: ${color.defaultAppColor};
  padding-left: ${dist.defaultTextPaddingLeft};
  padding-right: ${dist.defaultTextPaddingRight};
  border-top-right-radius: ${size.defaultRadius};
  border-bottom-right-radius: ${size.defaultRadius};
  border: ${size.defaultBorder};
  background-color: ${color.defaultSecondaryAppColor};
  font-size: ${size.defaultFontSize};
  ${(props: any) => override(props)}
`;

export const LinkWrapper = styled(Link)`
  color: ${color.defaultAppColor};
  text-decoration: none;
`;
