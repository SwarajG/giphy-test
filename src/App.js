import React, { Component } from 'react';
import { ThemeContext, getThemeFromId, defaultTheme } from './utils/themeUtil';
import GIFted from './GIFted';

class App extends Component {
  state = {
    theme: defaultTheme
  };

  componentDidMount() {
    this.setBodyByTheme();
  }

  componentDidUpdate() {
    this.setBodyByTheme();
  }

  setBodyByTheme() {
    const { theme } = this.state;
    const finalTheme = getThemeFromId(theme);
    const body = document.getElementsByTagName('body');
    body[0].style.backgroundColor = finalTheme.primary;
  }

  render() {
    const { theme } = this.state;
    return (
      <ThemeContext.Provider value={getThemeFromId(theme)}>
        <GIFted />
      </ThemeContext.Provider>
    );
  }
}

export default App;
