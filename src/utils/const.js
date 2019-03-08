import { isMobile } from "react-device-detect";
const defaultOffset = 0;
const defaultLimit = isMobile ? 5 : 15;
const themes = {
  DARK: 'DARK',
  LIGHT: 'LIGHT'
};

export {
  defaultOffset,
  defaultLimit,
  themes
};