import { isMobile } from "react-device-detect";
const defaultOffset = 0;
const defaultLimit = isMobile ? 5 : 15;
const themes = {
  DARK: 'DARK',
  LIGHT: 'LIGHT'
};
const tabs = {
  GIFS: 'GIFS',
  FAVOURITE: 'FAVOURITE'
};

export {
  defaultOffset,
  defaultLimit,
  themes,
  tabs
};