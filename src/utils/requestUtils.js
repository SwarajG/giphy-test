import GphApiClient from 'giphy-js-sdk-core';
import { defaultLimit, defaultOffset, defaultSorting } from './const';

const client = GphApiClient(process.env.REACT_APP_API_KEY);

function searchWithQuery({ query, offset = defaultOffset, limit = defaultLimit, sort = defaultSorting }) {
  if (query) {
    return client.search('gifs', { q: query, offset, limit, sort });
  }
  return getTrendingGifs({ offset, limit, sort });
}

function getTrendingGifs({ offset, limit, sort }) {
	return client.trending('gifs', { offset, limit, sort });
}

export {
  searchWithQuery,
  getTrendingGifs,
};