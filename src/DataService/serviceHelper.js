import * as StoreNames from './storeEnums';
import * as StoreHandler from './dbHelper';

export async function readBookmark(bookmarkId) {
  return StoreHandler.readData(StoreNames.BOOKMARKS, bookmarkId);
}

export async function writeBookmark(data) {
  return StoreHandler.writeData(StoreNames.BOOKMARKS, data);
}

export async function deleteBookmark(bookmarkId) {
  return StoreHandler.deleteItemFromData(StoreNames.BOOKMARKS, bookmarkId);
}

export async function readAllBookmarks() {
  return StoreHandler.readAllData(StoreNames.BOOKMARKS);
}

export async function storeMedia(bookmarkId, objectUrl) {
  const mediaObject = {
    id: bookmarkId,
    objectUrl
  };
  return StoreHandler.writeData(StoreNames.MEDIA, mediaObject);
}

export async function readBookmarkMedias() {
  return StoreHandler.readAllData(StoreNames.MEDIA);
}

export async function readMedia(mediaId) {
  return StoreHandler.readData(StoreNames.MEDIA, mediaId);
}