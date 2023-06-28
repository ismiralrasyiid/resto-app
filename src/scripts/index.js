import 'regenerator-runtime';
import '../styles/reset.css';
import 'toastify-js/src/toastify.css';
import '../styles/global.css';
import '../styles/header.css';
import '../styles/heroSection.css';
import '../styles/restaurantSection.css';
import '../styles/askReviewSection.css';
import '../styles/footer.css';
import UrlParser from './routes/urlParser';
import routes from './routes/routes';

const rootContainer = document.getElementById('root');

window.addEventListener('load', () => {
  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];
  rootContainer.appendChild(page);
});

window.addEventListener('hashchange', () => {
  const url = UrlParser.parseActiveUrlWithCombiner();
  const page = routes[url];

  rootContainer.innerHTML = null;
  rootContainer.appendChild(page);
});
