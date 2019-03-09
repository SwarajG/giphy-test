import React, { Component } from "react";
import { GridLayout as Grid } from "@egjs/react-infinitegrid";
import { searchWithQuery } from '../../utils/requestUtils';
import { defaultLimit, defaultOffset } from '../../utils/const';
import GifCard from '../views/GifCard';
import Icon from '../../HelperComponent/icons';
import s from './styles';
import noResultFoundImage from '../../assets/not-results-found.gif';
import './styles.css';

const Item = ({ gif, index, isPlaying }) => (
  <div className="item">
    <div className="thumbnail">
      <GifCard gif={gif} index={index} isPlaying={isPlaying} />
    </div>
  </div>
);

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
    const items = [];
    const { offset, limit, query } = this.state;
    try {
      const response = await searchWithQuery(query, offset, limit);
      for (let i = 0; i < response.data.length; i++) {
        const currentElement = response.data[i];
        items.push(
          <Item
            gif={currentElement}
            index={i}
            key={`${currentElement.id}_${i}`}
            isPlaying={this.props.isPlaying}
          />
        );
      }
      const isFinished = response.pagination.count >= response.pagination.total_count;
      const hasNoData = response.data.length === 0;
      if (isFinished && hasNoData) {
        this.setState({ hasMore: false });
        return [];
      }
      return items;
    } catch (error) {
      alert('Something went wrong with the giphy api. Please try again later...');
      return items;
    }
  }

  onAppend = async (e) => {
    e.startLoading();
    const { offset, limit } = this.state;
    const gifsElements = this.state.gifsElements;
    const items = await this.loadItems();
    if (items.length > 0) {
      this.setState({ gifsElements: gifsElements.concat(items), offset: offset + 1 + limit });
    } else {
      this.setState({ isFinished: true });
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