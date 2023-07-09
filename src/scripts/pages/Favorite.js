import IDB from '../../public/data/IDB';
import LineProgressBar from '../components/LineProgressBar';
import FavoriteSection from '../components/FavoriteSection';
import createListElements from '../components/utils/createListElements';
import createRestaurantItem from '../components/utils/createRestaurantItem';
import getAppShellWithContents from '../components/utils/getAppShellWithContents';

export default class Favorite extends HTMLElement {
  async connectedCallback() {
    this.setAttribute('role', 'Page');
    this.setAttribute('aria-label', 'Favorite');

    getAppShellWithContents(FavoriteSection).forEach((element) => {
      this.appendChild(element);
    });

    try {
      LineProgressBar.animate(1);

      const restaurants = await IDB.FavoriteRestaurant.getAll();
      const RestaurantItems = restaurants.map((restaurant) => createRestaurantItem(restaurant));
      const RestaurantList = createListElements(...RestaurantItems);
      RestaurantList.id = 'restaurantList';

      if (restaurants.length === 0) {
        const NoRestaurant = document.createElement('p');
        NoRestaurant.innerText = 'Tidak ada restoran favorit';
        FavoriteSection.replaceChild(NoRestaurant, FavoriteSection.children[1]);
      } else {
        FavoriteSection.replaceChild(RestaurantList, FavoriteSection.children[1]);
      }
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
