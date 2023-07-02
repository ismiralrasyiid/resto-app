import API from '../../public/data/API';
import HeroSection from '../components/HeroSection';
import LineProgressBar from '../components/LineProgressBar';
import Notification from '../components/Notification';
import RestaurantSection from '../components/RestaurantSection';
import createListElements from '../components/utils/createListElements';
import createRestaurantItem from '../components/utils/createRestaurantItem';
import getAppShellWithContents from '../components/utils/getAppShellWithContents';

export default class Home extends HTMLElement {
  async connectedCallback() {
    this.setAttribute('role', 'Page');
    this.setAttribute('aria-label', 'Home');

    getAppShellWithContents(HeroSection, RestaurantSection).forEach((element) => {
      this.appendChild(element);
    });

    try {
      LineProgressBar.animate(1);
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });

      const restaurants = await API.getRestaurants();
      const RestaurantItems = restaurants.map((restaurant) => createRestaurantItem(restaurant));
      const RestaurantList = createListElements(...RestaurantItems);
      RestaurantList.id = 'restaurantList';
      RestaurantSection.removeChild(RestaurantSection.children[1]);
      RestaurantSection.appendChild(RestaurantList);
    } catch {
      Notification.failure();
    } finally {
      LineProgressBar.set(0);
    }
  }

  disconnectedCallback() {
    this.innerHTML = null;
  }
}
