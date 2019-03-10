import { isMobile } from "react-device-detect";
const defaultOffset = 0;
const defaultLimit = isMobile ? 5 : 15;
const defaultSorting = 'relevant';
const themes = {
  DARK: 'DARK',
  LIGHT: 'LIGHT'
};
const tabs = {
  GIFS: 'GIFS',
  FAVOURITE: 'FAVOURITE'
};
const sorting = {
  RELEVENT: 'relevant',
  NEWEST: 'recent'
};

export {
  defaultOffset,
  defaultLimit,
  themes,
  tabs,
  sorting,
  defaultSorting
};