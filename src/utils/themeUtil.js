import React from 'react';
import { themes } from './const';
import darkTheme from './theme/darkTheme';
import lightTheme from './theme/lightTheme';

const ThemeContext = React.createContext(themes.DARK);
const defaultTheme = themes.DARK;

function getThemeFromId(theme) {
  switch (theme) {
    case themes.DARK:
      return darkTheme;
    case themes.LIGHT:
      return lightTheme;
      default:
    return darkTheme;
  }
}

export {
  getThemeFromId,
  ThemeContext,
  defaultTheme
};