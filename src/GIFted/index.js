import React, { Component } from 'react';
import SearchInput from './views/SearchInput';
import GridLayout from './views/GridLayout';
import GifController from './views/GifController';
import Icon from '../HelperComponent/icons';
import s from './styles';

export default class GIFted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchQuery: '',
      isPlaying: true
    };
    // bind will attach the function to the prototype, so instance size will be less for the class
    this.onQueryChange = this.onQueryChange.bind(this);
    this.onEnterPressed = this.onEnterPressed.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
  }

  onQueryChange(text) {
    this.setState({
      inputText: text
    });
  };

  onEnterPressed() {
    this.setState({ searchQuery: this.state.inputText });
  }

  onSearch() {
    this.setState({ searchQuery: this.state.inputText });
  }

  onStatusChange(isPlaying) {
    this.setState({ isPlaying });
  }

  render() {
    const { searchQuery, isPlaying } = this.state;
    return (
      <div className={s.mainWrapper}>
        <div className={s.inputWrapper}>
          <SearchInput
            onChange={this.onQueryChange}
            onEnterPressed={this.onEnterPressed}
          />
          <div className={s.searchIcon} onClick={this.onSearch}>
            <Icon type="search" width={26} height={26} fill="#FFF" />
          </div>
        </div>
        <GifController onStatusChange={this.onStatusChange} isPlaying={isPlaying} />
        <GridLayout query={searchQuery} key={searchQuery} isPlaying={isPlaying} />
      </div>
    );
  }
}