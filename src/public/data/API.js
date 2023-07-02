const BaseURL = 'https://restaurant-api.dicoding.dev';

const API = {
  async getRestaurants() {
    const response = await fetch(`${BaseURL}/list`);
    const responseJson = await response.json();
    const { restaurants } = responseJson;

    return restaurants;
  },
  async getRestaurantDetail(id) {
    const response = await fetch(`${BaseURL}/detail/${id}`);
    const responseJson = await response.json();
    const { restaurant } = responseJson;

    return restaurant;
  },
  async addReview(body) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${BaseURL}/review`, options);
    const responseJson = await response.json();
    const { customerReviews } = responseJson;

    return customerReviews;
  },
};

export default API;
