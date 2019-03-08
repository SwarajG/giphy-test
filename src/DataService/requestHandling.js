import * as LocalStore from './serviceHelper';

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

export async function saveBookmark(data) {
  const response = await LocalStore.writeBookmark(data);
  return response || [];
}

export async function removeBookmark(bookmarkId) {
  const response = await LocalStore.deleteBookmark(bookmarkId);
  return response || [];
}

export async function hasAlreadyBookmarked(bookmarkId) {
  const response = await LocalStore.readBookmark(bookmarkId);
  return response || [];
}
