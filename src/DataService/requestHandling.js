import * as LocalStore from './serviceHelper';
import { getObjectUrlFromUrl } from '../utils';

export async function fetchBookmarksLocally() {
  const response = await LocalStore.readBookmark();
  if (response.length > 0) {
    return response;
  }
}

export async function fetchBookmarksRemotely() {
  // const serverResponse = await getLayers();
  // const jsonResponse = await serverResponse.json();
  // const dbData = {};
  // StoreHandler.writeData(StoreNames.BOOKMARKS, dbData);
  // return jsonResponse[0];
  return [];
}

export async function saveBookmark(bookmarkId, data, url) {
  await LocalStore.writeBookmark(data);
  const objectUrl = await getObjectUrlFromUrl(url);
  const storedObjectUrl = await LocalStore.storeMedia(bookmarkId, objectUrl);
  return storedObjectUrl;
}

export async function removeBookmark(bookmarkId) {
  const response = await LocalStore.deleteBookmark(bookmarkId);
  return response;
}

export async function isAlreadyBookmarked(bookmarkId) {
  const response = await LocalStore.readBookmark(bookmarkId);
  return response;
}

export async function getAllBookmarkedGifs() {
  const response = await LocalStore.readBookmarkMedias();
  return response;
}
