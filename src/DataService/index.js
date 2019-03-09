import { openDb } from 'idb';
import { BOOKMARKS, MEDIA } from './storeEnums';

const dbPromise = openDb('gojack', 1, (db) => {
  switch (db.oldVersion) {
    case 0: {
      if (!db.objectStoreNames.contains(BOOKMARKS)) {
        db.createObjectStore(BOOKMARKS, { keyPath: 'id' });
      }
      if (!db.objectStoreNames.contains(MEDIA)) {
        db.createObjectStore(MEDIA, { keyPath: 'id' });
      }
      break;
    }
    default:
      break;
  }
});

export { dbPromise };