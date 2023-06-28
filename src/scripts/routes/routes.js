import AskReview from '../pages/AskReview';
import Detail from '../pages/Detail';
import Favorite from '../pages/Favorite';
import Home from '../pages/Home';

customElements.define('home-page', Home);
customElements.define('detail-page', Detail);
customElements.define('askreview-page', AskReview);
customElements.define('favorite-page', Favorite);

const HomePage = document.createElement('home-page');
const DetailPage = document.createElement('detail-page');
const AskReviewPage = document.createElement('askreview-page');
const FavoritePage = document.createElement('favorite-page');

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/favorite': FavoritePage,
  '/askreview': AskReviewPage,
  '/detail/:id': DetailPage,
};

export default routes;
