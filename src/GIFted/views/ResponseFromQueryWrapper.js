import { Component } from 'react';
import { searchWithQuery } from '../../utils/requestUtils';
import { defaultLimit, defaultOffset } from '../../utils/const';

export default class ResponseFromQueryWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: props.query,
      gifs: [],
      offset: defaultOffset,
      limit: defaultLimit,
      hasMore: true,
      isLoading: false
    };
    window.onscroll = () => {
      const {
        loadGifs,
        state: {
          isLoading,
          hasMore,
        },
      } = this;
      if (isLoading || !hasMore) return;
      if (
        window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.offsetHeight
      ) {
        loadGifs();
      }
    };
  }

  loadGifs = () => {
    this.setState({ isLoading: true }, async () => {
      const { query, offset, limit } = this.state;
      const response = await searchWithQuery(query, offset, limit);
      const nextGifs = response.data;
      this.setState({
        hasMore: (this.state.gifs.length < response.pagination.total_count),
        isLoading: false,
        offset: offset + limit,
        gifs: [
          ...this.state.gifs,
          ...nextGifs,
        ],
      });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if(nextProps.query !== prevState.query){
      return { query: nextProps.query };
   }
   return null;
  }

  async componentDidUpdate(prevProps, prevState) {
    const { query, offset, limit } = this.state;
    if (prevState.query !== query) {
      const response = await searchWithQuery(query, offset, limit);
      this.setState({ gifs: response.data });
    }
  }

  async componentDidMount() {
    const { offset, limit, query } = this.state;
    const response = await searchWithQuery(query, offset, limit);
    this.setState({ gifs: response.data, offset: offset + limit });
  }

  render() {
    const { hasMore, isLoading } = this.state;
    return this.props.children({
      response: this.state.gifs,
      hasMore,
      isLoading
    });
  }
}