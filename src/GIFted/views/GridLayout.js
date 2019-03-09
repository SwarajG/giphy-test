import React, { Component } from "react";
import { GridLayout as Grid } from "@egjs/react-infinitegrid";
import { defaultLimit, defaultOffset } from '../../utils/const';
import Icon from '../../HelperComponent/icons';
import s from './styles';
import fetchDataForTabs from './DataLoader';
import noResultFoundImage from '../../assets/not-results-found.gif';
import './styles.css';

export default class GridLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifsElements: [],
      limit: defaultLimit,
      offset: defaultOffset,
      query: props.query,
      hasMore: true,
      isFinished: false
    }
  }

  loadItems = async () => {
    const { tab, isPlaying } = this.props;
    const { offset, limit, query } = this.state;
    try {
      const response = await fetchDataForTabs(tab, query, offset, limit, isPlaying);
      const isFinished = response.pagination.count >= response.pagination.total_count;
      const hasNoData = response.data.length === 0;
      if (isFinished && hasNoData) {
        this.setState({ hasMore: false });
        return [];
      } else if (isFinished) {
        this.setState({ isFinished: true });
      }
      return response.items;
    } catch (error) {
      alert('Something went wrong with the giphy api. Please try again later...');
      return [];
    }
  }

  onAppend = async (e) => {
    e.startLoading();
    const { offset, limit, isFinished } = this.state;
    if (!isFinished) {
      const gifsElements = this.state.gifsElements;
      const items = await this.loadItems();
      if (items.length > 0) {
        this.setState({ gifsElements: gifsElements.concat(items), offset: offset + 1 + limit });
      } else {
        this.setState({ isFinished: true });
      }
    }
  };

  onLayoutComplete = (e) => {
    !e.isLayout && e.endLoading();
    if (!this.props.isPlaying) {
      const videos = document.getElementsByClassName('gif-video');
      for(var i = 0; i < videos.length; i++) {
        videos[i].pause();
      }
    }
  }

  renderLoader() {
    return (
      <div className={s.loader}>
        <Icon type="loader" width={36} height={36} fill="#FFF" />
      </div>
    )
  }

  render() {
    const { gifsElements, hasMore, isFinished } = this.state;
    if (!hasMore) {
      return (
        <div className={s.noResults(noResultFoundImage)} />
      );
    }
    return (
      <div className={s.gridWrapper}>
        <Grid
          margin={20}
          align="center"
          onAppend={this.onAppend}
          onLayoutComplete={this.onLayoutComplete}
          transitionDuration={0.2}
          isConstantSize={true}
          loading={isFinished ? null: this.renderLoader()}
        >
          {gifsElements}
        </Grid>
      </div>
    );
  }
}