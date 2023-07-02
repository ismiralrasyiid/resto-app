import { openDB } from 'idb';

const DATABASE_NAME = 'restaurant-catalogue-database';
const DATABASE_VERSION = 1;
const RESTAURANT_STORE_NAME = 'restaurants';
const NEW_RESTAURANT_STORE_NAME = 'new-restaurants';

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(NEW_RESTAURANT_STORE_NAME, { keyPath: 'id' });
    database.createObjectStore(RESTAURANT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteRestaurant = {
  async get(id) {
    return (await dbPromise).get(RESTAURANT_STORE_NAME, id);
  },
  async getAll() {
    return (await dbPromise).getAll(RESTAURANT_STORE_NAME);
  },
  async put(restaurant) {
    return (await dbPromise).put(RESTAURANT_STORE_NAME, restaurant);
  },
  async delete(id) {
    return (await dbPromise).delete(RESTAURANT_STORE_NAME, id);
  },
};

const NewRestaurant = {
  async get(id) {
    return (await dbPromise).get(NEW_RESTAURANT_STORE_NAME, id);
  },
  async getAll() {
    return (await dbPromise).getAll(NEW_RESTAURANT_STORE_NAME);
  },
  async put(restaurant) {
    return (await dbPromise).put(NEW_RESTAURANT_STORE_NAME, restaurant);
  },
};

const IDB = { FavoriteRestaurant, NewRestaurant };

export default IDB;
