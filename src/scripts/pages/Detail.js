import API from '../../public/data/API';
import IDB from '../../public/data/IDB';
import DetailSection from '../components/DetailSection';
import LineProgressBar from '../components/LineProgressBar';
import Notification from '../components/Notification';
import createDetailSection from '../components/utils/createDetailSection';
import getAppShellWithContents from '../components/utils/getAppShellWithContents';
import UrlParser from '../routes/urlParser';

export default class Detail extends HTMLElement {
  async connectedCallback() {
    this.setAttribute('role', 'Page');
    this.setAttribute('aria-label', 'Detail');

    getAppShellWithContents(DetailSection).forEach((element) => {
      this.appendChild(element);
    });

    try {
      LineProgressBar.animate(1);

      const { id } = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await IDB.NewRestaurant.get(id) || await API.getRestaurantDetail(id);
      const NewDetailSection = await createDetailSection(restaurant);

      this.innerHTML = null;
      getAppShellWithContents(NewDetailSection).forEach((element) => {
        this.appendChild(element);
      });
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
