import React from 'react';
import { tabs } from '../../utils/const';
import { readAllBookmarks } from '../../DataService/requestHandling';
import Item from './GridItem';
import { searchWithQuery, searchRandom } from '../../utils/requestUtils';

function createElementForGrid(data, isPlaying, tabKey) {
  const items = [];
  for (let i = 0; i < data.length; i++) {
    const currentElement = data[i];
    items.push(
      <Item
        gif={currentElement}
        index={i}
        key={`${currentElement.id}_${i}_${tabKey}`}
        isPlaying={isPlaying}
        tab={tabKey}
      />
    );
  }
  return items;
}

export default async function fetchDataForTabs(tabKey, query, offset, limit, isPlaying) {
  switch (tabKey) {
    case tabs.GIFS: {      
      const response = await searchWithQuery(query, offset, limit);
      const items = createElementForGrid(response.data, isPlaying, tabKey);
      return {
        ...response,
        items
      };
    }
    case tabs.FAVOURITE: {
      // TODO: handle it with indexeddb cursor
      const response = await readAllBookmarks();
      const items = createElementForGrid(response, isPlaying, tabKey);
      return {
        data: response,
        items,
        pagination: {
          count: items.length,
          total_count: items.length
        }
      };
    }
    default:
      return [];
  }
}