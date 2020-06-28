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
