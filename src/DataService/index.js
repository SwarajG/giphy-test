import { openDb } from 'idb';
import { BOOKMARKS } from './storeEnums';

const dbPromise = openDb('gojack', 1, (db) => {
  switch (db.oldVersion) {
    case 0: {
      if (!db.objectStoreNames.contains(BOOKMARKS)) {
        db.createObjectStore(BOOKMARKS, { keyPath: 'id' });
      }
      break;
    }
    default:
      break;
  }
});

export { dbPromise };