import React, { Component } from 'react';
import SearchInput from './views/SearchInput';
import GridLayout from './views/GridLayout';
import GifController from './views/GifController';
import OfflineModeView from './views/OfflineModeView';
import Icon from '../HelperComponent/icons';
import Tabs from './views/Tabs';
import { tabs } from '../utils/const';
import s from './styles';

export default class GIFted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      searchQuery: '',
      isPlaying: true,
      tab: tabs.GIFS
    };
    // bind will attach the function to the prototype, so instance size will be less for the class
    this.onQueryChange = this.onQueryChange.bind(this);
    this.onEnterPressed = this.onEnterPressed.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.onStatusChange = this.onStatusChange.bind(this);
    this.onTabChange = this.onTabChange.bind(this);
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

  onTabChange(value) {
    this.setState({ tab: value });
  }

  render() {
    const { searchQuery, isPlaying, tab } = this.state;
    const isOnline = window.navigator.onLine;
    const isBookmarked = tab === tabs.FAVOURITE;
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
        <div className={s.navWrapper}>
          <Tabs onTabChange={this.onTabChange} tab={tab} />
          <GifController onStatusChange={this.onStatusChange} isPlaying={isPlaying} />
        </div>
        {
          (isOnline || isBookmarked) && (
            <GridLayout
              query={searchQuery}
              key={`${searchQuery}_${tab}`}
              isPlaying={isPlaying}
              tab={tab}
            />
          )
        }
        {
          !isOnline && !isBookmarked && (
            <OfflineModeView />
          )
        }
      </div>
    );
  }
}