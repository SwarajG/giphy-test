import React, { Component } from 'react';
import SearchInput from './views/SearchInput';
import ResponseFromQueryWrapper from './views/ResponseFromQueryWrapper';
import GridLayout from './views/GridLayout';
import { debounce } from '../utils';
import s from './styles';

export default class GIFted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: ''
    };
    this.onQueryChange = this.onQueryChange.bind(this);
    this.renderLoader = this.renderLoader.bind(this);
  }

  onQueryChange(text) {
    this.setState({
      searchQuery: text
    });
  };

  renderLoader() {
    return (
      <div className={s.loader}>Loading...</div>
    )
  }

  render() {
    const { searchQuery } = this.state;
    return (
      <div className={s.mainWrapper}>
        <div className={s.inputWrapper}>
          <SearchInput onChange={debounce(this.onQueryChange, 1000)} />
        </div>
        <div>
          <ResponseFromQueryWrapper query={searchQuery}>
            {({ response, isLoading, hasMore, error }) => (
              <React.Fragment>
                <GridLayout gifs={response} />
                {isLoading && this.renderLoader()}
              </React.Fragment>
            )}
          </ResponseFromQueryWrapper>
        </div>
      </div>
    );
  }
}