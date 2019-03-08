import * as StoreNames from './storeEnums';
import * as StoreHandler from './dbHelper';

export function readBookmark(bookmarkId) {
  return StoreHandler.readData(StoreNames.BOOKMARKS, bookmarkId);
}

export function writeBookmark(data) {
  return StoreHandler.writeData(StoreNames.BOOKMARKS, data);
}

export function deleteBookmark(bookmarkId) {
  return StoreHandler.deleteItemFromData(StoreNames.BOOKMARKS, bookmarkId);
}