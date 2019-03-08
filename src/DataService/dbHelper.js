import { dbPromise } from './index';

export function writeData(st, data) {
  return dbPromise
    .then((db) => {
      const tx = db.transaction(st, 'readwrite');
      const store = tx.objectStore(st);
      store.put(data);
      return tx.complete;
    });
}

export function readAllData(st) {
  return dbPromise
    .then((db) => {
      const tx = db.transaction(st, 'readonly');
      const store = tx.objectStore(st);
      return store.getAll();
    });
}

export function readDataFromIndex(st, indexName, id) {
  return dbPromise
    .then((db) => {
      const tx = db.transaction(st, 'readonly');
      const store = tx.objectStore(st);
      const index = store.index(indexName);
      return index.getAll(id);
    });
}

export function readData(st, id) {
  return dbPromise
    .then((db) => {
      const tx = db.transaction(st, 'readonly');
      const store = tx.objectStore(st);
      return store.get(id);
    });
}

export function clearAllData(st) {
  return dbPromise
    .then((db) => {
      const tx = db.transaction(st, 'readwrite');
      const store = tx.objectStore(st);
      store.clear();
      return tx.complete;
    });
}

export function deleteItemFromData(st, id) {
  return dbPromise
    .then((db) => {
      const tx = db.transaction(st, 'readwrite');
      const store = tx.objectStore(st);
      store.delete(id);
      return tx.complete;
    });
}

export function clearAllIDBStores() {
  return dbPromise.then((db) => {
    Object.values(db.objectStoreNames).forEach((st) => {
      clearAllData(st);
    });
  });
}