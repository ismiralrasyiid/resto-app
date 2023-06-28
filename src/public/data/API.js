const BaseURL = 'https://restaurant-api.dicoding.dev';

const API = {
  async getRestaurants() {
    const response = await fetch(`${BaseURL}/list`);
    const responseJson = await response.json();
    const { restaurants } = responseJson;

    return restaurants;
  },
};

export default API;