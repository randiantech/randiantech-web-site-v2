import { MOBILE_WIDTH } from "./constants";

export const isMobileWidth = () => window.innerWidth <= MOBILE_WIDTH;

export const override = (props: any) => {
  //TODO find a way to validate props agains valid CSS properties
  let result = "";
  Object.keys(props).forEach((k: any) => (result += `${k}:${props[k]};\n`));
  return result;
};

export interface Clickable {
  onClick: (e: any) => void;
}

export interface Styleable {
  display?: string;
  padding?: string;
  color?: string;
  width?: string;
  "padding-right"?: string;
  "padding-left"?: string;
  "padding-top"?: string;
  "padding-bottom"?: string;
  "margin-right"?: string;
  "margin-left"?: string;
  "margin-top"?: string;
  "margin-bottom"?: string;
}
