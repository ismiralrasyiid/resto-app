import 'regenerator-runtime';
import '../styles/reset.css';
import 'toastify-js/src/toastify.css';
import '../styles/global.css';
import '../styles/header.css';
import '../styles/heroSection.css';
import '../styles/restaurantSection.css';
import '../styles/askReviewSection.css';
import '../styles/detailSection.css';
import '../styles/footer.css';
import App from './App';
import registerSW from './sw/registerSW';
import UrlParser from './routes/urlParser';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const rootContainer = document.getElementById('root');

window.addEventListener('load', () => {
  rootContainer.appendChild(App.Page());
  registerSW();
});

window.addEventListener('hashchange', () => {
  if (UrlParser.isException()) return;
  rootContainer.innerHTML = null;
  window.blur();
  window.scroll(0, 0);
  rootContainer.appendChild(App.Page());
});
