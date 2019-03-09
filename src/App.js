import React, { Component } from 'react';
import { ThemeContext, getThemeFromId, defaultTheme } from './utils/themeUtil';
import ThemeSelector from './HelperComponent/themeSelector';
import GIFted from './GIFted';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: defaultTheme
    };
    this.onChange = this.onChange.bind(this);
  }

  async componentDidMount() {
    this.setBodyByTheme();
  }

  componentDidUpdate() {
    this.setBodyByTheme();
  }

  onChange(theme) {
    this.setState({ theme });
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
        <ThemeSelector onChange={this.onChange} />
        <GIFted />
      </ThemeContext.Provider>
    );
  }
}

export default App;
