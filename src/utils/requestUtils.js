import GphApiClient from 'giphy-js-sdk-core';
import { defaultLimit, defaultOffset } from './const';

const client = GphApiClient(process.env.REACT_APP_API_KEY);

function searchWithQuery(query, offset = defaultOffset, limit = defaultLimit) {
  if (query) {
    return client.search('gifs', { q: query, offset, limit });
  }
  return getTrendingGifs(offset, limit);
}

function getTrendingGifs(offset, limit) {
	return client.trending('gifs', { offset, limit });
}

export {
  searchWithQuery,
  getTrendingGifs,
};